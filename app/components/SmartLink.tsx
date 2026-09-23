"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps, MouseEvent, ReactNode } from "react";

type Props = Omit<ComponentProps<typeof Link>, "href" | "onClick"> & {
  href: string;
  children: ReactNode;
  /** Chiamata a ogni click: serve a chi deve chiudere un overlay. */
  onNavigate?: () => void;
  /** Attesa prima di scorrere, per lasciar chiudere un overlay che blocca lo scroll. */
  scrollDelay?: number;
};

/**
 * Link che gestisce da sé le ancore verso la pagina in cui ci si trova già.
 * Senza, Next accoda l'hash a quello presente (/team#a → /team#a#a) e la
 * navigazione non scatta perché il percorso non cambia.
 */
export default function SmartLink({
  href,
  children,
  onNavigate,
  scrollDelay = 0,
  ...rest
}: Props) {
  const pathname = usePathname();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onNavigate?.();

    const [path, hash] = href.split("#");
    if (!hash || path !== pathname) return;

    e.preventDefault();
    const scroll = () => {
      document.getElementById(hash)?.scrollIntoView({
        behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
        block: "start",
      });
      window.history.replaceState(null, "", `${path}#${hash}`);
    };
    if (scrollDelay) setTimeout(scroll, scrollDelay);
    else scroll();
  };

  return (
    <Link href={href} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
}
