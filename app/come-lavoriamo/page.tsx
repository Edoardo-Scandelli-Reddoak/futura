import type { Metadata } from "next";
import Reveal from "../components/Reveal";
import ProjectsHero from "../components/sections/ProjectsHero";
import ServicesTimeline from "../components/sections/ServicesTimeline";
import CTA from "../components/sections/CTA";

export const metadata: Metadata = {
  title: "Come lavoriamo — Futura",
  description:
    "Dall'idea iniziale alle chiavi in mano: Futura ti accompagna in un unico percorso, con un solo interlocutore, trent'anni di cantieri e un ufficio tecnico interno.",
};

const pillars = [
  {
    title: "Un unico interlocutore",
    body: "Dalla prima idea alle chiavi in mano, una sola regia. Progettazione, cantiere e consegna sotto un unico responsabile: nessun rimpallo, sempre le stesse persone al tuo fianco.",
  },
  {
    title: "Trent'anni di cantieri",
    body: "Un'esperienza costruita in tre decenni, tra edilizia residenziale, industriale e commerciale. Certificazioni SOA, ISO 9001 e 14001 e Rating di Legalità: solidità e trasparenza, verificate.",
  },
  {
    title: "Una squadra, non una filiera",
    body: "Ufficio tecnico interno, maestranze qualificate e fornitori selezionati che lavorano come un solo organismo. È così che teniamo insieme qualità, tempi e costi.",
  },
];

export default function ServiziPage() {
  return (
    <>
      <ProjectsHero
        image="/services/hero.jpg"
        eyebrow="Dall'idea alla consegna"
        title="Come lavoriamo"
      />

      {/* Manifesto — same register as home & progetti */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1600px] px-6 pb-12 pt-24 md:px-10 md:pb-20 md:pt-36">
          <Reveal>
            <p className="font-serif text-xl leading-[1.25] text-ink md:text-[2rem] md:leading-[1.22]">
              Costruire significa prendere decisioni che durano anni. Per questo
              non ti lasciamo mai solo: dalla prima idea alle chiavi in mano,
              Futura è un unico interlocutore che progetta, costruisce e ti
              accompagna passo dopo passo. Trent&apos;anni di cantieri, un ufficio
              tecnico interno e maestranze selezionate al servizio di una sola
              cosa — il tuo progetto, fatto bene.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Section heading */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1600px] px-6 pt-8 md:px-10 md:pt-8">
          <h2 className="font-serif text-4xl uppercase leading-[0.9] tracking-tight text-ink md:text-6xl lg:text-7xl">
            Dall&apos;idea
            <br />
            alla consegna
          </h2>
        </div>
      </section>

      <ServicesTimeline />

      {/* La differenza Futura */}
      <section className="bg-navy-deep text-cream">
        <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32">
          <Reveal>
            <p className="eyebrow text-cream/50">La differenza Futura</p>
            <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-[1.15] md:text-5xl">
              Ciò che ci rende diversi non è cosa costruiamo, ma come.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-px overflow-hidden bg-cream/15 md:mt-20 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <div className="flex h-full flex-col bg-navy-deep p-10 md:p-12">
                  <span className="font-serif text-2xl text-cream/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-8 font-serif text-2xl text-cream">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-cream/70">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
