import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "Contatti — Futura",
  description: "Contatta Futura: sede a Solaro (MI), Via Como 51.",
};

export default function ContattiPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contatti"
        title="Parliamo del tuo prossimo progetto"
        intro="Scrivici o vieni a trovarci nella nostra sede di Solaro. Saremo felici di ascoltare la tua idea e capire come possiamo realizzarla insieme."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-[1400px] px-6 pb-32 md:px-10">
          <div className="grid gap-16 md:grid-cols-[1fr_1.1fr] md:gap-24">
            {/* Info */}
            <Reveal>
              <div className="space-y-10">
                <div>
                  <p className="eyebrow text-stone">Sede</p>
                  <p className="mt-4 font-serif text-2xl text-ink">
                    Via Como, 51
                    <br />
                    20020 Solaro (MI)
                  </p>
                </div>
                <div>
                  <p className="eyebrow text-stone">Email</p>
                  <a
                    href="mailto:info@futura.it"
                    className="nav-link mt-4 inline-block text-lg text-ink"
                  >
                    info@futura.it
                  </a>
                </div>
                <div>
                  <p className="eyebrow text-stone">Telefono</p>
                  <a
                    href="tel:+390290000000"
                    className="nav-link mt-4 inline-block text-lg text-ink"
                  >
                    +39 02 9000 0000
                  </a>
                </div>
                <div>
                  <p className="eyebrow text-stone">Orari</p>
                  <p className="mt-4 text-sm text-stone">
                    Lun – Ven · 9:00 – 18:00
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Form */}
            <Reveal delay={120}>
              <form className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Nome" name="nome" />
                  <Field label="Cognome" name="cognome" />
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Email" name="email" type="email" />
                  <Field label="Telefono" name="telefono" type="tel" />
                </div>
                <div>
                  <label
                    htmlFor="messaggio"
                    className="eyebrow text-stone"
                  >
                    Messaggio
                  </label>
                  <textarea
                    id="messaggio"
                    name="messaggio"
                    rows={5}
                    className="mt-3 w-full border-b border-ink/20 bg-transparent py-3 text-ink outline-none transition-colors focus:border-navy"
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 bg-ink px-9 py-5 text-xs uppercase tracking-[0.2em] text-white transition-colors hover:bg-navy"
                >
                  Invia messaggio
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow text-stone">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="mt-3 w-full border-b border-ink/20 bg-transparent py-3 text-ink outline-none transition-colors focus:border-navy"
      />
    </div>
  );
}
