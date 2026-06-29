import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import { projects } from "../lib/projects";

export const metadata: Metadata = {
  title: "Progetti — Futura",
  description:
    "Le realizzazioni residenziali e direzionali di Futura in Lombardia.",
};

export default function ProgettiPage() {
  return (
    <>
      <PageHeader
        eyebrow="Progetti"
        title="Spazi che raccontano il nostro modo di costruire"
        intro="Una selezione delle realizzazioni Futura tra Milano, Bergamo e Varese: residenze, spazi direzionali e interventi a funzione mista."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-[1400px] px-6 pb-32 md:px-10">
          <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
            {projects.map((project, i) => (
              <Reveal
                key={project.slug}
                delay={(i % 2) * 100}
                className={i % 2 === 1 ? "md:mt-20" : ""}
              >
                <article className="group">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream">
                    <Image
                      src={project.cover}
                      alt={`${project.title}, ${project.city}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 45vw"
                      className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 bg-paper/90 px-3 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-ink">
                      {project.status}
                    </span>
                  </div>
                  <div className="mt-6 flex items-baseline justify-between gap-4">
                    <h2 className="font-serif text-2xl text-ink md:text-3xl">
                      {project.title}
                    </h2>
                    <span className="text-xs uppercase tracking-[0.16em] text-stone">
                      {project.year}
                    </span>
                  </div>
                  <p className="mt-2 text-sm uppercase tracking-[0.14em] text-stone">
                    {project.city} ({project.province}) · {project.category}
                  </p>
                  <p className="mt-4 max-w-lg text-sm leading-relaxed text-stone/90">
                    {project.excerpt}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
