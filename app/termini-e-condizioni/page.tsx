import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { CompanyDetails, LegalSection } from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Termini e condizioni — Futura",
  description:
    "Condizioni d'uso del sito di Futura S.r.l.: contenuti, proprietà intellettuale, responsabilità e legge applicabile.",
};

export default function TerminiPage() {
  return (
    <LegalPage
      eyebrow="Note legali"
      title="Termini e condizioni"
      intro="Le condizioni che regolano l'uso di questo sito. Navigando sul sito le accetti: se non sei d'accordo, ti chiediamo di non utilizzarlo."
    >
      <LegalSection title="1. Chi gestisce il sito">
        <CompanyDetails />
      </LegalSection>

      <LegalSection title="2. Scopo del sito">
        <p>
          Il sito presenta l&apos;attività di Futura S.r.l., impresa di
          costruzioni: i servizi offerti, i progetti realizzati e in corso, le
          certificazioni e le modalità per contattarci o candidarsi. Il sito non
          consente di acquistare beni o servizi online.
        </p>
      </LegalSection>

      <LegalSection title="3. Contenuti e informazioni sui progetti">
        <p>
          Cerchiamo di mantenere le informazioni del sito corrette e
          aggiornate, ma non possiamo garantire che siano sempre complete o
          prive di errori. I contenuti hanno scopo informativo e non
          costituiscono offerta contrattuale.
        </p>
        <p>
          Render, schizzi e prospetti dei progetti in corso o in fase di
          progettazione sono immagini illustrative: il risultato finale può
          differire per materiali, finiture, colori, arredi e sistemazioni
          esterne. Dati come numero di unità, piani e superfici sono indicativi
          e possono cambiare nel corso della progettazione e dei lavori. Fanno
          fede esclusivamente la documentazione tecnica e i contratti.
        </p>
      </LegalSection>

      <LegalSection title="4. Proprietà intellettuale">
        <p>
          Testi, fotografie, render, video, loghi, marchi (compreso il marchio
          TOWER) e la grafica del sito sono di proprietà di Futura S.r.l. o dei
          rispettivi autori che ne hanno concesso l&apos;uso, e sono protetti
          dalla normativa sul diritto d&apos;autore e sui marchi.
        </p>
        <p>
          Non è consentito copiare, riprodurre, modificare o diffondere i
          contenuti, in tutto o in parte, senza il nostro consenso scritto. È
          consentita la consultazione e la stampa per uso personale e non
          commerciale.
        </p>
      </LegalSection>

      <LegalSection title="5. Documenti e certificazioni">
        <p>
          Le certificazioni pubblicate sul sito (Attestazione SOA, ISO 9001, ISO
          14001, Rating di legalità) sono copie dei documenti rilasciati dagli
          enti competenti e hanno valore informativo. La loro validità può
          essere verificata presso gli enti emittenti o le banche dati
          pubbliche.
        </p>
      </LegalSection>

      <LegalSection title="6. Link esterni">
        <p>
          Il sito può contenere link a siti di terzi. Non controlliamo questi
          siti e non siamo responsabili dei loro contenuti, della loro
          disponibilità o delle loro politiche sulla privacy.
        </p>
      </LegalSection>

      <LegalSection title="7. Limitazione di responsabilità">
        <p>
          Nei limiti consentiti dalla legge, Futura non è responsabile di danni
          derivanti dall&apos;uso del sito o dall&apos;impossibilità di
          accedervi, da errori o omissioni nei contenuti o da interruzioni del
          servizio dovute a cause tecniche o di forza maggiore.
        </p>
      </LegalSection>

      <LegalSection title="8. Moduli di contatto e candidature">
        <p>
          Inviando un messaggio o una candidatura ti impegni a fornire
          informazioni veritiere e a non inviare contenuti illeciti, offensivi
          o dannosi. Il trattamento dei dati che ci invii è descritto nella{" "}
          <Link href="/privacy-policy">Privacy Policy</Link>.
        </p>
      </LegalSection>

      <LegalSection title="9. Legge applicabile e foro competente">
        <p>
          Queste condizioni sono regolate dalla legge italiana. Per ogni
          controversia è competente il Foro di Milano, salvo i casi in cui la
          legge preveda inderogabilmente il foro del consumatore.
        </p>
      </LegalSection>

      <LegalSection title="10. Modifiche">
        <p>
          Possiamo modificare queste condizioni in qualsiasi momento. La
          versione in vigore è quella pubblicata su questa pagina.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
