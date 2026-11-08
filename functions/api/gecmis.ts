// Site içeriği geçmişi: GET son kayıtlar, POST {sha} o sürüme geri döner (yeni bir kayıt olarak, eski kayıtlar silinmez).
import { authorized, json, type AuthEnv } from "../../server/auth";
import { CONTENT_PATH, history, readFile, writeFile, type GitEnv } from "../../server/github";
import { sameShape } from "../../server/shape";
import { log } from "../../server/log";

// Eski sürümde olmayan (sonradan eklenen) alanlar şimdiki halinden alınır.
function fillMissing(old: unknown, current: unknown): unknown {
  if (!old || !current || typeof old !== "object" || typeof current !== "object" || Array.isArray(old) || Array.isArray(current)) return old;
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(current)) out[k] = k in old ? fillMissing((old as Record<string, unknown>)[k], v) : v;
  return out;
}

export const onRequest: PagesFunction<AuthEnv & GitEnv> = async ({ request, env }) => {
  if (!(await authorized(request, env))) return json({ error: "Oturum süresi doldu. Tekrar giriş yapın." }, 401);
  try {
    if (request.method === "GET") return json({ versions: await history(env, CONTENT_PATH) });
    if (request.method === "POST") {
      const body = (await request.json().catch(() => ({}))) as { sha?: unknown };
      if (typeof body.sha !== "string" || !/^[0-9a-f]{40}$/.test(body.sha)) return json({ error: "Geçersiz sürüm." }, 400);
      const [old, current] = await Promise.all([readFile(env, CONTENT_PATH, body.sha), readFile(env, CONTENT_PATH)]);
      const restored = fillMissing(JSON.parse(old.text), JSON.parse(current.text));
      const err = sameShape(restored, JSON.parse(current.text));
      if (err) return json({ error: "Bu sürüm sitenin şimdiki yapısıyla uyumlu değil, geri alınamaz." }, 400);
      const result = await writeFile(env, CONTENT_PATH, new TextEncoder().encode(JSON.stringify(restored, null, 2) + "\n"), `Yönetim paneli: ${body.sha.slice(0, 7)} sürümüne geri alındı`, current.sha);
      if (!result.ok) return json({ error: "İçerik başka bir yerden değişmiş. Sayfayı yenileyip tekrar deneyin." }, 409);
      await log(env, request, "Site içeriği eski sürüme geri alındı", body.sha.slice(0, 7));
      return json({ ok: true });
    }
    return json({ error: "Desteklenmeyen istek." }, 405);
  } catch (e) {
    return json({ error: e instanceof Error ? e.message : "Beklenmeyen hata." }, 500);
  }
};
