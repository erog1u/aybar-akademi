"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import BrandText from "@/components/brand/BrandText";

/**
 * Gerçek Aybar Akademi dairesel armasını (siteConfig.logos.emblem)
 * dikdörtgen kutu görüntüsü olmadan, dairesel madalyon çerçeve ve
 * Plus Jakarta Sans (font-brand) tipografisiyle sayfaya entegre eder.
 */
export function AybarCrestEmblem({
  variant = "light",
  className = "h-12 w-12",
}: {
  variant?: "light" | "dark";
  className?: string;
  compact?: boolean;
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-full shrink-0 overflow-hidden ${
        variant === "dark"
          ? "bg-white p-[2px] ring-2 ring-white/25 shadow-md"
          : "bg-white p-[1.5px] ring-1 ring-cobalt-900/15 shadow-sm"
      } ${className}`}
    >
      <img
        src={siteConfig.logos.emblem}
        alt={siteConfig.name}
        width={96}
        height={96}
        decoding="async"
        className="w-full h-full object-contain rounded-full"
      />
    </div>
  );
}

export function AybarBrandLockup({
  variant = "light",
  compactOnMobile = false,
}: {
  variant?: "light" | "dark";
  compactOnMobile?: boolean;
}) {
  return (
    <div className="inline-flex items-center gap-2 sm:gap-3.5 select-none min-w-0">
      <div className="transition-transform duration-300 group-hover:scale-105 shrink-0">
        <AybarCrestEmblem
          variant={variant}
          className="h-9 w-9 sm:h-12 sm:w-12"
        />
      </div>
      <div className="flex flex-col min-w-0 justify-center">
        {/* Ana Kurumsal Başlık (AYBARİst AKADEMİ) — Türkçedeki noktalı büyük İ harfinin üst noktası asla kırpılmaz */}
        <div className="font-brand font-black text-[0.92rem] sm:text-[1.15rem] tracking-[0.01em] leading-tight pt-0.5 pb-0.5 flex items-center gap-1.5 antialiased select-none whitespace-nowrap">
          <span className={variant === "dark" ? "brand-on-dark" : ""}>
            <BrandText>{siteConfig.name}</BrandText>
          </span>
        </div>
        {/* Kurumsal Alt Başlık */}
        <div
          className={`text-[8.5px] sm:text-[10px] font-bold tracking-[0.06em] uppercase items-center gap-1 sm:gap-1.5 whitespace-nowrap select-none ${
            compactOnMobile ? "hidden xl:flex" : "flex"
          } ${
            variant === "dark" ? "text-cobalt-200/90" : "text-cobalt-900/65"
          }`}
        >
          <span>Eğitim</span>
          <span className="h-1 w-1 rounded-full bg-crimson-600 shrink-0" />
          <span>Yayıncılık</span>
          <span className="h-1 w-1 rounded-full bg-crimson-600 shrink-0" />
          <span>Danışmanlık</span>
        </div>
      </div>
    </div>
  );
}

export function AybarInstitutionalSeal({
  variant = "light",
  className = "",
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  return (
    <div
      className={`inline-flex flex-col items-center text-center ${className}`}
    >
      <div
        className={`relative rounded-full p-2 ${
          variant === "dark"
            ? "bg-white/10 ring-1 ring-white/25"
            : "bg-cobalt-50/90 ring-1 ring-cobalt-900/12"
        }`}
      >
        <div className="rounded-full bg-white p-1.5 shadow-md">
          <img
            src={siteConfig.logos.emblem}
            alt={siteConfig.name}
            width={136}
            height={136}
            decoding="async"
            className="h-28 w-28 sm:h-32 sm:w-32 object-contain rounded-full"
          />
        </div>
      </div>

      <div className="mt-4 font-brand font-extrabold text-sm sm:text-base tracking-[0.06em] text-cobalt-950">
        <BrandText>{siteConfig.name}</BrandText>
      </div>
    </div>
  );
}
