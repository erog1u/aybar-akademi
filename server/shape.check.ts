// Çalıştır: npx tsx server/shape.check.ts
import { sameShape } from "./shape";
import data from "../src/data/site-content.json";

const clone = () => JSON.parse(JSON.stringify(data));
const ok = clone();
ok.home.introParagraphs.push("Yeni paragraf");
ok.home.slides.pop();
if (sameShape(ok, data)) throw new Error("geçerli değişiklik reddedildi: " + sameShape(ok, data));
const bad1 = clone(); bad1.home.introParagraphs = "metin";
const bad2 = clone(); bad2.home.yeniAlan = "x";
const bad3 = clone(); bad3.home.slides[0].src = 5;
for (const b of [bad1, bad2, bad3]) if (!sameShape(b, data)) throw new Error("bozuk içerik kabul edildi");
console.log("biçim testleri geçti");
