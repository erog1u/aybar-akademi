// Görsel yükleme: panel görseli tarayıcıda küçültüp JPEG/WEBP/PNG olarak gönderir; public/images/yuklenen/ altına commit edilir.
import { authorized, json, type AuthEnv } from "../../server/auth";
import { writeFile, type GitEnv } from "../../server/github";

const TYPES: Record<string, string> = { "image/jpeg": "jpg", "image/webp": "webp", "image/png": "png" };
const MAX_BYTES = 3 * 1024 * 1024;

export const onRequestPost: PagesFunction<AuthEnv & GitEnv> = async ({ request, env }) => {
  if (!(await authorized(request, env))) return json({ error: "Oturum süresi doldu. Tekrar giriş yapın." }, 401);
  const type = request.headers.get("content-type") || "";
  const ext = TYPES[type];
  if (!ext) return json({ error: "Yalnız JPEG, WEBP veya PNG yüklenebilir." }, 400);
  const bytes = new Uint8Array(await request.arrayBuffer());
  if (!bytes.length || bytes.length > MAX_BYTES) return json({ error: "Görsel en fazla 3 MB olabilir." }, 400);
  const name = `${new Date().toISOString().slice(0, 10)}-${crypto.randomUUID().slice(0, 8)}.${ext}`;
  try {
    const result = await writeFile(env, `public/images/yuklenen/${name}`, bytes, `Yönetim paneli: görsel yüklendi (${name})`);
    if (!result.ok) return json({ error: "Görsel kaydedilemedi, tekrar deneyin." }, 409);
    return json({ src: `/images/yuklenen/${name}` });
  } catch (e) {
    return json({ error: e instanceof Error ? e.message : "Beklenmeyen hata." }, 500);
  }
};
