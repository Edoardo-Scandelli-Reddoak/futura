import type { Metadata } from "next";
import Image from "next/image";
import fs from "node:fs";
import path from "node:path";
import Reveal from "../components/Reveal";
import ProjectsHero from "../components/sections/ProjectsHero";
import CTA from "../components/sections/CTA";

export const metadata: Metadata = {
  title: "Impegno sociale — Futura",
  description:
    "Futura per il sociale: sosteniamo lo sport, le associazioni e le iniziative che tengono viva la comunità del territorio in cui costruiamo.",
};

// Reads every image dropped into /public/impegno-sociale so new photos appear
// automatically, without touching the code.
function getGalleryImages(): string[] {
  const dir = path.join(process.cwd(), "public", "impegno-sociale");
  try {
    return fs
      .readdirSync(dir)
      .filter((f) => /\.(jpe?g|png|webp|avif)$/i.test(f))
      .sort()
      .map((f) => `/impegno-sociale/${f}`);
  } catch {
    return [];
  }
}

export default function ImpegnoSocialePage() {
  const images = getGalleryImages();

  return (
    <>
      <ProjectsHero
        image="/projects/bergamo-gaber/07.jpeg"
        eyebrow="Futura per il sociale"
        title="Impegno sociale"
      />

      {/* Manifesto */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1600px] px-6 pb-12 pt-24 md:px-10 md:pb-20 md:pt-36">
          <Reveal>
            <p className="font-serif text-xl leading-[1.25] text-ink md:text-[2rem] md:leading-[1.22]">
              Costruiamo dove viviamo. Per questo il nostro impegno non si ferma
              in cantiere: sosteniamo lo sport, le associazioni e le iniziative
              che tengono viva la comunità del territorio in cui operiamo. Perché
              crediamo che un&apos;impresa cresca davvero solo insieme al luogo
              che la accoglie.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <blockquote className="mt-14 max-w-3xl border-l-2 border-navy pl-6 font-serif text-xl leading-snug text-ink md:mt-20 md:text-2xl">
              «Il lavoro di squadra è l&apos;abilità di lavorare insieme verso una
              visione comune: dirigere ogni risultato individuale verso un
              obiettivo condiviso. È l&apos;entusiasmo che permette a persone
              comuni di ottenere risultati non comuni.»
              <cite className="mt-5 block text-sm not-italic uppercase tracking-[0.16em] text-stone">
                Gaetano Barletta
              </cite>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* Gallery — projects realised on the territory */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1600px] px-6 pb-32 md:px-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-end md:gap-16">
            <h2 className="font-serif text-4xl uppercase leading-[0.9] tracking-tight text-ink md:text-6xl lg:text-7xl">
              Progetti
              <br />
              in evidenza
            </h2>
            <p className="text-base leading-relaxed text-stone md:text-lg">
              Alcune delle opere che raccontano il nostro modo di stare sul
              territorio: spazi pensati per le persone e per le comunità che li
              vivono.
            </p>
          </div>

          {images.length > 0 ? (
            <div className="mt-12 grid grid-cols-2 gap-4 md:mt-16 md:grid-cols-3 md:gap-6">
              {images.map((src, i) => (
                <Reveal key={src} delay={(i % 3) * 100}>
                  <div className="group relative aspect-[4/3] w-full overflow-hidden bg-cream">
                    <Image
                      src={src}
                      alt={`Realizzazione Futura ${i + 1}`}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          ) : (
            <p className="mt-12 text-stone">Galleria in aggiornamento.</p>
          )}
        </div>
      </section>

      <CTA />
    </>
  );
}
