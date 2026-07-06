import type { Metadata } from "next";
import Reveal from "../components/Reveal";
import ProjectsHero from "../components/sections/ProjectsHero";
import StickyProjects from "../components/sections/StickyProjects";

export const metadata: Metadata = {
  title: "Progetti — Futura",
  description:
    "Le realizzazioni residenziali, direzionali e a funzione mista di Futura tra Milano, Bergamo e Varese.",
};

export default function ProgettiPage() {
  return (
    <>
      <ProjectsHero
        image="/projects/nembro/06.webp"
        eyebrow="Le nostre realizzazioni"
        title="Progetti"
      />

      {/* Manifesto — same register as the homepage intro */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1600px] px-6 pb-12 pt-24 md:px-10 md:pb-16 md:pt-36">
          <Reveal>
            <p className="font-serif text-xl leading-[1.25] text-ink md:text-[2rem] md:leading-[1.22]">
              Ogni progetto Futura nasce da un luogo e dalle persone che lo
              vivranno. Residenze, spazi direzionali e interventi a funzione
              mista tra Milano, Bergamo e Varese: storie diverse, una stessa
              cura per la qualità, la durata e la bellezza di ciò che
              costruiamo.
            </p>
          </Reveal>
        </div>
      </section>

      <StickyProjects />
    </>
  );
}
