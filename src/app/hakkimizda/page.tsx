"use client";

import React from "react";
import { MapPin, Globe2 } from "lucide-react";
import { aboutContent, programsIntro } from "@/data/content";
import { assetPath } from "@/config/site";
import {
  MaskedLines,
  PhotoFrame,
  NextChapterBanner,
} from "@/components/motion/Primitives";

export default function HakkimizdaPage() {
  return (
    <div className="bg-paper text-ink">
      {/* 1. Canlı ve Ferah Cobalt Başlık */}
      <section className="studio-hero text-white border-b border-white/15 overflow-hidden py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/12 border border-white/25 text-white text-xs sm:text-[13px] font-bold tracking-wider uppercase mb-5">
                <span className="h-2 w-2 rounded-full bg-crimson-500" />
                <span>{aboutContent.eyebrow}</span>
              </div>

              <MaskedLines
                as="h1"
                className="text-[2.05rem] sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] text-white"
                lines={[aboutContent.headline]}
              />

              <div className="mt-6 space-y-4 text-base sm:text-lg text-cobalt-50/95 leading-relaxed">
                <p>{aboutContent.introParagraphs[0]}</p>
                <div className="rounded-xl bg-white/12 border-l-4 border-crimson-500 p-4 sm:p-5 text-white font-semibold">
                  {aboutContent.introParagraphs[1]}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 w-full">
              <PhotoFrame
                src={assetPath("/images/istanbul-home-tutoring.jpg")}
                alt={aboutContent.headline}
                aspectClass="aspect-[16/10] sm:aspect-[4/3]"
                priority
                caption={
                  <div className="flex items-center justify-between text-xs font-bold text-cobalt-950 px-1">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4 text-crimson-600" />
                      İstanbul’un Tüm İlçelerinde
                    </span>
                    <span className="text-cobalt-700 font-extrabold">Evinizin Konforunda Birebir</span>
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Sunduğumuz Çözümler — Ferah, Şık ve Kutusuz Mizanpaj */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-cobalt-900/10">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 mb-2.5">
              <span className="h-2 w-2 rounded-full bg-crimson-600 inline-block" />
              <span className="text-xs sm:text-[13px] font-extrabold tracking-wider uppercase text-cobalt-700">
                AKADEMİK ÇÖZÜMLERİMİZ
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-ink">
              Sunduğumuz Çözümler
            </h2>
            <p className="mt-3 text-base sm:text-lg text-ink-muted leading-relaxed">
              {aboutContent.solutionsIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {aboutContent.solutions.map((sol, idx) => (
              <div
                key={sol.index}
                className="flex flex-col justify-between pb-6 lg:pb-0 lg:pr-6 border-b lg:border-b-0 lg:border-r border-cobalt-900/10 last:border-none"
              >
                <div>
                  <span
                    className={`inline-flex items-center justify-center h-8 px-3 rounded-lg text-xs font-extrabold mb-4 ${
                      idx === 0
                        ? "bg-crimson-600 text-white"
                        : "bg-cobalt-700 text-white"
                    }`}
                  >
                    {sol.index}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-cobalt-950 leading-snug">
                    {sol.title}
                  </h3>
                  <p className="mt-3 text-[15px] sm:text-base text-ink-muted leading-relaxed">
                    {sol.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Eğitimde Sınır Tanımıyoruz (İstanbul & Tüm Türkiye) */}
      <section className="py-12 sm:py-16 lg:py-20 bg-paper">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 mb-2.5">
              <span className="h-2 w-2 rounded-full bg-crimson-600 inline-block" />
              <span className="text-xs sm:text-[13px] font-extrabold tracking-wider uppercase text-cobalt-700">
                YÜZ YÜZE & ONLINE
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-ink">
              {aboutContent.reachHeadline}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="rounded-2xl bg-white text-ink border border-cobalt-900/10 shadow-sm p-7 sm:p-9 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimson-50 text-crimson-700 text-xs font-extrabold mb-4">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>Yüz Yüze Özel Ders</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-cobalt-950">
                  {aboutContent.reachItems[0].title}
                </h3>
                <p className="mt-3.5 text-base sm:text-[17px] text-ink-muted leading-relaxed">
                  {aboutContent.reachItems[0].description}
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-white text-ink border border-cobalt-900/10 shadow-sm p-7 sm:p-9 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cobalt-50 text-cobalt-800 text-xs font-extrabold mb-4">
                  <Globe2 className="h-3.5 w-3.5" />
                  <span>Canlı Online Eğitim</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-cobalt-950">
                  {aboutContent.reachItems[1].title}
                </h3>
                <p className="mt-3.5 text-base sm:text-[17px] text-ink-muted leading-relaxed">
                  {aboutContent.reachItems[1].description}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-white border border-cobalt-900/10 text-center max-w-3xl mx-auto shadow-sm">
            <p className="text-base sm:text-lg font-medium text-cobalt-950 leading-relaxed">
              {aboutContent.closingParagraph}
            </p>
          </div>
        </div>
      </section>

      <NextChapterBanner
        title={programsIntro.headline}
        description={programsIntro.closing}
        href="/egitim-programlarimiz"
        buttonLabel="Eğitim Programlarımız"
      />
    </div>
  );
}
