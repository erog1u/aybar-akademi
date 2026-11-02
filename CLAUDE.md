# AYBAR AKADEMİ — Claude Code Geliştirici Kılavuzu

Bu belge, Claude Code ve geliştiriciler için projenin amacını, mimarisini, değiştirilemez kurallarını ve operasyonel komutlarını özetler.

---

## 1. Proje Amacı ve Kapsamı
- **Müşteri:** AYBAR AKADEMİ (33 yıllık köklü deneyim, Türkiye Yüzyılı Maarif Modeline %100 uyumlu VIP birebir özel ders kurumu).
- **Geliştirici:** Eroğlu Solutions (`https://eroglusolutions.com`).
- **Amaç:** Next.js 15 tabanlı, statik dışa aktarılan (SSG/export), ultra hızlı, mobil uyumlu ve kurumsal prestiji yansıtan web sitesi.

---

## 2. Teknoloji Yığını (Tech Stack)
- **Framework:** Next.js 15 (App Router, Static Export), React 19, TypeScript
- **Stil & Tasarım:** Tailwind CSS
  - Ana Renkler: Kraliyet Kobalt Mavisi (`#0044B5`), Sinyal Kırmızı (`#DC1B2E`), Gece Laciverti (`#08245E`), Sıcak Beyaz (`#FAFBFD`)
- **İkonlar:** `lucide-react`
- **Animasyon:** `framer-motion` (yalnızca GPU dostu transform/opacity; mobilde takılmasız akış)
- **Tipografi (`latin-ext` tam Türkçe karakter desteği):**
  - Marka Başlığı: `Montserrat` (800 ağırlık, uppercase, geniş harf aralığı)
  - Arayüz & İçerik Başlıkları / Gövde: `Plus Jakarta Sans`
  - Vurgular / Kurucu Mesajı: `Lora` (yalnızca italik alıntılarda)

---

## 3. Dizin Haritası (Folder Map)

```text
aybar-akademi/
├── src/
│   ├── app/                               # Rota sayfaları ve şablonlar
│   │   ├── page.tsx                       # Ana Sayfa
│   │   ├── hakkimizda/page.tsx            # Hakkımızda
│   │   ├── egitim-programlarimiz/page.tsx # Özel Ders Eğitim Programlarımız
│   │   ├── egitim-modelimiz/page.tsx      # Eğitim Modelimiz & Metodoloji
│   │   ├── neden-farkliyiz/page.tsx       # Neden Farklıyız? (Avantajlar)
│   │   ├── iletisim/page.tsx              # İletişim & Lokasyonlar
│   │   ├── onizleme/page.tsx              # Studio önizleme / test alanı
│   │   ├── layout.tsx                     # Kök mizanpaj, fontlar ve meta veriler
│   │   ├── template.tsx                   # Sayfa geçiş animasyonu (GPU shutter)
│   │   ├── not-found.tsx                  # Özel 404 sayfası
│   │   └── globals.css                    # Tailwind ve temel tipografi stilleri
│   ├── components/
│   │   ├── layout/                        # Navbar, Footer, SiteShell, FloatingWhatsApp, PreviewProtection
│   │   ├── brand/                         # AybarCrest (vektörel kurumsal arma)
│   │   ├── motion/                        # Primitives.tsx (hafif hareket bileşenleri)
│   │   ├── programs/                      # ProgramExplorer.tsx (kategori ve ders filtreleme)
│   │   └── providers/                     # SmoothScrollProvider.tsx (120Hz doğal scroll)
│   ├── config/
│   │   └── site.ts                        # TEK AYAR NOKTASI: Telefon, logo, WhatsApp, e-posta, ajans
│   ├── data/
│   │   └── content.ts                     # TÜM SİTE METİNLERİ (docs/MUSTERI_METNI.md kaynaklı)
│   └── lib/
│       └── scroll.ts                      # Tıklamalarda içerik başına kaydırma (scrollToSection)
├── public/
│   └── images/                            # Optimize edilmiş görseller (≤120KB, lazy loading)
├── docs/
│   ├── KULLANICI_TALIMATLARI.md           # TÜM GEÇMİŞ KOMUTLARIN VE KURALLARIN ÖZETİ (Mutlaka Okunmalı)
│   ├── CANLIYA_ALMA_REHBERI.md            # Önizleme koruması ve Cloudflare Pages canlı dağıtım rehberi
│   └── MUSTERI_METNI.md                   # Müşteriden gelen resmi metin (DEĞİŞTİRİLEMEZ KAYNAK)
└── scripts/
    ├── deploy-preview.sh                  # GitHub Pages CDN korumalı önizleme dağıtım betiği
    └── visual-audit.mjs                   # Headless Chrome CDP mobil/tablet/desktop görsel denetim betiği
```

---

