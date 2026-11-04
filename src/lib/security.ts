/**
 * AYBARİst AKADEMİ — Form Güvenliği, Doğrulama & Sanitizasyon Kütüphanesi
 * ------------------------------------------------------------------
 * XSS injection koruması, Türkiye telefon formatlaması (+90 / 05xx),
 * çift tıklama (double-submit) engelleme, istemci tarafı rate-limit
 * ve güvenli WhatsApp URI encoding araçları.
 */

// 1. Genel Metin Sanitizasyonu (XSS, Script & Payload Koruması)
export function sanitizeText(input: unknown, maxLength = 1000): string {
  if (typeof input !== "string") return "";

  // HTML temizliği yok: çıktı yalnız React (kaçışlı) ve encodeURIComponent'e gider,
  // regex temizliği "Fonksiyon = türev" gibi meşru metni bozuyordu.
  let cleaned = input.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F-\u009F]/g, "");

  // Fazla boşlukları ve ardışık satır sonlarını normalize et
  cleaned = cleaned
    .replace(/\r\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  // Maksimum uzunluk sınırla
  // Array.from: emoji ortadan bölünürse encodeURIComponent URIError atar
  const chars = Array.from(cleaned);
  if (chars.length > maxLength) {
    cleaned = chars.slice(0, maxLength).join("");
  }

  return cleaned;
}

