"use client";

import React, { useState } from "react";
import { assetPath } from "@/config/site";

const OPTIONS = [
  {
    id: "cam-1",
    title: "Tasarım 1: Akustik Ahşap Çıtalar & Sıcak Jaluzili Pencere",
    tag: "Ahşap Çıtalar & Jaluzi Gün Işığı",
    src: "/images/founder-cam-agaci-1-akustik-jaluzi.webp",
    badge: "⭐ 1. Tercih (En Çok Beğenilen)",
    description:
      "Arka duvarda sıcak ceviz akustik ahşap çıtalar ve dikey amber LED ışıklar, sağ tarafta ahşap jaluzili modern pencereden içeri süzülen doğal gün ışığı. Arkada solda konsolda canlı iğne yapraklı yeşil dağ çamı bonsai ağacı ve şık ciltli kitaplar. Masanın tamamı kadrajda, masada AYBARİst isimliği sol önde, defter ve kalem sağda konumlandırılmıştır.",
  },
  {
    id: "cam-2",
    title: "Tasarım 2: Bej Traverten Taş Duvar & Tül Perdeli Pencere",
    tag: "Doğal Taş & Yumuşak Tül Perde",
    src: "/images/founder-cam-agaci-2-traverten-tul.webp",
    badge: "🌿 Doğal Taş Zarafeti",
    description:
      "Arka duvarda bej traverten/doğal taş mimari panel ve gizli LED aydınlatma, sağda zarif tül perdeli yüksek cam cephe. Koyu kahverengi maun masa, taş saksıda canlı yeşil çam ağacı, sol rafta kitaplar, siyah takım elbise ve temiz 3D logo.",
  },
  {
    id: "cam-3",
    title: "Tasarım 3: Lüks Masif Ceviz Duvar Panelleri & Cam Cephe",
    tag: "Tam Ceviz Panel & Maslak/Levent Stili",
    src: "/images/founder-cam-agaci-3-ceviz-panel.webp",
    badge: "🏛️ Prestijli Masif Ceviz",
    description:
      "Tüm arka duvarda zengin koyu ceviz mimari lambri paneller ve altın sarısı dikey LED kanalları, sağda tavandan tabana geniş mimari cam cephe. Masif seramik saksıda kıvrımlı gövdeli canlı çam ağacı, zengin kitap dizilimi ve koyu kahverengi makam masası.",
  },
  {
    id: "cam-4",
    title: "Tasarım 4: Çağdaş Gri Doku & Dikey Ceviz Çıta Aksanları",
    tag: "Modern Venedik Sıva & Çıta",
    src: "/images/founder-cam-agaci-4-minimal-gri-slat.webp",
    badge: "✨ Çağdaş Minimalist CEO Ofisi",
    description:
      "Modern sıcak gri mimari dokulu duvar, iki yanda ceviz akustik çıta sütunları, sağda geniş ofis penceresi. Sol konsolda seramik saksıda sağlıklı dağ çamı ve klasik ciltler, geniş ceviz masa ve siyah takım elbiseli Bahadır Bey portresi.",
  },
];

export default function KurucuSeceneklerPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="bg-paper text-ink min-h-screen py-10 sm:py-14">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 space-y-8">
        <div>
          <span className="text-xs font-bold tracking-wider uppercase text-crimson-600 bg-crimson-50 px-3 py-1 rounded-full border border-crimson-200">
            Müşteri Talepleriyle Yeniden Üretildi
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-cobalt-950 mt-3 tracking-tight">
            Kurucumuz Bahadır Aybar — Çam Ağaçlı & Koyu Masalı 4 Yeni Tasarım
          </h1>
          <p className="mt-2 text-base text-ink-muted max-w-3xl leading-relaxed">
            Bahadır Bey&apos;in ve müşterinin tüm istekleri eksiksiz uygulandı: <strong>Siyah ceket</strong>, masanın tamamının kadrajda göründüğü <strong>koyu kahverengi geniş makam masası</strong>, çiçek yerine <strong>canlı minyatür çam ağacı</strong>, <strong>arkada solda kitaplar</strong>, masadaki AYBARİst isimlik ve defterinin dengeli yeni konumu, <strong>&quot;Bilginin Kaynağı&quot; sloganı kaldırılarak</strong> arkada 4 farklı şık mimari tasarım.
          </p>
        </div>

        {/* Seçim Butonları */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {OPTIONS.map((opt, idx) => (
            <button
              key={opt.id}
              onClick={() => setActiveTab(idx)}
              className={`p-3.5 sm:p-4 rounded-2xl border text-left transition-all ${
                activeTab === idx
                  ? "bg-cobalt-950 text-white border-cobalt-950 shadow-xl scale-[1.02]"
                  : "bg-white text-ink border-cobalt-900/10 hover:border-crimson-600 hover:shadow-md"
              }`}
            >
              <span className={`text-xs font-bold block ${activeTab === idx ? "text-crimson-400" : "text-crimson-600"}`}>
                {opt.badge}
              </span>
              <span className="font-extrabold text-xs sm:text-sm block mt-1 leading-snug">
                {opt.title.split(":")[0]}
              </span>
              <span className={`text-[11px] block mt-1 line-clamp-1 ${activeTab === idx ? "text-cobalt-200" : "text-ink-muted"}`}>
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

        {/* Tüm Seçenekler Yan Yana Kartlar */}
        <div>
          <h2 className="text-xl font-extrabold text-cobalt-950 mb-4">
            Tüm Tasarımları Birlikte İnceleyin:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
                  <span className="absolute top-2.5 left-2.5 bg-cobalt-950/85 text-white text-[10px] font-bold px-2 py-0.5 rounded-md backdrop-blur-xs">
                    {opt.badge.split(" ")[0]} {opt.title.split(":")[0]}
                  </span>
                </div>
                <div className="p-3.5 space-y-1">
                  <span className="text-[11px] font-bold text-crimson-600 block">
                    {opt.tag}
                  </span>
                  <h4 className="font-extrabold text-xs text-cobalt-950 line-clamp-1">
                    {opt.title}
                  </h4>
                  <p className="text-[11px] text-ink-muted line-clamp-2 leading-relaxed">
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
