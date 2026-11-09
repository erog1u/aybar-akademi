"use client";

import { useEffect, useRef } from "react";
import { assetPath } from "@/config/site";

// 10 Kasım anma kutusu: her yıl 10 Kasım'da (İstanbul saati) ana sayfa açılınca bir kez gösterilir.
// Önizleme: adres sonuna ?10kasim eklenir.
const KEY = "aybar-10-kasim";

function isTenNovember() {
  const parts = new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Istanbul", month: "2-digit", day: "2-digit" }).format(new Date());
  return parts === "11-10";
}

export default function CommemorationDialog() {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const preview = new URLSearchParams(window.location.search).has("10kasim");
    if (!preview && !isTenNovember()) return;
    try {
      if (!preview && sessionStorage.getItem(KEY)) return;
      sessionStorage.setItem(KEY, "1");
    } catch {}
    ref.current?.showModal();
  }, []);

  const close = () => ref.current?.close();

  return (
    <dialog
      ref={ref}
      aria-labelledby="ataturk-anma-baslik"
      onClick={(e) => e.target === e.currentTarget && close()}
      className="m-auto w-[min(92vw,440px)] overflow-hidden rounded-2xl bg-white p-0 shadow-2xl backdrop:bg-black/70"
    >
      <img
        src={assetPath("/images/10-kasim.jpg")}
        alt="Mustafa Kemal Atatürk portresi. Üzerinde: Bizler emanetini nesillerden nesillere aktarıp, sonsuza kadar korumaya and içtik. Sen rahat uyu."
        width={880}
        height={947}
        className="block h-auto w-full"
      />
      <div className="px-5 py-4 text-center">
        <p id="ataturk-anma-baslik" className="text-base font-extrabold text-ink">
          Ulu Önder Mustafa Kemal Atatürk&apos;ü saygı ve özlemle anıyoruz.
        </p>
        <button
          type="button"
          onClick={close}
          autoFocus
          className="mt-4 min-h-11 w-full rounded-xl bg-cobalt-700 font-bold text-white"
        >
          Kapat
        </button>
      </div>
    </dialog>
  );
}
