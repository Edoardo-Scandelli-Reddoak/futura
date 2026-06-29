"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Straight (un-rotated) scattered images. `speed` drives the scroll parallax.
const scattered = [
  { src: "/projects/bergamo-gaber/05.jpeg", top: "4%", left: "4%", w: 300, h: 200, speed: 30 },
  { src: "/projects/saronno-dante/03.jpeg", top: "5%", right: "4%", w: 300, h: 195, speed: -36 },
  { src: "/projects/nembro/06.webp", top: "36%", left: "1%", w: 290, h: 195, speed: -22 },
  { src: "/projects/nembro/05.webp", top: "35%", right: "1%", w: 300, h: 200, speed: 40 },
  { src: "/projects/solaro/03.jpeg", bottom: "5%", left: "5%", w: 290, h: 195, speed: 26 },
  { src: "/projects/nembro/07.webp", bottom: "5%", right: "5%", w: 300, h: 195, speed: -32 },
];

const shadow = "shadow-[0_22px_50px_-24px_rgba(20,20,20,0.45)]";

const LINES = ["Lo spazio reale", "della tua vita"];
const TOTAL = LINES.reduce((a, l) => a + l.length, 0);

export default function Values() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);
  const imgRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [started, setStarted] = useState(false);
  const [typed, setTyped] = useState(0);

  const imagesIn = typed >= TOTAL;

  // Trigger when the section enters the viewport.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setStarted(true),
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Typewriter: reveal the heading character by character, then the images.
  useEffect(() => {
    if (!started || typed >= TOTAL) return;
    const id = setTimeout(() => setTyped((t) => t + 1), 55);
    return () => clearTimeout(id);
  }, [started, typed]);

  // Scroll parallax (straight images drift at different speeds).
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const section = sectionRef.current;
    if (!section) return;
    let ticking = false;
    const apply = () => {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = (vh / 2 - (rect.top + rect.height / 2)) / vh;
      imgRefs.current.forEach((node, i) => {
        if (node)
          node.style.transform = `translate3d(0, ${(p * scattered[i].speed).toFixed(1)}px, 0)`;
      });
      if (headingRef.current)
        headingRef.current.style.transform = `translate3d(0, ${(p * -7).toFixed(1)}px, 0)`;
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(apply);
      }
    };
    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", apply);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", apply);
    };
  }, []);

  // Running character index across the two heading lines.
  let charIndex = 0;

  return (
    <section id="values" ref={sectionRef} className="overflow-hidden bg-paper">
      <div className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 md:py-32">
        {/* Desktop: typed headline + images appearing afterwards */}
        <div className="relative hidden min-h-[720px] items-center justify-center lg:min-h-[780px] md:flex">
          {scattered.map((img, i) => (
            <div
              key={i}
              ref={(el) => {
                imgRefs.current[i] = el;
              }}
              className="absolute will-change-transform"
              style={{
                top: img.top,
                bottom: img.bottom,
                left: img.left,
                right: img.right,
              }}
            >
              <div
                style={{
                  opacity: imagesIn ? 1 : 0,
                  transform: imagesIn
                    ? "translateY(0) scale(1)"
                    : "translateY(45px) scale(0.8)",
                  transition:
                    "opacity 850ms cubic-bezier(0.22,1,0.36,1), transform 850ms cubic-bezier(0.22,1,0.36,1)",
                  transitionDelay: imagesIn ? `${i * 150}ms` : "0ms",
                }}
              >
                <div
                  className={`relative overflow-hidden ${shadow}`}
                  style={{ width: img.w, height: img.h }}
                >
                  <Image src={img.src} alt="" fill sizes="320px" className="object-cover" />
                </div>
              </div>
            </div>
          ))}

          <div ref={headingRef} className="relative z-10 max-w-3xl will-change-transform">
            <div className="text-center">
              <span
                className="mx-auto mb-6 block w-px origin-top bg-stone/40 transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ height: 48, transform: started ? "scaleY(1)" : "scaleY(0)" }}
              />
              <p
                className="text-[0.72rem] font-medium uppercase tracking-[0.08em] text-ink underline underline-offset-[6px] transition-opacity duration-700 [transition-delay:150ms]"
                style={{ opacity: started ? 1 : 0 }}
              >
                Diamo valore alla tua casa
              </p>
              <h2
                aria-label={LINES.join(" ")}
                className="mt-6 font-serif text-6xl leading-[1.0] text-ink lg:text-7xl xl:text-[5.75rem]"
              >
                {LINES.map((line, li) => (
                  <span key={li} className="block" aria-hidden>
                    {line.split("").map((ch, ci) => {
                      const idx = charIndex++;
                      return (
                        <span
                          key={ci}
                          style={{
                            opacity: typed > idx ? 1 : 0,
                            transition: "opacity 80ms linear",
                          }}
                        >
                          {ch}
                        </span>
                      );
                    })}
                  </span>
                ))}
              </h2>
              <p
                className="mx-auto mt-8 max-w-md text-base leading-snug text-stone transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{
                  opacity: imagesIn ? 1 : 0,
                  transform: imagesIn ? "translateY(0)" : "translateY(14px)",
                }}
              >
                Progettiamo case in cui la vita di ogni giorno diventa più bella:
                luce, comfort e dettagli pensati per accompagnare le persone nel
                tempo.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile: typed headline + image grid */}
        <div className="md:hidden">
          <div className="text-center">
            <span
              className="mx-auto mb-5 block w-px origin-top bg-stone/40 transition-transform duration-700"
              style={{ height: 40, transform: started ? "scaleY(1)" : "scaleY(0)" }}
            />
            <p
              className="text-[0.72rem] font-medium uppercase tracking-[0.08em] text-ink underline underline-offset-[6px] transition-opacity duration-700"
              style={{ opacity: started ? 1 : 0 }}
            >
              Diamo valore alla tua casa
            </p>
            <h2
              aria-label={LINES.join(" ")}
              className="mt-5 font-serif text-5xl leading-[1.02] text-ink"
            >
              {(() => {
                let mi = 0;
                return LINES.map((line, li) => (
                  <span key={li} className="block" aria-hidden>
                    {line.split("").map((ch, ci) => {
                      const idx = mi++;
                      return (
                        <span
                          key={ci}
                          style={{ opacity: typed > idx ? 1 : 0, transition: "opacity 80ms linear" }}
                        >
                          {ch}
                        </span>
                      );
                    })}
                  </span>
                ));
              })()}
            </h2>
            <p
              className="mx-auto mt-6 max-w-sm text-base leading-snug text-stone transition-opacity duration-700"
              style={{ opacity: imagesIn ? 1 : 0 }}
            >
              Progettiamo case in cui la vita di ogni giorno diventa più bella.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3">
            {scattered.slice(0, 4).map((img, i) => (
              <div
                key={i}
                className={`relative aspect-[4/3] overflow-hidden ${shadow}`}
                style={{
                  opacity: imagesIn ? 1 : 0,
                  transform: imagesIn ? "translateY(0) scale(1)" : "translateY(28px) scale(0.9)",
                  transition:
                    "opacity 700ms cubic-bezier(0.22,1,0.36,1), transform 700ms cubic-bezier(0.22,1,0.36,1)",
                  transitionDelay: imagesIn ? `${i * 120}ms` : "0ms",
                }}
              >
                <Image src={img.src} alt="" fill sizes="50vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
