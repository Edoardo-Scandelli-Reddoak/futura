import Reveal from "../Reveal";

export default function Intro() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-[1600px] px-6 pb-12 pt-24 md:px-10 md:pb-16 md:pt-36">
        <Reveal>
          <p className="font-serif text-xl leading-[1.25] text-ink md:text-[2rem] md:leading-[1.22]">
            Futura è un&apos;azienda di costruzioni che opera lungo
            l&apos;intera filiera immobiliare, dall&apos;acquisizione delle aree
            allo sviluppo. Da trent&apos;anni progettiamo e costruiamo edifici
            residenziali, industriali e commerciali con una struttura nostra,
            dall&apos;ufficio tecnico al cantiere. Per questo possiamo rispondere
            direttamente di qualità, tempi e costi.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
