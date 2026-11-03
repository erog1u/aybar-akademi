"use client";

import React from "react";
import {
  Mail,
  MapPin,
  Globe2,
  MessageCircle,
  PhoneCall,
} from "lucide-react";
import { siteConfig, getWhatsAppUrl, assetPath } from "@/config/site";
import { PhotoFrame } from "@/components/motion/Primitives";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { QuoteRequestSection } from "@/components/forms/QuickQuoteForm";

export default function IletisimPage() {
  return (
    <div className="bg-paper text-ink">
      <Breadcrumbs items={[{ label: "İletişim" }]} />

      {/* 1. Sade, Ferah ve Prestijli Cobalt Hero */}
      <section className="studio-hero text-white border-b border-white/15 overflow-hidden py-12 sm:py-16 lg:py-20 relative">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Sol: Başlık ve Açıklama */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/12 border border-white/25 text-white text-xs sm:text-[13px] font-bold tracking-wider uppercase mb-5 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="radar-beacon absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span>İletişim</span>
              </div>

              <h1 className="max-w-4xl text-balance text-[1.55rem] font-extrabold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.65rem]">
                Her öğrencimizin kendi zirvesine ulaşmasını sağlamak en büyük gurur kaynağımızdır
              </h1>


              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-cobalt-200">
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-crimson-400" />
                  <strong className="text-white">İstanbul:</strong> Tüm İlçelerde Yüz Yüze
                </span>
                <span className="flex items-center gap-1.5">
                  <Globe2 className="h-4 w-4 text-sky-400" />
                  <strong className="text-white">Tüm Türkiye:</strong> Canlı Online
                </span>
              </div>
            </div>

            {/* Sağ: Stüdyo Görsel Kartı */}
            <div className="lg:col-span-5 relative">
              <PhotoFrame
                src={assetPath("/images/vip-mentorship.jpg")}
                alt="Öğretmen ile veli görüşmesi"
                aspectClass="aspect-[16/10]"
                priority
                className="relative z-10 shadow-studio"
              />
            </div>
          </div>
        </div>
      </section>

      <QuoteRequestSection id="iletisim-teklif" />

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="space-y-5 lg:col-span-7 lg:col-start-1">
              <div className="rounded-3xl bg-white p-6 sm:p-8 border border-cobalt-900/10 shadow-sm space-y-6 relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-crimson-600 via-cobalt-600 to-crimson-600" />
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-crimson-600">
                    DOĞRUDAN İLETİŞİM
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-ink mt-1">
                    Bize Ulaşın
                  </h2>
                  <p className="mt-1 text-xs sm:text-sm text-ink-muted leading-relaxed">
                    Tüm akademik sorularınız ve randevu talepleriniz için dilediğiniz kanaldan bize ulaşabilirsiniz.
                  </p>
                </div>

                {/* 3 İletişim Kanalı */}
                <div className="space-y-3.5">
                  {/* Telefon */}
                  <a
                    href={siteConfig.contact.phoneHref}
                    className="p-4 min-h-[56px] rounded-2xl bg-paper hover:bg-cobalt-50 border border-cobalt-900/5 transition-all flex items-center justify-between group touch-manipulation"
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="h-10 w-10 rounded-xl bg-cobalt-700 text-white flex items-center justify-center shrink-0">
                        <PhoneCall className="h-4 w-4" />
                      </span>
                      <div>
                        <div className="text-xs font-bold text-ink-muted">Telefon Danışma</div>
                        <div className="text-sm sm:text-base font-extrabold text-ink">
                          {siteConfig.contact.phoneDisplay}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-cobalt-700 group-hover:translate-x-0.5 transition-transform">
                      Ara →
                    </span>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 min-h-[56px] rounded-2xl bg-paper hover:bg-emerald-50/70 border border-cobalt-900/5 transition-all flex items-center justify-between group touch-manipulation"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <span className="h-10 w-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0">
                        <MessageCircle className="h-4 w-4" />
                      </span>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-ink-muted">WhatsApp Danışma</div>
                        <div className="text-sm sm:text-base font-extrabold text-ink">
                          {siteConfig.contact.phoneDisplay}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-emerald-700 group-hover:translate-x-0.5 transition-transform shrink-0">
                      Yaz →
                    </span>
                  </a>

                  {/* E-Posta */}
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="p-4 min-h-[56px] rounded-2xl bg-paper hover:bg-crimson-50/70 border border-cobalt-900/5 transition-all flex items-center justify-between group touch-manipulation"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <span className="h-10 w-10 rounded-xl bg-crimson-600 text-white flex items-center justify-center shrink-0">
                        <Mail className="h-4 w-4" />
                      </span>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-ink-muted">Resmi E-Posta</div>
                        <div className="text-sm sm:text-base font-bold text-ink break-all">
                          {siteConfig.contact.email}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-crimson-700 group-hover:translate-x-0.5 transition-transform shrink-0">
                      İlet →
                    </span>
                  </a>
                </div>

                <div className="space-y-3 border-t border-cobalt-900/10 pt-3">
                  <h3 className="text-sm font-extrabold text-ink">Adres</h3>
                  <p className="text-sm leading-relaxed text-ink">
                    {siteConfig.contact.address}
                  </p>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(siteConfig.contact.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center justify-center rounded-xl bg-cobalt-700 px-4 text-sm font-extrabold text-white"
                  >
                    Yol Tarifi Al
                  </a>
                  <iframe
                    title="AYBARİst AKADEMİ konum"
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(siteConfig.contact.address)}&z=16&output=embed`}
                    className="h-56 w-full rounded-2xl border border-cobalt-900/10"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* Lokasyon Kapsamı */}
                <div className="pt-3 space-y-3 border-t border-cobalt-900/10">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-crimson-600 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-xs sm:text-sm text-ink">
                        {siteConfig.contact.locations.faceToFaceTitle}
                      </h3>
                      <p className="text-xs text-ink-muted mt-0.5 leading-relaxed">
                        {siteConfig.contact.locations.faceToFaceDetail}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Globe2 className="h-4 w-4 text-cobalt-700 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-xs sm:text-sm text-ink">
                        {siteConfig.contact.locations.onlineTitle}
                      </h3>
                      <p className="text-xs text-ink-muted mt-0.5 leading-relaxed">
                        {siteConfig.contact.locations.onlineDetail}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
