/**
 * AYBAR AKADEMİ — Hedef Bölüme Yumuşak Kaydırma Yardımcısı
 * --------------------------------------------------------------------------
 * Lenis kuruluysa Lenis motorunu kullanarak ipeksi akış sağlar,
 * aksi takdirde yerel modern kaydırma API'sine geri düşer.
 * Üstteki sabit menü (64px mobil / 80px masaüstü) yüksekliğini otomatik hesaba katar.
 */
export function scrollToSection(elementId: string, extraOffset = 16): void {
  if (typeof window === "undefined") return;

  const el = document.getElementById(elementId);
  if (!el) return;

  if (window.__lenis) {
    window.__lenis.scrollTo(el, {
      offset: -(80 + extraOffset),
      duration: 1.25,
    });
    return;
  }

  requestAnimationFrame(() => {
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
  if (window.__lenis) {
    window.__lenis.scrollTo(0, { offset: 0, duration: 1.25 });
    return;
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}
