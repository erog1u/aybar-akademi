"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Globe2,
  Clock,
  Check,
  ArrowUpRight,
  Send,
  Sparkles,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  BookOpen,
  Calendar,
  AlertCircle,
} from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import {
  MaskedLines,
  Reveal,
  SwissSectionHeader,
  MagneticLink,
  KineticRibbon,
  ParallaxWatermark,
} from "@/components/motion/Primitives";

// --------------------------------------------------------------------------
// Form Options Definition
// --------------------------------------------------------------------------
const CATEGORY_OPTIONS = [
  {
    id: "sinav-hazirlik",
    code: "01",
    label: "Sınav Hazırlık (YKS/LGS/KPSS/ALES)",
    short: "Sınav Hazırlık",
    hint: "TYT, AYT, LGS, KPSS Genel Kültür & Eğitim Bilimleri, ALES",
  },
  {
    id: "okula-takviye",
    code: "02",
    label: "Okula Takviye (İlkokul/Ortaokul/Lise)",
    short: "Okula Takviye",
    hint: "1-12. Sınıf tüm dersler, yazılılara hazırlık, Maarif Modeli",
  },
  {
    id: "universite-akademik",
    code: "03",
    label: "Üniversite & Akademik Dersler",
    short: "Üniversite & Akademik",
    hint: "Felsefe, Sosyoloji, Psikoloji lisans dersleri & mentorluk",
  },
  {
    id: "dunya-dilleri",
    code: "04",
    label: "Dünya Dilleri & Uluslararası Sınavlar",
    short: "Dünya Dilleri",
    hint: "İngilizce (IELTS/TOEFL), Almanca, Fransızca, İtalyanca, İspanyolca...",
  },
  {
    id: "ydt-yds",
    code: "05",
    label: "YDT & YDS",
    short: "YDT & YDS",
    hint: "YKS Dil (YDT) 5 dilde, YDS 11 dilde stratejik akademik hazırlık",
  },
  {
    id: "yasam-spor-sanat",
    code: "06",
    label: "Yaşam, Spor & Sanat",
    short: "Yaşam, Spor & Sanat",
    hint: "Birebir yüzme, özel direksiyon, dans ve müzik eğitimleri",
  },
];

const FORMAT_OPTIONS = [
  {
    id: "yuz-yuze",
    code: "FORMAT · A",
    title: "İstanbul Yüz Yüze Özel Ders",
    badge: "39 İLÇE EVİNİZDE",
    description:
      "İstanbul'un tüm 39 ilçesinde, evinizin huzur ve güvenliğinde birebir yüz yüze eğitim.",
  },
  {
    id: "canli-online",
    code: "FORMAT · B",
    title: "Tüm Türkiye Canlı Online",
    badge: "81 İL İNTERAKTİF",
    description:
      "Coğrafi sınırları kaldıran interaktif dijital tahta ve kayıt imkânlı canlı eğitim.",
  },
];

const ONBOARDING_STEPS = [
  {
    step: "01",
    tag: "ÜCRETSİZ KEŞİF",
    title: "30 Dakikalık Tanışma Seansı",
    detail: "İlk derse başlamadan önce hiçbir taahhüt olmadan karşılıklı hedefler ve beklentiler netleştirilir.",
  },
  {
    step: "02",
    tag: "PEDAGOJİK TANI",
    title: "Öğrenme Stili Analizi",
    detail: "Öğrencinin görsel, işitsel veya kinestetik öğrenme yatkınlığı ve derse karşı zihinsel bariyerleri saptanır.",
  },
  {
    step: "03",
    tag: "MİMARİ YOL HARİTASI",
    title: "Kişiselleştirilmiş Çalışma Planı",
    detail: "Okul, sosyal yaşam ve hedeflenen sınav takvimini birleştiren sürdürülebilir bir plan hazırlanır.",
  },
  {
    step: "04",
    tag: "UYGULAMA",
    title: "Birebir VIP İlk Ders & Flipped Classroom",
    detail: "Öğrenci derse ön hazırlık yaparak katılır; ezberden uzak, aktif soru çözen odaklı süreç başlar.",
  },
  {
    step: "05",
    tag: "ŞEFFAFLIK",
    title: "Ders Sonu WhatsApp Raporu",
    detail: "Her ders bitiminde işlenen konu, ödev durumu ve gelişim izlenimleri veliye düzenli olarak raporlanır.",
  },
];

