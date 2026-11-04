"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/config/site";

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export const FAQ_DATA: FaqItem[] = [
  {
    question: "Birebir özel dersler hangi illerde ve hangi formatlarda sunuluyor?",
    answer:
      "İstanbul’un tüm ilçelerinde, evinizin konforunda, güvenli ve verimli bir ortamda birebir yüz yüze özel ders hizmeti sağlıyoruz. Tüm Türkiye’de ise teknolojinin imkânlarıyla, coğrafi sınırları ortadan kaldıran interaktif online eğitim modellerimizle yanınızdayız.",
    category: "Hizmet Ağı",
  },
  {
    question: "Kişiye özel Hata Defteri ve Sıfırlama Tekniği nedir?",
    answer:
      "Öğrencinin ödevlerde, denemelerde ya da yazılı sınavlarda takıldığı soru tipleri dijital bir hata defterine işlenir. Sınav öncesinde genel tekrar yerine yalnızca bu hata havuzu eritilir; eksikler ve hatalar sıfırlanarak doğrudan net artışına dönüştürülür.",
    category: "Pedagojik Yöntem",
  },
  {
    question: "Veliler ders ve gelişim sürecinden nasıl haberdar edilir?",
    answer:
      "Her dersin bitiminde veliye WhatsApp üzerinden 'Bugün ne işledik, öğrencinin durumu ne, ödev nedir?' gibi başlıklar içeren profesyonel ders sonu raporu iletilir. Ayrıca aylık periyotlarla; çözülebilen yeni soru adetlerini, deneme ve yazılı sınavlarındaki puan yükselişlerini ve odaklanma gelişimini gösteren performans değerlendirmesi sunulur.",
    category: "Veli İletişimi",
  },
  {
    question: "Yeni Nesil Türkiye Yüzyılı Maarif Modeline uyum nasıl sağlanır?",
    answer:
      "Öğretmen kadromuz yeni nesil Maarif Modeline tam hâkimdir. Ezberci ve tek tip kalıplar yerine; Flipped Classroom (Ters Yüz Sınıf) ile derse aktif katılım, Active Recall bilgi kartları ile kalıcı hafıza ve öğrencinin kendi anlama hızına uyumlu VIP Süreç Yönetimi uygulanır.",
    category: "Maarif Modeli",
  },
  {
    question: "Kurucumuz Bahadır Aybar hangi dersleri bizzat yürütmektedir?",
    answer:
      "AYBARİst AKADEMİ Kurucusu Bahadır Aybar; KPSS Eğitim Bilimleri (Öğretmen Adayları) ile Üniversite düzeyinde Felsefe, Sosyoloji ve Psikoloji bölümlerinin tüm akademik derslerini ve mentorluk programlarını bizzat yüksek akademik standartlarda yürütmektedir.",
    category: "Kurucu Mentorluğu",
  },
];

interface FaqSectionProps {
  heading?: string;
  lead?: string;
  className?: string;
}

export default function FaqSection({
  heading = "Sıkça Sorulan Sorular",
  lead = "",
  className = "",
}: FaqSectionProps) {
  // Varsayılan olarak tüm maddeler kapalı (null) — Sadece tıklanınca açılır
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className={`py-10 sm:py-14 bg-paper-warm/40 border-t border-cobalt-900/10 ${className}`}>
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="max-w-3xl mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cobalt-100/70 border border-cobalt-200 text-cobalt-900 text-xs font-bold tracking-wide uppercase mb-2">
            <HelpCircle className="h-3.5 w-3.5 text-cobalt-700" />
            <span>Merak Edilenler</span>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-ink tracking-tight">
            {heading}
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-ink-muted leading-relaxed">
            {lead}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          <div className="lg:col-span-8 space-y-2.5">
            {FAQ_DATA.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "bg-white border-crimson-500/50 shadow-md ring-1 ring-crimson-500/20"
                      : "bg-white border-cobalt-900/10 hover:border-crimson-300 hover:shadow-xs"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(idx)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-3.5 sm:p-4 flex items-center justify-between gap-3 cursor-pointer focus-visible:ring-2 focus-visible:ring-crimson-600 focus-visible:outline-none rounded-xl"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className={`text-xs font-black px-2 py-0.5 rounded-md shrink-0 transition-colors ${
                        isOpen
                          ? "text-crimson-700 bg-crimson-50 border border-crimson-200/60"
                          : "text-cobalt-700 bg-cobalt-50"
                      }`}>
                        0{idx + 1}
                      </span>
                      <h3 className={`text-sm sm:text-[15px] font-bold leading-snug transition-colors ${
                        isOpen ? "text-cobalt-950 font-extrabold" : "text-ink"
                      }`}>
                        {item.question}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-crimson-600" : "text-cobalt-700"
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-4 pt-1 text-xs sm:text-sm text-ink-muted leading-relaxed border-t border-cobalt-900/5 bg-paper/40">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Sağ Kolon: Hızlı Bilgi & WhatsApp Danışma Kartı (Kompakt) */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-cobalt-900/12 p-5 sm:p-6 shadow-sm sticky top-24">
            <span className="text-xs font-extrabold uppercase tracking-wider text-crimson-600">
              Sorunuz mu var?
            </span>
            <h3 className="text-base sm:text-lg font-bold text-ink mt-0.5">
              Size Özel Bilgilendirme
            </h3>
            <p className="text-xs sm:text-sm text-ink-muted mt-1.5 leading-relaxed">
              Bilgi almak için yazabilirsiniz.
            </p>

            <div className="mt-4 pt-4 border-t border-cobalt-900/10 space-y-2.5">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5b] active:scale-[0.98] text-white py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold shadow-sm transition-all focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none"
              >
                <span>WhatsApp ile Danışın</span>
              </a>
              <div className="text-center text-xs text-ink-subtle">
                Bilgi Al
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
