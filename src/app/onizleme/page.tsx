"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Monitor,
  Tablet,
  Smartphone,
  Columns2,
  ExternalLink,
} from "lucide-react";
import { siteConfig } from "@/config/site";

type ViewportMode = "dual" | "desktop" | "tablet" | "mobile";

export default function ClientPreviewStudioPage() {
  const [mode, setMode] = useState<ViewportMode>("dual");
  const [route, setRoute] = useState<string>("/");

  return (
    <div
      data-lenis-prevent
      className="fixed inset-0 z-[120] bg-cobalt-950 text-white flex flex-col overflow-hidden"
    >
      {/* Studio Top Control Bar */}
      <div className="border-b border-white/15 bg-cobalt-950 px-3 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <img
            src={siteConfig.logos.emblem}
            alt={siteConfig.name}
            className="h-9 w-9 object-contain"
          />
          <div>
            <div className="font-serif font-bold text-sm sm:text-base leading-none">
              {siteConfig.name} · Sunum & Cihaz Önizleme
            </div>
            <div className="font-mono text-[10px] tracking-[0.14em] text-cobalt-300 mt-1">
              CANLI MASAÜSTÜ & MOBİL RESPONSIVE SAHNESİ
            </div>
          </div>
        </div>

        {/* Route Selector */}
        <div className="flex items-center gap-1 overflow-x-auto max-w-full border border-white/15 bg-cobalt-900/80 p-1">
          {siteConfig.navigation.map((nav) => (
            <button
              key={nav.href}
              type="button"
              onClick={() => setRoute(nav.href)}
              className={`px-2.5 sm:px-3 py-1.5 text-[11px] sm:text-xs font-bold whitespace-nowrap transition-colors ${
                route === nav.href
                  ? "bg-crimson-600 text-white"
                  : "text-cobalt-200 hover:text-white hover:bg-white/5"
              }`}
            >
              {nav.label}
            </button>
          ))}
        </div>

        {/* Viewport Switcher + Fullscreen */}
        <div className="flex items-center gap-2">
          <div className="flex items-center border border-white/15 bg-cobalt-900/80 p-1">
            {[
              { id: "dual", label: "Yan Yana", icon: Columns2 },
              { id: "desktop", label: "Masaüstü", icon: Monitor },
              { id: "tablet", label: "Tablet", icon: Tablet },
              { id: "mobile", label: "Mobil", icon: Smartphone },
            ].map((v) => {
              const Icon = v.icon;
              const active = mode === v.id;
              return (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => setMode(v.id as ViewportMode)}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 text-[11px] sm:text-xs font-bold transition-colors ${
                    active
                      ? "bg-cobalt-600 text-white"
                      : "text-cobalt-200 hover:text-white"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">{v.label}</span>
                </button>
              );
            })}
          </div>

          <Link
            href={route}
            className="inline-flex items-center gap-1.5 bg-crimson-600 hover:bg-white text-white hover:text-cobalt-950 px-3.5 py-2 text-xs font-bold transition-colors"
          >
            <span>Tam Ekran</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      {/* Preview Stage */}
      <div className="flex-1 bg-[#030E29] halftone-cobalt p-3 sm:p-5 overflow-auto flex items-stretch justify-center gap-5">
        {mode === "dual" && (
          <>
            {/* Desktop Frame */}
            <div className="flex-1 min-w-0 flex flex-col border border-white/20 bg-white shadow-2xl overflow-hidden">
              <div className="bg-cobalt-900 px-4 py-2 border-b border-white/10 flex items-center justify-between font-mono text-[10px] tracking-[0.14em] text-cobalt-200">
                <span>MASAÜSTÜ GÖRÜNÜMÜ · GENİŞ EKRAN</span>
                <span>aybarakademi.com{route}</span>
              </div>
              <iframe
                title="Masaüstü Önizleme"
                src={route}
                className="w-full flex-1 bg-white"
              />
            </div>

            {/* Mobile Frame (iPhone — 375px, visible on all laptops >= 1024px) */}
            <div className="w-[375px] shrink-0 hidden lg:flex flex-col border-[5px] border-cobalt-800 rounded-[30px] bg-white shadow-2xl overflow-hidden">
              <div className="bg-cobalt-950 px-4 py-2.5 border-b border-white/10 flex items-center justify-between font-mono text-[10px] tracking-[0.14em] text-cobalt-200">
                <span>MOBİL · 375PX</span>
                <span className="h-2 w-12 rounded-full bg-white/20" />
                <span>iOS / ANDROID</span>
              </div>
              <iframe
                title="Mobil Önizleme"
                src={route}
                className="w-full flex-1 bg-white"
              />
            </div>
          </>
        )}

        {mode === "desktop" && (
          <div className="w-full max-w-[1440px] flex flex-col border border-white/20 bg-white shadow-2xl overflow-hidden">
            <div className="bg-cobalt-900 px-4 py-2 border-b border-white/10 flex items-center justify-between font-mono text-[10px] tracking-[0.14em] text-cobalt-200">
              <span>MASAÜSTÜ TAM GÖRÜNÜM · 1440PX</span>
              <span>aybarakademi.com{route}</span>
            </div>
            <iframe
              title="Masaüstü Tam Önizleme"
              src={route}
              className="w-full flex-1 bg-white"
            />
          </div>
        )}

        {mode === "tablet" && (
          <div className="w-full max-w-[820px] flex flex-col border-[5px] border-cobalt-800 rounded-[24px] bg-white shadow-2xl overflow-hidden">
            <div className="bg-cobalt-950 px-4 py-2.5 border-b border-white/10 flex items-center justify-between font-mono text-[10px] tracking-[0.14em] text-cobalt-200">
              <span>TABLET GÖRÜNÜMÜ · 820PX (iPAD)</span>
              <span>aybarakademi.com{route}</span>
            </div>
            <iframe
              title="Tablet Önizleme"
              src={route}
              className="w-full flex-1 bg-white"
            />
          </div>
        )}

        {mode === "mobile" && (
          <div className="w-full max-w-[390px] flex flex-col border-[5px] border-cobalt-800 rounded-[32px] bg-white shadow-2xl overflow-hidden">
            <div className="bg-cobalt-950 px-4 py-2.5 border-b border-white/10 flex items-center justify-between font-mono text-[10px] tracking-[0.14em] text-cobalt-200">
              <span>MOBİL GÖRÜNÜM · 390PX</span>
              <span className="h-2 w-14 rounded-full bg-white/20" />
              <span>RESPONSIVE</span>
            </div>
            <iframe
              title="Mobil Tekil Önizleme"
              src={route}
              className="w-full flex-1 bg-white"
            />
          </div>
        )}
      </div>
    </div>
  );
}
