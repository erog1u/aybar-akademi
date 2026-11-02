"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  ShieldCheck,
  Compass,
  Target,
  Users,
  ArrowRight,
  ArrowLeft,
  ArrowDown,
  GraduationCap,
  Award,
  CalendarCheck,
  Clock,
  Brain,
  Sparkles,
  MessageCircle,
  HeartHandshake,
  School,
  XCircle,
  CheckCircle2,
  SlidersHorizontal,
  LayoutList,
  ChevronRight,
} from "lucide-react";
import { educationModelContent } from "@/data/content";
import { getWhatsAppUrl } from "@/config/site";
import {
  MaskedLines,
  Reveal,
  MagneticLink,
  NextChapterBanner,
  SpotlightCard,
  LUXURY_EASE,
} from "@/components/motion/Primitives";
import { AybarCrestEmblem } from "@/components/brand/AybarCrest";

interface StageMeta {
  shortTitle: string;
  image: string;
  alt: string;
  badge: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  pointIcons: React.ComponentType<{ className?: string }>[];
}

const STAGE_CONFIG: StageMeta[] = [
  {
    shortTitle: "VIP Süreç Yönetimi",
    image: "/images/hero-one-on-one.jpg",
    alt: "Aybar Akademi Birebir VIP Süreç Yönetimi",
    badge: "1. AŞAMA",
    subtitle: "Kişiye Özel Eğitim Felsefesi & Esnek Format",
    icon: ShieldCheck,
    pointIcons: [GraduationCap, Award, CalendarCheck],
  },
  {
    shortTitle: "Eğitim Koçluğu",
    image: "/images/vip-mentorship.jpg",
    alt: "Aybar Akademi Profesyonel Eğitim Koçluğu",
    badge: "2. AŞAMA",
    subtitle: "Zaman Yönetimi, Erteleme & Stres Kontrolü",
    icon: Compass,
    pointIcons: [Clock, Target, Brain, Compass],
  },
  {
    shortTitle: "Modelin Temel Taşları",
    image: "/images/maarif-student.jpg",
    alt: "Aybar Akademi Modelinin 4 Temel Taşı",
    badge: "3. AŞAMA",
    subtitle: "Hedef, Strateji, İçsel İstek & Performans",
    icon: Target,
    pointIcons: [Target, Sparkles, Brain, CalendarCheck],
  },
  {
    shortTitle: "Aile – Veli – Okul Köprüsü",
    image: "/images/model-coaching-bridge.jpg",
    alt: "Aile, Veli ve Okul Arasında Güçlü Köprü",
    badge: "4. AŞAMA",
    subtitle: "Şeffaf Bilgilendirme & Pedagojik Rehberlik",
    icon: Users,
    pointIcons: [MessageCircle, HeartHandshake],
  },
];

const ECOSYSTEM_PILLARS = [
  {
    id: 0,
    title: "Uzman Branş Öğretmeni",
    tagline: "Maarif Modeline %100 Hâkim Anlatım",
    role: "Ders İçi Akademik Liderlik",
    icon: GraduationCap,
    description:
      "Yalnızca ders anlatan değil; öğrencinin bireysel öğrenme stiline göre konuyu yapılandıran, yeni nesil soru kalıplarına ve MEB Maarif Modeline tam hâkim kıdemli öğretmen kadrosu.",
    concreteBenefit:
      "Ezber kalıpları yerine mantığı kavratan interaktif soru çözümleri ve anlık geri bildirimler uygulanır.",
    stageJumpIndex: 0,
  },
  {
    id: 1,
    title: "Profesyonel Eğitim Koçu",
    tagline: "Motivasyon, Zaman Yönetimi ve Sınav Stratejisi",
    role: "Kişisel & Psikolojik Mentorluk",
    icon: Compass,
    description:
      "Ders dışı çalışma disiplinini kuran, sınav kaygısını ve ertelemeyi bilimsel yöntemlerle çözen, öğrencinin hedeflerine yürürken içsel motivasyonunu sürekli diri tutan yol arkadaşı.",
    concreteBenefit:
      "Kişiye özel haftalık VIP ders programı hazırlanır; zaman yönetimi ve çalışma verimi düzenli denetlenir.",
    stageJumpIndex: 1,
  },
  {
    id: 2,
    title: "Aile & Veli İletişimi",
    tagline: "Şeffaf Ders Sonu Bilgilendirme & Aylık Gelişim Analizi",
    role: "Pedagojik Veli İş Birliği",
    icon: Users,
    description:
      "Aileler çocuklarının gelişiminden her an haberdar edilir. Evdeki çalışma ortamının verimli ve huzurlu olması için veliye objektif, pedagojik rehberlik sağlanır.",
    concreteBenefit:
      "Her ders sonu veliye net rapor iletilir; aylık deneme ve gelişim grafikleriyle süreç şeffaf tutulur.",
    stageJumpIndex: 3,
  },
  {
    id: 3,
    title: "Okul Müfredatı Uyumu",
    tagline: "Okul Sınavları ve Merkezi Sınavlarla Eşgüdümlü İlerleyiş",
    role: "Müfredat & Sınav Senkronizasyonu",
    icon: School,
    description:
      "Öğrencinin okuldaki yazılı sınavları, ödevleri ve MEB müfredatı ile LGS / YKS / ALES / KPSS hazırlık maratonu birbirini engellemeden, eş zamanlı başarı üretecek şekilde senkronize edilir.",
    concreteBenefit:
      "Okul yazılılarında yüksek not ortalaması sağlanırken, merkezi sınavlardaki yeni nesil soru netleri eş zamanlı yükseltilir.",
    stageJumpIndex: 2,
  },
];

