import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import SiteShell from "@/components/layout/SiteShell";
import PreviewProtection from "@/components/layout/PreviewProtection";
import { siteConfig, IS_PREVIEW_MODE } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Birebir Özel Ders & Eğitim Koçluğu`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "AYBAR AKADEMİ; 33 yıllık köklü eğitim deneyimi, yeni nesil Maarif Modeline hâkim uzman öğretmen kadrosu, İstanbul’un tüm ilçelerinde yüz yüze ve tüm Türkiye’de canlı online birebir özel ders kurumudur.",
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
    : undefined,
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