## 4. TARTIŞMASIZ KURALLAR (Non-Negotiable Rules)
> **Önemli:** Her kod veya içerik değişikliğinden önce [docs/KULLANICI_TALIMATLARI.md](file:///Users/tahaereneroglu/.gemini/antigravity/scratch/aybar-akademi/docs/KULLANICI_TALIMATLARI.md) dosyasını referans alınız.

1. **Metinler Yalnızca Müşteri Kaynaklıdır:**
   - Sitedeki metinlerin tek kaynağı [docs/MUSTERI_METNI.md](file:///Users/tahaereneroglu/.gemini/antigravity/scratch/aybar-akademi/docs/MUSTERI_METNI.md) olup [src/data/content.ts](file:///Users/tahaereneroglu/.gemini/antigravity/scratch/aybar-akademi/src/data/content.ts) üzerinden yönetilir.
   - Uydurma garanti ("Garantili", "%100 başarı"), yapay istatistik, hayali rozet/slogan, karşılaştırma tablosu veya uydurma süreç adımı **KESİNLİKLE YASAKTIR**.
   - "Laf kalabalığı" yapılmaz; kaçınılmaz UI metinleri ("İncele", "Sonraki", "WhatsApp ile Bilgi Al") kısa ve nötr olmalıdır.
2. **Görsel Kullanım Sınırı:**
   - Sayfa başına **en fazla 1 ana fotoğraf** (yalnızca ana sayfada en fazla 2). Gereksiz görsel eklenmez.
   - Tüm görseller sıkıştırılmış (≤120KB) ve `loading="lazy"` nitelikli olmalıdır.
3. **Mobilde Sıfır Takılma (No-Jank):**
   - Telefondaki gezinmede donma/kasma kabul edilmez.
   - Mobilde ağır `backdrop-blur`, dev blur gölgeler veya tam ekranı bloke eden perdeler yasaktır; animasyonlar sadece `transform` ve `opacity` ile sınırlıdır.
4. **Tıklamalarda İçeriğe Kaydırma:**
   - Kategori sekmesi, adım veya filtre değiştiğinde kullanıcıyı ilgili içeriğin başına kaydırın ([src/lib/scroll.ts](file:///Users/tahaereneroglu/.gemini/antigravity/scratch/aybar-akademi/src/lib/scroll.ts) içindeki `scrollToSection`).
5. **Tipografi Standartları:**
   - Marka adı: `font-brand` (Montserrat 800, uppercase, geniş harf aralığı).
   - Başlık ve gövde: Plus Jakarta Sans (`tracking-tight` -0.015em; Türkçe harfler İ, Ö, Ü, Ğ sıkışmayacak/çakışmayacak).
   - Başlık satır yüksekliği 1.15–1.2, gövde satır yüksekliği `leading-relaxed` (1.65), mobilde gövde boyutu ≥15px.
   - Eyebrow (etiket): 12–13px, `font-bold`, `tracking-[0.08em]`. Gövde içinde büyük harfle bağırma yapılmaz.
   - Alıntı ve vurgu: `font-serif` (Lora italik) — yalnızca kurucu sözü ve alıntılarda.

---

## 5. Komutlar (Commands)

```bash
# Geliştirme sunucusu
npm run dev

# TypeScript tip kontrolü
npm run typecheck

# Standart Next.js derlemesi
npm run build

# Korumalı GitHub Pages önizleme derlemesi (static export)
npm run build:preview

# Canlı yayın derlemesi (Cloudflare Pages için static export)
npm run build:production

# Korumalı önizlemeyi GitHub Pages CDN'e yükleme (gh auth gerektirir)
npm run deploy:preview

# Headless Chrome ile mobil/tablet/desktop görsel kalite denetimi (qa-shots/ çıktısı)
npm run audit:visual
```

---

## 6. Ortam Değişkenleri (Environment Variables)

| Değişken | Değer / Amaç |
| :--- | :--- |
| `STATIC_EXPORT` | `true` verildiğinde `next.config.ts` statik dışa aktarım (`output: "export"`) moduna geçer ve `out/` dizinini üretir. |
| `NEXT_PUBLIC_BASE_PATH` | GitHub Pages CDN alt dizini için yol ön eki (örn: `/aybar-akademi`). Boş ise kök dizin kullanılır. |
| `NEXT_PUBLIC_PREVIEW_MODE` | `true` olduğunda alan adı kilidi, sağ tık/metin kopyalama engeli, Google `noindex` ve `EROĞLU SOLUTIONS · ÖNİZLEME` filigranı devreye girer. Canlı yayında tanımlanmaz. |

---

## 7. Dağıtım Mimarisi (Deployment)

1. **Korumalı Müşteri Önizlemesi (GitHub Pages CDN):**
   - URL: `https://erog1u.github.io/aybar-akademi/`
   - Dağıtım: `npm run deploy:preview` (`scripts/deploy-preview.sh`)
   - Kod gizliliği, alan adı kilidi, kopya koruması ve filigran otomatik aktiftir.
2. **Kalıcı Canlı Yayın (Cloudflare Pages):**
   - Kaynak kodlar gizli (Private) depoda tutulur.
   - Cloudflare Pages Build Ayarı: `STATIC_EXPORT=true npm run build`, Çıktı: `out`.
   - `NEXT_PUBLIC_PREVIEW_MODE` eklenmez; böylece kilitler ve filigran otomatik kalkar, Google indekslemesi açılır.
   - Detaylı adımlar için: [docs/CANLIYA_ALMA_REHBERI.md](file:///Users/tahaereneroglu/.gemini/antigravity/scratch/aybar-akademi/docs/CANLIYA_ALMA_REHBERI.md).

---

## 8. Açık İşler / Yapılacaklar (Pending Tasks)

- [ ] **Müşteri Telefon Numarası:** Müşteriden kesin telefon numarası ve WhatsApp hattı geldiğinde [src/config/site.ts](file:///Users/tahaereneroglu/.gemini/antigravity/scratch/aybar-akademi/src/config/site.ts) (`phoneDisplay`, `phoneHref`, `whatsappNumber`) güncellenecek.
- [ ] **Müşteri Logosu:** Müşteri logoda küçük bir değişiklik yapabileceğini bildirdi; güncel logo geldiğinde `public/images/` altına eklenip [src/config/site.ts](file:///Users/tahaereneroglu/.gemini/antigravity/scratch/aybar-akademi/src/config/site.ts) güncellenecek.
- [ ] **Ajans Bağlantısı:** `eroglusolutions.com` bağlantısı ve alt bilgi imzası teyit edilecek.
- [ ] **Canlı Alan Adı:** Alan adı (`aybarakademi.com` / `aybarakademi.com.tr`) tescil edilip Cloudflare Pages üzerine bağlanacak.
