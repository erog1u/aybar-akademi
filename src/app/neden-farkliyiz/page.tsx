"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, LayoutList, SlidersHorizontal } from "lucide-react";
import { whyDifferentContent } from "@/data/content";
import { NextChapterBanner, LUXURY_EASE } from "@/components/motion/Primitives";
import { AybarCrestEmblem } from "@/components/brand/AybarCrest";

const PRINCIPLE_SHORT_LABELS = [
  "1. İlk Tanışma",
  "2. Yenilikçi Yöntemler",
  "3. Hata Defteri",
  "4. Veli İletişimi",
  "5. Mentorluk",
];

export default function NedenFarkliyizPage() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [showAll, setShowAll] = useState<boolean>(false);

  const principles = whyDifferentContent.principles;
  const currentPrinciple = principles[activeIdx];
  const nextLabel =
    activeIdx < principles.length - 1 ? PRINCIPLE_SHORT_LABELS[activeIdx + 1] : null;

  return (
    <div className="bg-paper text-ink">
      {/* 1. Clean Cobalt Header */}
      <section className="relative studio-hero text-white border-b border-white/15 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -bottom-20 text-white/[0.06]"
        >
          <AybarCrestEmblem variant="watermark" className="h-[440px] w-[440px]" />
        </div>

        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/12 border border-white/20 text-white text-xs sm:text-[13px] font-bold tracking-wider uppercase mb-5">
              <span className="h-2 w-2 rounded-full bg-crimson-500" />
              <span>{whyDifferentContent.eyebrow}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tightest leading-[1.12] text-white">
              {whyDifferentContent.headline}
            </h1>

            <p className="mt-5 text-base sm:text-lg text-cobalt-50/95 leading-relaxed">
              {whyDifferentContent.lead}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Guided 5 Standart İlke Selector + Clean Card View */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
          {/* Header Row with Continuous Reading Toggle */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-ink">
              {whyDifferentContent.principlesHeading}
            </h2>

            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center justify-center gap-2 self-start sm:self-auto rounded-lg px-4 py-2.5 text-sm font-bold border border-cobalt-900/15 bg-white text-cobalt-900 hover:bg-cobalt-50 transition-colors min-h-[44px] cursor-pointer"
            >
              {showAll ? (
                <>
                  <SlidersHorizontal className="h-4 w-4 text-cobalt-700" />
                  <span>Adım Adım İncele</span>
                </>
              ) : (
                <>
                  <LayoutList className="h-4 w-4 text-cobalt-700" />
                  <span>Tüm İlkeleri Alt Alta Gör</span>
                </>
              )}
            </button>
          </div>

          {/* 5-Principle Selector Row */}
          {!showAll && (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3 mb-8">
              {principles.map((p, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <button
                    key={p.step}
                    type="button"
                    onClick={() => setActiveIdx(idx)}
                    className={`rounded-xl p-3.5 sm:p-4 border text-left transition-all min-h-[52px] cursor-pointer ${
                      idx === 4 ? "col-span-2 sm:col-span-1" : ""
                    } ${
                      isActive
                        ? "bg-cobalt-700 text-white border-cobalt-700 shadow-md"
                        : "bg-white text-ink border-cobalt-900/12 hover:border-cobalt-700/40 hover:bg-cobalt-50/50"
                    }`}
                  >
                    <span className="block text-sm sm:text-[15px] font-extrabold leading-snug">
                      {PRINCIPLE_SHORT_LABELS[idx]}
                    </span>
                  </button>
                );
              })}
            </div>
          )}

          {/* Guided Single Principle Card View */}
          {!showAll ? (
            <AnimatePresence mode="wait">
              <motion.article
                key={currentPrinciple.step}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: LUXURY_EASE }}
                className="bg-white rounded-2xl border border-cobalt-900/12 shadow-card p-6 sm:p-8 lg:p-10"
              >
                <div className="pb-5 mb-6 border-b border-cobalt-900/10 flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-lg bg-crimson-600 text-white text-xs sm:text-[13px] font-extrabold">
                    {activeIdx + 1}. İlke
                  </span>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-ink">
                    {currentPrinciple.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {currentPrinciple.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl bg-paper border border-cobalt-900/10 p-5 sm:p-6"
                    >
                      <h4 className="text-lg sm:text-xl font-extrabold text-ink leading-snug">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-base text-ink-muted leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Guided Bottom Bar */}
                <div className="mt-8 pt-6 border-t border-cobalt-900/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <button
                    type="button"
                    disabled={activeIdx === 0}
                    onClick={() => {
                      if (activeIdx > 0) setActiveIdx(activeIdx - 1);
                    }}
                    className={`inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm sm:text-[15px] font-bold border transition-colors min-h-[46px] ${
                      activeIdx === 0
                        ? "border-cobalt-900/10 text-ink-muted/40 bg-paper cursor-not-allowed"
                        : "border-cobalt-900/15 text-cobalt-900 bg-white hover:bg-cobalt-50 cursor-pointer"
                    }`}
                  >
                    <ArrowLeft className="h-4 w-4" />
                    <span>Önceki İlke</span>
                  </button>

                  {nextLabel ? (
                    <button
                      type="button"
                      onClick={() => setActiveIdx(activeIdx + 1)}
                      className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-cobalt-700 hover:bg-cobalt-800 text-white px-6 py-3 text-sm sm:text-[15px] font-bold transition-colors shadow-sm min-h-[46px] cursor-pointer"
                    >
                      <span>Sonraki İlke: {nextLabel}</span>
                      <ArrowRight className="h-4 w-4 shrink-0" />
                    </button>
                  ) : (
                    <Link
                      href="/iletisim"
                      className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-crimson-600 hover:bg-crimson-700 text-white px-6 py-3 text-sm sm:text-[15px] font-bold transition-colors shadow-crimson min-h-[46px]"
                    >
                      <span>Ücretsiz Tanışma Seansı Planlayın</span>
                      <ArrowRight className="h-4 w-4 shrink-0" />
                    </Link>
                  )}
                </div>
              </motion.article>
            </AnimatePresence>
          ) : (
            /* Continuous Stacked View */
            <div className="space-y-6">
              {principles.map((p, pIdx) => (
                <article
                  key={p.step}
                  className="bg-white rounded-2xl border border-cobalt-900/12 shadow-card p-6 sm:p-8 lg:p-10"
                >
                  <div className="pb-5 mb-6 border-b border-cobalt-900/10 flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 rounded-lg bg-crimson-600 text-white text-xs sm:text-[13px] font-extrabold">
                      {pIdx + 1}. İlke
                    </span>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-ink">
                      {p.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {p.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl bg-paper border border-cobalt-900/10 p-5 sm:p-6"
                      >
                        <h4 className="text-lg sm:text-xl font-extrabold text-ink leading-snug">
                          {item.title}
                        </h4>
                        <p className="mt-2 text-base text-ink-muted leading-relaxed">
                          {item.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Verbatim Closing Card */}
          <div className="rounded-2xl bg-cobalt-900 text-white p-7 sm:p-10 mt-10 shadow-studio">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tightest text-white">
              {whyDifferentContent.pedagogicalOutcome.title}
            </h3>
            <p className="mt-4 text-base sm:text-[17px] text-cobalt-100/95 leading-relaxed max-w-4xl">
              {whyDifferentContent.pedagogicalOutcome.body}
            </p>
          </div>
        </div>
      </section>

      {/* 3. Next Chapter Banner */}
      <NextChapterBanner
        title="Ücretsiz Tanışma Seansı Planlayın"
        description="30 dakikalık ücretsiz tanışma seansı ve birebir özel ders planlaması için bizimle iletişime geçin."
        href="/iletisim"
        buttonLabel="İletişim"
      />
    </div>
  );
}
