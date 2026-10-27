"use client";

import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  // Browsers only autoplay muted video: the soundtrack starts on request.
  const [muted, setMuted] = useState(true);
  // Our own "tap for sound" notice: shown until the sound is first switched on.
  const [soundHint, setSoundHint] = useState(true);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !muted;
    if (video.paused) video.play().catch(() => {});
    setMuted(!muted);
    setSoundHint(false);
  };

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
        ref={videoRef}
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

      {soundHint && (
        <button
          type="button"
          onClick={toggleSound}
          className="absolute left-1/2 top-28 z-20 flex -translate-x-1/2 items-center gap-2.5 whitespace-nowrap rounded-full border border-white/30 bg-black/30 px-5 py-2.5 text-[0.7rem] uppercase tracking-[0.18em] text-white/90 opacity-0 backdrop-blur-md [animation:fadeIn_0.8s_ease-out_1.2s_forwards] transition-colors hover:bg-black/45 md:top-32"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" />
            <path d="M15.5 9a4.2 4.2 0 0 1 0 6M18 6.5a7.8 7.8 0 0 1 0 11" />
          </svg>
          Clicca per attivare l&apos;audio
        </button>
      )}

      {/* Content — minimal, bottom-left */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-end px-6 pb-16 md:px-10 md:pb-20">
        <h1
          ref={titleRef}
          className="inline-block w-fit font-serif text-7xl leading-[0.88] text-white opacity-0 [animation:fadeUp_1s_var(--ease-out-soft)_0.25s_forwards] sm:text-8xl lg:text-[8rem]"
        >
          Futura
        </h1>
        <div className="mt-5 flex flex-col gap-6 md:-mt-6 md:flex-row md:items-end md:justify-between">
          <p
            ref={subRef}
            className="inline-block w-fit whitespace-nowrap text-lg leading-none text-white/85 opacity-0 [animation:fadeUp_1s_var(--ease-out-soft)_0.45s_forwards]"
          >
            Costruiamo da trent&apos;anni, al servizio del progetto.
          </p>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggleSound}
              aria-label={muted ? "Attiva l'audio del video" : "Disattiva l'audio del video"}
              aria-pressed={!muted}
              className="flex h-[50px] w-[50px] shrink-0 items-center justify-center border border-white/70 bg-white/5 text-white opacity-0 backdrop-blur-sm [animation:fadeUp_1s_var(--ease-out-soft)_0.6s_forwards] transition-colors hover:bg-white/15"
            >
              <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" />
                {muted ? (
                  <path d="M16 9.5l5 5M21 9.5l-5 5" />
                ) : (
                  <path d="M15.5 9a4.2 4.2 0 0 1 0 6M18 6.5a7.8 7.8 0 0 1 0 11" />
                )}
              </svg>
            </button>
            <a
              href="/progetti"
              className="group inline-flex w-fit shrink-0 items-center gap-3 border border-white/70 bg-white/5 px-8 py-4 text-xs uppercase tracking-[0.2em] text-white opacity-0 backdrop-blur-sm [animation:fadeUp_1s_var(--ease-out-soft)_0.6s_forwards] transition-colors hover:bg-white/15"
            >
              Scoprite i progetti
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
