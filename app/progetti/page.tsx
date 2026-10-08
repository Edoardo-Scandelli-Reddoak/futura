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
              Ogni cantiere presenta vincoli specifici, ed è proprio nel modo di
              affrontarli che si riconosce il nostro lavoro: lotti ristretti in
              contesto urbano, demolizioni e bonifiche, edifici storici da
              recuperare nel rispetto del loro carattere originario. Nuove
              costruzioni residenziali e interventi a funzione mista tra Milano,
              Bergamo e Varese: committenti diversi, un unico modo di
              costruire.
            </p>
          </Reveal>
        </div>
      </section>

      <StickyProjects />
    </>
  );
}
