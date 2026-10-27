import type { ReactNode } from "react";
import PageHeader from "./PageHeader";

export const LEGAL_UPDATED = "27 ottobre 2026";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
};

// Shared shell for privacy, cookie and terms pages: header + one readable column.
export default function LegalPage({ eyebrow, title, intro, children }: LegalPageProps) {
  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} intro={intro} />
      <section className="bg-paper">
        <div className="mx-auto max-w-[1600px] px-6 pb-32 md:px-10">
          <div className="max-w-3xl space-y-14 border-t border-ink/15 pt-14">
            {children}
            <p className="text-xs uppercase tracking-[0.18em] text-stone">
              Ultimo aggiornamento: {LEGAL_UPDATED}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="font-serif text-2xl leading-tight text-ink md:text-3xl">{title}</h2>
      <div className="mt-5 space-y-4 text-base leading-relaxed text-stone [&_a]:text-ink [&_a]:underline [&_a]:underline-offset-4 [&_li]:pl-1 [&_strong]:font-medium [&_strong]:text-ink [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
        {children}
      </div>
    </div>
  );
}

/** Dati del titolare, ripetuti in tutte le pagine legali. */
export function CompanyDetails() {
  return (
    <p>
      <strong>Futura S.r.l.</strong>
      <br />
      Sede legale: Via Senato 6, 20121 Milano (MI)
      <br />
      Sede operativa: Via Como 51, 20033 Solaro (MI)
      <br />
      P.IVA e C.F. 02870190168
      <br />
      Email: <a href="mailto:info@futurasrl.net">info@futurasrl.net</a> · Tel.{" "}
      <a href="tel:+390225062368">+39 02 2506 2368</a>
    </p>
  );
}
