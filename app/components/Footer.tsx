import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0b1c2c] text-cream">
      {/* Navy with a blurred image behind (matches the overlay menu) */}
      <Image
        src="/projects/nembro/06.webp"
        alt=""
        fill
        sizes="100vw"
        className="scale-110 object-cover opacity-40 blur-2xl"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f2438]/82 to-[#0f2438]/92" />
      <div className="relative z-10 mx-auto max-w-[1600px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-14 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Image
              src="/logo_futura.png"
              alt="Futura"
              width={174}
              height={174}
              className="h-16 w-auto"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/70">
              Progettiamo e realizziamo spazi residenziali e direzionali in
              Lombardia. Costruiamo valore, qualità e visione per la vita di chi
              li abita.
            </p>
          </div>

          <div>
            <p className="eyebrow text-cream/50">Naviga</p>
            <ul className="mt-6 space-y-3 text-sm text-cream/80">
              <li>
                <Link href="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/progetti" className="nav-link">
                  Progetti
                </Link>
              </li>
              <li>
                <Link href="/come-lavoriamo" className="nav-link">
                  Come lavoriamo
                </Link>
              </li>
              <li>
                <Link href="/team" className="nav-link">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/impegno-sociale" className="nav-link">
                  Impegno sociale
                </Link>
              </li>
              <li>
                <Link href="/contatti" className="nav-link">
                  Contatti
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-cream/50">Sede</p>
            <address className="mt-6 space-y-3 text-sm not-italic text-cream/80">
              <p>
                Via Como, 51
                <br />
                20020 Solaro (MI)
              </p>
              <p>
                <a href="mailto:info@futura.it" className="nav-link">
                  info@futura.it
                </a>
              </p>
              <p>
                <a href="tel:+390290000000" className="nav-link">
                  +39 02 9000 0000
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-3 border-t border-cream/15 pt-8 text-xs text-cream/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Futura S.r.l. — Tutti i diritti riservati.</p>
          <p>P.IVA 00000000000 · Privacy Policy · Cookie Policy</p>
        </div>
      </div>
    </footer>
  );
}
