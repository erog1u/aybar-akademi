import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, "..");

const CHROME_PATH =
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const PORT = 9342;

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

async function generateOgImage() {
  const emblemPath = path.join(REPO_ROOT, "public/images/logo-seal.png");
  const heroPath = path.join(REPO_ROOT, "public/images/hero-one-on-one.jpg");

  const emblemBase64 = `data:image/png;base64,${fs.readFileSync(emblemPath).toString("base64")}`;
  const heroBase64 = `data:image/jpeg;base64,${fs.readFileSync(heroPath).toString("base64")}`;

  const htmlContent = `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      width: 1200px;
      height: 630px;
      overflow: hidden;
      font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
      background-color: #0044B5;
      background-image:
        radial-gradient(rgba(255, 255, 255, 0.12) 1.5px, transparent 1.5px),
        linear-gradient(135deg, #0054DE 0%, #0044B5 48%, #051A48 100%);
      background-size: 24px 24px, 100% 100%;
      color: #ffffff;
      position: relative;
    }

    .ambient-glow-1 {
      position: absolute;
      top: -80px;
      left: -80px;
      width: 480px;
      height: 480px;
      background: radial-gradient(circle, rgba(56, 189, 248, 0.22) 0%, transparent 70%);
      pointer-events: none;
    }
    .ambient-glow-2 {
      position: absolute;
      bottom: -100px;
      right: 100px;
      width: 520px;
      height: 520px;
      background: radial-gradient(circle, rgba(220, 27, 46, 0.25) 0%, transparent 70%);
      pointer-events: none;
    }

    .container {
      width: 1200px;
      height: 630px;
      padding: 48px 56px 42px 56px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
      z-index: 10;
    }

    /* Top Brand Header */
    .brand-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .brand-lockup {
      display: flex;
      align-items: center;
      gap: 16px;
    }
    .emblem-wrapper {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: #ffffff;
      padding: 2px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
      border: 2px solid rgba(255, 255, 255, 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }
    .emblem-wrapper img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: 50%;
    }
    .brand-text {
      display: flex;
      flex-direction: column;
    }
    .brand-name {
      font-family: 'Montserrat', sans-serif;
      font-weight: 900;
      font-size: 24px;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      line-height: 1;
    }
    .brand-name span.light { color: #ffffff; }
    .brand-name span.accent { color: #BAE6FD; }
    .brand-sub {
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.85);
      margin-top: 4px;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .brand-sub .dot {
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: #DC1B2E;
    }

    .top-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 18px;
      background: rgba(255, 255, 255, 0.12);
      border: 1px solid rgba(255, 255, 255, 0.28);
      border-radius: 999px;
      font-size: 13px;
      font-weight: 800;
      letter-spacing: 0.04em;
      color: #ffffff;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
    .radar-dot {
      width: 9px;
      height: 9px;
      border-radius: 50%;
      background: #34D399;
      box-shadow: 0 0 10px #34D399;
    }

    /* Main Center Section */
    .main-grid {
      display: grid;
      grid-template-columns: 630px 420px;
      gap: 38px;
      align-items: center;
    }

    .headline {
      font-size: 46px;
      font-weight: 800;
      letter-spacing: -0.025em;
      line-height: 1.14;
    }
    .headline-dim {
      color: #CFE4FC;
    }
    .headline-crimson-box {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      margin-top: 10px;
      background: #DC1B2E;
      color: #ffffff;
      padding: 4px 20px 6px 16px;
      border-radius: 16px;
      font-family: 'Montserrat', sans-serif;
      font-weight: 900;
      font-size: 44px;
      letter-spacing: -0.02em;
      box-shadow: 0 8px 30px rgba(220, 27, 46, 0.55), 0 0 0 1px rgba(255, 255, 255, 0.35);
    }
    .pulse-white-dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: #ffffff;
      box-shadow: 0 0 12px #ffffff;
    }

    .lead-text {
      margin-top: 20px;
      font-size: 18px;
      line-height: 1.5;
      color: rgba(255, 255, 255, 0.92);
      font-weight: 500;
      max-width: 580px;
    }

    .pills-row {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 22px;
    }
    .pill {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 7px 14px;
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      font-size: 13px;
      font-weight: 700;
      color: #ffffff;
    }
    .pill-dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #60A5FA;
    }
    .pill-dot.green {
      background: #34D399;
    }

    /* Right Photo Frame */
    .photo-card {
      background: #ffffff;
      padding: 10px;
      border-radius: 24px;
      box-shadow: 0 25px 60px rgba(0, 0, 0, 0.45);
      border: 1px solid rgba(255, 255, 255, 0.4);
      position: relative;
    }
    .photo-card img {
      width: 100%;
      height: 270px;
      object-fit: cover;
      border-radius: 16px;
      display: block;
    }
    .photo-floating-badge {
      position: absolute;
      top: -12px;
      right: 18px;
      background: #DC1B2E;
      color: #ffffff;
      padding: 6px 14px;
      border-radius: 999px;
      font-size: 11px;
      font-weight: 900;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      box-shadow: 0 6px 18px rgba(220, 27, 46, 0.5);
      border: 1.5px solid #ffffff;
    }
    .photo-caption {
      margin-top: 10px;
      padding: 4px 6px 2px 6px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #08245E;
      font-size: 12px;
      font-weight: 800;
    }
    .photo-caption span.cta {
      color: #DC1B2E;
      font-weight: 900;
    }

    /* Bottom Footer Bar */
    .bottom-bar {
      border-top: 1px solid rgba(255, 255, 255, 0.16);
      padding-top: 14px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 13px;
      color: rgba(255, 255, 255, 0.8);
      font-weight: 600;
    }
    .bottom-url {
      color: #ffffff;
      font-weight: 800;
      letter-spacing: 0.04em;
    }
  </style>
</head>
<body>
  <div class="ambient-glow-1"></div>
  <div class="ambient-glow-2"></div>

  <div class="container">
    <!-- Top Header -->
    <div class="brand-row">
      <div class="brand-lockup">
        <div class="emblem-wrapper">
          <img src="${emblemBase64}" alt="AYBARİst AKADEMİ Arması">
        </div>
        <div class="brand-text">
          <div class="brand-name">
            <span style="background:#fff;border-radius:10px;padding:0 14px;color:#0044b5;-webkit-text-fill-color:#0044b5">AYBAR<span style="color:#dc1b2e;-webkit-text-fill-color:#dc1b2e;text-transform:none">İst</span> AKADEMİ</span>
          </div>
          <div class="brand-sub">
            <span>Eğitim</span>
            <span class="dot"></span>
            <span>Yayıncılık</span>
            <span class="dot"></span>
            <span>Danışmanlık</span>
          </div>
        </div>
      </div>

      <div class="top-badge">
        <span class="radar-dot"></span>
        <span>Maarif Modeline Uyumlu</span>
      </div>
    </div>

    <!-- Main Content Grid -->
    <div class="main-grid">
      <div class="main-left">
        <div class="headline">
          Eğitimde Güvenin,<br>
          <span class="headline-dim">Başarıda</span><br>
          <div class="headline-crimson-box">
            <span class="pulse-white-dot"></span>
            <span>Uzmanlığın Adresi</span>
          </div>
        </div>

        <p class="lead-text">
          33 yıllık köklü eğitim deneyimi ve uzman öğretmen kadromuzla; ilkokuldan üniversiteye birebir VIP özel ders ve eğitim koçluğu sunuyoruz.
        </p>

        <div class="pills-row">
          <div class="pill">
            <span class="pill-dot green"></span>
            <span>İstanbul’un Tüm İlçelerinde Yüz Yüze</span>
          </div>
          <div class="pill">
            <span class="pill-dot"></span>
            <span>Tüm Türkiye’de Online</span>
          </div>
        </div>
      </div>

      <div class="main-right">
        <div class="photo-card">
          <div class="photo-floating-badge">VIP Birebir Özel Ders</div>
          <img src="${heroBase64}" alt="AYBARİst AKADEMİ Birebir Eğitim">
          <div class="photo-caption">
            <span>33 Yıllık Köklü Tecrübe</span>
            <span class="cta">Birebir Özel Ders</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="bottom-bar">
      <div>
        © 2026 AYBARİst AKADEMİ · Bahadır AYBAR (Kurucu)
      </div>
      <div class="bottom-url">
        aybaristakademi.com
      </div>
    </div>
  </div>
</body>
</html>`;

  const tmpHtmlPath = path.join(REPO_ROOT, "qa-shots/og-card-template.html");
  fs.mkdirSync(path.dirname(tmpHtmlPath), { recursive: true });
  fs.writeFileSync(tmpHtmlPath, htmlContent);

  const userDataDir = path.join(REPO_ROOT, "qa-shots/.chrome-og-profile");
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
    await sleep(200);
  }

  if (!versionInfo) {
    chrome.kill();
    throw new Error("Headless Chrome could not start");
  }

  const targetsRes = await fetch(`http://127.0.0.1:${PORT}/json/list`);
  const targets = await targetsRes.json();
  const pageTarget = targets.find((t) => t.type === "page");
  const cdp = new CDPSession(pageTarget.webSocketDebuggerUrl);

  await cdp.send("Page.enable");
  await cdp.send("Emulation.setDeviceMetricsOverride", {
    width: 1200,
    height: 630,
    deviceScaleFactor: 2,
    mobile: false,
  });

  await cdp.send("Page.navigate", { url: `file://${tmpHtmlPath}` });
  await sleep(1800); // Allow webfonts & images to render

  const shotPng = await cdp.send("Page.captureScreenshot", { format: "png" });
  const shotJpg = await cdp.send("Page.captureScreenshot", { format: "jpeg", quality: 92 });

  const publicImages = path.join(REPO_ROOT, "public/images");
  const publicRoot = path.join(REPO_ROOT, "public");

  fs.writeFileSync(path.join(publicImages, "og-image.png"), Buffer.from(shotPng.data, "base64"));
  fs.writeFileSync(path.join(publicRoot, "og-image.png"), Buffer.from(shotPng.data, "base64"));

  fs.writeFileSync(path.join(publicImages, "og-image.jpg"), Buffer.from(shotJpg.data, "base64"));
  fs.writeFileSync(path.join(publicRoot, "og-image.jpg"), Buffer.from(shotJpg.data, "base64"));

  console.log("Successfully generated:");
  console.log(" - public/images/og-image.jpg (1200x630)");
  console.log(" - public/og-image.jpg (1200x630)");
  console.log(" - public/images/og-image.png (1200x630)");
  console.log(" - public/og-image.png (1200x630)");

  cdp.close();
  chrome.kill();
  await sleep(500);
  try {
    fs.rmSync(userDataDir, { recursive: true, force: true });
  } catch {}
}

generateOgImage().catch((err) => {
  console.error("OG Generation Failed:", err);
  process.exit(1);
});
