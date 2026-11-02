"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  X,
  ArrowUpRight,
  MapPin,
  Globe2,
  Check,
  Sparkles,
  ArrowRight,
  RotateCcw,
  GraduationCap,
  Award,
  Compass,
  Target,
  BookOpen,
  Languages,
  FileCheck2,
  Palette,
} from "lucide-react";
import {
  programCategories,
  programsIntro,
  ProgramCategory,
  ProgramItem,
} from "@/data/content";
import { getWhatsAppUrl } from "@/config/site";
import {
  LUXURY_EASE,
  MagneticLink,
  NextChapterBanner,
} from "@/components/motion/Primitives";
import { AybarCrestEmblem } from "@/components/brand/AybarCrest";

interface SelectedProgram {
  item: ProgramItem;
  category: ProgramCategory;
}

// Icon mapping for each of the 6 academic categories
const CATEGORY_ICONS: Record<string, React.ElementType> = {
  "sinav-hazirlik": Target,
  "okula-takviye": BookOpen,
  "universite-akademik": GraduationCap,
  "dunya-dilleri": Languages,
  "ulusal-dil-sinavlari": FileCheck2,
  "yasam-beceri-sanat": Palette,
};

// Wizard Profile definitions mapped to categories and genuine curriculum items
interface WizardProfile {
  id: string;
  stepNumber: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  targetCatId: string;
  recommendedCategoryTitle: string;
  recommendedTitle: string;
  recommendedSubjects: string[];
  sampleItemFilter: {
    catId: string;
    itemPrefix: string;
  }[];
}

const WIZARD_PROFILES: WizardProfile[] = [
  {
    id: "ilkokul-ortaokul",
    stepNumber: "01",
    badge: "1–8. Sınıf & LGS",
    title: "İlkokul & Ortaokul",
    subtitle: "1–8. Sınıf & LGS Hazırlık",
    description:
      "Temel derslerde eksiksiz tam öğrenme, yeni nesil Maarif Modeli okul takviyesi ve LGS nitelikli lise maratonu.",
    icon: GraduationCap,
    targetCatId: "okula-takviye",
    recommendedCategoryTitle: "Okula Takviye & LGS Sınav Hazırlığı",
    recommendedTitle: "LGS Hazırlık ve Maarif Modeline Uyumlu Okul Takviyesi",
    recommendedSubjects: [
      "LGS KOÇLUK",
      "Matematik",
      "Fen Bilgisi",
      "Türkçe",
      "İngilizce",
      "Sosyal Bilgiler",
    ],
    sampleItemFilter: [
      { catId: "sinav-hazirlik", itemPrefix: "LGS" },
      { catId: "okula-takviye", itemPrefix: "Ortaokul" },
      { catId: "okula-takviye", itemPrefix: "İlkokul" },
    ],
  },
  {
    id: "lise-yks",
    stepNumber: "02",
    badge: "9–12. Sınıf, YKS & YDT",
    title: "Lise & Üniversiteye Hazırlık",
    subtitle: "9–12. Sınıf, YKS (TYT-AYT) & YDT",
    description:
      "Okul yazılılarına tam destek, hedef odaklı TYT-AYT sınav koçluğu ve YDT yabancı dil sınavı hazırlığı.",
    icon: Award,
    targetCatId: "sinav-hazirlik",
    recommendedCategoryTitle: "Sınav Hazırlık & Lise Takviye",
    recommendedTitle: "YKS (TYT - AYT) Sınav Maratonu ve Birebir Koçluk",
    recommendedSubjects: [
      "YKS KOÇLUK",
      "Matematik & Geometri",
      "Fizik",
      "Kimya",
      "Biyoloji",
      "Edebiyat",
    ],
    sampleItemFilter: [
      { catId: "sinav-hazirlik", itemPrefix: "YKS" },
      { catId: "okula-takviye", itemPrefix: "Lise" },
      { catId: "ulusal-dil-sinavlari", itemPrefix: "YDT" },
    ],
  },
  {
    id: "universite-kpss",
    stepNumber: "03",
    badge: "Lisans & Kamu Sınavları",
    title: "Üniversite, KPSS & Akademik Kariyer",
    subtitle: "Lisans Dersleri, KPSS, ALES & YDS",
    description:
      "Bahadır Aybar liderliğinde Felsefe/Sosyoloji/Psikoloji lisans dersleri, KPSS Eğitim Bilimleri, ALES ve YDS.",
    icon: Compass,
    targetCatId: "universite-akademik",
    recommendedCategoryTitle: "Üniversite Düzeyi & Kamu Sınavları",
    recommendedTitle: "KPSS Eğitim Bilimleri ve İleri Düzey Akademik Mentorluk",
    recommendedSubjects: [
      "Eğitim Bilimleri (Bahadır Aybar)",
      "Felsefe Bölümü",
      "Sosyoloji Bölümü",
      "Psikoloji Bölümü",
      "ALES",
      "KPSS",
    ],
    sampleItemFilter: [
      { catId: "sinav-hazirlik", itemPrefix: "KPSS Eğitim Bilimleri" },
      { catId: "universite-akademik", itemPrefix: "Felsefe" },
      { catId: "sinav-hazirlik", itemPrefix: "ALES" },
    ],
  },
  {
    id: "dil-sanat",
    stepNumber: "04",
    badge: "11 Dil, Sanat & Spor",
    title: "Dünya Dilleri, Sanat & Yaşam Becerileri",
    subtitle: "11 Yabancı Dil, Sürüş, Spor & Sanat",
    description:
      "IELTS, TOEFL, Goethe Almanca, birebir eğitmen eşliğinde yüzme, özel direksiyon, dans ve müzik eğitimleri.",
    icon: Globe2,
    targetCatId: "dunya-dilleri",
    recommendedCategoryTitle: "Dünya Dilleri & Yaşam Becerileri",
    recommendedTitle: "11 Dünya Dili Sertifikasyonu & Sanat-Spor Akademisi",
    recommendedSubjects: [
      "IELTS & TOEFL",
      "Goethe Almanca",
      "Yüzme Özel Dersleri",
      "Özel Direksiyon",
      "Dans & Müzik",
    ],
    sampleItemFilter: [
      { catId: "dunya-dilleri", itemPrefix: "İngilizce" },
      { catId: "dunya-dilleri", itemPrefix: "Almanca" },
      { catId: "yasam-beceri-sanat", itemPrefix: "Sanat" },
    ],
  },
];

