/**
 * Scroll a section into view, leaving room for the sticky header
 * (64px on small screens, 80px from 1024px).
 */
export function scrollToSection(elementId: string, extraOffset = 16): void {
  if (typeof window === "undefined") return;

  const el = document.getElementById(elementId);
  if (!el) return;

  const headerHeight = window.innerWidth >= 1024 ? 80 : 64;
  const rect = el.getBoundingClientRect();
  const targetTop = Math.max(
    0,
    window.scrollY + rect.top - headerHeight - extraOffset
  );

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  window.scrollTo({
    top: targetTop,
    behavior: reduceMotion ? "auto" : "smooth",
  });
}

export function scrollToTopSmooth(): void {
  if (typeof window === "undefined") return;
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
}
