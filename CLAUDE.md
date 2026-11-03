# AYBAR AKADEMİ — Claude Code Geliştirici Kılavuzu

Bu belge, **Claude Code** ve projeyi devralacak geliştiriciler için mimariyi, değiştirilemez kuralları, dosya sorumluluklarını, komutları ve açık işleri eksiksiz biçimde özetler.

---

## 1. Proje Amacı ve Kimliği
- **Kurum:** AYBARİst AKADEMİ. Sözcük işareti: `AYBAR` mavi ve büyük, `İ` kırmızı ve büyük, `st` kırmızı ve küçük, bitişik `AYBARİst`. Telefon ve WhatsApp: `0543 976 67 34` / `+905439766734` (`src/config/site.ts`).
- **Geliştirici Ajans:** Eroğlu Solutions ([eroglusolutions.com](https://eroglusolutions.com)).
- **Amaç:** Next.js 15 tabanlı, statik dışa aktarılan (SSG/export), ultra hızlı (103 KB shared bundle), mobil uyumlu (0px taşma), kurumsal prestiji yansıtan, sıfır takılmalı (zero-lag) modern web sitesi.
- **Canlı Korumalı Önizleme CDN:** `https://erog1u.github.io/aybar-akademi/`
- **Geri Dönüş Güvenlik Noktası (Rollback Tag):** Git etiketi `checkpoint-user-save` (Commit: `86d98bd`) remote üzerinde korunmaktadır.

---

## 2. Teknoloji Yığını (Tech Stack)
- **Çekirdek:** Next.js 15 (App Router, Static Export), React 19, TypeScript 5.8
- **Stil & Tasarım:** Tailwind CSS 3.4
  - Kurumsal Palet: Kraliyet Kobalt Mavisi (`#0044B5`), Gece Mavisi (`#08245E`, `#04153B`), Sinyal Kırmızı (`#DC1B2E`), Arka Plan (`#FAFBFD`), Metin (`#09152B`)
- **İkonlar:** `lucide-react`
- **Animasyon & Akıcılık:**
  - Kaydırma tarayıcının kendi kaydırmasıdır. Lenis yok, özel imleç yok, tam ekran perde geçişi yok.
  - `html { scroll-behavior: smooth; scroll-padding-top: var(--header-offset) }`. `prefers-reduced-motion: reduce` açıkken animasyonlar ve yumuşak kaydırma kapanır.
  - Sayfa geçişi: `src/app/template.tsx` içinde kısa bir opaklık geçişi (`.page-enter`, yaklaşık 0.22s).
  - Kalan süs animasyonları `src/app/globals.css` içindedir (`animate-gentle-glow`, `animate-crimson-box`, `radar-beacon`).
- **Yazı tipleri (yüklü olanlar):** Plus Jakarta Sans (gövde, başlık ve `font-brand`), Lora (yalnızca alıntı/serif), JetBrains Mono (kod). Montserrat yüklenmez.
- **Görsel Optimizasyonu:** Node.js `sharp` + `mozjpeg` progressive sıkıştırma (tüm ana görseller ≤100 KB, `decoding="async"`, `fetchPriority="high"`).

---

## 3. Dizin ve Dosya Haritası

```text
aybar-akademi/
├── CLAUDE.md                              # Bu ana rehber belge
├── README.md                              # Repo genel tanıtımı
├── docs/
│   ├── KULLANICI_TALIMATLARI.md           # Müşteri/Ajans tüm geçmiş kural ve tasarım standartları özeti
│   ├── CANLIYA_ALMA_REHBERI.md            # Önizleme koruması ve Cloudflare Pages canlı dağıtım rehberi
│   └── MUSTERI_METNI.md                   # Müşterinin resmi ham metni (DEĞİŞTİRİLEMEZ TEK KAYNAK)
├── scripts/
│   ├── deploy-preview.sh                  # GitHub Pages CDN korumalı önizleme dağıtım betiği
│   └── visual-audit.mjs                   # Headless Chrome CDP mobil/tablet/desktop görsel denetim betiği
├── public/
│   └── images/                            # Optimize edilmiş görseller (≤100 KB)
│       ├── hero-one-on-one.jpg            # Ana sayfa hero stüdyo görseli
│       ├── maarif-academic-mentorship.jpg # 33 Yıllık Deneyim & Maarif mentörlük fotoğrafı (98 KB)
│       ├── programs-global-study.jpg      # Eğitim Programlarımız hero görseli
│       ├── vip-mentorship.jpg             # Eğitim Modelimiz hero görseli
│       ├── exam-strategy-notebook.jpg     # Neden Farklıyız hero görseli
│       ├── istanbul-home-tutoring.jpg     # Hakkımızda hero görseli
│       ├── logo-full.png                  # Resmi tam logo (148 KB)
│       └── logo-emblem.png                # Vektörel/PNG arma (37 KB)
├── src/
│   ├── app/
│   │   ├── page.tsx                       # Ana Sayfa (Hero, Bölümlerimiz, 33 Yıl Çözümler, Kurucu Mesajı, SSS)
│   │   ├── hakkimizda/page.tsx            # Hakkımızda (Kurumsal Tarihçe, Çözümler, Hizmet Ağı)
│   │   ├── egitim-programlarimiz/page.tsx # Eğitim Programlarımız vitrini
│   │   ├── egitim-modelimiz/page.tsx      # Eğitim Modelimiz (4 Temel Aşama, 4 Yönlü Başarı Ekosistemi)
│   │   ├── neden-farkliyiz/page.tsx       # Neden Farklıyız? (5 Standart İlke, Hata Defteri Metodolojisi)
│   │   ├── iletisim/page.tsx              # İletişim (3 Adımlı Form, Canlı WhatsApp Mesaj Önizlemesi, Lokasyonlar)
│   │   ├── onizleme/page.tsx              # İç cihaz stüdyosu. Üretim derlemesinde 404; önizleme modunda açılır. noindex, sitemap dışı.
│   │   ├── layout.tsx                     # Kök layout, SEO meta verileri, OpenGraph, JSON-LD
│   │   ├── template.tsx                   # Kısa sayfa geçiş katmanı (opaklık). Perde/lazer yok.
│   │   ├── globals.css                    # Tailwind katmanları, özel animasyon keyframe'leri, tipografi
│   │   ├── robots.ts & sitemap.ts         # Otomatik XML sitemap ve robots.txt üretimi
│   │   └── not-found.tsx                  # Prestijli 404 sayfası
│   ├── components/
│   │   ├── brand/
│   │   │   └── AybarCrest.tsx             # Resmi dairesel arma ve AybarBrandLockup logo bileşeni
│   │   ├── layout/
│   │   │   ├── Navbar.tsx                 # 80px/64px sticky kurumsal menü ve mobil drawer
│   │   │   ├── Footer.tsx                 # Kurumsal alt bilgi, program linkleri ve telif şeridi
│   │   │   ├── SiteShell.tsx              # Sayfa sarmalayıcı (Navbar/Footer/WhatsApp). Özel imleç yok.
│   │   │   ├── FloatingWhatsApp.tsx       # Köşede ikon boyutunda yüzen WhatsApp danışma butonu
│   │   │   ├── WhatsAppFloatingButton.tsx # Sabit butonun kendisi (metinli geniş pill değil)
│   │   │   ├── Breadcrumbs.tsx            # Schema.org uyumlu BreadcrumbList navigasyon izi
│   │   │   └── PreviewProtection.tsx      # Önizleme koruması (alan adı kilidi, kopya engeli, watermark)
│   │   ├── motion/
│   │   │   └── Primitives.tsx             # MaskedLines, PhotoFrame, SectionHeader, MagneticLink, NextChapterBanner
│   │   ├── programs/
│   │   │   └── ProgramExplorer.tsx        # Anında Canlı Arama (Search), 6 Kategori Sekmesi, Program Kartları
│   │   ├── faq/
│   │   │   └── FaqSection.tsx             # 6 Maddelik Akordeon SSS bileşeni (FAQPage Schema uyumlu)
│   │   └── seo/
│   │       └── JsonLd.tsx                 # Schema.org EducationalOrganization, Person, Course, FAQPage JSON-LD
│   ├── config/
│   │   └── site.ts                        # TEK AYAR MERKEZİ: Telefon, e-posta, WhatsApp, logolar, ajans bilgisi
│   ├── data/
│   │   └── content.ts                     # TÜM SİTE İÇERİKLERİ (MUSTERI_METNI.md kaynaklı resmi veriler)
│   └── lib/
│       └── scroll.ts                      # Tıklamalarda içerik başına yumuşak kaydırma (scrollToSection)
```

---

## 4. TARTIŞMASIZ KURALLAR (Non-Negotiable Rules)

1. **İçerik Sadakati (EN ÖNEMLİ KURAL):**
   - Sitedeki tüm metinlerin tek yasal kaynağı `docs/MUSTERI_METNI.md` belgesidir.
   - Uydurma garanti ("Garantili", "%100 sınav garantisi"), yapay istatistik, hayali rozet, uydurma süreç adımı **KESİNLİKLE YASAKTIR**.
   - Hizmet alanı müşteri metnindeki gibi yazılır: İstanbul’un tüm ilçelerinde yüz yüze (evde), tüm Türkiye’de canlı online. "39 ilçe", "81 il" ve "%100 Maarif uyumu" yazılmaz.
2. **Görsel ve Performans Disiplini:**
   - Sayfa başına **en fazla 1 ana görsel** (ana sayfada en fazla 2). Asla kontrolsüz fotoğraf eklenmez.
   - Yeni görsel eklenecekse önce Node.js `sharp` ile `mozjpeg` sıkıştırmasından geçirilip ≤100 KB seviyesine indirilmelidir.
   - Tüm `<img>` etiketlerinde `loading="lazy"` ve `decoding="async"` bulunmalıdır.
3. **Tipografi ve Kutu Çarpışması Koruması:**
   - H1 başlıkları içinde metinlerin üstüne taşan kalın arka plan kutuları (`inline-block bg-white ...`) konulmamalıdır; satır aralıkları ferah tutulmalıdır.
   - Başlık satır yüksekliği 1.15–1.2, gövde satır yüksekliği `leading-relaxed` (1.65). Mobilde gövde yazı boyutu ≥15px olmalıdır.
   - Alıntılar ve kurucu sözleri haricinde italik/serif kullanılmaz. Gövde ve marka yazısı Plus Jakarta Sans'tır. Lora yalnızca alıntıda, JetBrains Mono kodda kullanılır.
4. **Hero 4-Stat Şerit Simetrisi:**
   - Hero altlarındaki 4 sütunlu şeritlerde rakamların rengi tek tip beyaz (`text-white font-extrabold`) olmalıdır; araya clashing kırmızı rakam sıkıştırılmamalıdır.
   - Hero şeridinde uydurma oran veya il sayısı yoktur. Kullanılan ifadeler: `33 Yıl / Köklü Deneyim`, `Maarif / Hâkim Kadro`, `İstanbul / Tüm İlçelerinde`, `Türkiye / Tüm Türkiye’de`. `30 dakikalık ücretsiz tanışma` müşteri metnindedir ve korunur.

---

## 5. Çalıştırma ve Dağıtım Komutları

```bash
# 1. Geliştirme sunucusunu başlatma (http://localhost:3000)
npm run dev

# 2. TypeScript tip denetimi (0 hata kuralı). next.config.ts derleme hatalarını yok saymaz.
npm run typecheck

# 3. Yerel derleme testi (Static export kontrolü)
npm run build

# 4. Korumalı GitHub Pages CDN önizleme derlemesi
npm run build:preview

# 5. Korumalı CDN önizlemesini GitHub Pages'a yükleme (gh-pages dalına force push)
npm run deploy:preview

# 6. Canlı yayın derlemesi (Cloudflare Pages için)
npm run build:production

# 7. Headless Chrome ile 40 ekran görüntülü görsel ve taşma denetimi
npm run audit:visual
```

---

## 6. Açık İşler / Müşteriden Beklenenler (Pending Tasks)

Claude Code ile devam ederken tamamlanması gereken nihai operasyonel adımlar:

- [ ] **Müşteri Telefon Numarası:** Müşteriden nihai kurumsal telefon ve WhatsApp hattı geldiğinde sadece `src/config/site.ts` dosyasındaki `phoneDisplay`, `phoneHref` ve `whatsappNumber` alanları güncellenecektir.
- [ ] **Müşteri Logosu:** Müşteri mevcut logoda ufak bir revize yapabileceğini belirtmiştir; yeni dosya gelirse `public/images/` altına konulup `src/config/site.ts` içindeki dosya adresi güncellenecektir.
- [ ] **Ajans Bağlantısı:** `eroglusolutions.com` bağlantısı ve alt bilgi imzası teyit edilecektir.
- [ ] **Cloudflare Pages Canlı Yayını:** Müşteri alan adı (`aybarakademi.com`) onaylandığında `docs/CANLIYA_ALMA_REHBERI.md` adımları takip edilerek Cloudflare Pages'a bağlanacaktır.
