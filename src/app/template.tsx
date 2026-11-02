"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { LUXURY_EASE } from "@/components/motion/Primitives";
import { AybarCrestEmblem } from "@/components/brand/AybarCrest";

const ROUTE_TITLES: Record<string, string> = {
  "/": "Ana Sayfa",
  "/hakkimizda": "Hakkımızda",
  "/egitim-programlarimiz": "Eğitim Programlarımız",
  "/egitim-modelimiz": "Eğitim Modelimiz",
  "/neden-farkliyiz": "Aybar Akademi Neden Farklı?",
  "/iletisim": "İletişim",
};

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (pathname === "/onizleme") {
    return <>{children}</>;
  }

  const title = ROUTE_TITLES[pathname] || "Aybar Akademi";

  return (
    <>
      {/* Trailing Signal Crimson Edge */}
      <motion.div
        aria-hidden="true"
        className="fixed inset-0 z-[99] pointer-events-none bg-crimson-600"
        initial={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        animate={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}
        transition={{
          duration: 0.62,
          ease: LUXURY_EASE,
          delay: 0.07,
        }}
      />

      {/* Primary Cobalt Shutter with Integrated Vector Crest */}
      <motion.div
        aria-hidden="true"
        className="fixed inset-0 z-[100] pointer-events-none bg-cobalt-900 halftone-cobalt flex flex-col items-center justify-center p-6 text-center"
        initial={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        animate={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}
        transition={{
          duration: 0.52,
          ease: LUXURY_EASE,
          delay: 0.02,
        }}
      >
        <AybarCrestEmblem variant="dark" compact className="h-16 w-16 mb-4" />
        <div className="font-serif font-bold text-sm tracking-[0.14em] text-cobalt-200 uppercase">
          AYBAR AKADEMİ
        </div>
        <div className="mt-1 font-sans font-extrabold text-2xl sm:text-4xl tracking-tightest text-white">
          {title}
        </div>
      </motion.div>

      {/* Content always stays opacity: 1 so it is NEVER invisible */}
      <motion.div
        initial={{ y: 10 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.45,
          ease: LUXURY_EASE,
        }}
      >
        {children}
      </motion.div>
    </>
  );
}