// 2. İsim Sanitizasyonu & Doğrulama
export function sanitizeName(input: unknown): string {
  const text = sanitizeText(input, 80);
  // Harfler (Nâzım, Âdem dahil), boşluk, nokta, tırnak ve tire
  return text.replace(/[^\p{L}\p{M}\s.'’-]/gu, "");
}

export function validateName(
  name: string,
  required = false
): {
  isValid: boolean;
  cleanValue: string;
  error?: string;
} {
  const clean = sanitizeName(name).trim();

  if (!clean) {
    if (required) {
      return {
        isValid: false,
        cleanValue: "",
        error: "Lütfen öğrenci veya veli adını giriniz.",
      };
    }
    return { isValid: true, cleanValue: "" };
  }

  if (clean.length < 2) {
    return {
      isValid: false,
      cleanValue: clean,
      error: "Ad Soyad en az 2 karakter olmalıdır.",
    };
  }

  if (clean.length > 80) {
    return {
      isValid: false,
      cleanValue: clean,
      error: "Ad Soyad en fazla 80 karakter olabilir.",
    };
  }

  return { isValid: true, cleanValue: clean };
}

// 3. Türkiye Telefon Numarası Formatlama & Doğrulama (+90 / 05xx)
export function cleanPhoneDigits(raw: string): string {
  if (!raw) return "";
  // +90, 0090, 90 ve baştaki 0 önekleri atılır; fazla hane doğrulamada reddedilir
  return raw.replace(/\D/g, "").replace(/^(?:00)?(?:90)?0?/, "");
}

export function formatTurkishPhoneNumber(raw: string): string {
  if (!raw) return "";
  const digits = cleanPhoneDigits(raw);

  if (digits.length === 0) return "";
  if (digits.length <= 3) return `0 (${digits}`;
  if (digits.length <= 6)
    return `0 (${digits.slice(0, 3)}) ${digits.slice(3)}`;
  if (digits.length <= 8)
    return `0 (${digits.slice(0, 3)}) ${digits.slice(3, 6)} ${digits.slice(6)}`;
  return `0 (${digits.slice(0, 3)}) ${digits.slice(3, 6)} ${digits.slice(
    6,
    8
  )} ${digits.slice(8, 10)}`;
}

export function validateTurkishPhoneNumber(
  input: string,
  required = false
): {
  isValid: boolean;
  error?: string;
  normalized: string; // 905XXXXXXXXX
  display: string; // 0 (5XX) XXX XX XX
} {
  const digits = cleanPhoneDigits(input);

  if (!digits) {
    if (required) {
      return {
        isValid: false,
        error: "Lütfen iletişim için cep telefonu numaranızı giriniz.",
        normalized: "",
        display: "",
      };
    }
    return { isValid: true, normalized: "", display: "" };
  }

  // Türkiye cep numaraları '5' ile başlar (501..559)
  if (!digits.startsWith("5")) {
    return {
      isValid: false,
      error: "Telefon numarası 5 ile başlamalıdır (Örn: 0532 123 45 67).",
      normalized: "",
      display: formatTurkishPhoneNumber(digits),
    };
  }

  if (digits.length < 10) {
    return {
      isValid: false,
      error: `Telefon numarası eksik (${10 - digits.length} hane daha gerekli).`,
      normalized: "",
      display: formatTurkishPhoneNumber(digits),
    };
  }

  if (digits.length > 10) {
    return {
      isValid: false,
      error: "Telefon numarasında fazla hane var (Örn: 0532 123 45 67).",
      normalized: "",
      display: formatTurkishPhoneNumber(digits),
    };
  }

  const normalized = `90${digits}`;
  const display = formatTurkishPhoneNumber(digits);

  return {
    isValid: true,
    normalized,
    display,
  };
}

// 4. E-Posta Doğrulama & Header / CRLF Injection Koruması
export function validateEmail(
  input: string,
  required = false
): {
  isValid: boolean;
  cleanValue: string;
  error?: string;
} {
  if (!input || !input.trim()) {
    if (required) {
      return {
        isValid: false,
        cleanValue: "",
        error: "Lütfen e-posta adresinizi giriniz.",
      };
    }
    return { isValid: true, cleanValue: "" };
  }

  // CRLF ve zararlı karakterleri temizle
  const clean = input.replace(/[\r\n\t]/g, "").trim().toLowerCase();

  if (clean.length > 100) {
    return {
      isValid: false,
      cleanValue: clean,
      error: "E-posta adresi en fazla 100 karakter olabilir.",
    };
  }

  // Standart e-posta deseni
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

  if (!emailRegex.test(clean)) {
    return {
      isValid: false,
      cleanValue: clean,
      error:
        "Lütfen geçerli bir e-posta adresi giriniz (Örn: ad.soyad@ornek.com).",
    };
  }

  return { isValid: true, cleanValue: clean };
}

// 5. Mesaj & Not Doğrulama
export function validateNote(
  input: string,
  maxLength = 500
): {
  isValid: boolean;
  cleanValue: string;
  error?: string;
} {
  const clean = sanitizeText(input, maxLength);
  if (clean.length > maxLength) {
    return {
      isValid: false,
      cleanValue: clean,
      error: `Notunuz en fazla ${maxLength} karakter olabilir.`,
    };
  }
  return { isValid: true, cleanValue: clean };
}

// 6. Güvenli WhatsApp Bağlantı Oluşturucu
export function buildSafeWhatsAppUrl(
  whatsappNumber: string,
  message: string
): string {
  // Sadece rakamları al, boşsa varsayılan
  const cleanNumber = (whatsappNumber || "905439766734").replace(/\D/g, "");
  // Mesajı güvenli sanitize et
  const cleanMsg = sanitizeText(message, 1500);
  const encodedText = encodeURIComponent(cleanMsg);
  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
}

// 7. Rate Limiting Simülasyonu & Çift Tıklama Koruması
export interface RateLimitResult {
  allowed: boolean;
  retryAfterSeconds: number;
}

export function checkRateLimit(
  actionKey = "aybar_contact_form",
  maxAttempts = 3,
  windowSeconds = 60
): RateLimitResult {
  if (typeof window === "undefined") {
    return { allowed: true, retryAfterSeconds: 0 };
  }

  try {
    const key = `ratelimit_${actionKey}`;
    const raw = window.localStorage.getItem(key);
    const now = Date.now();
    const windowMs = windowSeconds * 1000;

    let timestamps: number[] = raw ? JSON.parse(raw) : [];
    timestamps = timestamps.filter(
      (t) => typeof t === "number" && now - t < windowMs
    );

    if (timestamps.length >= maxAttempts) {
      const oldestInWindow = Math.min(...timestamps);
      const waitMs = windowMs - (now - oldestInWindow);
      const retryAfterSeconds = Math.max(1, Math.ceil(waitMs / 1000));
      return { allowed: false, retryAfterSeconds };
    }

    return { allowed: true, retryAfterSeconds: 0 };
  } catch {
    return { allowed: true, retryAfterSeconds: 0 };
  }
}

export function recordRateLimitAttempt(
  actionKey = "aybar_contact_form"
): void {
  if (typeof window === "undefined") return;

  try {
    const key = `ratelimit_${actionKey}`;
    const raw = window.localStorage.getItem(key);
    const now = Date.now();
    const windowMs = 60 * 1000;

    let timestamps: number[] = raw ? JSON.parse(raw) : [];
    timestamps = timestamps.filter(
      (t) => typeof t === "number" && now - t < windowMs
    );
    timestamps.push(now);

    window.localStorage.setItem(key, JSON.stringify(timestamps));
  } catch {
    // LocalStorage kota veya gizli sekme engeli durumunda sessizce geç
  }
}
