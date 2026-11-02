"use client";

import React from "react";
import { siteConfig } from "@/config/site";

/**
 * Gerçek Aybar Akademi dairesel armasını (siteConfig.logos.emblem)
 * dikdörtgen kutu görüntüsü olmadan, dairesel madalyon çerçeve ve
 * kurumsal tipografi sistemiyle sayfaya entegre eder.
 */
export function AybarCrestEmblem({
  variant = "light",
  className = "h-12 w-12",
}: {
  variant?: "light" | "dark" | "watermark";
  className?: string;
  compact?: boolean;
}) {
  if (variant === "watermark") {
    return (
      <div
        aria-hidden="true"
        className={`rounded-full overflow-hidden select-none pointer-events-none opacity-[0.07] mix-blend-screen ${className}`}
      >
        <img
          src={siteConfig.logos.emblem}
          alt=""
          className="w-full h-full object-contain rounded-full invert grayscale"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-full shrink-0 overflow-hidden ${
        variant === "dark"
          ? "bg-white p-[2px] ring-4 ring-white/15 shadow-lg"
          : "bg-white p-[1px] ring-1 ring-cobalt-900/15 shadow-sm"
      } ${className}`}
    >
      <img
        src={siteConfig.logos.emblem}
        alt={siteConfig.name}
        className="w-full h-full object-contain rounded-full"
      />
    </div>
  );
}

export function AybarBrandLockup({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  return (
    <div className="inline-flex items-center gap-3.5 select-none">
      <div className="transition-transform duration-300 group-hover:scale-105">
        <AybarCrestEmblem
          variant={variant}
          className="h-11 w-11 sm:h-12 sm:w-12"
        />
      </div>
      <div className="flex flex-col">
        <span
          className={`font-serif font-bold text-lg sm:text-[1.22rem] tracking-tight leading-none ${
            variant === "dark" ? "text-white" : "text-cobalt-900"
          }`}
        >
          {siteConfig.name}
        </span>
        <span
          className={`text-[11px] font-medium tracking-[0.05em] mt-1 ${
            variant === "dark" ? "text-cobalt-200" : "text-ink-muted"
          }`}
        >
          {siteConfig.legalSubtitle}
        </span>
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
      {/* Dairesel Çift Halkalı Kurumsal Madalyon */}
      <div
        className={`relative rounded-full p-2 ${
          variant === "dark"
            ? "bg-white/10 ring-1 ring-white/25"
            : "bg-cobalt-50/80 ring-1 ring-cobalt-900/12"
        }`}
      >
        <div className="rounded-full bg-white p-1 shadow-md">
          <img
            src={siteConfig.logos.emblem}
            alt={siteConfig.name}
            className="h-28 w-28 sm:h-32 sm:w-32 object-contain rounded-full"
          />
        </div>
      </div>

      {/* Entegre Kurumsal Slogan Bandı */}
      <div
        className={`mt-3.5 px-4 py-1.5 border font-serif italic text-xs sm:text-sm tracking-wide ${
          variant === "dark"
            ? "bg-cobalt-900/90 border-white/20 text-cobalt-100"
            : "bg-cobalt-900 border-cobalt-900 text-white"
        }`}
      >
        “{siteConfig.motto}”
      </div>
    </div>
  );
}
