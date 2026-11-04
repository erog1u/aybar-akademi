import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SiteShell from "@/components/layout/SiteShell";
import PreviewProtection from "@/components/layout/PreviewProtection";
import JsonLd from "@/components/seo/JsonLd";
import { siteConfig, IS_PREVIEW_MODE, SITE_URL } from "@/config/site";

// Font siteyle birlikte sunulur; ziyaretçi Google'a istek göndermez.
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `İstanbul ve Online Birebir Özel Ders | ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "İstanbul’un tüm ilçelerinde evinizde yüz yüze, tüm Türkiye’de online birebir özel ders. YKS, LGS, KPSS, ALES, okula takviye ve yabancı dil. 33 yıllık tecrübe.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `İstanbul ve Online Birebir Özel Ders | ${siteConfig.name}`,
    description:
      "İstanbul’un tüm ilçelerinde evinizde yüz yüze, tüm Türkiye’de online birebir özel ders. YKS, LGS, KPSS, ALES, okula takviye ve yabancı dil. 33 yıllık tecrübe.",
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
        alt: "AYBARİst AKADEMİ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `İstanbul ve Online Birebir Özel Ders | ${siteConfig.name}`,
    description:
      "İstanbul’un tüm ilçelerinde evinizde yüz yüze, tüm Türkiye’de online birebir özel ders. YKS, LGS, KPSS, ALES, okula takviye ve yabancı dil. 33 yıllık tecrübe.",
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
    <html lang="tr" className={jakarta.variable}>
      <head>
        <JsonLd />
        <meta property="og:image" content={`${SITE_URL}/images/og-image.jpg`} />
        <meta property="og:image:secure_url" content={`${SITE_URL}/images/og-image.jpg`} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="AYBARİst AKADEMİ" />
        <meta name="twitter:image" content={`${SITE_URL}/images/og-image.jpg`} />
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
