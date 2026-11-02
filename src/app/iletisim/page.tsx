"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Globe2, ArrowUpRight, Check } from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import { programCategories } from "@/data/content";
import { MaskedLines } from "@/components/motion/Primitives";
import { AybarCrestEmblem } from "@/components/brand/AybarCrest";

export default function IletisimPage() {
  const [selectedProgram, setSelectedProgram] = useState(
    programCategories[0].title
  );
  const [format, setFormat] = useState("İstanbul Yüz Yüze Özel Ders");
  const [studentName, setStudentName] = useState("");
  const [gradeOrGoal, setGradeOrGoal] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      "Merhaba, Aybar Akademi birebir özel ders ve 30 dakikalık ücretsiz tanışma seansı için bilgi almak istiyorum.",
      `• Program: ${selectedProgram}`,
      `• Tercih Edilen Format: ${format}`,
      studentName.trim() ? `• Öğrenci / Veli Adı: ${studentName.trim()}` : "",
      gradeOrGoal.trim() ? `• Sınıf / Hedef Sınav: ${gradeOrGoal.trim()}` : "",
      note.trim() ? `• Not / İlçe: ${note.trim()}` : "",
    ].filter(Boolean);

    window.open(getWhatsAppUrl(lines.join("\n")), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-paper text-ink overflow-x-clip">
      {/* Cobalt Studio Hero */}
      <section className="relative bg-gradient-to-br from-[#0055E0] via-cobalt-700 to-cobalt-950 halftone-cobalt text-white border-b border-white/15 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -bottom-20 text-white/[0.06]"
        >
          <AybarCrestEmblem variant="watermark" className="h-[440px] w-[440px]" />
        </div>

        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-22 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-crimson-600 text-white text-xs font-bold mb-6 shadow-crimson">
            <Check className="h-3.5 w-3.5" />
            <span>İletişim & Ücretsiz Keşif Seansı</span>
          </div>

          <MaskedLines
            as="h1"
            immediate
            className="text-3xl sm:text-5xl lg:text-[3.4rem] font-extrabold tracking-tightest leading-[1.06] max-w-3xl"
            lines={[
              "30 Dakikalık Ücretsiz Tanışma",
              <span key="hl" className="font-serif italic font-medium text-cobalt-200">
                ve Özel Ders Başvurusu
              </span>,
            ]}
          />

          <p className="mt-5 text-base sm:text-lg text-cobalt-50/95 leading-relaxed max-w-2xl">
            İlk derse başlamadan önce gerçekleştirdiğimiz 30 dakikalık ücretsiz
            tanışma seansı ve öğrenme stili analizi için formu doldurabilir veya
            doğrudan bize ulaşabilirsiniz.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left 7 Columns: Quick WhatsApp Application Form */}
            <form
              onSubmit={handleSubmit}
              className="lg:col-span-7 bg-white border border-cobalt-900/15 shadow-card p-6 sm:p-10 space-y-7"
            >
              <div className="pb-5 border-b border-cobalt-900/10">
                <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-ink">
                  Özel Ders & Tanışma Seansı Planlayıcı
                </h2>
                <p className="mt-1 text-sm text-ink-muted">
                  Seçimlerinizi yapıp tek tıkla doğrudan WhatsApp danışma
                  hattımıza iletebilirsiniz.
                </p>
              </div>

              {/* Step 1: Program Category */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-cobalt-800 mb-3">
                  1. Eğitim Alanı Seçin
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {programCategories.map((cat) => {
                    const active = selectedProgram === cat.title;
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setSelectedProgram(cat.title)}
                        className={`text-left px-4 py-3 text-xs sm:text-sm font-bold border transition-colors ${
                          active
                            ? "bg-cobalt-700 text-white border-cobalt-700"
                            : "bg-paper text-ink border-cobalt-900/12 hover:border-cobalt-700"
                        }`}
                      >
                        {cat.title}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Format */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-cobalt-800 mb-3">
                  2. Ders Formatı Tercihi
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    "İstanbul Yüz Yüze Özel Ders",
                    "Tüm Türkiye Canlı Online",
                  ].map((item) => {
                    const active = format === item;
                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setFormat(item)}
                        className={`text-left px-4 py-3 text-xs sm:text-sm font-bold border transition-colors ${
                          active
                            ? "bg-crimson-600 text-white border-crimson-600"
                            : "bg-paper text-ink border-cobalt-900/12 hover:border-cobalt-700"
                        }`}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-ink mb-1.5">
                    Öğrenci veya Veli Adı Soyadı
                  </label>
                  <input
                    type="text"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="Örn: Ayşe Yılmaz"
                    className="w-full px-4 py-3 text-sm bg-paper border border-cobalt-900/15 focus:outline-none focus:border-cobalt-700"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-ink mb-1.5">
                    Sınıf veya Hedef Sınav / Ders
                  </label>
                  <input
                    type="text"
                    value={gradeOrGoal}
                    onChange={(e) => setGradeOrGoal(e.target.value)}
                    placeholder="Örn: 12. Sınıf YKS Matematik / IELTS"
                    className="w-full px-4 py-3 text-sm bg-paper border border-cobalt-900/15 focus:outline-none focus:border-cobalt-700"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-ink mb-1.5">
                  İlçe veya Eklemek İstediğiniz Not (İsteğe Bağlı)
                </label>
                <textarea
                  rows={3}
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Örn: Kadıköy yüz yüze ders talep ediyoruz..."
                  className="w-full px-4 py-3 text-sm bg-paper border border-cobalt-900/15 focus:outline-none focus:border-cobalt-700"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-crimson-600 hover:bg-cobalt-900 text-white py-4 px-6 text-sm font-extrabold transition-colors shadow-crimson"
              >
                <span>WhatsApp Üzerinden Hemen Gönder</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </form>

            {/* Right 5 Columns: Direct Contact Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-cobalt-950 text-white p-7 sm:p-8 border border-cobalt-900 shadow-studio space-y-6">
                <h3 className="text-xl font-extrabold tracking-tight">
                  Doğrudan İletişim Kanallarımız
                </h3>

                <div className="space-y-4 pt-2 border-t border-white/12">
                  <div>
                    <div className="text-xs text-cobalt-300 mb-1">
                      Telefon & WhatsApp Danışma Hattı
                    </div>
                    <a
                      href={siteConfig.contact.phoneHref}
                      className="inline-flex items-center gap-2.5 text-xl font-extrabold text-white hover:text-crimson-500 transition-colors"
                    >
                      <Phone className="h-5 w-5 text-crimson-500" />
                      <span>{siteConfig.contact.phoneDisplay}</span>
                    </a>
                  </div>

                  <div>
                    <div className="text-xs text-cobalt-300 mb-1">E-Posta</div>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-cobalt-100 hover:text-white transition-colors"
                    >
                      <Mail className="h-4 w-4 text-crimson-500" />
                      <span>{siteConfig.contact.email}</span>
                    </a>
                  </div>
                </div>

                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white py-3.5 px-5 text-sm font-bold transition-colors"
                >
                  <span>WhatsApp ile Anında Yazın</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              <div className="bg-white border border-cobalt-900/15 p-7 space-y-5 shadow-card">
                <div className="flex items-start gap-3.5">
                  <MapPin className="h-5 w-5 text-crimson-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-extrabold text-base text-ink">
                      {siteConfig.contact.locations.faceToFaceTitle}
                    </h4>
                    <p className="mt-1 text-sm text-ink-muted leading-relaxed">
                      {siteConfig.contact.locations.faceToFaceDetail}
                    </p>
                  </div>
                </div>

                <div className="pt-5 border-t border-cobalt-900/10 flex items-start gap-3.5">
                  <Globe2 className="h-5 w-5 text-cobalt-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-extrabold text-base text-ink">
                      {siteConfig.contact.locations.onlineTitle}
                    </h4>
                    <p className="mt-1 text-sm text-ink-muted leading-relaxed">
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
