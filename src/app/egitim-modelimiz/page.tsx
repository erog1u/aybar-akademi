"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Check,
  ArrowUpRight,
  ShieldCheck,
  Compass,
  Brain,
  Clock,
  Sparkles,
  Users,
  Target,
  Layers,
  Activity,
  FileText,
  CheckCircle2,
  GitMerge,
  Award,
  ChevronRight,
} from "lucide-react";
import {
  MaskedLines,
  Reveal,
  SwissSectionHeader,
  MagneticLink,
  ParallaxWatermark,
  KineticRibbon,
  LUXURY_EASE,
} from "@/components/motion/Primitives";
import { educationModelContent } from "@/data/content";
import { siteConfig, getWhatsAppUrl } from "@/config/site";

export default function EgitimModelimizPage() {
  const model01 = educationModelContent.sections[0];
  const model02 = educationModelContent.sections[1];
  const model03 = educationModelContent.sections[2];
  const model04 = educationModelContent.sections[3];

  return (
    <div className="relative min-h-screen bg-paper text-ink overflow-hidden selection:bg-crimson-600 selection:text-white">
      {/* ==================================================================== */}
      {/* 1. HERO SECTION: Cobalt Studio Asymmetric Hero                       */}
      {/* ==================================================================== */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 border-b border-cobalt-900/10 swiss-grid-lines">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb & Folio Header */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted mb-8">
            <Link
              href="/"
              className="hover:text-cobalt-700 transition-colors flex items-center gap-1.5"
            >
              <span>ANA SAYFA</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-crimson-600" />
            <span className="text-cobalt-700 font-semibold">
              {educationModelContent.eyebrow}
            </span>
            <span className="text-cobalt-900/30">/</span>
            <span className="inline-flex items-center px-2 py-0.5 bg-crimson-600/10 text-crimson-700 border border-crimson-600/20 font-mono text-[10px] tracking-wider">
              %100 MAARİF MODELİ UYUMLU
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left 7 Cols: Typographic Thesis */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2.5 px-3 py-1.5 border border-cobalt-700/20 bg-cobalt-50 text-cobalt-800 font-mono text-xs tracking-[0.16em]">
                  <span className="h-2 w-2 rounded-full bg-crimson-600 animate-pulse" />
                  <span>STANDART · VIP SÜREÇ YÖNETİMİ</span>
                </div>

                <MaskedLines
                  as="h1"
                  lines={[
                    "VIP Süreç Yönetimi ve",
                    "Bütüncül Rehberlik Platformu",
                  ]}
                  className="text-3xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tightest leading-[1.06] text-ink"
                />
              </div>

              {/* Full verbatim lead */}
              <Reveal delay={0.15}>
                <p className="text-lg sm:text-xl text-ink-muted leading-relaxed font-sans max-w-2xl border-l-2 border-crimson-600 pl-5">
                  {educationModelContent.lead}
                </p>
              </Reveal>

              {/* Architectural Metadata Chips */}
              <Reveal delay={0.25}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3 bg-white border border-cobalt-900/10 shadow-sm">
                    <span className="font-mono text-[10px] tracking-[0.16em] text-cobalt-700 block uppercase mb-1">
                      TECRÜBE
                    </span>
                    <span className="text-sm font-bold text-ink">
                      {siteConfig.experienceYears} Yıllık Birikim
                    </span>
                  </div>
                  <div className="p-3 bg-white border border-cobalt-900/10 shadow-sm">
                    <span className="font-mono text-[10px] tracking-[0.16em] text-cobalt-700 block uppercase mb-1">
                      KAPSAM
                    </span>
                    <span className="text-sm font-bold text-ink">
                      39 İlçe Yüz Yüze
                    </span>
                  </div>
                  <div className="p-3 bg-white border border-cobalt-900/10 shadow-sm">
                    <span className="font-mono text-[10px] tracking-[0.16em] text-cobalt-700 block uppercase mb-1">
                      CANLI ONLİNE
                    </span>
                    <span className="text-sm font-bold text-ink">
                      81 İlde Birebir
                    </span>
                  </div>
                </div>
              </Reveal>

              {/* Actions */}
              <Reveal delay={0.35}>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <MagneticLink
                    href={getWhatsAppUrl(
                      "Merhaba, Aybar Akademi VIP Eğitim Modeli ve 30 dakikalık ücretsiz tanışma seansı hakkında bilgi almak istiyorum."
                    )}
                    external
                    variant="crimson"
                  >
                    ÜCRETSİZ 30 DK KEŞİF SEANSI
                  </MagneticLink>

                  <MagneticLink href="#model-01" variant="outline-dark">
                    4 SÜTUNU İNCELEYİN
                  </MagneticLink>
                </div>
              </Reveal>
            </div>

            {/* Right 5 Cols: Framed Architectural Studio Image */}
            <div className="lg:col-span-5">
              <Reveal delay={0.2} y={30}>
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Outer Swiss Frame */}
                  <div className="relative p-3 bg-white border border-cobalt-900/15 shadow-studio">
                    {/* Architectural Register Marks */}
                    <span
                      aria-hidden="true"
                      className="absolute -top-3 -left-3 font-mono text-sm leading-none text-crimson-600 select-none"
                    >
                      +
                    </span>
                    <span
                      aria-hidden="true"
                      className="absolute -top-3 -right-3 font-mono text-sm leading-none text-crimson-600 select-none"
                    >
                      +
                    </span>
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-3 -left-3 font-mono text-sm leading-none text-crimson-600 select-none"
                    >
                      +
                    </span>
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-3 -right-3 font-mono text-sm leading-none text-crimson-600 select-none"
                    >
                      +
                    </span>

                    {/* Signal Crimson Corner Accent (Top Right) */}
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-crimson-600 z-10 pointer-events-none" />

                    {/* Image Container */}
                    <div className="relative aspect-[4/4.5] w-full overflow-hidden bg-cobalt-950">
                      <Image
                        src="/images/vip-mentorship.jpg"
                        alt="VIP Süreç Yönetimi · Birebir Akademik Liderlik"
                        fill
                        priority
                        className="object-cover transition-transform duration-700 hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />

                      {/* Studio Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-cobalt-950/85 via-transparent to-transparent pointer-events-none" />

                      {/* Floating Micro Badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-cobalt-950/90 text-white border border-white/20 font-mono text-[10px] tracking-[0.16em] backdrop-blur-sm">
                          <span className="h-1.5 w-1.5 rounded-full bg-crimson-500 animate-pulse" />
                          BİREBİR SÜREÇ
                        </span>
                      </div>

                      {/* Bottom Inset Caption */}
                      <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                        <p className="font-mono text-[10px] tracking-[0.16em] text-cobalt-200 uppercase mb-1">
                          AYBAR AKADEMİ STANDARDI
                        </p>
                        <p className="text-sm font-bold tracking-tight text-white leading-snug">
                          Kişiye Özel Akılcı Mühendislik &amp; Tam Öğrenme
                        </p>
                      </div>
                    </div>

                    {/* Architectural Caption Bar below Image */}
                    <div className="mt-3 pt-3 border-t border-cobalt-900/10 flex items-center justify-between gap-2">
                      <span className="font-mono text-[10px] sm:text-[11px] font-semibold tracking-[0.14em] text-cobalt-900">
                        VIP SÜREÇ YÖNETİMİ · BİREBİR AKADEMİK LİDERLİK
                      </span>
                      <span className="font-mono text-[10px] text-crimson-600 font-bold shrink-0">
                        %100
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Kinetic Typographic Ribbon */}
      <KineticRibbon
        items={[
          "VIP SÜREÇ YÖNETİMİ",
          "BİREBİR EĞİTİM FELSEFESİ",
          "MAARİF MODELİ %100 UYUMLU",
          "YOL ARKADAŞI KOÇLUK",
          "DÖRT YAPISAL SÜTUN",
          "AİLE & OKUL KÖPRÜSÜ",
        ]}
      />

      {/* ==================================================================== */}
      {/* 2. PILLAR 01: VIP Süreç Yönetimi: Kişiye Özel Eğitim Felsefesi      */}
      {/* ==================================================================== */}
      <section
        id="model-01"
        className="relative py-20 lg:py-28 border-b border-cobalt-900/10 scroll-mt-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SwissSectionHeader
            index={model01.code}
            eyebrow="KİŞİYE ÖZEL EĞİTİM FELSEFESİ"
            title={model01.title}
            subtitle={model01.intro}
            rightSlot={
              <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 border border-crimson-600/20 bg-crimson-50 text-crimson-700 font-mono text-xs tracking-wider">
                <span>KİTLESEL EĞİTİME VEDA</span>
              </div>
            }
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left 4 Cols: Architectural Sticky Manifesto & Delivery Formats */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 bg-paper-warm border border-cobalt-900/10 relative">
                <span
                  aria-hidden="true"
                  className="absolute -top-2 -right-2 font-mono text-xs text-crimson-600"
                >
                  +
                </span>
                <span className="font-mono text-[10px] tracking-[0.18em] text-cobalt-700 font-semibold block mb-2">
                  ÇİFTE ERİŞİM MODELİ
                </span>
                <h3 className="text-lg font-bold tracking-tight text-ink mb-3">
                  Zaman ve Mekân Sınırlarını Aşan Esneklik
                </h3>
                <p className="text-sm text-ink-muted leading-relaxed mb-6">
                  Öğrencimizin konsantrasyonu, konforu ve ailesinin tercihleri
                  doğrultusunda iki kusursuz kanal:
                </p>

                <div className="space-y-4">
                  {/* Format 1: Yüz Yüze */}
                  <div className="p-3.5 bg-white border border-cobalt-900/10">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="font-mono text-[10px] font-bold text-cobalt-800 tracking-wider">
                        01 · YÜZ YÜZE ÖZEL DERS
                      </span>
                      <span className="px-1.5 py-0.5 bg-cobalt-100 text-cobalt-800 font-mono text-[9px] font-semibold">
                        39 İLÇE
                      </span>
                    </div>
                    <p className="text-xs text-ink-muted leading-relaxed">
                      İstanbul genelinde evinizin konforunda, güvenli ve verimli
                      birebir yüz yüze çalışma ortamı.
                    </p>
                  </div>

                  {/* Format 2: Online */}
                  <div className="p-3.5 bg-white border border-cobalt-900/10">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="font-mono text-[10px] font-bold text-cobalt-800 tracking-wider">
                        02 · CANLI ONLİNE DERS
                      </span>
                      <span className="px-1.5 py-0.5 bg-crimson-100 text-crimson-800 font-mono text-[9px] font-semibold">
                        81 İL
                      </span>
                    </div>
                    <p className="text-xs text-ink-muted leading-relaxed">
                      Gelişmiş dijital grafik tabletler ve interaktif tahta ile
                      Türkiye&apos;nin her noktasından kesintisiz erişim.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 border-l-2 border-cobalt-700 bg-cobalt-50/70 text-xs text-cobalt-900 leading-relaxed font-sans">
                <span className="font-bold block font-mono text-[10px] tracking-wider mb-1 text-cobalt-800">
                  MAARİF MODELİ REFERANSI:
                </span>
                Tüm branş öğretmenlerimiz MEB Yeni Nesil Maarif Modeli beceri
                temelli soru tekniklerine ve güncel müfredat hedeflerine %100
                hâkimdir.
              </div>
            </div>

            {/* Right 8 Cols: 3 Numbered Ledger Points Verbatim */}
            <div className="lg:col-span-8 space-y-6">
              {model01.points.map((pt, idx) => (
                <Reveal key={idx} delay={idx * 0.1}>
                  <div className="group relative p-6 sm:p-8 bg-paper border border-cobalt-900/10 hover:border-cobalt-700/40 transition-all duration-300">
                    {/* Hairline + register mark */}
                    <span
                      aria-hidden="true"
                      className="absolute -top-[7px] right-4 font-mono text-xs text-crimson-600 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      +
                    </span>

                    <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                      {/* Numeric Index Tag */}
                      <div className="shrink-0">
                        <span className="inline-flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 bg-white border border-cobalt-900/15 font-mono text-sm sm:text-base font-bold text-cobalt-800 group-hover:bg-cobalt-700 group-hover:text-white transition-colors">
                          0{idx + 1}
                        </span>
                      </div>

                      <div className="space-y-2.5 flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h4 className="text-lg sm:text-xl font-bold tracking-tight text-ink group-hover:text-cobalt-800 transition-colors">
                            {pt.label}
                          </h4>
                          <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-ink-subtle">
                            STANDART · P{idx + 1}
                          </span>
                        </div>

                        {/* Full verbatim text */}
                        <p className="text-sm sm:text-base text-ink-muted leading-relaxed font-sans">
                          {pt.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}

              {/* Bottom Assurance Bar */}
              <div className="p-4 bg-paper-warm border border-cobalt-900/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-ink-muted">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-crimson-600" />
                  ÖĞRENME HIZI: BİREYSEL &amp; ÖZELLEŞTİRİLMİŞ
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-crimson-600" />
                  TELAFİ &amp; TAKİP: %100 DENETİMLİ
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 3. PILLAR 02: Inverted Royal Cobalt Spread (Eğitim Koçluğu)         */}
      {/* ==================================================================== */}
      <section
        id="model-02"
        className="relative py-20 lg:py-28 bg-cobalt-950 text-white halftone-cobalt border-b border-white/15 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SwissSectionHeader
            dark
            index={model02.code}
            eyebrow="PROFESYONEL YOL ARKADAŞLIĞI"
            title={model02.title}
            subtitle={model02.intro}
            rightSlot={
              <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 border border-white/20 bg-white/5 text-cobalt-100 font-mono text-xs tracking-wider">
                <span>BASKI DEĞİL · İÇSEL GÜÇ</span>
              </div>
            }
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left 4 Cols: Mentorluk Manifestosu & Pull-Quote */}
            <div className="lg:col-span-4 space-y-6">
              <Reveal delay={0.1}>
                <div className="p-6 bg-white/5 border border-white/15 backdrop-blur-sm relative">
                  <span
                    aria-hidden="true"
                    className="absolute -top-2 -left-2 font-mono text-xs text-crimson-500"
                  >
                    +
                  </span>
                  <div className="flex items-center gap-2 mb-4">
                    <Compass className="h-5 w-5 text-crimson-500" />
                    <span className="font-mono text-[11px] tracking-[0.16em] text-cobalt-200 uppercase font-semibold">
                      KOÇLUK YAKLAŞIMI
                    </span>
                  </div>

                  <blockquote className="font-serif italic text-base sm:text-lg text-white/95 leading-relaxed mb-6">
                    &ldquo;Bizim için koçluk; dışarıdan kurulan bir denetim baskısı
                    değil, öğrencinin kendi potansiyelini keşfetmesi ve hedefine
                    sarsılmaz bir inançla yürümesidir.&rdquo;
                  </blockquote>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-cobalt-200">
                    <span>{siteConfig.founder.name}</span>
                    <span className="text-crimson-400 font-semibold">
                      AYBAR METODU
                    </span>
                  </div>
                </div>
              </Reveal>

              {/* Koçluk Odakları Listesi */}
              <Reveal delay={0.2}>
                <div className="p-5 border border-white/10 bg-cobalt-900/60 space-y-3">
                  <span className="font-mono text-[10px] tracking-[0.18em] text-cobalt-300 block uppercase font-semibold">
                    KOÇLUK HİZMETİNİN KAPSAMI
                  </span>
                  <ul className="space-y-2 text-xs text-cobalt-100/90 font-mono">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-crimson-500 rounded-full" />
                      <span>Haftalık Birebir Takip &amp; Program Revizyonu</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-crimson-500 rounded-full" />
                      <span>Sınav Stresi ve Kaygı Yönetimi Seansları</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-crimson-500 rounded-full" />
                      <span>Hafıza Teknikleri &amp; Zihin Haritaları</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-crimson-500 rounded-full" />
                      <span>Hedef Üniversite / Lise Net Stratejileri</span>
                    </li>
                  </ul>
                </div>
              </Reveal>
            </div>

            {/* Right 8 Cols: 4 Points Verbatim in 2x2 Architectural Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {model02.points.map((pt, idx) => {
                const stepTags = [
                  "[SÜRDÜRÜLEBİLİR PLANLAMA]",
                  "[DİSİPLİN DENETİMİ]",
                  "[BİLİMSEL METOTLAR]",
                  "[PSİKOLOJİK DİRENÇ]",
                ];

                return (
                  <Reveal key={idx} delay={idx * 0.1}>
                    <div className="p-6 bg-white/[0.04] border border-white/15 hover:border-crimson-500/50 transition-all duration-300 h-full flex flex-col justify-between group">
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-4">
                          <span className="font-mono text-xs font-bold text-crimson-400">
                            0{idx + 1} / 04
                          </span>
                          <span className="font-mono text-[10px] tracking-[0.14em] text-cobalt-300 bg-white/5 px-2 py-0.5 border border-white/10">
                            {stepTags[idx]}
                          </span>
                        </div>

                        <h4 className="text-base sm:text-lg font-bold tracking-tight text-white mb-3 group-hover:text-crimson-300 transition-colors">
                          {pt.label}
                        </h4>

                        {/* Full verbatim text */}
                        <p className="text-xs sm:text-sm text-cobalt-100/80 leading-relaxed font-sans">
                          {pt.text}
                        </p>
                      </div>

                      <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-cobalt-300">
                        <span>STANDART İLKE</span>
                        <Check className="h-3.5 w-3.5 text-crimson-400" />
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 4. PILLAR 03: 2x2 Blueprint Grid (Temel Taşlar)                      */}
      {/* ==================================================================== */}
      <section
        id="model-03"
        className="relative py-20 lg:py-28 border-b border-cobalt-900/10 bg-paper-warm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SwissSectionHeader
            index={model03.code}
            eyebrow="ÖLÇÜLEBİLİR DÖRT YAPI TAŞI"
            title={model03.title}
            subtitle={model03.intro}
            rightSlot={
              <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 border border-cobalt-700/20 bg-white text-cobalt-800 font-mono text-xs tracking-wider">
                <span>TAVİZSİZ 4 SÜTUN</span>
              </div>
            }
          />

          {/* 2x2 Architectural Blueprint Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-cobalt-900/15 border border-cobalt-900/15">
            {model03.points.map((pt, idx) => {
              const coordinateLabels = [
                "SÜTUN 01 / 04 · VİZYON & EYLEM PLANI",
                "SÜTUN 02 / 04 · BİREBİR ÖĞRENME STİLİ",
                "SÜTUN 03 / 04 · İÇSEL DİNAMİKLER",
                "SÜTUN 04 / 04 · ÖLÇME & DEĞERLENDİRME",
              ];

              const iconPills = [
                <Target key="1" className="h-5 w-5 text-cobalt-700" />,
                <Brain key="2" className="h-5 w-5 text-cobalt-700" />,
                <Sparkles key="3" className="h-5 w-5 text-cobalt-700" />,
                <Activity key="4" className="h-5 w-5 text-cobalt-700" />,
              ];

              return (
                <div
                  key={idx}
                  className="relative p-8 sm:p-10 bg-white hover:bg-paper transition-colors duration-300 flex flex-col justify-between group"
                >
                  {/* Blueprint Register Crosshairs */}
                  <span
                    aria-hidden="true"
                    className="absolute top-2 left-2 font-mono text-xs text-cobalt-900/25 select-none"
                  >
                    +
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute top-2 right-2 font-mono text-xs text-cobalt-900/25 select-none"
                  >
                    +
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute bottom-2 left-2 font-mono text-xs text-cobalt-900/25 select-none"
                  >
                    +
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute bottom-2 right-2 font-mono text-xs text-cobalt-900/25 select-none"
                  >
                    +
                  </span>

                  <div>
                    {/* Architectural Coordinate Line */}
                    <div className="flex items-center justify-between gap-3 mb-6 pb-3 border-b border-cobalt-900/10">
                      <span className="font-mono text-[11px] font-semibold tracking-[0.16em] text-cobalt-700 uppercase">
                        {coordinateLabels[idx]}
                      </span>
                      <div className="p-2 bg-cobalt-50 border border-cobalt-700/15">
                        {iconPills[idx]}
                      </div>
                    </div>

                    <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight text-ink mb-4 group-hover:text-cobalt-800 transition-colors">
                      {pt.label}
                    </h4>

                    {/* Full verbatim text */}
                    <p className="text-sm sm:text-base text-ink-muted leading-relaxed font-sans">
                      {pt.text}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-cobalt-900/10 flex items-center justify-between font-mono text-xs text-ink-subtle">
                    <span className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 bg-crimson-600 rounded-full" />
                      AKTİF UYGULAMA
                    </span>
                    <span className="text-crimson-600 font-semibold">
                      AYBAR · {idx + 1}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 5. PILLAR 04: Aile, Veli ve Okul Köprüsü (Triad Spread)              */}
      {/* ==================================================================== */}
      <section
        id="model-04"
        className="relative py-20 lg:py-28 border-b border-cobalt-900/10 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SwissSectionHeader
            index={model04.code}
            eyebrow="ÜÇGEN DENGESİ & ŞEFFAF İLETİŞİM"
            title={model04.title}
            subtitle={model04.intro}
            rightSlot={
              <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 border border-cobalt-700/20 bg-cobalt-50 text-cobalt-800 font-mono text-xs tracking-wider">
                <span>ŞEFFAF &amp; PEDAGOJİK</span>
              </div>
            }
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left 5 Cols: Visual 3-Node Triad Architectural Diagram */}
            <div className="lg:col-span-5">
              <Reveal delay={0.15}>
                <div className="p-6 sm:p-8 bg-paper border border-cobalt-900/15 relative shadow-sm">
                  <div className="text-center mb-6">
                    <span className="font-mono text-[10px] tracking-[0.2em] text-cobalt-700 uppercase font-semibold block mb-1">
                      AKADEMİK İLETİŞİM MİMARİSİ
                    </span>
                    <h4 className="text-base font-bold text-ink tracking-tight">
                      Öğrenci — Öğretmen — Veli &amp; Okul Üçgeni
                    </h4>
                  </div>

                  {/* Triad Geometry */}
                  <div className="relative py-6">
                    {/* Top Node: Öğretmen & Mentor */}
                    <div className="flex justify-center mb-10">
                      <div className="p-3.5 bg-cobalt-900 text-white border border-cobalt-700 shadow-md text-center w-48">
                        <span className="font-mono text-[9px] tracking-widest text-cobalt-200 block uppercase">
                          KÖPRÜ VE REHBER
                        </span>
                        <span className="text-xs font-bold block mt-0.5">
                          Öğretmen &amp; Koç
                        </span>
                      </div>
                    </div>

                    {/* Connecting Central Crosshairs */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                      <div className="h-9 w-9 rounded-full bg-crimson-600 text-white font-mono text-[10px] font-bold flex items-center justify-center shadow-crimson">
                        +
                      </div>
                    </div>

                    {/* Bottom Nodes */}
                    <div className="flex items-center justify-between gap-4 pt-4">
                      {/* Left Node: Öğrenci */}
                      <div className="p-3.5 bg-white border border-cobalt-900/20 shadow-sm text-center w-44">
                        <span className="font-mono text-[9px] tracking-widest text-crimson-600 block uppercase font-semibold">
                          MERKEZ ODAK
                        </span>
                        <span className="text-xs font-bold text-ink block mt-0.5">
                          Öğrenci Potansiyeli
                        </span>
                      </div>

                      {/* Right Node: Aile & Okul */}
                      <div className="p-3.5 bg-white border border-cobalt-900/20 shadow-sm text-center w-44">
                        <span className="font-mono text-[9px] tracking-widest text-cobalt-700 block uppercase font-semibold">
                          GÜVENLİ ZEMİN
                        </span>
                        <span className="text-xs font-bold text-ink block mt-0.5">
                          Aile &amp; Okul Birliği
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="mt-6 text-xs text-ink-muted text-center leading-relaxed">
                    Öğrenciyi yalnızlaştırmayan, aileyi dışarıda bırakmayan,
                    okul müfredatıyla tam uyumlu 360 derece kurumsal takip.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Right 7 Cols: 2 Points Verbatim + Delivery Breakdown */}
            <div className="lg:col-span-7 space-y-6">
              {model04.points.map((pt, idx) => {
                const tags = [
                  "[WHATSAPP DERS SONU RAPORU]",
                  "[OBJEKTİF PEDAGOJİK DESTEK]",
                ];

                return (
                  <Reveal key={idx} delay={idx * 0.15}>
                    <div className="p-6 sm:p-8 bg-paper-warm border border-cobalt-900/10 hover:border-cobalt-700/30 transition-all duration-300">
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <span className="font-mono text-xs font-bold text-cobalt-800">
                          SÜREÇ {idx + 1} / 02
                        </span>
                        <span className="font-mono text-[10px] tracking-[0.14em] text-crimson-700 bg-crimson-50 px-2 py-0.5 border border-crimson-600/20 font-semibold">
                          {tags[idx]}
                        </span>
                      </div>

                      <h4 className="text-lg sm:text-xl font-bold tracking-tight text-ink mb-3">
                        {pt.label}
                      </h4>

                      {/* Full verbatim text */}
                      <p className="text-sm sm:text-base text-ink-muted leading-relaxed font-sans mb-4">
                        {pt.text}
                      </p>

                      <div className="pt-3 border-t border-cobalt-900/10 flex items-center gap-2 text-xs font-mono text-cobalt-800">
                        <Check className="h-3.5 w-3.5 text-crimson-600" />
                        <span>Sürpriz Yok · Düzenli Takip · Şeffaf Raporlama</span>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 6. BOLD STUDIO CALLOUT: Maarif Modeli Theme                          */}
      {/* ==================================================================== */}
      <section className="relative py-20 lg:py-28 bg-cobalt-900 text-white halftone-cobalt border-b border-white/15 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8">
            {/* Tilted / Crisp Highlight Badge */}
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-crimson-600 text-white font-mono text-xs font-semibold tracking-[0.16em] shadow-crimson -rotate-1 transform">
                <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
                YENİ SİSTEMDE YALNIZ DEĞİLSİN
              </span>
            </div>

            <div className="space-y-4 max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tightest leading-[1.08] text-white">
                %100 Yeni Nesil Maarif Modeline Uyumlu Birebir Süreç
              </h2>

              <p className="text-base sm:text-xl text-cobalt-100/90 leading-relaxed font-sans max-w-3xl mx-auto">
                Milli Eğitim Bakanlığı&apos;nın yeni müfredat anlayışına, beceri
                temelli soru kurgularına ve süreç odaklı ölçme sistemine 33 yıllık
                akademik disiplinimizle hazırız. Ezberci yöntemleri geride bırakın,
                hedefinize emin adımlarla yürüyün.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <MagneticLink
                href={getWhatsAppUrl(
                  "Merhaba, Aybar Akademi Maarif Modeline uyumlu birebir özel dersler ve ücretsiz 30 dakikalık keşif seansı için görüşmek istiyorum."
                )}
                external
                variant="crimson"
              >
                ÜCRETSİZ 30 DK KEŞİF SEANSI ALIN
              </MagneticLink>

              <MagneticLink href="/neden-farkliyiz" variant="outline-light">
                NEDEN FARKLIYIZ? STANDARTLARIMIZ
              </MagneticLink>
            </div>

            {/* Architectural Coordinates Footer */}
            <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 font-mono text-[11px] text-cobalt-200">
              <span>İSTANBUL (39 İLÇE YÜZ YÜZE)</span>
              <span className="text-crimson-400">·</span>
              <span>TÜRKİYE (81 İL CANLI ONLİNE)</span>
              <span className="text-crimson-400">·</span>
              <span>KURUCU: {siteConfig.founder.name}</span>
            </div>
          </div>
        </div>

        {/* Ambient Architectural Watermark */}
        <div className="mt-8">
          <ParallaxWatermark
            text="AYBAR EĞİTİM MODELİ"
            className="text-white/[0.04]"
          />
        </div>
      </section>
    </div>
  );
}