const COMPARISON_ROWS = [
  {
    title: "Planlama & Ders Programı",
    standard:
      "Rastgele belirlenen ders saatleri; öğrencinin okul sınavlarından, denemelerinden ve biyolojik ritminden kopuk düzensiz ilerleyiş.",
    aybar:
      "Kişiye özel haftalık VIP ders takvimi; okul yazılıları ve merkezi sınav maratonuyla %100 senkronize, esnek çalışma programı.",
  },
  {
    title: "Öğretmen Yaklaşımı & Metot",
    standard:
      "Yalnızca konu anlatıp süreyi dolduran, öğrencinin anlama hızını veya algılama stilini gözetmeyen tek taraflı monolog anlatım.",
    aybar:
      "Yeni nesil Maarif Modeline hâkim uzman öğretmen; Active Recall, soru çözümü ve rehberlikle öğrenciye birebir liderlik.",
  },
  {
    title: "Süreç, Ödev & Hata Takibi",
    standard:
      "Ders bitince sona eren iletişim; kontrol edilmeyen ödevler, biriken konu eksikleri ve sınavda tekrarlanan hatalar.",
    aybar:
      "Verilen her sorumluluk adım adım takip edilir; Dijital Hata Defteri ile çözülemeyen sorular sıfırlanana kadar telafi edilir.",
  },
  {
    title: "Aile & Veli İletişimi",
    standard:
      "Yalnızca ödeme veya dönem sonlarında yüzeysel bilgilendirme; velinin öğrencinin gerçek gelişiminden habersiz kalması.",
    aybar:
      "Her ders bitiminde net raporlama, aylık gelişim analizi ve evdeki huzuru koruyan objektif pedagojik veli rehberliği.",
  },
  {
    title: "Sınav Kaygısı & Psikolojik Destek",
    standard:
      "Yalnızca akademik bilgi yükleme; stres, sınav kaygısı, odaklanma sorunları ve erteleme alışkanlığının tamamen göz ardı edilmesi.",
    aybar:
      "Profesyonel Eğitim Koçluğu desteği; sınav stresinin yönetimi, motivasyon inşası ve kriz anlarında stratejik mentörlük.",
  },
];

