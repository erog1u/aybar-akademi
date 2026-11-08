// İsteğe bağlı e-posta bildirimi: NOTIFY_HOOK_URL ayarlıysa (Google Apps Script) kuruma kısa bir e-posta gider.
export interface NotifyEnv {
  NOTIFY_HOOK_URL?: string;
  NOTIFY_HOOK_SECRET?: string;
}

export function notify(env: NotifyEnv, waitUntil: (p: Promise<unknown>) => void, subject: string, body: string) {
  if (!env.NOTIFY_HOOK_URL) return;
  waitUntil(
    fetch(env.NOTIFY_HOOK_URL, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ secret: env.NOTIFY_HOOK_SECRET, subject, body }),
    }).catch(() => {}), // kayıt D1'de durduğu için bildirim hatası veri kaybettirmez
  );
}
