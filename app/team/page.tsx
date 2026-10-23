import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../components/Reveal";
import ProjectsHero from "../components/sections/ProjectsHero";
import TeamValues from "../components/sections/TeamValues";
import Careers from "../components/sections/Careers";

export const metadata: Metadata = {
  title: "Team — Futura",
  description:
    "Le persone di Futura: ufficio tecnico interno, maestranze qualificate e trent'anni di esperienza al servizio del progetto.",
  openGraph: {
    title: "Team — Futura",
    description:
      "Le persone di Futura: ufficio tecnico interno, maestranze qualificate e trent'anni di esperienza al servizio del progetto.",
    type: "website",
  },
  twitter: {
    title: "Team — Futura",
    description:
      "Le persone di Futura: ufficio tecnico interno, maestranze qualificate e trent'anni di esperienza al servizio del progetto.",
  },
};

// Foto riprese dal vecchio sito (futurasrl.net/impegno-sociale).
// Ordine = griglia: stretta + larga, poi larga + stretta.
const socialImages: {
  src: string;
  alt: string;
  wide?: boolean;
  position?: string;
}[] = [
  { src: "/team/impegno-ledwall.jpg", alt: "Il marchio Futura sul ledwall dello stadio" },
  {
    src: "/team/impegno-saronno.jpg",
    alt: "Campagna «Avanti Saronno!» con la maglia sponsorizzata Futura",
    wide: true,
    position: "object-top",
  },
  {
    src: "/team/impegno-stadio.jpg",
    alt: "Tribuna dello stadio con lo striscione Futura",
    wide: true,
    position: "object-[50%_70%]",
  },
  { src: "/team/impegno-squadra.jpg", alt: "Squadra di calcio con le maglie Futura" },
];

export default function TeamPage() {
  return (
    <>
      <ProjectsHero
        image="/team/hero.jpg"
        eyebrow="Chi siamo"
        title="Team"
      />

      {/* Manifesto — same register as home, progetti & servizi */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1600px] px-6 pb-12 pt-24 md:px-10 md:pb-20 md:pt-36">
          <Reveal>
            <p className="font-serif text-xl leading-[1.25] text-ink md:text-[2rem] md:leading-[1.22]">
              Futura non è un elenco di servizi, ma un gruppo di persone.
              Tecnici, capicantiere e maestranze condividono un metodo di
              lavoro basato su precisione e responsabilità. La riuscita di
              ogni opera dipende dalle loro competenze e dalla loro
              esperienza.
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
                  Non partiamo dal disegno, ma da ciò che serve davvero: i
                  vincoli del lotto, il budget, i tempi e il risultato atteso
                  da chi promuove l&apos;intervento. Su questa base costruiamo
                  un rapporto solido, dalla fattibilità al collaudo.
                </p>
                <p>
                  Poi conta la precisione. Curiamo materiali, finiture e tempi
                  con rigore artigianale, in ogni fase del cantiere. E ci
                  assumiamo la responsabilità di ciò che realizziamo. Un
                  edificio costruito bene mantiene il suo valore ed evita
                  contenziosi a chi ce lo ha affidato.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* La nostra visione — full-bleed atmospheric section */}
      <section className="relative isolate flex min-h-[92vh] flex-col overflow-hidden bg-navy-deep text-cream">
        <Image
          src="/team/visione.jpg"
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
                Non esistono due cantieri uguali. Per questo lavoriamo su
                misura, con la stessa cura in ogni dettaglio. E le stesse
                persone seguono il progetto dall&apos;inizio alla fine.
              </p>
              <p className="mt-6 text-base leading-relaxed text-cream/85 md:text-lg">
                Ogni opera che consegniamo nasce da competenza, esperienza e
                senso di responsabilità. Il nostro obiettivo è portare a buon
                fine ogni operazione.
              </p>
              <Link
                href="/contatti"
                className="group mt-10 inline-flex items-center gap-3 border border-cream/50 px-9 py-5 text-xs uppercase tracking-[0.2em] text-cream transition-colors hover:border-cream hover:bg-cream hover:text-ink"
              >
                Contattateci
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <TeamValues />

      {/* Impegno sociale — Futura per il sociale */}
      <section className="bg-[#DDD8D0]">
        <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32">
          <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:gap-16">
            <Reveal>
              <div>
                <p className="eyebrow text-stone">Futura per il sociale</p>
                <h2 className="mt-6 max-w-md font-serif text-3xl leading-[1.1] text-ink md:text-4xl">
                  Il nostro impegno non si ferma in cantiere.
                </h2>
                <Link
                  href="/impegno-sociale"
                  className="group mt-10 inline-flex items-center gap-3 border border-ink/30 px-8 py-4 text-xs uppercase tracking-[0.2em] text-ink transition-colors hover:border-navy hover:bg-navy hover:text-paper"
                >
                  Scoprite il nostro impegno
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="space-y-8 md:mt-24">
                <p className="text-base leading-relaxed text-stone md:text-lg">
                  Costruiamo nei luoghi in cui viviamo e vogliamo restituire
                  qualcosa alle comunità che ci accolgono. Per questo
                  sosteniamo le realtà e le iniziative locali, a partire dallo
                  sport. Lo sport promuove ogni giorno i valori in cui
                  crediamo: impegno, rispetto e spirito di squadra.
                </p>
                <blockquote className="border-l-2 border-navy pl-6 font-serif text-xl leading-snug text-ink md:text-2xl">
                  «Il lavoro di squadra è la capacità di lavorare insieme
                  verso una visione comune, indirizzando ogni risultato
                  individuale verso un obiettivo condiviso. È l&apos;energia
                  che permette a persone comuni di ottenere risultati fuori
                  dal comune.»
                  <cite className="mt-5 block text-sm not-italic uppercase tracking-[0.16em] text-stone">
                    Gaetano Barletta
                  </cite>
                </blockquote>
              </div>
            </Reveal>
          </div>

          {/* Two staggered rows: narrow + wide, then wide + narrow */}
          <div className="mt-16 grid gap-4 md:mt-24 md:auto-rows-[clamp(240px,26vw,420px)] md:grid-cols-11 md:gap-6">
            {socialImages.map((img, i) => (
              <Reveal
                key={img.src}
                delay={(i % 2) * 120}
                className={img.wide ? "md:col-span-7" : "md:col-span-4"}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream md:aspect-auto md:h-full">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes={img.wide ? "(max-width: 768px) 100vw, 60vw" : "(max-width: 768px) 100vw, 35vw"}
                    className={`object-cover ${img.position ?? ""}`}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Careers />

    </>
  );
}
