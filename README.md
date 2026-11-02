# AYBAR AKADEMİ — Kurumsal Web Sitesi

**Bilginin Kaynağı, Başarının Mimarı**  
33 yıllık köklü akademik deneyim ve Türkiye Yüzyılı Yeni Nesil Maarif Modeline %100 uyumlu VIP birebir özel ders platformu.

## Teknoloji ve Mimari

- **Framework:** Next.js 15 (App Router) + React 19 + TypeScript
- **Tasarım Sistemi:** Tailwind CSS (Royal Cobalt `#0044B5`, Signal Crimson `#DC1B2E`, Deep Crest Navy `#08245E`, Warm Alabaster `#FAFBFD` — Swiss-Editorial 1px Grid & Broadsheet Tipografi)
- **Tipografi (`latin-ext` Tam Türkçe Uyumlu):**
  - `Plus Jakarta Sans` (Mimari başlıklar ve arayüz)
  - `Lora` (Akademik editoryal serif, Kurucu Mesajı ve italik vurgular)
  - `JetBrains Mono` (Dizin kodları, sınav etiketleri ve teknik göstergeler)
- **Smooth Scroll & Geçişler:**
  - `lenis` (`ReactLenis` + Framer Motion tekil `frame.update` rAF senkronizasyonu)
  - `src/app/template.tsx` üzerinde GPU hızlandırmalı mimari perde (clip-path shutter) sayfa geçişleri
  - Sticky kart istifleme, dikey adım cetveli (scrollytelling), hıza duyarlı kinetik şerit ve sağdan açılan ders detay çekmecesi (Program Dossier Drawer)

## Çalıştırma

```bash
npm install
npm run dev
```

Tarayıcıda `http://localhost:3000` adresini açabilirsiniz.

## Telefon Numarası ve Logo Değişikliği (Tek Noktadan Güncelleme)

İleride telefon numarası, WhatsApp hattı, e-posta veya logo değiştiğinde yalnızca **`src/config/site.ts`** dosyasını düzenlemeniz yeterlidir:

- `siteConfig.contact.phoneDisplay` / `phoneHref` / `whatsappNumber`
- `siteConfig.logos.emblem` ve `siteConfig.logos.full` (`public/images/` içerisine yeni logo dosyasını ekleyip yolunu güncelleyebilirsiniz)
