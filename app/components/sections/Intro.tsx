import Reveal from "../Reveal";

export default function Intro() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-[1600px] px-6 pb-12 pt-24 md:px-10 md:pb-16 md:pt-36">
        <Reveal>
          <p className="font-serif text-xl leading-[1.25] text-ink md:text-[2rem] md:leading-[1.22]">
            Futura è un&apos;impresa di costruzioni attiva su tutta la filiera
            immobiliare. Da trent&apos;anni costruiamo edifici residenziali,
            commerciali, direzionali e industriali con una struttura interna,
            dall&apos;ufficio tecnico al cantiere. Per questo possiamo
            garantire direttamente qualità, tempi e costi.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
