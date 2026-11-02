import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Check,
  Award,
  BookOpen,
  Users,
  Compass,
  MapPin,
  Globe2,
  Calendar,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  GraduationCap,
  TrendingUp,
} from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import { aboutContent } from "@/data/content";
import {
  MaskedLines,
  Reveal,
  SwissSectionHeader,
  MagneticLink,
  KineticRibbon,
  ParallaxWatermark,
} from "@/components/motion/Primitives";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "AYBAR AKADEMİ; 33 yıllık köklü eğitim deneyimi, yeni nesil Maarif Modeline hâkim uzman kadrosu ve kişiye özgü VIP süreç yönetimiyle öğrencilerini zirveye taşıyan çağdaş bir eğitim kurumudur.",
};

const STATS = [
  {
    code: "STAT · 01",
    value: "33+",
    unit: "YIL",
    label: "Köklü Eğitim Deneyimi",
    description: "1993'ten bugüne çeyrek asrı aşan kurumsal akademik miras.",
  },
  {
    code: "STAT · 02",
    value: "%100",
    unit: "UYUM",
    label: "Yeni Nesil Maarif Modeli",
    description: "Türkiye Yüzyılı Maarif Modeline tam uyumlu pedagojik süreçler.",
  },
  {
    code: "STAT · 03",
    value: "39",
    unit: "İLÇE",
    label: "İstanbul’un Tamamı",
    description: "Evinizin güvenli ve konforlu ortamında birebir yüz yüze özel ders.",
  },
  {
    code: "STAT · 04",
    value: "81",
    unit: "İL",
    label: "Canlı Online Kapsama",
    description: "Yüksek verimli, interaktif teknolojik altyapıyla tüm Türkiye'de.",
  },
];

const SOLUTION_DETAILS = [
  {
    icon: Compass,
    features: [
      "Öğrenme Stili Analizi (Görsel, İşitsel, Kinestetik)",
      "Öğrencinin Okul ve Sosyal Yaşamına Özel Haftalık Planlama",
      "Kişiye Özgü Dijital Konu İlerleme Dashboard'u",
    ],
  },
  {
    icon: TrendingUp,
    features: [
      "Kişiye Özel Dijital Hata Defteri ve Sıfırlama Tekniği",
      "Deneme ve Yazılı Sınav Sonuçlarında Nokta Atışı Analiz",
      "Her Ders Bitiminde Veliye WhatsApp Durum Bildirimi",
    ],
  },
  {
    icon: Users,
    features: [
      "Yeni Nesil Maarif Modeline Hâkim Branş Öğretmenleri",
      "Sınav Stresi ve Motivasyon Yönetiminde Profesyonel Koçluk",
      "Öğrenciyle Güçlü İletişim Kuran Dinamik ve Tecrübeli Kadro",
    ],
  },
];

