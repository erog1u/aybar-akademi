"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useLenis } from "lenis/react";
import { whyDifferentContent } from "@/data/content";
import { getWhatsAppUrl } from "@/config/site";
import {
  MaskedLines,
  MagneticLink,
  SuccessDiagnosticWidget,
  NextChapterBanner,
} from "@/components/motion/Primitives";
import { AybarCrestEmblem } from "@/components/brand/AybarCrest";

const STEP_LABELS: Record<string, string> = {
  "01": "01. İlk Tanışma",
  "02": "02. Yenilikçi Yöntemler",
  "03": "03. Hata Defteri",
  "04": "04. Veli İletişimi",
  "05": "05. Mentorluk",
};

export default function NedenFarkliyizPage() {
  const [activeStep, setActiveStep] = useState("01");
  const lenis = useLenis();

  const jumpToStep = (step: string) => {
    setActiveStep(step);
    const el = document.getElementById(`ilke-${step}`);
    if (!el) return;
    const offset =
      typeof window !== "undefined" && window.innerWidth < 1024 ? -176 : -110;
    if (lenis) {
      lenis.scrollTo(el, { offset, duration: 1.1 });
    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-paper text-ink">
      {/* 1. Cobalt Studio Hero */}
      <section className="relative studio-hero text-white border-b border-white/15 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -bottom-20 text-white/[0.06]"
        >
          <AybarCrestEmblem variant="watermark" className="h-[460px] w-[460px]" />
        </div>

        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-22 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-crimson-600 text-white text-xs font-bold mb-6 shadow-crimson">
                <Check className="h-3.5 w-3.5" />
                <span>{whyDifferentContent.eyebrow}</span>
              </div>

              <MaskedLines
                as="h1"
                immediate
                className="text-[2.15rem] sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tightest leading-[1.06]"
                lines={[
                  "Özel Derste Kişiye Özel",
                  <span key="hl" className="font-serif italic font-medium text-cobalt-200">
                    “Tam Öğrenme” Standardı
                  </span>,
                ]}
              />

              <p className="mt-6 text-base sm:text-lg text-cobalt-50/95 leading-relaxed max-w-2xl">
                {whyDifferentContent.lead}
              </p>
            </div>

            <div className="lg:col-span-5 w-full">
              <SuccessDiagnosticWidget />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Sticky Step Jumper (< 1024px, matches 114px Navbar) */}
      <div className="lg:hidden sticky top-[114px] z-30 bg-white/95 backdrop-blur-xl border-b border-cobalt-900/12 px-4 py-2.5 shadow-sm">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
          {whyDifferentContent.principles.map((p) => {
            const isActive = activeStep === p.step;
            const label = STEP_LABELS[p.step] || `${p.step}. İlke`;
            return (
              <button
                key={p.step}
                type="button"
                onClick={() => jumpToStep(p.step)}
                className={`shrink-0 min-h-[42px] px-3.5 py-2 text-[13.5px] sm:text-sm font-extrabold whitespace-nowrap transition-colors border ${
                  isActive
                    ? "bg-cobalt-700 text-white border-cobalt-700 shadow-sm"
                    : "bg-paper text-ink hover:bg-cobalt-50 border-cobalt-900/12"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Sticky Split-Screen Scrollytelling: 5 Standart İlke (Verbatim) */}
      <section className="py-14 sm:py-20 lg:py-24">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Sticky Step Ruler (Desktop >= 1024px) */}
            <div className="hidden lg:block lg:col-span-4 lg:sticky lg:top-28 space-y-6">
              <div>
                <div className="text-xs font-bold tracking-wider uppercase text-crimson-600 mb-2">
                  Süreç Yönetimi
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tightest text-ink">
                  {whyDifferentContent.principlesHeading}
                </h2>
              </div>

              <div className="border border-cobalt-900/15 bg-white divide-y divide-cobalt-900/10">
                {whyDifferentContent.principles.map((p) => {
                  const isActive = activeStep === p.step;
                  return (
                    <button
                      key={p.step}
                      type="button"
                      onClick={() => jumpToStep(p.step)}
                      className={`w-full text-left min-h-[46px] px-5 py-4 flex items-center gap-3.5 transition-colors relative ${
                        isActive
                          ? "bg-cobalt-700 text-white"
                          : "text-ink hover:bg-cobalt-50"
                      }`}
                    >
                      {isActive && (
                        <span className="absolute left-0 top-0 bottom-0 w-1.5 bg-crimson-600" />
                      )}
                      <span
                        className={`text-xs font-bold px-2.5 py-0.5 shrink-0 ${
                          isActive
                            ? "bg-crimson-600 text-white"
                            : "bg-cobalt-100 text-cobalt-900"
                        }`}
                      >
                        {p.step}
                      </span>
                      <span className="text-[14.5px] sm:text-[15px] font-extrabold leading-snug">
                        {p.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Principles Stream */}
            <div className="lg:col-span-8 space-y-8">
              {whyDifferentContent.principles.map((p, pIdx) => {
                const nextStep =
                  pIdx < whyDifferentContent.principles.length - 1
                    ? whyDifferentContent.principles[pIdx + 1].step
                    : null;

                return (
                  <motion.article
                    key={p.step}
                    id={`ilke-${p.step}`}
                    onViewportEnter={() => setActiveStep(p.step)}
                    viewport={{ amount: 0.35 }}
                    className="bg-white border border-cobalt-900/15 shadow-card p-6 sm:p-10 scroll-mt-48 lg:scroll-mt-32"
                  >
                    <div className="flex items-start sm:items-center gap-3 pb-5 mb-6 border-b border-cobalt-900/10">
                      <span className="px-3.5 py-1.5 bg-crimson-600 text-white text-xs sm:text-[13px] font-extrabold shadow-crimson whitespace-nowrap shrink-0 mt-0.5 sm:mt-0">
                        {Number(p.step)}. İlke
                      </span>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-ink">
                        {p.title}
                      </h3>
                    </div>

                    <div className="space-y-4">
                      {p.items.map((item, idx) => (
                        <div
                          key={idx}
                          className="p-5 bg-paper border border-cobalt-900/10"
                        >
                          <div className="flex items-start gap-3.5">
                            <span className="mt-2 h-2.5 w-2.5 bg-cobalt-700 shrink-0" />
                            <div>
                              <h4 className="font-extrabold text-lg sm:text-xl text-ink">
                                {item.title}
                              </h4>
                              <p className="mt-2 text-[15px] sm:text-base text-ink-muted leading-relaxed">
                                {item.detail}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Guided Directional Link */}
                    <div className="mt-8 pt-6 border-t border-cobalt-900/10 flex items-center justify-between">
                      {nextStep ? (
                        <button
                          type="button"
                          onClick={() => jumpToStep(nextStep)}
                          className="group inline-flex items-center gap-2 text-sm sm:text-[15px] font-extrabold text-cobalt-700 hover:text-crimson-600 transition-colors"
                        >
                          <span>Sonraki İlkeye Geç ({Number(nextStep)}. İlke)</span>
                          <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                        </button>
                      ) : (
                        <Link
                          href="/iletisim"
                          className="group inline-flex items-center gap-2 text-sm sm:text-[15px] font-extrabold text-crimson-600 hover:text-cobalt-900 transition-colors"
                        >
                          <span>Süreç Planlamak İçin İletişime Geçin</span>
                          <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                        </Link>
                      )}
                      <span className="font-mono text-xs font-bold text-ink-muted">
                        0{p.step} / 05
                      </span>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>

          {/* Pedagogical Outcome (Verbatim) */}
          <div className="mt-12 sm:mt-16 bg-cobalt-950 text-white p-7 sm:p-12 border border-cobalt-900 shadow-studio flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-3xl">
              <div className="inline-block px-3 py-1 bg-crimson-600 text-white text-xs font-bold mb-4 shadow-crimson">
                Sonuç ve Kazanım
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tightest">
                {whyDifferentContent.pedagogicalOutcome.title}
              </h3>
              <p className="mt-4 text-[15px] sm:text-base text-cobalt-100/95 leading-relaxed">
                {whyDifferentContent.pedagogicalOutcome.body}
              </p>
            </div>

            <div className="shrink-0">
              <MagneticLink href={getWhatsAppUrl()} external variant="crimson">
                Ücretsiz Tanışma Seansı Planla
              </MagneticLink>
            </div>
          </div>
        </div>
      </section>

      {/* Next Subpage Navigator */}
      <NextChapterBanner
        title="30 Dakikalık Ücretsiz Tanışma Seansınızı Planlayın"
        description="Hedefinize ve öğrenme stilinize özel ders planlaması için hemen bizimle iletişime geçin."
        href="/iletisim"
        buttonLabel="İletişim Sayfasına Git"
      />
    </div>
  );
}
