import React from "react";
import Link from "next/link";
import { ArrowUpRight, Home, BookOpen, PhoneCall } from "lucide-react";
import { AybarInstitutionalSeal } from "@/components/brand/AybarCrest";
import { getWhatsAppUrl } from "@/config/site";

export default function NotFound() {
  return (
    <section className="min-h-[75vh] bg-paper flex items-center justify-center px-4 py-16 sm:py-24">
      <div className="max-w-xl w-full bg-white border border-cobalt-900/12 rounded-3xl p-8 sm:p-12 text-center shadow-card">
        <div className="flex justify-center mb-6">
          <AybarInstitutionalSeal variant="light" />
        </div>

        <div className="inline-block px-3.5 py-1 rounded-full bg-crimson-50 text-crimson-600 border border-crimson-200 text-xs font-bold tracking-wider mb-4">
          HATA KODU 404 · SAYFA BULUNAMADI
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
          Aradığınız Sayfaya Ulaşılamadı
        </h1>

        <p className="mt-3 text-[15px] sm:text-base text-ink-muted leading-relaxed">
          Bağlantı taşınmış, güncellenmiş veya kaldırılmış olabilir. İhtiyacınız
          olan bölüme aşağıdaki yönlendirmelerle hemen ulaşabilirsiniz.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
          <Link
            href="/"
            className="flex items-center justify-between p-3.5 rounded-xl border border-cobalt-900/10 hover:border-cobalt-700 hover:bg-cobalt-50 text-ink text-sm font-bold transition-all group"
          >
            <span className="flex items-center gap-2">
              <Home className="h-4 w-4 text-cobalt-700" />
              <span>Ana Sayfa</span>
            </span>
            <ArrowUpRight className="h-4 w-4 text-ink-muted group-hover:text-cobalt-700 transition-colors" />
          </Link>

          <Link
            href="/egitim-programlarimiz"
            className="flex items-center justify-between p-3.5 rounded-xl border border-cobalt-900/10 hover:border-cobalt-700 hover:bg-cobalt-50 text-ink text-sm font-bold transition-all group"
          >
            <span className="flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-cobalt-700" />
              <span>Programlarımız</span>
            </span>
            <ArrowUpRight className="h-4 w-4 text-ink-muted group-hover:text-cobalt-700 transition-colors" />
          </Link>
        </div>

        <div className="mt-6 pt-6 border-t border-cobalt-900/10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-cobalt-700 hover:bg-cobalt-800 text-white px-6 py-3 rounded-xl text-sm font-bold transition-colors shadow-sm"
          >
            <span>Ana Sayfaya Dön</span>
          </Link>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5b] text-white px-6 py-3 rounded-xl text-sm font-bold transition-colors shadow-sm"
          >
            <PhoneCall className="h-4 w-4" />
            <span>WhatsApp Destek</span>
          </a>
        </div>
      </div>
    </section>
  );
}
