import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../components/Reveal";
import ProjectsHero from "../components/sections/ProjectsHero";
import TeamValues from "../components/sections/TeamValues";

export const metadata: Metadata = {
  title: "Team — Futura",
  description:
    "Le persone e la visione di Futura: un'unica squadra che costruisce su misura, con cura artigianale del dettaglio e radici nel territorio.",
};

export default function TeamPage() {
  return (
    <>
      <ProjectsHero
        image="/team/squadra-giovane.jpg"
        eyebrow="Chi siamo"
        title="Team"
      />

      {/* Manifesto — same register as home, progetti & servizi */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1600px] px-6 pb-12 pt-24 md:px-10 md:pb-20 md:pt-36">
          <Reveal>
            <p className="font-serif text-xl leading-[1.25] text-ink md:text-[2rem] md:leading-[1.22]">
              Futura non è un catalogo di servizi, ma un gruppo di persone.
              Progettisti, ingegneri e maestranze che condividono un modo di
              lavorare fatto di ascolto, precisione e responsabilità. È da qui —
              dalle mani e dalle idee di chi la compone — che nasce ogni cosa che
              costruiamo.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Il nostro modo di lavorare — text-only editorial block */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1600px] px-6 pb-24 md:px-10 md:pb-36">
          <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:gap-16">
            <Reveal>
              <p className="eyebrow text-[0.82rem]! text-stone">
                Il nostro modo di lavorare
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="space-y-6 text-lg leading-relaxed text-stone md:text-xl">
                <p>
                  Non partiamo mai dal disegno, ma dall&apos;ascolto: capire
                  l&apos;esigenza di chi abiterà uno spazio è il primo gesto di
                  ogni progetto. Da lì nasce una relazione che ci accompagna per
                  tutto il percorso, dall&apos;idea alla consegna.
                </p>
                <p>
                  La precisione fa il resto. Curiamo materiali, finiture e tempi
                  con rigore artigianale, in ogni fase del cantiere, assumendoci
                  la responsabilità di ciò che costruiamo — perché un edificio ben
                  fatto è un impegno che dura nel tempo.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* La nostra visione — full-bleed atmospheric section */}
      <section className="relative isolate flex min-h-[92vh] flex-col overflow-hidden bg-navy-deep text-cream">
        <Image
          src="/projects/nembro/05.webp"
          alt=""
          fill
          sizes="100vw"
          className="-z-10 scale-105 object-cover blur-[3px] brightness-[0.5]"
        />
        <div className="absolute inset-0 -z-10 bg-navy-deep/40" />

        <div className="mx-auto flex w-full max-w-[1600px] flex-1 flex-col justify-between px-6 py-20 md:px-10 md:py-28">
          {/* Big heading — top left */}
          <Reveal>
            <p className="eyebrow text-cream/60">La nostra visione</p>
            <h2 className="mt-6 font-serif text-5xl uppercase leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
              Costruire
              <br />
              su misura
            </h2>
          </Reveal>

          {/* Body + CTA — bottom right */}
          <Reveal delay={120} className="mt-16 flex justify-end md:mt-0">
            <div className="max-w-xl">
              <p className="text-base leading-relaxed text-cream/85 md:text-lg">
                Crediamo che costruire sia un gesto umano prima che tecnico. Per
                questo lavoriamo su misura, con la stessa cura in ogni dettaglio
                e con le stesse persone al tuo fianco, dall&apos;inizio alla fine.
              </p>
              <p className="mt-6 text-base leading-relaxed text-cream/85 md:text-lg">
                Ogni spazio che consegniamo nasce da ascolto, competenza e
                passione: perché un cliente soddisfatto è la realizzazione più
                bella a cui possiamo aspirare.
              </p>
              <Link
                href="/contatti"
                className="group mt-10 inline-flex items-center gap-3 border border-cream/50 px-9 py-5 text-xs uppercase tracking-[0.2em] text-cream transition-colors hover:border-cream hover:bg-cream hover:text-ink"
              >
                Contattaci
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <TeamValues />

      {/* Lavora con noi — closing section */}
      <section className="relative overflow-hidden bg-ink text-white">
        <Image
          src="/team/lavora-cantiere.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="relative z-10 mx-auto flex max-w-[1600px] flex-col items-start gap-10 px-6 py-28 md:flex-row md:items-end md:justify-between md:px-10 md:py-40">
          <Reveal>
            <p className="eyebrow text-white/60">Lavora con noi</p>
            <h2 className="mt-6 max-w-2xl font-serif text-4xl leading-tight md:text-6xl">
              Cerchiamo persone che condividano la nostra cura.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <Link
              href="/contatti"
              className="group inline-flex shrink-0 items-center gap-3 bg-white px-9 py-5 text-xs uppercase tracking-[0.2em] text-ink transition-colors hover:bg-cream"
            >
              Invia la tua candidatura
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
