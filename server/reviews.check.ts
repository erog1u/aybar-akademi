// Çalıştır: npx tsx server/reviews.check.ts
import { autoHoldReason } from "./reviews";

const cases: [string, string | null][] = [
  ["Çok memnun kaldık, hocamız ilgili.", null],
  ["Beni arayın 0543 976 67 34", "kisisel_veri"],
  ["mail: a.b@c.com", "kisisel_veri"],
  ["site: www.x.com güzel", "reklam"],
  ["şerefsiz hoca", "hakaret"],
  ["sıkı çalıştık, siklet konusu yok", null],
];
for (const [text, want] of cases) {
  const got = autoHoldReason(text);
  if (got !== want) throw new Error(`${text} -> ${got}, beklenen ${want}`);
}
console.log("filtre testleri geçti");
