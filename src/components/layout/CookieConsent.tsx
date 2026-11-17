"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { IS_PREVIEW_MODE } from "@/config/site";

// Reklam ajansının kapsayıcısı (17.11.2026). Kimlik değişirse burası değişir; önizleme derlemesinde kapalı.
export const GTM_ID = IS_PREVIEW_MODE ? "" : process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-W7DQ2MDB";
const KEY = "cerez-onay";
const OPEN_EVENT = "cerez-tercih-ac";

type Choice = { analiz: boolean; reklam: boolean };
type DL = { dataLayer?: unknown[] };

function readChoice(): Choice | null {
  try {
    const v = localStorage.getItem(KEY);
    if (!v) return null;
    if (v === "kabul") return { analiz: true, reklam: true }; // eski kayıt biçimi
    if (v === "red") return { analiz: false, reklam: false };
    const c = JSON.parse(v);
    return { analiz: c.analiz === true, reklam: c.reklam === true };
  } catch {
    return null;
  }
}

const anyConsent = (c: Choice | null) => !!c && (c.analiz || c.reklam);

export function pushEvent(event: string) {
  if (!GTM_ID || !anyConsent(readChoice())) return;
  const w = window as unknown as DL;
  (w.dataLayer = w.dataLayer || []).push({ event });
}

export function openCookiePreferences() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

// Google İzin Modu: etiketler yalnız izin verilen kategoride çerez yazar.
function consentState(c: Choice) {
  const ad = c.reklam ? "granted" : "denied";
  return {
    analytics_storage: c.analiz ? "granted" : "denied",
    ad_storage: ad,
    ad_user_data: ad,
    ad_personalization: ad,
  };
}

// gtag komutları dizi değil arguments nesnesi olarak gönderilmeli (Google İzin Modu bunu bekler).
function gtag(..._args: unknown[]) {
  const w = window as unknown as DL;
  w.dataLayer = w.dataLayer || [];
  // eslint-disable-next-line prefer-rest-params
  w.dataLayer.push(arguments);
}

function loadGtm(c: Choice) {
  if (document.getElementById("gtm-js")) return;
  gtag("consent", "default", consentState(c));
  const w = window as unknown as DL;
  (w.dataLayer = w.dataLayer || []).push({ "gtm.start": Date.now(), event: "gtm.js" });
  const s = document.createElement("script");
  s.id = "gtm-js";
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(s);
}