export default function HakkimizdaPage() {
  return (
    <div className="bg-paper text-ink min-h-screen">
      {/* -------------------------------------------------------------------- */}
      {/* 1. COBALT STUDIO HERITAGE HERO                                       */}
      {/* -------------------------------------------------------------------- */}
      <section className="relative bg-cobalt-950 text-white overflow-hidden border-b border-white/12">
        {/* Subtle Architectural Dot Pattern Overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-dot-white opacity-20 pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute -top-40 right-0 w-[580px] h-[580px] bg-cobalt-700/20 rounded-full blur-3xl pointer-events-none"
        />

        <div className="relative max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 pt-16 sm:pt-24 pb-20 sm:pb-28">
          {/* Folio Register Micro-Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-10 border-b border-white/12 text-[11px] font-mono tracking-[0.16em]">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center px-2.5 py-1 bg-crimson-600 text-white font-semibold">
                [33 YILLIK KÖKLÜ EĞİTİM DENEYİMİ]
              </span>
              <span className="text-cobalt-200 hidden sm:inline">
                KURUMSAL KİMLİK · DOSYA NO: 1993/AA
              </span>
            </div>
            <div className="text-cobalt-300">
              BAHADIR AYBAR LİDERLİĞİNDE VIP EĞİTİM
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left 7 Columns: Editorial Headline and Verbatim Paragraphs */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 font-mono text-xs text-crimson-500 font-semibold tracking-[0.18em]">
                  <span className="h-1.5 w-1.5 bg-crimson-500 rotate-45" />
                  {aboutContent.eyebrow}
                </div>

                <MaskedLines
                  as="h1"
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tightest leading-[1.08] text-white"
                  lines={[
                    "Çeyrek Asrı Aşan",
                    "Akademik Disiplin,",
                    "Yeni Nesil Maarif Modeline",
                    "Hâkim Uzman Kadro.",
                  ]}
                />
              </div>

              {/* Verbatim Intro Paragraphs */}
              <div className="space-y-5 text-base sm:text-lg text-cobalt-100/90 leading-relaxed font-normal border-l-2 border-crimson-600 pl-6">
                <Reveal delay={0.1}>
                  <p>{aboutContent.introParagraphs[0]}</p>
                </Reveal>
                <Reveal delay={0.2}>
                  <p>{aboutContent.introParagraphs[1]}</p>
                </Reveal>
              </div>

              {/* Founder Micro-Attribution & Quick Action */}
              <Reveal delay={0.3}>
                <div className="pt-4 flex flex-wrap items-center gap-6">
                  <MagneticLink
                    href={getWhatsAppUrl()}
                    external
                    variant="crimson"
                  >
                    30 Dk Ücretsiz Tanışma Seansı
                  </MagneticLink>

                  <Link
                    href="/egitim-programlarimiz"
                    className="group inline-flex items-center gap-2 text-sm font-bold text-white hover:text-crimson-400 transition-colors"
                  >
                    <span>Programları Görüntüle</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Right 5 Columns: Crisp Museum-Plate Full Logo Frame & Student Image */}
            <div className="lg:col-span-5 space-y-6">
              {/* Museum-Plate Frame holding siteConfig.logos.full */}
              <Reveal delay={0.15}>
                <div className="bg-white text-ink border border-white/20 shadow-studio p-6 sm:p-8 relative">
                  {/* Swiss Register Crosshairs */}
                  <span
                    aria-hidden="true"
                    className="absolute top-2 left-2 font-mono text-[10px] text-cobalt-700/40 select-none"
                  >
                    +
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute top-2 right-2 font-mono text-[10px] text-cobalt-700/40 select-none"
                  >
                    +
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute bottom-2 left-2 font-mono text-[10px] text-cobalt-700/40 select-none"
                  >
                    +
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute bottom-2 right-2 font-mono text-[10px] text-cobalt-700/40 select-none"
                  >
                    +
                  </span>

                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-cobalt-900/10">
                    <span className="font-mono text-[10px] tracking-[0.18em] text-ink-muted">
                      RESMİ KURUMSAL ARMA
                    </span>
                    <span className="inline-flex items-center gap-1 font-mono text-[10px] text-crimson-600 font-semibold tracking-wider">
                      <ShieldCheck className="h-3 w-3" />
                      KURULUŞ: 1993
                    </span>
                  </div>

                  <div className="flex items-center justify-center py-4 bg-paper-warm/80 border border-cobalt-900/5">
                    <img
                      src={siteConfig.logos.full}
                      alt={`${siteConfig.name} - ${siteConfig.motto}`}
                      className="h-36 sm:h-44 w-auto object-contain transition-transform duration-500 hover:scale-[1.02]"
                    />
                  </div>

                  <div className="mt-5 pt-4 border-t border-cobalt-900/10 flex items-center justify-between text-xs">
                    <div>
                      <div className="font-bold text-cobalt-900">
                        {siteConfig.founder.name}
                      </div>
                      <div className="font-mono text-[10px] text-ink-muted">
                        {siteConfig.founder.role}
                      </div>
                    </div>
                    <div className="text-right font-serif italic text-cobalt-800 text-xs">
                      “{siteConfig.motto}”
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Secondary Visual Accent: Maarif Model Student & Credential Badge */}
              <Reveal delay={0.25}>
                <div className="relative border border-white/15 overflow-hidden group bg-cobalt-900">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src="/images/maarif-student.jpg"
                      alt="Aybar Akademi Yeni Nesil Maarif Modeli Öğrenci Odaklı Çalışma"
                      className="w-full h-full object-cover grayscale contrast-125 brightness-90 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-cobalt-950 via-cobalt-950/40 to-transparent flex flex-col justify-end p-5">
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-mono text-[10px] font-semibold tracking-[0.16em] text-white bg-crimson-600 px-2.5 py-1">
                        YENİ NESİL MAARİF MODELİ
                      </span>
                      <span className="font-mono text-[11px] text-cobalt-200">
                        %100 PEDAGOJİK UYUM
                      </span>
                    </div>
                    <p className="mt-2 text-xs text-cobalt-100/90 font-medium">
                      Birebir VIP mentorluk ve ölçülebilir başarı mimarisi.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Bottom 4-Column Architectural Micro-Ledger Bar */}
          <div className="mt-16 sm:mt-24 pt-10 border-t border-white/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat, idx) => (
              <Reveal key={stat.code} delay={0.1 * idx}>
                <div className="p-5 border border-white/10 bg-white/[0.03] space-y-2">
                  <div className="flex items-center justify-between text-cobalt-300 font-mono text-[10px] tracking-[0.16em]">
                    <span>[{stat.code}]</span>
                    <span className="text-crimson-500 font-bold">{stat.unit}</span>
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-mono">
                    {stat.value}
                  </div>
                  <div className="text-sm font-bold text-cobalt-100">
                    {stat.label}
                  </div>
                  <p className="text-xs text-cobalt-200/75 leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* 2. KINETIC TYPOGRAPHIC RIBBON                                        */}
      {/* -------------------------------------------------------------------- */}
      <KineticRibbon
        items={[
          "33 YILLIK KÖKLÜ EĞİTİM DENEYİMİ",
          "YENİ NESİL MAARİF MODELİ %100 UYUMLU",
          "KİŞİYE ÖZGÜ BİREYSELLEŞTİRİLMİŞ PROGRAM",
          "İSTANBUL 39 İLÇE BİREBİR YÜZ YÜZE ÖZEL DERS",
          "81 İLDE İNTERAKTİF CANLI ONLINE EĞİTİM",
          "DİJİTAL HATA DEFTERİ İLE SIFIR HATA TEKNİĞİ",
        ]}
        variant="cobalt"
      />

      {/* -------------------------------------------------------------------- */}
      {/* 3. CORE SOLUTIONS LEDGER                                             */}
      {/* -------------------------------------------------------------------- */}
      <section className="py-20 sm:py-28 max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
        <SwissSectionHeader
          index="01"
          eyebrow="ÖĞRENCİ ODAKLI ÇÖZÜMLERİMİZ"
          title="Potansiyeli Zirveye Taşıyan Üç Yapısal Çözüm"
          subtitle={aboutContent.solutionsIntro}
          rightSlot={
            <div className="font-mono text-xs tracking-wider text-ink-muted">
              METODOLOJİ: <span className="text-crimson-600 font-bold">TAM ÖĞRENME MODELİ</span>
            </div>
          }
        />

        {/* Asymmetric Swiss 1px-Bordered Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {aboutContent.solutions.map((item, idx) => {
            const detail = SOLUTION_DETAILS[idx];
            const Icon = detail.icon;

            return (
              <Reveal key={item.index} delay={0.1 * idx}>
                <div className="relative bg-white border border-cobalt-900/12 p-8 sm:p-10 h-full flex flex-col justify-between transition-all duration-300 hover:border-cobalt-700 hover:shadow-card group">
                  {/* Top Signal Indicator Line */}
                  <span className="absolute top-0 left-0 right-0 h-1 bg-cobalt-900/10 group-hover:bg-crimson-600 transition-colors duration-300" />

                  <div>
                    {/* Header: Micro Index & Icon */}
                    <div className="flex items-center justify-between mb-8">
                      <span className="font-mono text-xs font-bold tracking-[0.2em] text-crimson-600 px-2.5 py-1 bg-crimson-50 border border-crimson-100">
                        [{item.index} / 03]
                      </span>
                      <div className="h-10 w-10 flex items-center justify-center border border-cobalt-900/10 text-cobalt-700 bg-paper-warm group-hover:bg-cobalt-700 group-hover:text-white transition-colors duration-300">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>

                    {/* Verbatim Title */}
                    <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-ink mb-4 leading-snug">
                      {item.title}
                    </h3>

                    {/* Verbatim Description */}
                    <p className="text-sm sm:text-base text-ink-muted leading-relaxed mb-8">
                      {item.description}
                    </p>

                    {/* Structural Breakdown Checklist */}
                    <div className="pt-6 border-t border-cobalt-900/10 space-y-3">
                      <div className="font-mono text-[10px] tracking-[0.16em] text-cobalt-800 font-semibold mb-2">
                        UYGULAMA VE DENETİM STANDARDI:
                      </div>
                      {detail.features.map((feature, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-start gap-2.5 text-xs text-ink/80 leading-normal"
                        >
                          <span className="h-4 w-4 rounded-full bg-cobalt-50 text-cobalt-700 flex items-center justify-center shrink-0 mt-0.5 border border-cobalt-700/20">
                            <Check className="h-2.5 w-2.5 text-crimson-600" />
                          </span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom Micro-Ledger Note */}
                  <div className="mt-8 pt-4 border-t border-cobalt-900/10 flex items-center justify-between text-[11px] font-mono text-ink-subtle">
                    <span>AYBAR AKADEMİ STANDARDI</span>
                    <span className="text-crimson-600 font-bold">%100 VERİMLİLİK</span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* 4. FOUNDER'S PHILOSOPHY & INSTITUTIONAL PILLARS                     */}
      {/* -------------------------------------------------------------------- */}
      <section className="bg-paper-warm border-y border-cobalt-900/10 py-20 sm:py-24">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left 5 Columns: Founder Quote Callout */}
            <div className="lg:col-span-5 bg-white border border-cobalt-900/12 p-8 sm:p-10 shadow-sm relative">
              <span
                aria-hidden="true"
                className="font-serif text-8xl text-cobalt-100 leading-none absolute top-4 left-4 select-none pointer-events-none"
              >
                “
              </span>
              <div className="relative z-10 space-y-6">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-cobalt-950 text-white font-mono text-[10px] tracking-[0.16em]">
                  KURUCUMUZUN EĞİTİM FELSEFESİ
                </div>

                <blockquote className="font-serif italic text-xl sm:text-2xl text-cobalt-900 leading-relaxed">
                  “Bizim için eğitim; sadece az sayıda öğrenciye klasik anlamda ders vermek değil, her bir öğrencimizin mentörlüğünü üstlenmek, kaygılarını yönetmek ve eksiklerini nokta atışı tespit etmektir.”
                </blockquote>

                <div className="pt-6 border-t border-cobalt-900/10 flex items-center justify-between">
                  <div>
                    <div className="font-extrabold text-base text-ink">
                      {siteConfig.founder.name}
                    </div>
                    <div className="font-mono text-xs text-crimson-600 font-semibold mt-0.5">
                      {siteConfig.founder.role}
                    </div>
                  </div>
                  <div className="font-mono text-[11px] text-ink-muted">
                    1993 – 2026
                  </div>
                </div>
              </div>
            </div>

            {/* Right 7 Columns: 3 Structural Pedagogy Ledger Cards */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2 mb-6">
                <span className="font-mono text-xs text-crimson-600 font-semibold tracking-[0.16em]">
                  [KURUMSAL İLKELER]
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink">
                  Eğitimde Çeyrek Asrı Aşan Sarsılmaz Standartlarımız
                </h3>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-6 border border-cobalt-900/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs font-mono text-crimson-600 font-bold">
                      <span>01.</span>
                      <span>HEDEF VE SÜREÇ DİSİPLİNİ</span>
                    </div>
                    <div className="text-base font-bold text-ink">
                      Öğrenciye Özel Yol Haritası ve Dashboard
                    </div>
                    <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                      Hangi konunun ne zaman tamamlanacağı, hangi denemede hangi net hedefinin hedeflendiği şeffaf şekilde önceden kurgulanır.
                    </p>
                  </div>
                  <span className="shrink-0 font-mono text-xs text-cobalt-700 bg-cobalt-50 px-3 py-1.5 border border-cobalt-100 font-semibold">
                    TAM ŞEFFAFLIK
                  </span>
                </div>

                <div className="bg-white p-6 border border-cobalt-900/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs font-mono text-crimson-600 font-bold">
                      <span>02.</span>
                      <span>BİLİMSEL ÖĞRENME YÖNTEMLERİ</span>
                    </div>
                    <div className="text-base font-bold text-ink">
                      Flipped Classroom & Active Recall Kartları
                    </div>
                    <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                      Öğrenci derse pasif bir dinleyici olarak değil, ön bilgi sahibi olarak aktif katılır; ders sonu bilgi kartlarıyla kalıcı hafıza pekiştirilir.
                    </p>
                  </div>
                  <span className="shrink-0 font-mono text-xs text-cobalt-700 bg-cobalt-50 px-3 py-1.5 border border-cobalt-100 font-semibold">
                    KALICI HAFIZA
                  </span>
                </div>

                <div className="bg-white p-6 border border-cobalt-900/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs font-mono text-crimson-600 font-bold">
                      <span>03.</span>
                      <span>KORUYUCU REHBERLİK & VELİ KÖPRÜSÜ</span>
                    </div>
                    <div className="text-base font-bold text-ink">
                      Her Ders Sonu WhatsApp Raporu ve Mentorluk
                    </div>
                    <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                      Öğrencinin ödevi, anlık gelişim durumu ve modundaki değişimler veliye anında iletilir; sınav kaygısı anında yönetilir.
                    </p>
                  </div>
                  <span className="shrink-0 font-mono text-xs text-cobalt-700 bg-cobalt-50 px-3 py-1.5 border border-cobalt-100 font-semibold">
                    KESİNTİSİZ RAPOR
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* 5. "EĞİTİMDE SINIR TANIMIYORUZ" REACH SHOWCASE                       */}
      {/* -------------------------------------------------------------------- */}
      <section className="py-20 sm:py-28 max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
        <SwissSectionHeader
          index="02"
          eyebrow="COĞRAFİ KAPSAMA VE DERS FORMATLARI"
          title={aboutContent.reachHeadline}
          subtitle="Zaman ve mekân engellerini ortadan kaldırarak eğitimi öğrencinin en rahat ve verimli olduğu ortama taşıyoruz."
        />

        {/* High-Contrast Split Architectural Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Card A: İstanbul’un Tüm İlçelerinde */}
          <Reveal delay={0.1}>
            <div className="relative bg-white border-2 border-cobalt-900/15 p-8 sm:p-12 h-full flex flex-col justify-between group hover:border-cobalt-800 transition-colors shadow-sm">
              <div>
                <div className="flex items-center justify-between gap-3 mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-cobalt-950 text-white font-mono text-xs font-semibold tracking-wider">
                    <MapPin className="h-3.5 w-3.5 text-crimson-500" />
                    {aboutContent.reachItems[0].code}
                  </span>
                  <span className="font-mono text-xs font-bold text-crimson-600 bg-crimson-50 px-2.5 py-1">
                    39 İLÇE AKTİF
                  </span>
                </div>

                {/* Verbatim Title */}
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink mb-4">
                  {aboutContent.reachItems[0].title}
                </h3>

                {/* Verbatim Description */}
                <p className="text-base text-ink-muted leading-relaxed mb-8">
                  {aboutContent.reachItems[0].description}
                </p>

                {/* Architectural Features List */}
                <div className="space-y-3.5 pt-6 border-t border-cobalt-900/10">
                  {[
                    "İstanbul'un Anadolu ve Avrupa yakasında tüm 39 ilçede geçerli",
                    "Evinizin güvenli, huzurlu ve konforlu çalışma ortamında birebir odak",
                    "Öğrencinin okul ve dinlenme temposuna göre esnek saat planlaması",
                    "Veli ile anlık, yüz yüze iletişim ve ders sonrası değerlendirme",
                    "Zaman kaybettiren yol ve trafik stresinden tamamen arındırılmış eğitim",
                  ].map((feat, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-ink/85">
                      <span className="h-5 w-5 rounded bg-cobalt-50 text-cobalt-700 flex items-center justify-center shrink-0 mt-0.5 border border-cobalt-700/20">
                        <Check className="h-3.5 w-3.5 text-crimson-600" />
                      </span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-cobalt-900/10 flex items-center justify-between">
                <span className="font-mono text-xs text-ink-subtle">
                  FORMAT: BİREBİR YÜZ YÜZE
                </span>
                <Link
                  href="/iletisim"
                  className="font-mono text-xs font-bold text-cobalt-700 hover:text-crimson-600 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Randevu Talep Edin</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Card B: Tüm Türkiye’de Online */}
          <Reveal delay={0.2}>
            <div className="relative bg-cobalt-950 text-white border-2 border-cobalt-800 p-8 sm:p-12 h-full flex flex-col justify-between group hover:border-cobalt-700 transition-colors shadow-studio">
              <div>
                <div className="flex items-center justify-between gap-3 mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-crimson-600 text-white font-mono text-xs font-semibold tracking-wider">
                    <Globe2 className="h-3.5 w-3.5" />
                    {aboutContent.reachItems[1].code}
                  </span>
                  <span className="font-mono text-xs font-bold text-cobalt-200 bg-white/10 px-2.5 py-1">
                    81 İL ERİŞİM
                  </span>
                </div>

                {/* Verbatim Title */}
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-4">
                  {aboutContent.reachItems[1].title}
                </h3>

                {/* Verbatim Description */}
                <p className="text-base text-cobalt-100/85 leading-relaxed mb-8">
                  {aboutContent.reachItems[1].description}
                </p>

                {/* Architectural Features List */}
                <div className="space-y-3.5 pt-6 border-t border-white/15">
                  {[
                    "Grafik tablet, interaktif dijital tahta ve soru çözüm platformları",
                    "Derslerin HD kalitesinde kaydı ile sınav öncesi sınırsız tekrar imkânı",
                    "Türkiye'nin 81 ilinden kurumun en kıdemli branş öğretmenlerine erişim",
                    "Dijital ödev teslimi, anlık soru hattı ve PDF kaynak kütüphanesi",
                    "Coğrafi engelleri aşan, yüksek verimli ve zaman kazandıran süreç",
                  ].map((feat, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-cobalt-100">
                      <span className="h-5 w-5 rounded bg-white/10 text-white flex items-center justify-center shrink-0 mt-0.5 border border-white/20">
                        <Check className="h-3.5 w-3.5 text-crimson-500" />
                      </span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-white/15 flex items-center justify-between">
                <span className="font-mono text-xs text-cobalt-300">
                  FORMAT: İNTERAKTİF CANLI ONLINE
                </span>
                <a
                  href={getWhatsAppUrl("Merhaba, tüm Türkiye canlı online özel ders programınız hakkında bilgi almak istiyorum.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs font-bold text-crimson-400 hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Online Bilgi Alın</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* 6. EDITORIAL CLOSING CALLOUT LEDGER                                */}
        {/* ------------------------------------------------------------------ */}
        <Reveal delay={0.25}>
          <div className="bg-paper-tint border-2 border-cobalt-700/25 p-8 sm:p-12 relative overflow-hidden">
            {/* Architectural Hairline Crosshairs */}
            <span
              aria-hidden="true"
              className="absolute top-3 left-3 font-mono text-xs text-crimson-600 select-none"
            >
              +
            </span>
            <span
              aria-hidden="true"
              className="absolute top-3 right-3 font-mono text-xs text-crimson-600 select-none"
            >
              +
            </span>
            <span
              aria-hidden="true"
              className="absolute bottom-3 left-3 font-mono text-xs text-crimson-600 select-none"
            >
              +
            </span>
            <span
              aria-hidden="true"
              className="absolute bottom-3 right-3 font-mono text-xs text-crimson-600 select-none"
            >
              +
            </span>

            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-crimson-600 text-white font-mono text-[11px] font-semibold tracking-[0.16em]">
                GELECEĞİN MİMARİSİ
              </div>

              {/* Verbatim Closing Paragraph in Scholarly Editorial Serif */}
              <blockquote className="font-serif italic text-lg sm:text-2xl text-cobalt-950 leading-relaxed font-normal">
                “{aboutContent.closingParagraph}”
              </blockquote>

              <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
                <MagneticLink
                  href="/egitim-programlarimiz"
                  variant="cobalt"
                >
                  Eğitim Programlarımızı İnceleyin
                </MagneticLink>

                <MagneticLink
                  href={getWhatsAppUrl("Merhaba, Aybar Akademi hakkında detaylı bilgi ve 30 dakikalık ücretsiz tanışma seansı randevusu rica ediyorum.")}
                  external
                  variant="crimson"
                >
                  30 Dk Ücretsiz Tanışma Seansı
                </MagneticLink>

                <MagneticLink
                  href="/iletisim"
                  variant="outline-dark"
                >
                  İletişim & Başvuru Formu
                </MagneticLink>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* 7. ARCHITECTURAL PARALLAX WATERMARK                                  */}
      {/* -------------------------------------------------------------------- */}
      <ParallaxWatermark
        text="AYBAR AKADEMİ 1993"
        className="opacity-5 pb-8 text-cobalt-950"
      />
    </div>
  );
}
