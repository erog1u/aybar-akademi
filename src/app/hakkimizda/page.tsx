"use client";

import React from "react";
import { MapPin, Globe2 } from "lucide-react";
import { aboutContent, programsIntro } from "@/data/content";
import { NextChapterBanner } from "@/components/motion/Primitives";
import {
  AybarCrestEmblem,
  AybarInstitutionalSeal,
} from "@/components/brand/AybarCrest";

export default function HakkimizdaPage() {
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/12 border border-white/20 text-white text-xs sm:text-[13px] font-bold tracking-wider uppercase mb-5">
                <span className="h-2 w-2 rounded-full bg-crimson-500" />
                <span>{aboutContent.eyebrow}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tightest leading-[1.12] text-white">
                {aboutContent.headline}
              </h1>

              <div className="mt-6 space-y-4 text-base sm:text-lg text-cobalt-50/95 leading-relaxed">
                {aboutContent.introParagraphs.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 w-full">
              <div className="bg-white rounded-2xl p-8 border border-white/25 shadow-studio flex items-center justify-center">
                <AybarInstitutionalSeal variant="light" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Sunduğumuz Çözümler (Verbatim) */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tightest text-ink">
              Sunduğumuz Çözümler
            </h2>
            <p className="mt-3 text-base sm:text-lg text-ink-muted leading-relaxed">
              {aboutContent.solutionsIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {aboutContent.solutions.map((sol) => (
              <div
                key={sol.index}
                className="rounded-2xl bg-white p-6 sm:p-7 border border-cobalt-900/12 shadow-card flex flex-col"
              >
                <span className="inline-flex self-start px-3 py-1 rounded-lg bg-cobalt-50 text-cobalt-700 text-xs font-extrabold mb-4">
                  {sol.index}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-ink leading-snug">
                  {sol.title}
                </h3>
                <p className="mt-3 text-[15.5px] sm:text-base text-ink-muted leading-relaxed">
                  {sol.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Eğitimde Sınır Tanımıyoruz (Verbatim) */}
      <section className="py-12 sm:py-16 lg:py-20 bg-paper-warm border-t border-cobalt-900/10">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tightest text-ink mb-8 sm:mb-10">
            {aboutContent.reachHeadline}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-cobalt-900 text-white p-7 sm:p-9 shadow-card">
              <div className="inline-flex items-center justify-center h-11 w-11 rounded-xl bg-white/12 text-white mb-5">
                <MapPin className="h-5 w-5" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tightest text-white">
                {aboutContent.reachItems[0].title}
              </h3>
              <p className="mt-3 text-base text-cobalt-100/95 leading-relaxed">
                {aboutContent.reachItems[0].description}
              </p>
            </div>

            <div className="rounded-2xl bg-white text-ink p-7 sm:p-9 border border-cobalt-900/12 shadow-card">
              <div className="inline-flex items-center justify-center h-11 w-11 rounded-xl bg-cobalt-50 text-cobalt-700 mb-5">
                <Globe2 className="h-5 w-5" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tightest text-ink">
                {aboutContent.reachItems[1].title}
              </h3>
              <p className="mt-3 text-base text-ink-muted leading-relaxed">
                {aboutContent.reachItems[1].description}
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl bg-white p-6 sm:p-8 border border-cobalt-900/12 shadow-card">
            <p className="font-serif italic text-lg sm:text-xl text-cobalt-950 leading-relaxed">
              “{aboutContent.closingParagraph}”
            </p>
          </div>
        </div>
      </section>

      {/* 4. Next Chapter Banner */}
      <NextChapterBanner
        title={programsIntro.headline}
        description={programsIntro.closing}
        href="/egitim-programlarimiz"
        buttonLabel="Eğitim Programlarımız"
      />
    </div>
  );
}
