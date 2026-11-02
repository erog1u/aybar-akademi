/**
 * Yumuşak ve takılmasız (iOS Safari + Android + Masaüstü %100 uyumlu)
 * hedef bölüme yukarı kaydırma yardımcısı.
 * Üstteki sabit menü (64px mobil / 80px masaüstü) yüksekliğini otomatik hesaba katar.
 */
export function scrollToSection(elementId: string, extraOffset = 16): void {
  if (typeof window === "undefined") return;

  requestAnimationFrame(() => {
    const el = document.getElementById(elementId);
    if (!el) return;

    const headerHeight = window.innerWidth >= 1024 ? 80 : 64;
    const rect = el.getBoundingClientRect();
    const targetTop = Math.max(
      0,
      window.scrollY + rect.top - headerHeight - extraOffset
    );

    window.scrollTo({
      top: targetTop,
      behavior: "smooth",
    });
  });
}

export function scrollToTopSmooth(): void {
  if (typeof window === "undefined") return;
  window.scrollTo({ top: 0, behavior: "smooth" });
}
