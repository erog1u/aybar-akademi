import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import SiteShell from "@/components/layout/SiteShell";
import PreviewProtection from "@/components/layout/PreviewProtection";
import JsonLd from "@/components/seo/JsonLd";
import { siteConfig, IS_PREVIEW_MODE } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://erog1u.github.io/aybar-akademi"),
  title: {
    default: `${siteConfig.name} | Birebir Özel Ders & Eğitim Koçluğu`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "AYBAR AKADEMİ; 33 yıllık köklü eğitim deneyimi, yeni nesil Maarif Modeline hâkim uzman öğretmen kadrosu, İstanbul’un 39 ilçesinde evinizde yüz yüze ve tüm Türkiye’de canlı online birebir özel ders kurumudur.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.name} | Birebir Özel Ders & Eğitim Koçluğu`,
    description:
      "33 yıllık köklü eğitim deneyimi, yeni nesil Maarif Modeline hâkim uzman kadro. İstanbul 39 ilçede evinizde yüz yüze ve tüm Türkiye'de canlı online VIP özel ders.",
    url: "https://erog1u.github.io/aybar-akademi",
    siteName: siteConfig.name,
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/images/hero-one-on-one.jpg",
        width: 1200,
        height: 630,
        alt: "AYBAR AKADEMİ Birebir Özel Ders ve Eğitim Koçluğu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Birebir Özel Ders & Eğitim Koçluğu`,
    description:
      "33 yıllık köklü eğitim deneyimi, yeni nesil Maarif Modeline hâkim kadro. İstanbul 39 ilçe yüz yüze & tüm Türkiye canlı online.",
    images: ["/images/hero-one-on-one.jpg"],
  },
  robots: IS_PREVIEW_MODE
    ? {
        index: false,
        follow: false,
        nocache: true,
        googleBot: {
          index: false,
          follow: false,
          noimageindex: true,
        },
      }
    : {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0044B5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <JsonLd />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`font-sans bg-paper text-ink antialiased selection:bg-crimson-600 selection:text-white ${
          IS_PREVIEW_MODE ? "preview-protected select-none" : ""
        }`}
      >
        <PreviewProtection>
          <SmoothScrollProvider>
            <SiteShell>{children}</SiteShell>
          </SmoothScrollProvider>
        </PreviewProtection>
      </body>
    </html>
  );
}
