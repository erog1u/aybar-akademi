"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ReactLenis, useLenis } from "lenis/react";

function RouteScrollReset({ isDesktop }: { isDesktop: boolean }) {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (!isDesktop || !lenis) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
      return;
    }

    lenis.stop();
    lenis.scrollTo(0, { immediate: true, force: true });

    const rafId = requestAnimationFrame(() => {
      lenis.start();
      lenis.resize();
    });

    return () => cancelAnimationFrame(rafId);
  }, [pathname, lenis, isDesktop]);

  return null;
}

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px) and (pointer: fine)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  if (!isDesktop) {
    return (
      <>
        <RouteScrollReset isDesktop={false} />
        {children}
      </>
    );
  }

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.0,
        smoothWheel: true,
        wheelMultiplier: 1.0,
      }}
    >
      <RouteScrollReset isDesktop={true} />
      {children}
    </ReactLenis>
  );
}
