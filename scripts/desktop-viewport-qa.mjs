import { spawn } from "node:child_process";
import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, "..");
const OUT_DIR = fs.existsSync("/tmp/aybar-qa/out")
  ? "/tmp/aybar-qa/out"
  : path.join(REPO_ROOT, "out");
const SCREENSHOTS_DIR = path.join(REPO_ROOT, "qa-shots", "desktop-qa");
const CHROME_PATH = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const PORT = 9338;
const HTTP_PORT = 3012;
const BASE_URL = `http://127.0.0.1:${HTTP_PORT}`;

fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
};

function startStaticServer() {
  const server = http.createServer((req, res) => {
    let reqPath = decodeURIComponent(
      new URL(req.url, `http://localhost:${HTTP_PORT}`).pathname
    );
    let filePath = path.join(OUT_DIR, reqPath);

    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      if (!reqPath.endsWith("/")) {
        res.writeHead(301, { Location: reqPath + "/" });
        res.end();
        return;
      }
      filePath = path.join(filePath, "index.html");
    }
    if (!fs.existsSync(filePath) && fs.existsSync(`${filePath}.html`)) {
      filePath = `${filePath}.html`;
    }

    if (!fs.existsSync(filePath)) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end(`Not Found: ${reqPath}`);
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || "application/octet-stream";
    res.writeHead(200, { "Content-Type": contentType });
    fs.createReadStream(filePath).pipe(res);
  });

  return new Promise((resolve) => {
    server.listen(HTTP_PORT, "127.0.0.1", () => {
      console.log(`[HTTP] Static server serving ${OUT_DIR} at ${BASE_URL}`);
      resolve(server);
    });
  });
}

class CDPSession {
  constructor(wsUrl) {
    this.ws = new WebSocket(wsUrl);
    this.id = 0;
    this.pending = new Map();
    this.ready = new Promise((resolve, reject) => {
      this.ws.addEventListener("open", resolve);
      this.ws.addEventListener("error", reject);
    });
    this.ws.addEventListener("message", (ev) => {
      const msg = JSON.parse(ev.data.toString());
      if (msg.id && this.pending.has(msg.id)) {
        const { resolve, reject } = this.pending.get(msg.id);
        this.pending.delete(msg.id);
        if (msg.error) reject(new Error(JSON.stringify(msg.error)));
        else resolve(msg.result);
      }
    });
  }

  async send(method, params = {}) {
    await this.ready;
    const id = ++this.id;
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }

  close() {
    this.ws.close();
  }
}

