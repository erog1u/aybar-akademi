import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, "..");

const CHROME_PATH =
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const BASE_URL = process.env.BASE_URL || "http://localhost:3000";
const OUT_DIR = path.resolve(
  process.env.OUT_DIR || path.join(REPO_ROOT, "qa-shots")
);
const PORT = 9339;

fs.mkdirSync(OUT_DIR, { recursive: true });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

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

async function runAudit() {
  const userDataDir = path.join(OUT_DIR, ".chrome-profile");
  fs.rmSync(userDataDir, { recursive: true, force: true });

  const chrome = spawn(
    CHROME_PATH,
    [
      "--headless=new",
      `--remote-debugging-port=${PORT}`,
      `--user-data-dir=${userDataDir}`,
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
    throw new Error("Failed to connect to headless Chrome");
  }

  const targetsRes = await fetch(`http://127.0.0.1:${PORT}/json/list`);
  const targets = await targetsRes.json();
  const pageTarget = targets.find((t) => t.type === "page");
  const cdp = new CDPSession(pageTarget.webSocketDebuggerUrl);

  await cdp.send("Page.enable");
  await cdp.send("Runtime.enable");
  await cdp.send("DOM.enable");

  const routes = [
    { slug: "home", path: "/" },
    { slug: "hakkimizda", path: "/hakkimizda" },
    { slug: "programlar", path: "/egitim-programlarimiz" },
    { slug: "model", path: "/egitim-modelimiz" },
    { slug: "farkimiz", path: "/neden-farkliyiz" },
    { slug: "iletisim", path: "/iletisim" },
  ];

  const report = [];

  for (const vp of [
    { name: "mobile", width: 390, height: 780, mobile: true, scale: 2 },
    { name: "tablet", width: 768, height: 920, mobile: true, scale: 2 },
    { name: "desktop", width: 1440, height: 900, mobile: false, scale: 2 },
  ]) {
    await cdp.send("Emulation.setDeviceMetricsOverride", {
      width: vp.width,
      height: vp.height,
      deviceScaleFactor: vp.scale,
      mobile: vp.mobile,
    });

    for (const r of routes) {
      const url = `${BASE_URL}${r.path}`;
      await cdp.send("Page.navigate", { url });
      await sleep(1200);

      // Top viewport screenshot
      const shotTop = await cdp.send("Page.captureScreenshot", {
        format: "png",
      });
      fs.writeFileSync(
        path.join(OUT_DIR, `${vp.name}-${r.slug}-top.png`),
        Buffer.from(shotTop.data, "base64")
      );

      // Scroll and inspect geometry + forbidden words
      const evalRes = await cdp.send("Runtime.evaluate", {
        returnByValue: true,
        awaitPromise: true,
        expression: `(async () => {
          const sleep = (ms) => new Promise(res => setTimeout(res, ms));
          const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
          for (let y = 0; y <= maxScroll; y += 550) {
            window.scrollTo(0, y);
            await sleep(50);
          }
          window.scrollTo(0, Math.min(620, maxScroll));
          await sleep(250);

          const docWidth = document.documentElement.scrollWidth;
          const winWidth = window.innerWidth;
          const brokenImages = Array.from(document.images)
            .filter(img => img.complete && img.naturalWidth === 0)
            .map(img => img.getAttribute('src'));

          const header = document.querySelector('header');
          const headerRect = header ? header.getBoundingClientRect() : null;

          const bodyLower = (document.body.innerText || '').toLocaleLowerCase('tr');
          const forbidden = ['garanti', 'kutup 0', 'modül #', 'standart özel ders vs'];
          const foundForbidden = forbidden.filter(w => bodyLower.includes(w));

          return {
            scrollWidth: docWidth,
            innerWidth: winWidth,
            hasHorizontalOverflow: docWidth > winWidth + 1,
            brokenImages,
            headerHeight: headerRect ? Math.round(headerRect.height) : 0,
            foundForbidden,
          };
        })()`,
      });

      const shotMid = await cdp.send("Page.captureScreenshot", {
        format: "png",
      });
      fs.writeFileSync(
        path.join(OUT_DIR, `${vp.name}-${r.slug}-scrolled.png`),
        Buffer.from(shotMid.data, "base64")
      );

      report.push({
        viewport: vp.name,
        route: r.path,
        ...evalRes.result.value,
      });
    }
  }

  // Studio check
  await cdp.send("Emulation.setDeviceMetricsOverride", {
    width: 1440,
    height: 860,
    deviceScaleFactor: 2,
    mobile: false,
  });

  for (const cfg of [
    { name: "mobile-home", qs: "mode=mobile&route=/&zoom=actual" },
    { name: "mobile-programlar", qs: "mode=mobile&route=/egitim-programlarimiz&zoom=actual" },
    { name: "dual-home", qs: "mode=dual&route=/" },
  ]) {
    await cdp.send("Page.navigate", {
      url: `${BASE_URL}/onizleme?${cfg.qs}`,
    });
    await sleep(2000);
    const shotSim = await cdp.send("Page.captureScreenshot", {
      format: "png",
    });
    fs.writeFileSync(
      path.join(OUT_DIR, `studio-${cfg.name}.png`),
      Buffer.from(shotSim.data, "base64")
    );
  }

  fs.writeFileSync(
    path.join(OUT_DIR, "audit-report.json"),
    JSON.stringify(report, null, 2)
  );
  console.log("AUDIT V3 COMPLETE. Saved report & screenshots to:", OUT_DIR);

  cdp.close();
  chrome.kill();
}

runAudit().catch((err) => {
  console.error(err);
  process.exit(1);
});
