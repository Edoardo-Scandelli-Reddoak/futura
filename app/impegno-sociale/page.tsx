import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "../components/Reveal";
import ProjectsHero from "../components/sections/ProjectsHero";
import CTA from "../components/sections/CTA";
import SocialPhotos from "../components/sections/SocialPhotos";

export const metadata: Metadata = {
  title: "Impegno sociale — Futura",
  description:
    "Futura per il sociale: sosteniamo lo sport, le associazioni e le iniziative che tengono viva la comunità del nostro territorio.",
  openGraph: {
    title: "Impegno sociale — Futura",
    description:
      "Futura per il sociale: sosteniamo lo sport, le associazioni e le iniziative che tengono viva la comunità del nostro territorio.",
    type: "website",
  },
  twitter: {
    title: "Impegno sociale — Futura",
    description:
      "Futura per il sociale: sosteniamo lo sport, le associazioni e le iniziative che tengono viva la comunità del nostro territorio.",
  },
};

type Club = {
  name: string;
  sport: string;
  city: string;
  /** Logo ufficiale, ripreso dal sito della società. */
  logo?: { src: string; width: number; height: number };
  href?: string;
};

// Società che indicano Futura tra gli sponsor (verificato sui loro siti, nov 2026).
const clubs: Club[] = [
  {
    name: "Virtus Entella",
    sport: "Calcio",
    city: "Chiavari (GE)",
    logo: { src: "/impegno-sociale/loghi/entella.png", width: 307, height: 400 },
    href: "https://www.entella.it",
  },
  {
    name: "FBC Saronno 1910",
    sport: "Calcio",
    city: "Saronno (VA)",
    logo: { src: "/impegno-sociale/loghi/fbc-saronno.png", width: 228, height: 358 },
    href: "https://www.fbcsaronno1910.com",
  },
  {
    name: "Softball Baseball Saronno",
    sport: "Softball e baseball",
    city: "Saronno (VA)",
    logo: { src: "/impegno-sociale/loghi/softball-saronno.png", width: 253, height: 210 },
    href: "https://saronnosoftballbaseball.com",
  },
  {
    name: "Sporting Club Saronno",
    sport: "Tennis e polisportiva",
    city: "Saronno (VA)",
    logo: { src: "/impegno-sociale/loghi/sporting-saronno.png", width: 150, height: 47 },
    href: "https://www.sportingclubsaronno.it",
  },
  {
    name: "Pallavolo femminile Saronno",
    sport: "Pallavolo",
    city: "Saronno (VA)",
    logo: { src: "/impegno-sociale/loghi/pallavolo-saronno.png", width: 610, height: 242 },
  },
];

export default function ImpegnoSocialePage() {

  return (
    <>
      <ProjectsHero
        image="/site/impegno-hero.jpg"
        eyebrow="Futura per il sociale"
        title="Impegno sociale"
      />

      {/* Manifesto */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1600px] px-6 pb-12 pt-24 md:px-10 md:pb-20 md:pt-36">
          <Reveal>
            <p className="font-serif text-xl leading-[1.25] text-ink md:text-[2rem] md:leading-[1.22]">
              Costruiamo dove viviamo. Per questo il nostro impegno non si
              ferma in cantiere. Sosteniamo lo sport, le associazioni e le
              iniziative che tengono viva la comunità del nostro territorio.
              Crediamo infatti che un&apos;impresa cresca davvero solo insieme
              al luogo che la accoglie.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <blockquote className="mt-14 max-w-3xl border-l-2 border-navy pl-6 font-serif text-xl leading-snug text-ink md:mt-20 md:text-2xl">
              «Il lavoro di squadra è la capacità di lavorare insieme verso
              una visione comune, indirizzando ogni risultato individuale
              verso un obiettivo condiviso. È l&apos;energia che permette a
              persone comuni di ottenere risultati fuori dal comune.»
              <cite className="mt-5 block text-sm not-italic uppercase tracking-[0.16em] text-stone">
                Gaetano Barletta
              </cite>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* Le realtà che sosteniamo — the sports clubs Futura sponsors */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1600px] px-6 pb-32 md:px-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-end md:gap-16">
            <h2 className="font-serif text-4xl uppercase leading-[0.9] tracking-tight text-ink md:text-6xl lg:text-7xl">
              Le realtà
              <br />
              che sosteniamo
            </h2>
            <p className="text-base leading-relaxed text-stone md:text-lg">
              Le società sportive che accompagniamo, tra la Liguria e il
              Saronnese: squadre giovanili e prime squadre, dal calcio al
              softball, dal tennis alla pallavolo.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 md:mt-16 md:gap-6 lg:grid-cols-5">
            {clubs.map((club, i) => {
              const body = (
                <>
                  <div className="flex h-32 items-center justify-center bg-white p-6">
                    {club.logo ? (
                      <Image
                        src={club.logo.src}
                        alt={`Logo ${club.name}`}
                        width={club.logo.width}
                        height={club.logo.height}
                        className="max-h-full w-auto max-w-full object-contain"
                      />
                    ) : (
                      <span className="text-center font-serif text-2xl leading-tight text-ink/70">
                        {club.name}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="eyebrow text-stone">{club.sport}</p>
                    <h3 className="mt-3 font-serif text-2xl leading-tight text-ink">
                      {club.name}
                    </h3>
                    <p className="mt-2 text-sm text-stone">{club.city}</p>
                    {club.href && (
                      <span className="mt-auto whitespace-nowrap pt-6 text-xs uppercase tracking-[0.18em] text-ink transition-colors group-hover:text-navy">
                        Sito ufficiale →
                      </span>
                    )}
                  </div>
                </>
              );
              return (
                <Reveal key={club.name} delay={(i % 5) * 80} className="h-full">
                  {club.href ? (
                    <a
                      href={club.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-full flex-col border border-ink/12 bg-cream/40 transition-colors hover:border-navy"
                    >
                      {body}
                    </a>
                  ) : (
                    <div className="flex h-full flex-col border border-ink/12 bg-cream/40">
                      {body}
                    </div>
                  )}
                </Reveal>
              );
            })}
          </div>

          <SocialPhotos captions className="mt-6" />
        </div>
      </section>

      <CTA />
    </>
  );
}
