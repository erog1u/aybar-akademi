"use client";

import React, { useEffect, useState } from "react";
import { IS_PREVIEW_MODE, siteConfig } from "@/config/site";

const ALLOWED_PREVIEW_HOSTS = [
  "localhost",
  "127.0.0.1",
  "erog1u.github.io",
];

// Hafif tek-katmanlı SVG filigran (0 GPU maliyeti, tam ekran kopya caydırıcılığı)
const WATERMARK_SVG = encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="340" height="220" viewBox="0 0 340 220"><text x="20" y="120" transform="rotate(-24 170 110)" fill="#08245E" fill-opacity="0.038" font-family="sans-serif" font-weight="800" font-size="13" letter-spacing="2">EROĞLU SOLUTIONS · ÖNİZLEME</text></svg>`
);

export default function PreviewProtection({
  children,
}: {
  children: React.ReactNode;
}) {
  const [authorized, setAuthorized] = useState(true);

  useEffect(() => {
    if (!IS_PREVIEW_MODE || typeof window === "undefined") return;

    const host = window.location.hostname.toLowerCase();
    const isAllowed =
      ALLOWED_PREVIEW_HOSTS.includes(host) || host.endsWith(".pages.dev");

    if (!isAllowed) {
      setAuthorized(false);
      return;
    }

    const prevent = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" || target.tagName === "TEXTAREA")
      ) {
        return;
      }
      e.preventDefault();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      const cmdOrCtrl = e.metaKey || e.ctrlKey;

      if (
        e.key === "F12" ||
        (cmdOrCtrl && (key === "s" || key === "u" || key === "p")) ||
        (cmdOrCtrl && e.shiftKey && (key === "i" || key === "j" || key === "c")) ||
        (e.metaKey && e.altKey && (key === "i" || key === "u"))
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", prevent);
    document.addEventListener("dragstart", prevent);
    document.addEventListener("copy", prevent);
    document.addEventListener("cut", prevent);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", prevent);
      document.removeEventListener("dragstart", prevent);
      document.removeEventListener("copy", prevent);
      document.removeEventListener("cut", prevent);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (IS_PREVIEW_MODE && !authorized) {
    return (
      <div className="min-h-screen bg-cobalt-950 text-white flex items-center justify-center p-6 text-center">
        <div className="max-w-md space-y-3">
          <div className="text-xs font-extrabold tracking-widest uppercase text-crimson-400">
            Lisans & Önizleme Koruması
          </div>
          <h1 className="text-2xl font-extrabold">Yetkisiz Alan Adı</h1>
          <p className="text-sm text-cobalt-200 leading-relaxed">
            Bu tasarım ve yazılım {siteConfig.agency.name} tarafından yalnızca
            müşteri önizlemesi amacıyla hazırlanmıştır; yetkisiz alan adlarında
            çalıştırılamaz.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {children}
      {IS_PREVIEW_MODE && (
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-[75]"
          style={{
            backgroundImage: `url("data:image/svg+xml,${WATERMARK_SVG}")`,
            backgroundRepeat: "repeat",
          }}
        />
      )}
    </>
  );
}
