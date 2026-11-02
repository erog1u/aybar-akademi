import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] bg-cobalt-950 halftone-cobalt text-white flex items-center justify-center px-4 py-20">
      <div className="max-w-xl w-full border border-white/15 bg-cobalt-900/70 p-8 sm:p-12 text-center">
        <div className="inline-block px-3 py-1 bg-crimson-600 text-white font-mono text-xs font-bold tracking-[0.16em] mb-5">
          HATA KODU · 404
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tightest">
          Aradığınız Sayfa Bulunamadı
        </h1>
        <p className="mt-3 text-sm sm:text-base text-cobalt-100/85 leading-relaxed">
          Aradığınız bağlantı taşınmış veya kaldırılmış olabilir. Ana sayfaya
          dönerek tüm eğitim programlarımızı inceleyebilirsiniz.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-crimson-600 hover:bg-white text-white hover:text-cobalt-950 px-6 py-3.5 text-sm font-bold transition-colors"
          >
            <span>Ana Sayfaya Dön</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