const FAQS = [
  {
    q: "30 dakikalık tanışma seansı gerçekten tamamen ücretsiz mi?",
    a: "Evet. Aybar Akademi'de ilk derse başlamadan önce öğrenciyi tanımak, öğrenme stilini analiz etmek ve veliyle ortak hedefleri belirlemek amacıyla 30 dakikalık keşif görüşmesi tamamen ücretsiz olarak gerçekleştirilir. Hiçbir bağlayıcılık taşımaz.",
  },
  {
    q: "Yüz yüze özel dersler nerede işleniyor?",
    a: "İstanbul'un tüm 39 ilçesinde, öğrencinin en rahat ettiği ve dış etkenlerden uzaklaştığı kendi ev ortamında yüz yüze gerçekleştirilir. Velimiz dilerse ders başlangıcında ve sonunda öğretmenimizle doğrudan yüz yüze görüşebilir.",
  },
  {
    q: "Online derslerin verimi yüz yüze ders kadar yüksek mi?",
    a: "Kesinlikle. Canlı online derslerimizde profesyonel grafik tabletler, çift yönlü interaktif ekran paylaşımı ve soru çözüm yazılımları kullanılır. Ayrıca derslerin tamamı kayıt altına alınabildiği için öğrenci sınav döneminde tüm dersi dilediği kadar tekrar izleyebilir.",
  },
  {
    q: "Öğretmen kadronuz kimlerden oluşuyor?",
    a: "Kadro; alanında uzman, yeni nesil Maarif Modeline %100 hâkim, ÖSYM ve MEB soru tekniklerini derinlemesine bilen, pedagojik formasyona ve güçlü öğrenci iletişimine sahip seçkin öğretmenlerden oluşur. KPSS Eğitim Bilimleri ve Felsefe grubu dersleri bizzat kurucumuz Bahadır Aybar liderliğinde yürütülür.",
  },
  {
    q: "Özel ders saatleri ve günleri nasıl belirleniyor?",
    a: "Tüm program öğrencinin okul saatleri, deneme günleri ve kişisel dinlenme zamanları gözetilerek tamamen esnek bir şekilde size özel takvimlendirilir. Hafta içi veya hafta sonu uygun saat dilimleri birlikte kararlaştırılır.",
  },
];

