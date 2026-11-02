# AYBAR AKADEMİ — Kurumsal Web Sitesi

**Bilginin Kaynağı, Başarının Mimarı**  
33 yıllık köklü akademik deneyim ve Türkiye Yüzyılı Maarif Modeline %100 uyumlu VIP birebir özel ders platformu web sitesi.  
Tasarım & Yazılım: **Eroğlu Solutions** ([eroglusolutions.com](https://eroglusolutions.com)).

---

## Canlı Önizleme ve Dağıtım

- **Korumalı Müşteri Önizleme URL'si:** [https://erog1u.github.io/aybar-akademi/](https://erog1u.github.io/aybar-akademi/)
- **Geri Dönüş Güvenlik Etiketi (Rollback Tag):** `checkpoint-user-save` (Commit `86d98bd`)

---

## Geliştirici & Claude Code Kılavuzu

Proje mimarisi, dizin haritası, değiştirilemez kurallar, bağımlılıklar, npm komutları ve yapılacaklar listesi için ana geliştirici kılavuzu:  
👉 **[CLAUDE.md](CLAUDE.md)**

Tüm dokümantasyon ve kılavuz belgeleri:
- **[docs/KULLANICI_TALIMATLARI.md](docs/KULLANICI_TALIMATLARI.md)** — Eroğlu Solutions tüm geçmiş komutlar, içerik, tasarım ve tipografi standartları özeti.
- **[docs/CANLIYA_ALMA_REHBERI.md](docs/CANLIYA_ALMA_REHBERI.md)** — Önizleme koruması detayları ve Cloudflare Pages canlı yayın kurulum rehberi.
- **[docs/MUSTERI_METNI.md](docs/MUSTERI_METNI.md)** — Müşteriden gelen resmi metin (değiştirilemez ana kaynak).

---

## Hızlı Başlangıç

```bash
# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın (http://localhost:3000)
npm run dev

# TypeScript tip kontrolü (0 hata kuralı)
npm run typecheck

# Yerel derleme testi
npm run build

# Korumalı GitHub Pages CDN önizleme dağıtımı
npm run deploy:preview

# Headless görsel ve taşma denetimi (qa-shots/)
npm run audit:visual
```

---

## Tek Noktadan Yönetim

- **İletişim & Logo:** [`src/config/site.ts`](src/config/site.ts) — Telefon, WhatsApp hattı, e-posta ve logolar yalnızca bu dosyadan güncellenir.
- **Site Metinleri:** [`src/data/content.ts`](src/data/content.ts) — Sitedeki tüm metinler buradan beslenir (`docs/MUSTERI_METNI.md` haricinde iddia/metin eklenemez).