// İzni geri alınan kategorinin Google çerezlerini (_ga.. analiz, _gcl.. reklam) siler.
function clearCookies(c: Choice) {
  const parts = location.hostname.split(".");
  const domains = [""].concat(parts.slice(0, -1).map((_, i) => "." + parts.slice(i).join(".")));
  for (const raw of document.cookie.split(";")) {
    const name = raw.split("=")[0].trim();
    const drop = (!c.analiz && /^(_ga|_gid|_gat)/.test(name)) || (!c.reklam && /^_gcl/.test(name));
    if (!drop) continue;
    for (const d of domains) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${d ? `; domain=${d}` : ""}`;
    }
  }
}

function Toggle({ id, label, desc, checked, onChange, locked }: {
  id: string; label: string; desc: string; checked: boolean; onChange?: (v: boolean) => void; locked?: boolean;
}) {
  return (
    <label htmlFor={id} className={`flex items-start justify-between gap-4 rounded-xl border border-cobalt-900/10 p-3 ${locked ? "" : "cursor-pointer"}`}>
      <span>
        <span className="block font-semibold text-ink">{label}</span>
        <span className="block text-[13px] text-ink/70">{desc}</span>
      </span>
      <span className="relative mt-0.5 shrink-0">
        <input
          id={id}
          type="checkbox"
          role="switch"
          className="peer sr-only"
          checked={checked}
          disabled={locked}
          onChange={(e) => onChange?.(e.target.checked)}
        />
        <span className="block h-7 w-12 rounded-full bg-cobalt-900/20 transition-colors peer-checked:bg-cobalt-700 peer-disabled:opacity-60 peer-focus-visible:ring-2 peer-focus-visible:ring-cobalt-700 peer-focus-visible:ring-offset-2" />
        <span className="pointer-events-none absolute left-1 top-1 h-5 w-5 rounded-full bg-white shadow transition-transform peer-checked:translate-x-5" />
      </span>
    </label>
  );
}

export default function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState(false);
  const [draft, setDraft] = useState<Choice>({ analiz: false, reklam: false });

  useEffect(() => {
    if (!GTM_ID) return;
    const c = readChoice();
    if (c === null) setOpen(true);
    else if (anyConsent(c)) loadGtm(c);
    const show = () => {
      const cur = readChoice();
      setDraft(cur ?? { analiz: false, reklam: false });
      setSettings(true);
      setOpen(true);
    };
    window.addEventListener(OPEN_EVENT, show);
    return () => window.removeEventListener(OPEN_EVENT, show);
  }, []);

  if (!GTM_ID || !open) return null;

  const save = (c: Choice) => {
    const prev = readChoice();
    try { localStorage.setItem(KEY, JSON.stringify(c)); } catch {}
    setOpen(false);
    setSettings(false);
    clearCookies(c);
    if (!document.getElementById("gtm-js")) {
      if (anyConsent(c)) loadGtm(c);
      return;
    }
    gtag("consent", "update", consentState(c));
    // İzin daraltıldıysa yüklenmiş etiketler ancak sayfa yenilenince tamamen durur.
    if (prev && ((prev.analiz && !c.analiz) || (prev.reklam && !c.reklam))) window.location.reload();
  };

  const btn =
    "min-h-12 flex-1 rounded-xl bg-cobalt-900 px-4 font-semibold text-white hover:bg-cobalt-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-700 focus-visible:ring-offset-2";

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cerez-baslik"
      className="fixed inset-x-0 bottom-0 z-[70] p-3 sm:p-4"
    >
      <div className="mx-auto max-w-xl rounded-2xl border border-cobalt-900/15 bg-white p-4 sm:p-5 text-sm text-ink shadow-2xl">
        <h2 id="cerez-baslik" className="text-base font-bold text-cobalt-900">Çerez tercihleriniz</h2>
        <p className="mt-1.5 text-ink/80">
          Zorunlu çerezler sitenin çalışması için kullanılır. Analiz ve reklam çerezleri yalnız onay verirseniz
          kullanılır; tercihinizi istediğiniz zaman değiştirebilirsiniz.{" "}
          <Link href="/cerez-politikasi/" className="font-medium text-cobalt-700 underline">Çerez Politikası</Link>
        </p>

        {settings ? (
          <div className="mt-3 space-y-2">
            <Toggle id="c-zorunlu" label="Zorunlu çerezler" desc="Sitenin güvenli çalışması için gereklidir, kapatılamaz." checked locked />
            <Toggle
              id="c-analiz"
              label="Analiz çerezleri"
              desc="Google Analytics: sitenin nasıl kullanıldığını toplu olarak ölçer."
              checked={draft.analiz}
              onChange={(v) => setDraft((d) => ({ ...d, analiz: v }))}
            />
            <Toggle
              id="c-reklam"
              label="Reklam çerezleri"
              desc="Google Ads: reklamların etkisini ölçer, ilgili reklamların gösterilmesini sağlar."
              checked={draft.reklam}
              onChange={(v) => setDraft((d) => ({ ...d, reklam: v }))}
            />
            <div className="flex flex-col gap-2 pt-1 sm:flex-row">
              <button type="button" className={btn} onClick={() => save({ analiz: false, reklam: false })}>
                Yalnız zorunlu
              </button>
              <button type="button" className={btn} onClick={() => save(draft)}>
                Seçimimi kaydet
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-3 flex flex-col gap-2 sm:flex-row">
            <button type="button" className={btn} onClick={() => save({ analiz: false, reklam: false })}>
              Yalnız zorunlu
            </button>
            <button type="button" className={btn} onClick={() => save({ analiz: true, reklam: true })}>
              Tümünü kabul et
            </button>
          </div>
        )}
        {!settings && (
          <button
            type="button"
            onClick={() => { setDraft(readChoice() ?? { analiz: false, reklam: false }); setSettings(true); }}
            className="mt-2 w-full min-h-11 text-center font-medium text-cobalt-700 underline"
          >
            Tercihleri ayarla
          </button>
        )}
      </div>
    </div>
  );
}
