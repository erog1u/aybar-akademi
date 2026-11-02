"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ReactLenis, useLenis } from "lenis/react";

function RouteScrollReset() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    lenis.stop();
    lenis.scrollTo(0, { immediate: true, force: true });

    const rafId = requestAnimationFrame(() => {
      lenis.start();
      lenis.resize();
    });

    return () => cancelAnimationFrame(rafId);
  }, [pathname, lenis]);

  return null;
}

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.09,
        duration: 1.1,
        smoothWheel: true,
        wheelMultiplier: 0.95,
      }}
    >
      <RouteScrollReset />
      {children}
    </ReactLenis>
  );
}
