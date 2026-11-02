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
    question: "İlk tanışma seansı nasıl gerçekleşir ve ücretli midir?",
    answer:
      "İlk gün ve ilk derse özgü olarak ders başlamadan önce 30 dakikalık ücretsiz bir keşif seansı yapılır. Bu süreçte öğrencinin akademik altyapısı, görsel/işitsel/kinestetik öğrenme stili ve derse karşı geliştirdiği zihinsel önyargılar saptanır. Karşılıklı sorumlulukları, ders saatine sadakati ve ödev disiplinini netleştiren taahhüdün ardından normal ders sürecine başlanır.",
    category: "Başlangıç & Keşif",
  },
  {
    question: "Birebir özel dersler hangi illerde ve hangi formatlarda sunuluyor?",
    answer:
      "İstanbul’un 39 ilçesinde öğrencinin kendi ev konforunda, güvenli ve verimli bir ortamda birebir yüz yüze özel ders hizmeti sağlıyoruz. Tüm Türkiye genelinde (81 ilde) ise coğrafi sınırları ortadan kaldıran, teknolojik olanaklarla donatılmış interaktif canlı online eğitim modellerimizle kesintisiz erişim sunuyoruz.",
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
      "AYBAR AKADEMİ Kurucusu Bahadır Aybar; KPSS Eğitim Bilimleri (Öğretmen Adayları) ile Üniversite düzeyinde Felsefe, Sosyoloji ve Psikoloji bölümlerinin tüm akademik derslerini ve mentorluk programlarını bizzat yüksek akademik standartlarda yürütmektedir.",
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
  lead = "VIP özel ders sürecimiz, Maarif Modeli uyumumuz ve veli bilgilendirme sistemimiz hakkında merak edilenler.",
  className = "",
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className={`py-14 sm:py-20 bg-paper-warm/50 border-t border-cobalt-900/10 ${className}`}>
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cobalt-100/70 border border-cobalt-200 text-cobalt-900 text-xs sm:text-[13px] font-bold tracking-wide uppercase mb-3">
            <HelpCircle className="h-3.5 w-3.5 text-cobalt-700" />
            <span>Merak Edilenler</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-ink tracking-tight">
            {heading}
          </h2>
          <p className="mt-3 text-[15px] sm:text-base text-ink-muted leading-relaxed">
            {lead}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-3.5">
            {FAQ_DATA.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "bg-white border-cobalt-700/50 shadow-md ring-1 ring-cobalt-700/15"
                      : "bg-white/80 border-cobalt-900/10 hover:border-cobalt-900/25"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(idx)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus-visible:ring-2 focus-visible:ring-cobalt-600 focus-visible:outline-none rounded-xl"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-cobalt-700 bg-cobalt-50 px-2 py-1 rounded">
                        0{idx + 1}
                      </span>
                      <h3 className="text-base sm:text-[17px] font-bold text-ink leading-snug">
                        {item.question}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 text-cobalt-700 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 text-[15px] sm:text-base text-ink-muted leading-relaxed border-t border-cobalt-900/5">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Sağ Kolon: Hızlı Bilgi & WhatsApp Danışma Kartı */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-cobalt-900/12 p-6 sm:p-7 shadow-sm sticky top-24">
            <span className="text-xs font-extrabold uppercase tracking-wider text-crimson-600">
              Sorunuz mu var?
            </span>
            <h4 className="text-lg font-bold text-ink mt-1">
              Size Özel Bilgilendirme
            </h4>
            <p className="text-sm text-ink-muted mt-2 leading-relaxed">
              Öğrencinizin sınıf düzeyi, ihtiyaç duyduğu branşlar ve 30 dakikalık
              ücretsiz tanışma seansı için doğrudan eğitim danışmanımızla
              görüşebilirsiniz.
            </p>

            <div className="mt-5 pt-5 border-t border-cobalt-900/10 space-y-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5b] active:scale-[0.98] text-white py-3 px-4 rounded-xl text-sm font-bold shadow-sm transition-all focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none"
              >
                <span>WhatsApp ile Danışın</span>
              </a>
              <div className="text-center text-xs text-ink-muted">
                30 Dk Ücretsiz Tanışma Seansı
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
