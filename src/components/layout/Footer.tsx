import React from "react";
import Link from "next/link";
import { ArrowUpRight, Phone, Mail, MapPin, Globe2 } from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import { programCategories } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-cobalt-950 text-white border-t border-white/15 relative overflow-hidden">
      {/* Top CTA Banner inside Footer Ledger */}
      <div className="border-b border-white/12 bg-cobalt-900/50">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 py-12 lg:py-16 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-crimson-600 text-white font-mono text-[11px] font-semibold tracking-[0.16em] mb-4">
              30 DAKİKALIK ÜCRETSİZ KEŞİF SEANSI
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tightest leading-tight">
              Geleceğinizi tesadüflere değil,{" "}
              <span className="font-serif italic font-normal text-cobalt-200">
                kişiye özel VIP eğitime
              </span>{" "}
              emanet edin.
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-crimson-600 hover:bg-crimson-700 text-white px-7 py-4 text-sm font-bold tracking-tight transition-colors shadow-crimson"
            >
              <span>WhatsApp ile Tanışma Planla</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 border border-white/25 hover:bg-white hover:text-cobalt-950 text-white px-6 py-4 text-sm font-bold tracking-tight transition-colors"
            >
              <span>İletişim & Başvuru</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main 4-Column Architectural Ledger */}
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 divide-y md:divide-y-0 lg:divide-x divide-white/10 border-b border-white/10">
          {/* Column 1: Crest & Institutional Identity */}
          <div className="lg:col-span-4 py-12 lg:pr-10">
            <div className="bg-white/95 inline-block p-4 mb-6 border border-white/20">
              <img
                src={siteConfig.logos.full}
                alt={`${siteConfig.name} - ${siteConfig.motto}`}
                className="h-28 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-cobalt-100/80 leading-relaxed max-w-sm">
              {siteConfig.experienceYears} yıllık köklü eğitim deneyimini, yeni
              nesil Maarif Modeline hâkim uzman kadro ve VIP birebir süreç
              yönetimiyle birleştiren çağdaş eğitim kurumu.
            </p>
            <div className="mt-6 pt-6 border-t border-white/10 font-serif italic text-sm text-cobalt-200">
              “{siteConfig.motto}”
            </div>
          </div>

          {/* Column 2: Kurumsal Sayfalar */}
          <div className="lg:col-span-3 py-12 lg:px-8">
            <div className="font-mono text-[11px] tracking-[0.18em] text-cobalt-300 mb-5">
              [01] KURUMSAL DİZİN
            </div>
            <ul className="space-y-3">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-sm text-cobalt-100 hover:text-white transition-colors"
                  >
                    <span className="h-[1px] w-3 bg-crimson-500 transition-all group-hover:w-5" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Eğitim Programları */}
          <div className="lg:col-span-3 py-12 lg:px-8">
            <div className="font-mono text-[11px] tracking-[0.18em] text-cobalt-300 mb-5">
              [02] EĞİTİM PROGRAMLARIMIZ
            </div>
            <ul className="space-y-3">
              {programCategories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/egitim-programlarimiz#${cat.id}`}
                    className="group inline-flex items-center gap-2 text-sm text-cobalt-100 hover:text-white transition-colors"
                  >
                    <span className="font-mono text-[11px] text-crimson-500">
                      {cat.code}
                    </span>
                    <span>{cat.shortTitle}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Erişim & İletişim */}
          <div className="lg:col-span-2 py-12 lg:pl-8 space-y-5">
            <div className="font-mono text-[11px] tracking-[0.18em] text-cobalt-300">
              [03] İLETİŞİM & KAPSAMA
            </div>

            <div className="space-y-4 text-sm">
              <div>
                <div className="font-mono text-[10px] tracking-[0.14em] text-cobalt-300 mb-1">
                  TELEFON & WHATSAPP
                </div>
                <a
                  href={siteConfig.contact.phoneHref}
                  className="inline-flex items-center gap-2 font-bold text-white hover:text-crimson-500 transition-colors"
                >
                  <Phone className="h-3.5 w-3.5 text-crimson-500 shrink-0" />
                  <span>{siteConfig.contact.phoneDisplay}</span>
                </a>
              </div>

              <div>
                <div className="font-mono text-[10px] tracking-[0.14em] text-cobalt-300 mb-1">
                  E-POSTA
                </div>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="inline-flex items-center gap-2 text-cobalt-100 hover:text-white transition-colors break-all text-xs"
                >
                  <Mail className="h-3.5 w-3.5 text-crimson-500 shrink-0" />
                  <span>{siteConfig.contact.email}</span>
                </a>
              </div>

              <div className="pt-2 border-t border-white/10 space-y-2.5 text-xs text-cobalt-100/85">
                <div className="flex items-start gap-2">
                  <MapPin className="h-3.5 w-3.5 text-crimson-500 shrink-0 mt-0.5" />
                  <span>İstanbul’un Tüm İlçelerinde Yüz Yüze Özel Ders</span>
                </div>
                <div className="flex items-start gap-2">
                  <Globe2 className="h-3.5 w-3.5 text-cobalt-300 shrink-0 mt-0.5" />
                  <span>Tüm Türkiye’de Canlı İnteraktif Online Eğitim</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Giant Ghost Signature */}
        <div className="py-8 pb-20 sm:pb-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cobalt-300 font-mono text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} {siteConfig.name}. TÜM HAKLARI SAKLIDIR.
          </div>
          <div>KURUCU: BAHADIR AYBAR · EĞİTİM YAYINCILIK DANIŞMANLIK</div>
        </div>
      </div>

      {/* Subtle Monumental Wordmark */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none text-center font-extrabold tracking-tightest text-[13vw] leading-[0.78] text-white/[0.03] -mb-3"
      >
        AYBAR AKADEMİ
      </div>
    </footer>
  );
}
