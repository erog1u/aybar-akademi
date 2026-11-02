import type { Metadata } from "next";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | VIP Birebir Özel Ders & Eğitim Koçluğu`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "AYBAR AKADEMİ; 33 yıllık köklü eğitim deneyimi, yeni nesil Maarif Modeline %100 uyumlu uzman öğretmen kadrosu, İstanbul'un tüm ilçelerinde yüz yüze ve tüm Türkiye'de canlı online VIP birebir özel ders kurumudur.",
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
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Lora:ital,wght@0,400..700;1,400..700&family=Plus+Jakarta+Sans:ital,wght@0,400..800;1,400..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-paper text-ink antialiased selection:bg-crimson-600 selection:text-white">
        <SmoothScrollProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <FloatingWhatsApp />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
