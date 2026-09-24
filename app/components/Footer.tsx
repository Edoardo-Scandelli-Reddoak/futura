import Image from "next/image";
import SmartLink from "./SmartLink";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0b1c2c] text-cream">
      {/* Navy with a blurred image behind (matches the overlay menu) */}
      <Image
        src="/site/menu-bg.jpg"
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
              Impresa di costruzioni in Lombardia, da trent&apos;anni.
              Realizziamo opere residenziali, direzionali e industriali per chi
              progetta, sviluppa e investe.
            </p>
          </div>

          <div>
            <p className="eyebrow text-cream/50">Naviga</p>
            <ul className="mt-6 space-y-3 text-sm text-cream/80">
              <li>
                <SmartLink href="/" className="nav-link">
                  Home
                </SmartLink>
              </li>
              <li>
                <SmartLink href="/progetti" className="nav-link">
                  Progetti
                </SmartLink>
              </li>
              <li>
                <SmartLink href="/come-lavoriamo" className="nav-link">
                  Come lavoriamo
                </SmartLink>
              </li>
              <li>
                <SmartLink href="/team" className="nav-link">
                  Team
                </SmartLink>
              </li>
              <li>
                <SmartLink href="/team#lavora-con-noi" className="nav-link">
                  Lavora con noi
                </SmartLink>
              </li>
              <li>
                <SmartLink href="/impegno-sociale" className="nav-link">
                  Impegno sociale
                </SmartLink>
              </li>
              <li>
                <SmartLink href="/contatti" className="nav-link">
                  Contatti
                </SmartLink>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-cream/50">Sedi</p>
            <address className="mt-6 space-y-3 text-sm not-italic text-cream/80">
              <p>
                <span className="block text-cream/50">Solaro</span>
                Via Como, 51
                <br />
                20033 Solaro (MI)
              </p>
              <p>
                <span className="block text-cream/50">Bergamo</span>
                Piazza Gaber, 3/E
                <br />
                24124 Bergamo (BG)
              </p>
              <p>
                <a href="mailto:info@futurasrl.net" className="nav-link">
                  info@futurasrl.net
                </a>
              </p>
              <p>
                <a href="tel:+390225062368" className="nav-link">
                  +39 02 250 62368
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-3 border-t border-cream/15 pt-8 text-xs text-cream/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Futura S.r.l. — Tutti i diritti riservati.</p>
          <p>P.IVA e C.F. 02870190168 · Privacy Policy · Cookie Policy</p>
        </div>
      </div>
    </footer>
  );
}
