"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Monitor,
  Tablet,
  Smartphone,
  Columns2,
  ExternalLink,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { AybarCrestEmblem } from "@/components/brand/AybarCrest";

type ViewportMode = "mobile" | "dual" | "tablet" | "desktop";

export default function ClientPreviewStudioPage() {
  const [mode, setMode] = useState<ViewportMode>("mobile");
  const [route, setRoute] = useState<string>("/");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const m = params.get("mode");
    if (m === "dual" || m === "mobile" || m === "tablet" || m === "desktop") {
      setMode(m);
    }
  }, []);

  return (
    <div
      data-lenis-prevent
      className="preview-studio fixed inset-0 z-[120] bg-cobalt-950 text-white flex flex-col overflow-hidden"
    >
      {/* Top Control Bar */}
      <div className="border-b border-white/15 bg-cobalt-950 px-3 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <AybarCrestEmblem variant="dark" className="h-9 w-9" />
          <div>
            <div className="font-serif font-bold text-sm sm:text-base leading-none">
              {siteConfig.name} · Telefon & Masaüstü Önizleme
            </div>
            <div className="text-[11px] text-cobalt-300 mt-1">
              Canlı İnteraktif Cihaz Simülatörü
            </div>
          </div>
        </div>

        {/* Page Selector */}
        <div className="flex items-center gap-1 overflow-x-auto max-w-full border border-white/15 bg-cobalt-900/80 p-1">
          {siteConfig.navigation.map((nav) => (
            <button
              key={nav.href}
              type="button"
              onClick={() => setRoute(nav.href)}
              className={`px-3 py-1.5 text-xs font-bold whitespace-nowrap transition-colors ${
                route === nav.href
                  ? "bg-crimson-600 text-white"
                  : "text-cobalt-200 hover:text-white hover:bg-white/5"
              }`}
            >
              {nav.label}
            </button>
          ))}
        </div>

        {/* Device Switcher */}
        <div className="flex items-center gap-2">
          <div className="flex items-center border border-white/15 bg-cobalt-900/80 p-1">
            {[
              { id: "mobile", label: "Telefon", icon: Smartphone },
              { id: "dual", label: "Yan Yana", icon: Columns2 },
              { id: "tablet", label: "Tablet", icon: Tablet },
              { id: "desktop", label: "Masaüstü", icon: Monitor },
            ].map((v) => {
              const Icon = v.icon;
              const active = mode === v.id;
              return (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => setMode(v.id as ViewportMode)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold transition-colors ${
                    active
                      ? "bg-crimson-600 text-white"
                      : "text-cobalt-200 hover:text-white"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span>{v.label}</span>
                </button>
              );
            })}
          </div>

          <Link
            href={route}
            className="inline-flex items-center gap-1.5 bg-white text-cobalt-950 hover:bg-crimson-600 hover:text-white px-3.5 py-2 text-xs font-bold transition-colors"
          >
            <span>Tam Ekran</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      {/* Preview Stage */}
      <div className="flex-1 studio-hero p-4 sm:p-6 overflow-auto flex items-center justify-center gap-6">
        {mode === "mobile" && (
          <div className="w-[390px] h-full max-h-[844px] flex flex-col border-[10px] border-[#0B1730] rounded-[44px] bg-white shadow-2xl overflow-hidden ring-1 ring-white/25">
            {/* iPhone Dynamic Island Top Bezel */}
            <div className="bg-cobalt-950 px-6 py-2.5 flex items-center justify-between text-[11px] font-semibold text-white shrink-0">
              <span>09:41</span>
              <span className="h-4 w-24 rounded-full bg-black border border-white/10" />
              <span>5G · %100</span>
            </div>
            <iframe
              title="Telefon Önizleme"
              src={route}
              className="w-full flex-1 bg-white"
            />
          </div>
        )}

        {mode === "dual" && (
          <div className="w-full h-full flex items-stretch justify-center gap-5">
            <div className="flex-1 min-w-0 flex flex-col border border-white/25 bg-white shadow-2xl overflow-hidden">
              <div className="bg-cobalt-950 px-4 py-2 border-b border-white/10 flex items-center justify-between text-xs text-cobalt-200 font-medium">
                <span>Masaüstü Görünümü</span>
                <span>{route}</span>
              </div>
              <iframe
                title="Masaüstü Önizleme"
                src={route}
                className="w-full flex-1 bg-white"
              />
            </div>

            <div className="w-[380px] shrink-0 hidden lg:flex flex-col border-[8px] border-[#0B1730] rounded-[40px] bg-white shadow-2xl overflow-hidden ring-1 ring-white/25">
              <div className="bg-cobalt-950 px-5 py-2 flex items-center justify-between text-[11px] font-semibold text-white shrink-0">
                <span>09:41</span>
                <span className="h-3.5 w-20 rounded-full bg-black border border-white/10" />
                <span>Telefon</span>
              </div>
              <iframe
                title="Mobil Yan Yana Önizleme"
                src={route}
                className="w-full flex-1 bg-white"
              />
            </div>
          </div>
        )}

        {mode === "tablet" && (
          <div className="w-full max-w-[820px] h-full flex flex-col border-[8px] border-[#0B1730] rounded-[28px] bg-white shadow-2xl overflow-hidden ring-1 ring-white/25">
            <iframe
              title="Tablet Önizleme"
              src={route}
              className="w-full flex-1 bg-white"
            />
          </div>
        )}

        {mode === "desktop" && (
          <div className="w-full max-w-[1440px] h-full flex flex-col border border-white/25 bg-white shadow-2xl overflow-hidden">
            <iframe
              title="Masaüstü Tam Önizleme"
              src={route}
              className="w-full flex-1 bg-white"
            />
          </div>
        )}
      </div>
    </div>
  );
}
