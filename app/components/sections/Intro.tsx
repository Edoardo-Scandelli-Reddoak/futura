import Reveal from "../Reveal";

export default function Intro() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-[1600px] px-6 pb-12 pt-24 md:px-10 md:pb-16 md:pt-36">
        <Reveal>
          <p className="font-serif text-xl leading-[1.25] text-ink md:text-[2rem] md:leading-[1.22]">
            Futura è un&apos;impresa di costruzioni. Il nostro lavoro consiste
            nel realizzare con precisione ciò che altri progettano e
            promuovono: mettiamo trent&apos;anni di esperienza, un ufficio
            tecnico interno e maestranze qualificate al servizio del progetto e
            del risultato finale. Operiamo anche come sviluppatori, ma il centro
            della nostra attività resta il cantiere, dove si determina
            l&apos;esito di ogni operazione.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
