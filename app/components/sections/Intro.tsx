import Reveal from "../Reveal";

export default function Intro() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-[1600px] px-6 pb-12 pt-24 md:px-10 md:pb-16 md:pt-36">
        <Reveal>
          <p className="font-serif text-xl leading-[1.25] text-ink md:text-[2rem] md:leading-[1.22]">
            Futura nasce dall&apos;idea che costruire significhi prendersi cura
            di un luogo e delle persone che lo abiteranno. Ogni progetto è una
            promessa di qualità, durata e bellezza: dalla scelta dell&apos;area
            al disegno degli spazi, fino all&apos;ultimo dettaglio di cantiere.
            Mettiamo competenza, visione e rispetto del territorio al servizio
            di chi vivrà ciò che realizziamo, costruendo valore destinato a
            durare nel tempo.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
