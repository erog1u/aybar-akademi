/**
 * AYBAR AKADEMİ - Güvenlik ve Form Sanitizasyon Araçları
 * XSS, HTML/Script enjeksiyonu ve potansiyel zararlı karakterleri filtreler.
 */

export {
  sanitizeText,
  sanitizeName,
  validateName,
  cleanPhoneDigits,
  formatTurkishPhoneNumber,
  validateTurkishPhoneNumber,
  validateEmail,
  validateNote,
  buildSafeWhatsAppUrl,
  checkRateLimit,
  recordRateLimitAttempt,
} from "./security";
