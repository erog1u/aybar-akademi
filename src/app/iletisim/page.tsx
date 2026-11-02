"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Globe2,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import { programCategories } from "@/data/content";
import { MaskedLines } from "@/components/motion/Primitives";
import { AybarInstitutionalSeal } from "@/components/brand/AybarCrest";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

const LESSON_FORMATS = ["İstanbul’da Yüz Yüze", "Canlı Online"] as const;

export default function IletisimPage() {
  const [selectedProgram, setSelectedProgram] = useState<string>(
    programCategories[0].shortTitle
  );
  const [format, setFormat] = useState<string>(LESSON_FORMATS[0]);
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

      {/* 1. Canlı ve Ferah Cobalt Başlık */}
      <section className="studio-hero text-white border-b border-white/15 overflow-hidden py-12 sm:py-16 lg:py-20 relative">
        <div className="absolute top-1/4 left-1/10 w-80 h-80 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/12 border border-white/25 text-white text-xs sm:text-[13px] font-bold tracking-wider uppercase mb-5 shadow-sm backdrop-blur-xs">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="radar-beacon absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                </span>
                <span>30 DAKİKALIK ÜCRETSİZ TANIŞMA SEANSI</span>
              </div>

              <MaskedLines
                as="h1"
                className="text-[2.05rem] sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] text-white"
                lines={["İletişim & Ücretsiz Tanışma Seansı"]}
              />

              <p className="mt-5 text-base sm:text-lg text-cobalt-50/95 leading-relaxed max-w-2xl">
                İlk derse başlamadan önce gerçekleştirdiğimiz 30 dakikalık
                ücretsiz keşif seansı ve birebir özel ders planlaması için
                bizimle iletişime geçebilirsiniz.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/30 via-indigo-400/20 to-sky-300/30 rounded-3xl blur-2xl animate-gentle-glow pointer-events-none" />
              <div className="p-6 rounded-2xl bg-white/10 border border-white/20 text-center relative z-10 shadow-studio backdrop-blur-md">
                <AybarInstitutionalSeal variant="dark" />
              </div>
            </div>
          </div>

          {/* Hero Tabanı: 4 İletişim & Erişim Sütunu (Ferah Cam Panel Kartları) */}
          <div className="mt-10 pt-8 border-t border-white/15 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 flex items-center gap-3.5">
              <span className="font-brand text-2xl sm:text-3xl font-extrabold text-white">İstanbul</span>
              <div className="text-xs sm:text-[13px] text-cobalt-100 leading-snug">
                <strong className="text-white block font-bold">39 İlçede Yüz Yüze</strong>
                Evinizin konforunda özel ders
              </div>
            </div>
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 flex items-center gap-3.5">
              <span className="font-brand text-2xl sm:text-3xl font-extrabold text-white">81 İl</span>
              <div className="text-xs sm:text-[13px] text-cobalt-100 leading-snug">
                <strong className="text-white block font-bold">Canlı Online</strong>
                Tüm Türkiye’de interaktif
              </div>
            </div>
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 flex items-center gap-3.5">
              <span className="font-brand text-2xl sm:text-3xl font-extrabold text-white">Birebir</span>
              <div className="text-xs sm:text-[13px] text-cobalt-100 leading-snug">
                <strong className="text-white block font-bold">VIP Danışmanlık</strong>
                Kişiye özel süreç yönetimi
              </div>
            </div>
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 flex items-center gap-3.5">
              <span className="font-brand text-2xl sm:text-3xl font-extrabold text-white">Direkt</span>
              <div className="text-xs sm:text-[13px] text-cobalt-100 leading-snug">
                <strong className="text-white block font-bold">WhatsApp Hattı</strong>
                Hızlı randevu ve bilgilendirme
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. İki Sütunlu Sade İletişim ve Planlama Alanı (Kutucuk Yığını Yok!) */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Sol Sütun: Hızlı WhatsApp Başlatıcı */}
            <div className="lg:col-span-7">
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl bg-white p-6 sm:p-8 border border-cobalt-900/10 shadow-sm space-y-6"
              >
                <div>
                  <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-ink">
                    Ücretsiz Tanışma Seansı Başlatın
                  </h2>
                  <p className="mt-1.5 text-sm sm:text-[15px] text-ink-muted leading-relaxed">
                    Eğitim alanı ve ders tercihinizi seçerek WhatsApp üzerinden
                    doğrudan bize ulaşabilirsiniz.
                  </p>
                </div>

                {/* 1. Eğitim Alanı Seçin */}
                <div>
                  <label className="block text-sm font-extrabold text-cobalt-950 mb-2.5">
                    1. Eğitim Alanı Seçin
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {programCategories.map((cat) => {
                      const isActive = selectedProgram === cat.shortTitle;
                      return (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => setSelectedProgram(cat.shortTitle)}
                          className={`rounded-xl px-3.5 py-2.5 text-left text-xs sm:text-[13px] font-bold border transition-colors cursor-pointer ${
                            isActive
                              ? "bg-cobalt-700 text-white border-cobalt-700 shadow-sm"
                              : "bg-paper text-ink border-cobalt-900/10 hover:bg-cobalt-50"
                          }`}
                        >
                          {cat.shortTitle}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Ders Tercihi */}
                <div>
                  <label className="block text-sm font-extrabold text-cobalt-950 mb-2.5">
                    2. Ders Tercihi
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {LESSON_FORMATS.map((item) => {
                      const isActive = format === item;
                      return (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setFormat(item)}
                          className={`rounded-xl px-4 py-2.5 text-left text-xs sm:text-sm font-bold border transition-colors cursor-pointer ${
                            isActive
                              ? "bg-cobalt-700 text-white border-cobalt-700 shadow-sm"
                              : "bg-paper text-ink border-cobalt-900/10 hover:bg-cobalt-50"
                          }`}
                        >
                          {item}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 3. Öğrenci Adı veya Notunuz */}
                <div className="space-y-3">
                  <label className="block text-sm font-extrabold text-cobalt-950">
                    3. Öğrenci Adı veya Notunuz (İsteğe Bağlı)
                  </label>

                  <input
                    type="text"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="Öğrenci veya Veli Adı"
                    className="w-full min-h-[46px] rounded-xl px-4 py-2.5 text-sm sm:text-base bg-paper border border-cobalt-900/10 focus:outline-none focus:border-cobalt-700 text-ink placeholder:text-ink-subtle"
                  />

                  <textarea
                    rows={3}
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Sınıf düzeyi, hedef sınav veya ilçe bilgisi..."
                    className="w-full rounded-xl px-4 py-2.5 text-sm sm:text-base bg-paper border border-cobalt-900/10 focus:outline-none focus:border-cobalt-700 text-ink placeholder:text-ink-subtle"
                  />
                </div>

                {/* Canlı WhatsApp Mesaj Önizlemesi (Cancan & Şeffaflık) */}
                <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/60 text-xs sm:text-[13px] text-emerald-950 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-emerald-800">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>WhatsApp Mesaj Önizlemesi:</span>
                  </div>
                  <div className="font-mono text-[11px] sm:text-xs text-emerald-900 bg-white/80 p-2.5 rounded-lg border border-emerald-200/50 leading-relaxed space-y-0.5">
                    <div>Merhaba, AYBAR AKADEMİ birebir özel ders ve 30 dakikalık ücretsiz tanışma seansı için bilgi almak istiyorum.</div>
                    <div>• Eğitim Alanı: <strong className="font-bold">{selectedProgram}</strong></div>
                    <div>• Ders Tercihi: <strong className="font-bold">{format}</strong></div>
                    {studentName.trim() && <div>• Öğrenci/Veli: <strong className="font-bold">{studentName.trim()}</strong></div>}
                    {note.trim() && <div>• Not: <strong className="font-bold">{note.trim()}</strong></div>}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full min-h-[50px] inline-flex items-center justify-center gap-2 rounded-xl bg-crimson-600 hover:bg-crimson-700 active:scale-[0.98] text-white py-3 px-6 text-sm sm:text-base font-bold transition-all shadow-crimson cursor-pointer"
                >
                  <span>WhatsApp ile Hemen Gönder</span>
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </form>
            </div>

            {/* Sağ Sütun: Doğrudan İletişim Bilgileri (Kutu içinde kutu değil, temiz liste) */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-white p-6 sm:p-8 border border-cobalt-900/10 shadow-sm space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-crimson-600">
                    Doğrudan Hat
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-ink mt-1">
                    İletişim Bilgilerimiz
                  </h2>
                </div>

                <div className="space-y-4">
                  <a
                    href={siteConfig.contact.phoneHref}
                    className="flex items-center gap-3.5 pb-4 border-b border-cobalt-900/10 hover:text-cobalt-700 transition-colors"
                  >
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cobalt-50 text-cobalt-700">
                      <Phone className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-xs font-bold text-ink-muted">Telefon</div>
                      <div className="text-base sm:text-lg font-extrabold text-ink">
                        {siteConfig.contact.phoneDisplay}
                      </div>
                    </div>
                  </a>

                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 pb-4 border-b border-cobalt-900/10 hover:text-emerald-600 transition-colors"
                  >
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-[#25D366]">
                      <MessageCircle className="h-5 w-5" />
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold text-ink-muted">WhatsApp Danışma Hattı</div>
                      <div className="text-base font-extrabold text-ink truncate">
                        {siteConfig.contact.phoneDisplay}
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-ink-muted shrink-0" />
                  </a>

                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="flex items-center gap-3.5 pb-4 border-b border-cobalt-900/10 hover:text-crimson-600 transition-colors"
                  >
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-crimson-50 text-crimson-600">
                      <Mail className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-ink-muted">E-Posta</div>
                      <div className="text-sm sm:text-base font-bold text-ink truncate">
                        {siteConfig.contact.email}
                      </div>
                    </div>
                  </a>
                </div>

                <div className="pt-2 space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-crimson-600 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-sm sm:text-base text-ink">
                        {siteConfig.contact.locations.faceToFaceTitle}
                      </h3>
                      <p className="mt-0.5 text-xs sm:text-sm text-ink-muted leading-relaxed">
                        {siteConfig.contact.locations.faceToFaceDetail}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Globe2 className="h-5 w-5 text-cobalt-700 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-sm sm:text-base text-ink">
                        {siteConfig.contact.locations.onlineTitle}
                      </h3>
                      <p className="mt-0.5 text-xs sm:text-sm text-ink-muted leading-relaxed">
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
