"use client";

import React from "react";
import { programsIntro } from "@/data/content";
import { assetPath } from "@/config/site";
import { PhotoFrame } from "@/components/motion/Primitives";
import ProgramExplorer from "@/components/programs/ProgramExplorer";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export default function EgitimProgramlarimizPage() {
  return (
    <div className="bg-paper text-ink">
      <Breadcrumbs items={[{ label: "Eğitim Programlarımız", href: "/egitim-programlarimiz" }]} />

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

              <h1 className="max-w-4xl text-balance text-[1.55rem] font-extrabold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.65rem]">
                DEĞİŞEN DÜNYAYA AYBARİST&apos;İN GÜCÜYLE HAZIRLAN
              </h1>

              <p className="mt-5 text-[15.5px] sm:text-lg text-cobalt-50/95 leading-relaxed max-w-2xl">
                {programsIntro.lead}
              </p>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/30 via-indigo-400/20 to-sky-300/30 rounded-3xl blur-2xl animate-gentle-glow pointer-events-none" />
              <PhotoFrame
                src={assetPath("/images/programs-global-study.jpg")}
                alt={programsIntro.headline}
                aspectClass="aspect-[16/10]"
                priority
                className="relative z-10 shadow-studio"
              />
            </div>
          </div>


        </div>
      </section>

      <ProgramExplorer />
    </div>
  );
}
