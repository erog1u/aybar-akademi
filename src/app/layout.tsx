import type { Metadata, Viewport } from "next";
import "./globals.css";
import SiteShell from "@/components/layout/SiteShell";
import PreviewProtection from "@/components/layout/PreviewProtection";
import JsonLd from "@/components/seo/JsonLd";
import { siteConfig, IS_PREVIEW_MODE, SITE_URL } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${siteConfig.name} | Birebir Özel Ders & Eğitim Koçluğu`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "AYBAR AKADEMİ; 33 yıllık köklü eğitim deneyimi, yeni nesil Maarif Modeline hâkim uzman öğretmen kadrosu, İstanbul’un tüm ilçelerinde evinizde yüz yüze ve tüm Türkiye’de canlı online birebir özel ders kurumudur.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.name} | Birebir Özel Ders & Eğitim Koçluğu`,
    description:
      "33 yıllık köklü eğitim deneyimi ve yeni nesil Maarif Modeline hâkim uzman kadro. İstanbul’un tüm ilçelerinde evinizde yüz yüze ve tüm Türkiye’de canlı online birebir özel ders.",
    url: SITE_URL,
    siteName: siteConfig.name,
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/og-image.jpg`,
        secureUrl: `${SITE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "AYBAR AKADEMİ | Her Öğrenciye Aynı Eğitim Değil, Doğru Eğitim.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Birebir Özel Ders & Eğitim Koçluğu`,
    description:
      "33 yıllık köklü eğitim deneyimi ve yeni nesil Maarif Modeline hâkim kadro. İstanbul’un tüm ilçelerinde yüz yüze, tüm Türkiye’de canlı online.",
    images: [`${SITE_URL}/images/og-image.jpg`],
  },
  robots: IS_PREVIEW_MODE
    ? {
        index: false,
        follow: false,
        nocache: true,
        googleBot: {
          index: false,
          follow: false,
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
  themeColor: "#08245E",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
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
        <meta property="og:image" content={`${SITE_URL}/images/og-image.jpg`} />
        <meta property="og:image:secure_url" content={`${SITE_URL}/images/og-image.jpg`} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="AYBAR AKADEMİ | Her Öğrenciye Aynı Eğitim Değil, Doğru Eğitim." />
        <meta name="twitter:image" content={`${SITE_URL}/images/og-image.jpg`} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Lora:ital,wght@0,400..700;1,400..700&family=Plus+Jakarta+Sans:ital,wght@0,400..800;1,400..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`font-sans bg-paper text-ink antialiased selection:bg-crimson-600 selection:text-white ${
          IS_PREVIEW_MODE ? "preview-protected select-none" : ""
        }`}
      >
        <PreviewProtection>
          <SiteShell>{children}</SiteShell>
        </PreviewProtection>
      </body>
    </html>
  );
}