async function runDesktopQA() {
  console.log("=== Starting AYBAR AKADEMİ Desktop & Laptop Viewport QA Suite ===");
  const server = await startStaticServer();

  const chromeProfile = path.join(SCREENSHOTS_DIR, ".chrome-profile");
  fs.rmSync(chromeProfile, { recursive: true, force: true });

  const chrome = spawn(
    CHROME_PATH,
    [
      "--headless=new",
      `--remote-debugging-port=${PORT}`,
      `--user-data-dir=${chromeProfile}`,
      "--no-first-run",
      "--no-default-browser-check",
      "--disable-gpu",
      "--hide-scrollbars",
      "about:blank",
    ],
    { stdio: "ignore" }
  );

  let versionInfo = null;
  for (let i = 0; i < 30; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${PORT}/json/version`);
      if (res.ok) {
        versionInfo = await res.json();
        break;
      }
    } catch {}
    await sleep(250);
  }

  if (!versionInfo) {
    chrome.kill();
    server.close();
    throw new Error("Failed to connect to headless Chrome via CDP");
  }

  const targetsRes = await fetch(`http://127.0.0.1:${PORT}/json/list`);
  const targets = await targetsRes.json();
  const pageTarget = targets.find((t) => t.type === "page");
  const cdp = new CDPSession(pageTarget.webSocketDebuggerUrl);

  await cdp.send("Page.enable");
  await cdp.send("Runtime.enable");
  await cdp.send("DOM.enable");

  const viewports = [
    { label: "1024px", width: 1024, height: 768, note: "Minimum Desktop (lg start)" },
    { label: "1100px", width: 1100, height: 800, note: "Mid-lg Desktop" },
    { label: "1200px", width: 1200, height: 800, note: "Upper-lg Desktop" },
    { label: "1280px", width: 1280, height: 800, note: "Standard Desktop (xl start)" },
    { label: "1366px", width: 1366, height: 768, note: "Common HD Laptop" },
    { label: "1440px", width: 1440, height: 900, note: "MacBook & WXGA+ Desktop" },
    { label: "1920px", width: 1920, height: 1080, note: "Full HD 1080p Desktop (2xl)" },
  ];

  const routes = [
    { slug: "home", path: "/", name: "Ana Sayfa" },
    { slug: "hakkimizda", path: "/hakkimizda/", name: "Hakkımızda" },
    { slug: "programlar", path: "/egitim-programlarimiz/", name: "Eğitim Programlarımız" },
    { slug: "model", path: "/egitim-modelimiz/", name: "Eğitim Modelimiz" },
    { slug: "farkimiz", path: "/neden-farkliyiz/", name: "Neden Farklıyız?" },
    { slug: "iletisim", path: "/iletisim/", name: "İletişim" },
  ];

  const fullReport = [];
  let totalTests = 0;
  let passCount = 0;
  let failCount = 0;

  for (const vp of viewports) {
    console.log(`\n----------------------------------------------------------------------`);
    console.log(`Testing Viewport: ${vp.label} (${vp.width}x${vp.height}) - ${vp.note}`);
    console.log(`----------------------------------------------------------------------`);

    await cdp.send("Emulation.setDeviceMetricsOverride", {
      width: vp.width,
      height: vp.height,
      deviceScaleFactor: 2,
      mobile: false,
    });

    for (const r of routes) {
      totalTests++;
      const url = `${BASE_URL}${r.path}`;
      await cdp.send("Page.navigate", { url });
      await sleep(800);

      // Evaluate detailed navbar, page overflow, grids, broken images
      const evalRes = await cdp.send("Runtime.evaluate", {
        returnByValue: true,
        awaitPromise: true,
        expression: `(() => {
          const docEl = document.documentElement;
          const winWidth = window.innerWidth;
          const docScrollWidth = docEl.scrollWidth;
          const hasHorizontalOverflow = docScrollWidth > winWidth + 1;

          // Header & Nav Analysis
          const header = document.querySelector("header");
          const headerRect = header ? header.getBoundingClientRect() : null;
          const headerScrollWidth = header ? header.scrollWidth : 0;
          const headerClientWidth = header ? header.clientWidth : 0;
          const headerOverflow = headerScrollWidth > headerClientWidth;

          const nav = document.querySelector('nav[aria-label="Ana Menü"]');
          const navStyle = nav ? window.getComputedStyle(nav) : null;
          const navVisible = nav && navStyle.display !== "none" && navStyle.visibility !== "hidden";
          const navRect = nav ? nav.getBoundingClientRect() : null;
          const navScrollWidth = nav ? nav.scrollWidth : 0;
          const navClientWidth = nav ? nav.clientWidth : 0;
          const navOverflow = navScrollWidth > navClientWidth;

          // Navigation Links
          const links = nav ? Array.from(nav.querySelectorAll("a")) : [];
          const linkDetails = links.map((a, idx) => {
            const rect = a.getBoundingClientRect();
            const text = (a.innerText || "").trim().replace(/\\s+/g, " ");
            const hasTextOverflow = a.scrollWidth > a.clientWidth;
            return {
              idx,
              href: a.getAttribute("href"),
              text,
              top: Math.round(rect.top),
              bottom: Math.round(rect.bottom),
              left: Math.round(rect.left),
              right: Math.round(rect.right),
              width: Math.round(rect.width),
              height: Math.round(rect.height),
              hasTextOverflow,
            };
          });

          // Check if links are on a single horizontal row (no wrapping!)
          let linksWrapped = false;
          let minTop = Infinity;
          let maxTop = -Infinity;
          if (linkDetails.length > 0) {
            minTop = Math.min(...linkDetails.map((l) => l.top));
            maxTop = Math.max(...linkDetails.map((l) => l.top));
            linksWrapped = maxTop - minTop > 4;
          }

          // Check horizontal gaps between adjacent links
          let minLinkGap = Infinity;
          for (let i = 0; i < linkDetails.length - 1; i++) {
            const gap = linkDetails[i + 1].left - linkDetails[i].right;
            if (gap < minLinkGap) minLinkGap = gap;
          }
          const isNavCramped = minLinkGap < 2;

          // Logo check
          const logo = header ? header.querySelector("a[href='/']") : null;
          const logoRect = logo ? logo.getBoundingClientRect() : null;
          const logoNavGap = (navRect && logoRect) ? Math.round(navRect.left - logoRect.right) : 0;

          // Desktop CTA check
          const ctas = header ? Array.from(header.querySelectorAll("a")).filter(a => {
            return a.className.includes("bg-crimson-600") && window.getComputedStyle(a).display !== "none";
          }) : [];
          const desktopCta = ctas[0];
          const ctaRect = desktopCta ? desktopCta.getBoundingClientRect() : null;
          const navCtaGap = (navRect && ctaRect) ? Math.round(ctaRect.left - navRect.right) : 0;
          const ctaWithinHeader = ctaRect && headerRect ? ctaRect.right <= headerRect.right + 2 : false;

          // Mobile hamburger check (must be hidden on desktop)
          const mobileButton = header ? header.querySelector('button[aria-controls="mobile-drawer"]') : null;
          const mobileButtonVisible = mobileButton ? (window.getComputedStyle(mobileButton).display !== "none" && mobileButton.offsetWidth > 0) : false;

          // Grid & Layout Sections
          const heroGrid = document.querySelector("section:first-of-type .grid") || document.querySelector(".grid");
          let heroCols = 0;
          let heroColumnsSideBySide = false;
          let heroColSpanDetails = [];
          if (heroGrid) {
            const children = Array.from(heroGrid.children);
            heroCols = children.length;
            if (children.length >= 2) {
              const rect0 = children[0].getBoundingClientRect();
              const rect1 = children[1].getBoundingClientRect();
              // Mathematical side-by-side definition:
              // 1. Horizontally adjacent: rect0.right <= rect1.left + 25
              // 2. Vertically overlapping: rect0.bottom > rect1.top && rect1.bottom > rect0.top
              const isHorizontallyAdjacent = rect0.right <= rect1.left + 25;
              const isVerticallyOverlapping = rect0.bottom > rect1.top && rect1.bottom > rect0.top;
              heroColumnsSideBySide = isHorizontallyAdjacent && isVerticallyOverlapping;

              heroColSpanDetails = children.map(c => ({
                width: Math.round(c.getBoundingClientRect().width),
                height: Math.round(c.getBoundingClientRect().height),
                classes: c.className.slice(0, 60),
              }));
            }
          }

          // Stats 4-column grid check
          const statGrids = Array.from(document.querySelectorAll(".grid")).filter(g => {
            return g.className.includes("lg:grid-cols-4");
          });
          const statGridDetails = statGrids.map(g => {
            const items = Array.from(g.children);
            const tops = items.map(c => Math.round(c.getBoundingClientRect().top));
            const widths = items.map(c => Math.round(c.getBoundingClientRect().width));
            const allSameRow = (Math.max(...tops) - Math.min(...tops)) < 25;
            return {
              itemCount: items.length,
              allSameRow,
              widths,
              minWidth: Math.min(...widths),
            };
          });

          // Broken images
          const brokenImages = Array.from(document.images)
            .filter(img => img.complete && img.naturalWidth === 0)
            .map(img => img.getAttribute("src"));

          // Elements with horizontal overflow if any
          const overflowingElements = [];
          if (hasHorizontalOverflow) {
            const allEls = document.querySelectorAll("*");
            for (const el of allEls) {
              const r = el.getBoundingClientRect();
              if (r.right > winWidth + 2 && r.width > 0) {
                overflowingElements.push({
                  tag: el.tagName.toLowerCase(),
                  id: el.id,
                  class: el.className.toString().slice(0, 70),
                  right: Math.round(r.right),
                  excess: Math.round(r.right - winWidth),
                });
                if (overflowingElements.length >= 5) break;
              }
            }
          }

          return {
            pageTitle: document.title,
            winWidth,
            docScrollWidth,
            hasHorizontalOverflow,
            overflowingElements,
            brokenImages,
            navbar: {
              headerHeight: headerRect ? Math.round(headerRect.height) : 0,
              headerScrollWidth,
              headerClientWidth,
              headerOverflow,
              navVisible,
              navOverflow,
              navScrollWidth,
              navClientWidth,
              linkCount: linkDetails.length,
              linksWrapped,
              isNavCramped,
              minLinkGap,
              links: linkDetails,
              logoNavGap,
              navCtaGap,
              desktopCtaVisible: !!desktopCta,
              ctaWithinHeader,
              mobileButtonVisible,
            },
            hero: {
              heroCols,
              heroColumnsSideBySide,
              heroColSpanDetails,
            },
            statGrids: statGridDetails,
          };
        })()`,
      });

      const data = evalRes.result.value;

      // Evaluation criteria
      const isNavbarValid =
        !data.navbar.headerOverflow &&
        !data.navbar.navOverflow &&
        data.navbar.navVisible &&
        !data.navbar.linksWrapped &&
        !data.navbar.isNavCramped &&
        data.navbar.linkCount === 6 &&
        data.navbar.desktopCtaVisible &&
        data.navbar.ctaWithinHeader &&
        !data.navbar.mobileButtonVisible &&
        data.navbar.logoNavGap >= 0 &&
        data.navbar.navCtaGap >= 0;

      const isLayoutValid =
        !data.hasHorizontalOverflow &&
        (data.hero.heroCols < 2 || data.hero.heroColumnsSideBySide) &&
        data.brokenImages.length === 0;

      const isPass = isNavbarValid && isLayoutValid;

      if (isPass) {
        passCount++;
      } else {
        failCount++;
      }

      console.log(
        `  ${isPass ? "✓ PASS" : "✗ FAIL"} [${r.slug.padEnd(11)}] ` +
        `Links: ${data.navbar.linkCount} (${data.navbar.linksWrapped ? "WRAP ERR" : "1-row"}), ` +
        `Gaps (logo:${data.navbar.logoNavGap}px, cta:${data.navbar.navCtaGap}px), ` +
        `H-Overflow: ${data.hasHorizontalOverflow ? "YES (" + data.docScrollWidth + "px)" : "None (0px)"}, ` +
        `Hero Side-by-Side: ${data.hero.heroColumnsSideBySide ? "YES" : "N/A"}`
      );

      // Save top screenshot
      const shotTop = await cdp.send("Page.captureScreenshot", {
        format: "png",
      });
      fs.writeFileSync(
        path.join(SCREENSHOTS_DIR, `${vp.width}px-${r.slug}-top.png`),
        Buffer.from(shotTop.data, "base64")
      );

      fullReport.push({
        viewport: vp.label,
        viewportWidth: vp.width,
        viewportHeight: vp.height,
        routeSlug: r.slug,
        routePath: r.path,
        routeName: r.name,
        passed: isPass,
        checks: {
          isNavbarValid,
          isLayoutValid,
        },
        data,
      });
    }
  }

  // Save report to disk
  const reportPath = path.join(SCREENSHOTS_DIR, "desktop-qa-report.json");
  fs.writeFileSync(reportPath, JSON.stringify(fullReport, null, 2));

  console.log(`\n======================================================================`);
  console.log(`FINAL RESULT: ${passCount} / ${totalTests} PASSED (${failCount} failures).`);
  console.log(`Report JSON: ${reportPath}`);
  console.log(`Screenshots: ${SCREENSHOTS_DIR}`);
  console.log(`======================================================================`);

  cdp.close();
  chrome.kill();
  server.close();
}

runDesktopQA().catch((err) => {
  console.error("FATAL QA ERROR:", err);
  process.exit(1);
});
