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
      <section className="studio-hero text-white py-12 sm:py-16 lg:py-20 border-b border-white/15 overflow-hidden">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/12 border border-white/25 px-4 py-1.5 text-xs sm:text-[13px] font-bold tracking-[0.06em] text-white mb-5">
                <span className="h-2 w-2 rounded-full bg-crimson-500 shrink-0" />
                <span>{programsIntro.eyebrow}</span>
              </div>

              <MaskedLines
                as="h1"
                className="text-[2rem] sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] text-white"
                lines={[programsIntro.headline]}
              />

              <p className="mt-5 text-[15.5px] sm:text-lg text-cobalt-50/95 leading-relaxed">
                {programsIntro.lead}
              </p>
            </div>

            <div className="lg:col-span-5">
              <PhotoFrame
                src={assetPath("/images/programs-global-study.jpg")}
                alt={programsIntro.headline}
                aspectClass="aspect-[16/10]"
                priority
                caption={
                  <div className="flex items-center justify-between text-xs font-bold text-cobalt-950 px-1">
                    <span className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-crimson-600" />
                      6 Ana Akademik Alan
                    </span>
                    <span className="text-cobalt-700 font-extrabold">%100 Birebir VIP</span>
                  </div>
                }
              />
            </div>
          </div>

          {/* Hero Tabanı: 4 Kurumsal Güven Sütunu */}
          <div className="mt-10 pt-8 border-t border-white/15 grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-3.5">
              <span className="font-brand text-2xl sm:text-3xl font-extrabold text-white">6 Alan</span>
              <div className="text-xs sm:text-[13px] text-cobalt-100 leading-snug">
                <strong className="text-white block font-bold">Kapsamlı Müfredat</strong>
                İlkokuldan üniversiteye
              </div>
            </div>
            <div className="flex items-center gap-3.5">
              <span className="font-brand text-2xl sm:text-3xl font-extrabold text-white">11 Dil</span>
              <div className="text-xs sm:text-[13px] text-cobalt-100 leading-snug">
                <strong className="text-white block font-bold">Dünya Dilleri</strong>
                YDS, YDT ve uluslararası
              </div>
            </div>
            <div className="flex items-center gap-3.5">
              <span className="font-brand text-2xl sm:text-3xl font-extrabold text-white">%100</span>
              <div className="text-xs sm:text-[13px] text-cobalt-100 leading-snug">
                <strong className="text-white block font-bold">Maarif Uyumu</strong>
                Yeni nesil beceri temelli
              </div>
            </div>
            <div className="flex items-center gap-3.5">
              <span className="font-brand text-2xl sm:text-3xl font-extrabold text-crimson-400">VIP</span>
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
