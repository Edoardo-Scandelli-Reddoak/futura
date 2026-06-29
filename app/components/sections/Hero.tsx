"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);

  // Scale the tagline so it spans exactly the same width as "Futura".
  useEffect(() => {
    const title = titleRef.current;
    const sub = subRef.current;
    if (!title || !sub) return;

    const fit = () => {
      sub.style.fontSize = "";
      const target = title.getBoundingClientRect().width;
      const natural = sub.getBoundingClientRect().width;
      if (natural > 0 && target > 0) {
        const base = parseFloat(getComputedStyle(sub).fontSize);
        sub.style.fontSize = `${(base * target) / natural}px`;
      }
    };

    // Re-fit whenever the title's width changes (font load, resize, breakpoints).
    const ro = new ResizeObserver(fit);
    ro.observe(title);
    if (typeof document !== "undefined" && document.fonts?.ready) {
      document.fonts.ready.then(fit);
    }
    requestAnimationFrame(() => requestAnimationFrame(fit));
    return () => ro.disconnect();
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-navy-deep">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/video/hero-poster.jpg"
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

      {/* Light overlay — darker only at the bottom for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-black/10" />

      {/* Content — minimal, bottom-left */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-end px-6 pb-16 md:px-10 md:pb-20">
        <h1
          ref={titleRef}
          className="inline-block w-fit font-serif text-7xl leading-[0.88] text-white opacity-0 [animation:fadeUp_1s_var(--ease-out-soft)_0.25s_forwards] sm:text-8xl lg:text-[8rem]"
        >
          Futura
        </h1>
        <div className="mt-5 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p
            ref={subRef}
            className="inline-block w-fit whitespace-nowrap text-lg text-white/85 opacity-0 [animation:fadeUp_1s_var(--ease-out-soft)_0.45s_forwards]"
          >
            Costruiamo gli spazi della vita reale.
          </p>
          <a
            href="/progetti"
            className="group inline-flex w-fit shrink-0 items-center gap-3 border border-white/70 bg-white/5 px-8 py-4 text-xs uppercase tracking-[0.2em] text-white opacity-0 backdrop-blur-sm [animation:fadeUp_1s_var(--ease-out-soft)_0.6s_forwards] transition-colors hover:bg-white/15"
          >
            Scopri i progetti
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
