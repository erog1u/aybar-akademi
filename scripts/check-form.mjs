// Form doğrulama öz denetimi: node scripts/check-form.mjs (Node 23+)
import assert from "node:assert/strict";
import { validateName, validateTurkishPhoneNumber as phone, sanitizeText, buildSafeWhatsAppUrl } from "../src/lib/security.ts";

for (const n of ["Seval Kaya", "Şeval Demir", "Nâzım Hikmet", "O’Brien", "Çağrı İpek"]) {
  const r = validateName(n, true);
  assert.ok(r.isValid, n);
  assert.equal(r.cleanValue, n);
}
for (const p of ["0532 123 45 67", "5321234567", "+90 532 123 45 67", "0090 532 123 45 67", "+90 0532 123 45 67"]) {
  assert.equal(phone(p, true).normalized, "905321234567", p);
}
for (const p of ["053212345678", "53212345679999", "0532 123", "0212 123 45 67", ""]) {
  assert.equal(phone(p, true).isValid, false, p);
}
assert.equal(sanitizeText("Fonksiyon = türev"), "Fonksiyon = türev");
assert.equal(sanitizeText("a<b ve c>d"), "a<b ve c>d");
assert.doesNotThrow(() => buildSafeWhatsAppUrl("905439766734", "x".repeat(1499) + "😀😀"));
console.log("form denetimi: tamam");
