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
  title: "Futura — Costruzioni & Real Estate",
  description:
    "Futura progetta e realizza spazi residenziali e direzionali in Lombardia. Costruiamo valore, qualità e visione per la vita di chi ci abita.",
  openGraph: {
    title: "Futura — Costruzioni & Real Estate",
    description:
      "Progettiamo e realizziamo spazi residenziali e direzionali in Lombardia.",
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
