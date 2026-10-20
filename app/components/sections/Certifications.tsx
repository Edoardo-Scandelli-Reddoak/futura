import Reveal from "../Reveal";

// Documenti ripresi dal vecchio sito (futurasrl.net/certificazioni).
const certifications = [
  {
    mark: "SOA",
    title: "Attestazione SOA",
    body: "Qualificazione all'esecuzione di lavori pubblici.",
    detail: "OG1 classifica VI · OG3 III-bis · OG6 II",
    issuer: "Argenta S.O.A.",
    href: "/certificazioni/attestazione-soa.pdf",
  },
  {
    mark: "ISO 9001",
    title: "Gestione per la qualità",
    body: "Sistema di gestione certificato UNI EN ISO 9001:2015.",
    detail: "Costruzione e manutenzione di edifici",
    issuer: "Certitalia",
    href: "/certificazioni/iso-9001.pdf",
  },
  {
    mark: "ISO 14001",
    title: "Certificazione ambientale",
    body: "Sistema di gestione ambientale ISO 14001:2015.",
    detail: "Costruzione di edifici",
    issuer: "SMC",
    href: "/certificazioni/iso-14001.pdf",
  },
  {
    mark: "★+",
    title: "Rating di legalità",
    body: "Riconoscimento attribuito alle imprese che rispettano elevati standard di legalità.",
    detail: "Punteggio ★+",
    issuer: "Autorità Garante della Concorrenza e del Mercato",
    href: "/certificazioni/rating-legalita.pdf",
  },
];

export default function Certifications() {
  return (
    <section id="certificazioni" className="bg-navy text-paper">
      <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <Reveal className="md:col-span-7">
            <p className="eyebrow text-paper/60">Certificazioni</p>
            <h2 className="mt-6 font-serif text-4xl leading-[1.08] md:text-6xl">
              Efficienza, qualità e sicurezza, verificate da enti terzi.
            </h2>
          </Reveal>
          <Reveal className="md:col-span-5" delay={120}>
            <p className="max-w-md leading-relaxed text-paper/75">
              Futura ha ottenuto le certificazioni previste dalle norme europee
              per il settore edile. Garantiscono efficienza e qualità nel
              lavoro e sicurezza per il cliente. Ogni documento è
              consultabile.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden border border-paper/15 bg-paper/15 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {certifications.map((c, i) => (
            <Reveal key={c.title} delay={i * 100} className="h-full">
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col bg-navy p-8 transition-colors duration-500 hover:bg-navy-deep md:p-10"
              >
                <span className="whitespace-nowrap font-serif text-5xl leading-none tracking-tight text-paper 2xl:text-6xl">
                  {c.mark}
                </span>
                <span className="mt-10 block h-px w-10 bg-paper/30 transition-all duration-500 group-hover:w-16 group-hover:bg-paper" />
                <h3 className="mt-6 text-lg text-paper">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/70">
                  {c.body}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-paper/70">
                  {c.detail}
                </p>
                <p className="mt-auto pt-10 text-xs uppercase tracking-[0.18em] text-paper/50">
                  {c.issuer}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-paper">
                  Vedi il certificato
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