export default function EgitimModelimizPage() {
  const [activeStage, setActiveStage] = useState<number>(0);
  const [viewMode, setViewMode] = useState<"stepper" | "all">("stepper");
  const [activePillar, setActivePillar] = useState<number>(0);

  const currentSec = educationModelContent.sections[activeStage];
  const currentConfig = STAGE_CONFIG[activeStage];
  const CurrentIcon = currentConfig.icon;
  const currentPillar = ECOSYSTEM_PILLARS[activePillar];
  const CurrentPillarIcon = currentPillar.icon;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleStageSelect = (idx: number) => {
    setActiveStage(idx);
    setViewMode("stepper");
  };

  return (
    <div className="bg-paper text-ink selection:bg-crimson-600 selection:text-white">
      {/* ==================================================================== */}
      {/* 1. COBALT STUDIO HERO WITH ROADMAP PREVIEW                           */}
      {/* ==================================================================== */}
      <section className="relative studio-hero text-white border-b border-white/15 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -bottom-20 text-white/[0.06]"
        >
          <AybarCrestEmblem variant="watermark" className="h-[480px] w-[480px]" />
        </div>

        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column (Hero Content) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-crimson-600 text-white text-[13.5px] sm:text-sm font-bold mb-6 shadow-crimson">
                <Check className="h-4 w-4" />
                <span>{educationModelContent.eyebrow}</span>
              </div>

              <MaskedLines
                as="h1"
                immediate
                className="text-[2.15rem] sm:text-5xl lg:text-[3.6rem] font-extrabold tracking-tightest leading-[1.08]"
                lines={[
                  "VIP Süreç Yönetimi ve",
                  <span key="hl" className="font-serif italic font-medium text-cobalt-200">
                    Bütüncül Rehberlik Platformu
                  </span>,
                ]}
              />

              <p className="mt-6 text-base sm:text-lg lg:text-xl text-cobalt-50/95 leading-relaxed max-w-2xl font-normal">
                {educationModelContent.lead}
              </p>

              {/* 2 Guided Buttons */}
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="#interaktif-model"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("interaktif-model");
                  }}
                  className="group inline-flex items-center justify-center gap-3 px-7 py-4 bg-crimson-600 text-white hover:bg-crimson-700 shadow-crimson text-[14px] sm:text-[15px] font-bold tracking-tight transition-all duration-300 border border-crimson-500 cursor-pointer min-h-[48px]"
                >
                  <span>Modeli Adım Adım Keşfet</span>
                  <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
                </a>

                <MagneticLink
                  href={getWhatsAppUrl()}
                  external
                  variant="outline-light"
                  className="!text-[14px] sm:!text-[15px] !py-4 min-h-[48px]"
                >
                  30 Dk Ücretsiz Tanışma Planla
                </MagneticLink>
              </div>
            </div>

            {/* Right Column (Studio Photo Card with Overlaid Roadmap Bar) */}
            <div className="lg:col-span-5 w-full">
              <div className="bg-white p-3 sm:p-4 border border-white/25 shadow-studio">
                <div className="relative aspect-[4/3] overflow-hidden bg-cobalt-950">
                  <img
                    src="/images/vip-mentorship.jpg"
                    alt="Aybar Akademi VIP Süreç Yönetimi ve Eğitim Koçluğu"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-cobalt-950/90 text-white text-[11px] sm:text-xs font-mono font-bold tracking-wider uppercase border border-white/20">
                    VIP SÜREÇ YÖNETİMİ
                  </div>
                </div>

                {/* Overlaid 4-Stage Visual Roadmap Bar */}
                <div className="mt-3 pt-2.5 border-t border-cobalt-900/10">
                  <div className="text-[11px] sm:text-[12px] font-mono font-bold tracking-wider text-cobalt-800 uppercase px-1 mb-2 flex items-center justify-between">
                    <span>4 AŞAMALI YOL HARİTASI</span>
                    <span className="text-crimson-600 font-extrabold">TIKLA & İNCELE</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                    {STAGE_CONFIG.map((stg, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => {
                          handleStageSelect(idx);
                          scrollToSection("interaktif-model");
                        }}
                        className={`p-2.5 text-left transition-all border cursor-pointer min-h-[48px] ${
                          activeStage === idx
                            ? "bg-cobalt-900 border-crimson-500 shadow-sm"
                            : "bg-cobalt-950 hover:bg-cobalt-900/80 border-white/10"
                        }`}
                      >
                        <div className="text-[11px] font-mono text-crimson-400 font-bold">
                          0{idx + 1}
                        </div>
                        <div className="text-[12px] font-bold text-white leading-tight mt-0.5 line-clamp-1">
                          {stg.shortTitle}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-2.5 py-2 px-3 bg-cobalt-950 text-white flex items-center justify-between text-[11px] sm:text-xs font-bold tracking-wider uppercase border-t border-white/10">
                  <span className="text-cobalt-100">KİŞİYE ÖZEL MİMARİ</span>
                  <span className="text-crimson-500 font-black">·</span>
                  <span className="text-cobalt-100">BİREBİR EĞİTİM KOÇLUĞU</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 2. INTERACTIVE GUIDED STEPPER — 4 STAGES                             */}
      {/* ==================================================================== */}
      <section
        id="interaktif-model"
        className="py-16 sm:py-20 lg:py-26 border-b border-cobalt-900/10 scroll-mt-10"
      >
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
          {/* Section Header with View Toggle */}
          <div className="pb-8 mb-8 sm:mb-10 border-b border-cobalt-900/12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-cobalt-100 text-cobalt-900 text-[13.5px] sm:text-sm font-bold tracking-tight mb-3.5 border border-cobalt-200">
                <span className="h-2 w-2 bg-crimson-600 inline-block" />
                <span>ADIM ADIM REHBERLİK SÜRECİ</span>
              </div>

              <h2 className="text-[1.75rem] sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-tightest leading-[1.12] text-ink">
                Adım Adım Aybar Akademi Eğitim Modeli
              </h2>

              <p className="mt-3.5 text-[15px] sm:text-lg leading-relaxed text-ink-muted">
                Standart ve pasif anlatım yerine, her öğrencinin potansiyelini zirveye taşıyan 4 kritik aşamayı sırasıyla keşfedin.
              </p>
            </div>

            {/* Mode Switcher: Stepper vs All */}
            <div className="inline-flex p-1 bg-paper-warm border border-cobalt-900/15 shrink-0 self-start lg:self-end">
              <button
                type="button"
                onClick={() => setViewMode("stepper")}
                className={`inline-flex items-center gap-2 px-4 py-2.5 text-[13.5px] sm:text-sm font-bold transition-all cursor-pointer min-h-[42px] ${
                  viewMode === "stepper"
                    ? "bg-cobalt-900 text-white shadow-sm"
                    : "text-ink-muted hover:text-ink hover:bg-white"
                }`}
              >
                <SlidersHorizontal className="h-4 w-4" />
                <span>Adım Adım Keşfet</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode("all")}
                className={`inline-flex items-center gap-2 px-4 py-2.5 text-[13.5px] sm:text-sm font-bold transition-all cursor-pointer min-h-[42px] ${
                  viewMode === "all"
                    ? "bg-cobalt-900 text-white shadow-sm"
                    : "text-ink-muted hover:text-ink hover:bg-white"
                }`}
              >
                <LayoutList className="h-4 w-4" />
                <span>Tüm Aşamaları İncele</span>
              </button>
            </div>
          </div>

          {/* 4 Tactile Stage Selector Tabs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5 mb-6">
            {educationModelContent.sections.map((sec, idx) => {
              const isSelected = viewMode === "stepper" && activeStage === idx;
              const config = STAGE_CONFIG[idx];
              const Icon = config.icon;

              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleStageSelect(idx)}
                  className={`text-left p-3.5 sm:p-5 border transition-all duration-200 cursor-pointer min-h-[64px] sm:min-h-[76px] flex flex-col justify-between ${
                    isSelected
                      ? "bg-cobalt-900 text-white border-crimson-600 shadow-md ring-2 ring-crimson-600/40"
                      : "bg-white text-ink border-cobalt-900/15 hover:border-cobalt-900/40 hover:bg-cobalt-50/50"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span
                      className={`text-[12px] sm:text-[13px] font-mono font-bold px-2 py-0.5 ${
                        isSelected
                          ? "bg-crimson-600 text-white"
                          : "bg-cobalt-100 text-cobalt-900"
                      }`}
                    >
                      0{idx + 1}. AŞAMA
                    </span>
                    <Icon
                      className={`h-4 w-4 shrink-0 ${
                        isSelected ? "text-crimson-400" : "text-cobalt-700"
                      }`}
                    />
                  </div>
                  <div className="text-[13.5px] sm:text-sm md:text-[15px] font-extrabold leading-tight">
                    {config.shortTitle}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Stepper Progress Bar (Active in Stepper Mode) */}
          {viewMode === "stepper" && (
            <div className="mb-8 bg-white p-3.5 sm:p-4 border border-cobalt-900/12 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="h-2.5 w-2.5 bg-crimson-600 inline-block animate-pulse shrink-0" />
                <span className="text-[13.5px] sm:text-sm font-bold text-ink">
                  Aşama {activeStage + 1} / 4:{" "}
                  <span className="text-cobalt-900 font-extrabold">
                    {STAGE_CONFIG[activeStage].shortTitle}
                  </span>
                </span>
              </div>
              <div className="w-full sm:w-56 h-2.5 bg-cobalt-100 overflow-hidden">
                <div
                  className="h-full bg-crimson-600 transition-all duration-300"
                  style={{ width: `${((activeStage + 1) / 4) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* MODE 1: INTERACTIVE STEPPER SHOWCASE */}
          {viewMode === "stepper" && (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.35, ease: LUXURY_EASE }}
                className="bg-white border border-cobalt-900/15 shadow-card p-6 sm:p-8 lg:p-12"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  {/* Left Column: Visual & Stage Summary */}
                  <div className="lg:col-span-5 space-y-5">
                    <div className="bg-paper-warm p-2.5 sm:p-3 border border-cobalt-900/15 shadow-sm">
                      <div className="relative aspect-[4/3] overflow-hidden bg-cobalt-950">
                        <img
                          src={currentConfig.image}
                          alt={currentConfig.alt}
                          onError={(e) => {
                            e.currentTarget.src = "/images/vip-mentorship.jpg";
                          }}
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                        <div className="absolute top-3 left-3 px-3 py-1 bg-cobalt-950/90 text-white text-[12px] font-bold border border-white/20">
                          {currentConfig.badge}
                        </div>
                      </div>
                      <div className="py-2 px-2.5 bg-cobalt-950 text-white flex items-center justify-between text-[11px] sm:text-xs font-mono font-bold mt-2 uppercase">
                        <span className="text-cobalt-200">{currentConfig.subtitle}</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-crimson-600 text-white text-[13.5px] font-bold mb-3 shadow-crimson">
                        <CurrentIcon className="h-3.5 w-3.5" />
                        <span>0{activeStage + 1}. Bölüm Standardı</span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tightest leading-tight text-ink">
                        {currentSec.title}
                      </h3>

                      <p className="mt-3.5 text-[15px] sm:text-base leading-relaxed text-ink-muted">
                        {currentSec.intro}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Verbatim Points as Rich Cards */}
                  <div className="lg:col-span-7 space-y-4">
                    {currentSec.points.map((pt, pIdx) => {
                      const PointIcon =
                        currentConfig.pointIcons[pIdx % currentConfig.pointIcons.length] || Check;

                      return (
                        <SpotlightCard
                          key={pIdx}
                          glowColor="rgba(0, 68, 181, 0.08)"
                          className="p-5 sm:p-6 bg-paper-warm border border-cobalt-900/12 shadow-sm"
                        >
                          <div className="flex items-start gap-4">
                            <div className="h-10 w-10 shrink-0 bg-cobalt-900 text-white flex items-center justify-center font-bold text-sm shadow-sm">
                              <PointIcon className="h-5 w-5 text-crimson-400" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-[12px] font-mono font-bold text-crimson-600 uppercase">
                                  0{activeStage + 1} · 0{pIdx + 1}
                                </span>
                              </div>
                              <h4 className="text-lg sm:text-xl font-extrabold text-ink tracking-tight">
                                {pt.label}
                              </h4>
                              <p className="mt-2 text-[15px] sm:text-base leading-relaxed text-ink-muted">
                                {pt.text}
                              </p>
                            </div>
                          </div>
                        </SpotlightCard>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom Guided Navigation Bar inside Explorer */}
                <div className="mt-10 pt-6 border-t border-cobalt-900/15 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <button
                    type="button"
                    disabled={activeStage === 0}
                    onClick={() => {
                      if (activeStage > 0) {
                        setActiveStage(activeStage - 1);
                      }
                    }}
                    className={`inline-flex items-center justify-center gap-2 px-5 py-3.5 text-[14px] sm:text-base font-bold border transition-colors min-h-[46px] ${
                      activeStage === 0
                        ? "border-cobalt-900/10 text-ink-muted/40 cursor-not-allowed bg-paper-warm"
                        : "border-cobalt-900/20 text-cobalt-900 bg-white hover:bg-cobalt-50 hover:border-cobalt-700 cursor-pointer"
                    }`}
                  >
                    <ArrowLeft className="h-4 w-4" />
                    <span>Önceki Aşama</span>
                  </button>

                  <div className="hidden md:flex items-center gap-2">
                    {[0, 1, 2, 3].map((dot) => (
                      <button
                        key={dot}
                        type="button"
                        onClick={() => setActiveStage(dot)}
                        className={`h-2.5 rounded-full transition-all cursor-pointer ${
                          dot === activeStage
                            ? "w-8 bg-crimson-600"
                            : "w-2.5 bg-cobalt-200 hover:bg-cobalt-400"
                        }`}
                        aria-label={`Aşama ${dot + 1}`}
                      />
                    ))}
                  </div>

                  {activeStage < 3 ? (
                    <button
                      type="button"
                      onClick={() => {
                        setActiveStage(activeStage + 1);
                      }}
                      className="inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-crimson-600 text-white hover:bg-crimson-700 shadow-crimson text-[14px] sm:text-base font-bold tracking-tight transition-colors cursor-pointer min-h-[46px]"
                    >
                      <span>
                        Sonraki Aşamaya Geç: 0{activeStage + 2} {STAGE_CONFIG[activeStage + 1].shortTitle}
                      </span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  ) : (
                    <Link
                      href="/neden-farkliyiz"
                      className="inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-crimson-600 text-white hover:bg-crimson-700 shadow-crimson text-[14px] sm:text-base font-bold tracking-tight transition-colors min-h-[46px]"
                    >
                      <span>5 Standart İlkemizi İncele</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          )}

          {/* MODE 2: ACCESSIBLE COMPLETE VIEW (ALL 4 STAGES SIMULTANEOUSLY) */}
          {viewMode === "all" && (
            <div className="space-y-10 sm:space-y-12">
              {educationModelContent.sections.map((sec, idx) => {
                const config = STAGE_CONFIG[idx];
                const Icon = config.icon;
                const isDark = idx % 2 === 1;

                return (
                  <Reveal key={idx}>
                    <div
                      className={`border shadow-card p-6 sm:p-10 lg:p-12 ${
                        isDark
                          ? "bg-cobalt-950 text-white border-cobalt-900"
                          : "bg-white text-ink border-cobalt-900/15"
                      }`}
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                        {/* Left Title Column */}
                        <div className="lg:col-span-5 space-y-4">
                          <div className="inline-flex items-center gap-2 px-3 py-1 bg-crimson-600 text-white text-[13.5px] font-bold shadow-crimson">
                            <Icon className="h-3.5 w-3.5" />
                            <span>0{idx + 1}. Aşama: {config.shortTitle}</span>
                          </div>

                          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tightest leading-tight">
                            {sec.title}
                          </h3>

                          <p
                            className={`text-[15px] sm:text-base leading-relaxed ${
                              isDark ? "text-cobalt-100/90" : "text-ink-muted"
                            }`}
                          >
                            {sec.intro}
                          </p>
                        </div>

                        {/* Right Points Grid */}
                        <div className="lg:col-span-7 grid grid-cols-1 gap-4">
                          {sec.points.map((pt, pIdx) => {
                            const PointIcon =
                              config.pointIcons[pIdx % config.pointIcons.length] || Check;

                            return (
                              <SpotlightCard
                                key={pIdx}
                                glowColor={
                                  isDark
                                    ? "rgba(56, 139, 255, 0.2)"
                                    : "rgba(0, 68, 181, 0.08)"
                                }
                                className={`p-5 sm:p-6 border ${
                                  isDark
                                    ? "bg-cobalt-900/60 border-white/12"
                                    : "bg-paper border-cobalt-900/10"
                                }`}
                              >
                                <div className="flex items-start gap-4">
                                  <div
                                    className={`h-9 w-9 shrink-0 flex items-center justify-center font-bold text-sm ${
                                      isDark
                                        ? "bg-cobalt-800 text-crimson-400"
                                        : "bg-cobalt-100 text-cobalt-900"
                                    }`}
                                  >
                                    <PointIcon className="h-4 w-4" />
                                  </div>
                                  <div>
                                    <h4 className="text-lg sm:text-xl font-extrabold tracking-tight">
                                      {pt.label}
                                    </h4>
                                    <p
                                      className={`mt-2 text-[15px] sm:text-base leading-relaxed ${
                                        isDark ? "text-cobalt-100/90" : "text-ink-muted"
                                      }`}
                                    >
                                      {pt.text}
                                    </p>
                                  </div>
                                </div>
                              </SpotlightCard>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}

              <div className="text-center pt-4">
                <button
                  type="button"
                  onClick={() => setViewMode("stepper")}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-cobalt-900 text-white font-bold text-[14px] sm:text-base hover:bg-cobalt-800 transition-colors cursor-pointer"
                >
                  <SlidersHorizontal className="h-4 w-4" />
                  <span>Adım Adım İnteraktif Rehber Moduna Dön</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 3. INTERACTIVE VISUAL ECOSYSTEM DIAGRAM — 4 YÖNLÜ BAŞARI KÖPRÜSÜ     */}
      {/* ==================================================================== */}
      <section className="bg-cobalt-950 text-white py-16 sm:py-20 lg:py-26 border-b border-white/10 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 -bottom-24 text-white/[0.04]"
        >
          <AybarCrestEmblem variant="watermark" className="h-[520px] w-[520px]" />
        </div>

        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          {/* Section Header */}
          <div className="pb-8 mb-10 sm:mb-12 border-b border-white/15">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-crimson-600 text-white text-[13.5px] sm:text-sm font-bold tracking-tight mb-4 shadow-crimson">
              <span className="h-2 w-2 bg-white inline-block" />
              <span>BÜTÜNCÜL REHBERLİK EKOSİSTEMİ</span>
            </div>

            <h2 className="text-[1.75rem] sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-tightest leading-[1.12] text-white">
              4 Yönlü Başarı Köprüsü
            </h2>

            <p className="mt-3.5 text-[15px] sm:text-lg leading-relaxed text-cobalt-100/90 max-w-3xl">
              Başarı yalnızca tek taraflı bir ders anlatımı değildir. Aybar Akademi&apos;de öğrenci merkezdedir; öğretmen, koç, aile ve okul senkronize çalışarak sıfır hata ile hedefe ulaşır.
            </p>
          </div>

          {/* Architectural Visual Diagram Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left 4 Clickable Pillars Grid (7 cols) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ECOSYSTEM_PILLARS.map((p) => {
                const isSelected = activePillar === p.id;
                const Icon = p.icon;

                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setActivePillar(p.id)}
                    className={`text-left p-5 sm:p-6 border transition-all duration-300 cursor-pointer min-h-[140px] flex flex-col justify-between group ${
                      isSelected
                        ? "bg-cobalt-900 border-crimson-500 shadow-crimson/20 ring-2 ring-crimson-500/50"
                        : "bg-cobalt-900/40 border-white/15 hover:bg-cobalt-900 hover:border-white/30"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-2.5">
                        <span
                          className={`text-[12px] font-mono font-bold px-2 py-0.5 ${
                            isSelected
                              ? "bg-crimson-600 text-white"
                              : "bg-white/10 text-cobalt-200"
                          }`}
                        >
                          KUTUP 0{p.id + 1}
                        </span>
                        <Icon
                          className={`h-5 w-5 ${
                            isSelected ? "text-crimson-400" : "text-cobalt-300 group-hover:text-white"
                          }`}
                        />
                      </div>
                      <h4 className="text-lg sm:text-xl font-extrabold tracking-tight text-white leading-snug">
                        {p.title}
                      </h4>
                      <div className="text-[13.5px] font-medium text-cobalt-200/90 mt-1">
                        {p.tagline}
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[12px] font-bold uppercase tracking-wider text-cobalt-300">
                      <span>{p.role}</span>
                      <ChevronRight
                        className={`h-4 w-4 transition-transform ${
                          isSelected ? "text-crimson-400 translate-x-1" : "text-white/40"
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Central Hub Box (5 cols) */}
            <div className="lg:col-span-5">
              <div className="bg-cobalt-900 border-2 border-white/20 p-6 sm:p-8 shadow-studio relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-crimson-600/10 rounded-full blur-2xl pointer-events-none" />

                <div className="inline-flex items-center gap-2 px-3 py-1 bg-crimson-600 text-white text-[12px] font-mono font-bold uppercase tracking-wider mb-4">
                  <span>MERKEZDEKİ DEĞER</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                  ÖĞRENCİ
                </h3>
                <div className="text-base sm:text-lg font-serif italic text-cobalt-200 mt-1">
                  Bireysel Potansiyel & Tam Öğrenme
                </div>

                <p className="mt-4 text-[15px] sm:text-base text-cobalt-100/90 leading-relaxed">
                  Tüm sistem tek bir öğrencinin kalıcı başarısı, zihinsel disiplini ve özgüveni için 360 derece senkronize edilir. Ezber ve yalnızlık ortadan kalkar.
                </p>

                <div className="mt-6 pt-5 border-t border-white/15 space-y-2.5">
                  <div className="flex items-center gap-2.5 text-[13.5px] sm:text-sm font-semibold text-white">
                    <CheckCircle2 className="h-4 w-4 text-crimson-400 shrink-0" />
                    <span>Öğrencinin anlama hızına göre esnek tempo</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-[13.5px] sm:text-sm font-semibold text-white">
                    <CheckCircle2 className="h-4 w-4 text-crimson-400 shrink-0" />
                    <span>Okul ve merkezi sınavlarla %100 uyum</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-[13.5px] sm:text-sm font-semibold text-white">
                    <CheckCircle2 className="h-4 w-4 text-crimson-400 shrink-0" />
                    <span>Haftalık denetim ve şeffaf aile bilgilendirmesi</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Active Pillar Concrete Detail Showcase */}
          <div className="mt-8 bg-cobalt-900/90 border border-white/20 p-6 sm:p-8 shadow-card">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-crimson-600 text-white flex items-center justify-center font-bold">
                    <CurrentPillarIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[12px] font-mono font-bold uppercase tracking-wider text-crimson-400">
                      {currentPillar.role}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                      {currentPillar.title}
                    </h3>
                  </div>
                </div>

                <p className="text-[15px] sm:text-base text-cobalt-100/95 leading-relaxed">
                  {currentPillar.description}
                </p>

                <div className="p-3.5 bg-cobalt-950 border border-white/10 flex items-start gap-3">
                  <Check className="h-5 w-5 text-crimson-400 shrink-0 mt-0.5" />
                  <div className="text-[14px] sm:text-[15px] text-white">
                    <span className="font-extrabold text-crimson-300">Somut Aybar Katkısı: </span>
                    {currentPillar.concreteBenefit}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                <button
                  type="button"
                  onClick={() => {
                    handleStageSelect(currentPillar.stageJumpIndex);
                    scrollToSection("interaktif-model");
                  }}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white text-cobalt-900 font-bold text-[14px] sm:text-base hover:bg-cobalt-50 transition-colors cursor-pointer min-h-[46px]"
                >
                  <span>Aşama Detayını Gör</span>
                  <ArrowUpRightIcon />
                </button>

                <a
                  href={getWhatsAppUrl(`Merhaba, ${currentPillar.title} ve Aybar Akademi eğitim modeli hakkında bilgi almak istiyorum.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-crimson-600 text-white font-bold text-[14px] sm:text-base hover:bg-crimson-700 shadow-crimson transition-colors cursor-pointer min-h-[46px]"
                >
                  <span>Koçluk Detayı Sor</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 4. VISUAL COMPARISON — STANDART DERS vs. AYBAR AKADEMİ               */}
      {/* ==================================================================== */}
      <section className="py-16 sm:py-20 lg:py-26 border-b border-cobalt-900/10">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="pb-8 mb-10 sm:mb-12 border-b border-cobalt-900/12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-cobalt-100 text-cobalt-900 text-[13.5px] sm:text-sm font-bold tracking-tight mb-3.5 border border-cobalt-200">
              <span className="h-2 w-2 bg-crimson-600 inline-block" />
              <span>NET STANDART KARŞILAŞTIRMASI</span>
            </div>

            <h2 className="text-[1.75rem] sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-tightest leading-[1.12] text-ink">
              Standart Özel Ders vs. Aybar Akademi VIP Süreç Yönetimi
            </h2>

            <p className="mt-3.5 text-[15px] sm:text-lg leading-relaxed text-ink-muted max-w-3xl">
              Klasik saat doldurma dersleri ile öğrenciyi adım adım hedefe ulaştıran profesyonel mühendislik modeli arasındaki 5 temel fark.
            </p>
          </div>

          {/* Comparison Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Column 1: Klasik Standart Özel Ders */}
            <div className="bg-paper-warm border border-cobalt-900/15 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-cobalt-900/12 mb-6">
                  <div>
                    <span className="text-[12px] font-mono font-bold text-ink-muted uppercase">
                      GELENEKSEL YAKLAŞIM
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-ink mt-0.5">
                      Standart Özel Ders
                    </h3>
                  </div>
                  <XCircle className="h-8 w-8 text-slate-400 shrink-0" />
                </div>

                <div className="space-y-6">
                  {COMPARISON_ROWS.map((row, idx) => (
                    <div key={idx} className="pb-5 border-b border-cobalt-900/10 last:border-b-0 last:pb-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <XCircle className="h-4 w-4 text-red-500/80 shrink-0" />
                        <span className="text-[13.5px] font-bold text-ink-muted uppercase tracking-wider">
                          {row.title}
                        </span>
                      </div>
                      <p className="text-[15px] sm:text-base text-ink-muted/90 leading-relaxed pl-6">
                        {row.standard}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-cobalt-900/10 text-[13.5px] font-medium text-ink-muted text-center">
                Sonuç: Sınav stresi, kontrolsüz ödevler ve tekrarlanan net kayıpları.
              </div>
            </div>

            {/* Column 2: Aybar Akademi VIP Standardı */}
            <div className="bg-white border-2 border-cobalt-900 p-6 sm:p-8 shadow-card flex flex-col justify-between relative">
              <div className="absolute top-0 right-0 bg-crimson-600 text-white text-[12px] font-mono font-bold px-3 py-1 uppercase tracking-wider">
                AYBAR FARKI
              </div>

              <div>
                <div className="flex items-center justify-between pb-4 border-b border-cobalt-900/15 mb-6">
                  <div>
                    <span className="text-[12px] font-mono font-bold text-crimson-600 uppercase">
                      360° SÜREÇ YÖNETİMİ
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-ink mt-0.5">
                      Aybar Akademi VIP Standardı
                    </h3>
                  </div>
                  <CheckCircle2 className="h-8 w-8 text-crimson-600 shrink-0" />
                </div>

                <div className="space-y-6">
                  {COMPARISON_ROWS.map((row, idx) => (
                    <div key={idx} className="pb-5 border-b border-cobalt-900/10 last:border-b-0 last:pb-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <CheckCircle2 className="h-4 w-4 text-crimson-600 shrink-0" />
                        <span className="text-[13.5px] font-bold text-cobalt-900 uppercase tracking-wider">
                          {row.title}
                        </span>
                      </div>
                      <p className="text-[15px] sm:text-base text-ink leading-relaxed font-medium pl-6">
                        {row.aybar}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-cobalt-900/15 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-[13.5px] sm:text-sm font-bold text-cobalt-900">
                  Sonuç: Sıfır hata, sürdürülebilir başarı ve huzurlu aile ortamı.
                </span>
                <Link
                  href="/neden-farkliyiz"
                  className="inline-flex items-center gap-2 text-[13.5px] sm:text-sm font-bold text-crimson-600 hover:text-crimson-700 underline underline-offset-4"
                >
                  <span>5 Standart İlkeyi İncele</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 5. NEXT CHAPTER BANNER GUIDING TO /neden-farkliyiz                    */}
      {/* ==================================================================== */}
      <NextChapterBanner
        title="Aybar Akademi Neden Farklı? 5 Standart İlkemizi Görün"
        description="İlk ders öncesi 30 dk keşif seansından Ters Yüz Sınıf ve Dijital Hata Defteri tekniğine kadar fark yaratan sistemimiz."
        href="/neden-farkliyiz"
        buttonLabel="Neden Farklıyız Sayfasını Aç"
      />
    </div>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 19L19 5m0 0h-9m9 0v9"
      />
    </svg>
  );
}
