"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowUpRight,
  Check,
  MapPin,
  Globe2,
  BookOpen,
  ShieldCheck,
  Compass,
} from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import {
  founderMessage,
  aboutContent,
  programCategories,
  whyDifferentContent,
  educationModelContent,
} from "@/data/content";
import {
  MaskedLines,
  Reveal,
  SwissSectionHeader,
  MagneticLink,
  KineticRibbon,
  ParallaxWatermark,
  SuccessDiagnosticWidget,
  AnimatedCounter,
  SpotlightCard,
  LUXURY_EASE,
} from "@/components/motion/Primitives";

/* -------------------------------------------------------------------------- */
/* Sticky Stacking Principle Card (GPU-Accelerated Scroll Depth)              */
/* -------------------------------------------------------------------------- */
function StickyPrincipleCard({
  principle,
  index,
  total,
}: {
  principle: (typeof whyDifferentContent.principles)[number];
  index: number;
  total: number;
}) {
  const cardWrapRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardWrapRef,
    offset: ["start start", "end start"],
  });

  const targetScale = 1 - (total - 1 - index) * 0.025;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  const isDark = index % 2 === 1;

  return (
    <div
      ref={cardWrapRef}
      className="lg:sticky"
      style={{ top: `calc(6.5rem + ${index * 18}px)` }}
    >
      <motion.article
        style={{ scale, transformOrigin: "top center" }}
        className={`border shadow-studio transition-colors mb-8 ${
          isDark
            ? "bg-cobalt-900 border-white/15 text-white"
            : "bg-white border-cobalt-900/15 text-ink"
        }`}
      >
        <div
          className={`px-6 sm:px-10 py-4 border-b flex flex-wrap items-center justify-between gap-3 ${
            isDark
              ? "border-white/12 bg-cobalt-950/60"
              : "border-cobalt-900/10 bg-paper-warm"
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center px-2.5 py-0.5 bg-crimson-600 text-white font-mono text-xs font-bold">
              İLKE {principle.step} / 0{total}
            </span>
            <span
              className={`font-mono text-[11px] tracking-[0.16em] ${
                isDark ? "text-cobalt-200" : "text-ink-muted"
              }`}
            >
              {principle.phase}
            </span>
          </div>
          <span
            className={`font-mono text-[11px] tracking-[0.14em] ${
              isDark ? "text-cobalt-300" : "text-cobalt-700"
            }`}
          >
            TAM ÖĞRENME PROTOKOLÜ
          </span>
        </div>

        <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5">
            <div
              className={`font-serif italic text-5xl sm:text-6xl font-semibold leading-none mb-4 ${
                isDark ? "text-cobalt-300/40" : "text-cobalt-700/20"
              }`}
            >
              {principle.step}
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tightest leading-tight">
              {principle.title}
            </h3>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 gap-4">
            {principle.items.map((item, idx) => (
              <div
                key={idx}
                className={`p-5 border ${
                  isDark
                    ? "border-white/12 bg-white/[0.04]"
                    : "border-cobalt-900/10 bg-paper"
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 bg-crimson-600 shrink-0" />
                  <div>
                    <h4 className="font-bold text-base tracking-tight">
                      {item.title}
                    </h4>
                    <p
                      className={`mt-1.5 text-sm leading-relaxed ${
                        isDark ? "text-cobalt-100/85" : "text-ink-muted"
                      }`}
                    >
                      {item.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export default function HomePage() {
  const [selectedCatId, setSelectedCatId] = useState(programCategories[0].id);
  const activeCategory =
    programCategories.find((c) => c.id === selectedCatId) ||
    programCategories[0];

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImageY = useTransform(heroScroll, [0, 1], ["0%", "10%"]);

  return (
    <div className="overflow-x-clip">
      {/* =================================================================== */}
      {/* SPREAD 01 — ROYAL COBALT STUDIO HERO (Ref Images 1, 2, 3, 5)        */}
      {/* =================================================================== */}
      <section
        ref={heroRef}
        className="relative bg-gradient-to-br from-[#0055E0] via-cobalt-700 to-[#062466] halftone-cobalt text-white border-b border-white/15 overflow-hidden"
      >
        {/* Electric Studio Radial Spotlights */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-28 right-8 h-[640px] w-[640px] rounded-full bg-[#4796FF]/35 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-12 -left-24 h-[420px] w-[420px] rounded-full bg-crimson-600/20 blur-3xl"
        />
        {/* Architectural Diagonal Crimson Accent Line (Ref Image 5) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 w-72 sm:w-96 h-2.5 bg-crimson-600"
        />

        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 pt-12 pb-16 lg:pt-20 lg:pb-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Left 7 Columns: Editorial Thesis & Maarif Stamp */}
            <div className="lg:col-span-7">
              {/* Verified Maarif Modeli Studio Capsule (Ref Image 5) */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: LUXURY_EASE }}
                className="inline-flex items-center gap-3 pl-2 pr-4 py-1.5 rounded-full border border-white/35 bg-cobalt-900/55 backdrop-blur-sm mb-8"
              >
                <span className="h-6 w-6 rounded-full bg-crimson-600 flex items-center justify-center shrink-0">
                  <Check className="h-3.5 w-3.5 text-white stroke-[3]" />
                </span>
                <span className="font-mono text-[11px] sm:text-xs font-semibold tracking-[0.12em] text-white">
                  TÜRKİYE YÜZYILI MAARİF MODELİ · %100 UYUMLU EĞİTİM
                </span>
              </motion.div>

              {/* Monumental Display Typography (Ref Image 1 & 2) */}
              <MaskedLines
                as="h1"
                className="text-4xl sm:text-6xl xl:text-[4.35rem] font-extrabold tracking-tightest leading-[1.03]"
                lines={[
                  "Her Öğrenciye",
                  "Aynı Eğitim Değil,",
                  <span
                    key="highlight"
                    className="inline-flex flex-wrap items-baseline gap-x-4 pt-1"
                  >
                    <span className="bg-crimson-600 text-white px-4 py-0.5 inline-block -rotate-1 shadow-crimson">
                      Doğru Eğitim.
                    </span>
                  </span>,
                ]}
              />

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: LUXURY_EASE, delay: 0.32 }}
                className="mt-7 text-base sm:text-lg lg:text-[1.15rem] text-cobalt-50/90 leading-relaxed max-w-2xl"
              >
                <strong className="font-bold text-white">33 yıllık</strong>{" "}
                köklü eğitim deneyimini, kişiye özel VIP süreç yönetimi ve uzman
                öğretmen kadrosuyla birleştiriyoruz. İstanbul’un tüm ilçelerinde{" "}
                <span className="underline decoration-crimson-500 decoration-2 underline-offset-4 text-white font-semibold">
                  ev konforunda yüz yüze
                </span>
                , tüm Türkiye’de{" "}
                <span className="underline decoration-white/60 decoration-2 underline-offset-4 text-white font-semibold">
                  canlı interaktif online
                </span>{" "}
                birebir özel ders.
              </motion.p>

              {/* CTA Row */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: LUXURY_EASE, delay: 0.42 }}
                className="mt-9 flex flex-wrap items-center gap-4"
              >
                <MagneticLink
                  href={getWhatsAppUrl()}
                  external
                  variant="crimson"
                >
                  30 Dk Ücretsiz Tanışma Seansı Planla
                </MagneticLink>

                <MagneticLink
                  href="/egitim-programlarimiz"
                  variant="outline-light"
                >
                  Eğitim Programlarımızı İncele
                </MagneticLink>
              </motion.div>

              {/* Sub-caption */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55, duration: 0.6 }}
                className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] tracking-[0.14em] text-cobalt-100"
              >
                <span>İLKOKULDAN ÜNİVERSİTEYE</span>
                <span className="text-crimson-500">·</span>
                <span>YKS · LGS · KPSS · ALES</span>
                <span className="text-crimson-500">·</span>
                <span>11 DÜNYA DİLİ & SERTİFİKA</span>
              </motion.div>
            </div>

            {/* Right 5 Columns: Studio Photography + "Başarı Yükleniyor" Console */}
            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.85, ease: LUXURY_EASE, delay: 0.18 }}
                className="relative"
              >
                {/* Studio Photo Frame */}
                <div className="relative bg-white p-2.5 sm:p-3 border border-white/30 shadow-studio">
                  {/* High-Impact Corner Sticker Badge */}
                  <div className="absolute -top-3.5 -right-2 sm:-right-3 z-20 bg-crimson-600 text-white px-3.5 py-1.5 font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.14em] rotate-2 shadow-crimson border border-white/25">
                    İLK DERS ÖNCESİ 30 DK ÜCRETSİZ KEŞİF
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden bg-cobalt-900">
                    <motion.img
                      style={{ y: heroImageY }}
                      src="/images/hero-one-on-one.jpg"
                      alt="Aybar Akademi Birebir Özel Ders ve VIP Koçluk"
                      className="w-full h-[112%] -mt-[6%] object-cover"
                    />
                    <div className="absolute bottom-3 left-3 bg-cobalt-950/90 text-white px-3 py-1 font-mono text-[10px] tracking-[0.16em] border border-white/15">
                      [VIP · 1’E 1 ÖZEL DERS MODELİ]
                    </div>
                  </div>
                </div>

                {/* Interactive "Başarı Yükleniyor..." Console (Ref Image 3) */}
                <div className="mt-4 sm:-mt-10 sm:ml-6 relative z-20">
                  <SuccessDiagnosticWidget />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom 4-Cell Institutional Ledger Strip with Live Counters */}
        <div className="border-t border-white/15 bg-cobalt-950/85 backdrop-blur-md">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 divide-x divide-white/12">
            {[
              {
                target: 33,
                prefix: "",
                suffix: " Yıl",
                label: "KÖKLÜ AKADEMİK DENEYİM",
                sub: "Çeyrek asrı aşan kurumsal güven",
              },
              {
                target: 100,
                prefix: "%",
                suffix: "",
                label: "MAARİF MODELİNE UYUM",
                sub: "Yeni nesil müfredata hâkim kadro",
              },
              {
                target: 39,
                prefix: "",
                suffix: " İlçe",
                label: "İSTANBUL YÜZ YÜZE DERS",
                sub: "Evinizin konforunda birebir eğitim",
              },
              {
                target: 81,
                prefix: "",
                suffix: " İl",
                label: "TÜRKİYE ONLINE EĞİTİM",
                sub: "Coğrafi sınırları kaldıran teknoloji",
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="py-6 px-4 sm:px-6 lg:first:pl-0 lg:last:pr-0 flex flex-col justify-between"
              >
                <div className="font-mono text-[10px] tracking-[0.16em] text-cobalt-200 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-crimson-500 inline-block shrink-0" />
                  <span className="truncate">{stat.label}</span>
                </div>
                <div className="mt-2 font-serif font-bold text-2xl sm:text-4xl text-white tracking-tight">
                  <AnimatedCounter
                    target={stat.target}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </div>
                <div className="mt-1 text-xs text-cobalt-200/80">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scroll-Velocity Reactive Typographic Ribbon */}
      <KineticRibbon
        variant="light"
        items={[
          "BİLGİNİN KAYNAĞI, BAŞARININ MİMARI",
          "VIP BİREBİR ÖZEL DERS",
          "30 DAKİKALIK ÜCRETSİZ TANIŞMA SEANSI",
          "DİJİTAL HATA DEFTERİ",
          "TERS YÜZ SINIF & ACTIVE RECALL",
          "BAHADIR AYBAR LİDERLİĞİNDE AKADEMİK MENTORLUK",
        ]}
      />

      {/* =================================================================== */}
      {/* SPREAD 02 — KURUCUMUZUN MESAJI ("The Digital Broadsheet")           */}
      {/* =================================================================== */}
      <section className="py-20 lg:py-28 bg-paper relative">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
          <SwissSectionHeader
            index="BÖLÜM 01"
            eyebrow={founderMessage.eyebrow}
            title={
              <>
                Geleceği Tesadüflere Değil,{" "}
                <span className="font-serif italic font-medium text-cobalt-700">
                  Doğru Planlanmış Bir Eğitime
                </span>{" "}
                Emanet Edin.
              </>
            }
          />

          {/* Broadsheet Outer Ledger Frame */}
          <div className="border border-cobalt-900/15 bg-white shadow-card relative">
            {/* Top Archival Communiqué Bar */}
            <div className="px-6 sm:px-10 py-4 bg-paper-warm border-b border-cobalt-900/12 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] tracking-[0.15em] text-ink-muted">
              <span>KURUMSAL BİLDİRİ // AYBAR AKADEMİ KURUCU MESAJI</span>
              <span className="text-cobalt-800 font-semibold">
                BAHADIR AYBAR · KURUCU
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-cobalt-900/12">
              {/* Left 4 Columns: Crest Plate, Pull Quote & Credentials */}
              <div className="lg:col-span-4 p-6 sm:p-10 bg-paper/60 flex flex-col justify-between">
                <div className="lg:sticky lg:top-28 space-y-8">
                  <div className="bg-white border border-cobalt-900/12 p-6 flex flex-col items-center text-center">
                    <img
                      src={siteConfig.logos.full}
                      alt={`${siteConfig.name} Kurumsal Arma`}
                      className="h-44 w-auto object-contain"
                    />
                    <div className="mt-4 pt-4 border-t border-cobalt-900/10 w-full">
                      <div className="font-serif font-bold text-lg text-cobalt-900">
                        {founderMessage.author}
                      </div>
                      <div className="font-mono text-[11px] tracking-[0.15em] text-crimson-600 mt-1">
                        {founderMessage.role}
                      </div>
                    </div>
                  </div>

                  {/* Editorial Pull-Quote */}
                  <blockquote className="border-l-2 border-crimson-600 pl-5 py-1">
                    <p className="font-serif italic text-base sm:text-[1.05rem] text-cobalt-950 leading-relaxed">
                      “{founderMessage.pullQuote}”
                    </p>
                  </blockquote>

                  {/* Key Institutional Pillars */}
                  <div className="border-t border-cobalt-900/10 pt-6 space-y-3 font-mono text-[11px] tracking-[0.12em] text-ink-muted">
                    <div className="flex items-center justify-between">
                      <span>EĞİTİM STANDARDI</span>
                      <span className="text-cobalt-800 font-semibold">
                        VIP BİREBİR ÖZEL DERS
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>AKADEMİK KAPSAM</span>
                      <span className="text-cobalt-800 font-semibold">
                        İLKOKUL — ÜNİVERSİTE
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>İŞLEYİŞ MODELİ</span>
                      <span className="text-cobalt-800 font-semibold">
                        YÜZ YÜZE & CANLI ONLINE
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right 8 Columns: Full Verbatim Founder's Letter */}
              <div className="lg:col-span-8 p-6 sm:p-10 lg:p-14">
                <Reveal>
                  <p className="font-serif font-semibold text-lg sm:text-xl text-cobalt-900 leading-snug mb-8 pb-6 border-b border-cobalt-900/10">
                    {founderMessage.salutation}
                  </p>
                </Reveal>

                <div className="space-y-6 text-[15.5px] sm:text-[16.5px] text-ink/90 leading-[1.85]">
                  {founderMessage.paragraphs.map((paragraph, idx) => (
                    <Reveal key={idx} delay={idx * 0.06}>
                      <p className={idx === 0 ? "editorial-dropcap" : ""}>
                        {paragraph}
                      </p>
                    </Reveal>
                  ))}
                </div>

                {/* Formal Closing & Signature Block */}
                <Reveal delay={0.25}>
                  <div className="mt-12 pt-8 border-t border-cobalt-900/12 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                    <div>
                      <p className="font-serif italic text-base text-ink-muted mb-4">
                        {founderMessage.closing}
                      </p>
                      <div className="font-serif font-bold text-2xl text-cobalt-900 tracking-tight">
                        {founderMessage.author}
                      </div>
                      <div className="font-mono text-xs tracking-[0.16em] text-crimson-600 mt-1">
                        {founderMessage.role}
                      </div>
                    </div>

                    <Link
                      href="/hakkimizda"
                      className="group inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.12em] text-cobalt-700 hover:text-crimson-600 transition-colors"
                    >
                      <span>HAKKIMIZDA & 33 YILLIK DENEYİM</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* SPREAD 03 — MAARİF MODELİ & STUDIO FEATURE (Ref Images 2 & 4)       */}
      {/* =================================================================== */}
      <section className="relative py-20 lg:py-28 bg-paper-tint border-y border-cobalt-900/12 overflow-hidden">
        {/* Giant Parallax Ghost Watermark (Ref Image 4) */}
        <ParallaxWatermark
          text="AYBAR AKADEMİ · YENİ NESİL MAARİF MODELİ · "
          className="absolute top-8 left-0 right-0 text-cobalt-700/[0.055]"
        />

        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left 5 Columns: Stacked Pill Graphic Motif + Portrait (Ref Image 2 & 4) */}
            <div className="lg:col-span-5">
              <Reveal>
                <div className="relative bg-cobalt-700 halftone-cobalt p-6 sm:p-8 border border-cobalt-900/20 shadow-studio text-white overflow-hidden">
                  {/* Stacked Sticker Capsules — Direct Nod to Reference Image 2 */}
                  <div className="mb-6 flex flex-col items-start gap-1.5">
                    <span className="inline-block bg-crimson-600 text-white px-4 py-1 text-2xl sm:text-3xl font-extrabold tracking-tightest -rotate-1">
                      Yeni sistemde
                    </span>
                    <span className="inline-block bg-cobalt-400 text-white px-4 py-1 text-2xl sm:text-3xl font-extrabold tracking-tightest rotate-1">
                      yalnız
                    </span>
                    <span className="inline-block bg-crimson-600 text-white px-4 py-1 text-2xl sm:text-3xl font-extrabold tracking-tightest -rotate-1">
                      değilsin.
                    </span>
                  </div>

                  <p className="text-sm text-cobalt-100 leading-relaxed mb-6">
                    Dersler aynı, öğrenme şekli değişti. Aybar Akademi’de yeni
                    nesil Maarif Modeline %100 uyumlu birebir ders, sınav analizi
                    ve koçlukla adım adım zirveye hazırlanırsın.
                  </p>

                  <div className="relative aspect-[4/4.3] overflow-hidden border border-white/25 bg-cobalt-900">
                    <img
                      src="/images/maarif-student.jpg"
                      alt="Yeni Nesil Maarif Modeline Uyumlu Eğitim"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right 7 Columns: About Solutions & Dual Türkiye/İstanbul Reach */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-cobalt-900/15 font-mono text-[11px] font-semibold tracking-[0.15em] text-cobalt-800 mb-5">
                [BÖLÜM 02] · ÇAĞDAŞ AKADEMİK ÇÖZÜMLER
              </div>

              <MaskedLines
                as="h2"
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tightest text-ink leading-[1.08]"
                lines={[
                  "Başarı Bir Tesadüf Değil,",
                  "Kalıcı Bir Alışkanlıktır.",
                ]}
              />

              <p className="mt-5 text-base sm:text-lg text-ink-muted leading-relaxed">
                {aboutContent.introParagraphs[0]}
              </p>

              {/* 3 Core Solutions */}
              <div className="mt-8 border border-cobalt-900/12 bg-white divide-y divide-cobalt-900/10">
                {aboutContent.solutions.map((sol) => (
                  <div
                    key={sol.index}
                    className="p-5 sm:p-6 flex items-start gap-5 hover:bg-paper-warm/70 transition-colors"
                  >
                    <span className="font-mono text-xs font-bold text-white bg-cobalt-700 px-2.5 py-1 shrink-0 mt-0.5">
                      {sol.index}
                    </span>
                    <div>
                      <h3 className="text-lg font-extrabold tracking-tight text-ink">
                        {sol.title}
                      </h3>
                      <p className="mt-1.5 text-sm text-ink-muted leading-relaxed">
                        {sol.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Eğitimde Sınır Tanımıyoruz Dual Grid */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 bg-cobalt-900 text-white border border-cobalt-900">
                  <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.16em] text-crimson-500 mb-2">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>39 İLÇEDE BİREBİR YÜZ YÜZE</span>
                  </div>
                  <div className="font-bold text-base">
                    İstanbul’un Tüm İlçelerinde
                  </div>
                  <p className="mt-1 text-xs text-cobalt-100/85 leading-relaxed">
                    Evinizin konforunda, güvenli ve verimli ortamda yüz yüze özel
                    ders.
                  </p>
                </div>

                <div className="p-5 bg-white text-ink border border-cobalt-900/15">
                  <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.16em] text-cobalt-700 mb-2">
                    <Globe2 className="h-3.5 w-3.5 text-crimson-600" />
                    <span>81 İLDE CANLI İNTERAKTİF</span>
                  </div>
                  <div className="font-bold text-base">Tüm Türkiye’de Online</div>
                  <p className="mt-1 text-xs text-ink-muted leading-relaxed">
                    Coğrafi sınırları kaldıran yüksek verimli canlı online özel
                    ders modelleri.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* SPREAD 04 — INTERACTIVE CURRICULUM MATRIX PREVIEW                   */}
      {/* =================================================================== */}
      <section className="py-20 lg:py-28 bg-paper">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
          <SwissSectionHeader
            index="BÖLÜM 03"
            eyebrow="AYBAR AKADEMİ'DE ÖZEL DERS · EĞİTİM PROGRAMLARIMIZ"
            title={
              <>
                İlkokuldan Üniversiteye, Ulusal Sınavlardan{" "}
                <span className="font-serif italic font-medium text-cobalt-700">
                  Küresel Sertifikalara
                </span>
              </>
            }
            subtitle="Alanında profesyonel kadromuzla her yaş grubuna ve her seviyeye uygun, tamamen birebir özel ders programlarımızı inceleyin."
            rightSlot={
              <MagneticLink href="/egitim-programlarimiz" variant="cobalt">
                Tüm Program Kataloğunu Aç
              </MagneticLink>
            }
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 border border-cobalt-900/15 bg-white shadow-card">
            {/* Left 4-Col Category Selector Rail (Horizontal Scroll on Mobile, Vertical Ledger on Desktop) */}
            <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-cobalt-900/12 bg-paper-warm flex lg:block overflow-x-auto divide-x lg:divide-x-0 lg:divide-y divide-cobalt-900/10">
              {programCategories.map((cat) => {
                const isSelected = cat.id === activeCategory.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCatId(cat.id)}
                    className={`shrink-0 lg:w-full text-left px-5 sm:px-6 py-4 lg:py-5 transition-colors flex items-center justify-between gap-4 relative ${
                      isSelected
                        ? "bg-cobalt-700 text-white"
                        : "text-ink hover:bg-cobalt-50/80"
                    }`}
                  >
                    {isSelected && (
                      <span className="absolute left-0 right-0 bottom-0 h-1 lg:right-auto lg:top-0 lg:h-auto lg:w-1.5 bg-crimson-600" />
                    )}
                    <div>
                      <div
                        className={`font-mono text-[10px] sm:text-[11px] tracking-[0.16em] ${
                          isSelected ? "text-cobalt-200" : "text-crimson-600"
                        }`}
                      >
                        PROGRAM {cat.code}
                      </div>
                      <div className="font-extrabold text-sm sm:text-base lg:text-lg tracking-tight mt-0.5 whitespace-nowrap lg:whitespace-normal">
                        {cat.shortTitle}
                      </div>
                    </div>
                    <span
                      className={`hidden sm:inline-block font-mono text-xs px-2 py-0.5 border shrink-0 ${
                        isSelected
                          ? "border-white/25 bg-white/10 text-white"
                          : "border-cobalt-900/15 text-ink-muted"
                      }`}
                    >
                      {cat.items.length}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right 8-Col Active Category Dossier */}
            <div className="lg:col-span-8 p-6 sm:p-10 flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: LUXURY_EASE }}
                >
                  <div className="pb-6 mb-6 border-b border-cobalt-900/10">
                    <div className="font-mono text-xs font-semibold tracking-[0.16em] text-crimson-600 mb-2">
                      [{activeCategory.code}] · {activeCategory.tagline}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tightest text-ink">
                      {activeCategory.title}
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-ink-muted leading-relaxed">
                      {activeCategory.summary}
                    </p>
                  </div>

                  {/* Items List */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {activeCategory.items.slice(0, 6).map((item, idx) => (
                      <div
                        key={idx}
                        className={`p-5 border transition-colors ${
                          item.featured
                            ? "md:col-span-2 border-cobalt-700 bg-cobalt-50/50"
                            : "border-cobalt-900/12 bg-paper hover:border-cobalt-700/40"
                        }`}
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <h4 className="font-extrabold text-base text-ink tracking-tight">
                            {item.title}
                          </h4>
                          {item.badge && (
                            <span
                              className={`font-mono text-[10px] px-2 py-0.5 font-semibold tracking-[0.1em] ${
                                item.featured
                                  ? "bg-crimson-600 text-white"
                                  : "bg-cobalt-100 text-cobalt-900"
                              }`}
                            >
                              {item.badge}
                            </span>
                          )}
                        </div>

                        {item.leaderNote && (
                          <p className="text-xs font-semibold text-cobalt-800 mb-2">
                            {item.leaderNote}
                          </p>
                        )}

                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {item.subjects.map((sub, sIdx) => (
                            <span
                              key={sIdx}
                              className={`text-xs px-2.5 py-1 border ${
                                sub.includes("KOÇLUK")
                                  ? "bg-crimson-600 text-white border-crimson-600 font-bold"
                                  : "bg-white text-ink-muted border-cobalt-900/10"
                              }`}
                            >
                              {sub}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {activeCategory.items.length > 6 && (
                    <div className="mt-4 font-mono text-xs text-cobalt-700">
                      + {activeCategory.items.length - 6} dil ve sertifika
                      programı daha katalog sayfasında yer almaktadır.
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              <div className="mt-8 pt-6 border-t border-cobalt-900/10 flex flex-wrap items-center justify-between gap-4">
                <Link
                  href={`/egitim-programlarimiz#${activeCategory.id}`}
                  className="group inline-flex items-center gap-2 text-sm font-bold text-cobalt-700 hover:text-crimson-600 transition-colors"
                >
                  <span>
                    {activeCategory.title} Detaylarını Katalogda Gör
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <a
                  href={getWhatsAppUrl(
                    `Merhaba, Aybar Akademi "${activeCategory.title}" birebir özel ders programı hakkında bilgi almak istiyorum.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-crimson-600 hover:bg-cobalt-900 text-white px-5 py-2.5 text-xs font-bold tracking-tight transition-colors"
                >
                  <span>Bu Program İçin Bilgi Al</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Founder-Led Flagship Programs Dual Spotlight */}
          <Reveal delay={0.1}>
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 border border-cobalt-900/20 shadow-studio overflow-hidden">
              <SpotlightCard
                glowColor="rgba(220, 27, 46, 0.22)"
                className="bg-cobalt-900 text-white p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-white/15"
              >
                <div className="inline-block px-2.5 py-1 bg-crimson-600 text-white font-mono text-[10px] font-bold tracking-[0.15em] mb-4">
                  BAHADIR AYBAR LİDERLİĞİNDE ÖZEL DERS · 01
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
                  KPSS Eğitim Bilimleri (Öğretmen Adayları İçin)
                </h3>
                <p className="mt-2.5 text-sm text-cobalt-100/90 leading-relaxed">
                  Eğitim Psikolojisi, Öğretim Yöntem ve Teknikleri, Ölçme ve
                  Değerlendirme, Program Geliştirme, Rehberlik ve Sınıf Yönetimi
                  derslerinin tamamı bizzat Kurucumuz{" "}
                  <strong className="text-white">Bahadır Aybar</strong> tarafından
                  yüksek akademik standartlarda birebir verilmektedir.
                </p>
                <Link
                  href="/egitim-programlarimiz#sinav-hazirlik"
                  className="mt-5 inline-flex items-center gap-2 font-mono text-xs font-bold tracking-[0.12em] text-crimson-500 hover:text-white transition-colors"
                >
                  <span>PROGRAM DETAYINI GÖR</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </SpotlightCard>

              <SpotlightCard
                glowColor="rgba(56, 139, 255, 0.25)"
                className="bg-cobalt-950 text-white p-6 sm:p-8"
              >
                <div className="inline-block px-2.5 py-1 bg-cobalt-700 text-white font-mono text-[10px] font-bold tracking-[0.15em] mb-4 border border-white/20">
                  BAHADIR AYBAR LİDERLİĞİNDE MENTORLUK · 02
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
                  Üniversite Düzeyi: Felsefe, Sosyoloji ve Psikoloji
                </h3>
                <p className="mt-2.5 text-sm text-cobalt-100/90 leading-relaxed">
                  Felsefe, Sosyoloji ve Psikoloji bölümlerinde öğrenim gören
                  üniversite öğrencilerine yönelik tüm akademik dersler ve ileri
                  düzey mentorluk bizzat Kurucumuz{" "}
                  <strong className="text-white">Bahadır Aybar</strong>{" "}
                  liderliğinde yürütülmektedir.
                </p>
                <Link
                  href="/egitim-programlarimiz#universite-akademik"
                  className="mt-5 inline-flex items-center gap-2 font-mono text-xs font-bold tracking-[0.12em] text-cobalt-300 hover:text-white transition-colors"
                >
                  <span>AKADEMİK MENTORLUK DETAYI</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </SpotlightCard>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =================================================================== */}
      {/* SPREAD 05 — EĞİTİM MODELİMİZ ARCHITECTURAL SUMMARY                  */}
      {/* =================================================================== */}
      <section className="py-20 lg:py-28 bg-cobalt-950 text-white border-y border-white/15 relative overflow-hidden">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
          <SwissSectionHeader
            dark
            index="BÖLÜM 04"
            eyebrow={educationModelContent.eyebrow}
            title={
              <>
                Ezberci Kalıpları Yıkan{" "}
                <span className="font-serif italic font-normal text-cobalt-200">
                  VIP Süreç Yönetimi
                </span>
              </>
            }
            subtitle={educationModelContent.lead}
            rightSlot={
              <MagneticLink href="/egitim-modelimiz" variant="crimson">
                Eğitim Modelimizi İncele
              </MagneticLink>
            }
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Image Feature */}
            <div className="lg:col-span-5 flex flex-col justify-between border border-white/15 bg-cobalt-900/50 p-4">
              <div className="relative aspect-[4/3] overflow-hidden border border-white/15">
                <img
                  src="/images/vip-mentorship.jpg"
                  alt="Aybar Akademi VIP Eğitim Koçluğu ve Mentorluk"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-crimson-600 text-white px-3 py-1 font-mono text-[10px] font-semibold tracking-[0.15em]">
                  ÖĞRENCİ · ÖĞRETMEN · AİLE KÖPRÜSÜ
                </div>
              </div>
              <div className="pt-5 pb-2 px-2">
                <div className="font-serif italic text-xl text-cobalt-100 leading-snug">
                  “Eğitim koçluğu; dışarıdan bir baskı aracı değil, öğrencinin
                  kendi içindeki gücü keşfetmesini sağlayan profesyonel bir yol
                  arkadaşlığıdır.”
                </div>
              </div>
            </div>

            {/* Right 4 Pillars Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 border border-white/15 divide-y sm:divide-y-0 sm:divide-x divide-white/12">
              {educationModelContent.sections.map((sec, idx) => {
                const icons = [ShieldCheck, Compass, BookOpen, Globe2];
                const Icon = icons[idx % icons.length];
                return (
                  <SpotlightCard
                    key={sec.code}
                    className={`p-6 sm:p-8 flex flex-col justify-between bg-cobalt-900/30 hover:bg-cobalt-900/70 transition-colors ${
                      idx >= 2 ? "sm:border-t sm:border-white/12" : ""
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-[11px] tracking-[0.16em] text-crimson-500">
                          [{sec.code}]
                        </span>
                        <Icon className="h-4 w-4 text-cobalt-300" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-extrabold tracking-tight text-white leading-snug">
                        {sec.title}
                      </h3>
                      <p className="mt-2.5 text-xs sm:text-sm text-cobalt-200/85 leading-relaxed">
                        {sec.intro}
                      </p>
                    </div>

                    <ul className="mt-5 pt-4 border-t border-white/10 space-y-1.5">
                      {sec.points.map((pt, pIdx) => (
                        <li
                          key={pIdx}
                          className="text-xs text-cobalt-100 flex items-center gap-2"
                        >
                          <span className="h-1 w-1 bg-crimson-500 shrink-0" />
                          <span className="truncate">{pt.label}</span>
                        </li>
                      ))}
                    </ul>
                  </SpotlightCard>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* SPREAD 06 — STICKY STACKING CARDS: 5 STANDART İLKE                  */}
      {/* =================================================================== */}
      <section className="py-20 lg:py-28 bg-paper">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
          <SwissSectionHeader
            index="BÖLÜM 05"
            eyebrow={whyDifferentContent.eyebrow}
            title={
              <>
                Sıfır Hata İle Zirveye Taşıyan{" "}
                <span className="font-serif italic font-medium text-cobalt-700">
                  5 Standart İlke
                </span>
              </>
            }
            subtitle={whyDifferentContent.lead}
            rightSlot={
              <MagneticLink href="/neden-farkliyiz" variant="outline-dark">
                Tüm İlkeleri Detaylı İncele
              </MagneticLink>
            }
          />

          {/* Sticky Card Stack */}
          <div className="relative pt-2">
            {whyDifferentContent.principles.map((p, idx) => (
              <StickyPrincipleCard
                key={p.step}
                principle={p}
                index={idx}
                total={whyDifferentContent.principles.length}
              />
            ))}
          </div>

          {/* Pedagogical Outcome Callout */}
          <Reveal>
            <div className="mt-12 bg-cobalt-700 halftone-cobalt text-white p-8 sm:p-12 border border-cobalt-900 shadow-studio flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="max-w-3xl">
                <div className="inline-block px-3 py-1 bg-crimson-600 text-white font-mono text-[11px] font-semibold tracking-[0.16em] mb-4">
                  PEDAGOJİK SONUÇ · TAM ÖĞRENME
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tightest">
                  {whyDifferentContent.pedagogicalOutcome.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-cobalt-50/90 leading-relaxed">
                  {whyDifferentContent.pedagogicalOutcome.body}
                </p>
              </div>

              <div className="shrink-0">
                <MagneticLink
                  href={getWhatsAppUrl()}
                  external
                  variant="crimson"
                >
                  Ücretsiz Keşif Seansı Alın
                </MagneticLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
