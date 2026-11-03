"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Monitor,
  Tablet,
  Smartphone,
  Columns2,
  ExternalLink,
  RotateCw,
  Lock,
} from "lucide-react";
import { siteConfig, assetPath } from "@/config/site";
import { AybarCrestEmblem } from "@/components/brand/AybarCrest";

type ViewportMode = "mobile" | "dual" | "tablet" | "desktop";
type ZoomMode = "actual" | "fit";

function routeUrl(route: string): string {
  const withSlash = route.endsWith("/") ? route : `${route}/`;
  return assetPath(withSlash);
}

/**
 * iPhone 15 Pro Gerçek Donanım Çerçevesi
 * -------------------------------------------------------------
 * Sabit donanım ölçüleri: 410 × 804 px dış titanyum şasi,
 * 390 × 780 px iç retina ekran (iOS Safari gerçek web alanı).
 */
function IPhone15ProFrame({
  route,
  reloadKey,
  scale = 1,
}: {
  route: string;
  reloadKey: number;
  scale?: number;
}) {
  const scaledWidth = Math.round(410 * scale);
  const scaledHeight = Math.round(804 * scale);

  return (
    <div
      style={{
        width: scaledWidth,
        height: scaledHeight,
      }}
      className="relative shrink-0 select-none"
    >
      <div
        style={{
          width: 410,
          height: 804,
          transform: scale !== 1 ? `scale(${scale})` : undefined,
          transformOrigin: "top left",
        }}
        className="absolute top-0 left-0"
      >
        {/* Dış Titanyum Şasi & Donanım Butonları */}
        <div className="w-[410px] h-[804px] px-[10px] py-[12px] rounded-[50px] bg-gradient-to-b from-[#1E293B] via-[#0F172A] to-[#090F1C] shadow-[0_30px_90px_rgba(0,0,0,0.7)] ring-2 ring-white/20 relative select-none">
          {/* Anten Çizgileri */}
          <div className="absolute left-[36px] -top-[1px] w-[3px] h-[2px] bg-[#475569] rounded-full" />
          <div className="absolute right-[36px] -top-[1px] w-[3px] h-[2px] bg-[#475569] rounded-full" />
          <div className="absolute left-[36px] -bottom-[1px] w-[3px] h-[2px] bg-[#475569] rounded-full" />
          <div className="absolute right-[36px] -bottom-[1px] w-[3px] h-[2px] bg-[#475569] rounded-full" />

          {/* Sol Yan Donanım Butonları */}
          <div className="absolute -left-[3px] top-[108px] w-[3px] h-[24px] bg-[#475569] rounded-l-sm shadow-sm" />
          <div className="absolute -left-[3px] top-[148px] w-[3px] h-[48px] bg-[#475569] rounded-l-sm shadow-sm" />
          <div className="absolute -left-[3px] top-[208px] w-[3px] h-[48px] bg-[#475569] rounded-l-sm shadow-sm" />

          {/* Sağ Yan Güç/Kilit Butonu */}
          <div className="absolute -right-[3px] top-[168px] w-[3px] h-[72px] bg-[#475569] rounded-r-sm shadow-sm" />

          {/* Titanyum İç Yansıma Halkası */}
          <div className="absolute inset-0 rounded-[50px] ring-1 ring-inset ring-white/10 pointer-events-none" />

          {/* İç Ekran: 390 × 780 px */}
          <div className="w-[390px] h-[780px] flex flex-col bg-white overflow-hidden rounded-[38px] ring-1 ring-black/60 shadow-inner">
            {/* iOS Durum Çubuğu + Dinamik Ada */}
            <div className="h-10 bg-cobalt-950 text-white px-6 flex items-center justify-between text-[12px] font-semibold shrink-0 select-none relative z-10">
              <span className="font-sans font-bold tracking-tight">09:41</span>

              <div className="h-[22px] w-[100px] rounded-full bg-black ring-1 ring-white/10 flex items-center justify-end pr-2.5 shadow-md">
                <div className="w-2.5 h-2.5 rounded-full bg-[#0a0f1d] ring-1 ring-white/20 flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-[#1e3a8a]/70" />
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-white/90">
                <span className="text-[10px] tracking-wider font-mono font-bold">
                  5G
                </span>
                <div className="w-5 h-2.5 rounded-[3px] border border-white/80 p-[1px] flex items-center">
                  <div className="h-full w-full bg-white rounded-[1.5px]" />
                </div>
              </div>
            </div>

            {/* Canlı Web Görünümü (Iframe) */}
            <iframe
              title="AYBAR AKADEMİ Mobil Önizleme"
              src={routeUrl(route)}
              key={`mobile-${route}-${reloadKey}`}
              className="w-[390px] flex-1 border-0 bg-white"
            />

            {/* iOS Home Indicator Çubuğu */}
            <div className="h-4 bg-white flex items-center justify-center shrink-0 border-t border-slate-100/60 select-none">
              <div className="w-32 h-1 bg-black/25 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * iPad Air Donanım Çerçevesi
 * -------------------------------------------------------------
 * Sabit donanım ölçüleri: 792 × 948 px dış şasi,
 * 768 × 920 px iç retina ekran.
 */
function IPadAirFrame({
  route,
  reloadKey,
  scale = 1,
}: {
  route: string;
  reloadKey: number;
  scale?: number;
}) {
  const scaledWidth = Math.round(792 * scale);
  const scaledHeight = Math.round(948 * scale);

  return (
    <div
      style={{ width: scaledWidth, height: scaledHeight }}
      className="relative shrink-0 select-none"
    >
      <div
        style={{
          width: 792,
          height: 948,
          transform: scale !== 1 ? `scale(${scale})` : undefined,
          transformOrigin: "top left",
        }}
        className="absolute top-0 left-0"
      >
        <div className="w-[792px] h-[948px] px-[12px] py-[14px] rounded-[34px] bg-gradient-to-b from-[#1E293B] via-[#0F172A] to-[#090F1C] shadow-[0_30px_90px_rgba(0,0,0,0.7)] ring-2 ring-white/20 relative select-none">
          {/* iPad Ön Kamera Deliği */}
          <div className="absolute top-[5px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#0a0f1d] ring-1 ring-white/20" />

          {/* iPad Üst Butonlar */}
          <div className="absolute -top-[3px] right-[65px] w-[32px] h-[3px] bg-[#475569] rounded-t-sm shadow-sm" />
          <div className="absolute -top-[3px] right-[105px] w-[32px] h-[3px] bg-[#475569] rounded-t-sm shadow-sm" />

          {/* Titanyum İç Yansıma Halkası */}
          <div className="absolute inset-0 rounded-[34px] ring-1 ring-inset ring-white/10 pointer-events-none" />

          {/* İç Ekran: 768 × 920 px */}
          <div className="w-[768px] h-[920px] flex flex-col bg-white overflow-hidden rounded-[22px] ring-1 ring-black/60 shadow-inner">
            <div className="h-7 bg-cobalt-950 text-white px-6 flex items-center justify-between text-[11px] font-semibold shrink-0 select-none">
              <span className="font-sans font-bold tracking-tight">09:41</span>
              <span className="text-[10px] text-cobalt-300 font-mono">
                iPad Air · 768 × 920
              </span>
              <div className="flex items-center gap-2 text-white/90">
                <span className="text-[10px] font-mono">%100</span>
                <div className="w-5 h-2.5 rounded-[3px] border border-white/80 p-[1px] flex items-center">
                  <div className="h-full w-full bg-white rounded-[1.5px]" />
                </div>
              </div>
            </div>

            {/* Canlı Web Görünümü */}
            <iframe
              title="AYBAR AKADEMİ Tablet Önizleme"
              src={routeUrl(route)}
              key={`tablet-${route}-${reloadKey}`}
              className="w-[768px] flex-1 border-0 bg-white"
            />

            {/* iPadOS Home Indicator */}
            <div className="h-3.5 bg-white flex items-center justify-center shrink-0 border-t border-slate-100 select-none">
              <div className="w-32 h-1 bg-black/25 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Masaüstü Stüdyo Tarayıcı Penceresi
 */
function StudioDesktopWindow({
  route,
  reloadKey,
  onReload,
}: {
  route: string;
  reloadKey: number;
  onReload: () => void;
}) {
  const viewportBoxRef = useRef<HTMLDivElement>(null);
  const [boxSize, setBoxSize] = useState<{ w: number; h: number }>({
    w: 1320,
    h: 820,
  });

  useEffect(() => {
    const el = viewportBoxRef.current;
    if (!el) return;
    const obs = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        if (width > 0 && height > 0) {
          setBoxSize({ w: width, h: height });
        }
      }
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const virtualDesktopWidth = Math.max(1320, boxSize.w);
  const scale = boxSize.w < 1320 ? boxSize.w / 1320 : 1;
  const virtualDesktopHeight = Math.round(boxSize.h / scale);

  return (
    <div className="w-full h-full flex flex-col rounded-2xl border border-white/20 bg-cobalt-950/80 backdrop-blur-md shadow-[0_25px_80px_rgba(0,0,0,0.6)] overflow-hidden">
      {/* Tarayıcı Üst Çubuğu */}
      <div className="h-10 bg-cobalt-950 px-4 border-b border-white/10 flex items-center justify-between gap-3 shrink-0 select-none">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#EF4444] border border-red-600/40" />
          <div className="w-3 h-3 rounded-full bg-[#F59E0B] border border-amber-600/40" />
          <div className="w-3 h-3 rounded-full bg-[#10B981] border border-emerald-600/40" />
        </div>

        <div className="flex-1 max-w-lg mx-auto flex items-center gap-2 h-7 px-3 bg-cobalt-900/90 rounded-md border border-white/10 text-xs font-mono text-cobalt-200">
          <Lock className="h-3 w-3 text-emerald-400 shrink-0" />
          <span className="text-white/60">https://</span>
          <span className="text-white font-medium">aybarakademi.com</span>
          <span className="text-crimson-400 font-bold">
            {route === "/" ? "" : route}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-block text-[11px] font-mono text-cobalt-300 bg-white/5 px-2 py-0.5 rounded border border-white/10">
            Masaüstü · 1320px
          </span>
          <button
            type="button"
            onClick={onReload}
            title="Masaüstü Görünümünü Yenile"
            aria-label="Masaüstü Görünümünü Yenile"
            className="p-1.5 rounded text-cobalt-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <RotateCw className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Canlı Web Görünümü */}
      <div
        ref={viewportBoxRef}
        className="relative w-full flex-1 bg-white overflow-hidden"
      >
        <iframe
          title="AYBAR AKADEMİ Masaüstü Önizleme"
          src={routeUrl(route)}
          key={`desktop-${route}-${reloadKey}`}
          style={{
            width: virtualDesktopWidth,
            height: virtualDesktopHeight,
            transform: scale < 1 ? `scale(${scale})` : undefined,
            transformOrigin: "top left",
          }}
          className="border-0 bg-white block"
        />
      </div>
    </div>
  );
}

export default function ClientPreviewStudioPage() {
  const [mode, setMode] = useState<ViewportMode>("mobile");
  const [zoomMode, setZoomMode] = useState<ZoomMode>("fit");
  const [route, setRoute] = useState<string>("/");
  const [reloadKey, setReloadKey] = useState<number>(0);
  const [isReloading, setIsReloading] = useState<boolean>(false);

  const stageRef = useRef<HTMLDivElement>(null);
  const [stageSize, setStageSize] = useState<{ width: number; height: number }>({
    width: 1200,
    height: 800,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const m = params.get("mode");
    const r = params.get("route");
    const z = params.get("zoom");
    if (m === "dual" || m === "mobile" || m === "tablet" || m === "desktop") {
      setMode(m);
    }
    if (r && siteConfig.navigation.some((nav) => nav.href === r)) {
      setRoute(r);
    }
    if (z === "actual" || z === "fit") {
      setZoomMode(z);
    }
  }, []);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        if (width > 0 && height > 0) {
          setStageSize({ width, height });
        }
      }
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const updateUrlParams = (
    newMode: ViewportMode,
    newRoute: string,
    newZoom: ZoomMode
  ) => {
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("mode", newMode);
      url.searchParams.set("route", newRoute);
      url.searchParams.set("zoom", newZoom);
      window.history.replaceState({}, "", url.toString());
    }
  };

  const handleRouteChange = (newRoute: string) => {
    setRoute(newRoute);
    updateUrlParams(mode, newRoute, zoomMode);
  };

  const handleModeChange = (newMode: ViewportMode) => {
    setMode(newMode);
    updateUrlParams(newMode, route, zoomMode);
  };

  const handleZoomChange = (newZoom: ZoomMode) => {
    setZoomMode(newZoom);
    updateUrlParams(mode, route, newZoom);
  };

  const handleReload = () => {
    setIsReloading(true);
    setReloadKey((prev) => prev + 1);
    setTimeout(() => setIsReloading(false), 600);
  };

  // Donanım ölçek hesaplamaları
  const availableH = Math.max(320, stageSize.height - 32);
  const mobileAvailableW = Math.max(280, stageSize.width - 32);

  const mobileFitScale = Math.min(
    1,
    Math.max(0.4, Math.min(availableH / 804, mobileAvailableW / 410))
  );
  const mobileActualScale =
    stageSize.width >= 430
      ? 1
      : Math.min(1, Math.max(0.4, (stageSize.width - 24) / 410));

  const mobileScale = zoomMode === "actual" ? mobileActualScale : mobileFitScale;
  const dualPhoneScale = Math.min(1, Math.max(0.82, availableH / 804));

  const tabletAvailableW = Math.max(280, stageSize.width - 32);
  const tabletFitScale = Math.min(
    1,
    Math.max(0.35, Math.min(availableH / 948, tabletAvailableW / 792))
  );
  const tabletActualScale =
    stageSize.width >= 820
      ? 1
      : Math.min(1, Math.max(0.35, (stageSize.width - 24) / 792));

  const tabletScale = zoomMode === "actual" ? tabletActualScale : tabletFitScale;

  const isScrollableActual =
    (mode === "mobile" || mode === "tablet") && zoomMode === "actual";

  return (
    <div className="preview-studio fixed inset-0 z-[120] bg-cobalt-950 text-white flex flex-col overflow-hidden select-none">
      {/* Üst Kontrol Çubuğu */}
      <header className="bg-cobalt-950 border-b border-white/15 shrink-0 z-20">
        <div className="h-14 px-3 sm:px-5 flex items-center justify-between gap-2 sm:gap-3">
          {/* Sol: Logo ve Başlık */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            <AybarCrestEmblem variant="dark" className="h-8 w-8" />
            <div className="hidden sm:block">
              <div className="font-brand font-extrabold text-xs sm:text-sm tracking-[0.06em] uppercase text-white leading-none">
                {siteConfig.name}
              </div>
              <div className="text-[10px] text-cobalt-300 font-sans mt-0.5 leading-none hidden xl:block">
                Canlı Sunum Stüdyosu
              </div>
            </div>
          </div>

          {/* Orta (Masaüstü): Hızlı Sayfa Seçici */}
          <nav
            aria-label="Sayfa Seçici"
            className="hidden lg:flex items-center gap-1 overflow-x-auto no-scrollbar py-1 px-1.5 bg-cobalt-900/90 rounded-lg border border-white/15"
          >
            {siteConfig.navigation.map((nav) => {
              const isActive = route === nav.href;
              return (
                <button
                  key={nav.href}
                  type="button"
                  onClick={() => handleRouteChange(nav.href)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md whitespace-nowrap transition-colors min-h-[34px] flex items-center justify-center ${
                    isActive
                      ? "bg-crimson-600 text-white shadow-sm font-bold"
                      : "text-cobalt-200 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {nav.label}
                </button>
              );
            })}
          </nav>

          {/* Sağ: Ölçek + Cihaz Seçici + Yenile + Aç */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {(mode === "mobile" || mode === "tablet") && (
              <div className="hidden sm:flex items-center bg-cobalt-900/90 rounded-lg border border-white/15 p-0.5 text-xs">
                <button
                  type="button"
                  onClick={() => handleZoomChange("actual")}
                  title="%100 Gerçek Boyut"
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 font-semibold rounded-md transition-colors min-h-[34px] ${
                    zoomMode === "actual"
                      ? "bg-cobalt-800 text-white font-bold shadow-sm border border-white/20"
                      : "text-cobalt-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <span className="hidden xl:inline">%100 Gerçek Boyut</span>
                  <span className="xl:hidden">%100</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleZoomChange("fit")}
                  title="Ekrana Sığdır"
                  className={`inline-flex items-center gap-1 px-2.5 py-1.5 font-semibold rounded-md transition-colors min-h-[34px] ${
                    zoomMode === "fit"
                      ? "bg-cobalt-800 text-white font-bold shadow-sm border border-white/20"
                      : "text-cobalt-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span>Sığdır</span>
                </button>
              </div>
            )}

            <div className="flex items-center bg-cobalt-900/90 rounded-lg border border-white/15 p-0.5">
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
                    aria-label={v.label}
                    onClick={() => handleModeChange(v.id as ViewportMode)}
                    className={`inline-flex items-center justify-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold rounded-md transition-colors min-h-[36px] min-w-[36px] ${
                      active
                        ? "bg-crimson-600 text-white shadow-sm font-bold"
                        : "text-cobalt-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    <span className="hidden md:inline">{v.label}</span>
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={handleReload}
              title="Görünümü Yenile"
              aria-label="Yenile"
              className="h-10 w-10 rounded-lg bg-cobalt-900/90 border border-white/15 text-cobalt-200 hover:text-white hover:bg-white/10 flex items-center justify-center transition-colors shrink-0"
            >
              <RotateCw
                className={`h-4 w-4 ${isReloading ? "animate-spin" : ""}`}
              />
            </button>

            <Link
              href={route}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 px-3 rounded-lg bg-white hover:bg-crimson-600 text-cobalt-950 hover:text-white font-bold text-xs inline-flex items-center gap-1.5 transition-colors shadow-sm shrink-0"
            >
              <span className="hidden sm:inline">Tam Ekran Aç</span>
              <span className="sm:hidden">Aç</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Mobil/Tablet Sayfa Seçici Şerit */}
        <div className="lg:hidden h-11 px-3 border-t border-white/10 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          {siteConfig.navigation.map((nav) => {
            const isActive = route === nav.href;
            return (
              <button
                key={nav.href}
                type="button"
                onClick={() => handleRouteChange(nav.href)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md whitespace-nowrap transition-colors min-h-[34px] shrink-0 ${
                  isActive
                    ? "bg-crimson-600 text-white font-bold"
                    : "bg-cobalt-900/80 text-cobalt-200 hover:text-white"
                }`}
              >
                {nav.label}
              </button>
            );
          })}
        </div>
      </header>

      {/* Sunum Sahnesi */}
      <main
        ref={stageRef}
        className={`flex-1 studio-hero relative p-3 sm:p-5 lg:p-6 ${
          isScrollableActual
            ? "overflow-y-auto overflow-x-hidden flex flex-col"
            : "overflow-hidden flex items-center justify-center"
        }`}
      >
        {/* 1. TELEFON MODU — Yalnızca Sakin Ortalanmış Telefon Önizlemesi */}
        {mode === "mobile" && (
          <div
            className={`w-full flex items-center justify-center ${
              isScrollableActual ? "my-auto py-2 shrink-0" : "h-full"
            }`}
          >
            <IPhone15ProFrame
              route={route}
              reloadKey={reloadKey}
              scale={mobileScale}
            />
          </div>
        )}

        {/* 2. YAN YANA (DUAL) MODU */}
        {mode === "dual" && (
          <div className="w-full h-full flex items-center justify-center gap-5">
            <div className="flex-1 h-full min-w-0 flex flex-col">
              <StudioDesktopWindow
                route={route}
                reloadKey={reloadKey}
                onReload={handleReload}
              />
            </div>

            <div className="hidden lg:flex items-center justify-center shrink-0">
              <IPhone15ProFrame
                route={route}
                reloadKey={reloadKey}
                scale={dualPhoneScale}
              />
            </div>
          </div>
        )}

        {/* 3. TABLET (IPAD AIR) MODU */}
        {mode === "tablet" && (
          <div
            className={`w-full flex flex-col items-center ${
              isScrollableActual
                ? "my-auto py-2 shrink-0"
                : "h-full justify-center"
            }`}
          >
            <IPadAirFrame
              route={route}
              reloadKey={reloadKey}
              scale={tabletScale}
            />
          </div>
        )}

        {/* 4. MASAÜSTÜ TAM MODU */}
        {mode === "desktop" && (
          <div className="w-full max-w-[1520px] h-full flex items-center justify-center">
            <StudioDesktopWindow
              route={route}
              reloadKey={reloadKey}
              onReload={handleReload}
            />
          </div>
        )}
      </main>
    </div>
  );
}
