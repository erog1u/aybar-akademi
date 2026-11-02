"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Globe2,
  MessageCircle,
  ArrowUpRight,
  Target,
  BookOpen,
  GraduationCap,
  Languages,
  FileCheck2,
  Palette,
  CheckCircle2,
  Sparkles,
  PhoneCall,
  Clock,
  Send,
} from "lucide-react";
import { siteConfig, getWhatsAppUrl, assetPath } from "@/config/site";
import { programCategories } from "@/data/content";
import { MaskedLines, PhotoFrame } from "@/components/motion/Primitives";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

const LESSON_FORMATS = [
  {
    id: "yuz-yuze",
    title: "İstanbul’da Evde Yüz Yüze",
    badge: "39 İlçe Kapsamı",
    detail: "Evinizin konforunda uzman öğretmenle birebir ders.",
    icon: MapPin,
  },
  {
    id: "online",
    title: "Canlı İnteraktif Online",
    badge: "81 İl & Yurt Dışı",
    detail: "Grafik tablet ve dijital materyallerle kesintisiz HD seans.",
    icon: Globe2,
  },
] as const;

// Kategori ikon eşleştirmesi
const CATEGORY_ICONS: Record<string, React.ElementType> = {
  "sinav-hazirlik": Target,
  "okula-takviye": BookOpen,
  "universite-akademik": GraduationCap,
  "dunya-dilleri": Languages,
  "ulusal-dil-sinavlari": FileCheck2,
  "yasam-beceri-sanat": Palette,
};

