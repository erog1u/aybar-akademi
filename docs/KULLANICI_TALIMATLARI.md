# Kullanıcı (Eroğlu Solutions) Talimatları — Tüm Geçmiş Komutların Özeti

Bu dosya, proje boyunca verilen TÜM talimatların kalıcı özetidir. Her değişiklikten önce okunmalıdır.

## 1. İçerik (EN KRİTİK KURAL)
- Sitedeki metinler YALNIZCA `docs/MUSTERI_METNI.md` (müşterinin resmi metni) kaynaklıdır → `src/data/content.ts`.
- Bildirilenin dışında hiçbir şey yazılmaz: garanti ("Garantili" vb.), istatistik, uydurma rozet/slogan, karşılaştırma tablosu, uydurma süreç adımı YASAK.
- "Laf kalabalığı" istenmiyor; gereksiz açıklama/alt yazı eklenmez.
- Kaçınılmaz arayüz metinleri (menü adları, "İncele", "Sonraki", "WhatsApp ile Bilgi Al" gibi buton etiketleri) kısa ve nötr olmalı; iddia içermemeli.
- Logo ve telefon numarası değişebilir → yalnızca `src/config/site.ts`.

## 2. Tasarım
- Tema: Kraliyet kobalt mavisi (#0044B5) + kırmızı (#DC1B2E) + beyaz (müşteri tema görselleri).
- Modern, "AI slop" olmayan, canlı ve vurucu ama SADE. Fontlar önemli (marka: Montserrat, metin: Plus Jakarta Sans, vurgu: Lora italik).
- Önemli yerler renklerle öne çıkarılmalı; ama karmaşa yok, üst üste sticky bar yok.
- Beyaz yazılar arka planda kaybolmamalı (kontrast).
- Logo sayfaya yedirilmeli (düz PNG yapıştırma gibi durmamalı).
- Fotoğraflar: az, tutarlı, anlamlı. Sayfa başına en fazla 1 ana fotoğraf (ana sayfa en fazla 2). Gereksiz fotoğraf yok.

## 2b. Tipografi (harf duruşu, boşluklar, font kullanımı)
- Fontlar: Marka adı (AYBAR AKADEMİ) → `font-brand` (Montserrat 800, uppercase, geniş harf aralığı). Başlıklar ve gövde → Plus Jakarta Sans. Alıntı/vurgu → `font-serif` (Lora italik) — sadece alıntılarda.
- Başlık harf aralığı sıkışık olmamalı: `tracking-tight` (-0.015em) kullanılır; Türkçe şapka/nokta (İ, Ö, Ü, Ğ) kesilmemeli/çakışmamalı.
- Başlık satır yüksekliği 1.15–1.2; gövde metni `leading-relaxed` (1.65); paragraf max genişliği ~70 karakter (`max-w-2xl/3xl`).
- Büyük harf etiketler (eyebrow): 12–13px, `font-bold`, `tracking-[0.08em]`. Gövde içinde büyük harf metin kullanılmaz.
- Boşluk ritmi tutarlı: bölüm `py-14 sm:py-20`, başlık→paragraf `mt-4`, kartlar arası `gap-5`, kart iç boşluğu `p-5 sm:p-6`.
- Aynı rol için aynı stil: tüm h1'ler aynı ölçek, tüm h2'ler aynı ölçek, tüm kart başlıkları aynı ölçek.

## 3. Kullanılabilirlik
- Telefon, tablet ve masaüstünde rahat, anlaşılır kullanım; yazılar telefonda küçük olmamalı (gövde ≥15px).
- Menülere erişim görünür olmalı.
- Sayfalar kullanıcıyı adım adım yönlendirmeli (Önceki/Sonraki).
- Bir sekmeye/adıma tıklanınca sayfa okunacak içeriğin başına yukarı kaydırmalı (`src/lib/scroll.ts`).

## 4. Performans & Animasyon
- Animasyonlu, akıcı geçişler isteniyor; ama telefonda KASMA/DONMA OLMAMALI.
- Sadece transform/opacity animasyonu; mobilde backdrop-blur, büyük blur gölge, tam ekran perde yok.
- Görseller sıkıştırılmış (≤120KB), `loading="lazy"`, `decoding="async"`.

## 5. Teslim
- Önizleme linki: https://erog1u.github.io/aybar-akademi/ (korumalı: alan adı kilidi, sağ tık/kopya engeli, filigran, noindex).
- Sitenin en altında "Tasarım & Yazılım: Eroğlu Solutions" imzası → https://eroglusolutions.com
- Canlıya alma: gizli GitHub deposu + Cloudflare Pages (`docs/CANLIYA_ALMA_REHBERI.md`).
