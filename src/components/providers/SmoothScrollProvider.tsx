"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Doğal 120Hz (iOS ProMotion / Android / macOS) donanım kaydırma sağlayıcısı.
 * Tekerlek veya dokunmatik olaylarını bloke etmez; sayfa geçişlerinde anında
 * en üste (veya #hash hedefine) konumlanır.
 */
export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return <>{children}</>;
}
