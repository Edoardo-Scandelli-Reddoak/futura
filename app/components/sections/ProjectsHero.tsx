"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type ProjectsHeroProps = {
  image: string;
  eyebrow: string;
  title: string;
};

export default function ProjectsHero({
  image,
  eyebrow,
  title,
}: ProjectsHeroProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  // Subtle parallax: the image drifts slower than the scroll.
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = sectionRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        // Only animate while the hero is in view.
        if (rect.bottom < 0 || rect.top > window.innerHeight) return;
        setOffset(-rect.top * 0.25);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-navy-deep"
    >
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translate3d(0, ${offset}px, 0) scale(1.12)` }}
      >
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/30" />

      <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-end px-6 pb-20 md:px-10 md:pb-24">
        <div className="flex items-end justify-between gap-8">
          <div>
            <p className="eyebrow text-white/70 opacity-0 [animation:fadeUp_1s_var(--ease-out-soft)_0.2s_forwards]">
              {eyebrow}
            </p>
            <h1 className="mt-5 font-serif text-6xl leading-[0.9] text-white opacity-0 [animation:fadeUp_1s_var(--ease-out-soft)_0.35s_forwards] sm:text-7xl lg:text-[8rem]">
              {title}
            </h1>
          </div>

          {/* Scroll indicator — right, aligned to the text baseline */}
          <div className="hidden shrink-0 flex-col items-center gap-3 pb-2 opacity-0 [animation:fadeUp_1s_var(--ease-out-soft)_0.7s_forwards] md:flex">
            <span className="text-[0.6rem] uppercase tracking-[0.3em] text-white/60">
              Scorri
            </span>
            <span className="block h-12 w-px overflow-hidden bg-white/25">
              <span className="block h-1/2 w-full animate-scrollHint bg-white" />
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scrollHint {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        .animate-scrollHint { animation: scrollHint 1.8s var(--ease-out-soft) infinite; }
        @media (prefers-reduced-motion: reduce) {
          .animate-scrollHint { animation: none; }
        }
      `}</style>
    </section>
  );
}
