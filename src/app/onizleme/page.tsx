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
  Sparkles,
  Check,
  Share2,
  ShieldCheck,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { AybarCrestEmblem } from "@/components/brand/AybarCrest";

type ViewportMode = "mobile" | "dual" | "tablet" | "desktop";

/**
 * iPhone 15 Pro Gerçek Donanım Çerçevesi
 * -------------------------------------------------------------
 * Sabit donanım ölçüleri: 414 × 868 px dış titanyum şasi,
 * 12px bezel, 390 × 844 px iç retina ekran (9:19.5 en/boy oranı).
 * Dynamic Island, iOS durum çubuğu ve Home Indicator içerir.
 * Dışarıdan aktarılan CSS donanım ölçeği (scale) ile herhangi bir
 * pencere yüksekliğinde dikey basıklık OLMADAN kusursuz ölçeklenir.
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
  const scaledWidth = Math.round(414 * scale);
  const scaledHeight = Math.round(868 * scale);

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
          width: 414,
          height: 868,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
        className="absolute top-0 left-0"
      >
        {/* Dış Titanyum Şasi & Donanım Butonları */}
        <div className="w-[414px] h-[868px] p-[12px] rounded-[54px] bg-gradient-to-b from-[#1E293B] via-[#0F172A] to-[#090F1C] shadow-[0_30px_90px_rgba(0,0,0,0.7)] ring-2 ring-white/20 relative select-none">
          {/* Anten Çizgileri */}
          <div className="absolute left-[36px] -top-[1px] w-[3px] h-[2px] bg-[#475569] rounded-full" />
          <div className="absolute right-[36px] -top-[1px] w-[3px] h-[2px] bg-[#475569] rounded-full" />
          <div className="absolute left-[36px] -bottom-[1px] w-[3px] h-[2px] bg-[#475569] rounded-full" />
          <div className="absolute right-[36px] -bottom-[1px] w-[3px] h-[2px] bg-[#475569] rounded-full" />

          {/* Sol Yan Donanım Butonları (Aksiyon + Ses Artır/Azalt) */}
          <div className="absolute -left-[3px] top-[115px] w-[3px] h-[26px] bg-[#475569] rounded-l-sm shadow-sm" />
          <div className="absolute -left-[3px] top-[158px] w-[3px] h-[52px] bg-[#475569] rounded-l-sm shadow-sm" />
          <div className="absolute -left-[3px] top-[222px] w-[3px] h-[52px] bg-[#475569] rounded-l-sm shadow-sm" />

          {/* Sağ Yan Güç/Kilit Butonu */}
          <div className="absolute -right-[3px] top-[178px] w-[3px] h-[78px] bg-[#475569] rounded-r-sm shadow-sm" />

          {/* Titanyum İç Yansıma Halkası */}
          <div className="absolute inset-0 rounded-[54px] ring-1 ring-inset ring-white/10 pointer-events-none" />

          {/* İç Ekran: 390 × 844 px */}
          <div className="w-[390px] h-[844px] flex flex-col bg-white overflow-hidden rounded-[42px] ring-1 ring-black/60 shadow-inner">
            {/* iOS 17 Durum Çubuğu + Dinamik Ada */}
            <div className="h-11 bg-cobalt-950 text-white px-7 flex items-center justify-between text-[12px] font-semibold shrink-0 select-none relative z-10">
              <span className="font-sans font-bold tracking-tight">09:41</span>

              {/* Dinamik Ada (Dynamic Island) */}
              <div className="h-[22px] w-[104px] rounded-full bg-black ring-1 ring-white/10 flex items-center justify-end pr-2.5 shadow-md">
                <div className="w-2.5 h-2.5 rounded-full bg-[#0a0f1d] ring-1 ring-white/20 flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-[#1e3a8a]/70" />
                </div>
              </div>

              {/* Durum Simgeleri (5G + Pil) */}
              <div className="flex items-center gap-1.5 text-white/90">
                <span className="text-[10px] tracking-wider font-mono font-bold">5G</span>
                <div className="w-5 h-2.5 rounded-[3px] border border-white/80 p-[1px] flex items-center">
                  <div className="h-full w-full bg-white rounded-[1.5px]" />
                </div>
              </div>
            </div>

            {/* Canlı Web Görünümü (Iframe) */}
            <iframe
              title="AYBAR AKADEMİ Mobil Önizleme"
              src={route}
              key={`mobile-${route}-${reloadKey}`}
              className="w-[390px] flex-1 border-0 bg-white"
            />

            {/* iOS Home Indicator Çubuğu */}
            <div className="h-5 bg-white flex items-center justify-center shrink-0 border-t border-slate-100/60 select-none">
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
 * Sabit donanım ölçüleri: 852 × 1112 px şasi, 16px bezel,
 * 820 × 1080 px iç retina ekran.
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
  const scaledWidth = Math.round(852 * scale);
  const scaledHeight = Math.round(1112 * scale);

  return (
    <div
      style={{ width: scaledWidth, height: scaledHeight }}
      className="relative shrink-0 select-none"
    >
      <div
        style={{
          width: 852,
          height: 1112,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
        className="absolute top-0 left-0"
      >
        <div className="w-[852px] h-[1112px] p-[16px] rounded-[38px] bg-gradient-to-b from-[#1E293B] via-[#0F172A] to-[#090F1C] shadow-[0_30px_90px_rgba(0,0,0,0.7)] ring-2 ring-white/20 relative select-none">
          {/* iPad Ön Kamera Deliği */}
          <div className="absolute top-[6px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#0a0f1d] ring-1 ring-white/20" />

          {/* iPad Üst Butonlar */}
          <div className="absolute -top-[3px] right-[70px] w-[36px] h-[3px] bg-[#475569] rounded-t-sm shadow-sm" />
          <div className="absolute -top-[3px] right-[115px] w-[36px] h-[3px] bg-[#475569] rounded-t-sm shadow-sm" />

          {/* İç Ekran: 820 × 1080 px */}
          <div className="w-[820px] h-[1080px] flex flex-col bg-white overflow-hidden rounded-[24px] ring-1 ring-black/60 shadow-inner">
            {/* iPadOS Durum Çubuğu */}
            <div className="h-8 bg-cobalt-950 text-white px-6 flex items-center justify-between text-[11px] font-semibold shrink-0 select-none">
              <span className="font-sans font-bold tracking-tight">09:41</span>
              <span className="text-[10px] text-cobalt-300 font-mono">
                iPad Air · 820 × 1080
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
              src={route}
              key={`tablet-${route}-${reloadKey}`}
              className="w-[820px] flex-1 border-0 bg-white"
            />

            {/* iPadOS Home Indicator */}
            <div className="h-4 bg-white flex items-center justify-center shrink-0 border-t border-slate-100">
              <div className="w-36 h-1 bg-black/25 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Masaüstü Stüdyo Tarayıcı Penceresi
 * -------------------------------------------------------------
 * macOS tarzı pencereli, canlı SSL URL göstergeli profesyonel görünüm.
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
    w: 1400,
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

  // Eğer masaüstü penceresi 1380px'ten darsa (örn: Yan Yana modunda),
  // gerçek 1400px geniş ekran masaüstü düzenini matematiksel olarak orantılı ölçekle!
  const virtualDesktopWidth = Math.max(1400, boxSize.w);
  const scale = boxSize.w < 1400 ? boxSize.w / 1400 : 1;
  const virtualDesktopHeight = Math.round(boxSize.h / scale);

  return (
    <div className="w-full h-full flex flex-col rounded-2xl border border-white/20 bg-cobalt-950/80 backdrop-blur-md shadow-[0_25px_80px_rgba(0,0,0,0.6)] overflow-hidden">
      {/* Tarayıcı Üst Çubuğu */}
      <div className="h-10 bg-cobalt-950 px-4 border-b border-white/10 flex items-center justify-between gap-3 shrink-0 select-none">
        {/* macOS Trafik Işıkları */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#EF4444] border border-red-600/40" />
          <div className="w-3 h-3 rounded-full bg-[#F59E0B] border border-amber-600/40" />
          <div className="w-3 h-3 rounded-full bg-[#10B981] border border-emerald-600/40" />
        </div>

        {/* Canlı Adres Çubuğu */}
        <div className="flex-1 max-w-lg mx-auto flex items-center gap-2 h-7 px-3 bg-cobalt-900/90 rounded-md border border-white/10 text-xs font-mono text-cobalt-200">
          <Lock className="h-3 w-3 text-emerald-400 shrink-0" />
          <span className="text-white/60">https://</span>
          <span className="text-white font-medium">aybarakademi.com</span>
          <span className="text-crimson-400 font-bold">
            {route === "/" ? "" : route}
          </span>
        </div>

        {/* Sağ Kontroller */}
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-block text-[11px] font-mono text-cobalt-300 bg-white/5 px-2 py-0.5 rounded border border-white/10">
            Masaüstü · 1400px
          </span>
          <button
            type="button"
            onClick={onReload}
            title="Masaüstü Görünümünü Yenile"
            className="p-1 rounded text-cobalt-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <RotateCw className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Canlı Web Görünümü */}
      <div ref={viewportBoxRef} className="relative w-full flex-1 bg-white overflow-hidden">
        <iframe
          title="AYBAR AKADEMİ Masaüstü Önizleme"
          src={route}
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
  const [route, setRoute] = useState<string>("/");
  const [reloadKey, setReloadKey] = useState<number>(0);
  const [isReloading, setIsReloading] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const stageRef = useRef<HTMLDivElement>(null);
  const [stageSize, setStageSize] = useState<{ width: number; height: number }>({
    width: 1200,
    height: 800,
  });

  // URL query senkronizasyonu (mode ve route okuma)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const m = params.get("mode");
    const r = params.get("route");
    if (m === "dual" || m === "mobile" || m === "tablet" || m === "desktop") {
      setMode(m);
    }
    if (r && siteConfig.navigation.some((nav) => nav.href === r)) {
      setRoute(r);
    }
  }, []);

  // Sahne boyutlarını dinamik ResizeObserver ile ölçme
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

  // Sayfa rotası değiştiğinde URL parametrelerini güncelleme
  const handleRouteChange = (newRoute: string) => {
    setRoute(newRoute);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("mode", mode);
      url.searchParams.set("route", newRoute);
      window.history.replaceState({}, "", url.toString());
    }
  };

  // Cihaz modu değiştiğinde URL parametrelerini güncelleme
  const handleModeChange = (newMode: ViewportMode) => {
    setMode(newMode);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("mode", newMode);
      url.searchParams.set("route", route);
      window.history.replaceState({}, "", url.toString());
    }
  };

  // Yenileme aksiyonu
  const handleReload = () => {
    setIsReloading(true);
    setReloadKey((prev) => prev + 1);
    setTimeout(() => setIsReloading(false), 600);
  };

  // Canlı URL panoya kopyalama
  const handleCopyLink = () => {
    if (typeof window === "undefined") return;
    const fullUrl = `${window.location.origin}${route}`;
    navigator.clipboard.writeText(fullUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Donanım ölçek hesaplamaları (Pencere yüksekliğine ve genişliğine göre orantılı küçültme)
  const availableH = Math.max(320, stageSize.height - 32);
  const isXl = stageSize.width >= 1280;
  const sideCardsWidth = isXl && mode === "mobile" ? 540 : 0;
  const mobileAvailableW = Math.max(280, stageSize.width - sideCardsWidth - 32);

  // Telefon Modu: 414 × 868 px şasi tam orantılı ölçekleme
  const mobileScale = Math.min(
    1,
    Math.max(0.4, Math.min(availableH / 868, mobileAvailableW / 414))
  );

  // Yan Yana Modu: Sağdaki telefonun yüksekliğe tam oturması için ölçekleme
  const dualPhoneScale = Math.min(
    0.92,
    Math.max(0.45, availableH / 868)
  );

  // Tablet Modu: 852 × 1112 px şasi tam orantılı ölçekleme
  const tabletAvailableW = Math.max(280, stageSize.width - 32);
  const tabletScale = Math.min(
    1,
    Math.max(0.35, Math.min(availableH / 1112, tabletAvailableW / 852))
  );

  return (
    <div
      data-lenis-prevent
      className="preview-studio fixed inset-0 z-[120] bg-cobalt-950 text-white flex flex-col overflow-hidden select-none"
    >
      {/* Üst Lüks Kontrol Çubuğu */}
      <header className="h-14 px-3 sm:px-6 bg-cobalt-950 border-b border-white/15 flex items-center justify-between gap-2 sm:gap-4 shrink-0 z-20">
        {/* Sol: Logo ve Stüdyo Başlığı */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <AybarCrestEmblem variant="dark" className="h-8 w-8 sm:h-9 sm:w-9" />
          <div>
            <div className="font-serif font-bold text-xs sm:text-sm tracking-wide text-white leading-none">
              {siteConfig.name}
            </div>
            <div className="text-[10px] text-cobalt-300 font-sans mt-0.5 leading-none hidden sm:block">
              Canlı Sunum Stüdyosu
            </div>
          </div>
        </div>

        {/* Orta: Hızlı Sayfa Seçici Haplar */}
        <nav
          aria-label="Sayfa Seçici"
          className="flex items-center gap-1 overflow-x-auto no-scrollbar py-1 px-1 bg-cobalt-900/90 rounded-lg border border-white/15 max-w-[240px] sm:max-w-xs md:max-w-md lg:max-w-none"
        >
          {siteConfig.navigation.map((nav) => {
            const isActive = route === nav.href;
            return (
              <button
                key={nav.href}
                type="button"
                onClick={() => handleRouteChange(nav.href)}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md whitespace-nowrap transition-all duration-150 min-h-[32px] sm:min-h-[36px] flex items-center justify-center ${
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

        {/* Sağ: Cihaz Seçici + Yenile + Tam Ekran */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Cihaz Modu Bölümlenmiş Kontrol */}
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
                  onClick={() => handleModeChange(v.id as ViewportMode)}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-md transition-all duration-150 min-h-[32px] sm:min-h-[36px] ${
                    active
                      ? "bg-crimson-600 text-white shadow-sm font-bold"
                      : "text-cobalt-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5 shrink-0" />
                  <span className="hidden md:inline">{v.label}</span>
                </button>
              );
            })}
          </div>

          {/* Yenile Butonu */}
          <button
            type="button"
            onClick={handleReload}
            title="Tüm Görünümleri Yenile"
            aria-label="Yenile"
            className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg bg-cobalt-900/90 border border-white/15 text-cobalt-200 hover:text-white hover:bg-white/10 flex items-center justify-center transition-all duration-150"
          >
            <RotateCw
              className={`h-3.5 w-3.5 ${isReloading ? "animate-spin" : ""}`}
            />
          </button>

          {/* Tam Ekran Aç */}
          <Link
            href={route}
            target="_blank"
            rel="noopener noreferrer"
            className="h-8 sm:h-9 px-3 rounded-lg bg-white hover:bg-crimson-600 text-cobalt-950 hover:text-white font-bold text-xs inline-flex items-center gap-1.5 transition-colors duration-150 shadow-sm shrink-0"
          >
            <span className="hidden sm:inline">Tam Ekran Aç</span>
            <span className="sm:hidden">Aç</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </Link>
        </div>
      </header>

      {/* Sunum Sahnesi (ResizeObserver ile izlenir) */}
      <main
        ref={stageRef}
        className="flex-1 studio-hero relative overflow-hidden flex items-center justify-center p-3 sm:p-5 lg:p-6"
      >
        {/* 1. TELEFON MODU */}
        {mode === "mobile" && (
          <div className="w-full h-full flex items-center justify-center gap-8">
            {/* Sol Bilgi Kartı (XL ekranlarda görünür) */}
            <div className="hidden xl:flex flex-col gap-3.5 p-5 rounded-2xl bg-cobalt-950/85 border border-white/15 backdrop-blur-md text-white text-xs w-[240px] shrink-0 shadow-2xl">
              <div className="flex items-center gap-2 pb-2 border-b border-white/10">
                <Smartphone className="h-4 w-4 text-crimson-400" />
                <span className="font-serif font-bold text-sm tracking-wide">
                  iPhone 15 Pro
                </span>
              </div>

              <div className="space-y-2 text-[11px]">
                <div className="flex justify-between items-center text-cobalt-300">
                  <span>Çözünürlük</span>
                  <span className="font-mono text-white font-medium">
                    390 × 844 pt
                  </span>
                </div>
                <div className="flex justify-between items-center text-cobalt-300">
                  <span>Piksel Yoğunluğu</span>
                  <span className="font-mono text-white font-medium">
                    @3x Retina
                  </span>
                </div>
                <div className="flex justify-between items-center text-cobalt-300">
                  <span>En/Boy Oranı</span>
                  <span className="font-mono text-white font-medium">
                    9 : 19.5 (Tam Oran)
                  </span>
                </div>
                <div className="flex justify-between items-center text-cobalt-300">
                  <span>Kasa Donanımı</span>
                  <span className="text-white font-medium">Titanyum Bezel</span>
                </div>
                <div className="flex justify-between items-center text-cobalt-300">
                  <span>Etkileşim</span>
                  <span className="text-white font-medium">
                    60fps Akıcı Kaydırma
                  </span>
                </div>
                <div className="flex justify-between items-center text-cobalt-300">
                  <span>Dinamik Ada</span>
                  <span className="text-emerald-400 font-medium">
                    Aktif Simülasyon
                  </span>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 text-[10px] text-cobalt-300 leading-relaxed">
                Pencere boyutundan bağımsız olarak her ekranda matematiksel olarak
                tam 9:19.5 oranında dikey basıklık olmadan ölçeklenir.
              </div>
            </div>

            {/* Ortalanmış iPhone 15 Pro Donanım Çerçevesi */}
            <div className="flex items-center justify-center">
              <IPhone15ProFrame
                route={route}
                reloadKey={reloadKey}
                scale={mobileScale}
              />
            </div>

            {/* Sağ Sayfa Gezgini Kartı (XL ekranlarda görünür) */}
            <div className="hidden xl:flex flex-col gap-3.5 p-5 rounded-2xl bg-cobalt-950/85 border border-white/15 backdrop-blur-md text-white text-xs w-[256px] shrink-0 shadow-2xl">
              <div className="flex items-center gap-2 pb-2 border-b border-white/10">
                <Sparkles className="h-4 w-4 text-crimson-400" />
                <span className="font-serif font-bold text-sm tracking-wide">
                  Hızlı Sayfa Gezgini
                </span>
              </div>

              <div className="flex flex-col gap-1.5">
                {siteConfig.navigation.map((nav, idx) => {
                  const isActive = route === nav.href;
                  return (
                    <button
                      key={nav.href}
                      type="button"
                      onClick={() => handleRouteChange(nav.href)}
                      className={`flex items-center justify-between gap-2 px-3 py-2 rounded-lg text-left transition-all ${
                        isActive
                          ? "bg-crimson-600 text-white font-bold shadow-sm"
                          : "text-cobalt-100 hover:text-white hover:bg-white/10 font-medium"
                      }`}
                    >
                      <span className="whitespace-nowrap">{nav.label}</span>
                      <span
                        className={`text-[10px] font-mono shrink-0 ${
                          isActive ? "text-white/95" : "text-cobalt-400"
                        }`}
                      >
                        0{idx + 1}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
                <div className="flex items-center justify-between text-[10px] text-cobalt-300 font-mono truncate">
                  <span className="truncate">
                    aybarakademi.com{route === "/" ? "" : route}
                  </span>
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-400 shrink-0 ml-1" />
                </div>
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="w-full py-1.5 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-white text-center font-semibold text-xs inline-flex items-center justify-center gap-1.5 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="h-3 w-3 text-emerald-400" />
                      <span>Kopyalandı!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="h-3 w-3 text-cobalt-300" />
                      <span>Bağlantıyı Kopyala</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 2. YAN YANA (DUAL) MODU */}
        {mode === "dual" && (
          <div className="w-full h-full flex items-center justify-center gap-5">
            {/* Sol: Masaüstü Görünümü Monitörü */}
            <div className="flex-1 h-full min-w-0 flex flex-col">
              <StudioDesktopWindow
                route={route}
                reloadKey={reloadKey}
                onReload={handleReload}
              />
            </div>

            {/* Sağ: Orantılı iPhone 15 Pro (Dikey basıklık OLMADAN stageHeight'a göre ölçeklenir) */}
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
          <div className="w-full h-full flex items-center justify-center">
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
