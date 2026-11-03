import React from "react";

/**
 * Short fade on route change. Full-screen curtains were covering the page
 * and fighting clicks; native scrolling stays in charge.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter w-full max-w-full">{children}</div>;
}
