"use client";

import React from "react";
import { MapPin, Globe2 } from "lucide-react";
import { aboutContent, programsIntro } from "@/data/content";
import { assetPath } from "@/config/site";
import {
  PhotoFrame,
  NextChapterBanner,
} from "@/components/motion/Primitives";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export default function HakkimizdaPage() {
  return (
    <div className="bg-paper text-ink">
      <Breadcrumbs items={[{ label: "Hakkımızda", href: "/hakkimizda" }]} />

      {/* 1. Canlı ve Ferah Cobalt Başlık */}
      <section className="studio-hero text-white border-b border-white/15 overflow-hidden py-12 sm:py-16 lg:py-20 relative">
        <div className="absolute top-1/4 left-0 sm:left-10 w-80 h-80 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/12 border border-white/25 text-white text-xs sm:text-[13px] font-bold tracking-wider uppercase mb-5 shadow-sm backdrop-blur-xs">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="radar-beacon absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                </span>
                <span>{aboutContent.eyebrow}</span>
              </div>

              <h1 className="max-w-4xl text-balance text-[1.55rem] font-extrabold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.65rem]">
                EĞİTİMDE SINIR TANIMIYORUZ
              </h1>
              <div className="mt-6 space-y-4 text-base sm:text-lg text-cobalt-50/95 leading-relaxed">
                <p>{aboutContent.introParagraphs[0]}</p>
                <div className="rounded-xl bg-white/12 border-l-4 border-white/60 p-4 sm:p-5 text-white font-semibold shadow-sm">
                  {aboutContent.introParagraphs[1]}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 w-full relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/30 via-indigo-400/20 to-sky-300/30 rounded-3xl blur-2xl animate-gentle-glow pointer-events-none" />
              <PhotoFrame
                src={assetPath("/images/maarif-academic-mentorship.jpg")}
                alt={aboutContent.headline}
                aspectClass="aspect-[16/10] sm:aspect-[4/3]"
                priority
                className="relative z-10 shadow-studio"
                caption={
                  <div className="flex items-center justify-between text-xs font-bold text-cobalt-950 px-1">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4 text-cobalt-700" />
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

      {/* 2. Sunduğumuz Çözümler — Canlı ve Prestijli Çözüm Kartları */}
      <section className="py-14 sm:py-20 bg-paper border-b border-cobalt-900/10">
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {aboutContent.solutions.map((sol) => (
              <div
                key={sol.index}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-cobalt-900/10 shadow-sm hover:border-crimson-500/40 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
              >
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-crimson-600 via-cobalt-600 to-crimson-600 opacity-100" />
                <div>
                  <span className="inline-flex items-center justify-center h-8 px-3 rounded-xl text-xs font-black mb-4 bg-crimson-600 text-white shadow-crimson group-hover:scale-105 transition-transform">
                    {sol.index}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-cobalt-950 leading-snug group-hover:text-crimson-600 transition-colors">
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
            <h2 className="max-w-full text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-[1.2] text-ink">
              {aboutContent.reachHeadline}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="rounded-2xl bg-white text-ink border border-cobalt-900/10 shadow-sm hover:border-crimson-500/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-crimson-600 via-cobalt-600 to-crimson-600 opacity-100" />
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimson-50 text-crimson-700 text-xs font-extrabold mb-4 border border-crimson-200/50">
                  <span className="h-2 w-2 rounded-full bg-crimson-600 animate-pulse" />
                  <MapPin className="h-3.5 w-3.5" />
                  <span>Yüz Yüze Özel Ders</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-cobalt-950 group-hover:text-crimson-600 transition-colors">
                  {aboutContent.reachItems[0].title}
                </h3>
                <p className="mt-3.5 text-base sm:text-[17px] text-ink-muted leading-relaxed">
                  {aboutContent.reachItems[0].description}
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-white text-ink border border-cobalt-900/10 shadow-sm hover:border-crimson-500/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-crimson-600 via-cobalt-600 to-crimson-600 opacity-100" />
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cobalt-50 text-cobalt-800 text-xs font-extrabold mb-4 border border-cobalt-200/50">
                  <span className="h-2 w-2 rounded-full bg-cobalt-700 animate-pulse" />
                  <Globe2 className="h-3.5 w-3.5" />
                  <span>Canlı Online Eğitim</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-cobalt-950 group-hover:text-cobalt-700 transition-colors">
                  {aboutContent.reachItems[1].title}
                </h3>
                <p className="mt-3.5 text-base sm:text-[17px] text-ink-muted leading-relaxed">
                  {aboutContent.reachItems[1].description}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-white border border-cobalt-900/10 text-center max-w-3xl mx-auto shadow-sm relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-crimson-600 via-cobalt-600 to-crimson-600 opacity-100" />
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
