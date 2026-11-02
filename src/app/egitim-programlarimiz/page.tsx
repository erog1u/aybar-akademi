import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, MessageSquare, Phone, ArrowUpRight } from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import { programsIntro } from "@/data/content";
import {
  MaskedLines,
  ParallaxWatermark,
} from "@/components/motion/Primitives";
import ProgramExplorer from "@/components/programs/ProgramExplorer";

export const metadata: Metadata = {
  title: "Eğitim Programlarımız & Birebir Özel Ders Kataloğu",
  description:
    "AYBAR AKADEMİ; YKS, LGS, KPSS Eğitim Bilimleri, ALES, Okula Takviye, 11 Dünya Dili (IELTS, TOEFL), YDT, YDS ve Birebir Sanat-Spor programlarında %100 Maarif Modeline uyumlu VIP özel dersler sunar.",
};

export default function EgitimProgramlarimizPage() {
  return (
    <div className="min-h-screen bg-paper flex flex-col">
      {/* =================================================================== */}
      {/* 1. ROYAL COBALT STUDIO HERO BANNER                                  */}
      {/* =================================================================== */}
      <section className="relative bg-cobalt-700 halftone-cobalt text-white border-b border-white/15 overflow-hidden">
        {/* Parallax Watermark Wordmark */}
        <div className="absolute -bottom-6 sm:-bottom-10 right-0 pointer-events-none opacity-[0.08] select-none overflow-hidden">
          <ParallaxWatermark text="MÜFREDAT" className="text-white" />
        </div>

        {/* Swiss Corner Crosshairs */}
        <span
          aria-hidden="true"
          className="absolute top-4 left-4 font-mono text-xs text-crimson-400 select-none z-10"
        >
          +
        </span>
        <span
          aria-hidden="true"
          className="absolute top-4 right-4 font-mono text-xs text-crimson-400 select-none z-10"
        >
          +
        </span>

        <div className="relative max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16">
          {/* Institutional Breadcrumb & Eyebrow */}
          <div className="flex flex-wrap items-center gap-2 mb-6 font-mono text-[11px] tracking-[0.14em] text-cobalt-200 uppercase">
            <Link
              href="/"
              className="hover:text-white transition-colors"
            >
              ANA SAYFA
            </Link>
            <span className="text-crimson-400">/</span>
            <span className="text-white font-semibold">
              EĞİTİM PROGRAMLARIMIZ
            </span>
            <span className="text-crimson-400">·</span>
            <span className="text-cobalt-300">
              {programsIntro.eyebrow}
            </span>
          </div>

          {/* Verified Institutional Maarif Badge */}
          <div className="inline-flex flex-wrap items-center gap-2 sm:gap-3 px-3.5 py-1.5 border border-white/20 bg-white/10 backdrop-blur-md mb-8">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-crimson-600 text-white font-mono text-[10px] font-bold tracking-[0.16em] uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
              MAARİF MODELİ
            </span>
            <span className="font-mono text-xs sm:text-[12px] tracking-[0.14em] text-white font-semibold uppercase">
              %100 YENİ NESİL MAARİF MODELİNE UYUMLU · BİREBİR ÖZEL DERS
            </span>
          </div>

          {/* MaskedLines Headline */}
          <div className="max-w-4xl">
            <MaskedLines
              as="h1"
              className="text-3xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tightest leading-[1.08] text-white"
              lines={[
                "Bizzat Size Özel Tasarlanmış",
                <>
                  <span className="font-serif italic font-normal text-cobalt-200">
                    Başarı Odaklı
                  </span>{" "}
                  <span className="relative inline-block px-3 py-1 bg-crimson-600 text-white -rotate-1 shadow-crimson ml-1 sm:ml-2">
                    Eğitim Programlarımız
                  </span>
                </>,
              ]}
            />

            {/* Verbatim programsIntro.lead text */}
            <p className="mt-8 text-base sm:text-lg lg:text-xl text-cobalt-100/90 leading-relaxed max-w-3xl font-light">
              {programsIntro.lead}
            </p>

            {/* Action Row */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#program-katalog"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-cobalt-900 font-sans text-sm font-bold tracking-tight hover:bg-cobalt-50 transition-colors shadow-sm"
              >
                <span>Müfredat Kataloğunu Keşfet</span>
                <ArrowDown className="h-4 w-4 text-crimson-600 animate-bounce" />
              </a>

              <a
                href={getWhatsAppUrl(
                  "Merhaba, Aybar Akademi eğitim programları ve 30 dakikalık ücretsiz tanışma seansı hakkında detaylı bilgi almak istiyorum."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-crimson-600 hover:bg-crimson-700 text-white font-sans text-sm font-bold tracking-tight shadow-crimson transition-colors"
              >
                <MessageSquare className="h-4 w-4" />
                <span>WhatsApp Danışma Hattı</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <div className="hidden lg:flex items-center gap-2 pl-4 border-l border-white/20 font-mono text-xs text-cobalt-200">
                <Phone className="h-3.5 w-3.5 text-crimson-400" />
                <span>Doğrudan Hat:</span>
                <a
                  href={siteConfig.contact.phoneHref}
                  className="text-white font-bold hover:text-crimson-300 transition-colors"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Metric Strip Along Bottom Border */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-white/15 bg-cobalt-950/70 divide-y sm:divide-y-0 sm:divide-x border-white/15">
          <div className="p-5 sm:p-6 flex flex-col justify-between">
            <div className="font-mono text-[11px] text-cobalt-300 tracking-[0.16em] uppercase">
              KAPSAM · 01
            </div>
            <div className="mt-2 text-base sm:text-lg font-extrabold text-white tracking-tight">
              6 ANA AKADEMİK ALAN
            </div>
            <p className="text-xs text-cobalt-200/80 mt-1 leading-relaxed">
              Sınav hazırlık, okula takviye, üniversite lisans, diller ve sanat
            </p>
          </div>

          <div className="p-5 sm:p-6 flex flex-col justify-between">
            <div className="font-mono text-[11px] text-cobalt-300 tracking-[0.16em] uppercase">
              DİLLER · 02
            </div>
            <div className="mt-2 text-base sm:text-lg font-extrabold text-white tracking-tight">
              11 DÜNYA DİLİ &amp; ULUSLARARASI SERTİFİKA
            </div>
            <p className="text-xs text-cobalt-200/80 mt-1 leading-relaxed">
              IELTS, TOEFL, Goethe, DELF, JLPT ve ÖSYM ulusal dil sınavları
            </p>
          </div>

          <div className="p-5 sm:p-6 flex flex-col justify-between">
            <div className="font-mono text-[11px] text-cobalt-300 tracking-[0.16em] uppercase">
              FORMAT · 03
            </div>
            <div className="mt-2 text-base sm:text-lg font-extrabold text-white tracking-tight">
              İLKOKULDAN ÜNİVERSİTEYE BİREBİR
            </div>
            <p className="text-xs text-cobalt-200/80 mt-1 leading-relaxed">
              İstanbul 39 ilçe yüz yüze veya 81 il canlı interaktif online
            </p>
          </div>

          <div className="p-5 sm:p-6 flex flex-col justify-between">
            <div className="font-mono text-[11px] text-cobalt-300 tracking-[0.16em] uppercase">
              KEŞİF · 04
            </div>
            <div className="mt-2 text-base sm:text-lg font-extrabold text-white tracking-tight">
              30 DK ÜCRETSİZ TANIŞMA SEANSI
            </div>
            <p className="text-xs text-cobalt-200/80 mt-1 leading-relaxed">
              Öğrenme stili analizi, eksik tespiti ve kişiye özel yol haritası
            </p>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 2. INTERACTIVE PROGRAM EXPLORER & CATALOG                           */}
      {/* =================================================================== */}
      <ProgramExplorer />
    </div>
  );
}
