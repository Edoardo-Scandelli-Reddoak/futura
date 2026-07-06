import Image from "next/image";
import Link from "next/link";
import Reveal from "../Reveal";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <Image
        src="/projects/bergamo-gaber/01.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-30"
      />
      <div className="relative z-10 mx-auto flex max-w-[1600px] flex-col items-start gap-10 px-6 py-28 md:flex-row md:items-end md:justify-between md:px-10 md:py-40">
        <Reveal>
          <p className="eyebrow text-white/60">Costruiamo insieme</p>
          <h2 className="mt-6 max-w-2xl font-serif text-4xl leading-tight md:text-6xl">
            Hai un&apos;area, un&apos;idea o un progetto da realizzare?
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <Link
            href="/contatti"
            className="group inline-flex shrink-0 items-center gap-3 bg-white px-9 py-5 text-xs uppercase tracking-[0.2em] text-ink transition-colors hover:bg-cream"
          >
            Contattaci
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