export default function IletisimPage() {
  const [selectedProgram, setSelectedProgram] = useState<string>(
    programCategories[0].shortTitle
  );
  const [format, setFormat] = useState<string>(LESSON_FORMATS[0].title);
  const [studentName, setStudentName] = useState<string>("");
  const [note, setNote] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      "Merhaba, AYBAR AKADEMİ birebir özel ders ve 30 dakikalık ücretsiz tanışma seansı için bilgi almak istiyorum.",
      `Eğitim Alanı: ${selectedProgram}`,
      `Ders Tercihi: ${format}`,
      studentName.trim() ? `Öğrenci / Veli Adı: ${studentName.trim()}` : "",
      note.trim() ? `Not: ${note.trim()}` : "",
    ].filter(Boolean);

    window.open(
      getWhatsAppUrl(lines.join("\n")),
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="bg-paper text-ink">
      <Breadcrumbs items={[{ label: "İletişim" }]} />

      {/* 1. Canlı, Prestijli ve Ferah Cobalt Hero */}
      <section className="studio-hero text-white border-b border-white/15 overflow-hidden py-12 sm:py-16 lg:py-20 relative">
        <div className="absolute top-1/4 left-0 sm:left-10 w-80 h-80 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-0 sm:right-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Sol Sütun: Başlık ve Açıklama */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/12 border border-white/25 text-white text-xs sm:text-[13px] font-bold tracking-wider uppercase mb-5 shadow-sm backdrop-blur-xs">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="radar-beacon absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                </span>
                <span>30 DAKİKALIK ÜCRETSİZ TANIŞMA SEANSI</span>
              </div>

              <MaskedLines
                as="h1"
                className="text-[2.1rem] sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] text-white"
                lines={["İletişim & Randevu Planlama"]}
              />

              <p className="mt-5 text-base sm:text-lg text-cobalt-50/95 leading-relaxed max-w-2xl">
                İlk derse başlamadan önce gerçekleştirdiğimiz 30 dakikalık
                ücretsiz tanışma seansı, öğrencinin seviye analizi ve birebir
                özel ders planlaması için doğrudan bize ulaşabilirsiniz.
              </p>

              {/* Güven Vurguları */}
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm text-cobalt-200">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>30 Dk Ücretsiz Tanışma</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>İstanbul 39 İlçe Yüz Yüze</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>Tüm Türkiye Canlı Online</span>
                </span>
              </div>
            </div>

            {/* Sağ Sütun: Prestijli Stüdyo Fotoğraf Kartı & Canlı Rozet */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -top-3.5 -right-2 sm:-right-3 z-20 px-3.5 py-1.5 rounded-full bg-crimson-600 text-white text-xs font-black shadow-crimson flex items-center gap-1.5 animate-float-slow">
                <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
                <span>Randevu Hattı Açık</span>
              </div>

              <PhotoFrame
                src={assetPath("/images/istanbul-home-tutoring.jpg")}
                alt="AYBAR AKADEMİ Birebir Özel Ders ve Ücretsiz Tanışma Seansı"
                aspectClass="aspect-[16/10]"
                priority
                className="relative z-10 shadow-studio"
                caption={
                  <div className="flex items-center justify-between text-xs font-bold text-cobalt-950 px-1">
                    <span className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      30 Dk Ücretsiz Keşif
                    </span>
                    <span className="text-crimson-600 font-extrabold">
                      Hemen Planlayın
                    </span>
                  </div>
                }
              />
            </div>
          </div>

          {/* Hero Tabanı: 4 İletişim & Erişim Sütunu (Mobilde Asla Sıkışmayan Orantılı Düzen) */}
          <div className="mt-10 pt-8 border-t border-white/15 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-3.5">
              <span className="font-brand text-2xl sm:text-3xl font-extrabold text-white">
                39 İlçe
              </span>
              <div className="text-xs sm:text-[13px] text-cobalt-100 leading-snug">
                <strong className="text-white block font-bold">
                  İstanbul Yüz Yüze
                </strong>
                Evinizin konforunda özel ders
              </div>
            </div>
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-3.5">
              <span className="font-brand text-2xl sm:text-3xl font-extrabold text-white">
                81 İl
              </span>
              <div className="text-xs sm:text-[13px] text-cobalt-100 leading-snug">
                <strong className="text-white block font-bold">
                  Canlı Online
                </strong>
                Tüm Türkiye’de interaktif HD
              </div>
            </div>
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-3.5">
              <span className="font-brand text-2xl sm:text-3xl font-extrabold text-white">
                30 Dk
              </span>
              <div className="text-xs sm:text-[13px] text-cobalt-100 leading-snug">
                <strong className="text-white block font-bold">
                  Ücretsiz Tanışma
                </strong>
                Öğrenme stili & seviye analizi
              </div>
            </div>
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-3.5">
              <span className="font-brand text-2xl sm:text-3xl font-extrabold text-white">
                Birebir
              </span>
              <div className="text-xs sm:text-[13px] text-cobalt-100 leading-snug">
                <strong className="text-white block font-bold">
                  VIP Süreç
                </strong>
                Kişiye özel rehberlik & takip
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Ana Gövde: İnteraktif WhatsApp Planlayıcı & Doğrudan İletişim */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Sol Sütun: Canlı ve Dokunsal WhatsApp Planlayıcı */}
            <div className="lg:col-span-7">
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl bg-white p-6 sm:p-8 lg:p-10 border border-cobalt-900/12 shadow-card space-y-7 relative overflow-hidden"
              >
                {/* Üst Kırmızı-Kobalt Vurgu Çizgisi */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-crimson-600 via-cobalt-700 to-crimson-600" />

                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-crimson-50 text-crimson-700 text-xs font-extrabold tracking-wider uppercase mb-2">
                    <Sparkles className="h-3.5 w-3.5 text-crimson-600" />
                    <span>HIZLI & KOLAY PLANLAMA</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink">
                    Ücretsiz Tanışma Seansınızı Başlatın
                  </h2>
                  <p className="mt-2 text-sm sm:text-base text-ink-muted leading-relaxed">
                    Eğitim alanı ve ders tercihinizi dokunarak belirleyin; WhatsApp mesajınız anında hazır olsun.
                  </p>
                </div>

                {/* ADIM 1: Eğitim Alanı Seçin (Canlı Kırmızı Vurgulu Dokunsal Kutucuklar) */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="flex items-center gap-2 text-sm sm:text-base font-extrabold text-cobalt-950">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-crimson-600 text-white text-xs font-black shadow-crimson">
                        1
                      </span>
                      <span>İlgilendiğiniz Eğitim Alanını Seçin</span>
                    </label>
                    <span className="text-xs font-bold text-crimson-600 bg-crimson-50 px-2.5 py-0.5 rounded-full">
                      Seçildi: {selectedProgram}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
                    {programCategories.map((cat) => {
                      const isActive = selectedProgram === cat.shortTitle;
                      const IconComponent =
                        CATEGORY_ICONS[cat.id] || BookOpen;

                      return (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => setSelectedProgram(cat.shortTitle)}
                          className={`group rounded-2xl p-3.5 sm:p-4 text-left border transition-all duration-200 cursor-pointer flex flex-col justify-between min-h-[96px] sm:min-h-[105px] relative overflow-hidden ${
                            isActive
                              ? "bg-crimson-600 text-white border-crimson-600 shadow-crimson scale-[1.02] ring-2 ring-crimson-400/50"
                              : "bg-paper text-ink border-cobalt-900/12 hover:border-crimson-400 hover:bg-white hover:shadow-sm"
                          }`}
                        >
                          <div className="flex items-center justify-between w-full">
                            <span
                              className={`h-8 w-8 rounded-xl flex items-center justify-center transition-colors ${
                                isActive
                                  ? "bg-white/20 text-white"
                                  : "bg-cobalt-50 text-cobalt-700 group-hover:bg-crimson-50 group-hover:text-crimson-600"
                              }`}
                            >
                              <IconComponent className="h-4 w-4" />
                            </span>
                            {isActive && (
                              <span className="h-5 w-5 rounded-full bg-white text-crimson-600 flex items-center justify-center text-[11px] font-black shadow-sm animate-badge-breathe">
                                ✓
                              </span>
                            )}
                          </div>

                          <div className="mt-2.5">
                            <div className="font-extrabold text-xs sm:text-[13.5px] leading-snug">
                              {cat.shortTitle}
                            </div>
                            <div
                              className={`text-[10px] sm:text-[11px] mt-0.5 font-medium ${
                                isActive ? "text-white/80" : "text-ink-subtle"
                              }`}
                            >
                              {cat.items.length} Ayrı Program
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* ADIM 2: Ders Formatı Tercihiniz (İki Büyük Görsel Kart) */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="flex items-center gap-2 text-sm sm:text-base font-extrabold text-cobalt-950">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-crimson-600 text-white text-xs font-black shadow-crimson">
                        2
                      </span>
                      <span>Ders Formatı Tercihiniz</span>
                    </label>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {LESSON_FORMATS.map((item) => {
                      const isActive = format === item.title;
                      const IconComp = item.icon;

                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setFormat(item.title)}
                          className={`rounded-2xl p-4 sm:p-5 text-left border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                            isActive
                              ? "bg-cobalt-950 text-white border-crimson-500 shadow-studio ring-2 ring-crimson-500/50"
                              : "bg-paper text-ink border-cobalt-900/12 hover:border-cobalt-400 hover:bg-white hover:shadow-sm"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span
                              className={`h-9 w-9 rounded-xl flex items-center justify-center ${
                                isActive
                                  ? "bg-crimson-600 text-white shadow-crimson"
                                  : "bg-cobalt-50 text-cobalt-700"
                              }`}
                            >
                              <IconComp className="h-5 w-5" />
                            </span>
                            <span
                              className={`text-[11px] font-extrabold px-2.5 py-1 rounded-full ${
                                isActive
                                  ? "bg-white/15 text-white"
                                  : "bg-cobalt-100/70 text-cobalt-800"
                              }`}
                            >
                              {item.badge}
                            </span>
                          </div>

                          <div className="mt-3">
                            <h3 className="font-extrabold text-sm sm:text-base">
                              {item.title}
                            </h3>
                            <p
                              className={`text-xs sm:text-[13px] mt-1 leading-relaxed ${
                                isActive ? "text-cobalt-200" : "text-ink-muted"
                              }`}
                            >
                              {item.detail}
                            </p>
                          </div>

                          {isActive && (
                            <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                              <span>Bu Tercih Seçildi</span>
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* ADIM 3: Öğrenci Bilgisi veya Not */}
                <div className="space-y-3">
                  <label className="flex items-center gap-2 text-sm sm:text-base font-extrabold text-cobalt-950">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-crimson-600 text-white text-xs font-black shadow-crimson">
                      3
                    </span>
                    <span>Öğrenci Adı ve Notunuz (İsteğe Bağlı)</span>
                  </label>

                  <input
                    type="text"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="Öğrenci veya Veli Adı (Örn: Ayşe Yılmaz)"
                    className="w-full min-h-[48px] rounded-2xl px-4 py-3 text-sm sm:text-base bg-paper border border-cobalt-900/12 focus:outline-none focus:border-crimson-600 focus:ring-2 focus:ring-crimson-600/20 text-ink placeholder:text-ink-subtle transition-all"
                  />

                  <textarea
                    rows={3}
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Sınıf düzeyi, hedef sınav (LGS/YKS/YDS) veya ilçe bilgisi..."
                    className="w-full rounded-2xl px-4 py-3 text-sm sm:text-base bg-paper border border-cobalt-900/12 focus:outline-none focus:border-crimson-600 focus:ring-2 focus:ring-crimson-600/20 text-ink placeholder:text-ink-subtle transition-all"
                  />
                </div>

                {/* Canlı WhatsApp Mesaj Önizlemesi (Görsel ve Dokunsal Şeffaflık) */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-emerald-50/80 via-white to-emerald-50/50 border border-emerald-200 text-xs sm:text-[13px] text-emerald-950 space-y-2 shadow-sm">
                  <div className="flex items-center justify-between font-bold text-emerald-800">
                    <span className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>WhatsApp İletim Önizlemesi</span>
                    </span>
                    <span className="text-[11px] font-mono text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-md">
                      Otomatik Hazırlanır
                    </span>
                  </div>
                  <div className="font-mono text-[11px] sm:text-xs text-emerald-900 bg-white/90 p-3 rounded-xl border border-emerald-200/70 leading-relaxed space-y-1">
                    <div>
                      Merhaba, AYBAR AKADEMİ birebir özel ders ve 30 dakikalık ücretsiz tanışma seansı için bilgi almak istiyorum.
                    </div>
                    <div className="text-crimson-700 font-bold">
                      • Eğitim Alanı: {selectedProgram}
                    </div>
                    <div className="text-cobalt-800 font-bold">
                      • Ders Tercihi: {format}
                    </div>
                    {studentName.trim() && (
                      <div>
                        • Öğrenci/Veli: <strong className="font-bold">{studentName.trim()}</strong>
                      </div>
                    )}
                    {note.trim() && (
                      <div>
                        • Not: <strong className="font-bold">{note.trim()}</strong>
                      </div>
                    )}
                  </div>
                </div>

                {/* Gönder Butonu: Canlı Kırmızı & Geniş */}
                <button
                  type="submit"
                  className="w-full min-h-[54px] inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-crimson-600 to-crimson-700 hover:from-crimson-700 hover:to-crimson-800 active:scale-[0.99] text-white py-3.5 px-6 text-base sm:text-lg font-extrabold transition-all shadow-crimson hover:shadow-xl cursor-pointer"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>WhatsApp ile Hemen Başlat</span>
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </form>
            </div>

            {/* Sağ Sütun: Doğrudan İletişim Kartları & 3 Adımlı Süreç Akışı */}
            <div className="lg:col-span-5 space-y-6">
              {/* Kart 1: Doğrudan İletişim Kanalları */}
              <div className="rounded-3xl bg-white p-6 sm:p-8 border border-cobalt-900/12 shadow-card space-y-5">
                <div>
                  <span className="text-xs font-black uppercase tracking-widest text-crimson-600">
                    DOĞRUDAN AKADEMİK HAT
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-ink mt-1">
                    İletişim Bilgilerimiz
                  </h2>
                </div>

                <div className="space-y-3">
                  {/* Telefon Kartı */}
                  <a
                    href={siteConfig.contact.phoneHref}
                    className="p-4 rounded-2xl bg-cobalt-50 hover:bg-cobalt-100/80 border border-cobalt-100 transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="h-11 w-11 rounded-xl bg-cobalt-700 text-white flex items-center justify-center shrink-0 shadow-sm">
                        <PhoneCall className="h-5 w-5" />
                      </span>
                      <div>
                        <div className="text-xs font-bold text-cobalt-800">
                          Telefonla Danışın
                        </div>
                        <div className="text-base sm:text-lg font-extrabold text-ink">
                          {siteConfig.contact.phoneDisplay}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-cobalt-700 group-hover:translate-x-0.5 transition-transform">
                      Ara →
                    </span>
                  </a>

                  {/* WhatsApp Kartı */}
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-emerald-50/80 hover:bg-emerald-100/80 border border-emerald-100 transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <span className="h-11 w-11 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-sm">
                        <MessageCircle className="h-5 w-5" />
                      </span>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-emerald-800 flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          <span>WhatsApp VIP Hattı</span>
                        </div>
                        <div className="text-base font-extrabold text-ink truncate">
                          {siteConfig.contact.phoneDisplay}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-emerald-700 group-hover:translate-x-0.5 transition-transform shrink-0">
                      Yaz →
                    </span>
                  </a>

                  {/* E-Posta Kartı */}
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="p-4 rounded-2xl bg-crimson-50/70 hover:bg-crimson-100/80 border border-crimson-100 transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <span className="h-11 w-11 rounded-xl bg-crimson-600 text-white flex items-center justify-center shrink-0 shadow-crimson">
                        <Mail className="h-5 w-5" />
                      </span>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-crimson-700">
                          Resmi E-Posta
                        </div>
                        <div className="text-sm sm:text-base font-bold text-ink truncate">
                          {siteConfig.contact.email}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-crimson-700 group-hover:translate-x-0.5 transition-transform shrink-0">
                      İlet →
                    </span>
                  </a>
                </div>

                {/* Lokasyon Bilgileri */}
                <div className="pt-2 space-y-3.5 border-t border-cobalt-900/10">
                  <div className="flex items-start gap-3">
                    <span className="p-2 rounded-lg bg-crimson-50 text-crimson-600 shrink-0 mt-0.5">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <div>
                      <h3 className="font-extrabold text-sm sm:text-base text-ink">
                        {siteConfig.contact.locations.faceToFaceTitle}
                      </h3>
                      <p className="mt-0.5 text-xs sm:text-sm text-ink-muted leading-relaxed">
                        {siteConfig.contact.locations.faceToFaceDetail}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="p-2 rounded-lg bg-cobalt-50 text-cobalt-700 shrink-0 mt-0.5">
                      <Globe2 className="h-4 w-4" />
                    </span>
                    <div>
                      <h3 className="font-extrabold text-sm sm:text-base text-ink">
                        {siteConfig.contact.locations.onlineTitle}
                      </h3>
                      <p className="mt-0.5 text-xs sm:text-sm text-ink-muted leading-relaxed">
                        {siteConfig.contact.locations.onlineDetail}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Kart 2: 3 Adımda VIP Birebir Süreç Nasıl Başlar? */}
              <div className="rounded-3xl bg-cobalt-950 text-white p-6 sm:p-8 border border-white/10 shadow-studio relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-crimson-600/10 rounded-full blur-2xl pointer-events-none" />

                <div className="relative z-10">
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                    SÜREÇ AKIŞI
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-white mt-1 mb-4">
                    VIP Birebir Süreç Nasıl Başlar?
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3.5">
                      <span className="h-7 w-7 rounded-xl bg-crimson-600 text-white font-black text-xs flex items-center justify-center shrink-0 shadow-crimson">
                        01
                      </span>
                      <div>
                        <strong className="block text-sm font-bold text-white">
                          30 Dk Ücretsiz Tanışma Seansı
                        </strong>
                        <p className="text-xs text-cobalt-200 mt-0.5 leading-relaxed">
                          Öğrencinin mevcut durumu, öğrenme stili ve hedefleri analiz edilir.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <span className="h-7 w-7 rounded-xl bg-cobalt-700 text-white font-black text-xs flex items-center justify-center shrink-0">
                        02
                      </span>
                      <div>
                        <strong className="block text-sm font-bold text-white">
                          Kişiye Özel Ders Programı
                        </strong>
                        <p className="text-xs text-cobalt-200 mt-0.5 leading-relaxed">
                          En uygun uzman branş öğretmeni eşleştirilir ve haftalık ders takvimi kurulur.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <span className="h-7 w-7 rounded-xl bg-emerald-500 text-white font-black text-xs flex items-center justify-center shrink-0">
                        03
                      </span>
                      <div>
                        <strong className="block text-sm font-bold text-white">
                          Düzenli Takip & Veli Raporu
                        </strong>
                        <p className="text-xs text-cobalt-200 mt-0.5 leading-relaxed">
                          Her ders bitiminde veli bilgilendirilir ve hata defteriyle netler yükseltilir.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
