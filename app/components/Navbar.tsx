"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// All voices point to home for now, as requested.
const menu = [
  { label: "Home", href: "/" },
  { label: "Progetti", href: "/" },
  { label: "Servizi", href: "/" },
  { label: "Team", href: "/" },
  { label: "Contatti", href: "/" },
];

const social = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "YouTube", href: "#" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const overHero = pathname === "/";
  const solid = scrolled || !overHero;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll + close on Esc while the overlay is open.
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
      window.addEventListener("keydown", onKey);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", onKey);
      };
    }
  }, [open]);

  return (
    <>
      {/* Top bar */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          solid ? "py-4" : "py-5"
        }`}
      >
        {/* Solid state: navy with a blurred image behind (matches the overlay menu) */}
        <div
          className={`pointer-events-none absolute inset-0 overflow-hidden border-b border-white/10 transition-opacity duration-500 ${
            solid ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-[#0b1c2c]" />
          <Image
            src="/projects/nembro/06.webp"
            alt=""
            fill
            sizes="100vw"
            className="scale-125 object-cover opacity-40 blur-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f2438]/82 to-[#0f2438]/92" />
        </div>
        {/* Over-hero state: subtle dark gradient so the logo stays legible over the video */}
        <div
          className={`pointer-events-none absolute inset-0 bg-gradient-to-b from-black/55 to-transparent transition-opacity duration-500 ${
            solid ? "opacity-0" : "opacity-100"
          }`}
        />

        <div className="relative mx-auto flex max-w-[1600px] items-center justify-between px-6 md:px-10">
          <Link href="/" aria-label="Futura — Home" className="flex items-center">
            <Image
              src="/logo_futura.png"
              alt="Futura"
              width={174}
              height={174}
              priority
              className="h-11 w-auto md:h-12"
              style={{
                filter:
                  "brightness(0) invert(1) drop-shadow(0 1px 3px rgba(0,0,0,0.6))",
              }}
            />
          </Link>

          <button
            type="button"
            aria-label="Apri menu"
            onClick={() => setOpen(true)}
            className="group flex flex-col items-end gap-[7px] p-2"
          >
            <span className="block h-px w-8 bg-white transition-all duration-300 group-hover:w-9" />
            <span className="block h-px w-8 bg-white transition-all duration-300 group-hover:w-6" />
          </button>
        </div>
      </header>

      {/* Fullscreen overlay menu */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-500 ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        {/* Blurred dark-blue backdrop */}
        <div className="absolute inset-0 bg-[#0b1c2c]">
          <Image
            src="/projects/nembro/06.webp"
            alt=""
            fill
            sizes="100vw"
            className="scale-125 object-cover opacity-50 blur-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f2438]/72 via-[#0f2438]/58 to-[#0f2438]/82" />
        </div>

        {/* Close button */}
        <button
          type="button"
          aria-label="Chiudi menu"
          onClick={() => setOpen(false)}
          className="absolute right-6 top-6 z-10 flex h-12 w-12 items-center justify-center text-white/80 transition-colors hover:text-white md:right-10 md:top-8"
        >
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <path d="M2 2L24 24M24 2L2 24" stroke="currentColor" strokeWidth="1.4" />
          </svg>
        </button>

        {/* Content */}
        <div className="relative z-[5] mx-auto flex h-full max-w-[1600px] flex-col px-6 pb-10 pt-24 md:grid md:grid-cols-[1.6fr_1fr] md:gap-16 md:px-10 md:pt-32">
          {/* Menu list */}
          <nav className="flex flex-col justify-center">
            {menu.map((item, i) => (
              <Link
                key={item.label}
                href={item.href}
                className="group flex items-stretch"
                style={{
                  transitionDelay: open ? `${120 + i * 70}ms` : "0ms",
                }}
              >
                <span
                  className={`flex w-10 shrink-0 items-center pt-1 text-xs text-white/40 transition-all duration-500 md:w-16 md:text-sm ${
                    open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: open ? `${120 + i * 70}ms` : "0ms" }}
                >
                  0{i + 1}.
                </span>
                <span
                  className={`relative flex flex-1 items-center justify-between overflow-hidden border-b border-white/15 px-4 py-3 transition-all duration-500 md:px-7 md:py-4 ${
                    open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: open ? `${120 + i * 70}ms` : "0ms" }}
                >
                  {/* White layer wiping left → right */}
                  <span
                    aria-hidden
                    className="absolute inset-0 origin-left scale-x-0 bg-cream transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
                  />
                  <span className="relative z-10 font-sans text-3xl font-medium uppercase leading-none tracking-tight text-cream transition-colors duration-150 group-hover:text-navy-deep sm:text-4xl md:text-6xl">
                    {item.label}
                  </span>
                  <span className="relative z-10 ml-4 translate-x-[-8px] text-navy-deep opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    <svg width="48" height="14" viewBox="0 0 48 14" fill="none">
                      <path
                        d="M0 7H46M46 7L40 1M46 7L40 13"
                        stroke="currentColor"
                        strokeWidth="1.3"
                      />
                    </svg>
                  </span>
                </span>
              </Link>
            ))}
          </nav>

          {/* Info column */}
          <div
            className={`mt-12 flex flex-col justify-center transition-all duration-700 md:mt-0 ${
              open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: open ? "360ms" : "0ms" }}
          >
            <div className="space-y-8 text-cream/90">
              <InfoBlock label="Email">
                <a href="mailto:info@futura.it" className="nav-link">
                  info@futura.it
                </a>
              </InfoBlock>
              <InfoBlock label="Telefono">
                <a href="tel:+390290000000" className="nav-link">
                  (+39) 02 9000 0000
                </a>
              </InfoBlock>
              <InfoBlock label="Indirizzo">
                <span className="not-italic">
                  Via Como, 51
                  <br />
                  20020 Solaro (MI)
                </span>
              </InfoBlock>
              <InfoBlock label="Social">
                <span className="flex flex-col gap-1">
                  {social.map((s) => (
                    <a key={s.label} href={s.href} className="nav-link underline">
                      {s.label}
                    </a>
                  ))}
                </span>
              </InfoBlock>
            </div>

            <div className="mt-auto hidden pt-16 md:block">
              <Image
                src="/logo_futura.png"
                alt="Futura"
                width={174}
                height={174}
                className="h-20 w-auto"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function InfoBlock({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="eyebrow text-cream/45">{label}</p>
      <div className="mt-2 text-sm uppercase tracking-[0.1em] text-cream/90">
        {children}
      </div>
    </div>
  );
}
