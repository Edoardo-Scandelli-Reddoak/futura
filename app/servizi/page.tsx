import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "Servizi — Futura",
  description:
    "Sviluppo immobiliare, progettazione, costruzione e ristrutturazione: i servizi integrati di Futura.",
};

const services = [
  {
    n: "01",
    title: "Sviluppo immobiliare",
    body: "Individuiamo e valorizziamo le aree, gestendo l'intero processo dall'acquisizione alla commercializzazione con una visione di lungo periodo.",
  },
  {
    n: "02",
    title: "Progettazione",
    body: "Dal concept al progetto esecutivo, lavoriamo con architetti e ingegneri per spazi funzionali, sostenibili e dal disegno curato.",
  },
  {
    n: "03",
    title: "Costruzione",
    body: "Gestiamo il cantiere come general contractor, controllando tempi, costi e qualità con maestranze e fornitori selezionati.",
  },
  {
    n: "04",
    title: "Ristrutturazione",
    body: "Interventi di recupero e riqualificazione che restituiscono valore e nuova vita agli edifici esistenti.",
  },
  {
    n: "05",
    title: "Property & facility",
    body: "Affianchiamo i nostri clienti anche dopo la consegna, con servizi di gestione e manutenzione del patrimonio immobiliare.",
  },
  {
    n: "06",
    title: "Consulenza",
    body: "Analisi di fattibilità, due diligence tecnica e advisory per investitori e privati che vogliono costruire con consapevolezza.",
  },
];

export default function ServiziPage() {
  return (
    <>
      <PageHeader
        eyebrow="Servizi"
        title="Un unico interlocutore, dall'idea alla consegna"
        intro="Presidiamo l'intera filiera dell'edilizia con un approccio integrato. Questo ci permette di garantire coerenza, qualità e trasparenza in ogni fase."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-[1400px] px-6 pb-32 md:px-10">
          <div className="grid gap-px overflow-hidden border border-ink/10 bg-ink/10 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.n} delay={(i % 3) * 80}>
                <div className="flex h-full flex-col bg-white p-10 transition-colors duration-500 hover:bg-paper">
                  <span className="font-serif text-2xl text-stone/50">{s.n}</span>
                  <h2 className="mt-8 font-serif text-2xl text-ink">{s.title}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-stone">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
