"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { LUXURY_EASE } from "@/components/motion/Primitives";

/**
 * Sıfır kasma / 120 FPS sayfa geçiş çizgisi:
 * Tam ekran clip-path perde yerine yalnızca GPU hızlandırmalı ince üst çizgi
 * kullanır; dokunmatik kaydırmayı ve tıklamaları hiçbir zaman kilitlemez.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (pathname === "/onizleme" || pathname?.startsWith("/onizleme/")) {
    return <>{children}</>;
  }

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 h-[2.5px] z-[95] pointer-events-none bg-crimson-600 origin-left will-change-transform"
        initial={{ scaleX: 0, opacity: 1 }}
        animate={{ scaleX: 1, opacity: 0 }}
        transition={{
          scaleX: { duration: 0.28, ease: LUXURY_EASE },
          opacity: { duration: 0.2, delay: 0.24 },
        }}
      />
      {children}
    </>
  );
}
