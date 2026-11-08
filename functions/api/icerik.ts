// GET: güncel site içeriği + son yayın durumu. PUT: içeriği kaydeder (GitHub'a commit, site 2-3 dk içinde yenilenir).
import { authorized, json, type AuthEnv } from "../../server/auth";
import { CONTENT_PATH, lastDeploy, readFile, writeFile, type GitEnv } from "../../server/github";
import { sameShape } from "../../server/shape";

type Env = AuthEnv & GitEnv;

export const onRequest: PagesFunction<Env> = async ({ request, env }) => {
  if (!(await authorized(request, env))) return json({ error: "Oturum süresi doldu. Tekrar giriş yapın." }, 401);
  try {
    if (request.method === "GET") {
      const [file, deploy] = await Promise.all([readFile(env, CONTENT_PATH), lastDeploy(env)]);
      return json({ content: JSON.parse(file.text), sha: file.sha, deploy });
    }
    if (request.method === "PUT") {
      const body = (await request.json().catch(() => null)) as { content?: unknown; sha?: unknown } | null;
      if (!body || typeof body.sha !== "string") return json({ error: "Geçersiz istek." }, 400);
      const current = JSON.parse((await readFile(env, CONTENT_PATH)).text);
      const err = sameShape(body.content, current);
      if (err) return json({ error: `Kaydedilemedi: ${err}` }, 400);
      const text = JSON.stringify(body.content, null, 2) + "\n";
      if (text.length > 600_000) return json({ error: "İçerik çok büyük." }, 400);
      const result = await writeFile(env, CONTENT_PATH, new TextEncoder().encode(text), "Yönetim paneli: site içeriği güncellendi", body.sha);
      if (!result.ok) return json({ error: "İçerik başka bir yerden değişmiş. Sayfayı yenileyip tekrar deneyin." }, 409);
      return json({ ok: true });
    }
    return json({ error: "Desteklenmeyen istek." }, 405);
  } catch (e) {
    return json({ error: e instanceof Error ? e.message : "Beklenmeyen hata." }, 502);
  }
};
