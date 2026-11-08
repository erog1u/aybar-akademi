// Yönetim işlem kaydı: giriş, kayıt, geri alma, yorum ve talep işlemleri. 1 yıldan eski satırlar silinir.
import { ipHash, type AuthEnv } from "./auth";

export async function log(env: AuthEnv, req: Request, action: string, detail = "") {
  await env.DB.batch([
    env.DB.prepare("DELETE FROM admin_log WHERE at < datetime('now', '-365 days')"),
    env.DB.prepare("INSERT INTO admin_log (at, action, detail, ip_hash) VALUES (datetime('now'), ?, ?, ?)")
      .bind(action, detail.slice(0, 300), (await ipHash(req, "kayit")).slice(0, 8)),
  ]);
}
