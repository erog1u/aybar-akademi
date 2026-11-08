// Şeffaf yorum kuralları: yorum hemen yayınlanır; yalnız otomatik filtre bekletir.
// Yönetici silemez; yalnız sabit sebeplerle gizler ve gizlenen yorumun yerinde sebep herkese görünür.
export const HIDE_REASONS: Record<string, string> = {
  kisisel_veri: "kişisel veri içerdiği için",
  hakaret: "hakaret içerdiği için",
  reklam: "reklam veya spam olduğu için",
  konu_disi: "kurumla ilgisi olmadığı için",
};

const SWEAR_EXACT = ["amk", "aq", "oç", "piç", "göt", "sik", "ibne", "mk"];
const SWEAR_PREFIX = ["orospu", "siktir", "sikey", "sikim", "yarra", "pezevenk", "şerefsiz", "kahpe", "gavat", "amcık", "amına"];

// Yorum otomatik yayına uygun değilse sebebi döner (telefon, e-posta, link, küfür).
export function autoHoldReason(text: string): string | null {
  const t = text.toLocaleLowerCase("tr");
  if ((t.match(/\d/g) || []).length >= 10) return "kisisel_veri";
  if (/[\w.+-]+@[\w-]+\.[\w.]+/.test(t)) return "kisisel_veri";
  if (/(https?:\/\/|www\.|\.com\b|\.net\b|\.org\b|\.tr\b)/.test(t)) return "reklam";
  const words = t.split(/[^\p{L}]+/u).filter(Boolean);
  if (words.some((w) => SWEAR_EXACT.includes(w) || SWEAR_PREFIX.some((p) => w.startsWith(p)))) return "hakaret";
  return null;
}
