"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

type Cell =
  | { kind: "intro" }
  | {
      kind: "text";
      title: string;
      body: string;
      align: "start" | "center" | "end";
    }
  | {
      kind: "image";
      src: string;
      w: number;
      h: string;
      align: "start" | "center" | "end";
      caption: string;
    };

// The horizontal strip, read left → right as the page scrolls.
const cells: Cell[] = [
  { kind: "intro" },
  {
    kind: "image",
    src: "/projects/saronno-dante/01.jpeg",
    w: 360,
    h: "50vh",
    align: "end",
    caption: "Via Dante · Saronno",
  },
  {
    kind: "image",
    src: "/projects/nembro/06.webp",
    w: 720,
    h: "56vh",
    align: "start",
    caption: "Tower Baioni · Nembro",
  },
  {
    kind: "text",
    title: "Persone, prima che edifici",
    body: "Crediamo in un'edilizia che mette al centro chi la vive: spazi luminosi, materiali onesti e un disegno che invecchia con grazia. Ogni scelta progettuale nasce da una domanda semplice — come si vivrà davvero questo spazio?",
    align: "center",
  },
  {
    kind: "image",
    src: "/projects/solaro/01.jpeg",
    w: 300,
    h: "38vh",
    align: "center",
    caption: "Sede · Solaro",
  },
  {
    kind: "text",
    title: "Dall'area al progetto",
    body: "Selezioniamo e valorizziamo le aree con una visione di lungo periodo, trasformando il potenziale di un luogo in un progetto concreto. Studiamo il contesto, i volumi e la luce prima ancora di disegnare la prima linea.",
    align: "start",
  },
  {
    kind: "image",
    src: "/projects/bergamo-gaber/01.jpg",
    w: 430,
    h: "54vh",
    align: "end",
    caption: "Piazza G. Gaber · Bergamo",
  },
  {
    kind: "image",
    src: "/projects/saronno-ferrari/03.jpeg",
    w: 540,
    h: "44vh",
    align: "start",
    caption: "Via G. Ferrari · Saronno",
  },
  {
    kind: "text",
    title: "Qualità in ogni fase",
    body: "Gestiamo il cantiere come general contractor, con maestranze e fornitori selezionati. Tempi, costi e dettagli sotto controllo: è così che trasformiamo un progetto in una casa destinata a durare nel tempo.",
    align: "center",
  },
  {
    kind: "image",
    src: "/projects/nembro/08.webp",
    w: 320,
    h: "50vh",
    align: "end",
    caption: "Tower Baioni · Nembro",
  },
  {
    kind: "image",
    src: "/projects/nembro/07.webp",
    w: 360,
    h: "52vh",
    align: "center",
    caption: "Tower Baioni · Nembro",
  },
  {
    kind: "text",
    title: "Costruire per durare",
    body: "Pensiamo ogni edificio come un lascito: qualcosa che resterà nel tempo e nel paesaggio. Per questo scegliamo soluzioni solide, sostenibili e capaci di mantenere valore negli anni.",
    align: "center",
  },
];

const justify = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
};

export default function HorizontalShowcase() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let scrollable = 0;

    const measure = () => {
      scrollable = Math.max(track.scrollWidth - window.innerWidth, 0);
      section.style.height = `${window.innerHeight + scrollable}px`;
      update();
    };

    const update = () => {
      const offset = Math.min(
        Math.max(window.scrollY - section.offsetTop, 0),
        scrollable
      );
      track.style.transform = `translate3d(${-offset}px, 0, 0)`;
    };

    if (reduce) {
      section.style.height = "";
      track.style.transform = "";
      return;
    }

    measure();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", measure);
    const t = setTimeout(measure, 600);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", measure);
      clearTimeout(t);
    };
  }, []);

  return (
    <section ref={sectionRef} id="showcase" className="relative bg-paper">
      <div className="sticky top-0 flex h-[100svh] items-stretch overflow-hidden">
        <div
          ref={trackRef}
          className="flex h-full items-stretch gap-12 px-6 pb-[12vh] pt-[20vh] will-change-transform md:gap-24 md:px-10 md:pb-[14vh] md:pt-[18vh]"
        >
          {cells.map((cell, i) => {
            if (cell.kind === "intro") {
              return (
                <div
                  key={i}
                  className="flex h-full w-[80vw] shrink-0 flex-col justify-center md:w-[36rem]"
                >
                  <p className="eyebrow mb-6 text-stone">Cosa facciamo</p>
                  <p className="text-lg leading-relaxed text-ink md:text-xl">
                    Operiamo su tutta la filiera dell&apos;edilizia:
                    dall&apos;acquisizione delle aree allo sviluppo immobiliare,
                    dalla progettazione alla costruzione.
                  </p>
                  <p className="mt-5 text-base leading-relaxed text-stone">
                    Un approccio integrato che ci permette di controllare la
                    qualità in ogni fase e di consegnare spazi pensati per
                    durare nel tempo.
                  </p>
                  <Link
                    href="/"
                    className="mt-8 inline-flex w-fit items-center gap-3 bg-navy px-7 py-4 text-xs uppercase tracking-[0.2em] text-white transition-colors hover:bg-navy-deep"
                  >
                    I nostri servizi
                  </Link>
                </div>
              );
            }

            if (cell.kind === "text") {
              return (
                <div
                  key={i}
                  className={`flex h-full w-[80vw] shrink-0 flex-col ${justify[cell.align]} md:w-[28rem]`}
                >
                  <h3 className="font-serif text-3xl leading-tight text-ink md:text-[2.5rem] md:leading-[1.15]">
                    {cell.title}
                  </h3>
                  <p className="mt-6 max-w-md text-base leading-relaxed text-stone">
                    {cell.body}
                  </p>
                </div>
              );
            }

            return (
              <div
                key={i}
                className={`flex h-full shrink-0 flex-col ${justify[cell.align]}`}
                style={{ width: `${cell.w}px`, maxWidth: "85vw" }}
              >
                <div>
                  <div
                    className="relative w-full overflow-hidden bg-sand"
                    style={{ height: cell.h }}
                  >
                    <Image
                      src={cell.src}
                      alt={cell.caption}
                      fill
                      sizes={`${cell.w}px`}
                      priority={i <= 2}
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-4 text-[0.7rem] uppercase tracking-[0.18em] text-stone">
                    {cell.caption}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Trailing spacer so the last item isn't flush to the edge */}
          <div className="h-full w-6 shrink-0 md:w-16" aria-hidden />
        </div>
      </div>
    </section>
  );
}
