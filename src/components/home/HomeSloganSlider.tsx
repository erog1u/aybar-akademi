"use client";

import React, { useEffect, useState } from "react";
import { assetPath } from "@/config/site";

const SLIDES = [
  {
    src: "/images/hero-one-on-one.jpg",
    alt: "Öğretmen ve kız öğrenci birebir ders çalışırken",
    slogan: "Eğitimde Güvenin, Başarıda Uzmanlığın Adresi",
  },
  {
    src: "/images/maarif-academic-mentorship.jpg",
    alt: "Öğretmenin kıza ders anlattığı birebir çalışma",
    slogan: "33 Yıllık Tecrübe",
  },
  {
    src: "/images/istanbul-home-tutoring.jpg",
    alt: "Evde yüz yüze birebir ders",
    slogan: "EĞİTİMDE SINIR TANIMIYORUZ",
  },
  {
    src: "/images/programs-global-study.jpg",
    alt: "Birebir ders çalışan öğrenci",
    slogan: "DEĞİŞEN DÜNYAYA AYBARİST'İN GÜCÜYLE HAZIRLAN",
  },
  {
    src: "/images/online-interactive-lesson.jpg",
    alt: "Canlı online ders",
    slogan:
      "Online canlı dersler ile yüzyüze özel ders modellerini birarada sunuyoruz.",
  },
  {
    src: "/images/vip-mentorship.jpg",
    alt: "Öğretmen ve öğrenci görüşmesi",
    slogan:
      "Her öğrencimizin kendi zirvesine ulaşmasını sağlamak en büyük gurur kaynağımızdır.",
  },
] as const;

export default function HomeSloganSlider() {
  const [index, setIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % SLIDES.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  return (
    <div className="relative z-10 overflow-hidden rounded-2xl bg-cobalt-950 shadow-studio aspect-[4/3]">
      <div
        className={`flex h-full ${reduceMotion ? "" : "transition-transform duration-700 ease-out"}`}
        style={{
          width: `${SLIDES.length * 100}%`,
          transform: `translateX(-${(index * 100) / SLIDES.length}%)`,
        }}
      >
        {SLIDES.map((slide, slideIndex) => (
          <div
            key={slide.src}
            className="relative h-full shrink-0"
            style={{ width: `${100 / SLIDES.length}%` }}
            aria-hidden={slideIndex !== index}
          >
            <img
              src={assetPath(slide.src)}
              alt={slide.alt}
              width={1200}
              height={900}
              decoding="async"
              fetchPriority={slideIndex === 0 ? "high" : undefined}
              loading={slideIndex === 0 ? "eager" : "lazy"}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#04153B]/95 via-[#04153B]/55 to-transparent p-4 pr-16 sm:p-5 sm:pr-6">
              <p className="max-w-[34rem] text-sm font-extrabold leading-snug text-white sm:text-lg">
                {slide.slogan}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute left-3 top-3 flex gap-1.5" aria-hidden="true">
        {SLIDES.map((slide, dot) => (
          <span
            key={slide.src}
            className={`h-1.5 rounded-full ${dot === index ? "w-5 bg-white" : "w-1.5 bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
}
