import type { Metadata } from "next";
import Reveal from "../components/Reveal";
import ProjectsHero from "../components/sections/ProjectsHero";
import StickyProjects from "../components/sections/StickyProjects";

export const metadata: Metadata = {
  title: "Progetti — Futura",
  description:
    "I cantieri di Futura tra Milano, Bergamo e Varese: residenze, edifici commerciali e per la grande distribuzione, strutture ricettive e interventi industriali.",
  openGraph: {
    title: "Progetti — Futura",
    description:
      "I cantieri di Futura tra Milano, Bergamo e Varese: residenze, edifici commerciali e per la grande distribuzione, strutture ricettive e interventi industriali.",
    type: "website",
  },
  twitter: {
    title: "Progetti — Futura",
    description:
      "I cantieri di Futura tra Milano, Bergamo e Varese: residenze, edifici commerciali e per la grande distribuzione, strutture ricettive e interventi industriali.",
  },
};

export default function ProgettiPage() {
  return (
    <>
      <ProjectsHero
        image="/site/progetti-hero.jpg"
        eyebrow="Le nostre realizzazioni"
        title="Progetti"
      />

      {/* Manifesto — same register as the homepage intro */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1600px] px-6 pb-12 pt-24 md:px-10 md:pb-16 md:pt-36">
          <Reveal>
            <p className="font-serif text-xl leading-[1.25] text-ink md:text-[2rem] md:leading-[1.22]">
              Ogni cantiere ha i suoi vincoli. Il nostro lavoro si riconosce
              dal modo in cui li affrontiamo: lotti stretti in città,
              demolizioni e bonifiche, edifici storici da recuperare,
              supermercati da consegnare per una data di apertura, hotel da
              rinnovare senza fermarli. Costruiamo residenze, edifici
              commerciali, strutture ricettive e interventi industriali tra
              Milano, Bergamo e Varese. Committenti diversi, un unico modo di
              costruire.
            </p>
          </Reveal>
        </div>
      </section>

      <StickyProjects />
    </>
  );
}
