import Image from "next/image";
import Reveal from "../Reveal";
import CareersForm from "./CareersForm";

export default function Careers() {
  return (
    <>
      {/* Apertura — la foto resta viva: niente opacità schiacciata, solo un
          gradiente navy sul lato del testo. */}
      <section
        id="lavora-con-noi"
        className="relative min-h-[80vh] scroll-mt-20 overflow-hidden bg-navy-deep md:scroll-mt-24"
      >
        <Image
          src="/projects/ponte-pietra/05.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/70 to-navy-deep/25 md:bg-gradient-to-r md:from-navy-deep md:via-navy-deep/80 md:to-navy-deep/5" />

        <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-[1600px] flex-col justify-end gap-10 px-6 py-24 md:flex-row md:items-end md:justify-between md:gap-16 md:px-10 md:py-32">
          <Reveal>
            <p className="eyebrow text-cream/70">Lavora con noi</p>
            <h2 className="mt-6 max-w-3xl font-serif text-4xl leading-[1.05] text-white md:text-6xl">
              Un&apos;impresa vale quanto le persone che manda in cantiere.
            </h2>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-cream/85 md:text-lg">
              Futura è cresciuta così: con tecnici e maestranze che sono
              rimasti con noi nel tempo e che hanno portato in azienda altri
              professionisti qualificati. Non pubblichiamo annunci, ma
              leggiamo tutte le candidature spontanee. Quando cerchiamo una
              nuova figura, partiamo da lì.
            </p>
          </Reveal>

          {/* Ponte verso il modulo qui sotto */}
          <Reveal delay={160}>
            <a
              href="#candidatura"
              className="group inline-flex shrink-0 items-center gap-4 bg-white px-9 py-5 text-xs uppercase tracking-[0.2em] text-ink transition-colors hover:bg-cream"
            >
              Inviate la vostra candidatura
              <span className="transition-transform duration-300 group-hover:translate-y-1">
                ↓
              </span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* Modulo — fondo chiaro, per stacco dopo la foto */}
      <section id="candidatura" className="scroll-mt-20 bg-paper text-ink md:scroll-mt-24">
        <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32">
          <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
            <Reveal>
              <div className="md:sticky md:top-32">
                <p className="eyebrow text-stone">Candidatura spontanea</p>
                <h3 className="mt-6 font-serif text-3xl leading-[1.1] text-ink md:text-5xl">
                  Presentateci
                  <br />
                  la vostra esperienza.
                </h3>
                <p className="mt-8 max-w-sm text-base leading-relaxed text-stone">
                  Ufficio tecnico, cantiere, maestranze, sicurezza,
                  amministrazione, fornitori e collaboratori: se conoscete il
                  vostro mestiere e volete svolgerlo con serietà, scriveteci.
                </p>
                <p className="mt-6 max-w-sm text-sm leading-relaxed text-stone/80">
                  Leggiamo ogni candidatura. Se il vostro profilo è in linea
                  con le nostre esigenze, vi ricontatteremo, anche dopo
                  qualche mese, quando si aprirà il cantiere giusto.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <CareersForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
