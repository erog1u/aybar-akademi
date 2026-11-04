# AYBAR AKADEMİ — Canlıya Alma & Müşteri Teslim Rehberi (Eroğlu Solutions)

Bu proje hem **korumalı önizleme** hem de **kalıcı, sıfır maliyetli ve ultra hızlı canlı yayın (Cloudflare Pages)** için hazır şekilde yapılandırılmıştır.

---

## 1. Önizleme Koruması (Çalınma / Kopyalanma Önlemleri)

Müşteriye gönderilen önizleme sürümünde (`NEXT_PUBLIC_PREVIEW_MODE=true`):
1. **Kaynak Kod Gizliliği:** Sunucuda TypeScript / React kaynak kodları bulunmaz; yalnızca derlenmiş çıktılar yayınlanır. Tam kaynak kodlar gizli (`Private`) GitHub deposunda tutulur.
2. **Alan Adı Kilidi (`Domain Lock`):** Önizleme dosyaları birisi tarafından indirilip başka bir alan adına (`aybaristakademi.com` vb.) yüklense dahi sistem alan adını kontrol eder ve **"Yetkisiz Alan Adı — Eroğlu Solutions Lisans Koruması"** ekranıyla siteyi kilitler.
3. **Kopyalama, Sağ Tık, Görsel Sürükleme ve PDF Koruması:** Sağ tık menüsü, görsel sürükleme, metin kopyalama, `Ctrl/Cmd+S`, `Ctrl/Cmd+U` ve yazdırma (`Ctrl/Cmd+P` -> PDF kaydetme) devre dışıdır.
4. **Google İndeks Engeli (`noindex`):** Arama motorlarının önizleme linkini indekslemesi engellenir.

> **Not:** Müşteri onaylayıp ödeme tamamlandığında canlıya alırken `NEXT_PUBLIC_PREVIEW_MODE` değişkeni verilmez; böylece tüm önizleme kilitleri otomatik olarak kalkar, Google indekslemesi açılır.

---

## 2. Gerçek Alan Adına (`aybaristakademi.com` / `.com.tr`) En Sorunsuz Canlıya Alma Yöntemi

Kendi sitenizde (`eroglusolutions.com`) kullandığınız **Gizli (Private) GitHub Deposu + Cloudflare Pages** altyapısı bu proje için de **en hızlı, en güvenli ve $0/ay maliyetli** çözümdür:

### Neden Cloudflare Pages?
- **Türkiye İçi Ultra Düşük Gecikme (`<10ms`):** İstanbul CDN sunucuları üzerinden anında açılır, trafik limiti yoktur, çökme riski sıfırdır.
- **%100 Gizli Kaynak Kod:** GitHub deposu **Private (Gizli)** olduğu için dışarıdan hiç kimse kodları veya dosyaları göremez / indiremez.
- **Ücretsiz Otomatik SSL & Kurumsal E-Posta Yönlendirme:** `https://` sertifikası otomatik tanımlanır, `iletisim@aybaristakademi.com` e-postaları ücretsiz olarak müşterinin Gmail adresine yönlendirilebilir.

### 3 Dakikada Canlıya Alma Adımları
1. **Cloudflare Paneli** (`dash.cloudflare.com`) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Gizli GitHub deponuzu (`erog1u/aybar-akademi-source`) seçin.
3. **Build ayarlarını** şu şekilde girin:
   - **Production branch:** `main`
   - **Framework preset:** `None` (veya `Next.js (Static HTML Export)`)
   - **Build command:** `STATIC_EXPORT=true npm run build`
   - **Build output directory:** `out`
   - **Environment variables:** `NODE_VERSION` = `20` *(Canlı yayında `NEXT_PUBLIC_PREVIEW_MODE` eklemeyin!)*
4. **Save and Deploy** butonuna tıklayın.
5. **Custom Domains** sekmesinden `aybaristakademi.com` ve `www.aybaristakademi.com` alan adlarını bağlayın.

---

## 3. Telefon Numarası ve Logo Güncelleme Noktası

Müşteriden kesin telefon numarası veya güncel logo geldiğinde yalnızca tek dosyayı düzenlemeniz yeterlidir:
- Dosya: `src/config/site.ts` (`phoneDisplay`, `phoneHref`, `whatsappNumber`, `email`)
- Değişikliği `git push` yaptığınız anda Cloudflare Pages siteyi 30 saniye içinde otomatik günceller.
