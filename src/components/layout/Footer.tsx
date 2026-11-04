import React from "react";
import Link from "next/link";
import { ArrowUpRight, Phone, Mail, MapPin, Globe2 } from "lucide-react";
import { siteConfig, getWhatsAppUrl, assetPath } from "@/config/site";
import { programCategories } from "@/data/content";
import { AybarBrandLockup } from "@/components/brand/AybarCrest";

export default function Footer() {
  return (
    <footer className="bg-cobalt-950 text-white border-t border-white/10">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Main 4-Column Spacious Layout */}
        <div className="py-14 sm:py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Brand Identity & CTA */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block group">
              <AybarBrandLockup variant="dark" />
            </Link>


            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 pt-1">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] inline-flex items-center justify-center gap-2 bg-crimson-600 hover:bg-crimson-700 text-white px-5 py-3 rounded-xl text-sm font-bold transition-colors focus-visible:ring-2 focus-visible:ring-crimson-500 focus-visible:outline-none"
              >
                <span>Bilgi Al</span>
                <ArrowUpRight className="h-4 w-4 shrink-0" />
              </a>
              <Link
                href="/iletisim"
                className="min-h-[44px] inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/15 text-white px-5 py-3 rounded-xl text-sm font-bold transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
              >
                <span>İletişim</span>
              </Link>
            </div>
          </div>

          {/* Column 2: Kurumsal Menü */}
          <div className="lg:col-span-2">
            <h2 className="text-sm font-bold text-white mb-4">Kurumsal</h2>
            <ul className="space-y-2">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center py-1 text-[14.5px] text-cobalt-200 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Eğitim Programlarımız */}
          <div className="lg:col-span-3">
            <h2 className="text-sm font-bold text-white mb-4">
              Eğitim Programlarımız
            </h2>
            <ul className="space-y-2">
              {programCategories.map((cat) => (
                <li key={cat.id}>
                  {/* Düz a: Link hashchange tetiklemez, aynı sayfada kategori değişmezdi */}
                  <a
                    href={assetPath(`/egitim-programlarimiz/#${cat.id}`)}
                    className="inline-flex items-center py-1 text-[14.5px] text-cobalt-200 hover:text-white transition-colors"
                  >
                    {cat.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: İletişim */}
          <div className="lg:col-span-3 space-y-4">
            <h2 className="text-sm font-bold text-white mb-4">İletişim</h2>

            <div className="space-y-3">
              <a
                href={siteConfig.contact.phoneHref}
                className="min-h-[40px] flex items-center gap-2.5 text-[15px] font-bold text-white hover:text-cobalt-200 transition-colors"
              >
                <Phone className="h-4 w-4 text-crimson-500 shrink-0" />
                <span>{siteConfig.contact.phoneDisplay}</span>
              </a>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="min-h-[40px] flex items-center gap-2.5 text-sm text-cobalt-200 hover:text-white transition-colors break-all"
              >
                <Mail className="h-4 w-4 text-crimson-500 shrink-0" />
                <span>{siteConfig.contact.email}</span>
              </a>
            </div>

            <div className="pt-3 border-t border-white/10 space-y-2.5 text-sm text-cobalt-200">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-crimson-500 shrink-0 mt-0.5" />
                <span>{siteConfig.contact.locations.faceToFaceTitle}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Globe2 className="h-4 w-4 text-cobalt-300 shrink-0 mt-0.5" />
                <span>{siteConfig.contact.locations.onlineTitle}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar + Eroğlu Solutions Signature — WhatsApp butonunun altında kalmaması için güvenli pb-20 ve lg:mr-52 */}
        <div className="py-8 pb-24 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-5 text-xs sm:text-[13px] text-cobalt-300 text-center lg:text-left">
          <div className="text-cobalt-200" suppressHydrationWarning>
            © {new Date().getFullYear()} {siteConfig.name} ·{" "}
            {siteConfig.founder.name} ({siteConfig.founder.role})
          </div>

          {/* Eroğlu Solutions İmzası — Masaüstünde WhatsApp butonunun tamamen solunda ve üstünde kalan korumalı alan */}
          <div className="lg:pr-20 shrink-0">
            <a
              href={siteConfig.agency.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.08] hover:bg-white/[0.16] border border-white/20 text-cobalt-100 hover:text-white transition-all shadow-sm hover:shadow-glow"
              title="Eroğlu Solutions Web Tasarım ve Yazılım"
            >
              <span className="h-2 w-2 rounded-full bg-crimson-500 shrink-0 animate-pulse" />
              <span className="text-cobalt-200">Tasarım ve Yazılım:</span>
              <span className="font-brand font-extrabold tracking-wide text-white">
                {siteConfig.agency.name}
              </span>
              <ArrowUpRight className="h-3.5 w-3.5 text-crimson-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
