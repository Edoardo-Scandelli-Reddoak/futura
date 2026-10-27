"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Step = {
  n: string;
  title: string;
  body: string;
  image: string;
};

const steps: Step[] = [
  {
    n: "01",
    title: "Ascolto e fattibilità",
    body: "Tutto comincia da un incontro. Che ci sia già un progetto, un'area o solo un'idea, facciamo un sopralluogo e verifichiamo la fattibilità tecnica, urbanistica ed economica. Preferiamo dire subito cosa non è sostenibile, piuttosto che presentare un preventivo troppo ottimista.",
    image: "/services/step-1.jpg",
  },
  {
    n: "02",
    title: "Progettazione su misura",
    body: "Il nostro ufficio tecnico lavora insieme ad architetti e ingegneri e porta nel progetto l'esperienza del cantiere. Proponiamo soluzioni costruttive efficienti, dettagli realizzabili e scelte compatibili con il budget. Se serve, seguiamo anche permessi e pratiche edilizie.",
    image: "/services/step-2.jpg",
  },
  {
    n: "03",
    title: "Preventivo e pianificazione",
    body: "Prima di iniziare i lavori mettiamo tutto per iscritto: computo metrico dettagliato, cronoprogramma e costi. È il committente a scegliere la formula: chiavi in mano oppure affidamento di singole opere.",
    image: "/services/step-3-sede.jpg",
  },
  {
    n: "04",
    title: "Cantiere e gestione dei lavori",
    body: "Un unico referente segue il cantiere dall'inizio alla fine. Lavoriamo con maestranze selezionate e fornitori qualificati, e controlliamo ogni giorno qualità, sicurezza, tempi e costi. Trent'anni di esperienza e le certificazioni SOA e ISO garantiscono che l'opera arrivi in fondo come previsto.",
    image: "/services/step-4.jpg",
  },
  {
    n: "05",
    title: "Consegna e assistenza nel tempo",
    body: "Consegniamo un'opera finita, collaudata e completa di tutta la documentazione. Ma il rapporto non finisce qui: restiamo disponibili per assistenza e manutenzione, perché l'edificio mantenga il suo valore. Anche per questo molti committenti tornano a lavorare con noi.",
    image: "/services/step-5.jpg",
  },
];

const EASE = "cubic-bezier(0.22,1,0.36,1)";

function useReveal<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px", ...options }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return { ref, visible };
}

function StepRow({ step, i }: { step: Step; i: number }) {
  const imageRight = i % 2 !== 0;
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="relative">
      <div className="grid items-center gap-8 py-10 md:grid-cols-2 md:gap-20 md:py-16">
        {/* Text — slides in from its own side */}
        <div
          className={
            imageRight
              ? "md:order-1 md:pr-10 md:text-right"
              : "md:order-2 md:pl-10"
          }
          style={{
            opacity: visible ? 1 : 0,
            transform: visible
              ? "none"
              : `translateX(${imageRight ? "-48px" : "48px"})`,
            transition: `opacity 0.9s ${EASE}, transform 0.9s ${EASE}`,
          }}
        >
          <span
            className="block font-serif text-6xl leading-none text-ink/15 md:text-7xl"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(30px)",
              transition: `opacity 0.9s ${EASE} 0.15s, transform 0.9s ${EASE} 0.15s`,
            }}
          >
            {step.n}
          </span>
          <h3 className="mt-5 font-serif text-3xl leading-[1.05] text-ink md:text-4xl">
            {step.title}
          </h3>
          <p
            className={`mt-5 max-w-md text-base leading-relaxed text-stone ${
              imageRight ? "md:ml-auto" : ""
            }`}
          >
            {step.body}
          </p>
        </div>

        {/* Image — scales down while a curtain wipes away */}
        <div className={imageRight ? "md:order-2" : "md:order-1"}>
          <div className="group relative aspect-[4/3] w-full overflow-hidden bg-cream">
            <div
              className="absolute inset-0"
              style={{
                transform: visible ? "scale(1)" : "scale(1.14)",
                transition: `transform 1.5s ${EASE}`,
              }}
            >
              <Image
                src={step.image}
                alt={step.title}
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
              />
            </div>
            <span
              aria-hidden
              className="absolute inset-0 bg-paper"
              style={{
                transform: visible ? "scaleX(0)" : "scaleX(1)",
                transformOrigin: imageRight ? "right" : "left",
                transition: `transform 1s ${EASE} 0.1s`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Thread node — pops in */}
      <span
        className="absolute left-1/2 top-1/2 hidden h-3.5 w-3.5 rounded-full bg-navy ring-4 ring-paper md:block"
        style={{
          transform: `translate(-50%,-50%) scale(${visible ? 1 : 0})`,
          transition: `transform 0.6s ${EASE} 0.35s`,
        }}
      />
    </div>
  );
}

export default function ServicesTimeline() {
  const { ref, visible } = useReveal<HTMLDivElement>({ threshold: 0.04 });

  return (
    // Clip the slide-in offsets: on phones they would widen the page.
    <section className="overflow-x-clip bg-paper">
      <div className="mx-auto max-w-[1600px] px-6 pb-24 pt-4 md:px-10 md:pb-32">
        <div ref={ref} className="relative">
          {/* Vertical thread (desktop) — draws from the top */}
          <span
            className="absolute left-1/2 top-0 hidden h-full w-px origin-top bg-ink/12 md:block"
            style={{
              transform: `translateX(-50%) scaleY(${visible ? 1 : 0})`,
              transition: `transform 1.6s ${EASE}`,
            }}
          />

          {steps.map((step, i) => (
            <StepRow key={step.n} step={step} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
