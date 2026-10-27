import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { CompanyDetails, LegalSection } from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Cookie Policy — Futura",
  description:
    "Informativa sull'uso dei cookie e di altri strumenti di tracciamento sul sito di Futura S.r.l.",
};

export default function CookiePolicyPage() {
  return (
    <LegalPage
      eyebrow="Informativa"
      title="Cookie Policy"
      intro="Questo sito non usa cookie di profilazione, di statistica o di terze parti. Per questo non ti chiediamo alcun consenso quando lo visiti."
    >
      <LegalSection title="1. Cosa sono i cookie">
        <p>
          I cookie sono piccoli file di testo che un sito salva sul tuo
          dispositivo mentre navighi. Possono servire a far funzionare il sito
          (cookie tecnici), a misurarne l&apos;utilizzo (cookie statistici) o a
          tracciare le tue abitudini per mostrarti pubblicità personalizzata
          (cookie di profilazione). Strumenti simili, come pixel o web storage,
          seguono le stesse regole.
        </p>
      </LegalSection>

      <LegalSection title="2. Quali cookie usa questo sito">
        <p>
          <strong>Nessuno.</strong> Il sito di Futura non installa cookie di
          profilazione, cookie statistici o analitici, né cookie di terze parti.
          Anche i caratteri tipografici, le immagini e i video sono serviti
          direttamente dal nostro sito, senza collegamenti a servizi esterni
          durante la navigazione.
        </p>
        <p>
          Se in futuro dovessimo introdurre cookie tecnici indispensabili al
          funzionamento del sito, li elencheremo in questa pagina. Per
          eventuali cookie non tecnici ti chiederemo prima il consenso tramite
          un apposito banner, come previsto dalle Linee guida del Garante per la
          protezione dei dati personali del 10 giugno 2021.
        </p>
      </LegalSection>

      <LegalSection title="3. Link a siti esterni">
        <p>
          Il sito contiene link ai nostri profili social e ad altri siti. Se li
          apri, sarai su un sito di terzi, che può usare i propri cookie
          secondo la propria informativa: ti consigliamo di consultarla.
        </p>
      </LegalSection>

      <LegalSection title="4. Come gestire i cookie dal browser">
        <p>
          In ogni caso puoi vedere, bloccare o cancellare i cookie dalle
          impostazioni del tuo browser. Le istruzioni sono disponibili sulle
          pagine di supporto di Chrome, Safari, Firefox ed Edge.
        </p>
      </LegalSection>

      <LegalSection title="5. Titolare del trattamento">
        <CompanyDetails />
        <p>
          Per sapere come trattiamo i dati personali consulta la{" "}
          <Link href="/privacy-policy">Privacy Policy</Link>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
