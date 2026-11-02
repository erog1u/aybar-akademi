"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Check,
  ArrowUpRight,
  Shield,
  Compass,
  Sparkles,
  ChevronRight,
  Layers,
  MessageSquare,
  Clock,
  Target,
  Brain,
  FileCheck2,
  PhoneCall,
  Activity,
  Send,
  Zap,
} from "lucide-react";
import {
  MaskedLines,
  Reveal,
  SwissSectionHeader,
  MagneticLink,
  ParallaxWatermark,
  SuccessDiagnosticWidget,
  KineticRibbon,
  LUXURY_EASE,
} from "@/components/motion/Primitives";
import { whyDifferentContent } from "@/data/content";
import { siteConfig, getWhatsAppUrl } from "@/config/site";

export default function NedenFarkliyizPage() {
  const [activeStep, setActiveStep] = useState<string>("01");

  // Scroll spy to sync vertical ruler with current visible section
  useEffect(() => {
    const handleScroll = () => {
      const stepIds = ["ilke-01", "ilke-02", "ilke-03", "ilke-04", "ilke-05"];
      const scrollPosition = window.scrollY + 240;

      for (let i = stepIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(stepIds[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            const stepNum = stepIds[i].replace("ilke-", "");
            setActiveStep(stepNum);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToStep = (step: string) => {
    setActiveStep(step);
    const el = document.getElementById(`ilke-${step}`);
    if (el) {
      const offset = 110;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const deliverableTags: Record<string, string[]> = {
    "01": [
      "[ÜCRETSİZ 30 DK KEŞİF]",
      "[ÖĞRENME STİLİ ANALİZİ]",
      "[İŞ BİRLİĞİ TAAHHÜDÜ]",
    ],
    "02": [
      "[KİŞİSEL DASHBOARD]",
      "[TERS YÜZ SINIF + ACTIVE RECALL]",
      "[DİJİTAL FLASHCARD SİSTEMİ]",
    ],
    "03": ["[DİJİTAL HATA DEFTERİ · SIFIRLAMA TEKNİĞİ]"],
    "04": ["[WHATSAPP DERS SONU RAPORU]", "[AYLIK PERFORMANS DEĞERLENDİRMESİ]"],
    "05": ["[BİREBİR MENTORLUK & MOTİVASYON]", "[KESİNTİSİZ SORU HATTI]"],
  };

  return (
    <div className="relative min-h-screen bg-paper text-ink overflow-hidden selection:bg-crimson-600 selection:text-white">
      {/* ==================================================================== */}
      {/* 1. HERO SECTION: Architectural Studio Hero with Diagnostic Terminal  */}
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
              {whyDifferentContent.eyebrow}
            </span>
            <span className="text-cobalt-900/30">/</span>
            <span className="inline-flex items-center px-2 py-0.5 bg-crimson-600/10 text-crimson-700 border border-crimson-600/20 font-mono text-[10px] tracking-wider">
              TAM ÖĞRENME STANDARDI
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left 7 Cols: Typographic Thesis */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2.5 px-3 py-1.5 border border-cobalt-700/20 bg-cobalt-50 text-cobalt-800 font-mono text-xs tracking-[0.16em]">
                  <span className="h-2 w-2 rounded-full bg-crimson-600 animate-pulse" />
                  <span>ÖZEL DERSTE MÜHENDİSLİK YAKLAŞIMI</span>
                </div>

                <MaskedLines
                  as="h1"
                  lines={[
                    "Özel Derste Kişiye Özel Mühendislik",
                    "ve “Tam Öğrenme” Standardı",
                  ]}
                  className="text-3xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tightest leading-[1.06] text-ink"
                />
              </div>

              {/* Full verbatim lead */}
              <Reveal delay={0.15}>
                <p className="text-lg sm:text-xl text-ink-muted leading-relaxed font-sans max-w-2xl border-l-2 border-crimson-600 pl-5">
                  {whyDifferentContent.lead}
                </p>
              </Reveal>

              {/* Architectural Methodology Badges */}
              <Reveal delay={0.25}>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 font-mono text-xs">
                  <div className="p-3 bg-white border border-cobalt-900/10 shadow-sm text-center">
                    <span className="block text-crimson-600 font-bold mb-0.5">
                      30 DK
                    </span>
                    <span className="text-[10px] text-ink-muted uppercase tracking-wider block">
                      ÜCRETSİZ KEŞİF
                    </span>
                  </div>

                  <div className="p-3 bg-white border border-cobalt-900/10 shadow-sm text-center">
                    <span className="block text-cobalt-700 font-bold mb-0.5">
                      AKTİF
                    </span>
                    <span className="text-[10px] text-ink-muted uppercase tracking-wider block">
                      ACTIVE RECALL
                    </span>
                  </div>

                  <div className="p-3 bg-white border border-cobalt-900/10 shadow-sm text-center">
                    <span className="block text-crimson-600 font-bold mb-0.5">
                      SIFIR
                    </span>
                    <span className="text-[10px] text-ink-muted uppercase tracking-wider block">
                      HATA DEFTERİ
                    </span>
                  </div>

                  <div className="p-3 bg-white border border-cobalt-900/10 shadow-sm text-center">
                    <span className="block text-cobalt-700 font-bold mb-0.5">
                      %100
                    </span>
                    <span className="text-[10px] text-ink-muted uppercase tracking-wider block">
                      VELİ RAPORU
                    </span>
                  </div>
                </div>
              </Reveal>

              {/* CTAs */}
              <Reveal delay={0.35}>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <MagneticLink
                    href={getWhatsAppUrl(
                      "Merhaba, Aybar Akademi 'Tam Öğrenme' sistemi ve 30 dakikalık ücretsiz tanışma seansı hakkında bilgi almak istiyorum."
                    )}
                    external
                    variant="crimson"
                  >
                    ÜCRETSİZ KEŞİF SEANSI PLANLAYIN
                  </MagneticLink>

                  <MagneticLink href="#prensipler" variant="outline-dark">
                    5 STANDART İLKEYİ GÖRÜN
                  </MagneticLink>
                </div>
              </Reveal>
            </div>

            {/* Right 5 Cols: Embedded SuccessDiagnosticWidget Terminal */}
            <div className="lg:col-span-5">
              <Reveal delay={0.2} y={30}>
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Swiss Hairline Frame */}
                  <div className="relative p-2 bg-paper-warm border border-cobalt-900/20 shadow-studio">
                    {/* Register crosshairs */}
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

                    {/* Terminal Widget */}
                    <SuccessDiagnosticWidget />

                    {/* Plaque Caption */}
                    <div className="p-3 bg-white border-t border-cobalt-900/10 flex items-center justify-between text-xs font-mono text-ink-muted">
                      <span className="font-semibold text-cobalt-900">
                        SİSTEM PROTOKOLÜ · 5 AŞAMA
                      </span>
                      <span className="text-crimson-600 font-bold">
                        DİJİTAL SÜREÇ
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
          "TAM ÖĞRENME STANDARDI",
          "FLIPPED CLASSROOM MODELİ",
          "ACTIVE RECALL KARTLARI",
          "DİJİTAL HATA DEFTERİ",
          "WHATSAPP DERS RAPORU",
          "KESİNTİSİZ SORU HATTI",
        ]}
      />

      {/* ==================================================================== */}
      {/* 2. STICKY SPLIT-SCREEN SCROLLYTELLING: 5 Standart İlke               */}
      {/* ==================================================================== */}
      <section id="prensipler" className="relative py-20 lg:py-28 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Section Header */}
          <SwissSectionHeader
            index="01 — 05"
            eyebrow="TAVİZSİZ AKADEMİK STANDARTLAR"
            title={whyDifferentContent.principlesHeading}
            subtitle="Aybar Akademi'de her öğrenci, kayıttan sınav gününe kadar hiçbir aşaması atlanmayan bu 5 bilimsel aşamadan geçer."
            rightSlot={
              <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 border border-cobalt-700/20 bg-cobalt-50 text-cobalt-800 font-mono text-xs tracking-wider">
                <span>%100 SÜREÇ GÜVENCESİ</span>
              </div>
            }
          />

          {/* Scrollytelling Split Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left 5 Cols: Sticky Step Ruler Navigation */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 self-start space-y-6">
              <div className="p-6 bg-paper-warm border border-cobalt-900/10">
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-cobalt-900/10">
                  <span className="font-mono text-xs font-bold text-cobalt-800 tracking-wider">
                    VERTICAL STEP RULER
                  </span>
                  <span className="font-mono text-[10px] text-crimson-600 font-semibold">
                    AKTİF: ADIM {activeStep}
                  </span>
                </div>

                <p className="text-xs text-ink-muted leading-relaxed mb-6 font-sans">
                  Aşağı kaydırdıkça süreç adımları otomatik olarak senkronize olur.
                  Herhangi bir aşamaya doğrudan atlamak için tıklayın:
                </p>

                {/* Vertical Step Buttons */}
                <div className="space-y-2.5">
                  {whyDifferentContent.principles.map((pr) => {
                    const isActive = activeStep === pr.step;

                    return (
                      <button
                        key={pr.step}
                        type="button"
                        onClick={() => scrollToStep(pr.step)}
                        className={`w-full text-left p-3.5 border transition-all duration-300 relative group flex items-center justify-between gap-3 ${
                          isActive
                            ? "bg-crimson-600 text-white border-crimson-600 shadow-crimson"
                            : "bg-white text-ink border-cobalt-900/10 hover:border-cobalt-700/30 hover:bg-paper"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`font-mono text-xs font-bold px-2 py-0.5 border ${
                              isActive
                                ? "bg-white/20 border-white/30 text-white"
                                : "bg-paper-warm border-cobalt-900/15 text-cobalt-800"
                            }`}
                          >
                            {pr.step}
                          </span>

                          <div>
                            <span
                              className={`block font-mono text-[9px] tracking-[0.16em] uppercase ${
                                isActive ? "text-white/80" : "text-ink-subtle"
                              }`}
                            >
                              {pr.phase}
                            </span>
                            <span
                              className={`block text-xs sm:text-sm font-bold tracking-tight line-clamp-1 ${
                                isActive ? "text-white" : "text-ink"
                              }`}
                            >
                              {pr.title.split("(")[0].trim()}
                            </span>
                          </div>
                        </div>

                        <ChevronRight
                          className={`h-4 w-4 shrink-0 transition-transform ${
                            isActive
                              ? "text-white translate-x-0.5"
                              : "text-ink-subtle group-hover:translate-x-0.5"
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Free Discovery Protocol Callout Box */}
              <div className="p-5 bg-white border border-cobalt-900/15 shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-crimson-600">
                  <Clock className="h-4 w-4" />
                  <span className="font-mono text-[10px] tracking-[0.16em] font-bold uppercase">
                    İLK ADIM: 30 DK ÜCRETSİZ KEŞİF
                  </span>
                </div>
                <p className="text-xs text-ink-muted leading-relaxed">
                  İlk gün derse doğrudan başlanmaz. Öğrencinin öğrenme stili,
                  önyargıları ve eksikleri analiz edilerek taahhüt oluşturulur.
                </p>
                <MagneticLink
                  href={getWhatsAppUrl(
                    "Merhaba, 30 dakikalık ücretsiz tanışma seansı için randevu almak istiyorum."
                  )}
                  external
                  variant="cobalt"
                  className="w-full justify-center !py-2.5 !text-xs"
                >
                  RANDEVU TALEP EDİN
                </MagneticLink>
              </div>
            </div>

            {/* Right 7 Cols: 5 Principles Verbatim Stream */}
            <div className="lg:col-span-7 space-y-12">
              {whyDifferentContent.principles.map((pr, pIdx) => {
                const tags = deliverableTags[pr.step] || [];

                return (
                  <div
                    key={pr.step}
                    id={`ilke-${pr.step}`}
                    className="scroll-mt-28 p-6 sm:p-8 bg-paper border border-cobalt-900/15 relative"
                  >
                    {/* Architectural Corner Crosshairs */}
                    <span
                      aria-hidden="true"
                      className="absolute -top-2.5 -left-2.5 font-mono text-xs text-crimson-600 select-none"
                    >
                      +
                    </span>
                    <span
                      aria-hidden="true"
                      className="absolute -top-2.5 -right-2.5 font-mono text-xs text-crimson-600 select-none"
                    >
                      +
                    </span>

                    {/* Folio Step Header */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 border-b border-cobalt-900/10">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex items-center justify-center h-8 px-2.5 bg-cobalt-900 text-white font-mono text-xs font-bold tracking-wider">
                          ADIM {pr.step} / 05
                        </span>
                        <span className="font-mono text-[11px] tracking-[0.16em] text-crimson-700 font-semibold uppercase">
                          {pr.phase}
                        </span>
                      </div>
                      <span className="font-mono text-[10px] text-ink-subtle">
                        AYBAR PROTOKOLÜ
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-ink mb-6 leading-snug">
                      {pr.title}
                    </h3>

                    {/* Sub-items verbatim */}
                    <div className="space-y-6">
                      {pr.items.map((item, iIdx) => (
                        <div
                          key={iIdx}
                          className="p-5 bg-white border border-cobalt-900/10 hover:border-cobalt-700/30 transition-colors"
                        >
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                            <h4 className="text-base font-bold text-ink tracking-tight flex items-center gap-2">
                              <span className="h-1.5 w-1.5 bg-crimson-600 rounded-full" />
                              <span>{item.title}</span>
                            </h4>
                            {tags[iIdx] && (
                              <span className="font-mono text-[10px] tracking-[0.14em] text-cobalt-800 bg-cobalt-50 px-2 py-0.5 border border-cobalt-700/20 font-semibold">
                                {tags[iIdx]}
                              </span>
                            )}
                          </div>

                          {/* Full verbatim detail */}
                          <p className="text-sm sm:text-base text-ink-muted leading-relaxed font-sans">
                            {item.detail}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Special Blueprint Visuals for Specific Principles */}
                    {pr.step === "03" && (
                      <div className="mt-6 p-4 bg-paper-warm border border-cobalt-900/10 font-mono text-xs space-y-2">
                        <span className="font-bold text-cobalt-800 block text-[10px] tracking-wider uppercase">
                          SIFIRLAMA TEKNİĞİ AKIŞI:
                        </span>
                        <div className="flex flex-wrap items-center gap-2 text-[11px] text-ink">
                          <span className="px-2 py-1 bg-white border border-cobalt-900/10">
                            1. Yanlış Soru
                          </span>
                          <span className="text-crimson-600 font-bold">→</span>
                          <span className="px-2 py-1 bg-white border border-cobalt-900/10">
                            2. Dijital Defter Kaydı
                          </span>
                          <span className="text-crimson-600 font-bold">→</span>
                          <span className="px-2 py-1 bg-white border border-cobalt-900/10">
                            3. Sadece Hatalı Tip Tekrarı
                          </span>
                          <span className="text-crimson-600 font-bold">→</span>
                          <span className="px-2 py-1 bg-crimson-600 text-white font-bold">
                            4. Net Artışı
                          </span>
                        </div>
                      </div>
                    )}

                    {pr.step === "04" && (
                      <div className="mt-6 p-4 bg-paper-warm border border-cobalt-900/10 font-mono text-xs space-y-2">
                        <span className="font-bold text-cobalt-800 block text-[10px] tracking-wider uppercase">
                          VELİ ŞABLON RAPORU ÖRNEĞİ:
                        </span>
                        <div className="p-3 bg-white border border-cobalt-900/10 text-xs font-sans text-ink space-y-1">
                          <p>
                            <strong>İşlenen Konu:</strong> Matematik — Fonksiyonlarda
                            Öteleme &amp; Dönüşümler
                          </p>
                          <p>
                            <strong>Öğrenci Performansı:</strong> 3 yeni nesil kalıp
                            özümsendi, active recall kartları dolduruldu.
                          </p>
                          <p>
                            <strong>Sonraki Adım:</strong> Ters yüz sınıf videosu
                            izlenecek, hata defterindeki 6 soru çözülecek.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 3. MONUMENTAL CLOSING SPREAD: pedagogicalOutcome                    */}
      {/* ==================================================================== */}
      <section className="relative py-20 lg:py-28 bg-cobalt-900 text-white halftone-cobalt border-b border-white/15 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-10">
            {/* Header Folio */}
            <div className="border-b border-white/15 pb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs text-crimson-400 font-bold px-2.5 py-1 bg-white/5 border border-white/15">
                  [PEDAGOJİK SONUÇ]
                </span>
                <span className="h-[1px] w-6 bg-crimson-500" />
                <span className="font-mono text-xs tracking-[0.18em] text-cobalt-200 uppercase">
                  TAM ÖĞRENME MODELİ
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tightest leading-[1.08] text-white max-w-4xl">
                {whyDifferentContent.pedagogicalOutcome.title}
              </h2>
            </div>

            {/* Verbatim Body Paragraph */}
            <Reveal delay={0.15}>
              <div className="p-8 sm:p-10 bg-white/[0.04] border border-white/15 backdrop-blur-sm relative">
                <span
                  aria-hidden="true"
                  className="absolute -top-2.5 -left-2.5 font-mono text-xs text-crimson-400 select-none"
                >
                  +
                </span>
                <span
                  aria-hidden="true"
                  className="absolute -bottom-2.5 -right-2.5 font-mono text-xs text-crimson-400 select-none"
                >
                  +
                </span>

                <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-cobalt-100/95 font-serif italic">
                  &ldquo;{whyDifferentContent.pedagogicalOutcome.body}&rdquo;
                </p>

                <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-cobalt-200">
                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-crimson-500 animate-pulse" />
                    <span>SIFIR HATA VE TAM ÖĞRENME HEDEFİ</span>
                  </span>
                  <span>{siteConfig.founder.name}</span>
                </div>
              </div>
            </Reveal>

            {/* 4 Outcome Verification Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
              <div className="p-4 bg-white/5 border border-white/10">
                <span className="font-mono text-xs font-bold text-crimson-400 block mb-1">
                  01 · ÖLÇÜLEBİLİRLİK
                </span>
                <p className="text-xs text-cobalt-100/80 leading-relaxed">
                  Ezbere değil, kanıtlanmış net artışlarına ve yazılı sonuçlarına
                  dayalı takip.
                </p>
              </div>

              <div className="p-4 bg-white/5 border border-white/10">
                <span className="font-mono text-xs font-bold text-crimson-400 block mb-1">
                  02 · SIFIR HATA HAVUZU
                </span>
                <p className="text-xs text-cobalt-100/80 leading-relaxed">
                  Tüm yanlış soru tipleri dijital defterde eritilerek telafi
                  edilir.
                </p>
              </div>

              <div className="p-4 bg-white/5 border border-white/10">
                <span className="font-mono text-xs font-bold text-crimson-400 block mb-1">
                  03 · KALICI HAFIZA
                </span>
                <p className="text-xs text-cobalt-100/80 leading-relaxed">
                  Flipped classroom ve active recall kartlarıyla kalıcı öğrenme.
                </p>
              </div>

              <div className="p-4 bg-white/5 border border-white/10">
                <span className="font-mono text-xs font-bold text-crimson-400 block mb-1">
                  04 · ŞEFFAF GÜVEN
                </span>
                <p className="text-xs text-cobalt-100/80 leading-relaxed">
                  Veli, öğrenci ve öğretmen arasında her ders sonu net WhatsApp
                  iletişimi.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <Reveal delay={0.25}>
              <div className="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-white/15">
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-white tracking-tight">
                    Farkı Kendi Gözlerinizle Görün
                  </h4>
                  <p className="text-xs text-cobalt-200">
                    İlk 30 dakikalık keşif seansımız tamamen ücretsizdir.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <MagneticLink
                    href={getWhatsAppUrl(
                      "Merhaba, Aybar Akademi 'Tam Öğrenme' sistemi ve 30 dakikalık ücretsiz tanışma seansı için randevu almak istiyorum."
                    )}
                    external
                    variant="crimson"
                  >
                    ÜCRETSİZ 30 DK KEŞİF BAŞLATIN
                  </MagneticLink>

                  <MagneticLink href="/egitim-modelimiz" variant="outline-light">
                    EĞİTİM MODELİMİZİ İNCELEYİN
                  </MagneticLink>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Ambient Architectural Watermark */}
        <div className="mt-8">
          <ParallaxWatermark text="TAM ÖĞRENME" className="text-white/[0.04]" />
        </div>
      </section>
    </div>
  );
}