interface WizardFormat {
  id: string;
  title: string;
  badge: string;
  description: string;
  icon: React.ElementType;
}

const WIZARD_FORMATS: WizardFormat[] = [
  {
    id: "istanbul-yuzyuze",
    title: "İstanbul Yüz Yüze Evde Özel Ders",
    badge: "İstanbul 39 İlçe",
    description:
      "Evinizin huzurunda ve güvenliğinde, öğrencinin kendi çalışma masasında birebir yüz yüze eğitim.",
    icon: MapPin,
  },
  {
    id: "turkiye-online",
    title: "Tüm Türkiye Canlı Online",
    badge: "81 İl & Yurtdışı Canlı",
    description:
      "Grafik tablet, yüksek çözünürlüklü dijital materyaller ve canlı interaktif derslerle sınırsız erişim.",
    icon: Globe2,
  },
];

export default function ProgramExplorer() {
  const [activeCatId, setActiveCatId] = useState<string>("all");
  const [query, setQuery] = useState<string>("");
  const [selected, setSelected] = useState<SelectedProgram | null>(null);

  // Wizard state
  const [wizardStep, setWizardStep] = useState<number>(1);
  const [selectedProfileId, setSelectedProfileId] = useState<string>("ilkokul-ortaokul");
  const [selectedFormatId, setSelectedFormatId] = useState<string>("istanbul-yuzyuze");

  const totalProgramCount = useMemo(
    () => programCategories.reduce((acc, cat) => acc + cat.items.length, 0),
    []
  );

  useEffect(() => {
    const syncHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && programCategories.some((c) => c.id === hash)) {
        setActiveCatId(hash);
      }
    };
    syncHash();
    window.addEventListener("popstate", syncHash);
    return () => window.removeEventListener("popstate", syncHash);
  }, []);

  const handleCatSelect = (id: string, scroll = false) => {
    setActiveCatId(id);
    const newUrl =
      window.location.pathname + (id === "all" ? "" : `#${id}`);
    window.history.replaceState(null, "", newUrl);

    if (scroll) {
      const el = document.getElementById("tum-katalog");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const currentProfile = useMemo(
    () =>
      WIZARD_PROFILES.find((p) => p.id === selectedProfileId) ||
      WIZARD_PROFILES[0],
    [selectedProfileId]
  );

  const currentFormat = useMemo(
    () =>
      WIZARD_FORMATS.find((f) => f.id === selectedFormatId) ||
      WIZARD_FORMATS[0],
    [selectedFormatId]
  );

  // Resolved sample items for the selected profile in Step 3
  const resolvedSampleItems = useMemo(() => {
    const list: SelectedProgram[] = [];
    currentProfile.sampleItemFilter.forEach((f) => {
      const cat = programCategories.find((c) => c.id === f.catId);
      if (cat) {
        const item = cat.items.find((it) =>
          it.title.toLocaleLowerCase("tr").includes(f.itemPrefix.toLocaleLowerCase("tr"))
        );
        if (item) {
          list.push({ item, category: cat });
        }
      }
    });
    return list;
  }, [currentProfile]);

  const filtered = useMemo(() => {
    const q = query.trim().toLocaleLowerCase("tr");
    return programCategories
      .filter((c) => activeCatId === "all" || c.id === activeCatId)
      .map((cat) => {
        if (!q) return cat;
        const catMatch =
          cat.title.toLocaleLowerCase("tr").includes(q) ||
          cat.tagline.toLocaleLowerCase("tr").includes(q);
        if (catMatch) return cat;

        const matchingItems = cat.items.filter(
          (it) =>
            it.title.toLocaleLowerCase("tr").includes(q) ||
            (it.description || "").toLocaleLowerCase("tr").includes(q) ||
            (it.leaderNote || "").toLocaleLowerCase("tr").includes(q) ||
            it.subjects.some((s) => s.toLocaleLowerCase("tr").includes(q))
        );
        return { ...cat, items: matchingItems };
      })
      .filter((cat) => cat.items.length > 0);
  }, [activeCatId, query]);

  return (
    <>
      {/* -------------------------------------------------------------------------- */}
      {/* Step-by-Step Guided Program Finder Card (#program-sihirbazi)               */}
      {/* -------------------------------------------------------------------------- */}
      <section
        id="program-sihirbazi"
        className="scroll-mt-36 max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 pt-10 sm:pt-14 pb-8"
      >
        <div className="bg-cobalt-950 text-white border border-cobalt-900 shadow-studio relative overflow-hidden p-6 sm:p-9 lg:p-12">
          {/* Watermark Crest */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 text-white/[0.04]"
          >
            <AybarCrestEmblem variant="watermark" className="h-[420px] w-[420px]" />
          </div>

          <div className="relative z-10">
            {/* Header of the Configurator */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-white/15">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-crimson-600 text-white text-xs sm:text-sm font-bold shadow-crimson mb-3">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>3 ADIMDA ETKİLEŞİMLİ PROGRAM BULUCU</span>
                </div>
                <h2 className="text-[1.85rem] sm:text-3xl lg:text-4xl font-extrabold tracking-tightest text-white">
                  3 Adımda Size En Uygun Programı Belirleyelim
                </h2>
                <p className="mt-3 text-[15px] sm:text-base text-cobalt-100/90 max-w-2xl leading-relaxed">
                  Öğrencinin kademesini ve ders formatını seçin; ihtiyacınıza tam
                  uygun birebir müfredatı ve haftalık çalışma planını saniyeler içinde
                  görüntüleyin.
                </p>
              </div>

              {/* Reset action button */}
              <button
                type="button"
                onClick={() => {
                  setWizardStep(1);
                  setSelectedProfileId("ilkokul-ortaokul");
                  setSelectedFormatId("istanbul-yuzyuze");
                }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/15 text-xs sm:text-sm font-bold text-cobalt-100 transition-colors shrink-0"
              >
                <RotateCcw className="h-3.5 w-3.5 text-crimson-400" />
                <span>Sıfırla / Baştan Başla</span>
              </button>
            </div>

            {/* Visual Step Progress Bar */}
            <div className="py-6 border-b border-white/12">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  {
                    num: 1,
                    title: "Adım 1: Öğrenci Seviyesi",
                    subtitle: currentProfile.title,
                  },
                  {
                    num: 2,
                    title: "Adım 2: Tercih Edilen Format",
                    subtitle: currentFormat.title,
                  },
                  {
                    num: 3,
                    title: "Adım 3: Size Özel Öneri",
                    subtitle: "Müfredat & Başvuru",
                  },
                ].map((s) => {
                  const isActive = wizardStep === s.num;
                  const isDone = wizardStep > s.num;

                  return (
                    <button
                      key={s.num}
                      type="button"
                      onClick={() => setWizardStep(s.num)}
                      className={`text-left p-3.5 sm:p-4 border transition-all ${
                        isActive
                          ? "bg-cobalt-900 border-crimson-500 shadow-sm"
                          : isDone
                          ? "bg-cobalt-900/60 border-cobalt-700 hover:border-cobalt-500"
                          : "bg-cobalt-950/80 border-white/10 hover:border-white/20 opacity-80"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <span
                          className={`h-6 w-6 rounded-none flex items-center justify-center font-mono text-xs font-bold ${
                            isActive
                              ? "bg-crimson-600 text-white"
                              : isDone
                              ? "bg-emerald-500 text-white"
                              : "bg-white/15 text-white"
                          }`}
                        >
                          {isDone ? <Check className="h-3.5 w-3.5" /> : s.num}
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-white">
                          {s.title}
                        </span>
                      </div>
                      <p className="text-[13.5px] sm:text-sm text-cobalt-200 truncate pl-8">
                        {s.subtitle}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step Body */}
            <div className="pt-6 sm:pt-8">
              {/* STEP 1: Öğrenci Profili / Kademe Seçin */}
              {wizardStep === 1 && (
                <div>
                  <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-crimson-400 block mb-1">
                        ADIM 1 / 3
                      </span>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                        Öğrencinin Kademesini veya Sınav Hedefini Seçin
                      </h3>
                    </div>
                    <span className="text-xs text-cobalt-200">
                      Seçiminiz bir sonraki adımı otomatik olarak hazırlar.
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                    {WIZARD_PROFILES.map((profile) => {
                      const IconComp = profile.icon;
                      const isSelected = selectedProfileId === profile.id;

                      return (
                        <div
                          key={profile.id}
                          onClick={() => {
                            setSelectedProfileId(profile.id);
                            setWizardStep(2);
                          }}
                          className={`group cursor-pointer p-5 sm:p-6 border transition-all flex flex-col justify-between ${
                            isSelected
                              ? "bg-cobalt-900 border-crimson-500 shadow-crimson ring-1 ring-crimson-500"
                              : "bg-cobalt-900/50 border-white/15 hover:border-cobalt-400 hover:bg-cobalt-900/80"
                          }`}
                        >
                          <div>
                            <div className="flex items-center justify-between gap-3 mb-3">
                              <div className="h-11 w-11 bg-cobalt-800 border border-white/20 flex items-center justify-center text-white shrink-0 group-hover:bg-crimson-600 transition-colors">
                                <IconComp className="h-5 w-5 text-crimson-400 group-hover:text-white transition-colors" />
                              </div>
                              <span
                                className={`text-[12.5px] sm:text-xs font-bold px-2.5 py-1 ${
                                  isSelected
                                    ? "bg-crimson-600 text-white"
                                    : "bg-white/10 text-cobalt-200 border border-white/10"
                                }`}
                              >
                                {profile.badge}
                              </span>
                            </div>

                            <h4 className="text-lg sm:text-xl font-extrabold text-white mb-1.5">
                              {profile.title}
                            </h4>
                            <p className="text-[13.5px] font-bold text-cobalt-200 mb-2">
                              {profile.subtitle}
                            </p>
                            <p className="text-[14.5px] sm:text-[15px] text-cobalt-100/90 leading-relaxed">
                              {profile.description}
                            </p>
                          </div>

                          <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-xs sm:text-[13.5px] font-bold text-cobalt-200 group-hover:text-white">
                            <span>
                              {isSelected ? "Seçildi · 2. Adıma Geç" : "Bu Kademeyi Seç"}
                            </span>
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 2: Ders Formatı Tercihiniz */}
              {wizardStep === 2 && (
                <div>
                  <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-crimson-400 block mb-1">
                        ADIM 2 / 3
                      </span>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                        Tercih Ettiğiniz Birebir Özel Ders Formatı
                      </h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => setWizardStep(1)}
                      className="text-xs sm:text-sm font-bold text-cobalt-300 hover:text-white inline-flex items-center gap-1"
                    >
                      ← Kademeyi Değiştir
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                    {WIZARD_FORMATS.map((fmt) => {
                      const IconComp = fmt.icon;
                      const isSelected = selectedFormatId === fmt.id;

                      return (
                        <div
                          key={fmt.id}
                          onClick={() => {
                            setSelectedFormatId(fmt.id);
                            setWizardStep(3);
                          }}
                          className={`group cursor-pointer p-6 sm:p-7 border transition-all flex flex-col justify-between ${
                            isSelected
                              ? "bg-cobalt-900 border-crimson-500 shadow-crimson ring-1 ring-crimson-500"
                              : "bg-cobalt-900/50 border-white/15 hover:border-cobalt-400 hover:bg-cobalt-900/80"
                          }`}
                        >
                          <div>
                            <div className="flex items-center justify-between gap-3 mb-4">
                              <div className="h-12 w-12 bg-cobalt-800 border border-white/20 flex items-center justify-center text-white shrink-0 group-hover:bg-crimson-600 transition-colors">
                                <IconComp className="h-6 w-6 text-crimson-400 group-hover:text-white transition-colors" />
                              </div>
                              <span
                                className={`text-xs font-bold px-3 py-1 ${
                                  isSelected
                                    ? "bg-crimson-600 text-white"
                                    : "bg-white/10 text-cobalt-200 border border-white/10"
                                }`}
                              >
                                {fmt.badge}
                              </span>
                            </div>

                            <h4 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
                              {fmt.title}
                            </h4>
                            <p className="text-[14.5px] sm:text-base text-cobalt-100/90 leading-relaxed">
                              {fmt.description}
                            </p>
                          </div>

                          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs sm:text-[13.5px] font-bold text-cobalt-200 group-hover:text-white">
                            <span>
                              {isSelected ? "Seçildi · Sonuca İlerle" : "Bu Formatı Seç"}
                            </span>
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setWizardStep(1)}
                      className="px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-xs sm:text-sm font-bold text-white transition-colors"
                    >
                      ← Geri Dön (Kademe Seçimi)
                    </button>
                    <button
                      type="button"
                      onClick={() => setWizardStep(3)}
                      className="px-6 py-2.5 bg-crimson-600 hover:bg-crimson-700 text-white text-xs sm:text-sm font-bold shadow-crimson transition-colors"
                    >
                      Öneriyi Görüntüle (3. Adım) →
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Size Özel Öneri Box */}
              {wizardStep === 3 && (
                <div>
                  <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-crimson-400 block mb-1">
                        ADIM 3 / 3 — SİZE ÖZEL ÖNERİ
                      </span>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                        Eşleşen Birebir Eğitim ve Müfredat Tavsiyemiz
                      </h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setWizardStep(2)}
                        className="px-3.5 py-1.5 bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-bold text-white transition-colors"
                      >
                        Formatı Değiştir
                      </button>
                      <button
                        type="button"
                        onClick={() => setWizardStep(1)}
                        className="px-3.5 py-1.5 bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-bold text-white transition-colors"
                      >
                        Kademeyi Değiştir
                      </button>
                    </div>
                  </div>

                  {/* Top Status Strip */}
                  <div className="p-4 sm:p-5 bg-cobalt-900 border border-cobalt-700/80 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-[11px] font-mono font-bold text-crimson-400 block uppercase">
                        SEÇİLEN PROFİL VE FORMAT
                      </span>
                      <p className="text-sm sm:text-base font-bold text-white mt-0.5">
                        {currentProfile.title} ·{" "}
                        <span className="text-cobalt-200">
                          {currentFormat.title}
                        </span>
                      </p>
                    </div>
                    <div className="shrink-0 inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/15 text-xs font-semibold text-cobalt-100">
                      <Check className="h-3.5 w-3.5 text-crimson-400" />
                      <span>30 Dk Ücretsiz Tanışma Seansı Dahil</span>
                    </div>
                  </div>

                  {/* Recommended Program Highlights Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mb-8">
                    {resolvedSampleItems.map(({ item, category }, i) => (
                      <div
                        key={i}
                        className="p-5 sm:p-6 bg-cobalt-900/70 border border-white/15 hover:border-cobalt-400 flex flex-col justify-between transition-all"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-2.5">
                            <span className="text-[11px] font-mono text-cobalt-300 font-bold">
                              ÖNERİLEN MODÜL #{i + 1}
                            </span>
                            {item.badge && (
                              <span className="text-[11px] font-bold px-2 py-0.5 bg-crimson-600 text-white">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <h4 className="text-lg sm:text-xl font-extrabold text-white mb-2">
                            {item.title}
                          </h4>
                          {item.leaderNote && (
                            <p className="text-xs sm:text-[13px] font-bold text-cobalt-200 mb-2">
                              {item.leaderNote}
                            </p>
                          )}
                          <div className="flex flex-wrap gap-1.5 mt-3">
                            {item.subjects.slice(0, 4).map((sub, sIdx) => (
                              <span
                                key={sIdx}
                                className="text-xs px-2.5 py-1 bg-white/10 border border-white/15 text-white"
                              >
                                {sub}
                              </span>
                            ))}
                            {item.subjects.length > 4 && (
                              <span className="text-xs px-2 py-1 text-cobalt-300">
                                +{item.subjects.length - 4} ders
                              </span>
                            )}
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => setSelected({ item, category })}
                          className="mt-5 pt-3 border-t border-white/15 w-full flex items-center justify-between text-xs sm:text-[13px] font-bold text-cobalt-200 hover:text-white"
                        >
                          <span>Müfredat ve Detayları Gör</span>
                          <ArrowUpRight className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Guided CTAs Bar */}
                  <div className="p-6 bg-gradient-to-r from-cobalt-900 to-cobalt-950 border border-white/15 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div>
                      <h4 className="text-base sm:text-lg font-extrabold text-white">
                        Bu Seçimlerle Hemen Birebir Planlama Başlatalım
                      </h4>
                      <p className="text-[13.5px] sm:text-sm text-cobalt-200 mt-1">
                        30 dakikalık ücretsiz tanışma seansında öğrencinin seviyesi
                        analiz edilir ve haftalık özel takvim belirlenir.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
                      <button
                        type="button"
                        onClick={() =>
                          handleCatSelect(currentProfile.targetCatId, true)
                        }
                        className="min-h-[44px] px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/25 text-white text-xs sm:text-sm font-bold transition-colors inline-flex items-center justify-center gap-2"
                      >
                        <span>Katalogda Göster</span>
                        <ArrowDownIcon className="h-4 w-4" />
                      </button>

                      <a
                        href={getWhatsAppUrl(
                          `Merhaba, Aybar Akademi program sihirbazından seçim yaptım: "${currentProfile.title}" seviyesinde "${currentFormat.title}" ders formatı ve 30 dakikalık ücretsiz tanışma seansı hakkında bilgi almak istiyorum.`
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="min-h-[44px] px-6 py-2.5 bg-crimson-600 hover:bg-crimson-700 text-white text-xs sm:text-sm font-bold shadow-crimson transition-colors inline-flex items-center justify-center gap-2"
                      >
                        <span>Seçimlerimle Ücretsiz 30 Dk Tanışma Planla</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* Sticky Filter & Search Bar (#tum-katalog)                                  */}
      {/* -------------------------------------------------------------------------- */}
      <div
        id="tum-katalog"
        className="sticky top-[114px] lg:top-[82px] z-30 bg-white/95 backdrop-blur-xl border-b border-cobalt-900/12 shadow-sm"
      >
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 py-2.5 sm:py-3.5 space-y-2.5 sm:space-y-3">
          {/* Category Pills Row with badges & no-scrollbar */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            <button
              type="button"
              onClick={() => handleCatSelect("all")}
              className={`relative inline-flex items-center gap-2 min-h-[42px] px-4 py-2 text-[13.5px] sm:text-sm font-bold whitespace-nowrap transition-colors border ${
                activeCatId === "all"
                  ? "bg-cobalt-700 text-white border-cobalt-700 shadow-sm"
                  : "bg-paper text-ink hover:bg-cobalt-50 border-cobalt-900/12"
              }`}
            >
              <span>Tüm Programlar</span>
              <span
                className={`px-2 py-0.5 text-xs font-mono font-bold leading-none ${
                  activeCatId === "all"
                    ? "bg-white/20 text-white"
                    : "bg-cobalt-100 text-cobalt-800"
                }`}
              >
                {totalProgramCount}
              </span>
            </button>

            {programCategories.map((cat) => {
              const isActive = activeCatId === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleCatSelect(cat.id)}
                  className={`relative inline-flex items-center gap-2 min-h-[42px] px-4 py-2 text-[13.5px] sm:text-sm font-bold whitespace-nowrap transition-colors border ${
                    isActive
                      ? "bg-cobalt-700 text-white border-cobalt-700 shadow-sm"
                      : "bg-paper text-ink hover:bg-cobalt-50 border-cobalt-900/12"
                  }`}
                >
                  <span>{cat.shortTitle}</span>
                  <span
                    className={`px-2 py-0.5 text-xs font-mono font-bold leading-none ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-cobalt-100 text-cobalt-800"
                    }`}
                  >
                    {cat.items.length}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input — text-base on mobile prevents iOS Safari auto-zoom */}
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-muted" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Sınav, ders veya yabancı dil ara (örn: YKS, LGS, KPSS Eğitim Bilimleri, IELTS, Almanca, Psikoloji)..."
              className="w-full pl-10 pr-10 py-2.5 min-h-[44px] text-base bg-paper border border-cobalt-900/15 focus:outline-none focus:border-cobalt-700 text-ink placeholder:text-ink-subtle"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Aramayı Temizle"
                className="absolute right-3 top-1/2 -translate-y-1/2 h-8 w-8 flex items-center justify-center text-ink-muted hover:text-crimson-600"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------------------------- */}
      {/* Program Categories Stream with Architectural Headers & Spotlight Cards     */}
      {/* -------------------------------------------------------------------------- */}
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 space-y-16 sm:space-y-20">
        {filtered.length === 0 ? (
          <div className="bg-white border border-cobalt-900/12 p-12 text-center">
            <p className="text-lg font-bold text-ink">
              Aradığınız kritere uygun ders veya program bulunamadı.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setActiveCatId("all");
              }}
              className="mt-4 px-5 py-2.5 min-h-[40px] bg-cobalt-700 text-white text-xs sm:text-sm font-bold"
            >
              Tüm Programları Göster
            </button>
          </div>
        ) : (
          filtered.map((cat) => {
            const CategoryIcon = CATEGORY_ICONS[cat.id] || BookOpen;

            return (
              <section
                key={cat.id}
                id={cat.id}
                className="scroll-mt-52 lg:scroll-mt-44"
              >
                {/* Visual Category Header Banner Card */}
                <div className="bg-gradient-to-r from-cobalt-950 via-cobalt-900 to-cobalt-950 text-white p-6 sm:p-8 lg:p-10 border border-cobalt-800 shadow-studio relative overflow-hidden mb-8 sm:mb-10">
                  <div className="relative z-10 flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                    <div className="flex items-start gap-4 sm:gap-5">
                      {/* Emblem Box */}
                      <div className="shrink-0 h-14 w-14 sm:h-16 sm:w-16 bg-cobalt-800/90 border border-white/20 flex flex-col items-center justify-center text-white shadow-sm">
                        <CategoryIcon className="h-6 w-6 sm:h-7 sm:w-7 text-crimson-400" />
                        <span className="font-mono text-[10.5px] text-cobalt-200 font-bold mt-0.5">
                          {cat.code}
                        </span>
                      </div>

                      <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-crimson-600 text-white text-xs sm:text-[13.5px] font-bold shadow-crimson mb-2.5">
                          <span>{cat.tagline}</span>
                        </div>
                        <h2 className="text-[1.75rem] sm:text-3xl lg:text-4xl font-extrabold tracking-tightest text-white">
                          {cat.title}
                        </h2>
                        <p className="mt-3 text-[15px] sm:text-base text-cobalt-100/95 max-w-3xl leading-relaxed">
                          {cat.summary}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 3-Chip Guided Process Pill Bar */}
                  <div className="mt-6 pt-5 border-t border-white/15 flex flex-wrap items-center gap-2 sm:gap-3">
                    {[
                      "30 Dk Ücretsiz Tanışma",
                      "Kişiye Özel Ders Planı",
                      "Düzenli Veli Raporu",
                    ].map((chip, cIdx) => (
                      <span
                        key={cIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 border border-white/15 text-[13px] sm:text-sm font-semibold text-cobalt-100"
                      >
                        <Check className="h-3.5 w-3.5 text-crimson-400 shrink-0" />
                        <span>{chip}</span>
                      </span>
                    ))}
                    <span className="ml-auto text-xs sm:text-sm font-mono text-cobalt-300 font-semibold hidden md:inline">
                      {cat.items.length} Farklı Ders & Sınav Modülü
                    </span>
                  </div>
                </div>

                {/* Category Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {cat.items.map((item, idx) => {
                    // Featured Bahadır Aybar Spotlight Card
                    if (item.featured) {
                      return (
                        <div
                          key={idx}
                          onClick={() => setSelected({ item, category: cat })}
                          className="md:col-span-2 bg-cobalt-950 text-white border-2 border-cobalt-500/80 hover:border-cobalt-400 p-7 sm:p-10 shadow-studio relative overflow-hidden group cursor-pointer transition-all duration-300"
                        >
                          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-crimson-600 text-white text-xs sm:text-sm font-bold shadow-crimson">
                              <Sparkles className="h-4 w-4" />
                              <span>
                                {item.badge ||
                                  "KURUCU LİDERLİĞİNDE ÖZEL MENTORLUK"}
                              </span>
                            </div>
                            <span className="text-xs sm:text-sm font-mono text-cobalt-300 font-bold">
                              Birebir VIP Akademik Destek
                            </span>
                          </div>

                          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-3">
                            {item.title}
                          </h3>

                          {item.leaderNote && (
                            <p className="text-base sm:text-lg font-bold text-cobalt-200 mb-3 leading-snug">
                              {item.leaderNote}
                            </p>
                          )}

                          {item.description && (
                            <p className="text-[15px] sm:text-base text-cobalt-100/95 leading-relaxed mb-6 max-w-4xl">
                              {item.description}
                            </p>
                          )}

                          {/* Subject Pills */}
                          <div className="flex flex-wrap gap-2 mb-8">
                            {item.subjects.map((sub, sIdx) => (
                              <span
                                key={sIdx}
                                className="text-[13.5px] sm:text-sm px-3.5 py-1.5 font-medium border bg-white/10 text-white border-white/20"
                              >
                                {sub}
                              </span>
                            ))}
                          </div>

                          {/* Bottom Spotlight CTA */}
                          <div className="pt-5 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <span className="text-sm font-medium text-cobalt-200">
                              Tüm ders içeriklerini ve Bahadır Aybar mentorluk
                              sürecini inceleyin
                            </span>
                            <button
                              type="button"
                              className="min-h-[44px] inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-crimson-600 hover:bg-crimson-700 text-white text-sm sm:text-base font-bold shadow-crimson transition-colors"
                            >
                              <span>Detayları İncele & Başvur</span>
                              <ArrowUpRight className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      );
                    }

                    // Standard Program Card
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelected({ item, category: cat })}
                        className="group cursor-pointer bg-white text-ink border border-cobalt-900/15 hover:border-cobalt-700 p-6 sm:p-8 shadow-card flex flex-col justify-between transition-all duration-300"
                      >
                        <div>
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-ink group-hover:text-cobalt-700 transition-colors">
                              {item.title}
                            </h3>
                            {item.badge && (
                              <span className="text-[13px] sm:text-sm font-bold px-3 py-1 bg-cobalt-50 text-cobalt-800 border border-cobalt-700/20">
                                {item.badge}
                              </span>
                            )}
                          </div>

                          {item.leaderNote && (
                            <p className="text-[14.5px] sm:text-[15px] font-bold text-cobalt-800 mb-2">
                              {item.leaderNote}
                            </p>
                          )}

                          {item.description && (
                            <p className="text-[15px] sm:text-base text-ink-muted leading-relaxed mb-4">
                              {item.description}
                            </p>
                          )}

                          <div className="flex flex-wrap gap-2 mt-4">
                            {item.subjects.map((sub, sIdx) => (
                              <span
                                key={sIdx}
                                className={`text-[13.5px] sm:text-sm px-3 py-1.5 font-medium border ${
                                  sub.includes("KOÇLUK")
                                    ? "bg-crimson-600 text-white border-crimson-600 font-bold"
                                    : "bg-paper text-ink border-cobalt-900/10 group-hover:border-cobalt-700/30"
                                }`}
                              >
                                {sub}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Bottom action button bar */}
                        <div className="mt-6 pt-4 border-t border-cobalt-900/10 flex items-center justify-between text-[13.5px] sm:text-sm font-bold text-cobalt-700 group-hover:text-crimson-600 transition-colors">
                          <span className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-crimson-600" />
                            <span>Program Detayını ve Ders İçeriğini Aç</span>
                          </span>
                          <span className="h-8 w-8 border border-cobalt-900/15 bg-paper group-hover:bg-crimson-600 group-hover:text-white group-hover:border-crimson-600 flex items-center justify-center transition-colors">
                            <ArrowUpRight className="h-4 w-4" />
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })
        )}

        {/* Closing Verbatim Banner */}
        <div className="bg-cobalt-700 halftone-cobalt text-white p-8 sm:p-12 border border-cobalt-900 shadow-studio flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <p className="font-serif italic text-xl sm:text-2xl text-white leading-relaxed max-w-3xl">
            “{programsIntro.closing}”
          </p>
          <div className="shrink-0">
            <MagneticLink href={getWhatsAppUrl()} external variant="crimson">
              Ücretsiz Tanışma Seansı Planla
            </MagneticLink>
          </div>
        </div>
      </div>

      {/* Next Subpage Navigator */}
      <NextChapterBanner
        title="VIP Süreç Yönetimi ve Eğitim Modelimizi Keşfedin"
        description="Aybar Akademi'nin ezberci kalıpları yıkan birebir eğitim ve koçluk felsefesi."
        href="/egitim-modelimiz"
        buttonLabel="Eğitim Modelimizi İncele"
      />

      {/* Slide-Over Program Detail Drawer (z-[95]) */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="fixed inset-0 z-[90] bg-cobalt-950/60 backdrop-blur-sm"
            />
            <motion.aside
              data-lenis-prevent
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.38, ease: LUXURY_EASE }}
              className="fixed top-0 right-0 bottom-0 z-[95] w-full max-w-lg bg-white text-ink border-l border-cobalt-900/15 shadow-2xl flex flex-col justify-between overflow-y-auto"
            >
              <div>
                <div className="bg-cobalt-900 text-white p-6 sm:p-7 flex items-start justify-between gap-4">
                  <div>
                    <div className="inline-block px-3 py-1 bg-crimson-600 text-white text-xs sm:text-[13px] font-bold mb-2.5">
                      {selected.category.title}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                      {selected.item.title}
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelected(null)}
                    aria-label="Kapat"
                    className="h-11 w-11 border border-white/20 flex items-center justify-center text-white hover:bg-white/10 shrink-0"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="p-6 sm:p-7 space-y-6">
                  {selected.item.leaderNote && (
                    <div className="p-4 sm:p-5 bg-cobalt-50 border-l-4 border-cobalt-700 text-sm sm:text-base font-bold text-cobalt-900 leading-snug">
                      {selected.item.leaderNote}
                    </div>
                  )}

                  {selected.item.description && (
                    <p className="text-[15px] sm:text-base text-ink-muted leading-relaxed">
                      {selected.item.description}
                    </p>
                  )}

                  <div>
                    <h4 className="text-xs sm:text-sm font-bold tracking-wider uppercase text-cobalt-800 mb-3.5">
                      Kapsanan Dersler ve Alanlar
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selected.item.subjects.map((sub, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-paper border border-cobalt-900/12 text-[13px] sm:text-sm font-semibold text-ink"
                        >
                          <Check className="h-4 w-4 text-crimson-600 shrink-0" />
                          <span>{sub}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-cobalt-900/10">
                    <div className="p-4 bg-paper border border-cobalt-900/10">
                      <div className="flex items-center gap-1.5 text-sm font-bold text-cobalt-800 mb-1">
                        <MapPin className="h-4 w-4 text-crimson-600" />
                        <span>İstanbul Yüz Yüze</span>
                      </div>
                      <p className="text-[13px] sm:text-sm text-ink-muted">
                        39 ilçenin tamamında evinizin konforunda birebir ders.
                      </p>
                    </div>
                    <div className="p-4 bg-paper border border-cobalt-900/10">
                      <div className="flex items-center gap-1.5 text-sm font-bold text-cobalt-800 mb-1">
                        <Globe2 className="h-4 w-4 text-cobalt-700" />
                        <span>Tüm Türkiye Online</span>
                      </div>
                      <p className="text-[13px] sm:text-sm text-ink-muted">
                        81 ilde yüksek verimli, canlı ve interaktif özel ders.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sticky CTA footer with safe area padding */}
              <div className="sticky bottom-0 z-10 p-5 sm:p-6 border-t border-cobalt-900/12 bg-paper-warm/95 backdrop-blur-md pb-[max(1.25rem,env(safe-area-inset-bottom))]">
                <a
                  href={getWhatsAppUrl(
                    `Merhaba, Aybar Akademi "${selected.item.title}" birebir özel ders programı ve 30 dakikalık ücretsiz tanışma seansı hakkında bilgi almak istiyorum.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[48px] inline-flex items-center justify-center gap-2 bg-crimson-600 hover:bg-cobalt-900 text-white py-3.5 sm:py-4 px-6 text-sm sm:text-base font-bold transition-colors shadow-crimson"
                >
                  <span>Bu Program İçin WhatsApp’tan Bilgi Al</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function ArrowDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 5v14M19 12l-7 7-7-7" />
    </svg>
  );
}
