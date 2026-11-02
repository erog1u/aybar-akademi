"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  X,
  ArrowUpRight,
  MapPin,
  Globe2,
  Check,
} from "lucide-react";
import {
  programCategories,
  programsIntro,
  ProgramCategory,
  ProgramItem,
} from "@/data/content";
import { getWhatsAppUrl } from "@/config/site";
import {
  LUXURY_EASE,
  MagneticLink,
  NextChapterBanner,
} from "@/components/motion/Primitives";

interface SelectedProgram {
  item: ProgramItem;
  category: ProgramCategory;
}

export default function ProgramExplorer() {
  const [activeCatId, setActiveCatId] = useState<string>("all");
  const [query, setQuery] = useState<string>("");
  const [selected, setSelected] = useState<SelectedProgram | null>(null);

  useEffect(() => {
    const syncHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && programCategories.some((c) => c.id === hash)) {
        setActiveCatId(hash);
      }
    };
    syncHash();
    window.addEventListener("popstate", syncHash);
    return () => window.removeEventListener("popstate", syncHash);
  }, []);

  const handleCatSelect = (id: string) => {
    setActiveCatId(id);
    const newUrl =
      window.location.pathname + (id === "all" ? "" : `#${id}`);
    window.history.replaceState(null, "", newUrl);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLocaleLowerCase("tr");
    return programCategories
      .filter((c) => activeCatId === "all" || c.id === activeCatId)
      .map((cat) => {
        if (!q) return cat;
        const catMatch =
          cat.title.toLocaleLowerCase("tr").includes(q) ||
          cat.tagline.toLocaleLowerCase("tr").includes(q);
        if (catMatch) return cat;

        const matchingItems = cat.items.filter(
          (it) =>
            it.title.toLocaleLowerCase("tr").includes(q) ||
            (it.description || "").toLocaleLowerCase("tr").includes(q) ||
            (it.leaderNote || "").toLocaleLowerCase("tr").includes(q) ||
            it.subjects.some((s) => s.toLocaleLowerCase("tr").includes(q))
        );
        return { ...cat, items: matchingItems };
      })
      .filter((cat) => cat.items.length > 0);
  }, [activeCatId, query]);

  return (
    <>
      {/* Sticky Filter & Search Bar */}
      <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-xl border-b border-cobalt-900/12 shadow-sm">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 py-4 space-y-3">
          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            <button
              type="button"
              onClick={() => handleCatSelect("all")}
              className={`relative px-4 py-2 text-xs sm:text-sm font-bold whitespace-nowrap transition-colors border ${
                activeCatId === "all"
                  ? "bg-cobalt-700 text-white border-cobalt-700"
                  : "bg-paper text-ink hover:bg-cobalt-50 border-cobalt-900/12"
              }`}
            >
              Tüm Programlar
            </button>

            {programCategories.map((cat) => {
              const isActive = activeCatId === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleCatSelect(cat.id)}
                  className={`relative px-4 py-2 text-xs sm:text-sm font-bold whitespace-nowrap transition-colors border ${
                    isActive
                      ? "bg-cobalt-700 text-white border-cobalt-700"
                      : "bg-paper text-ink hover:bg-cobalt-50 border-cobalt-900/12"
                  }`}
                >
                  {cat.shortTitle}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-muted" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Sınav, ders veya yabancı dil ara (örn: YKS, LGS, KPSS Eğitim Bilimleri, IELTS, Almanca, Psikoloji)..."
              className="w-full pl-10 pr-10 py-2.5 text-sm bg-paper border border-cobalt-900/15 focus:outline-none focus:border-cobalt-700 text-ink placeholder:text-ink-subtle"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Aramayı Temizle"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-muted hover:text-crimson-600"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Program Categories Stream */}
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 py-14 sm:py-20 space-y-20">
        {filtered.length === 0 ? (
          <div className="bg-white border border-cobalt-900/12 p-12 text-center">
            <p className="text-lg font-bold text-ink">
              Aradığınız kritere uygun ders veya program bulunamadı.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setActiveCatId("all");
              }}
              className="mt-4 px-5 py-2.5 bg-cobalt-700 text-white text-xs font-bold"
            >
              Tüm Programları Göster
            </button>
          </div>
        ) : (
          filtered.map((cat) => (
            <section key={cat.id} id={cat.id} className="scroll-mt-44">
              {/* Category Header */}
              <div className="pb-6 mb-8 border-b border-cobalt-900/12">
                <div className="inline-block px-3 py-1 bg-crimson-600 text-white text-xs font-bold mb-3">
                  {cat.tagline}
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tightest text-ink">
                  {cat.title}
                </h2>
                <p className="mt-2.5 text-base text-ink-muted max-w-3xl leading-relaxed">
                  {cat.summary}
                </p>
              </div>

              {/* Category Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cat.items.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelected({ item, category: cat })}
                    className={`group cursor-pointer border transition-all duration-300 flex flex-col justify-between ${
                      item.featured
                        ? "md:col-span-2 bg-cobalt-950 text-white border-cobalt-900 p-7 sm:p-10 shadow-studio"
                        : "bg-white text-ink border-cobalt-900/15 hover:border-cobalt-700 p-6 sm:p-8 shadow-card"
                    }`}
                  >
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <h3
                          className={`text-xl sm:text-2xl font-extrabold tracking-tight ${
                            item.featured ? "text-white" : "text-ink"
                          }`}
                        >
                          {item.title}
                        </h3>
                        {item.badge && (
                          <span
                            className={`text-xs font-bold px-3 py-1 ${
                              item.featured
                                ? "bg-crimson-600 text-white"
                                : "bg-cobalt-50 text-cobalt-800 border border-cobalt-700/20"
                            }`}
                          >
                            {item.badge}
                          </span>
                        )}
                      </div>

                      {item.leaderNote && (
                        <p
                          className={`text-sm font-bold mb-2 ${
                            item.featured ? "text-cobalt-200" : "text-cobalt-800"
                          }`}
                        >
                          {item.leaderNote}
                        </p>
                      )}

                      {item.description && (
                        <p
                          className={`text-sm leading-relaxed mb-4 ${
                            item.featured
                              ? "text-cobalt-100/90"
                              : "text-ink-muted"
                          }`}
                        >
                          {item.description}
                        </p>
                      )}

                      <div className="flex flex-wrap gap-2 mt-4">
                        {item.subjects.map((sub, sIdx) => (
                          <span
                            key={sIdx}
                            className={`text-xs px-3 py-1.5 font-medium border ${
                              sub.includes("KOÇLUK")
                                ? "bg-crimson-600 text-white border-crimson-600 font-bold"
                                : item.featured
                                ? "bg-white/10 text-white border-white/15"
                                : "bg-paper text-ink border-cobalt-900/10"
                            }`}
                          >
                            {sub}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div
                      className={`mt-6 pt-4 border-t flex items-center justify-between text-xs font-bold ${
                        item.featured
                          ? "border-white/15 text-cobalt-200 group-hover:text-white"
                          : "border-cobalt-900/10 text-cobalt-700 group-hover:text-crimson-600"
                      }`}
                    >
                      <span>Detayları Gör & Özel Ders Planla</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))
        )}

        {/* Closing Verbatim Banner */}
        <div className="bg-cobalt-700 halftone-cobalt text-white p-8 sm:p-12 border border-cobalt-900 shadow-studio flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <p className="font-serif italic text-xl sm:text-2xl text-white leading-relaxed max-w-3xl">
            “{programsIntro.closing}”
          </p>
          <div className="shrink-0">
            <MagneticLink href={getWhatsAppUrl()} external variant="crimson">
              Ücretsiz Tanışma Seansı Planla
            </MagneticLink>
          </div>
        </div>
      </div>

      {/* Next Subpage Navigator */}
      <NextChapterBanner
        title="VIP Süreç Yönetimi ve Eğitim Modelimizi Keşfedin"
        description="Aybar Akademi'nin ezberci kalıpları yıkan birebir eğitim ve koçluk felsefesi."
        href="/egitim-modelimiz"
        buttonLabel="Eğitim Modelimizi İncele"
      />

      {/* Slide-Over Program Drawer */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="fixed inset-0 z-[70] bg-cobalt-950/60 backdrop-blur-sm"
            />
            <motion.aside
              data-lenis-prevent
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.38, ease: LUXURY_EASE }}
              className="fixed top-0 right-0 bottom-0 z-[80] w-full max-w-lg bg-white text-ink border-l border-cobalt-900/15 shadow-2xl flex flex-col justify-between overflow-y-auto"
            >
              <div>
                <div className="bg-cobalt-900 text-white p-6 flex items-start justify-between gap-4">
                  <div>
                    <div className="inline-block px-2.5 py-0.5 bg-crimson-600 text-white text-xs font-bold mb-2">
                      {selected.category.title}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                      {selected.item.title}
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelected(null)}
                    aria-label="Kapat"
                    className="h-9 w-9 border border-white/20 flex items-center justify-center text-white hover:bg-white/10 shrink-0"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <div className="p-6 space-y-6">
                  {selected.item.leaderNote && (
                    <div className="p-4 bg-cobalt-50 border-l-4 border-cobalt-700 text-sm font-bold text-cobalt-900">
                      {selected.item.leaderNote}
                    </div>
                  )}

                  {selected.item.description && (
                    <p className="text-sm text-ink-muted leading-relaxed">
                      {selected.item.description}
                    </p>
                  )}

                  <div>
                    <h4 className="text-xs font-bold tracking-wider uppercase text-cobalt-800 mb-3">
                      Kapsanan Dersler ve Alanlar
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selected.item.subjects.map((sub, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-paper border border-cobalt-900/12 text-xs font-semibold text-ink"
                        >
                          <Check className="h-3.5 w-3.5 text-crimson-600" />
                          <span>{sub}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-cobalt-900/10">
                    <div className="p-4 bg-paper border border-cobalt-900/10">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-cobalt-800 mb-1">
                        <MapPin className="h-3.5 w-3.5 text-crimson-600" />
                        <span>İstanbul Yüz Yüze</span>
                      </div>
                      <p className="text-xs text-ink-muted">
                        39 ilçenin tamamında evinizin konforunda birebir ders.
                      </p>
                    </div>
                    <div className="p-4 bg-paper border border-cobalt-900/10">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-cobalt-800 mb-1">
                        <Globe2 className="h-3.5 w-3.5 text-cobalt-700" />
                        <span>Tüm Türkiye Online</span>
                      </div>
                      <p className="text-xs text-ink-muted">
                        81 ilde yüksek verimli, canlı ve interaktif özel ders.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-cobalt-900/12 bg-paper-warm">
                <a
                  href={getWhatsAppUrl(
                    `Merhaba, Aybar Akademi "${selected.item.title}" birebir özel ders programı ve 30 dakikalık ücretsiz tanışma seansı hakkında bilgi almak istiyorum.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-crimson-600 hover:bg-cobalt-900 text-white py-4 px-6 text-sm font-bold transition-colors shadow-crimson"
                >
                  <span>Bu Program İçin WhatsApp’tan Bilgi Al</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
