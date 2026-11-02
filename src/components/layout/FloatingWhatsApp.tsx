"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "@/config/site";

export default function FloatingWhatsApp() {
  return (
    <>
      {/* Desktop/Tablet: Sleek Fixed Bottom-Right Concierge Pill */}
      <motion.a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Danışma Hattı - Ücretsiz 30 Dk Tanışma Planla"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="group hidden sm:flex fixed bottom-6 right-6 z-50 items-center bg-cobalt-950 hover:bg-crimson-600 text-white border border-white/20 shadow-studio transition-colors duration-300"
      >
        <div className="flex flex-col px-4 py-2.5 border-r border-white/15">
          <span className="font-mono text-[9px] tracking-[0.18em] text-cobalt-200 group-hover:text-white/90">
            WHATSAPP DANIŞMA HATTI
          </span>
          <span className="text-xs font-bold tracking-tight">
            Ücretsiz 30 Dk Tanışma Planla
          </span>
        </div>
        <div className="relative h-12 w-12 flex items-center justify-center bg-[#25D366] text-white shrink-0">
          <span className="absolute inset-0 bg-[#25D366] animate-ping opacity-20" />
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5 fill-current relative z-10"
            aria-hidden="true"
          >
            <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.6 5.95L0 24l6.33-1.66a11.87 11.87 0 0 0 5.73 1.46h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.17-3.44-8.42ZM12.07 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.76.98 1-3.66-.24-.38a9.85 9.85 0 0 1-1.51-5.25c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.13 1.03 7 2.9a9.83 9.83 0 0 1 2.9 7c0 5.45-4.44 9.89-9.89 9.89Zm5.43-7.41c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.65.08-.3-.15-1.25-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35Z" />
          </svg>
        </div>
      </motion.a>

      {/* Mobile: Native-App-Grade Fixed Bottom Action Dock */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-50 bg-cobalt-950/95 backdrop-blur-xl border-t border-white/15 px-3 pt-2.5 pb-[max(0.65rem,env(safe-area-inset-bottom))] shadow-[0_-10px_30px_rgba(4,21,59,0.28)]">
        <div className="grid grid-cols-12 gap-2">
          {/* Phone Call (Col 1-5) */}
          <a
            href={siteConfig.contact.phoneHref}
            className="col-span-5 bg-white/10 hover:bg-white/15 active:bg-white/20 border border-white/20 text-white h-11 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
          >
            <Phone className="h-4 w-4 text-crimson-500 shrink-0" />
            <span>Hemen Ara</span>
          </a>

          {/* WhatsApp CTA (Col 6-12) */}
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-7 bg-crimson-600 hover:bg-crimson-700 active:bg-crimson-800 text-white h-11 text-xs font-extrabold flex items-center justify-center gap-1.5 shadow-crimson transition-colors"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 fill-current shrink-0"
              aria-hidden="true"
            >
              <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.6 5.95L0 24l6.33-1.66a11.87 11.87 0 0 0 5.73 1.46h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.17-3.44-8.42ZM12.07 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.76.98 1-3.66-.24-.38a9.85 9.85 0 0 1-1.51-5.25c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.13 1.03 7 2.9a9.83 9.83 0 0 1 2.9 7c0 5.45-4.44 9.89-9.89 9.89Zm5.43-7.41c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.65.08-.3-.15-1.25-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35Z" />
            </svg>
            <span>Ücretsiz Tanışma</span>
          </a>
        </div>
      </div>
    </>
  );
}
