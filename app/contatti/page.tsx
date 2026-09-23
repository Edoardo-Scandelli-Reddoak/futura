import type { Metadata } from "next";
import Reveal from "../components/Reveal";
import ProjectsHero from "../components/sections/ProjectsHero";
import ContactForm from "../components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contatti — Futura",
  description:
    "Parliamo della prossima operazione. Scriveteci o venite a trovarci nella sede di Futura a Solaro (MI), Via Como 51.",
};

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Via+Como+51+Solaro+MI";

export default function ContattiPage() {
  return (
    <>
      <ProjectsHero
        image="/projects/solaro/01.jpeg"
        eyebrow="Contatti"
        title="Contatti"
      />

      {/* Manifesto — same register as the other pages */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1600px] px-6 pb-12 pt-24 md:px-10 md:pb-20 md:pt-36">
          <Reveal>
            <p className="font-serif text-xl leading-[1.25] text-ink md:text-[2rem] md:leading-[1.22]">
              Ogni opera comincia con una conversazione. Un progetto da
              realizzare, un&apos;area da valorizzare, un preventivo da
              confrontare: guardiamo i numeri e i vincoli e diciamo subito se e
              come si fa.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Section heading + info/form */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <h2 className="font-serif text-4xl uppercase leading-[0.9] tracking-tight text-ink md:text-6xl lg:text-7xl">
            Parliamo
            <br />
            del progetto
          </h2>
        </div>

        <div className="mx-auto max-w-[1600px] px-6 pb-28 pt-16 md:px-10 md:pb-36 md:pt-20">
          <div className="grid gap-16 md:grid-cols-[1fr_1.1fr] md:gap-24">
            {/* Info */}
            <Reveal>
              <div className="space-y-10">
                <div>
                  <p className="eyebrow flex items-center gap-2.5 text-stone">
                    <span className="inline-block h-2.5 w-2.5 bg-[#DDD8D0]" />
                    Sede
                  </p>
                  <p className="mt-4 font-serif text-2xl leading-snug text-ink">
                    Via Como, 51
                    <br />
                    20033 Solaro (MI)
                  </p>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link mt-4 inline-block text-sm uppercase tracking-[0.16em] text-navy"
                  >
                    Apri su Google Maps →
                  </a>
                </div>
                <div>
                  <p className="eyebrow flex items-center gap-2.5 text-stone">
                    <span className="inline-block h-2.5 w-2.5 bg-[#DDD8D0]" />
                    Email
                  </p>
                  <a
                    href="mailto:info@futurasrl.net"
                    className="nav-link mt-4 inline-block text-lg text-ink"
                  >
                    info@futurasrl.net
                  </a>
                </div>
                <div>
                  <p className="eyebrow flex items-center gap-2.5 text-stone">
                    <span className="inline-block h-2.5 w-2.5 bg-[#DDD8D0]" />
                    Telefono
                  </p>
                  <a
                    href="tel:+390225062368"
                    className="nav-link mt-4 inline-block text-lg text-ink"
                  >
                    +39 02 250 62368
                  </a>
                </div>
                <div>
                  <p className="eyebrow flex items-center gap-2.5 text-stone">
                    <span className="inline-block h-2.5 w-2.5 bg-[#DDD8D0]" />
                    Orari
                  </p>
                  <p className="mt-4 text-sm text-stone">
                    Lun – Ven · 9:00 – 18:00
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Form */}
            <Reveal delay={120}>
              <div className="bg-[#DDD8D0] p-8 md:p-12">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

    </>
  );
}
