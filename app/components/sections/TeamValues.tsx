"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "../Reveal";

type Value = {
  n: string;
  title: string;
  short: string;
  body: string;
  image: string;
};

const values: Value[] = [
  {
    n: "01",
    title: "Le persone, prima di tutto",
    short: "Persone",
    body: "Dietro ogni progetto ci sono persone: chi lo abiterà e chi lo costruisce. Mettiamo l'ascolto al centro del nostro metodo, perché un buon edificio nasce prima di tutto da una buona relazione.",
    image: "/team/value-persone.jpg",
  },
  {
    n: "02",
    title: "Cura artigianale del dettaglio",
    short: "Dettaglio",
    body: "Trattiamo ogni realizzazione come un pezzo unico. Studiamo materiali, finiture e giunzioni con l'attenzione di un artigiano: è nella precisione dei particolari che si misura la qualità del nostro lavoro.",
    image: "/team/value-cura.jpg",
  },
  {
    n: "03",
    title: "Un'unica squadra",
    short: "Squadra",
    body: "Architetti, ingegneri, maestranze e project manager lavorano come un solo organismo. Nessun compartimento stagno: le competenze si intrecciano attorno a un obiettivo condiviso, dall'idea alla consegna.",
    image: "/team/value-squadra.jpg",
  },
  {
    n: "04",
    title: "Radici nel territorio",
    short: "Territorio",
    body: "Costruiamo dove viviamo. Conosciamo i luoghi, le persone e il paesaggio in cui operiamo, e ci sentiamo responsabili di ciò che lasciamo: spazi pensati per durare e per migliorare il contesto che li accoglie.",
    image: "/team/value-territorio.jpg",
  },
];

export default function TeamValues() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-[1600px] px-6 pb-24 pt-16 md:px-10 md:pb-32 md:pt-20">
        <Reveal>
          <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:gap-16">
            <div>
              <p className="eyebrow text-stone">Ciò in cui crediamo</p>
              <h2 className="mt-6 max-w-md font-serif text-3xl leading-[1.1] text-ink md:text-4xl">
                Quattro convinzioni che guidano ogni nostra scelta.
              </h2>
            </div>
            <div className="space-y-6 text-base leading-relaxed text-stone md:mt-24 md:text-lg">
              <p>
                Non sono valori appesi a una parete: sono il modo in cui
                prendiamo ogni decisione, dal primo sopralluogo alla consegna
                delle chiavi. Guidano chi progetta, chi coordina il cantiere e
                chi posa l&apos;ultimo dettaglio.
              </p>
              <p>
                Metterle in pratica ogni giorno è ciò che ci rende una squadra e
                non un semplice fornitore: persone diverse, un solo modo di
                intendere il lavoro fatto bene.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Desktop: expanding panels */}
        <Reveal delay={120}>
          <div className="mt-14 hidden h-[70vh] gap-2 md:flex">
            {values.map((value, i) => {
              const isActive = i === active;
              return (
                <button
                  key={value.n}
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  aria-label={value.title}
                  style={{ flexGrow: isActive ? 5 : 1 }}
                  className="group relative h-full min-w-0 basis-0 overflow-hidden bg-cream text-left transition-all duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] focus:outline-none"
                >
                  <Image
                    src={value.image}
                    alt={value.title}
                    fill
                    sizes="(max-width: 1600px) 60vw, 960px"
                    className={`object-cover transition-[filter] duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isActive ? "" : "grayscale"
                    }`}
                  />
                  <div
                    className={`absolute inset-0 transition-colors duration-700 ${
                      isActive
                        ? "bg-gradient-to-t from-navy-deep/85 via-navy-deep/20 to-transparent"
                        : "bg-navy-deep/55"
                    }`}
                  />

                  {/* Number — top */}
                  <span className="absolute left-6 top-6 font-serif text-2xl leading-none text-cream/70">
                    {value.n}
                  </span>

                  {/* Collapsed vertical label */}
                  <span
                    className={`absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap font-serif text-lg uppercase tracking-[0.12em] text-cream transition-opacity duration-300 [writing-mode:vertical-rl] rotate-180 ${
                      isActive ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    {value.short}
                  </span>

                  {/* Expanded content */}
                  <div
                    className={`absolute inset-x-0 bottom-0 p-8 transition-all duration-500 lg:p-10 ${
                      isActive
                        ? "translate-y-0 opacity-100 delay-200"
                        : "pointer-events-none translate-y-4 opacity-0"
                    }`}
                  >
                    <h3 className="max-w-md font-serif text-3xl leading-[1.05] text-cream lg:text-4xl">
                      {value.title}
                    </h3>
                    <p className="mt-5 max-w-md text-sm leading-relaxed text-cream/80">
                      {value.body}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Mobile: stacked cards */}
        <div className="mt-12 flex flex-col gap-4 md:hidden">
          {values.map((value) => (
            <Reveal key={value.n}>
              <div className="group relative h-[70vh] overflow-hidden bg-cream">
                <Image
                  src={value.image}
                  alt={value.title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/25 to-transparent" />
                <span className="absolute left-6 top-6 font-serif text-2xl leading-none text-cream/70">
                  {value.n}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-serif text-3xl leading-[1.05] text-cream">
                    {value.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-cream/80">
                    {value.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
