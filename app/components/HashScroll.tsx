"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Porta alla sezione indicata dall'ancora (/#certificazioni, /team#lavora-con-noi)
 * quando si arriva da un'altra pagina. Lo scroll nativo scatta prima che la pagina
 * abbia l'altezza finale (la striscia orizzontale in home la allunga di migliaia di
 * pixel), quindi si riallinea a intervalli finché l'utente non scorre da solo.
 */
export default function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;

    const go = () =>
      document
        .getElementById(id)
        ?.scrollIntoView({ block: "start", behavior: "instant" });

    const timers = [0, 150, 700].map((ms) => window.setTimeout(go, ms));
    const stop = () => timers.forEach(clearTimeout);
    const events = ["wheel", "touchstart", "keydown"] as const;
    events.forEach((e) => window.addEventListener(e, stop, { once: true, passive: true }));

    return () => {
      stop();
      events.forEach((e) => window.removeEventListener(e, stop));
    };
  }, [pathname]);

  return null;
}
