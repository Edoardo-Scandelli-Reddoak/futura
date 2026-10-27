import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { CompanyDetails, LegalSection } from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — Futura",
  description:
    "Informativa sul trattamento dei dati personali degli utenti del sito di Futura S.r.l., ai sensi del Regolamento UE 2016/679 (GDPR).",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Informativa"
      title="Privacy Policy"
      intro="Come trattiamo i dati personali di chi visita questo sito, ci scrive o ci invia una candidatura. Informativa resa ai sensi degli articoli 13 e 14 del Regolamento UE 2016/679 (GDPR)."
    >
      <LegalSection title="1. Titolare del trattamento">
        <CompanyDetails />
        <p>
          Per qualsiasi domanda sul trattamento dei tuoi dati puoi scriverci
          all&apos;indirizzo email indicato sopra.
        </p>
      </LegalSection>

      <LegalSection title="2. Quali dati raccogliamo">
        <p>
          <strong>Dati di navigazione.</strong> I sistemi che fanno funzionare il
          sito registrano, nel normale esercizio, alcuni dati tecnici: indirizzo
          IP, tipo di browser e di dispositivo, pagine richieste, data e ora
          della richiesta. Servono solo a garantire il funzionamento e la
          sicurezza del sito e non vengono usati per identificarti.
        </p>
        <p>
          <strong>Dati che ci invii tramite il modulo di contatto.</strong> Nome,
          cognome, email, telefono e il testo del messaggio.
        </p>
        <p>
          <strong>Dati che ci invii con una candidatura.</strong> Nome, email,
          telefono, area di interesse, eventuale presentazione e il curriculum
          vitae allegato, con le informazioni che contiene. Ti chiediamo di non
          inserire nel CV dati particolari (ad esempio relativi alla salute,
          alle opinioni politiche o religiose) se non strettamente necessari.
        </p>
        <p>
          <strong>Dati che ci invii via email o telefono.</strong> I dati
          contenuti nella comunicazione, trattati per rispondere alla tua
          richiesta.
        </p>
      </LegalSection>

      <LegalSection title="3. Finalità e basi giuridiche">
        <ul>
          <li>
            <strong>Rispondere alle richieste di contatto</strong> e, se lo
            chiedi, predisporre un preventivo: esecuzione di misure
            precontrattuali adottate su tua richiesta (art. 6.1.b GDPR).
          </li>
          <li>
            <strong>Valutare le candidature</strong> per eventuali posizioni
            presso Futura: misure precontrattuali su tua richiesta e consenso
            espresso al momento dell&apos;invio (art. 6.1.a e 6.1.b GDPR).
          </li>
          <li>
            <strong>Garantire il funzionamento e la sicurezza del sito</strong>{" "}
            e prevenire abusi: legittimo interesse del titolare (art. 6.1.f
            GDPR).
          </li>
          <li>
            <strong>Adempiere a obblighi di legge</strong> e, se necessario,
            difendere un diritto in sede giudiziaria (art. 6.1.c e 6.1.f GDPR).
          </li>
        </ul>
        <p>
          Non usiamo i tuoi dati per inviarti newsletter o comunicazioni
          promozionali e non li utilizziamo per profilazione.
        </p>
      </LegalSection>

      <LegalSection title="4. Conferimento dei dati">
        <p>
          Il conferimento dei dati richiesti nei moduli è facoltativo, ma i
          campi contrassegnati come obbligatori sono necessari per poterti
          rispondere o per valutare la tua candidatura.
        </p>
      </LegalSection>

      <LegalSection title="5. Come trattiamo i dati e a chi li comunichiamo">
        <p>
          I dati sono trattati con strumenti elettronici, da personale di
          Futura autorizzato e con misure adeguate a proteggerli. Non vengono
          diffusi né venduti.
        </p>
        <p>
          Per far funzionare il sito ci avvaliamo di fornitori che trattano i
          dati per nostro conto, in qualità di responsabili del trattamento:
        </p>
        <ul>
          <li>
            <strong>Vercel Inc.</strong>, che ospita il sito e gestisce i dati
            di navigazione;
          </li>
          <li>
            <strong>Web3Forms</strong>, il servizio che inoltra alla nostra
            casella email i messaggi e le candidature inviati dai moduli;
          </li>
          <li>il fornitore del nostro servizio di posta elettronica.</li>
        </ul>
        <p>
          Alcuni di questi fornitori possono trattare i dati anche al di fuori
          dello Spazio Economico Europeo, in particolare negli Stati Uniti. In
          questi casi il trasferimento avviene sulla base di una decisione di
          adeguatezza della Commissione europea (EU-US Data Privacy Framework)
          o delle clausole contrattuali standard approvate dalla Commissione.
        </p>
        <p>
          I dati possono inoltre essere comunicati a consulenti e autorità
          pubbliche quando lo richiede la legge.
        </p>
      </LegalSection>

      <LegalSection title="6. Per quanto tempo conserviamo i dati">
        <ul>
          <li>
            <strong>Richieste di contatto:</strong> per il tempo necessario a
            gestire la richiesta e comunque non oltre 24 mesi dall&apos;ultimo
            contatto, salvo che ne nasca un rapporto contrattuale, nel qual caso
            si applicano i termini previsti dalla legge.
          </li>
          <li>
            <strong>Candidature:</strong> per 24 mesi dalla ricezione, per
            poterti ricontattare per posizioni future. Puoi chiederne la
            cancellazione in qualsiasi momento.
          </li>
          <li>
            <strong>Dati di navigazione:</strong> per il periodo tecnico
            previsto dal fornitore di hosting, di norma pochi giorni.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="7. I tuoi diritti">
        <p>
          In ogni momento puoi chiedere l&apos;accesso ai tuoi dati, la loro
          rettifica o cancellazione, la limitazione del trattamento, la
          portabilità e opporti al trattamento basato sul legittimo interesse
          (artt. 15-22 GDPR). Se hai dato il consenso, puoi revocarlo senza che
          ciò pregiudichi il trattamento svolto prima della revoca.
        </p>
        <p>
          Per esercitare i tuoi diritti scrivi a{" "}
          <a href="mailto:info@futurasrl.net">info@futurasrl.net</a>. Hai
          inoltre il diritto di proporre reclamo al Garante per la protezione
          dei dati personali (
          <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer">
            www.garanteprivacy.it
          </a>
          ).
        </p>
      </LegalSection>

      <LegalSection title="8. Cookie">
        <p>
          Il sito non utilizza cookie di profilazione né di statistica. Tutti i
          dettagli sono nella <Link href="/cookie-policy">Cookie Policy</Link>.
        </p>
      </LegalSection>

      <LegalSection title="9. Modifiche">
        <p>
          Possiamo aggiornare questa informativa, ad esempio se cambiano i
          servizi usati dal sito. La versione in vigore è sempre quella
          pubblicata su questa pagina.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
