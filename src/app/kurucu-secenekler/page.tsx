"use client";

import React, { useState } from "react";
import { assetPath } from "@/config/site";

const OPTIONS = [
  {
    id: "v2-1",
    title: "Seçenek 1: Lüks Klasik Üniversite Kütüphanesi",
    tag: "Oxford / Maarif Külliyatı",
    src: "/images/founder-v2-1-grand-library.webp",
    badge: "🏛️ Klasik Akademik Prestij",
    description:
      "Tavana kadar yükselen koyu maun ağacı kitaplıklar, binlerce gerçek deri ciltli altın varaklı ansiklopedi ve akademik külliyat, sıcak pirinç aplik lambalar ve kurucuyu öne çıkaran doğal 85mm f/1.4 lens bokeh'i. %100 gerçekçi, köklü ve otoriter akademi atmosferi.",
  },
  {
    id: "v2-2",
    title: "Seçenek 2: Panoramik Şehir Manzaralı Modern Köşe Ofis",
    tag: "Maslak/Levent Kule Ofisi",
    src: "/images/founder-v2-2-panoramic-corner.webp",
    badge: "🌆 Ferah Gün Işığı & Şehir",
    description:
      "Tavandan tabana geniş mimari cam cepheden süzülen doğal gün ışığı, flu İstanbul şehir silüeti, modern ceviz kitaplık ve gerçek yaprak dokusuna sahip sağlıklı Fiddle-Leaf Fig salon bitkisi. Son derece aydınlık, çağdaş ve lüks CEO ofisi.",
  },
  {
    id: "v2-3",
    title: "Seçenek 3: Sıcak Ahşap & Çiçekli Seçkin Maarif Odası",
    tag: "Yeşil Bankacı Lambası & Güller",
    src: "/images/founder-v2-3-classic-scholar-study.webp",
    badge: "🕯️ Sıcak Entelektüel Duruş",
    description:
      "Zengin ceviz ahşap lambri ve gömme kitaplıklar, rafların altından süzülen sıcak amber LED aydınlatmalar, klasik yeşil camlı pirinç bankacı lambası (banker's lamp) ve cam vazoda taze açmış beyaz güller ile okaliptüs yaprakları.",
  },
  {
    id: "v2-4",
    title: "Seçenek 4: Modern Mimari Doğal Taş & Meşe Lüks Ofis",
    tag: "Traverten & Kalla Zambakları",
    src: "/images/founder-v2-4-bespoke-executive.webp",
    badge: "✨ Mimari Tasarım Zarafeti",
    description:
      "Açık bej traverten/doğal taş arka plan duvarı, meşe ağacı gömme yüzer raflar, raflarda seçkin kitaplar, mimari heykel detayları ve zarif cam vazoda taze beyaz kalla zambakları. Architectural Digest standardında, rafine ve elit.",
  },
];

export default function KurucuSeceneklerPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="bg-paper text-ink min-h-screen py-10 sm:py-14">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 space-y-8">
        <div>
          <span className="text-xs font-bold tracking-wider uppercase text-crimson-600 bg-crimson-50 px-3 py-1 rounded-full border border-crimson-200">
            Ultra-Gerçekçi Arka Plan Tasarımları (V2)
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-cobalt-950 mt-3 tracking-tight">
            Kurucumuz Bahadır Aybar — 4 Farklı Mimari Ortam
          </h1>
          <p className="mt-2 text-base text-ink-muted max-w-3xl leading-relaxed">
            Bahadır Bey&apos;in yüzü, samimi tebessümü, saçları, lacivert ceketi, beyaz gömleği, ceviz makam masası, deri sümeni ve masadaki <strong>AYBARİst defteri, kalemi ve isimliği</strong> %100 orijinal netliğinde korunmuştur. Arka plan yapay 3D algısından tamamen arındırılarak gerçekçi optik alan derinliğiyle 4 farklı prestijli atmosferde yeniden oluşturuldu.
          </p>
        </div>

        {/* 4 Ana Buton */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {OPTIONS.map((opt, idx) => (
            <button
              key={opt.id}
              onClick={() => setActiveTab(idx)}
              className={`p-4 rounded-2xl border text-left transition-all ${
                activeTab === idx
                  ? "bg-cobalt-950 text-white border-cobalt-950 shadow-xl scale-[1.02]"
                  : "bg-white text-ink border-cobalt-900/10 hover:border-crimson-600 hover:shadow-md"
              }`}
            >
              <span className={`text-xs font-bold block ${activeTab === idx ? "text-crimson-400" : "text-crimson-600"}`}>
                {opt.badge}
              </span>
              <span className="font-extrabold text-sm sm:text-base block mt-1 leading-snug">
                {opt.title.split(":")[0]}
              </span>
              <span className={`text-xs block mt-1 line-clamp-1 ${activeTab === idx ? "text-cobalt-200" : "text-ink-muted"}`}>
                {opt.tag}
              </span>
            </button>
          ))}
        </div>

        {/* Büyük Önizleme */}
        <div className="bg-white rounded-2xl border border-cobalt-900/10 p-4 sm:p-6 shadow-lg space-y-4">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 shadow-inner">
            <img
              src={assetPath(OPTIONS[activeTab].src)}
              alt={OPTIONS[activeTab].title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 sm:p-5 rounded-xl bg-cobalt-50/70 border border-cobalt-900/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-crimson-600 block">
                {OPTIONS[activeTab].badge}
              </span>
              <h3 className="font-extrabold text-lg sm:text-xl text-cobalt-950 mt-0.5">
                {OPTIONS[activeTab].title}
              </h3>
              <p className="mt-1 text-sm text-ink-muted max-w-3xl leading-relaxed">
                {OPTIONS[activeTab].description}
              </p>
            </div>
          </div>
        </div>

        {/* 4 Seçenek Yan Yana Kartlar */}
        <div>
          <h2 className="text-xl font-extrabold text-cobalt-950 mb-4">
            Tüm Tasarımları Birlikte Karşılaştırın:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {OPTIONS.map((opt, idx) => (
              <div
                key={opt.id}
                onClick={() => setActiveTab(idx)}
                className={`bg-white rounded-2xl border overflow-hidden cursor-pointer transition-all hover:shadow-xl ${
                  activeTab === idx
                    ? "border-crimson-600 ring-2 ring-crimson-600 shadow-lg scale-[1.02]"
                    : "border-cobalt-900/10 hover:border-crimson-500/60"
                }`}
              >
                <div className="aspect-[4/3] relative">
                  <img
                    src={assetPath(opt.src)}
                    alt={opt.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-2.5 left-2.5 bg-cobalt-950/85 text-white text-[11px] font-bold px-2.5 py-1 rounded-md backdrop-blur-xs">
                    {opt.badge.split(" ")[0]} {opt.title.split(":")[0]}
                  </span>
                </div>
                <div className="p-4 space-y-1">
                  <span className="text-xs font-bold text-crimson-600 block">
                    {opt.tag}
                  </span>
                  <h4 className="font-extrabold text-sm text-cobalt-950 line-clamp-1">
                    {opt.title}
                  </h4>
                  <p className="text-xs text-ink-muted line-clamp-2 leading-relaxed">
                    {opt.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
