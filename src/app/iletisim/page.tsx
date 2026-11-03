"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Globe2,
  MessageCircle,
  ArrowUpRight,
  Sparkles,
  PhoneCall,
  Check,
} from "lucide-react";
import { siteConfig, getWhatsAppUrl, assetPath } from "@/config/site";
import { programCategories } from "@/data/content";
import { MaskedLines, PhotoFrame } from "@/components/motion/Primitives";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

const LESSON_FORMATS = [
  {
    id: "yuz-yuze",
    title: "İstanbul Yüz Yüze (39 İlçe)",
    subtitle: "Evinizin konforunda birebir özel ders",
  },
  {
    id: "online",
    title: "Canlı Online (Tüm Türkiye)",
    subtitle: "İnteraktif HD dijital ortamda birebir ders",
  },
] as const;

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

      {/* 1. Sade, Ferah ve Prestijli Cobalt Hero */}
      <section className="studio-hero text-white border-b border-white/15 overflow-hidden py-12 sm:py-16 lg:py-20 relative">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Sol: Başlık ve Açıklama */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/12 border border-white/25 text-white text-xs sm:text-[13px] font-bold tracking-wider uppercase mb-5 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="radar-beacon absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span>30 DAKİKALIK ÜCRETSİZ TANIŞMA SEANSI</span>
              </div>

              <MaskedLines
                as="h1"
                className="text-[2.1rem] sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] text-white"
                lines={[
                  "İletişim & Randevu Planlama",
                  <span
                    key="contact-crimson-box"
                    className="relative inline-flex items-center px-4 sm:px-6 py-1 sm:py-1.5 rounded-2xl bg-crimson-600 text-white font-extrabold shadow-crimson animate-crimson-box overflow-hidden mt-1 sm:mt-2"
                  >
                    <span className="relative z-10">30 Dk Ücretsiz Tanışma Seansı.</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-light-sweep pointer-events-none" />
                  </span>,
                ]}
              />

              <p className="mt-5 text-base sm:text-lg text-cobalt-50/95 leading-relaxed max-w-2xl">
                İlk derse başlamadan önce gerçekleştirdiğimiz 30 dakikalık
                ücretsiz tanışma seansı, öğrencinin seviye analizi ve birebir
                özel ders planlaması için doğrudan bizimle iletişime geçebilirsiniz.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-cobalt-200">
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-crimson-400" />
                  <strong className="text-white">İstanbul:</strong> 39 İlçede Yüz Yüze
                </span>
                <span className="flex items-center gap-1.5">
                  <Globe2 className="h-4 w-4 text-sky-400" />
                  <strong className="text-white">Tüm Türkiye:</strong> Canlı Online
                </span>
              </div>
            </div>

            {/* Sağ: Stüdyo Görsel Kartı */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -top-3 -right-2 sm:-right-3 z-20 px-3 py-1 rounded-full bg-crimson-600 text-white text-xs font-bold shadow-crimson flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                <span>Randevu Hattı Aktif</span>
              </div>

              <PhotoFrame
                src={assetPath("/images/istanbul-home-tutoring.jpg")}
                alt="AYBAR AKADEMİ Birebir Özel Ders ve Ücretsiz Tanışma Seansı"
                aspectClass="aspect-[16/10]"
                priority
                className="relative z-10 shadow-studio"
                caption={
                  <div className="flex items-center justify-between text-xs font-bold text-cobalt-950 px-1">
                    <span className="flex items-center gap-1.5 text-cobalt-900">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      30 Dk Ücretsiz Tanışma
                    </span>
                    <span className="text-crimson-600 font-extrabold">
                      Hemen Başlayın
                    </span>
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Ana Gövde: Sadeleştirilmiş 2 Sütunlu İletişim */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Sol Sütun: Kolay & Dokunsal WhatsApp Planlayıcı */}
            <div className="lg:col-span-7">
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl bg-white p-6 sm:p-8 lg:p-9 border border-cobalt-900/10 shadow-sm space-y-6 relative overflow-hidden"
              >
                {/* İnce Kırmızı Vurgu Çizgisi */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-crimson-600 via-cobalt-600 to-crimson-600" />

                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-crimson-50 text-crimson-700 text-xs font-bold uppercase mb-2">
                    <Sparkles className="h-3.5 w-3.5 text-crimson-600" />
                    <span>HIZLI & KOLAY BAŞVURU</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink">
                    Ücretsiz Tanışma Seansı Başlatın
                  </h2>
                  <p className="mt-1.5 text-sm sm:text-[15px] text-ink-muted leading-relaxed">
                    Eğitim alanı ve ders biçiminizi seçerek bize WhatsApp üzerinden doğrudan ulaşabilirsiniz.
                  </p>
                </div>

                {/* 1. Eğitim Alanı Seçimi (Yazıların Asla Kesilmediği Ferah Düzen) */}
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <label className="block text-sm font-extrabold text-cobalt-950">
                      1. İlgilendiğiniz Eğitim Alanını Seçin
                    </label>
                    <span className="text-xs font-bold text-crimson-600 bg-crimson-50 px-2.5 py-0.5 rounded-full border border-crimson-200/50">
                      Seçili: {selectedProgram}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 sm:gap-2.5">
                    {programCategories.map((cat) => {
                      const isActive = selectedProgram === cat.shortTitle;
                      return (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => setSelectedProgram(cat.shortTitle)}
                          className={`rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold border transition-all cursor-pointer inline-flex items-center gap-2 ${
                            isActive
                              ? "bg-crimson-600 text-white border-crimson-600 shadow-crimson scale-[1.02]"
                              : "bg-paper text-ink border-cobalt-900/10 hover:border-crimson-400 hover:bg-white"
                          }`}
                        >
                          <span className="whitespace-normal leading-normal">{cat.shortTitle}</span>
                          {isActive && (
                            <Check className="h-4 w-4 shrink-0 text-white" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Ders Formatı (2 Net Seçenek) */}
                <div>
                  <label className="block text-sm font-extrabold text-cobalt-950 mb-2.5">
                    2. Ders Formatı Tercihiniz
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {LESSON_FORMATS.map((item) => {
                      const isActive = format === item.title;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setFormat(item.title)}
                          className={`rounded-2xl p-4 text-left border transition-all cursor-pointer ${
                            isActive
                              ? "bg-cobalt-950 text-white border-cobalt-950 shadow-sm ring-2 ring-crimson-600"
                              : "bg-paper text-ink border-cobalt-900/10 hover:border-crimson-300 hover:bg-white"
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-extrabold text-xs sm:text-sm leading-snug">
                              {item.title}
                            </span>
                            {isActive && (
                              <span className="text-[11px] font-bold text-white bg-crimson-600 px-2.5 py-0.5 rounded-full shrink-0 shadow-xs">
                                Seçildi
                              </span>
                            )}
                          </div>
                          <p
                            className={`text-xs mt-1.5 leading-relaxed ${
                              isActive ? "text-cobalt-200" : "text-ink-muted"
                            }`}
                          >
                            {item.subtitle}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 3. Öğrenci / Veli Bilgisi (İsteğe Bağlı) */}
                <div className="space-y-3">
                  <label className="block text-sm font-extrabold text-cobalt-950">
                    3. Bilgileriniz (İsteğe Bağlı)
                  </label>

                  <input
                    type="text"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="Öğrenci veya Veli Adı (Örn: Ayşe Yılmaz)"
                    className="w-full min-h-[46px] rounded-xl px-4 py-2.5 text-sm sm:text-base bg-paper border border-cobalt-900/10 focus:outline-none focus:border-crimson-600 focus:ring-1 focus:ring-crimson-600 text-ink placeholder:text-ink-subtle transition-all"
                  />

                  <textarea
                    rows={2}
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Sınıf düzeyi, hedef sınav veya ilçe bilginiz..."
                    className="w-full rounded-xl px-4 py-2.5 text-sm sm:text-base bg-paper border border-cobalt-900/10 focus:outline-none focus:border-crimson-600 focus:ring-1 focus:ring-crimson-600 text-ink placeholder:text-ink-subtle transition-all"
                  />
                </div>

                {/* Bilgilendirme Notu */}
                <div className="flex items-center gap-2 text-xs sm:text-[13px] text-ink-muted bg-paper p-3 rounded-xl border border-cobalt-900/5">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
                  <span>
                    WhatsApp mesajınız seçtiğiniz tercihlerle otomatik hazırlanır; düzenleyip tek dokunuşla gönderebilirsiniz.
                  </span>
                </div>

                {/* Gönder Butonu */}
                <button
                  type="submit"
                  className="relative overflow-hidden w-full min-h-[52px] inline-flex items-center justify-center gap-2.5 rounded-xl bg-crimson-600 hover:bg-crimson-700 active:scale-[0.98] text-white py-3.5 px-6 text-sm sm:text-base font-extrabold transition-all shadow-crimson cursor-pointer touch-manipulation group"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <MessageCircle className="h-5 w-5" />
                    <span>WhatsApp ile Hemen Gönder</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-light-sweep pointer-events-none" />
                </button>
              </form>
            </div>

            {/* Sağ Sütun: Net ve Sade İletişim Bilgileri */}
            <div className="lg:col-span-5 space-y-5">
              <div className="rounded-3xl bg-white p-6 sm:p-8 border border-cobalt-900/10 shadow-sm space-y-6 relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-crimson-600 via-cobalt-600 to-crimson-600" />
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-crimson-600">
                    DOĞRUDAN İLETİŞİM
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-ink mt-1">
                    Bize Ulaşın
                  </h2>
                  <p className="mt-1 text-xs sm:text-sm text-ink-muted leading-relaxed">
                    Tüm akademik sorularınız ve randevu talepleriniz için dilediğiniz kanaldan bize ulaşabilirsiniz.
                  </p>
                </div>

                {/* 3 İletişim Kanalı */}
                <div className="space-y-3.5">
                  {/* Telefon */}
                  <a
                    href={siteConfig.contact.phoneHref}
                    className="p-4 rounded-2xl bg-paper hover:bg-cobalt-50 border border-cobalt-900/5 transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="h-10 w-10 rounded-xl bg-cobalt-700 text-white flex items-center justify-center shrink-0">
                        <PhoneCall className="h-4 w-4" />
                      </span>
                      <div>
                        <div className="text-xs font-bold text-ink-muted">Telefon Danışma</div>
                        <div className="text-sm sm:text-base font-extrabold text-ink">
                          {siteConfig.contact.phoneDisplay}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-cobalt-700 group-hover:translate-x-0.5 transition-transform">
                      Ara →
                    </span>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-paper hover:bg-emerald-50/70 border border-cobalt-900/5 transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <span className="h-10 w-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0">
                        <MessageCircle className="h-4 w-4" />
                      </span>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-ink-muted">WhatsApp Danışma</div>
                        <div className="text-sm sm:text-base font-extrabold text-ink">
                          {siteConfig.contact.phoneDisplay}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-emerald-700 group-hover:translate-x-0.5 transition-transform shrink-0">
                      Yaz →
                    </span>
                  </a>

                  {/* E-Posta */}
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="p-4 rounded-2xl bg-paper hover:bg-crimson-50/70 border border-cobalt-900/5 transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <span className="h-10 w-10 rounded-xl bg-crimson-600 text-white flex items-center justify-center shrink-0">
                        <Mail className="h-4 w-4" />
                      </span>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-ink-muted">Resmi E-Posta</div>
                        <div className="text-sm sm:text-base font-bold text-ink break-all">
                          {siteConfig.contact.email}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-crimson-700 group-hover:translate-x-0.5 transition-transform shrink-0">
                      İlet →
                    </span>
                  </a>
                </div>

                {/* Lokasyon Kapsamı */}
                <div className="pt-3 space-y-3 border-t border-cobalt-900/10">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-crimson-600 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-xs sm:text-sm text-ink">
                        {siteConfig.contact.locations.faceToFaceTitle}
                      </h3>
                      <p className="text-xs text-ink-muted mt-0.5 leading-relaxed">
                        {siteConfig.contact.locations.faceToFaceDetail}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Globe2 className="h-4 w-4 text-cobalt-700 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-xs sm:text-sm text-ink">
                        {siteConfig.contact.locations.onlineTitle}
                      </h3>
                      <p className="text-xs text-ink-muted mt-0.5 leading-relaxed">
                        {siteConfig.contact.locations.onlineDetail}
                      </p>
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