export default function IletisimPage() {
  // Configurator state
  const [selectedCategory, setSelectedCategory] = useState(CATEGORY_OPTIONS[0].label);
  const [selectedFormat, setSelectedFormat] = useState(FORMAT_OPTIONS[0].title);
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gradeOrExam, setGradeOrExam] = useState("");
  const [district, setDistrict] = useState("");
  const [userNote, setUserNote] = useState("");
  const [hasError, setHasError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // FAQ Accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Construct structured Turkish WhatsApp message
  const buildWhatsAppMessage = () => {
    return (
      `Merhaba Aybar Akademi,\n` +
      `30 Dakikalık Ücretsiz Tanışma Seansı ve Öğrenme Stili Analizi için randevu oluşturmak istiyorum.\n\n` +
      `• Öğrenci / Veli: ${fullName.trim() || "Belirtilmedi"}\n` +
      `• İletişim Numarası: ${phoneNumber.trim() || "Belirtilmedi"}\n` +
      `• Eğitim Alanı: ${selectedCategory}\n` +
      `• Ders Formatı: ${selectedFormat}\n` +
      `• Sınıf / Hedef Sınav: ${gradeOrExam.trim() || "Genel Bilgi"}\n` +
      `• İl / İlçe: ${district.trim() || "Belirtilmedi"}\n` +
      `• Ön Bilgi / Notlar: ${userNote.trim() || "Yok"}\n\n` +
      `Müsaitlik durumuna göre dönüşünüzü rica ederim.`
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phoneNumber.trim()) {
      setHasError(true);
      return;
    }
    setHasError(false);
    setSubmitted(true);

    const message = buildWhatsAppMessage();
    const targetUrl = getWhatsAppUrl(message);
    window.open(targetUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-paper text-ink min-h-screen">
      {/* -------------------------------------------------------------------- */}
      {/* 1. EDITORIAL FOLIO HEADER                                            */}
      {/* -------------------------------------------------------------------- */}
      <section className="bg-cobalt-950 text-white border-b border-white/12 relative overflow-hidden">
        {/* Architectural Subtle Grid */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-dot-white opacity-20 pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute -top-32 right-10 w-[500px] h-[500px] bg-cobalt-700/20 rounded-full blur-3xl pointer-events-none"
        />

        <div className="relative max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 pt-16 sm:pt-24 pb-16 sm:pb-20">
          {/* Folio Register Micro-Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-white/12 text-[11px] font-mono tracking-[0.16em]">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 bg-crimson-600 text-white font-semibold">
                [İLETİŞİM VE TANIŞMA PROTOKOLÜ]
              </span>
              <span className="text-cobalt-200 hidden sm:inline">
                BAŞVURU VE PLANLAMA MASASI
              </span>
            </div>
            <div className="text-cobalt-300">
              HAFTANIN 7 GÜNÜ: 08:30 – 22:30
            </div>
          </div>

          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-crimson-500 font-semibold tracking-[0.18em]">
              <span className="h-1.5 w-1.5 bg-crimson-500 rotate-45" />
              ÜCRETSİZ KEŞİF & BAŞARI MİMARİSİ
            </div>

            <MaskedLines
              as="h1"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tightest leading-[1.08] text-white"
              lines={[
                "30 Dakikalık Ücretsiz",
                "Tanışma Seansı &",
                "Öğrenme Stili Analizi.",
              ]}
            />

            <p className="text-base sm:text-lg text-cobalt-100/90 leading-relaxed font-normal max-w-3xl pt-2">
              İlk derse başlamadan önce hiçbir taahhüt veya ücret olmaksızın öğrencimizin öğrenme stilini keşfediyor, hedeflerini dinliyor ve kişiye özel VIP eğitim yol haritasını birlikte oluşturuyoruz.
            </p>
          </div>

          {/* Quick Institutional Micro-Cards */}
          <div className="mt-12 pt-8 border-t border-white/12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-4 border border-white/10 bg-white/[0.03] space-y-1">
              <div className="font-mono text-[10px] text-crimson-500 font-semibold tracking-[0.16em]">
                DOĞRUDAN TELEFON
              </div>
              <a
                href={siteConfig.contact.phoneHref}
                className="text-lg font-bold text-white hover:text-crimson-400 transition-colors inline-flex items-center gap-2"
              >
                <Phone className="h-4 w-4 text-crimson-500" />
                <span>{siteConfig.contact.phoneDisplay}</span>
              </a>
              <p className="text-xs text-cobalt-300">Hızlı arama ile anında bilgi alın</p>
            </div>

            <div className="p-4 border border-white/10 bg-white/[0.03] space-y-1">
              <div className="font-mono text-[10px] text-crimson-500 font-semibold tracking-[0.16em]">
                WHATSAPP DANIŞMA HATTI
              </div>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-bold text-white hover:text-crimson-400 transition-colors inline-flex items-center gap-2"
              >
                <MessageSquare className="h-4 w-4 text-crimson-500" />
                <span>Hemen Mesaj Gönderin</span>
              </a>
              <p className="text-xs text-cobalt-300">Ortalama yanıt süresi: 15 dakika</p>
            </div>

            <div className="p-4 border border-white/10 bg-white/[0.03] space-y-1">
              <div className="font-mono text-[10px] text-crimson-500 font-semibold tracking-[0.16em]">
                KURUMSAL E-POSTA
              </div>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-sm sm:text-base font-bold text-white hover:text-crimson-400 transition-colors inline-flex items-center gap-2 break-all"
              >
                <Mail className="h-4 w-4 text-crimson-500 shrink-0" />
                <span>{siteConfig.contact.email}</span>
              </a>
              <p className="text-xs text-cobalt-300">Akademik danışmanlık ve teklifler</p>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* 2. MAIN 12-COLUMN INTERACTIVE CONFIGURATOR & CONTACT LEDGER          */}
      {/* -------------------------------------------------------------------- */}
      <section className="py-16 sm:py-24 max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* ================================================================ */}
          {/* LEFT 7 COLUMNS: INTERACTIVE PLANNER FORM                         */}
          {/* ================================================================ */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white border-2 border-cobalt-900/12 p-6 sm:p-10 shadow-sm relative">
              {/* Swiss Register Crosshairs */}
              <span
                aria-hidden="true"
                className="absolute top-2 left-2 font-mono text-[10px] text-crimson-600 select-none"
              >
                +
              </span>
              <span
                aria-hidden="true"
                className="absolute top-2 right-2 font-mono text-[10px] text-crimson-600 select-none"
              >
                +
              </span>

              {/* Form Title & Stepper Ledger */}
              <div className="pb-6 mb-8 border-b border-cobalt-900/10">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className="font-mono text-xs font-bold text-crimson-600 tracking-[0.18em]">
                    [ÖZEL DERS PLANLAYICI]
                  </span>
                  <span className="font-mono text-[11px] text-cobalt-700 font-semibold bg-cobalt-50 px-2.5 py-0.5 border border-cobalt-100">
                    ADIM 01 / 03
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink">
                  30 Dk Ücretsiz Tanışma ve Planlama Seansı
                </h2>
                <p className="text-xs sm:text-sm text-ink-muted mt-2 leading-relaxed">
                  Aşağıdaki tercihlerinizi belirleyerek WhatsApp üzerinden tek tıkla randevu talep edebilirsiniz. Uzman eğitim koordinatörümüz 15 dakika içinde geri dönüş sağlayacaktır.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* ---------------------------------------------------------- */}
                {/* STEP 1: EĞİTİM ALANI SEÇİMİ                                */}
                {/* ---------------------------------------------------------- */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="font-mono text-xs font-bold text-ink uppercase tracking-[0.14em] flex items-center gap-2">
                      <span className="h-2 w-2 bg-crimson-600 inline-block" />
                      1. Eğitim Alanı Tercihi
                    </label>
                    <span className="font-mono text-[10px] text-ink-muted">
                      (BİRİNİ SEÇİNİZ)
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {CATEGORY_OPTIONS.map((cat) => {
                      const isSelected = selectedCategory === cat.label;
                      return (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => setSelectedCategory(cat.label)}
                          className={`text-left p-3.5 border transition-all duration-200 relative ${
                            isSelected
                              ? "bg-cobalt-900 text-white border-cobalt-900 shadow-sm"
                              : "bg-paper-warm text-ink border-cobalt-900/10 hover:border-cobalt-700 hover:bg-white"
                          }`}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <span
                              className={`font-mono text-[10px] font-bold ${
                                isSelected ? "text-crimson-400" : "text-cobalt-700"
                              }`}
                            >
                              [{cat.code}]
                            </span>
                            {isSelected && (
                              <Check className="h-3.5 w-3.5 text-crimson-400 shrink-0 mt-0.5" />
                            )}
                          </div>
                          <div className="text-xs sm:text-[13px] font-bold mt-1 leading-snug">
                            {cat.short}
                          </div>
                          <p
                            className={`text-[11px] mt-1 leading-tight line-clamp-1 ${
                              isSelected ? "text-cobalt-200" : "text-ink-muted"
                            }`}
                          >
                            {cat.hint}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* ---------------------------------------------------------- */}
                {/* STEP 2: DERS FORMATI TERÇİHİ                               */}
                {/* ---------------------------------------------------------- */}
                <div className="space-y-3 pt-4 border-t border-cobalt-900/10">
                  <div className="flex items-center justify-between">
                    <label className="font-mono text-xs font-bold text-ink uppercase tracking-[0.14em] flex items-center gap-2">
                      <span className="h-2 w-2 bg-crimson-600 inline-block" />
                      2. Ders Formatı Tercihi
                    </label>
                    <span className="font-mono text-[10px] text-ink-muted">
                      (YÜZ YÜZE VEYA ONLINE)
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {FORMAT_OPTIONS.map((fmt) => {
                      const isSelected = selectedFormat === fmt.title;
                      return (
                        <button
                          key={fmt.id}
                          type="button"
                          onClick={() => setSelectedFormat(fmt.title)}
                          className={`text-left p-4 border transition-all duration-200 ${
                            isSelected
                              ? "bg-cobalt-900 text-white border-cobalt-900 shadow-sm"
                              : "bg-paper-warm text-ink border-cobalt-900/10 hover:border-cobalt-700 hover:bg-white"
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2 mb-1.5">
                            <span
                              className={`font-mono text-[10px] font-bold ${
                                isSelected ? "text-crimson-400" : "text-cobalt-700"
                              }`}
                            >
                              {fmt.code}
                            </span>
                            <span
                              className={`font-mono text-[10px] px-1.5 py-0.5 font-semibold ${
                                isSelected
                                  ? "bg-crimson-600 text-white"
                                  : "bg-cobalt-50 text-cobalt-800 border border-cobalt-200"
                              }`}
                            >
                              {fmt.badge}
                            </span>
                          </div>
                          <div className="text-sm font-extrabold tracking-tight">
                            {fmt.title}
                          </div>
                          <p
                            className={`text-xs mt-1.5 leading-relaxed ${
                              isSelected ? "text-cobalt-200" : "text-ink-muted"
                            }`}
                          >
                            {fmt.description}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* ---------------------------------------------------------- */}
                {/* STEP 3: ÖĞRENCİ VE İLETİŞİM BİLGİLERİ                      */}
                {/* ---------------------------------------------------------- */}
                <div className="space-y-4 pt-4 border-t border-cobalt-900/10">
                  <div className="flex items-center justify-between">
                    <label className="font-mono text-xs font-bold text-ink uppercase tracking-[0.14em] flex items-center gap-2">
                      <span className="h-2 w-2 bg-crimson-600 inline-block" />
                      3. Öğrenci ve İletişim Bilgileri
                    </label>
                    <span className="font-mono text-[10px] text-crimson-600 font-bold">
                      * ZORUNLU ALANLAR
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold text-ink mb-1.5">
                        Öğrenci veya Veli Adı Soyadı *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Örn: Ahmet Yılmaz"
                        className="w-full px-3.5 py-2.5 text-sm bg-paper-warm border border-cobalt-900/15 text-ink placeholder:text-ink-subtle focus:bg-white focus:outline-none focus:border-cobalt-700 focus:ring-1 focus:ring-cobalt-700"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-bold text-ink mb-1.5">
                        İletişim Telefon Numarası *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="Örn: 0 (5XX) XXX XX XX"
                        className="w-full px-3.5 py-2.5 text-sm bg-paper-warm border border-cobalt-900/15 text-ink placeholder:text-ink-subtle focus:bg-white focus:outline-none focus:border-cobalt-700 focus:ring-1 focus:ring-cobalt-700"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Grade or Target Exam */}
                    <div>
                      <label className="block text-xs font-bold text-ink mb-1.5">
                        Sınıf Düzeyi veya Hedef Sınav
                      </label>
                      <input
                        type="text"
                        value={gradeOrExam}
                        onChange={(e) => setGradeOrExam(e.target.value)}
                        placeholder="Örn: 12. Sınıf Sayısal YKS / 8. Sınıf LGS"
                        className="w-full px-3.5 py-2.5 text-sm bg-paper-warm border border-cobalt-900/15 text-ink placeholder:text-ink-subtle focus:bg-white focus:outline-none focus:border-cobalt-700 focus:ring-1 focus:ring-cobalt-700"
                      />
                    </div>

                    {/* Location / District */}
                    <div>
                      <label className="block text-xs font-bold text-ink mb-1.5">
                        İl / İlçe Konumu (Yüz Yüze için)
                      </label>
                      <input
                        type="text"
                        value={district}
                        onChange={(e) => setDistrict(e.target.value)}
                        placeholder="Örn: Kadıköy / İstanbul veya Online"
                        className="w-full px-3.5 py-2.5 text-sm bg-paper-warm border border-cobalt-900/15 text-ink placeholder:text-ink-subtle focus:bg-white focus:outline-none focus:border-cobalt-700 focus:ring-1 focus:ring-cobalt-700"
                      />
                    </div>
                  </div>

                  {/* Notes / Desired Subjects */}
                  <div>
                    <label className="block text-xs font-bold text-ink mb-1.5">
                      Hedeflenen Branşlar veya Ek Notlar
                    </label>
                    <textarea
                      rows={3}
                      value={userNote}
                      onChange={(e) => setUserNote(e.target.value)}
                      placeholder="Örn: Matematik ve Fizik derslerinde zorlanıyoruz. Haftada 2 gün yüz yüze ders talep ediyoruz."
                      className="w-full px-3.5 py-2.5 text-sm bg-paper-warm border border-cobalt-900/15 text-ink placeholder:text-ink-subtle focus:bg-white focus:outline-none focus:border-cobalt-700 focus:ring-1 focus:ring-cobalt-700 resize-none"
                    />
                  </div>
                </div>

                {/* Validation Error Alert */}
                {hasError && (
                  <div className="p-3.5 bg-crimson-50 border border-crimson-200 text-crimson-700 text-xs flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 shrink-0 text-crimson-600" />
                    <span>Lütfen devam etmek için Ad Soyad ve İletişim Telefonu alanlarını doldurunuz.</span>
                  </div>
                )}

                {/* ---------------------------------------------------------- */}
                {/* LIVE DISPATCH PREVIEW RECEIPT                              */}
                {/* ---------------------------------------------------------- */}
                <div className="p-4 bg-paper-warm border border-cobalt-900/10 space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono text-ink-muted">
                    <span className="font-bold text-cobalt-800">
                      [TANIŞMA SEANSI TALEP PUSULASI]
                    </span>
                    <span className="text-crimson-600 font-semibold">WHATSAPP İLE GÖNDERİLECEK</span>
                  </div>
                  <div className="font-mono text-xs text-ink/80 bg-white p-3 border border-cobalt-900/10 whitespace-pre-line leading-relaxed">
                    {`Program: ${selectedCategory}\nFormat: ${selectedFormat}\nÖğrenci/Veli: ${fullName.trim() || "(Ad Soyad Giriniz)"}\nİletişim: ${phoneNumber.trim() || "(Telefon Giriniz)"}${gradeOrExam ? `\nHedef Sınav: ${gradeOrExam}` : ""}${district ? `\nKonum: ${district}` : ""}`}
                  </div>
                </div>

                {/* Submit Action Cluster */}
                <div className="space-y-3">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 bg-crimson-600 hover:bg-crimson-700 text-white font-bold text-sm sm:text-base tracking-tight transition-colors shadow-crimson flex items-center justify-center gap-3 group"
                  >
                    <span>30 Dk Ücretsiz Tanışma Seansını WhatsApp ile Başlat</span>
                    <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>

                  <div className="flex items-center justify-between text-[11px] font-mono text-ink-muted px-1">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="h-3.5 w-3.5 text-crimson-600" />
                      %100 Ücretsiz & Taahhütsüz Keşif
                    </span>
                    <span>Ortalama Yanıt: ~15 Dk</span>
                  </div>
                </div>

                {/* Confirmation Box if clicked */}
                {submitted && (
                  <div className="p-4 bg-cobalt-50 border border-cobalt-200 text-cobalt-900 text-xs sm:text-sm space-y-1">
                    <div className="font-bold text-cobalt-800 flex items-center gap-2">
                      <Check className="h-4 w-4 text-crimson-600" />
                      <span>WhatsApp Yönlendirmesi Gerçekleşti</span>
                    </div>
                    <p className="text-xs text-cobalt-800/85">
                      Yeni sekmede açılmadıysa{" "}
                      <a
                        href={getWhatsAppUrl(buildWhatsAppMessage())}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold underline text-crimson-600 hover:text-crimson-700"
                      >
                        buraya tıklayarak WhatsApp sohbetini doğrudan açabilirsiniz
                      </a>
                      .
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* ================================================================ */}
          {/* RIGHT 5 COLUMNS: DIRECT CONTACT LEDGER & ONBOARDING REMINDER     */}
          {/* ================================================================ */}
          <div className="lg:col-span-5 space-y-8">
            {/* Direct Contact Ledger Box */}
            <div className="bg-cobalt-950 text-white border-2 border-cobalt-800 p-6 sm:p-8 shadow-studio space-y-6">
              <div className="border-b border-white/12 pb-4">
                <span className="font-mono text-xs text-crimson-500 font-semibold tracking-[0.16em]">
                  [DOĞRUDAN İLETİŞİM]
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white mt-1">
                  Merkezi İletişim Masası
                </h3>
                <p className="text-xs text-cobalt-200 mt-1">
                  Eğitim koordinatörlerimiz haftanın 7 günü sorularınızı yanıtlamaya hazırdır.
                </p>
              </div>

              {/* Contact Channels */}
              <div className="space-y-4">
                {/* Phone */}
                <div className="p-4 bg-white/5 border border-white/10 space-y-1">
                  <div className="flex items-center justify-between text-[10px] font-mono text-cobalt-300 tracking-wider">
                    <span>TELEFON HATTI</span>
                    <span className="text-crimson-400 font-semibold">SESLİ ARAMA</span>
                  </div>
                  <a
                    href={siteConfig.contact.phoneHref}
                    className="text-lg font-bold text-white hover:text-crimson-400 transition-colors inline-flex items-center gap-2"
                  >
                    <Phone className="h-4 w-4 text-crimson-500" />
                    <span>{siteConfig.contact.phoneDisplay}</span>
                  </a>
                  <p className="text-[11px] text-cobalt-200/80">
                    Haftanın 7 günü 08:30 – 22:30 kesintisiz görüşme
                  </p>
                </div>

                {/* WhatsApp */}
                <div className="p-4 bg-white/5 border border-white/10 space-y-1">
                  <div className="flex items-center justify-between text-[10px] font-mono text-cobalt-300 tracking-wider">
                    <span>WHATSAPP HIZLI HAT</span>
                    <span className="text-crimson-400 font-semibold">ANLIK DANIŞMA</span>
                  </div>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold text-white hover:text-crimson-400 transition-colors inline-flex items-center gap-2"
                  >
                    <MessageSquare className="h-4 w-4 text-crimson-500" />
                    <span>Hemen Mesaj Gönderin</span>
                  </a>
                  <p className="text-[11px] text-cobalt-200/80">
                    Kişiye özel ders ücretleri ve planlama için anında bilgi alın
                  </p>
                </div>

                {/* Email */}
                <div className="p-4 bg-white/5 border border-white/10 space-y-1">
                  <div className="flex items-center justify-between text-[10px] font-mono text-cobalt-300 tracking-wider">
                    <span>RESMİ E-POSTA</span>
                    <span className="text-crimson-400 font-semibold">KURUMSAL</span>
                  </div>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-sm font-bold text-white hover:text-crimson-400 transition-colors inline-flex items-center gap-2 break-all"
                  >
                    <Mail className="h-4 w-4 text-crimson-500 shrink-0" />
                    <span>{siteConfig.contact.email}</span>
                  </a>
                  <p className="text-[11px] text-cobalt-200/80">
                    Resmi başvurular, kurumsal eğitim talepleri ve iş birlikleri
                  </p>
                </div>
              </div>

              {/* Coverage Cards — Exclusively from siteConfig */}
              <div className="pt-4 border-t border-white/12 space-y-3">
                <div className="font-mono text-xs text-cobalt-300 tracking-[0.14em]">
                  HİZMET KAPSAMA BÖLGELERİ:
                </div>

                {/* Face to Face */}
                <div className="p-3.5 bg-white/5 border border-white/10 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-white">
                    <MapPin className="h-3.5 w-3.5 text-crimson-500 shrink-0" />
                    <span>{siteConfig.contact.locations.faceToFaceTitle}</span>
                  </div>
                  <p className="text-[11px] text-cobalt-200/85 leading-relaxed">
                    {siteConfig.contact.locations.faceToFaceDetail}
                  </p>
                </div>

                {/* Online */}
                <div className="p-3.5 bg-white/5 border border-white/10 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-white">
                    <Globe2 className="h-3.5 w-3.5 text-cobalt-300 shrink-0" />
                    <span>{siteConfig.contact.locations.onlineTitle}</span>
                  </div>
                  <p className="text-[11px] text-cobalt-200/85 leading-relaxed">
                    {siteConfig.contact.locations.onlineDetail}
                  </p>
                </div>
              </div>
            </div>

            {/* 5-Step Onboarding Protocol Ledger */}
            <div className="bg-white border border-cobalt-900/12 p-6 sm:p-8 shadow-sm space-y-5">
              <div className="border-b border-cobalt-900/10 pb-3 flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-crimson-600 tracking-[0.16em]">
                  [5 ADIMLI BAŞLANGIÇ PROTOKOLÜ]
                </span>
                <span className="font-mono text-[10px] text-ink-muted">
                  STANDART PROSEDÜR
                </span>
              </div>

              <div className="space-y-4">
                {ONBOARDING_STEPS.map((s) => (
                  <div key={s.step} className="flex items-start gap-3.5 group">
                    <span className="font-mono text-xs font-extrabold text-white bg-cobalt-900 px-2 py-0.5 shrink-0 mt-0.5">
                      {s.step}
                    </span>
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-extrabold text-ink group-hover:text-cobalt-700 transition-colors">
                          {s.title}
                        </span>
                        <span className="font-mono text-[9px] text-crimson-600 bg-crimson-50 px-1 font-semibold">
                          {s.tag}
                        </span>
                      </div>
                      <p className="text-[11px] text-ink-muted leading-relaxed">
                        {s.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-cobalt-900/10 text-center">
                <span className="font-mono text-[11px] text-cobalt-800 font-semibold">
                  AYBAR AKADEMİ · %100 BAŞARI MİMARİSİ
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* 3. KINETIC TYPOGRAPHIC RIBBON                                        */}
      {/* -------------------------------------------------------------------- */}
      <KineticRibbon
        items={[
          "30 DAKİKALIK ÜCRETSİZ TANIŞMA SEANSI",
          "ÖĞRENME STİLİ ANALİZİ",
          "İSTANBUL 39 İLÇE YÜZ YÜZE ÖZEL DERS",
          "81 İLDE CANLI İNTERAKTİF ONLINE EĞİTİM",
          "HER DERS SONU WHATSAPP RAPORU",
          "KİŞİYE ÖZEL VİP SÜREÇ YÖNETİMİ",
        ]}
        variant="cobalt"
      />

      {/* -------------------------------------------------------------------- */}
      {/* 4. FREQUENTLY ASKED QUESTIONS (SSS)                                 */}
      {/* -------------------------------------------------------------------- */}
      <section className="py-20 sm:py-24 max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
        <SwissSectionHeader
          index="02"
          eyebrow="MERAK EDİLENLER"
          title="Sıkça Sorulan Sorular"
          subtitle="Özel ders sürecine başlamadan önce velilerimiz ve öğrencilerimiz tarafından en çok yöneltilen soruların net yanıtları."
        />

        <div className="max-w-4xl mx-auto space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-cobalt-900/12 transition-all duration-200 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-paper-warm transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-crimson-600 shrink-0">
                      [{idx < 9 ? `0${idx + 1}` : idx + 1}]
                    </span>
                    <span className="text-sm sm:text-base font-extrabold text-ink">
                      {faq.q}
                    </span>
                  </div>
                  <span className="h-7 w-7 border border-cobalt-900/15 flex items-center justify-center shrink-0 text-cobalt-800">
                    {isOpen ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 pt-2 sm:px-6 sm:pb-6 text-xs sm:text-sm text-ink-muted leading-relaxed border-t border-cobalt-900/10 bg-paper-warm/50">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Direct CTA */}
        <div className="mt-16 text-center space-y-4">
          <p className="text-sm font-medium text-ink-muted">
            Farklı bir sorunuz mu var? Doğrudan kurucumuz ve eğitim uzmanlarımızla görüşebilirsiniz.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <MagneticLink
              href={getWhatsAppUrl()}
              external
              variant="crimson"
            >
              WhatsApp ile Hızlı Soru Sorun
            </MagneticLink>
            <MagneticLink
              href={siteConfig.contact.phoneHref}
              external
              variant="outline-dark"
            >
              {siteConfig.contact.phoneDisplay}
            </MagneticLink>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* 5. PARALLAX WATERMARK                                                */}
      {/* -------------------------------------------------------------------- */}
      <ParallaxWatermark
        text="AYBAR AKADEMİ İLETİŞİM"
        className="opacity-5 pb-8 text-cobalt-950"
      />
    </div>
  );
}
