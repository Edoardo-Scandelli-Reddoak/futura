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
      city: string;
    };

// The horizontal strip, read left → right as the page scrolls.
const cells: Cell[] = [
  { kind: "intro" },
  {
    kind: "image",
    src: "/site/ponte-pietra-01.jpg",
    w: 720,
    h: "56vh",
    align: "start",
    caption: "Via Ponte Pietra",
    city: "Bergamo",
  },
  {
    kind: "text",
    title: "L'esperienza prima del disegno",
    body: "Un progetto funziona quando chi lo realizza conosce bene le tecniche costruttive. Per questo portiamo l'esperienza del cantiere già in fase di disegno. Proponiamo dettagli realizzabili, materiali facili da reperire e soluzioni che evitano varianti in corso d'opera.",
    align: "center",
  },
  {
    kind: "image",
    src: "/projects/solaro/01.jpeg",
    w: 300,
    h: "38vh",
    align: "center",
    caption: "La nostra sede",
    city: "Solaro",
  },
  {
    kind: "text",
    title: "Dall'area al progetto",
    body: "Acquisiamo e valorizziamo aree anche in proprio. Questa attività ci ha insegnato a valutare un'operazione come la valuta chi la promuove: costi, tempi e margini. Applichiamo lo stesso metodo ai progetti dei nostri committenti.",
    align: "start",
  },
  {
    kind: "image",
    src: "/projects/bergamo-gaber/01.jpg",
    w: 430,
    h: "54vh",
    align: "end",
    caption: "Tower Santa Caterina",
    city: "Bergamo",
  },
  {
    kind: "image",
    src: "/projects/saronno-ferrari/03.jpeg",
    w: 540,
    h: "44vh",
    align: "start",
    caption: "Via G. Ferrari",
    city: "Saronno",
  },
  {
    kind: "text",
    title: "Il cantiere sotto controllo",
    body: "Gestiamo il cantiere come general contractor, con maestranze e fornitori selezionati. Teniamo sotto controllo tempi, costi e qualità dell'esecuzione. È in questa fase che si decide il risultato economico dell'operazione.",
    align: "center",
  },
  {
    kind: "image",
    src: "/projects/nembro/05.jpg",
    w: 320,
    h: "50vh",
    align: "end",
    caption: "Via Stazione",
    city: "Nembro",
  },
  {
    kind: "image",
    src: "/site/milano-sbodio-01.jpg",
    w: 360,
    h: "52vh",
    align: "center",
    caption: "Via Sbodio",
    city: "Milano",
  },
  {
    kind: "text",
    title: "Costruire per durare",
    body: "Un edificio costruito a regola d'arte mantiene il suo valore. Costa meno da gestire e riduce il rischio di contenziosi. Per questo scegliamo soluzioni durevoli anche dove non si vedono.",
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
                    Seguiamo ogni fase dell&apos;operazione,
                    dall&apos;acquisizione dell&apos;area alla consegna
                    dell&apos;edificio.
                  </p>
                  <p className="mt-5 text-base leading-relaxed text-stone">
                    Così affrontiamo il progetto con l&apos;occhio di chi
                    dovrà costruirlo: soluzioni più efficienti, meno
                    imprevisti in cantiere e un edificio che dura nel tempo.
                  </p>
                  <Link
                    href="/come-lavoriamo"
                    className="mt-8 inline-flex w-fit items-center gap-3 bg-navy px-7 py-4 text-xs uppercase tracking-[0.2em] text-white transition-colors hover:bg-navy-deep"
                  >
                    Come lavoriamo
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
                      alt={`${cell.caption}, ${cell.city}`}
                      fill
                      sizes={`${cell.w}px`}
                      priority={i <= 2}
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-4 text-[0.7rem] uppercase tracking-[0.18em] text-ink">
                    {cell.caption}
                  </p>
                  <p className="mt-1.5 text-[0.7rem] uppercase tracking-[0.18em] text-stone/70">
                    {cell.city}
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
