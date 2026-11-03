"use client";

import React from "react";
import { programsIntro } from "@/data/content";
import { assetPath } from "@/config/site";
import { MaskedLines, Reveal, PhotoFrame } from "@/components/motion/Primitives";
import ProgramExplorer from "@/components/programs/ProgramExplorer";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export default function EgitimProgramlarimizPage() {
  return (
    <div className="bg-paper text-ink">
      <Breadcrumbs items={[{ label: "Eğitim Programlarımız" }]} />

      {/* Canlı Cobalt Başlık Alanı */}
      <section className="studio-hero text-white py-12 sm:py-16 lg:py-20 border-b border-white/15 overflow-hidden relative">
        <div className="absolute top-1/4 left-0 sm:left-10 w-80 h-80 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/12 border border-white/25 px-4 py-1.5 text-xs sm:text-[13px] font-bold tracking-[0.06em] text-white mb-5 shadow-sm backdrop-blur-xs">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="radar-beacon absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                </span>
                <span>{programsIntro.eyebrow}</span>
              </div>

              <MaskedLines
                as="h1"
                className="text-[2rem] sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] text-white"
                lines={[
                  "İlkokuldan Üniversiteye,",
                  <span
                    key="programs-crimson-box"
                    className="relative inline-flex items-center px-4 sm:px-6 py-1 sm:py-1.5 rounded-2xl bg-crimson-600 text-white font-extrabold shadow-crimson animate-crimson-box overflow-hidden mt-1 sm:mt-2"
                  >
                    <span className="relative z-10">Kapsamlı ve Birebir Eğitim.</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-light-sweep pointer-events-none" />
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                      <span className="radar-beacon absolute inline-flex h-full w-full rounded-full bg-white opacity-80" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
                    </span>
                  </span>,
                ]}
              />

              <p className="mt-5 text-[15.5px] sm:text-lg text-cobalt-50/95 leading-relaxed max-w-2xl">
                {programsIntro.lead}
              </p>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/30 via-indigo-400/20 to-sky-300/30 rounded-3xl blur-2xl animate-gentle-glow pointer-events-none" />
              <div className="absolute -top-3 sm:-top-3.5 right-3 sm:right-4 z-20 inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-crimson-600 text-white font-black text-[10.5px] sm:text-xs shadow-crimson animate-float-slow">
                <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
                <span>6 Ana Akademik Alan</span>
              </div>
              <PhotoFrame
                src={assetPath("/images/programs-global-study.jpg")}
                alt={programsIntro.headline}
                aspectClass="aspect-[16/10]"
                priority
                className="relative z-10 shadow-studio"
                caption={
                  <div className="flex items-center justify-between text-xs font-bold text-cobalt-950 px-1">
                    <span className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      6 Ana Akademik Alan
                    </span>
                    <span className="text-cobalt-700 font-extrabold">%100 Birebir VIP</span>
                  </div>
                }
              />
            </div>
          </div>

          {/* Hero Tabanı: 4 Kurumsal Güven Sütunu (Mobilde Asla Sıkışmayan Orantılı Düzen) */}
          <div className="mt-10 pt-8 border-t border-white/15 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-3.5">
              <span className="font-brand text-2xl sm:text-3xl font-extrabold text-white">6 Alan</span>
              <div className="text-xs sm:text-[13px] text-cobalt-100 leading-snug">
                <strong className="text-white block font-bold">Kapsamlı Müfredat</strong>
                İlkokuldan üniversiteye
              </div>
            </div>
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-3.5">
              <span className="font-brand text-2xl sm:text-3xl font-extrabold text-white">11 Dil</span>
              <div className="text-xs sm:text-[13px] text-cobalt-100 leading-snug">
                <strong className="text-white block font-bold">Dünya Dilleri</strong>
                YDS, YDT ve uluslararası
              </div>
            </div>
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-3.5">
              <span className="font-brand text-2xl sm:text-3xl font-extrabold text-white">%100</span>
              <div className="text-xs sm:text-[13px] text-cobalt-100 leading-snug">
                <strong className="text-white block font-bold">Maarif Uyumu</strong>
                Yeni nesil beceri temelli
              </div>
            </div>
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-3.5">
              <span className="font-brand text-2xl sm:text-3xl font-extrabold text-white">VIP</span>
              <div className="text-xs sm:text-[13px] text-cobalt-100 leading-snug">
                <strong className="text-white block font-bold">Eğitim Koçluğu</strong>
                Bireysel takip ve analiz
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProgramExplorer />
    </div>
  );
}
