import type { Metadata } from "next";
import Reveal from "../components/Reveal";
import ProjectsHero from "../components/sections/ProjectsHero";
import StickyProjects from "../components/sections/StickyProjects";

export const metadata: Metadata = {
  title: "Progetti — Futura",
  description:
    "I cantieri realizzati da Futura tra Milano, Bergamo e Varese: nuove costruzioni residenziali, recuperi e interventi a funzione mista.",
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
              Ogni cantiere ha i suoi vincoli, e sono quelli a raccontare come
              lavoriamo: lotti stretti in città, demolizioni e bonifiche,
              palazzi storici da recuperare senza tradirne il volto. Nuove
              costruzioni residenziali e interventi a funzione mista tra Milano,
              Bergamo e Varese — committenti diversi, uno stesso modo di
              costruire.
            </p>
          </Reveal>
        </div>
      </section>

      <StickyProjects />
    </>
  );
}
