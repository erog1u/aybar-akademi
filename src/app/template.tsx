"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { LUXURY_EASE } from "@/components/motion/Primitives";

const ROUTE_LABELS: Record<string, string> = {
  "/": "ANA SAYFA · VIP BİREBİR EĞİTİM",
  "/hakkimizda": "33 YILLIK DENEYİM · HAKKIMIZDA",
  "/egitim-programlarimiz": "ÖZEL DERS · EĞİTİM PROGRAMLARIMIZ",
  "/egitim-modelimiz": "VIP SÜREÇ YÖNETİMİ · EĞİTİM MODELİMİZ",
  "/neden-farkliyiz": "5 STANDART İLKE · NEDEN FARKLIYIZ?",
  "/iletisim": "ÜCRETSİZ KEŞİF · İLETİŞİM",
};

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (pathname === "/onizleme") {
    return <>{children}</>;
  }

  const label = ROUTE_LABELS[pathname] || "AYBAR AKADEMİ";

  return (
    <>
      {/* Layer 1: Signal Crimson Accent Trailing Blade */}
      <motion.div
        aria-hidden="true"
        className="fixed inset-0 z-[99] pointer-events-none bg-crimson-600"
        initial={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        animate={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}
        transition={{
          duration: 0.68,
          ease: LUXURY_EASE,
          delay: 0.09,
        }}
      />

      {/* Layer 2: Electric Royal Cobalt Primary Shutter */}
      <motion.div
        aria-hidden="true"
        className="fixed inset-0 z-[100] pointer-events-none bg-gradient-to-br from-[#0052D9] via-cobalt-700 to-cobalt-950 halftone-cobalt flex flex-col justify-between p-6 sm:p-10"
        initial={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        animate={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}
        transition={{
          duration: 0.58,
          ease: LUXURY_EASE,
          delay: 0.02,
        }}
      >
        <div className="flex items-center justify-between font-mono text-[11px] tracking-[0.18em] text-cobalt-100">
          <span>[AYBAR AKADEMİ]</span>
          <span>%100 MAARİF MODELİ</span>
        </div>

        <div className="my-auto max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-crimson-600 text-white font-mono text-[10px] font-bold tracking-[0.16em] mb-3 shadow-crimson">
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-ping" />
            BAŞARI YÜKLENİYOR...
          </div>
          <div className="font-sans font-extrabold text-2xl sm:text-4xl tracking-tightest text-white">
            {label}
          </div>
        </div>

        <div className="font-mono text-[10px] tracking-[0.16em] text-cobalt-200">
          BİLGİNİN KAYNAĞI, BAŞARININ MİMARI · 33 YILLIK DENEYİM
        </div>
      </motion.div>

      {/* Crisp Content Entrance */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.55,
          ease: LUXURY_EASE,
          delay: 0.1,
        }}
      >
        {children}
      </motion.div>
    </>
  );
}
