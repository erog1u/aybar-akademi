// Panelden gelen içerik mevcut yapıyla aynı biçimde olmalı; yoksa site derlenemez.
export function sameShape(next: unknown, current: unknown, path = "kök"): string | null {
  if (typeof current === "string") return typeof next === "string" && next.length <= 5000 ? null : `${path}: metin olmalı`;
  if (typeof current === "boolean") return typeof next === "boolean" || next === undefined ? null : `${path}: evet/hayır olmalı`;
  if (Array.isArray(current)) {
    if (!Array.isArray(next) || next.length > 200) return `${path}: liste olmalı`;
    if (current.length === 0) return null;
    for (let i = 0; i < next.length; i++) {
      const err = sameShape(next[i], current[Math.min(i, current.length - 1)], `${path}[${i + 1}]`);
      if (err) return err;
    }
    return null;
  }
  if (current && typeof current === "object") {
    if (!next || typeof next !== "object" || Array.isArray(next)) return `${path}: bölüm olmalı`;
    for (const key of Object.keys(next)) if (!(key in current)) return `${path}.${key}: bilinmeyen alan`;
    for (const [key, value] of Object.entries(current)) {
      const n = (next as Record<string, unknown>)[key];
      if (n === undefined && typeof value === "boolean") continue;
      if (n === undefined && typeof value === "string" && key !== "src") continue; // isteğe bağlı metin
      const err = sameShape(n, value, `${path}.${key}`);
      if (err) return err;
    }
    return null;
  }
  return next === current ? null : `${path}: değiştirilemez`;
}
