"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Globe2, MessageCircle, ArrowUpRight } from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import { programCategories } from "@/data/content";
import { AybarCrestEmblem } from "@/components/brand/AybarCrest";

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
      {/* 1. Clean Cobalt Header */}
      <section className="relative studio-hero text-white border-b border-white/15 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -bottom-20 text-white/[0.06]"
        >
          <AybarCrestEmblem variant="watermark" className="h-[420px] w-[420px]" />
        </div>

        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tightest leading-[1.12] text-white">
              İletişim & Ücretsiz Tanışma Seansı
            </h1>

            <p className="mt-4 text-base sm:text-lg text-cobalt-50/95 leading-relaxed">
              İlk derse başlamadan önce gerçekleştirdiğimiz 30 dakikalık ücretsiz
              tanışma seansı ve birebir özel ders planlaması için bizimle
              iletişime geçebilirsiniz.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Clean 2-Column Content */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Friendly WhatsApp Starter Form */}
            <form
              onSubmit={handleSubmit}
              className="lg:col-span-7 rounded-2xl bg-white p-6 sm:p-8 border border-cobalt-900/12 shadow-card space-y-6"
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
                <label className="block text-sm font-extrabold text-ink mb-2.5">
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
                        className={`rounded-lg px-3.5 py-3 text-left text-[13.5px] sm:text-sm font-bold border transition-all min-h-[46px] cursor-pointer ${
                          isActive
                            ? "bg-cobalt-700 text-white border-cobalt-700 shadow-sm"
                            : "bg-paper text-ink border-cobalt-900/12 hover:border-cobalt-700/40 hover:bg-cobalt-50/50"
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
                <label className="block text-sm font-extrabold text-ink mb-2.5">
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
                        className={`rounded-lg px-4 py-3 text-left text-sm sm:text-[15px] font-bold border transition-all min-h-[46px] cursor-pointer ${
                          isActive
                            ? "bg-cobalt-700 text-white border-cobalt-700 shadow-sm"
                            : "bg-paper text-ink border-cobalt-900/12 hover:border-cobalt-700/40 hover:bg-cobalt-50/50"
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
                <label className="block text-sm font-extrabold text-ink">
                  3. Öğrenci Adı veya Notunuz (İsteğe Bağlı)
                </label>

                <input
                  type="text"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="Öğrenci veya Veli Adı"
                  className="w-full min-h-[48px] rounded-lg px-4 py-3 text-base bg-paper border border-cobalt-900/15 focus:outline-none focus:border-cobalt-700 text-ink placeholder:text-ink-subtle"
                />

                <textarea
                  rows={3}
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Sınıf düzeyi, hedef sınav veya ilçe bilgisi..."
                  className="w-full rounded-lg px-4 py-3 text-base bg-paper border border-cobalt-900/15 focus:outline-none focus:border-cobalt-700 text-ink placeholder:text-ink-subtle"
                />
              </div>

              <button
                type="submit"
                className="w-full min-h-[50px] inline-flex items-center justify-center gap-2.5 rounded-lg bg-crimson-600 hover:bg-crimson-700 text-white py-3.5 px-6 text-base font-extrabold transition-colors shadow-crimson cursor-pointer"
              >
                <span>WhatsApp ile Hemen Gönder</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </form>

            {/* Right Column: Clean Contact & Verbatim Locations Card */}
            <div className="lg:col-span-5 rounded-2xl bg-white p-6 sm:p-8 border border-cobalt-900/12 shadow-card space-y-6">
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-ink">
                İletişim Bilgilerimiz
              </h2>

              <div className="space-y-4">
                <a
                  href={siteConfig.contact.phoneHref}
                  className="flex items-center gap-3.5 p-4 rounded-xl bg-paper border border-cobalt-900/10 hover:border-cobalt-700/40 transition-colors min-h-[56px]"
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
                  className="flex items-center gap-3.5 p-4 rounded-xl bg-paper border border-cobalt-900/10 hover:border-cobalt-700/40 transition-colors min-h-[56px]"
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#25D366]/15 text-[#178d44]">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold text-ink-muted">WhatsApp</div>
                    <div className="text-base font-extrabold text-ink truncate">
                      {siteConfig.contact.phoneDisplay}
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-ink-muted shrink-0" />
                </a>

                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-3.5 p-4 rounded-xl bg-paper border border-cobalt-900/10 hover:border-cobalt-700/40 transition-colors min-h-[56px]"
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cobalt-50 text-cobalt-700">
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
          </div>
        </div>
      </section>
    </div>
  );
}
