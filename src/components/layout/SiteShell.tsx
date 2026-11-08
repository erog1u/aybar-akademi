"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import { BASE_PATH } from "@/config/site";

export default function SiteShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Ziyaret sayacı: yalnız sayfa adresi gönderilir, çerez yok.
  useEffect(() => {
    if (!pathname || pathname.startsWith("/yonetim") || pathname.startsWith("/onizleme")) return;
    try { navigator.sendBeacon(`${BASE_PATH}/api/sayac`, pathname); } catch {}
  }, [pathname]);

  // The simulator preview page mounts its own isolated viewport frames,
  // so we skip the outer site chrome to prevent duplicate navbar/footer and double scrollbars.
  if (pathname === "/onizleme" || pathname?.startsWith("/onizleme/")) {
    return <>{children}</>;
  }

  return (
    <>
      <div className="min-h-screen flex flex-col w-full max-w-full">
        <AnnouncementBar />
        <Navbar />
        <main id="main-content" className="flex-1 w-full max-w-full">
          {children}
        </main>
        <Footer />
      </div>
      {pathname?.startsWith("/yonetim") ? null : <FloatingWhatsApp />}
    </>
  );
}
