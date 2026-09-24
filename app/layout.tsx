import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Neo-grotesque, used across the whole site — close in spirit to the
// FT Aktual grotesque used on parkassociati.com.
const grotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Futura — Impresa di Costruzioni",
  description:
    "Impresa di costruzioni in Lombardia da trent'anni. Mettiamo competenze ed esperienza di cantiere al servizio del progetto e di chi lo promuove.",
  openGraph: {
    title: "Futura — Impresa di Costruzioni",
    description:
      "Impresa di costruzioni in Lombardia da trent'anni. Mettiamo competenze ed esperienza di cantiere al servizio del progetto e di chi lo promuove.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it" className={grotesk.variable}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
