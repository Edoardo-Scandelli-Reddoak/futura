import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "Team — Futura",
  description: "Le persone di Futura: competenze, esperienza e passione per il costruire.",
};

const team = [
  { name: "Marco Riva", role: "Founder & CEO" },
  { name: "Elena Conti", role: "Direzione tecnica" },
  { name: "Luca Ferrari", role: "Sviluppo immobiliare" },
  { name: "Sara Bianchi", role: "Project management" },
  { name: "Davide Galli", role: "Responsabile cantieri" },
  { name: "Chiara Moretti", role: "Architettura & design" },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("");
}

export default function TeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="Team"
        title="Le persone dietro a ogni progetto"
        intro="Un gruppo affiatato di professionisti che condividono lo stesso obiettivo: costruire spazi di qualità, con metodo e passione."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-[1400px] px-6 pb-32 md:px-10">
          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={(i % 3) * 90}>
                <article className="group">
                  <div className="relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden bg-cream transition-colors duration-500 group-hover:bg-navy">
                    <span className="font-serif text-6xl text-stone/40 transition-colors duration-500 group-hover:text-cream/80">
                      {initials(member.name)}
                    </span>
                  </div>
                  <h2 className="mt-6 font-serif text-2xl text-ink">
                    {member.name}
                  </h2>
                  <p className="mt-1 text-sm uppercase tracking-[0.16em] text-stone">
                    {member.role}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-24 border-t border-ink/10 pt-12">
            <p className="max-w-2xl font-serif text-2xl leading-relaxed text-ink md:text-3xl">
              Vuoi entrare a far parte di Futura?
            </p>
            <a
              href="/contatti"
              className="mt-6 inline-flex items-center gap-3 bg-ink px-8 py-4 text-xs uppercase tracking-[0.2em] text-white transition-colors hover:bg-navy"
            >
              Lavora con noi
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
