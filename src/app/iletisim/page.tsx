"use client";

import React from "react";
import { Mail, MapPin, MessageCircle, PhoneCall } from "lucide-react";
import { siteConfig, getWhatsAppUrl, assetPath } from "@/config/site";
import { PhotoFrame } from "@/components/motion/Primitives";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import PageHero, { SectionHeading, SloganMark } from "@/components/layout/PageHero";
import { QuoteRequestSection } from "@/components/forms/QuickQuoteForm";

export default function IletisimPage() {
  const [showMap, setShowMap] = React.useState(false);
  return (
    <div className="bg-paper text-ink">
      <Breadcrumbs items={[{ label: "İletişim", href: "/iletisim" }]} />

      <PageHero
        eyebrow="İletişim"
        title={
          <>
            Her Öğrencimizin <SloganMark>Kendi Zirvesine</SloganMark> Ulaşmasını Sağlamak En Büyük Gurur Kaynağımızdır
          </>
        }
        media={
          <PhotoFrame
            src={assetPath("/images/veli-ogretmen-gorusmesi.jpg")}
            alt="Öğretmen ile veli görüşmesi"
            aspectClass="aspect-[16/10]"
            priority
          />
        }
      />

      <QuoteRequestSection id="iletisim-teklif" />

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10">
          <SectionHeading>
            Eğitim Yolculuğunda Fark Yaratmak ve Potansiyeli Zirveye Taşımak İçin Hemen Arayın
          </SectionHeading>

          <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
            <a
              href={siteConfig.contact.phoneHref}
              className="flex min-h-14 items-center gap-3 rounded-2xl border border-cobalt-900/10 bg-white p-4"
            >
              <PhoneCall className="h-5 w-5 shrink-0 text-cobalt-700" />
              <span>
                <span className="block text-xs font-bold text-ink-muted">Telefon</span>
                <span className="text-base font-extrabold text-ink">{siteConfig.contact.phoneDisplay}</span>
              </span>
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-14 items-center gap-3 rounded-2xl border border-cobalt-900/10 bg-white p-4"
            >
              <MessageCircle className="h-5 w-5 shrink-0 text-[#128C7E]" />
              <span>
                <span className="block text-xs font-bold text-ink-muted">WhatsApp</span>
                <span className="text-base font-extrabold text-ink">{siteConfig.contact.phoneDisplay}</span>
              </span>
            </a>
            {siteConfig.contact.email && (
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex min-h-14 items-center gap-3 rounded-2xl border border-cobalt-900/10 bg-white p-4"
              >
                <Mail className="h-5 w-5 shrink-0 text-crimson-700" />
                <span className="min-w-0">
                  <span className="block text-xs font-bold text-ink-muted">E-posta</span>
                  <span className="break-all text-base font-bold text-ink">{siteConfig.contact.email}</span>
                </span>
              </a>
            )}
            <div className="rounded-2xl border border-cobalt-900/10 bg-white p-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-crimson-700" />
                <div>
                  <p className="text-xs font-bold text-ink-muted">Adres</p>
                  <p className="text-base leading-relaxed text-ink">{siteConfig.contact.address}</p>
                </div>
              </div>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(siteConfig.contact.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex min-h-11 items-center justify-center rounded-xl bg-cobalt-700 px-4 text-sm font-extrabold text-white"
              >
                Yol Tarifi Al
              </a>
            </div>
          </div>

          {/* Google Haritalar kendi çerezlerini kullanabilir; ziyaretçi istemeden yüklenmez. */}
          {showMap ? (
            <iframe
              title="AYBARİst AKADEMİ konum"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(siteConfig.contact.address)}&z=16&output=embed`}
              className="mt-6 h-64 w-full rounded-2xl border border-cobalt-900/10"
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : (
            <div className="mt-6 flex h-64 w-full flex-col items-center justify-center gap-3 rounded-2xl border border-cobalt-900/10 bg-white p-5 text-center">
              <MapPin className="h-7 w-7 text-crimson-700" />
              <button
                type="button"
                onClick={() => setShowMap(true)}
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-cobalt-900 px-5 text-sm font-bold text-white"
              >
                Haritayı göster
              </button>
              <p className="text-xs text-ink-muted">Harita Google Haritalar üzerinden yüklenir.</p>
            </div>
          )}

          <div className="mt-8 space-y-4 text-base leading-relaxed text-ink-muted">
            <p>
              <strong className="font-bold text-ink">{siteConfig.contact.locations.faceToFaceTitle}:</strong>{" "}
              {siteConfig.contact.locations.faceToFaceDetail}
            </p>
            <p>
              <strong className="font-bold text-ink">{siteConfig.contact.locations.onlineTitle}:</strong>{" "}
              {siteConfig.contact.locations.onlineDetail}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
