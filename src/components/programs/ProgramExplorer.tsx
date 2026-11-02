"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  X,
  LayoutGrid,
  List,
  ArrowUpRight,
  Check,
  Clock,
  Sparkles,
  MapPin,
  GraduationCap,
  BookOpen,
  ShieldCheck,
  MessageSquare,
  Phone,
  Award,
} from "lucide-react";
import {
  programCategories,
  programsIntro,
  ProgramCategory,
  ProgramItem,
} from "@/data/content";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import {
  LUXURY_EASE,
  MagneticLink,
  SwissSectionHeader,
} from "@/components/motion/Primitives";

interface SelectedProgramState {
  item: ProgramItem;
  category: ProgramCategory;
}

export default function ProgramExplorer() {
  const [activeCategoryId, setActiveCategoryId] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");
  const [selectedProgram, setSelectedProgram] =
    useState<SelectedProgramState | null>(null);

  // Sync with URL Hash on Mount and PopState
  useEffect(() => {
    if (typeof window === "undefined") return;

    const syncHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        const found = programCategories.find((c) => c.id === hash);
        if (found) {
          setActiveCategoryId(found.id);
        }
      }
    };

    syncHash();
    window.addEventListener("popstate", syncHash);
    return () => window.removeEventListener("popstate", syncHash);
  }, []);

  // Update URL Hash cleanly when user picks a category
  const handleCategorySelect = (id: string) => {
    setActiveCategoryId(id);
    if (typeof window !== "undefined") {
      const newHash = id === "all" ? "" : `#${id}`;
      const newUrl =
        window.location.pathname + (newHash ? newHash : "") + window.location.search;
      window.history.replaceState(null, "", newUrl);
    }
  };

  // Body Scroll Lock for Drawer
  useEffect(() => {
    if (selectedProgram) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [selectedProgram]);

  // Keyboard Close (ESC)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProgram(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Filter Categories & Items
  const filteredCategories = useMemo(() => {
    const query = searchQuery.trim().toLocaleLowerCase("tr");

    return programCategories
      .filter((cat) => {
        if (activeCategoryId !== "all" && cat.id !== activeCategoryId) {
          return false;
        }
        return true;
      })
      .map((cat) => {
        if (!query) {
          return cat;
        }

        const catMatches =
          cat.title.toLocaleLowerCase("tr").includes(query) ||
          cat.tagline.toLocaleLowerCase("tr").includes(query) ||
          cat.summary.toLocaleLowerCase("tr").includes(query) ||
          cat.shortTitle.toLocaleLowerCase("tr").includes(query);

        const matchedItems = cat.items.filter((item) => {
          if (catMatches) return true;
          const titleMatch = item.title.toLocaleLowerCase("tr").includes(query);
          const badgeMatch = item.badge?.toLocaleLowerCase("tr").includes(query);
          const leaderMatch = item.leaderNote
            ?.toLocaleLowerCase("tr")
            .includes(query);
          const descMatch = item.description
            ?.toLocaleLowerCase("tr")
            .includes(query);
          const subjectMatch = item.subjects.some((s) =>
            s.toLocaleLowerCase("tr").includes(query)
          );

          return titleMatch || badgeMatch || leaderMatch || descMatch || subjectMatch;
        });

        return {
          ...cat,
          items: matchedItems,
        };
      })
      .filter((cat) => cat.items.length > 0);
  }, [activeCategoryId, searchQuery]);

  // Total visible programs count
  const totalVisibleCount = useMemo(() => {
    return filteredCategories.reduce((acc, cat) => acc + cat.items.length, 0);
  }, [filteredCategories]);

  // Total all programs count
  const totalAllProgramsCount = useMemo(() => {
    return programCategories.reduce((acc, cat) => acc + cat.items.length, 0);
  }, []);

  const openDrawer = useCallback(
    (item: ProgramItem, category: ProgramCategory) => {
      setSelectedProgram({ item, category });
    },
    []
  );

  return (
    <section id="program-katalog" className="relative bg-paper py-12 lg:py-20">
      {/* Swiss Architectural Background Line Texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 swiss-grid-lines opacity-40"
      />

      <div className="relative max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Lead Folio */}
        <SwissSectionHeader
          index="01"
          eyebrow="AKADEMİK MÜFREDAT & ÖZEL DERS KATALOĞU"
          title={
            <span>
              Tüm Alanlarda{" "}
              <span className="font-serif italic font-normal text-cobalt-700">
                Birebir VIP
              </span>{" "}
              Eğitim Programları
            </span>
          }
          subtitle="İlkokuldan üniversiteye, LGS ve YKS maratonlarından 11 dünya diline kadar tüm eğitimlerimiz öğrencinin öğrenme profiline göre kişiselleştirilir."
          rightSlot={
            <div className="flex items-center gap-3 font-mono text-xs">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 border border-cobalt-900/15 bg-white text-cobalt-900">
                <span className="h-2 w-2 rounded-full bg-crimson-600 animate-pulse" />
                <span>AKTİF MÜFREDAT: 2025 - 2026</span>
              </span>
            </div>
          }
        />

        {/* =================================================================== */}
        {/* STICKY FILTER & SEARCH DOCK                                         */}
        {/* =================================================================== */}
        <div className="sticky top-20 z-30 mb-12 -mx-4 sm:-mx-6 lg:-mx-10 px-4 sm:px-6 lg:px-10 py-4 bg-white/95 backdrop-blur-xl border-y border-cobalt-900/10 shadow-sm transition-all duration-300">
          <div className="flex flex-col gap-4">
            {/* Upper Tier: Category Tabs Bar */}
            <div className="flex items-center justify-between gap-4 overflow-x-auto no-scrollbar pb-1">
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                {/* ALL TAB */}
                <button
                  type="button"
                  onClick={() => handleCategorySelect("all")}
                  className={`relative px-3.5 py-2 text-xs font-mono tracking-tight transition-colors duration-200 border ${
                    activeCategoryId === "all"
                      ? "text-white border-cobalt-700"
                      : "text-ink-muted border-cobalt-900/10 hover:border-cobalt-700/40 hover:text-ink bg-paper-warm"
                  }`}
                >
                  {activeCategoryId === "all" && (
                    <motion.div
                      layoutId="activeCategoryTabPill"
                      className="absolute inset-0 bg-cobalt-700"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2 font-semibold">
                    <span>TÜM PROGRAMLAR</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-none font-mono ${
                        activeCategoryId === "all"
                          ? "bg-crimson-600 text-white"
                          : "bg-cobalt-900/10 text-cobalt-800"
                      }`}
                    >
                      {totalAllProgramsCount}
                    </span>
                  </span>
                </button>

                {/* 6 INDIVIDUAL CATEGORIES */}
                {programCategories.map((cat) => {
                  const isActive = activeCategoryId === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => handleCategorySelect(cat.id)}
                      className={`relative px-3.5 py-2 text-xs font-mono tracking-tight transition-colors duration-200 border whitespace-nowrap ${
                        isActive
                          ? "text-white border-cobalt-700"
                          : "text-ink-muted border-cobalt-900/10 hover:border-cobalt-700/40 hover:text-ink bg-paper-warm"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeCategoryTabPill"
                          className="absolute inset-0 bg-cobalt-700"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 32,
                          }}
                        />
                      )}
                      <span className="relative z-10 flex items-center gap-2">
                        <span className="opacity-70 font-mono text-[10px]">
                          [{cat.code}]
                        </span>
                        <span className="font-semibold">{cat.shortTitle}</span>
                        <span
                          className={`text-[10px] px-1.5 py-0.2 font-mono ${
                            isActive
                              ? "bg-crimson-600 text-white font-bold"
                              : "bg-cobalt-900/10 text-cobalt-800 font-medium"
                          }`}
                        >
                          {cat.items.length}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Lower Tier: Instant Search Input + Dual View Switcher */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pt-2 border-t border-cobalt-900/8">
              {/* Search Box */}
              <div className="relative flex-1 max-w-2xl">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-ink-muted">
                  <Search className="h-4 w-4 text-cobalt-700" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Ders, sınav veya dil ara (örn: YKS, LGS, KPSS Eğitim Bilimleri, IELTS, Almanca, Psikoloji)..."
                  className="w-full pl-10 pr-10 py-2.5 text-xs sm:text-sm bg-paper border border-cobalt-900/15 text-ink placeholder:text-ink-muted/70 focus:outline-none focus:border-cobalt-700 focus:ring-1 focus:ring-cobalt-700 transition-all font-sans"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-ink-muted hover:text-crimson-600 transition-colors"
                    aria-label="Aramayı temizle"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>

              {/* View Switcher + Live Ledger Count */}
              <div className="flex items-center justify-between md:justify-end gap-4 shrink-0">
                <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-ink-muted">
                  <span className="h-1.5 w-1.5 bg-crimson-600 rounded-full" />
                  <span className="font-semibold text-cobalt-900">
                    {totalVisibleCount}
                  </span>{" "}
                  <span>PROGRAM LİSTELENİYOR</span>
                </div>

                <div className="inline-flex items-center p-0.5 border border-cobalt-900/15 bg-paper">
                  <button
                    type="button"
                    onClick={() => setViewMode("grid")}
                    aria-label="Detaylı Kart Görünümü"
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium transition-colors ${
                      viewMode === "grid"
                        ? "bg-cobalt-700 text-white shadow-sm"
                        : "text-ink-muted hover:text-ink hover:bg-paper-warm"
                    }`}
                  >
                    <LayoutGrid className="h-3.5 w-3.5" />
                    <span className="hidden sm:inline">KART GÖRÜNÜMÜ</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setViewMode("table")}
                    aria-label="Akademik Katalog Listesi"
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium transition-colors ${
                      viewMode === "table"
                        ? "bg-cobalt-700 text-white shadow-sm"
                        : "text-ink-muted hover:text-ink hover:bg-paper-warm"
                    }`}
                  >
                    <List className="h-3.5 w-3.5" />
                    <span className="hidden sm:inline">AKADEMİK LİSTE</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =================================================================== */}
        {/* EMPTY STATE (Search returns 0)                                      */}
        {/* =================================================================== */}
        {filteredCategories.length === 0 && (
          <div className="bg-white border border-cobalt-900/15 p-12 text-center my-12 max-w-2xl mx-auto shadow-studio">
            <div className="h-14 w-14 mx-auto mb-4 border border-cobalt-900/20 bg-cobalt-50 flex items-center justify-center text-cobalt-700">
              <Search className="h-6 w-6 text-crimson-600" />
            </div>
            <h3 className="text-xl font-bold tracking-tight text-ink font-sans">
              Aramanızla Eşleşen Program Bulunamadı
            </h3>
            <p className="mt-2 text-sm text-ink-muted">
              &ldquo;<span className="text-cobalt-900 font-semibold">{searchQuery}</span>&rdquo;
              ifadesiyle ilgili herhangi bir ders, sınav veya kategori eşleşmedi.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-2">
              <span className="text-xs font-mono text-ink-muted self-center mr-1">
                ÖNERİLENLER:
              </span>
              {[
                "YKS",
                "LGS",
                "KPSS Eğitim Bilimleri",
                "IELTS",
                "Almanca",
                "Felsefe",
                "Yüzme",
              ].map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => setSearchQuery(suggestion)}
                  className="px-2.5 py-1 text-xs font-mono bg-paper-warm border border-cobalt-900/10 text-cobalt-800 hover:border-cobalt-700 hover:bg-cobalt-50 transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>

            <div className="mt-8">
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategoryId("all");
                }}
                className="px-6 py-2.5 bg-cobalt-700 text-white font-mono text-xs font-semibold hover:bg-cobalt-900 transition-colors"
              >
                FİLTRELERİ SIFIRLA
              </button>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* CATALOG CONTENT RENDERING (Grouped by Category)                     */}
        {/* =================================================================== */}
        <div className="space-y-16 lg:space-y-24">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              id={category.id}
              className="scroll-mt-48 relative"
            >
              {/* Category Header Card */}
              <div className="mb-8 p-6 sm:p-8 bg-white border border-cobalt-900/12 shadow-sm">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-cobalt-900/10">
                  <div className="max-w-3xl">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-mono text-xs font-bold px-2 py-0.5 bg-cobalt-900 text-white tracking-[0.16em]">
                        ALAN {category.code}
                      </span>
                      <span className="h-[1px] w-6 bg-crimson-600" />
                      <span className="font-mono text-xs tracking-[0.14em] text-cobalt-700 uppercase font-semibold">
                        {category.shortTitle}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink font-sans">
                      {category.title}
                    </h3>

                    <p className="font-serif italic text-base sm:text-lg text-cobalt-800 mt-2">
                      {category.tagline}
                    </p>
                  </div>

                  <div className="shrink-0 flex items-center gap-3">
                    <span className="font-mono text-xs text-ink-muted border border-cobalt-900/10 px-3 py-1.5 bg-paper-warm">
                      <strong className="text-cobalt-900">
                        {category.items.length}
                      </strong>{" "}
                      MÜFREDAT ALANI
                    </span>
                  </div>
                </div>

                {/* Verbatim category summary */}
                <p className="mt-4 text-sm sm:text-base text-ink-muted leading-relaxed max-w-4xl">
                  {category.summary}
                </p>
              </div>

              {/* VIEW 1: DETAILED EDITORIAL CARDS */}
              {viewMode === "grid" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, idx) => {
                    const isFeatured = item.featured === true;

                    // FEATURED EDITORIAL CARD (Bahadır Aybar Special Prestige Framing)
                    if (isFeatured) {
                      return (
                        <div
                          key={idx}
                          className="col-span-1 md:col-span-2 lg:col-span-3 border-2 border-cobalt-700 bg-cobalt-50/70 shadow-studio relative overflow-hidden transition-all duration-300 hover:border-crimson-600"
                        >
                          {/* Founder Prestige Header Bar */}
                          <div className="bg-cobalt-950 text-white px-5 sm:px-8 py-3.5 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
                            <div className="flex items-center gap-2.5">
                              <span className="h-2 w-2 rounded-full bg-crimson-500 animate-pulse" />
                              <span className="font-mono text-xs font-bold tracking-[0.16em] text-white uppercase">
                                KURUCU LİDERLİĞİNDE ÖZEL PROGRAM — BAHADIR AYBAR
                              </span>
                            </div>
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-crimson-600 text-white font-mono text-[11px] font-semibold tracking-wider">
                              <Award className="h-3.5 w-3.5" />
                              VIP AKADEMİK STANDART
                            </span>
                          </div>

                          {/* Card Main Body */}
                          <div className="p-6 sm:p-8 lg:p-10">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                              {/* Left Column (8 cols): Title, Quote, Description, Subjects */}
                              <div className="lg:col-span-8 flex flex-col justify-between">
                                <div>
                                  <div className="flex flex-wrap items-center gap-2 mb-3">
                                    <span className="font-mono text-[11px] px-2 py-0.5 bg-cobalt-100 text-cobalt-900 border border-cobalt-700/20 font-semibold">
                                      ALAN [{category.code}] · ÖZEL MENTORLUK
                                    </span>
                                    {item.badge && (
                                      <span className="font-mono text-[11px] px-2 py-0.5 bg-crimson-100 text-crimson-800 border border-crimson-600/20 font-semibold">
                                        {item.badge}
                                      </span>
                                    )}
                                  </div>

                                  <h4 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink font-sans leading-tight">
                                    {item.title}
                                  </h4>

                                  {item.leaderNote && (
                                    <blockquote className="mt-4 pl-4 border-l-2 border-crimson-600 font-serif italic text-base sm:text-lg text-cobalt-900 leading-snug">
                                      &ldquo;{item.leaderNote}&rdquo;
                                    </blockquote>
                                  )}

                                  {item.description && (
                                    <p className="mt-3 text-sm sm:text-base text-ink-muted leading-relaxed">
                                      {item.description}
                                    </p>
                                  )}
                                </div>

                                {/* Subjects Grid */}
                                <div className="mt-6 pt-6 border-t border-cobalt-900/10">
                                  <div className="font-mono text-[11px] tracking-[0.16em] text-cobalt-900 font-semibold mb-3 uppercase">
                                    MÜFREDAT &amp; KAPSAMDAKİ BRANŞLAR ({item.subjects.length}):
                                  </div>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    {item.subjects.map((sub, sIdx) => (
                                      <div
                                        key={sIdx}
                                        className="flex items-center gap-2 px-3 py-2 bg-white border border-cobalt-900/10 text-xs font-medium text-ink"
                                      >
                                        <Check className="h-3.5 w-3.5 text-crimson-600 shrink-0" />
                                        <span>{sub}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>

                              {/* Right Column (4 cols): Format & Direct Actions */}
                              <div className="lg:col-span-4 bg-white border border-cobalt-900/15 p-6 shadow-sm flex flex-col justify-between h-full">
                                <div>
                                  <div className="font-mono text-xs font-semibold text-cobalt-900 pb-2 border-b border-cobalt-900/10 mb-4 flex items-center justify-between">
                                    <span>EĞİTİM STANDARTLARI</span>
                                    <span className="text-crimson-600">%100 BİREBİR</span>
                                  </div>

                                  <ul className="space-y-3 text-xs text-ink-muted mb-6">
                                    <li className="flex items-start gap-2">
                                      <MapPin className="h-4 w-4 text-cobalt-700 shrink-0 mt-0.5" />
                                      <span>
                                        <strong>İstanbul (39 İlçe):</strong> Evinizde veya ofisinizde yüz yüze VIP ders
                                      </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <GraduationCap className="h-4 w-4 text-cobalt-700 shrink-0 mt-0.5" />
                                      <span>
                                        <strong>Tüm Türkiye (81 İl):</strong> Canlı interaktif online eğitim
                                      </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <Clock className="h-4 w-4 text-crimson-600 shrink-0 mt-0.5" />
                                      <span>
                                        <strong>30 Dk Ücretsiz Tanışma:</strong> Öğrenme stili &amp; eksik analizi
                                      </span>
                                    </li>
                                  </ul>
                                </div>

                                <div className="space-y-2.5 pt-4 border-t border-cobalt-900/10">
                                  <button
                                    type="button"
                                    onClick={() => openDrawer(item, category)}
                                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-cobalt-700 text-white font-sans text-xs sm:text-sm font-bold tracking-tight hover:bg-cobalt-900 transition-colors"
                                  >
                                    <span>Detay &amp; Ders Planla</span>
                                    <ArrowUpRight className="h-4 w-4" />
                                  </button>

                                  <a
                                    href={getWhatsAppUrl(
                                      `Merhaba, Aybar Akademi kurucusu Bahadır Aybar liderliğindeki "${item.title}" programı hakkında 30 dakikalık ücretsiz tanışma seansı ve birebir özel ders için bilgi almak istiyorum.`
                                    )}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-crimson-600 text-white font-sans text-xs sm:text-sm font-bold tracking-tight hover:bg-crimson-700 transition-colors shadow-crimson"
                                  >
                                    <MessageSquare className="h-4 w-4" />
                                    <span>WhatsApp ile Hızlı Başvuru</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    }

                    // STANDARD EDITORIAL CARD
                    return (
                      <div
                        key={idx}
                        className="bg-white border border-cobalt-900/10 p-6 flex flex-col justify-between hover:border-cobalt-700/50 hover:shadow-studio transition-all duration-300 group relative"
                      >
                        {/* Top Micro-Ledger */}
                        <div>
                          <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-cobalt-900/8 text-[11px] font-mono">
                            <span className="text-cobalt-700 font-semibold">
                              [{category.code}.{String(idx + 1).padStart(2, "0")}]
                            </span>
                            {item.badge ? (
                              <span className="px-2 py-0.5 bg-paper-warm text-ink-muted border border-cobalt-900/10 tracking-tight">
                                {item.badge}
                              </span>
                            ) : (
                              <span className="text-ink-muted">BİREBİR ÖZEL DERS</span>
                            )}
                          </div>

                          <h4 className="text-xl font-extrabold tracking-tight text-ink font-sans group-hover:text-cobalt-700 transition-colors">
                            {item.title}
                          </h4>

                          {item.description && (
                            <p className="mt-2 text-xs sm:text-sm text-ink-muted leading-relaxed">
                              {item.description}
                            </p>
                          )}

                          {/* Subjects preview */}
                          <div className="mt-4 pt-4 border-t border-cobalt-900/8">
                            <div className="text-[10px] font-mono text-ink-muted mb-2 tracking-[0.14em] uppercase">
                              KAPSAMDAKİ BRANŞLAR ({item.subjects.length}):
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {item.subjects.slice(0, 5).map((subject, sIdx) => (
                                <span
                                  key={sIdx}
                                  className="inline-flex items-center px-2 py-0.5 text-xs bg-paper-warm border border-cobalt-900/10 text-ink-muted"
                                >
                                  {subject}
                                </span>
                              ))}
                              {item.subjects.length > 5 && (
                                <span className="inline-flex items-center px-2 py-0.5 text-xs bg-cobalt-50 text-cobalt-700 font-mono font-medium">
                                  +{item.subjects.length - 5} ders daha
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Card Bottom CTA Bar */}
                        <div className="mt-6 pt-4 border-t border-cobalt-900/10 flex items-center justify-between gap-3">
                          <span className="font-mono text-[10px] text-ink-muted uppercase">
                            YÜZ YÜZE &amp; ONLİNE
                          </span>

                          <button
                            type="button"
                            onClick={() => openDrawer(item, category)}
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-cobalt-700 group-hover:text-crimson-600 transition-colors"
                          >
                            <span>Detay &amp; Ders Planla</span>
                            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                /* VIEW 2: SWISS ACADEMIC CATALOG LEDGER (Table Layout) */
                <div className="bg-white border border-cobalt-900/12 shadow-sm overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-cobalt-900/15 bg-paper-warm font-mono text-[11px] text-ink-muted tracking-[0.14em]">
                        <th className="py-3.5 px-4 sm:px-6 w-20">KOD</th>
                        <th className="py-3.5 px-4 sm:px-6">PROGRAM &amp; SEVİYE</th>
                        <th className="py-3.5 px-4 sm:px-6 hidden md:table-cell">
                          KAPSAM VE BRANŞLAR
                        </th>
                        <th className="py-3.5 px-4 sm:px-6 hidden lg:table-cell">
                          FORMAT &amp; MENTORLUK
                        </th>
                        <th className="py-3.5 px-4 sm:px-6 text-right">EYLEM</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-cobalt-900/10 text-xs sm:text-sm">
                      {category.items.map((item, idx) => {
                        const isFeatured = item.featured === true;
                        return (
                          <tr
                            key={idx}
                            className={`transition-colors duration-150 ${
                              isFeatured
                                ? "bg-cobalt-50/50 hover:bg-cobalt-50"
                                : "hover:bg-paper-warm/80"
                            }`}
                          >
                            {/* Code Column */}
                            <td className="py-4 px-4 sm:px-6 font-mono text-xs text-cobalt-800 font-semibold align-top whitespace-nowrap">
                              [{category.code}.{String(idx + 1).padStart(2, "0")}]
                            </td>

                            {/* Program Title & Badge */}
                            <td className="py-4 px-4 sm:px-6 align-top">
                              <div className="flex flex-col gap-1">
                                <span className="font-bold text-ink text-sm sm:text-base font-sans">
                                  {item.title}
                                </span>
                                {item.badge && (
                                  <span
                                    className={`inline-block self-start font-mono text-[10px] px-2 py-0.5 border ${
                                      isFeatured
                                        ? "bg-crimson-600 text-white border-crimson-600 font-semibold"
                                        : "bg-paper text-ink-muted border-cobalt-900/10"
                                    }`}
                                  >
                                    {item.badge}
                                  </span>
                                )}
                                {item.leaderNote && (
                                  <p className="mt-1 font-serif italic text-xs text-cobalt-900 max-w-md">
                                    {item.leaderNote}
                                  </p>
                                )}
                              </div>
                            </td>

                            {/* Subjects Column */}
                            <td className="py-4 px-4 sm:px-6 hidden md:table-cell align-top">
                              <div className="flex flex-wrap gap-1 max-w-md">
                                {item.subjects.map((sub, sIdx) => (
                                  <span
                                    key={sIdx}
                                    className="px-2 py-0.5 bg-paper border border-cobalt-900/10 text-[11px] text-ink-muted"
                                  >
                                    {sub}
                                  </span>
                                ))}
                              </div>
                            </td>

                            {/* Format Column */}
                            <td className="py-4 px-4 sm:px-6 hidden lg:table-cell align-top text-xs text-ink-muted">
                              <div className="flex flex-col gap-0.5 font-mono text-[11px]">
                                <span className="text-cobalt-900 font-semibold">
                                  %100 BİREBİR VIP
                                </span>
                                <span>39 İlçe Yüz Yüze / 81 İl Canlı Online</span>
                                <span className="text-crimson-600 font-medium">
                                  30 Dk Ücretsiz Tanışma
                                </span>
                              </div>
                            </td>

                            {/* Action Button */}
                            <td className="py-4 px-4 sm:px-6 align-top text-right whitespace-nowrap">
                              <button
                                type="button"
                                onClick={() => openDrawer(item, category)}
                                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-semibold border transition-colors ${
                                  isFeatured
                                    ? "bg-crimson-600 text-white border-crimson-600 hover:bg-crimson-700"
                                    : "bg-cobalt-700 text-white border-cobalt-700 hover:bg-cobalt-900"
                                }`}
                              >
                                <span>Detay</span>
                                <ArrowUpRight className="h-3 w-3" />
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* =================================================================== */}
        {/* CLOSING MANIFESTO BANNER (Requirement 4)                            */}
        {/* =================================================================== */}
        <div className="mt-20 lg:mt-32">
          <div className="relative bg-cobalt-950 text-white p-8 sm:p-12 lg:p-16 border border-white/15 halftone-cobalt shadow-studio overflow-hidden">
            {/* Swiss + Register Marks */}
            <span
              aria-hidden="true"
              className="absolute top-3 left-3 font-mono text-xs text-crimson-500 select-none"
            >
              +
            </span>
            <span
              aria-hidden="true"
              className="absolute top-3 right-3 font-mono text-xs text-crimson-500 select-none"
            >
              +
            </span>
            <span
              aria-hidden="true"
              className="absolute bottom-3 left-3 font-mono text-xs text-crimson-500 select-none"
            >
              +
            </span>
            <span
              aria-hidden="true"
              className="absolute bottom-3 right-3 font-mono text-xs text-crimson-500 select-none"
            >
              +
            </span>

            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 mb-6 font-mono text-[11px] tracking-[0.16em] uppercase text-cobalt-100">
                <span className="h-2 w-2 rounded-full bg-crimson-500 animate-pulse" />
                <span>AKADEMİK TAAHHÜT &amp; MANİFESTO</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tightest leading-tight">
                Başarı Bir Tesadüf Değil, Doğru Kurgulanmış Birebir Eğitimin
                Sonucudur.
              </h3>

              {/* Full verbatim programsIntro.closing text */}
              <div className="my-8 py-6 px-6 sm:px-10 border-y border-white/15 bg-white/5 backdrop-blur-sm">
                <p className="font-serif italic text-lg sm:text-xl lg:text-2xl text-cobalt-100 leading-relaxed">
                  &ldquo;{programsIntro.closing}&rdquo;
                </p>
                <div className="mt-3 font-mono text-xs tracking-[0.18em] text-crimson-400 uppercase font-semibold">
                  — AYBAR AKADEMİ EĞİTİM KURULU
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <MagneticLink
                  href={getWhatsAppUrl(
                    "Merhaba, Aybar Akademi eğitim programları ve 30 dakikalık ücretsiz tanışma seansı hakkında detaylı bilgi ve randevu almak istiyorum."
                  )}
                  variant="crimson"
                  external={true}
                  className="w-full sm:w-auto"
                >
                  30 DK ÜCRETSİZ TANIŞMA SEANSI PLANLA
                </MagneticLink>

                <MagneticLink
                  href="/iletisim"
                  variant="outline-light"
                  className="w-full sm:w-auto"
                >
                  İLETİŞİM &amp; RANDEVU BİLGİSİ
                </MagneticLink>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 font-mono text-xs text-cobalt-200">
                <span>İSTANBUL 39 İLÇE YÜZ YÜZE</span>
                <span className="text-crimson-500">·</span>
                <span>81 İL CANLI ONLİNE</span>
                <span className="text-crimson-500">·</span>
                <a
                  href={siteConfig.contact.phoneHref}
                  className="text-white hover:text-crimson-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <Phone className="h-3 w-3 text-crimson-500" />
                  <span>{siteConfig.contact.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =================================================================== */}
      {/* SLIDE-OVER "PROGRAM DETAY & BAŞVURU DOSYASI" DRAWER (Requirement 3)  */}
      {/* =================================================================== */}
      <AnimatePresence>
        {selectedProgram && (
          <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedProgram(null)}
              className="fixed inset-0 bg-cobalt-950/75 backdrop-blur-sm cursor-pointer"
            />

            {/* Slide-Over Panel */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.42, ease: LUXURY_EASE }}
              className="relative w-full max-w-xl sm:max-w-2xl bg-white shadow-2xl border-l border-cobalt-900/15 flex flex-col z-10 h-full"
            >
              {/* Header Bar */}
              <div className="px-6 py-4 bg-cobalt-950 text-white border-b border-white/10 flex items-center justify-between gap-4 shrink-0">
                <div className="flex items-center gap-2 overflow-hidden">
                  <span className="inline-block px-2 py-0.5 bg-crimson-600 text-white font-mono text-[10px] font-bold tracking-[0.14em]">
                    DOSYA: [{selectedProgram.category.code}]
                  </span>
                  <span className="font-mono text-xs tracking-[0.12em] text-cobalt-200 truncate uppercase">
                    AKADEMİK MÜFREDAT &amp; BAŞVURU
                  </span>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span className="hidden sm:inline font-mono text-[11px] text-cobalt-300">
                    [ESC İLE KAPAT]
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedProgram(null)}
                    aria-label="Kapat"
                    className="p-1.5 border border-white/20 bg-white/10 text-white hover:bg-crimson-600 hover:border-crimson-600 transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Scrollable Body — CRITICAL: data-lenis-prevent to isolate drawer scrolling! */}
              <div
                data-lenis-prevent="true"
                className="overflow-y-auto flex-1 p-6 sm:p-8 space-y-8 bg-paper"
              >
                {/* Title & Metadata */}
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="font-mono text-xs font-semibold px-2.5 py-0.5 bg-cobalt-100 text-cobalt-900 border border-cobalt-700/20">
                      {selectedProgram.category.title}
                    </span>
                    {selectedProgram.item.badge && (
                      <span className="font-mono text-xs font-semibold px-2.5 py-0.5 bg-crimson-50 text-crimson-700 border border-crimson-600/30">
                        {selectedProgram.item.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink font-sans leading-tight mt-2">
                    {selectedProgram.item.title}
                  </h3>

                  <p className="mt-2 font-serif italic text-base text-cobalt-800">
                    {selectedProgram.category.tagline}
                  </p>
                </div>

                {/* Featured Leader Note (if applicable) */}
                {selectedProgram.item.featured && (
                  <div className="p-5 bg-cobalt-50 border-2 border-cobalt-700 shadow-sm">
                    <div className="flex items-center gap-2 mb-2 font-mono text-xs font-bold text-cobalt-900 uppercase">
                      <span className="h-2 w-2 rounded-full bg-crimson-600" />
                      <span>KURUCUMUZ BAHADIR AYBAR LİDERLİĞİNDE</span>
                    </div>
                    {selectedProgram.item.leaderNote && (
                      <p className="font-serif italic text-sm sm:text-base text-cobalt-950 font-medium">
                        &ldquo;{selectedProgram.item.leaderNote}&rdquo;
                      </p>
                    )}
                    {selectedProgram.item.description && (
                      <p className="mt-2 text-xs sm:text-sm text-ink-muted leading-relaxed">
                        {selectedProgram.item.description}
                      </p>
                    )}
                  </div>
                )}

                {/* Standard Description (if not featured, or extra details) */}
                {!selectedProgram.item.featured &&
                  selectedProgram.item.description && (
                    <div className="p-4 bg-white border border-cobalt-900/10 text-sm text-ink-muted leading-relaxed">
                      {selectedProgram.item.description}
                    </div>
                  )}

                {/* Full Subject List */}
                <div className="bg-white border border-cobalt-900/12 p-6 shadow-sm">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-cobalt-900/10">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-cobalt-700" />
                      <h4 className="font-mono text-xs font-bold tracking-[0.14em] text-ink uppercase">
                        MÜFREDAT VE KAPSAMDAKİ BRANŞLAR
                      </h4>
                    </div>
                    <span className="font-mono text-xs font-semibold text-crimson-600">
                      {selectedProgram.item.subjects.length} DERS / MODÜL
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedProgram.item.subjects.map((sub, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center gap-2.5 p-2.5 bg-paper-warm border border-cobalt-900/8 text-xs font-medium text-ink"
                      >
                        <span className="font-mono text-[10px] text-cobalt-700 font-bold shrink-0">
                          {String(sIdx + 1).padStart(2, "0")}.
                        </span>
                        <Check className="h-3.5 w-3.5 text-crimson-600 shrink-0" />
                        <span className="leading-tight">{sub}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* VIP Birebir Format Options */}
                <div className="bg-white border border-cobalt-900/12 p-6 shadow-sm">
                  <h4 className="font-mono text-xs font-bold tracking-[0.14em] text-ink uppercase pb-3 mb-4 border-b border-cobalt-900/10 flex items-center gap-2">
                    <GraduationCap className="h-4 w-4 text-cobalt-700" />
                    <span>BİREBİR VIP EĞİTİM MODELLERİMİZ</span>
                  </h4>

                  <div className="space-y-3">
                    <div className="p-3.5 border border-cobalt-900/10 bg-cobalt-50/40">
                      <div className="flex items-center gap-2 font-mono text-xs font-bold text-cobalt-900 mb-1">
                        <MapPin className="h-3.5 w-3.5 text-crimson-600" />
                        <span>İSTANBUL (39 İLÇE) YÜZ YÜZE</span>
                      </div>
                      <p className="text-xs text-ink-muted leading-relaxed">
                        Evinizin konforunda, güvenli ve verimli bir ortamda alanında
                        uzman öğretmenimizle birebir özel ders imkânı.
                      </p>
                    </div>

                    <div className="p-3.5 border border-cobalt-900/10 bg-cobalt-50/40">
                      <div className="flex items-center gap-2 font-mono text-xs font-bold text-cobalt-900 mb-1">
                        <ShieldCheck className="h-3.5 w-3.5 text-cobalt-700" />
                        <span>TÜM TÜRKİYE (81 İL) CANLI ONLINE</span>
                      </div>
                      <p className="text-xs text-ink-muted leading-relaxed">
                        Coğrafi sınırları kaldıran interaktif ekran paylaşımı, dijital
                        tahta ve canlı ders materyalleriyle yüksek verimli uzaktan seanslar.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 30-Minute Free Discovery Protocol */}
                <div className="bg-cobalt-950 text-white p-6 border border-white/15">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="h-4 w-4 text-crimson-500" />
                    <h4 className="font-mono text-xs font-bold tracking-[0.14em] uppercase text-white">
                      30 DAKİKALIK ÜCRETSİZ TANIŞMA SEANSI PROTOKOLÜ
                    </h4>
                  </div>
                  <ol className="space-y-3 font-sans text-xs text-cobalt-100/90 leading-relaxed list-decimal list-inside">
                    <li>
                      <strong>Öğrenme Stili Analizi:</strong> Görsel, işitsel ya da
                      kinestetik algı dünyası ve mevcut konu eksikleri netleştirilir.
                    </li>
                    <li>
                      <strong>Kişiselleştirilmiş Yol Haritası:</strong> Öğrencinin
                      hedefine uygun haftalık ders saati ve konu bitiş takvimi
                      belirlenir.
                    </li>
                    <li>
                      <strong>Taahhütsüz Karar:</strong> Aile ve öğrenci eğitmen
                      sinerjisini deneyimledikten sonra karar verir; hiçbir ön taahhüt
                      alınmaz.
                    </li>
                  </ol>
                </div>
              </div>

              {/* Drawer Sticky Bottom CTA Bar */}
              <div className="p-4 sm:p-6 bg-white border-t border-cobalt-900/15 shrink-0 flex flex-col gap-2.5 shadow-studio">
                <a
                  href={getWhatsAppUrl(
                    `Merhaba, Aybar Akademi bünyesindeki "${selectedProgram.item.title}" (${selectedProgram.category.title}) programı için 30 dakikalık ücretsiz tanışma seansı ve VIP özel ders hakkında bilgi almak istiyorum.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 bg-crimson-600 hover:bg-crimson-700 text-white font-sans text-sm font-bold tracking-tight shadow-crimson transition-colors"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Bu Program İçin WhatsApp ile Görüşün</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                <div className="flex items-center justify-between text-xs text-ink-muted font-mono pt-1">
                  <span>Doğrudan Danışma Hattı:</span>
                  <a
                    href={siteConfig.contact.phoneHref}
                    className="text-cobalt-800 font-bold hover:text-crimson-600 transition-colors inline-flex items-center gap-1"
                  >
                    <Phone className="h-3 w-3 text-crimson-600" />
                    <span>{siteConfig.contact.phoneDisplay}</span>
                  </a>
                </div>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
