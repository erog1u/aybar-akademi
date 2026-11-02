"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";

export default function SiteShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // The simulator preview page mounts its own isolated viewport frames,
  // so we skip the outer site chrome to prevent duplicate navbar/footer and double scrollbars.
  if (pathname === "/onizleme" || pathname?.startsWith("/onizleme/")) {
    return <>{children}</>;
  }

  return (
    <>
      <div className="min-h-screen flex flex-col w-full max-w-full overflow-x-hidden">
        <Navbar />
        <main className="flex-1 w-full max-w-full overflow-x-hidden">{children}</main>
        <Footer />
      </div>
      <FloatingWhatsApp />
    </>
  );
}
