import Reveal from "../Reveal";

export default function Intro() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-[1600px] px-6 pb-12 pt-24 md:px-10 md:pb-16 md:pt-36">
        <Reveal>
          <p className="font-serif text-xl leading-[1.25] text-ink md:text-[2rem] md:leading-[1.22]">
            Futura è un&apos;impresa di costruzioni. Il nostro mestiere è
            realizzare bene ciò che altri progettano e promuovono: mettiamo
            trent&apos;anni di cantieri, un ufficio tecnico interno e maestranze
            qualificate al servizio del progetto e del risultato finale.
            Sviluppiamo anche in proprio, ma il cuore del lavoro resta il
            cantiere — ed è lì che si decide se un&apos;operazione riesce.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
