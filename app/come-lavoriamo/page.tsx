import type { Metadata } from "next";
import Reveal from "../components/Reveal";
import ProjectsHero from "../components/sections/ProjectsHero";
import ServicesTimeline from "../components/sections/ServicesTimeline";
import CTA from "../components/sections/CTA";

export const metadata: Metadata = {
  title: "Come lavoriamo — Futura",
  description:
    "Trent'anni di cantieri e un ufficio tecnico interno: un unico interlocutore dalla fattibilità alla consegna.",
  openGraph: {
    title: "Come lavoriamo — Futura",
    description:
      "Trent'anni di cantieri e un ufficio tecnico interno: un unico interlocutore dalla fattibilità alla consegna.",
    type: "website",
  },
  twitter: {
    title: "Come lavoriamo — Futura",
    description:
      "Trent'anni di cantieri e un ufficio tecnico interno: un unico interlocutore dalla fattibilità alla consegna.",
  },
};

const pillars = [
  {
    title: "Un unico interlocutore",
    body: "Dalla fattibilità alla consegna, la regia è una sola: progettazione, cantiere e collaudo fanno capo a un unico responsabile. Il committente non deve coordinare più soggetti. E non deve cercare il responsabile quando qualcosa non va.",
  },
  {
    title: "Trent'anni di esperienza",
    body: "In tre decenni abbiamo lavorato nell'edilizia residenziale, commerciale, direzionale e industriale. Le certificazioni SOA, ISO 9001 e ISO 14001 e il Rating di Legalità permettono a chiunque di verificare la nostra solidità e la nostra trasparenza.",
  },
  {
    title: "Una squadra, non una catena di fornitori",
    body: "Ufficio tecnico, maestranze e fornitori lavorano come un'unica struttura. Così possiamo controllare insieme qualità, tempi e costi: i tre fattori da cui dipende il successo di un'operazione.",
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
              Costruire significa prendere decisioni che durano anni. Quasi
              tutte vengono messe alla prova in cantiere. Per questo chiediamo
              di essere coinvolti già in fase di progetto: correggere un
              errore sulla carta costa molto meno che correggerlo in opera.
              Mettiamo a disposizione trent&apos;anni di esperienza, un
              ufficio tecnico interno e maestranze selezionate. E garantiamo a
              chi ci affida un&apos;opera un unico interlocutore, dalla
              fattibilità alla consegna.
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
              Ciò che ci distingue non è cosa costruiamo, ma come lo costruiamo.
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
