"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "../Reveal";

const stats = [
  { target: 20, suffix: "+", label: "Anni di esperienza" },
  { target: 40, suffix: "", label: "Progetti realizzati" },
  { target: 120, suffix: "k", label: "Metri quadri costruiti" },
  { target: 5, suffix: "", label: "Cantieri attivi" },
];

export default function NavyBand() {
  const ref = useRef<HTMLElement | null>(null);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1700;
          const t0 = performance.now();
          const ease = (t: number) => 1 - Math.pow(1 - t, 3);
          const tick = (now: number) => {
            const p = Math.min((now - t0) / duration, 1);
            const e2 = ease(p);
            setCounts(stats.map((s) => Math.round(s.target * e2)));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.35 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="metodo" ref={ref} className="bg-[#DDD8D0] text-ink">
      <div className="mx-auto max-w-[1600px] px-6 py-24 text-center md:px-10 md:py-32">
        <Reveal>
          <h2 className="mx-auto max-w-3xl font-serif text-3xl leading-[1.2] md:text-5xl md:leading-[1.18]">
            Non costruiamo soltanto edifici. Diamo forma a luoghi destinati a
            durare, curando ogni dettaglio dal progetto alla consegna.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl leading-relaxed text-stone">
            Controllo diretto della filiera, materiali selezionati e un dialogo
            costante con committenti e territorio. È questo che ci permette di
            garantire qualità e trasparenza in ogni fase.
          </p>
        </Reveal>

        <div className="mt-16 flex flex-wrap items-start justify-center gap-x-12 gap-y-10 md:mt-20 md:gap-x-20">
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-5xl tabular-nums text-ink md:text-6xl">
                {counts[i]}
                {stat.suffix}
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.18em] text-stone">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
