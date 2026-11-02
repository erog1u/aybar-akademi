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
  Award,
  Sparkles,
  PhoneCall,
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
  SectionHeader,
  MagneticLink,
  KineticRibbon,
  ParallaxWatermark,
  SuccessDiagnosticWidget,
  AnimatedCounter,
  SpotlightCard,
  LUXURY_EASE,
} from "@/components/motion/Primitives";
import {
  AybarCrestEmblem,
  AybarInstitutionalSeal,
} from "@/components/brand/AybarCrest";

const SUBPAGE_GATEWAY = [
  {
    title: "Hakkımızda",
    desc: "33 yıllık köklü akademik deneyimimiz ve Türkiye genelindeki hizmet ağımız.",
    href: "/hakkimizda",
    accent: "Kurumsal Kimlik",
    icon: Award,
  },
  {
    title: "Eğitim Programlarımız",
    desc: "YKS, LGS, KPSS, 11 Dünya Dili, Üniversite ve Sanat özel ders kataloğu.",
    href: "/egitim-programlarimiz",
    accent: "6 Ana Kategori",
    icon: BookOpen,
  },
  {
    title: "Eğitim Modelimiz",
    desc: "VIP süreç yönetimi, eğitim koçluğu ve aile-okul-öğretmen köprüsü.",
    href: "/egitim-modelimiz",
    accent: "VIP Süreç",
    icon: Compass,
  },
  {
    title: "Neden Farklıyız?",
    desc: "30 dk tanışma seansı, Ters Yüz Sınıf ve Dijital Hata Defteri sistemimiz.",
    href: "/neden-farkliyiz",
    accent: "5 Standart İlke",
    icon: Sparkles,
  },
  {
    title: "İletişim & Başvuru",
    desc: "Ücretsiz 30 dakikalık tanışma seansı ve öğrenme stili analizi planlayın.",
    href: "/iletisim",
    accent: "Hızlı Planlama",
    icon: PhoneCall,
  },
];

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

  const targetScale = 1 - (total - 1 - index) * 0.02;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
  const isDark = index % 2 === 1;

  return (
    <div
      ref={cardWrapRef}
      className="lg:sticky mb-6 lg:mb-8"
      style={{ top: `calc(6rem + ${index * 14}px)` }}
    >
      <motion.article
        style={{ scale, transformOrigin: "top center" }}
        className={`border shadow-studio lg:min-h-[400px] flex flex-col justify-between ${
          isDark
            ? "bg-cobalt-900 border-white/15 text-white"
            : "bg-white border-cobalt-900/15 text-ink"
        }`}
      >
        <div
          className={`px-5 sm:px-8 lg:px-10 py-3.5 sm:py-4 border-b flex items-center justify-between gap-3 ${
            isDark
              ? "border-white/12 bg-cobalt-950"
              : "border-cobalt-900/10 bg-paper-warm"
          }`}
        >
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="inline-flex items-center px-3 py-1 bg-crimson-600 text-white text-xs font-bold tracking-wide whitespace-nowrap shrink-0">
              {principle.step}. İlke
            </span>
            <span
              className={`text-[11px] font-bold uppercase tracking-wider ${
                isDark ? "text-cobalt-200" : "text-cobalt-800"
              }`}
            >
              {principle.phase}
            </span>
          </div>
          <span
            className={`text-xs font-semibold hidden sm:inline-block ${
              isDark ? "text-cobalt-200" : "text-cobalt-700"
            }`}
          >
            Aybar Akademi Standart İlkesi
          </span>
        </div>

        <div className="p-5 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start grow">
          <div className="lg:col-span-4">
            <div
              className={`font-serif italic text-4xl sm:text-5xl font-bold leading-none mb-2 sm:mb-3 ${
                isDark ? "text-cobalt-300/40" : "text-cobalt-700/20"
              }`}
            >
              {principle.step}
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tightest leading-tight">
              {principle.title}
            </h3>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
            {principle.items.map((item, idx) => {
              const spanClass =
                principle.items.length === 3
                  ? idx === 2
                    ? "md:col-span-2"
                    : "md:col-span-1"
                  : "md:col-span-2";

              return (
                <div
                  key={idx}
                  className={`${spanClass} p-4 sm:p-5 border flex flex-col justify-between ${
                    isDark
                      ? "border-white/12 bg-white/[0.05]"
                      : "border-cobalt-900/10 bg-paper"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 bg-crimson-600 shrink-0" />
                    <div>
                      <h4 className="font-extrabold text-base sm:text-lg tracking-tight">
                        {item.title}
                      </h4>
                      <p
                        className={`mt-2 text-[15px] sm:text-base leading-relaxed ${
                          isDark ? "text-cobalt-100/95" : "text-ink-muted"
                        }`}
                      >
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
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
  const heroImageY = useTransform(heroScroll, [0, 1], ["0%", "8%"]);

  return (
    <div>
      {/* =================================================================== */}
      {/* 1. ROYAL COBALT STUDIO HERO                                         */}
      {/* =================================================================== */}
      <section
        ref={heroRef}
        className="relative studio-hero text-white border-b border-white/15 overflow-hidden"
      >
        {/* Subtle Vector Crest Architectural Watermark */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 text-white/[0.06]"
        >
          <AybarCrestEmblem variant="watermark" className="h-[520px] w-[520px]" />
        </div>

        {/* Studio Radial Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 right-12 h-[560px] w-[560px] rounded-full bg-[#4796FF]/30 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 w-72 sm:w-96 h-2 bg-crimson-600"
        />

        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 pt-12 pb-16 lg:pt-18 lg:pb-22 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">
            {/* Left 7 Columns */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-3 pl-2 pr-4 py-1.5 rounded-full border border-white/35 bg-cobalt-900/60 backdrop-blur-sm mb-7">
                <span className="h-6 w-6 rounded-full bg-crimson-600 flex items-center justify-center shrink-0">
                  <Check className="h-3.5 w-3.5 text-white stroke-[3]" />
                </span>
                <span className="text-xs font-bold tracking-wide text-white">
                  Türkiye Yüzyılı Maarif Modeli’ne %100 Uyumlu Eğitim
                </span>
              </div>

              <MaskedLines
                as="h1"
                immediate
                className="text-[2.35rem] sm:text-6xl xl:text-[4.3rem] font-extrabold tracking-tightest leading-[1.04]"
                lines={[
                  "Her Öğrenciye",
                  "Aynı Eğitim Değil,",
                  <span key="hl" className="inline-block pt-1">
                    <span className="bg-crimson-600 text-white px-4 py-0.5 inline-block -rotate-1 shadow-crimson">
                      Doğru Eğitim.
                    </span>
                  </span>,
                ]}
              />

              <p className="mt-7 text-base sm:text-lg lg:text-[1.15rem] text-cobalt-50/95 leading-relaxed max-w-2xl">
                <strong className="font-bold text-white">33 yıllık</strong>{" "}
                köklü eğitim deneyimini, kişiye özel VIP süreç yönetimi ve uzman
                öğretmen kadromuzla birleştiriyoruz. İstanbul’un tüm ilçelerinde{" "}
                <strong className="text-white underline decoration-crimson-500 decoration-2 underline-offset-4">
                  evinizin konforunda yüz yüze
                </strong>
                , tüm Türkiye’de{" "}
                <strong className="text-white underline decoration-white/60 decoration-2 underline-offset-4">
                  canlı ve interaktif online
                </strong>{" "}
                birebir özel ders.
              </p>

              <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <MagneticLink
                  href={getWhatsAppUrl()}
                  external
                  variant="crimson"
                  className="w-full sm:w-auto text-center"
                >
                  30 Dk Ücretsiz Tanışma Seansı Planla
                </MagneticLink>

                <MagneticLink
                  href="/egitim-programlarimiz"
                  variant="outline-light"
                  className="w-full sm:w-auto text-center"
                >
                  Eğitim Programlarımızı İncele
                </MagneticLink>
              </div>
            </div>

            {/* Right 5 Columns (Museum-Grade Studio Composition) */}
            <div className="lg:col-span-5 relative">
              <div className="bg-white p-2 sm:p-3 border border-white/30 shadow-studio">
                {/* Clean Integrated Header Strip Inside Frame */}
                <div className="bg-cobalt-950 text-white px-3 sm:px-3.5 py-2 flex items-center justify-between text-[11px] font-bold mb-2">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-crimson-500 animate-pulse" />
                    <span className="tracking-wide">Birebir VIP Özel Ders</span>
                  </div>
                  <span className="px-2 py-0.5 bg-crimson-600 text-white text-[10px] font-extrabold tracking-wider uppercase">
                    İlk 30 Dk Ücretsiz
                  </span>
                </div>

                {/* Parallax Image Frame */}
                <div className="relative aspect-[16/10] sm:aspect-[4/3] overflow-hidden bg-cobalt-900">
                  <motion.img
                    style={{ y: heroImageY }}
                    src="/images/hero-one-on-one.jpg"
                    alt="Aybar Akademi Birebir Özel Ders"
                    className="w-full h-[112%] -mt-[6%] object-cover"
                  />
                </div>
              </div>

              {/* Success Diagnostic Widget: Clean Dock Below Mobile, Symmetrical Overlap on lg */}
              <div className="mt-4 lg:-mt-7 lg:mx-4 relative z-20">
                <SuccessDiagnosticWidget />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom 4 Metrics Strip (Clean 2x2 on Mobile, 1x4 on Desktop) */}
        <div className="border-t border-white/15 bg-cobalt-950/85 backdrop-blur-md">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4">
            {[
              {
                target: 33,
                prefix: "",
                suffix: " Yıl",
                label: "Köklü Eğitim Deneyimi",
                borderClass: "border-r border-white/12 border-b lg:border-b-0",
              },
              {
                target: 100,
                prefix: "%",
                suffix: "",
                label: "Maarif Modeline Uyum",
                borderClass: "border-b lg:border-b-0 lg:border-r border-white/12",
              },
              {
                target: 39,
                prefix: "",
                suffix: " İlçe",
                label: "İstanbul Yüz Yüze Özel Ders",
                borderClass: "border-r border-white/12",
              },
              {
                target: 81,
                prefix: "",
                suffix: " İl",
                label: "Tüm Türkiye Canlı Online",
                borderClass: "",
              },
            ].map((stat, i) => (
              <div
                key={i}
                className={`py-5 px-4 sm:px-6 lg:first:pl-0 lg:last:pr-0 ${stat.borderClass}`}
              >
                <div className="font-serif font-bold text-2xl sm:text-4xl text-white tracking-tight">
                  <AnimatedCounter
                    target={stat.target}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </div>
                <div className="mt-1 text-xs sm:text-sm text-cobalt-200 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 2. PROMINENT SUBPAGE GATEWAY ("Tüm Bölümleri Hızlıca Keşfedin")      */}
      {/* =================================================================== */}
      <section className="bg-cobalt-950 text-white border-b border-white/15 py-10 sm:py-14">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 sm:mb-8">
            <div className="flex items-center gap-2.5">
              <span className="h-2.5 w-2.5 bg-crimson-500 inline-block" />
              <h2 className="text-base sm:text-lg lg:text-xl font-extrabold tracking-tight text-white">
                Sitemizin Tüm Bölümlerini Keşfedin
              </h2>
            </div>
            <span className="text-xs sm:text-[13.5px] text-cobalt-200 font-medium">
              Detaylı incelemek istediğiniz bölüme tıklayın
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4">
            {SUBPAGE_GATEWAY.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative bg-cobalt-900/90 hover:bg-cobalt-800 border border-white/15 hover:border-white/40 p-5 flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-cobalt-300">
                          0{idx + 1}
                        </span>
                        <span className="px-2.5 py-0.5 bg-crimson-600 text-white text-[11px] font-extrabold tracking-wider">
                          {item.accent}
                        </span>
                      </span>
                      <Icon className="h-4 w-4 text-cobalt-200 group-hover:text-white transition-colors shrink-0" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-extrabold tracking-tight text-white leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm sm:text-[15px] text-cobalt-100/90 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3.5 border-t border-white/12 flex items-center justify-between text-[13.5px] font-extrabold text-white">
                    <span className="text-cobalt-100 group-hover:text-white transition-colors">
                      Sayfayı Aç
                    </span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-crimson-300 group-hover:text-white" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Kinetic Ribbon */}
      <KineticRibbon
        variant="light"
        items={[
          "BİLGİNİN KAYNAĞI, BAŞARININ MİMARI",
          "VIP BİREBİR ÖZEL DERS",
          "30 DAKİKALIK ÜCRETSİZ TANIŞMA SEANSI",
          "DİJİTAL HATA DEFTERİ",
          "TERS YÜZ SINIF & ACTIVE RECALL",
        ]}
      />

      {/* =================================================================== */}
      {/* 3. KURUCUMUZUN MESAJI (Integrated Vector Crest + Verbatim Letter)   */}
      {/* =================================================================== */}
      <section className="py-14 sm:py-20 lg:py-24 bg-paper relative">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
          <SectionHeader
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

          <div className="border border-cobalt-900/15 bg-white shadow-card">
            <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-cobalt-900/12">
              {/* Left 4 Columns: Integrated Vector Seal & Pull Quote */}
              <div className="lg:col-span-4 p-6 sm:p-10 bg-paper-warm/70">
                <div className="lg:sticky lg:top-28 space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className="w-full py-6 px-4 bg-white border border-cobalt-900/10 flex flex-col items-center text-center shadow-card">
                    <AybarInstitutionalSeal variant="light" />
                    <div className="mt-5 pt-4 border-t border-cobalt-900/10 w-full">
                      <div className="font-serif font-bold text-lg text-cobalt-900">
                        {founderMessage.author}
                      </div>
                      <div className="text-xs font-bold text-crimson-600 mt-0.5">
                        {founderMessage.role}
                      </div>
                    </div>
                  </div>

                  <blockquote className="border-l-4 border-crimson-600 pl-4 py-1 text-left">
                    <p className="font-serif italic text-base text-cobalt-950 leading-relaxed">
                      “{founderMessage.pullQuote}”
                    </p>
                  </blockquote>
                </div>
              </div>

              {/* Right 8 Columns: Verbatim Founder's Letter */}
              <div className="lg:col-span-8 p-6 sm:p-10 lg:p-14">
                <p className="font-serif font-semibold text-lg sm:text-xl text-cobalt-900 leading-snug mb-8 pb-6 border-b border-cobalt-900/10">
                  {founderMessage.salutation}
                </p>

                <div className="space-y-5 text-[15.5px] sm:text-[16.5px] text-ink leading-[1.85]">
                  {founderMessage.paragraphs.map((paragraph, idx) => (
                    <p
                      key={idx}
                      className={
                        idx === 0
                          ? "text-ink font-medium text-base sm:text-[17px] leading-[1.85]"
                          : "text-ink/90 leading-[1.85]"
                      }
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="mt-10 pt-8 border-t border-cobalt-900/12 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                  <div>
                    <p className="font-serif italic text-base text-ink-muted mb-3">
                      {founderMessage.closing}
                    </p>
                    <div className="font-serif font-bold text-2xl text-cobalt-900 tracking-tight">
                      {founderMessage.author}
                    </div>
                    <div className="text-xs font-bold tracking-wider text-crimson-600 mt-1 uppercase">
                      {founderMessage.role}
                    </div>
                  </div>

                  <MagneticLink href="/hakkimizda" variant="cobalt">
                    Hakkımızda Sayfasına Git
                  </MagneticLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 4. YENİ SİSTEMDE YALNIZ DEĞİLSİN (Maarif Modeli & Hakkımızda Özeti) */}
      {/* =================================================================== */}
      <section className="relative py-14 sm:py-20 lg:py-24 bg-paper-tint border-y border-cobalt-900/12 overflow-hidden">
        <ParallaxWatermark
          text="AYBAR AKADEMİ · YENİ NESİL MAARİF MODELİ · "
          className="absolute top-8 left-0 right-0 text-cobalt-700/[0.05]"
        />

        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="bg-cobalt-700 halftone-cobalt p-6 sm:p-8 border border-cobalt-900/20 shadow-studio text-white">
                  <div className="mb-5 flex flex-col items-start gap-1.5">
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

                  <p className="text-[15px] sm:text-base text-cobalt-100 leading-relaxed mb-6">
                    Dersler aynı, öğrenme şekli değişti. Aybar Akademi’de yeni
                    nesil Maarif Modeline uyumlu birebir ders, sınav analizi ve
                    koçlukla adım adım hazırlanırsın.
                  </p>

                  <div className="relative aspect-[4/4.2] overflow-hidden border border-white/25 bg-cobalt-900">
                    <img
                      src="/images/maarif-student.jpg"
                      alt="Yeni Nesil Maarif Modeline Uyumlu Eğitim"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <SectionHeader
                eyebrow="HAKKIMIZDA ÖZETİ"
                title="Başarı Bir Tesadüf Değil, Kalıcı Bir Alışkanlıktır."
                subtitle={aboutContent.introParagraphs[0]}
              />

              <div className="border border-cobalt-900/12 bg-white divide-y divide-cobalt-900/10">
                {aboutContent.solutions.map((sol) => (
                  <div
                    key={sol.index}
                    className="p-5 sm:p-6 flex items-start gap-4 hover:bg-paper-warm/70 transition-colors"
                  >
                    <span className="text-xs font-bold text-white bg-cobalt-700 px-2.5 py-1 shrink-0 mt-0.5">
                      {sol.index}
                    </span>
                    <div>
                      <h3 className="text-lg sm:text-xl font-extrabold tracking-tight text-ink">
                        {sol.title}
                      </h3>
                      <p className="mt-2 text-[15px] sm:text-base text-ink-muted leading-relaxed">
                        {sol.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 bg-cobalt-900 text-white">
                  <div className="flex items-center gap-2 text-xs font-bold text-crimson-500 mb-1.5">
                    <MapPin className="h-4 w-4" />
                    <span>Yüz Yüze Özel Ders</span>
                  </div>
                  <div className="font-extrabold text-base sm:text-lg">
                    İstanbul’un Tüm İlçelerinde
                  </div>
                  <p className="mt-2 text-[14.5px] sm:text-[15px] text-cobalt-100/90 leading-relaxed">
                    Evinizin konforunda, güvenli ve verimli ortamda birebir yüz
                    yüze özel ders.
                  </p>
                </div>

                <div className="p-5 bg-white text-ink border border-cobalt-900/15">
                  <div className="flex items-center gap-2 text-xs font-bold text-cobalt-700 mb-1.5">
                    <Globe2 className="h-4 w-4 text-crimson-600" />
                    <span>Canlı Online Eğitim</span>
                  </div>
                  <div className="font-extrabold text-base sm:text-lg">Tüm Türkiye’de</div>
                  <p className="mt-2 text-[14.5px] sm:text-[15px] text-ink-muted leading-relaxed">
                    Coğrafi sınırları kaldıran yüksek verimli, interaktif online
                    eğitim modelleri.
                  </p>
                </div>
              </div>

              {/* Guided directional link */}
              <div className="mt-8 pt-6 border-t border-cobalt-900/12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <Link
                  href="/hakkimizda"
                  className="group inline-flex items-center gap-2 text-[15px] sm:text-base font-extrabold text-cobalt-700 hover:text-crimson-600 transition-colors"
                >
                  <span>Kurumsal Hikâyemizi ve Hizmet Ağımızı İnceleyin</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <span className="text-xs sm:text-sm text-ink-muted font-medium">
                  33 Yıllık Tecrübe · İstanbul 39 İlçe · Tüm Türkiye
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 5. EĞİTİM PROGRAMLARIMIZ VİTRİNİ                                    */}
      {/* =================================================================== */}
      <section className="py-14 sm:py-20 lg:py-24 bg-paper">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
          <SectionHeader
            eyebrow="EĞİTİM PROGRAMLARIMIZ"
            title={
              <>
                İlkokuldan Üniversiteye, Ulusal Sınavlardan{" "}
                <span className="font-serif italic font-medium text-cobalt-700">
                  Dünya Dillerine
                </span>
              </>
            }
            subtitle="Her yaş grubuna ve her seviyeye uygun, tamamen birebir özel ders programlarımız."
            rightSlot={
              <MagneticLink href="/egitim-programlarimiz" variant="cobalt">
                Tüm Programları Gör
              </MagneticLink>
            }
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 border border-cobalt-900/15 bg-white shadow-card">
            {/* Horizontal scroll on mobile with no-scrollbar + prompt indicator */}
            <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-cobalt-900/12 bg-paper-warm flex flex-col">
              {/* Mobile Swipe Hint */}
              <div className="lg:hidden px-4 py-2 bg-cobalt-950 text-white text-[11px] font-semibold flex items-center justify-between border-b border-cobalt-900/15">
                <span className="text-cobalt-200">Kategori Seçin</span>
                <span className="text-crimson-400 font-bold">
                  Kaydırarak diğer kategorileri seçin &rarr;
                </span>
              </div>

              <div className="flex lg:flex-col overflow-x-auto no-scrollbar divide-x lg:divide-x-0 lg:divide-y divide-cobalt-900/10">
                {programCategories.map((cat) => {
                  const isSelected = cat.id === activeCategory.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setSelectedCatId(cat.id)}
                      className={`shrink-0 lg:w-full text-left px-5 sm:px-6 py-3.5 sm:py-4 lg:py-5 min-h-[44px] transition-colors flex items-center justify-between gap-4 relative ${
                        isSelected
                          ? "bg-cobalt-700 text-white"
                          : "text-ink hover:bg-cobalt-50/80"
                      }`}
                    >
                      {isSelected && (
                        <span className="absolute left-0 right-0 bottom-0 h-1 lg:right-auto lg:top-0 lg:h-auto lg:w-1.5 bg-crimson-600" />
                      )}
                      <span className="font-extrabold text-[15px] sm:text-base tracking-tight whitespace-nowrap lg:whitespace-normal">
                        {cat.title}
                      </span>
                      <span
                        className={`hidden sm:inline-block text-xs font-bold px-2 py-0.5 border shrink-0 ${
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
            </div>

            <div className="lg:col-span-8 p-6 sm:p-10 flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: LUXURY_EASE }}
                >
                  <div className="pb-6 mb-6 border-b border-cobalt-900/10">
                    <div className="text-xs sm:text-[13px] font-extrabold text-crimson-600 mb-1.5">
                      {activeCategory.tagline}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tightest text-ink">
                      {activeCategory.title}
                    </h3>
                    <p className="mt-2 text-[15px] sm:text-base text-ink-muted leading-relaxed">
                      {activeCategory.summary}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {activeCategory.items.slice(0, 6).map((item, idx) => (
                      <div
                        key={idx}
                        className={`p-5 border ${
                          item.featured
                            ? "md:col-span-2 border-cobalt-700 bg-cobalt-50/60"
                            : "border-cobalt-900/12 bg-paper"
                        }`}
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <h4 className="font-extrabold text-lg sm:text-xl text-ink tracking-tight">
                            {item.title}
                          </h4>
                          {item.badge && (
                            <span
                              className={`text-xs px-2.5 py-0.5 font-bold ${
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
                          <p className="text-sm font-semibold text-cobalt-800 mb-2">
                            {item.leaderNote}
                          </p>
                        )}

                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {item.subjects.map((sub, sIdx) => (
                            <span
                              key={sIdx}
                              className={`text-[13px] sm:text-sm px-3 py-1.5 border ${
                                sub.includes("KOÇLUK")
                                  ? "bg-crimson-600 text-white border-crimson-600 font-bold"
                                  : "bg-white text-ink font-medium border-cobalt-900/10"
                              }`}
                            >
                              {sub}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-8 pt-6 border-t border-cobalt-900/10 flex flex-wrap items-center justify-between gap-4">
                <Link
                  href={`/egitim-programlarimiz#${activeCategory.id}`}
                  className="group inline-flex items-center gap-2 text-[15px] sm:text-base font-extrabold text-cobalt-700 hover:text-crimson-600 transition-colors"
                >
                  <span>Tüm {activeCategory.title} Detaylarını Gör</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <a
                  href={getWhatsAppUrl(
                    `Merhaba, Aybar Akademi "${activeCategory.title}" birebir özel ders programı hakkında bilgi almak istiyorum.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-crimson-600 hover:bg-cobalt-900 text-white px-5 py-3 text-[13.5px] sm:text-sm font-extrabold transition-colors shadow-crimson"
                >
                  <span>WhatsApp ile Bilgi Al</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Founder-Led Flagship Programs */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 border border-cobalt-900/20 shadow-studio overflow-hidden">
            <SpotlightCard
              glowColor="rgba(220, 27, 46, 0.22)"
              className="bg-cobalt-900 text-white p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-white/15"
            >
              <div className="inline-block px-3 py-1 bg-crimson-600 text-white text-xs font-bold mb-4">
                Kurucumuz Bahadır Aybar Liderliğinde
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
                KPSS Eğitim Bilimleri Birebir Özel Dersleri
              </h3>
              <p className="mt-2.5 text-[15px] sm:text-base text-cobalt-100/90 leading-relaxed">
                Tüm Eğitim Bilimleri dersleri bizzat kurumumuzun kurucusu Bahadır
                Aybar tarafından yüksek akademik standartlarda verilmektedir.
              </p>
              <Link
                href="/egitim-programlarimiz#sinav-hazirlik"
                className="mt-6 inline-flex items-center gap-2 px-5 py-3 bg-white/10 hover:bg-crimson-600 border border-white/20 text-sm font-extrabold text-white transition-colors"
              >
                <span>Programı İncele</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </SpotlightCard>

            <SpotlightCard
              glowColor="rgba(56, 139, 255, 0.25)"
              className="bg-cobalt-950 text-white p-6 sm:p-8"
            >
              <div className="inline-block px-3 py-1 bg-cobalt-700 text-white text-xs font-bold mb-4">
                Kurucumuz Bahadır Aybar Liderliğinde
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
                Üniversite Düzeyi: Felsefe, Sosyoloji ve Psikoloji
              </h3>
              <p className="mt-2.5 text-[15px] sm:text-base text-cobalt-100/90 leading-relaxed">
                Felsefe, Sosyoloji ve Psikoloji bölümlerinde öğrenim gören
                üniversite öğrencilerine yönelik tüm akademik dersler bizzat
                kurumumuzun kurucusu tarafından verilmektedir.
              </p>
              <Link
                href="/egitim-programlarimiz#universite-akademik"
                className="mt-6 inline-flex items-center gap-2 px-5 py-3 bg-white/10 hover:bg-cobalt-700 border border-white/20 text-sm font-extrabold text-white transition-colors"
              >
                <span>Detayları Gör</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 6. EĞİTİM MODELİMİZ ÖZETİ                                           */}
      {/* =================================================================== */}
      <section className="py-14 sm:py-20 lg:py-24 bg-cobalt-950 text-white border-y border-white/15">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
          <SectionHeader
            dark
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
            <div className="lg:col-span-5 flex flex-col justify-between border border-white/15 bg-cobalt-900/50 p-4">
              <div className="relative aspect-[4/3] overflow-hidden border border-white/15">
                <img
                  src="/images/vip-mentorship.jpg"
                  alt="Aybar Akademi VIP Eğitim Koçluğu"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-5 pb-2 px-2">
                <p className="font-serif italic text-lg sm:text-xl text-cobalt-100 leading-snug">
                  “Eğitim koçluğu; dışarıdan bir baskı aracı değil, öğrencinin
                  kendi içindeki gücü keşfetmesini sağlayan profesyonel bir yol
                  arkadaşlığıdır.”
                </p>
              </div>
            </div>

            {/* Hairline 2x2 Grid using gap-px with bg-white/12 and child bg-cobalt-950 */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/12 border border-white/15">
              {educationModelContent.sections.map((sec, idx) => {
                const icons = [ShieldCheck, Compass, BookOpen, Globe2];
                const Icon = icons[idx % icons.length];
                return (
                  <SpotlightCard
                    key={idx}
                    className="p-6 sm:p-8 flex flex-col justify-between bg-cobalt-950 hover:bg-cobalt-900/80 transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-bold text-crimson-500 font-mono">
                          0{idx + 1}
                        </span>
                        <Icon className="h-4 w-4 text-cobalt-300" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-extrabold tracking-tight text-white leading-snug">
                        {sec.title}
                      </h3>
                      <p className="mt-2.5 text-[15px] sm:text-base text-cobalt-100/90 leading-relaxed">
                        {sec.intro}
                      </p>
                    </div>
                  </SpotlightCard>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 7. NEDEN FARKLIYIZ — 5 STANDART İLKE                                */}
      {/* =================================================================== */}
      <section className="py-14 sm:py-20 lg:py-24 bg-paper">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
          <SectionHeader
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
                Neden Farklıyız Sayfasına Git
              </MagneticLink>
            }
          />

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

          <div className="mt-10 bg-cobalt-700 halftone-cobalt text-white p-8 sm:p-12 border border-cobalt-900 shadow-studio flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-3xl">
              <div className="inline-block px-3 py-1 bg-crimson-600 text-white text-xs font-bold mb-4">
                Tam Öğrenme Modeli
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tightest">
                {whyDifferentContent.pedagogicalOutcome.title}
              </h3>
              <p className="mt-3 text-[15px] sm:text-base text-cobalt-50/95 leading-relaxed">
                {whyDifferentContent.pedagogicalOutcome.body}
              </p>
            </div>

            <div className="shrink-0">
              <MagneticLink href={getWhatsAppUrl()} external variant="crimson">
                Ücretsiz Tanışma Seansı Alın
              </MagneticLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
