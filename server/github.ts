// Panel kayıtları GitHub'a commit olarak gider; main'e push GitHub Actions ile siteyi yeniden yayınlar.
export interface GitEnv {
  GITHUB_TOKEN?: string;
}

export const REPO = "erog1u/aybar-akademi";
export const CONTENT_PATH = "src/data/site-content.json";

async function gh(env: GitEnv, path: string, init: RequestInit = {}) {
  if (!env.GITHUB_TOKEN) throw new Error("GITHUB_TOKEN ayarlanmamış.");
  const res = await fetch(`https://api.github.com/repos/${REPO}${path}`, {
    ...init,
    headers: {
      authorization: `Bearer ${env.GITHUB_TOKEN}`,
      accept: "application/vnd.github+json",
      "user-agent": "aybar-yonetim-paneli",
      "content-type": "application/json",
    },
  });
  return res;
}

const toBase64 = (bytes: Uint8Array) => {
  let s = "";
  for (let i = 0; i < bytes.length; i += 0x8000) s += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  return btoa(s);
};

const decode = (b64: string) => {
  const bin = atob(b64.replace(/\n/g, ""));
  return new TextDecoder().decode(Uint8Array.from(bin, (c) => c.charCodeAt(0)));
};

export async function readFile(env: GitEnv, path: string, ref = "main"): Promise<{ text: string; sha: string }> {
  const res = await gh(env, `/contents/${path}?ref=${encodeURIComponent(ref)}`);
  if (!res.ok) throw new Error(`GitHub okuma hatası ${res.status}`);
  const data = (await res.json()) as { content: string; sha: string };
  return { text: decode(data.content), sha: data.sha };
}

// sha verilirse dosya o sürümden beri değişmemiş olmalı (GitHub 409 döner).
export async function writeFile(env: GitEnv, path: string, bytes: Uint8Array, message: string, sha?: string) {
  const res = await gh(env, `/contents/${path}`, {
    method: "PUT",
    body: JSON.stringify({ message, content: toBase64(bytes), branch: "main", ...(sha ? { sha } : {}) }),
  });
  if (res.status === 409 || res.status === 422) return { ok: false as const, conflict: true };
  if (!res.ok) throw new Error(`GitHub yazma hatası ${res.status}`);
  return { ok: true as const };
}

export async function lastDeploy(env: GitEnv) {
  const res = await gh(env, "/actions/runs?branch=main&per_page=1");
  if (!res.ok) return null;
  const run = ((await res.json()) as { workflow_runs: { status: string; conclusion: string | null; created_at: string }[] }).workflow_runs[0];
  return run ? { status: run.status, conclusion: run.conclusion, createdAt: run.created_at } : null;
}

export async function history(env: GitEnv, path: string, count = 15) {
  const res = await gh(env, `/commits?path=${encodeURIComponent(path)}&sha=main&per_page=${count}`);
  if (!res.ok) throw new Error(`GitHub geçmiş hatası ${res.status}`);
  const rows = (await res.json()) as { sha: string; commit: { message: string; committer: { date: string } } }[];
  return rows.map((r) => ({ sha: r.sha, date: r.commit.committer.date, message: r.commit.message.split("\n")[0] }));
}
