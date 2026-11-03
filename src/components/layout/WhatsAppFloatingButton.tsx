"use client";

import React, { useState } from "react";
import { getWhatsAppUrl } from "@/config/site";
import { checkRateLimit, recordRateLimitAttempt } from "@/lib/security";

interface WhatsAppFloatingButtonProps {
  customMessage?: string;
  tooltipText?: string;
  className?: string;
}

export default function WhatsAppFloatingButton({
  customMessage,
  tooltipText = "Bilgi Al",
  className = "",
}: WhatsAppFloatingButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Aşırı tıklama (click-spam / DDoS simülasyonu) engelleme
    const rate = checkRateLimit("floating_whatsapp_click", 5, 30);
    if (!rate.allowed) {
      e.preventDefault();
      alert(
        `Lütfen kısa bir süre bekleyiniz (${rate.retryAfterSeconds} saniye).`
      );
      return;
    }
    recordRateLimitAttempt("floating_whatsapp_click");
  };

  const safeUrl = getWhatsAppUrl(customMessage);

  return (
    <div
      style={{
        bottom: "calc(1rem + env(safe-area-inset-bottom, 0px))",
        right: "calc(1rem + env(safe-area-inset-right, 0px))",
      }}
      className={`fixed bottom-[calc(1rem+env(safe-area-inset-bottom,0px))] right-[calc(1rem+env(safe-area-inset-right,0px))] z-40 flex flex-col items-end gap-2 pointer-events-none select-none ${className}`}
    >
      {/* İpucu / Rozet Balonu */}
      <div
        className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cobalt-950/95 text-white text-xs font-semibold shadow-lg backdrop-blur-sm border border-white/10 transition-all duration-300 transform ${
          isHovered
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span>{tooltipText}</span>
      </div>

      <a
        href={safeUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp İletişim Hattı - Bilgi Al"
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="pointer-events-auto group relative h-14 w-14 min-h-14 min-w-14 rounded-full bg-[#25D366] hover:bg-[#1ebe5b] active:scale-95 text-white shadow-xl flex items-center justify-center transition-colors focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none touch-manipulation cursor-pointer"
      >
        {/* Çevrim İçi Canlı Radar Sinyali */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5" aria-hidden="true">
          <span className="radar-beacon absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-white shadow-sm" />
        </span>

        {/* WhatsApp İkonu */}
        <svg
          viewBox="0 0 24 24"
          className="h-7 w-7 fill-current shrink-0"
          aria-hidden="true"
        >
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.6 5.95L0 24l6.33-1.66a11.87 11.87 0 0 0 5.73 1.46h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.17-3.44-8.42ZM12.07 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.76.98 1-3.66-.24-.38a9.85 9.85 0 0 1-1.51-5.25c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.13 1.03 7 2.9a9.83 9.83 0 0 1 2.9 7c0 5.45-4.44 9.89-9.89 9.89Zm5.43-7.41c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.65.08-.3-.15-1.25-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35Z" />
        </svg>

      </a>
    </div>
  );
}
