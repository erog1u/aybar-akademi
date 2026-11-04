"use client";

import React, { useState } from "react";
import { assetPath } from "@/config/site";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

const OPTIONS = [
  {
    id: "option-1",
    title: "Seçenek 1: Lüks Beyaz Orkide & Klasik Ciltli Kütüphane",
    tag: "Önerilen Klasik Prestij",
    src: "/images/founder-option-1-orchid.webp",
    description:
      "Mat fildişi saksıda asil dökümlü beyaz Phalaenopsis orkidesi, altın varak kabartmalı bordo/lacivert deri ciltli klasik akademik kitaplar ve pirinç kitap tutucular. Sıcak ve köklü kurumsal akademi havası.",
  },
  {
    id: "option-2",
    title: "Seçenek 2: Heykelsi Japon Ardıç Bonsai & Çağdaş Felsefe Ciltleri",
    tag: "Modern Zen & Bilgelik",
    src: "/images/founder-option-2-bonsai.webp",
    description:
      "Sığ arduvaz saksıda asırlık ardıç ağacı formunda Japon Bonsai sanatı, modern beyaz sert kapaklı felsefe ve eğitim bilimi ciltleri, Carrara mermer kavisli kitap desteği ve mini pirinç kum saati.",
  },
  {
    id: "option-3",
    title: "Seçenek 3: Beyaz Manolya / Şakayık Aranjmanı & Prestij Kütüphanesi",
    tag: "Taze & Editoryal Zarafet",
    src: "/images/founder-option-3-magnolia.webp",
    description:
      "Yivli buzlu cam vazoda taze beyaz manolyalar, şakayıklar ve okaliptüs aranjmanı, derin lacivert/bordo ciltli ansiklopediler ve bronz armiller gök küresi. Taze, canlı ve yüksek entelektüel duruş.",
  },
  {
    id: "option-4",
    title: "Seçenek 4: Barış Çiçeği (Spathiphyllum) & Altın Geometrik Heykel",
    tag: "Çağdaş Liderlik Ofisi",
    src: "/images/founder-option-4-botanical-gold.webp",
    description:
      "Dikey yivli antrasit ve altın şeritli saksıda beyaz yelken çiçekleri açmış canlı Spathiphyllum, altın yaldız sırtlı liderlik kitapları ve modern geometrik pirinç heykel.",
  },
];

export default function KurucuSeceneklerPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="bg-paper text-ink min-h-screen py-10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-8">
        <div>
          <span className="text-xs font-bold tracking-wider uppercase text-crimson-600 bg-crimson-50 px-3 py-1 rounded-full border border-crimson-200">
            Tasarım Karşılaştırma Galerisi
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-cobalt-950 mt-3 tracking-tight">
            Kurucumuz Bahadır Aybar — Arka Plan Seçenekleri
          </h1>
          <p className="mt-2 text-base text-ink-muted max-w-2xl">
            Bahadır Bey&apos;in yüzü, gülüşü, lacivert ceketi, beyaz gömleği, ceviz masası, deri sümeni ve masadaki <strong>AYBARİst defteri ile isimliği</strong> birebir korunmuştur. Arka plandaki bitki ve kitaplar 4 farklı konseptte yeniden üretildi.
          </p>
        </div>

        {/* Tab Butonları */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {OPTIONS.map((opt, idx) => (
            <button
              key={opt.id}
              onClick={() => setActiveTab(idx)}
              className={`p-3.5 rounded-xl border text-left transition-all ${
                activeTab === idx
                  ? "bg-cobalt-950 text-white border-cobalt-950 shadow-lg scale-[1.02]"
                  : "bg-white text-ink border-cobalt-900/10 hover:border-crimson-600"
              }`}
            >
              <span className={`text-[11px] font-bold block ${activeTab === idx ? "text-crimson-400" : "text-crimson-600"}`}>
                {opt.tag}
              </span>
              <span className="font-extrabold text-sm sm:text-base block mt-0.5">
                {opt.title.split(":")[0]}
              </span>
            </button>
          ))}
        </div>

        {/* Büyük Önizleme */}
        <div className="bg-white rounded-2xl border border-cobalt-900/10 p-4 sm:p-6 shadow-md space-y-4">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100">
            <img
              src={assetPath(OPTIONS[activeTab].src)}
              alt={OPTIONS[activeTab].title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 rounded-xl bg-cobalt-50/60 border border-cobalt-900/10">
            <h3 className="font-extrabold text-lg text-cobalt-950">
              {OPTIONS[activeTab].title}
            </h3>
            <p className="mt-1 text-sm text-ink-muted leading-relaxed">
              {OPTIONS[activeTab].description}
            </p>
          </div>
        </div>

        {/* 4 Seçenek Yan Yana */}
        <div>
          <h2 className="text-lg font-bold text-cobalt-950 mb-4">
            Tüm Seçenekleri Yan Yana İnceleyin:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {OPTIONS.map((opt, idx) => (
              <div
                key={opt.id}
                onClick={() => setActiveTab(idx)}
                className={`bg-white rounded-xl border overflow-hidden cursor-pointer transition-all hover:shadow-xl ${
                  activeTab === idx
                    ? "border-crimson-600 ring-2 ring-crimson-600 shadow-md scale-[1.02]"
                    : "border-cobalt-900/10 hover:border-crimson-500/50"
                }`}
              >
                <div className="aspect-[4/3] relative">
                  <img
                    src={assetPath(opt.src)}
                    alt={opt.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-cobalt-950/80 text-white text-[11px] font-bold px-2 py-0.5 rounded">
                    {opt.title.split(":")[0]}
                  </span>
                </div>
                <div className="p-3">
                  <span className="text-xs font-bold text-crimson-600 block">
                    {opt.tag}
                  </span>
                  <p className="text-xs text-ink-muted mt-1 line-clamp-2">
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
