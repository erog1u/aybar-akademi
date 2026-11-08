"use client";

import React, { useCallback, useEffect, useState } from "react";
import { BASE_PATH } from "@/config/site";

type Row = { id: number; name: string; role: string; rating: number; text: string; status: string; created_at: string };

const API = `${BASE_PATH}/api/yorum-yonetim`;
const STORE = "aybar-yorum-anahtar";

export default function ReviewAdminPage() {
  const [key, setKey] = useState("");
  const [input, setInput] = useState("");
  const [rows, setRows] = useState<Row[] | null>(null);
  const [error, setError] = useState("");

  const load = useCallback(async (k: string) => {
    setError("");
    const res = await fetch(API, { headers: { authorization: `Bearer ${k}` } }).catch(() => null);
    if (!res || !res.ok) {
      setError(res?.status === 401 ? "Anahtar hatalı." : "Liste alınamadı.");
      setRows(null);
      try { sessionStorage.removeItem(STORE); } catch {}
      return;
    }
    const data = await res.json();
    setRows(data.reviews);
    setKey(k);
    try { sessionStorage.setItem(STORE, k); } catch {}
  }, []);

  useEffect(() => {
    let saved = "";
    try { saved = sessionStorage.getItem(STORE) || ""; } catch {}
    if (saved) load(saved);
  }, [load]);

  const act = async (id: number, action: "approve" | "delete") => {
    if (action === "delete" && !window.confirm("Bu yorum kalıcı olarak silinsin mi?")) return;
    const res = await fetch(API, {
      method: "POST",
      headers: { authorization: `Bearer ${key}`, "content-type": "application/json" },
      body: JSON.stringify({ id, action }),
    }).catch(() => null);
    if (!res || !res.ok) return setError("İşlem yapılamadı.");
    load(key);
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 text-ink">
      <h1 className="text-2xl font-extrabold">Yorum Yönetimi</h1>
      {!rows ? (
        <form
          className="mt-6 flex gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            load(input.trim());
          }}
        >
          <input
            type="password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Yönetim anahtarı"
            aria-label="Yönetim anahtarı"
            className="min-h-12 flex-1 rounded-xl border border-cobalt-900/15 px-3"
          />
          <button className="min-h-12 rounded-xl bg-cobalt-700 px-5 font-bold text-white">Giriş</button>
        </form>
      ) : (
        <ul className="mt-6 space-y-3">
          {rows.length === 0 ? <li className="text-ink-muted">Yorum yok.</li> : null}
          {rows.map((r) => (
            <li key={r.id} className={`rounded-2xl border p-4 ${r.status === "pending" ? "border-crimson-600 bg-crimson-50" : "border-cobalt-900/10 bg-white"}`}>
              <p className="text-sm font-bold">
                {r.status === "pending" ? "Bekliyor" : "Yayında"} · {r.name} · {r.role === "veli" ? "Veli" : "Öğrenci"} · {r.rating}/5 · {r.created_at}
              </p>
              <p className="mt-2 whitespace-pre-wrap">{r.text}</p>
              <div className="mt-3 flex gap-2">
                {r.status === "pending" ? (
                  <button onClick={() => act(r.id, "approve")} className="min-h-11 rounded-xl bg-cobalt-700 px-4 text-sm font-bold text-white">
                    Onayla
                  </button>
                ) : null}
                <button onClick={() => act(r.id, "delete")} className="min-h-11 rounded-xl border border-crimson-600 px-4 text-sm font-bold text-crimson-700">
                  Sil
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {error ? <p role="alert" className="mt-4 font-semibold text-crimson-700">{error}</p> : null}
      <p className="mt-8 text-xs text-ink-muted">
        Olumsuz yorumlar yalnız olumsuz oldukları için silinmemelidir. Kişisel bilgi, hakaret, reklam veya başka bir kişiyi hedef alan yorumları silin.
      </p>
    </div>
  );
}
