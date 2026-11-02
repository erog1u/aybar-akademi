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
import { siteConfig, assetPath, getWhatsAppUrl } from "@/config/site";
import { programCategories } from "@/data/content";
import { MaskedLines, Reveal, PhotoFrame } from "@/components/motion/Primitives";

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
      {/* 1. Canlı ve Fotoğraflı Cobalt Başlık */}
      <section className="studio-hero text-white border-b border-white/15 overflow-hidden py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <Reveal immediate y={10}>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/12 border border-white/25 text-white text-xs sm:text-[13px] font-bold tracking-wider uppercase mb-5">
                  <span className="h-2 w-2 rounded-full bg-crimson-500" />
                  <span>30 DAKİKALIK ÜCRETSİZ TANIŞMA SEANSI</span>
                </div>
              </Reveal>

              <MaskedLines
                as="h1"
                immediate
                className="text-[2.05rem] sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] text-white"
                lines={["İletişim & Ücretsiz Tanışma Seansı"]}
              />

              <Reveal immediate delay={0.12} y={12}>
                <p className="mt-5 text-base sm:text-lg text-cobalt-50/95 leading-relaxed max-w-2xl">
                  İlk derse başlamadan önce gerçekleştirdiğimiz 30 dakikalık
                  ücretsiz keşif seansı ve birebir özel ders planlaması için
                  bizimle iletişime geçebilirsiniz.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={0.12}>
                <div className="rounded-2xl bg-white p-6 sm:p-7 shadow-studio border border-white/30 text-ink">
                  <div className="text-xs font-extrabold uppercase tracking-wider text-crimson-600 mb-2">
                    Hızlı İletişim Hattı
                  </div>
                  <h3 className="text-xl font-extrabold text-cobalt-950">
                    Birebir Danışmanlık & Randevu
                  </h3>
                  <div className="mt-5 space-y-3">
                    <a
                      href={siteConfig.contact.phoneHref}
                      className="flex items-center justify-between p-3.5 rounded-xl bg-cobalt-50 hover:bg-cobalt-100 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="h-9 w-9 rounded-lg bg-cobalt-700 text-white flex items-center justify-center shrink-0">
                          <Phone className="h-4 w-4" />
                        </span>
                        <div>
                          <div className="text-xs text-ink-muted font-medium">Telefon</div>
                          <div className="text-sm font-extrabold text-cobalt-950">
                            {siteConfig.contact.phoneDisplay}
                          </div>
                        </div>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-cobalt-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>

                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="h-9 w-9 rounded-lg bg-[#25D366] text-white flex items-center justify-center shrink-0">
                          <MessageCircle className="h-4 w-4" />
                        </span>
                        <div>
                          <div className="text-xs text-emerald-800 font-medium">WhatsApp Hattı</div>
                          <div className="text-sm font-extrabold text-emerald-950">
                            Hemen Mesaj Yazın
                          </div>
                        </div>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-emerald-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2. İki Sütunlu Sade İletişim ve Planlama Alanı */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Sol Sütun: Hızlı WhatsApp Başlatıcı */}
            <Reveal className="lg:col-span-7">
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl bg-white p-6 sm:p-8 border border-cobalt-900/12 shadow-studio space-y-6"
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
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {programCategories.map((cat) => {
                      const isActive = selectedProgram === cat.shortTitle;
                      return (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => setSelectedProgram(cat.shortTitle)}
                          className={`rounded-xl px-3.5 py-3 text-left text-[13.5px] sm:text-sm font-bold border transition-all min-h-[48px] cursor-pointer active:scale-[0.98] ${
                            isActive
                              ? "bg-cobalt-700 text-white border-cobalt-700 shadow-sm"
                              : "bg-paper text-ink border-cobalt-900/12 hover:border-cobalt-700/50 hover:bg-cobalt-50/50"
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
                          className={`rounded-xl px-4 py-3 text-left text-sm sm:text-[15px] font-bold border transition-all min-h-[48px] cursor-pointer active:scale-[0.98] ${
                            isActive
                              ? "bg-cobalt-700 text-white border-cobalt-700 shadow-sm"
                              : "bg-paper text-ink border-cobalt-900/12 hover:border-cobalt-700/50 hover:bg-cobalt-50/50"
                          }`}
                        >
                          {item}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 3. Öğrenci Adı veya Notunuz */}
                <div className="space-y-3.5">
                  <label className="block text-sm font-extrabold text-cobalt-950">
                    3. Öğrenci Adı veya Notunuz (İsteğe Bağlı)
                  </label>

                  <input
                    type="text"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="Öğrenci veya Veli Adı"
                    className="w-full min-h-[48px] rounded-xl px-4 py-3 text-base bg-paper border border-cobalt-900/15 focus:outline-none focus:border-cobalt-700 text-ink placeholder:text-ink-subtle"
                  />

                  <textarea
                    rows={3}
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Sınıf düzeyi, hedef sınav veya ilçe bilgisi..."
                    className="w-full rounded-xl px-4 py-3 text-base bg-paper border border-cobalt-900/15 focus:outline-none focus:border-cobalt-700 text-ink placeholder:text-ink-subtle"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full min-h-[52px] inline-flex items-center justify-center gap-2.5 rounded-xl bg-crimson-600 hover:bg-crimson-700 active:scale-[0.98] text-white py-3.5 px-6 text-base font-extrabold transition-all shadow-crimson cursor-pointer"
                >
                  <span>WhatsApp ile Hemen Gönder</span>
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </form>
            </Reveal>

            {/* Sağ Sütun: Doğrudan İletişim Bilgileri */}
            <Reveal delay={0.08} className="lg:col-span-5">
              <div className="rounded-2xl bg-white p-6 sm:p-8 border border-cobalt-900/12 shadow-studio space-y-6">
                <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-ink">
                  İletişim Bilgilerimiz
                </h2>

                <div className="space-y-3.5">
                  <a
                    href={siteConfig.contact.phoneHref}
                    className="flex items-center gap-3.5 p-4 rounded-xl bg-paper border border-cobalt-900/10 hover:border-cobalt-700 transition-colors min-h-[56px]"
                  >
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cobalt-700 text-white">
                      <Phone className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-xs font-bold text-ink-muted">
                        Telefon
                      </div>
                      <div className="text-base sm:text-lg font-extrabold text-ink">
                        {siteConfig.contact.phoneDisplay}
                      </div>
                    </div>
                  </a>

                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 p-4 rounded-xl bg-paper border border-cobalt-900/10 hover:border-[#25D366] transition-colors min-h-[56px]"
                  >
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#25D366] text-white">
                      <MessageCircle className="h-5 w-5" />
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold text-ink-muted">
                        WhatsApp
                      </div>
                      <div className="text-base font-extrabold text-ink truncate">
                        {siteConfig.contact.phoneDisplay}
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-ink-muted shrink-0" />
                  </a>

                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="flex items-center gap-3.5 p-4 rounded-xl bg-paper border border-cobalt-900/10 hover:border-cobalt-700 transition-colors min-h-[56px]"
                  >
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-crimson-600 text-white">
                      <Mail className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-ink-muted">
                        E-Posta
                      </div>
                      <div className="text-sm sm:text-base font-bold text-ink truncate">
                        {siteConfig.contact.email}
                      </div>
                    </div>
                  </a>
                </div>

                <div className="pt-6 border-t border-cobalt-900/10 space-y-5">
                  <div className="flex items-start gap-3.5">
                    <MapPin className="h-5 w-5 text-crimson-600 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-extrabold text-base sm:text-lg text-ink">
                        {siteConfig.contact.locations.faceToFaceTitle}
                      </h3>
                      <p className="mt-1 text-sm sm:text-[15px] text-ink-muted leading-relaxed">
                        {siteConfig.contact.locations.faceToFaceDetail}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-cobalt-900/10 flex items-start gap-3.5">
                    <Globe2 className="h-5 w-5 text-cobalt-700 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-extrabold text-base sm:text-lg text-ink">
                        {siteConfig.contact.locations.onlineTitle}
                      </h3>
                      <p className="mt-1 text-sm sm:text-[15px] text-ink-muted leading-relaxed">
                        {siteConfig.contact.locations.onlineDetail}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
