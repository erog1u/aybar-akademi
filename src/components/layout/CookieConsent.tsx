"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

// GTM yalnız bu değişken verilmiş derlemede ve ziyaretçi "Kabul et" dedikten sonra yüklenir.
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "";
const KEY = "cerez-onay"; // "kabul" | "red"
const OPEN_EVENT = "cerez-tercih-ac";

type DL = { dataLayer?: Record<string, unknown>[] };

function readChoice(): string | null {
  try { return localStorage.getItem(KEY); } catch { return null; }
}

export function hasAdConsent() {
  return !!GTM_ID && readChoice() === "kabul";
}

export function pushEvent(event: string) {
  if (!hasAdConsent()) return;
  const w = window as unknown as DL;
  (w.dataLayer = w.dataLayer || []).push({ event });
}

export function openCookiePreferences() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

// Daha önce verilen onayla yazılmış Google çerezlerini (_ga, _gid, _gcl...) siler.
function clearGoogleCookies() {
  // Çerez hangi üst alan adına yazıldıysa silinsin diye tüm üst alan adları denenir.
  const parts = location.hostname.split(".");
  const domains = [""].concat(parts.slice(0, -1).map((_, i) => "." + parts.slice(i).join(".")));
  for (const c of document.cookie.split(";")) {
    const name = c.split("=")[0].trim();
    if (!/^(_ga|_gid|_gcl|_gat)/.test(name)) continue;
    for (const d of domains) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${d ? `; domain=${d}` : ""}`;
    }
  }
}

function loadGtm() {
  if (document.getElementById("gtm-js")) return;
  const w = window as unknown as DL;
  (w.dataLayer = w.dataLayer || []).push({ "gtm.start": Date.now(), event: "gtm.js" });
  const s = document.createElement("script");
  s.id = "gtm-js";
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(s);
}

export default function CookieConsent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!GTM_ID) return;
    const c = readChoice();
    if (c === "kabul") loadGtm();
    else if (c !== "red") setOpen(true);
    const show = () => setOpen(true);
    window.addEventListener(OPEN_EVENT, show);
    return () => window.removeEventListener(OPEN_EVENT, show);
  }, []);

  if (!GTM_ID || !open) return null;

  const choose = (v: "kabul" | "red") => {
    try { localStorage.setItem(KEY, v); } catch {}
    setOpen(false);
    if (v === "kabul") { loadGtm(); return; }
    clearGoogleCookies();
    // Onay geri alınırsa yüklenmiş etiketler ancak sayfa yenilenince durur.
    if (document.getElementById("gtm-js")) window.location.reload();
  };

  const btn = "min-h-12 flex-1 sm:flex-none sm:px-6 rounded-xl border border-cobalt-900/20 bg-white text-ink font-semibold hover:bg-cobalt-50";

  return (
    <div role="dialog" aria-label="Çerez tercihi" className="fixed inset-x-0 bottom-0 z-[70] p-3 sm:p-4">
      <div className="mx-auto max-w-3xl rounded-2xl border border-cobalt-900/15 bg-white p-4 sm:p-5 shadow-xl text-sm text-ink">
        <p>
          Reklam ve ölçüm amaçlı çerezleri yalnız onay verirseniz kullanırız. Zorunlu olmayan bu çerezleri reddedebilirsiniz.{" "}
          <Link href="/cerez-politikasi/" className="underline">Çerez Politikası</Link>
        </p>
        <div className="mt-3 flex gap-3">
          <button type="button" className={btn} onClick={() => choose("red")}>Reddet</button>
          <button type="button" className={btn} onClick={() => choose("kabul")}>Kabul et</button>
        </div>
      </div>
    </div>
  );
}
