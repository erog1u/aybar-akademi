// Ziyaret sayacı: yalnız gün + sayfa için toplam sayı tutulur; IP, çerez ya da kişisel veri saklanmaz.
import { json, type AuthEnv } from "../../server/auth";

export const onRequestPost: PagesFunction<AuthEnv> = async ({ request, env }) => {
  const path = (await request.text().catch(() => "")).trim().slice(0, 100);
  if (!/^\/[a-z0-9\-/]*$/.test(path) || path.startsWith("/yonetim") || path.startsWith("/api")) return json({ ok: false }, 400);
  const day = new Date().toISOString().slice(0, 10);
  await env.DB.prepare("INSERT INTO visits (day, path, n) VALUES (?, ?, 1) ON CONFLICT(day, path) DO UPDATE SET n = n + 1").bind(day, path).run();
  return json({ ok: true });
};
