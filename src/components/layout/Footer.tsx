import React from "react";
import Link from "next/link";
import { ArrowUpRight, Phone, Mail, MapPin, Globe2 } from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import { programCategories } from "@/data/content";
import { AybarInstitutionalSeal } from "@/components/brand/AybarCrest";

export default function Footer() {
  return (
    <footer className="bg-cobalt-950 text-white border-t border-white/15 relative overflow-hidden">
      {/* Top CTA Banner */}
      <div className="border-b border-white/12 bg-cobalt-900/60">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 py-12 lg:py-16 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-block px-3 py-1 bg-crimson-600 text-white text-xs font-bold tracking-wider mb-4">
              30 DAKİKALIK ÜCRETSİZ TANIŞMA SEANSI
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tightest leading-tight">
              Geleceğinizi tesadüflere değil,{" "}
              <span className="font-serif italic font-normal text-cobalt-200">
                kişiye özel VIP eğitime
              </span>{" "}
              emanet edin.
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 shrink-0 w-full lg:w-auto">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full sm:w-auto justify-center items-center gap-3 bg-crimson-600 hover:bg-crimson-700 text-white px-7 py-4 text-sm font-bold tracking-tight transition-colors shadow-crimson text-center"
            >
              <span>WhatsApp ile Tanışma Planla</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <Link
              href="/iletisim"
              className="inline-flex w-full sm:w-auto justify-center items-center gap-2 border border-white/25 hover:bg-white hover:text-cobalt-950 text-white px-6 py-4 text-sm font-bold tracking-tight transition-colors text-center"
            >
              <span>İletişim Sayfası</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main 4-Column Footer */}
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 divide-y md:divide-y-0 lg:divide-x divide-white/10 border-b border-white/10">
          {/* Column 1: Integrated Vector Institutional Crest */}
          <div className="lg:col-span-4 py-12 lg:pr-10 flex flex-col items-start">
            <AybarInstitutionalSeal variant="dark" className="items-start text-left" />
            <p className="mt-5 text-sm text-cobalt-100/85 leading-relaxed max-w-sm">
              {siteConfig.experienceYears} yıllık köklü eğitim deneyimini, yeni
              nesil Maarif Modeline hâkim uzman kadro ve VIP birebir süreç
              yönetimiyle birleştiren çağdaş eğitim kurumu.
            </p>
          </div>

          {/* Column 2: Menü & Sayfalar */}
          <div className="lg:col-span-3 py-12 lg:px-8">
            <div className="text-xs font-bold tracking-[0.14em] text-cobalt-200 uppercase mb-5">
              Kurumsal Menü
            </div>
            <ul className="space-y-3">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2.5 text-sm font-medium text-cobalt-100 hover:text-white transition-colors"
                  >
                    <span className="h-1.5 w-1.5 bg-crimson-500 transition-transform group-hover:scale-125" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Eğitim Programları */}
          <div className="lg:col-span-3 py-12 lg:px-8">
            <div className="text-xs font-bold tracking-[0.14em] text-cobalt-200 uppercase mb-5">
              Eğitim Programlarımız
            </div>
            <ul className="space-y-3">
              {programCategories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/egitim-programlarimiz#${cat.id}`}
                    className="group inline-flex items-center gap-2.5 text-sm font-medium text-cobalt-100 hover:text-white transition-colors"
                  >
                    <span className="h-1.5 w-1.5 bg-cobalt-400 group-hover:bg-crimson-500 transition-colors" />
                    <span>{cat.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: İletişim */}
          <div className="lg:col-span-2 py-12 lg:pl-8 space-y-5">
            <div className="text-xs font-bold tracking-[0.14em] text-cobalt-200 uppercase">
              İletişim
            </div>

            <div className="space-y-4 text-sm">
              <div>
                <div className="text-xs text-cobalt-300 mb-1">Telefon & WhatsApp</div>
                <a
                  href={siteConfig.contact.phoneHref}
                  className="inline-flex items-center gap-2 font-bold text-white hover:text-crimson-500 transition-colors"
                >
                  <Phone className="h-3.5 w-3.5 text-crimson-500 shrink-0" />
                  <span>{siteConfig.contact.phoneDisplay}</span>
                </a>
              </div>

              <div>
                <div className="text-xs text-cobalt-300 mb-1">E-Posta</div>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="inline-flex items-center gap-2 text-cobalt-100 hover:text-white transition-colors break-all text-xs"
                >
                  <Mail className="h-3.5 w-3.5 text-crimson-500 shrink-0" />
                  <span>{siteConfig.contact.email}</span>
                </a>
              </div>

              <div className="pt-3 border-t border-white/10 space-y-2.5 text-xs text-cobalt-100/90">
                <div className="flex items-start gap-2">
                  <MapPin className="h-3.5 w-3.5 text-crimson-500 shrink-0 mt-0.5" />
                  <span>İstanbul’un Tüm İlçelerinde Yüz Yüze Özel Ders</span>
                </div>
                <div className="flex items-start gap-2">
                  <Globe2 className="h-3.5 w-3.5 text-cobalt-300 shrink-0 mt-0.5" />
                  <span>Tüm Türkiye’de Canlı Online Eğitim</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright — pb-24 sm:pb-8 prevents mobile action dock from obscuring content */}
        <div className="py-8 pb-24 sm:pb-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cobalt-300 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} {siteConfig.name}. Tüm hakları saklıdır.
          </div>
          <div>Kurucu: Bahadır AYBAR · {siteConfig.legalSubtitle}</div>
        </div>
      </div>
    </footer>
  );
}
