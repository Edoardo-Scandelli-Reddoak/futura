"use client";

import { useState } from "react";

const AREE = [
  "Ufficio tecnico",
  "Cantiere",
  "Maestranze",
  "Sicurezza e direzione lavori",
  "Amministrazione",
  "Fornitori e collaboratori",
];

// La chiave arriva dall'account Web3Forms. Finché non c'è, il form non finge
// di funzionare: lo dichiara e basta.
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

type Stato = "fermo" | "invio" | "fatto" | "errore";

export default function CareersForm() {
  const [stato, setStato] = useState<Stato>("fermo");
  const [errore, setErrore] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    if (!ACCESS_KEY) {
      setStato("errore");
      setErrore(
        "Il modulo non è ancora collegato all'account Web3Forms. Nel frattempo scrivi a info@futurasrl.net."
      );
      return;
    }

    setStato("invio");
    setErrore("");
    const data = new FormData(form);
    data.append("access_key", ACCESS_KEY);
    data.append("subject", "Candidatura dal sito — Lavora con noi");
    data.append("from_name", "Sito Futura");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStato("fatto");
        form.reset();
      } else {
        setStato("errore");
        setErrore(json.message || "Invio non riuscito. Riprova tra poco.");
      }
    } catch {
      setStato("errore");
      setErrore(
        "Non siamo riusciti a inviare la candidatura. Controlla la connessione e riprova."
      );
    }
  }

  const campo =
    "w-full border border-ink/20 bg-white px-4 py-3.5 text-sm text-ink transition-colors placeholder:text-stone/70 focus:border-navy focus:outline-none";

  if (stato === "fatto") {
    return (
      <div className="flex flex-col items-start gap-5 border border-ink/10 bg-white px-8 py-16 shadow-[0_22px_50px_-30px_rgba(20,20,20,0.4)] md:px-12">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-navy text-2xl text-paper">
          ✓
        </span>
        <p className="font-serif text-3xl text-ink">Candidatura inviata.</p>
        <p className="max-w-md text-base leading-relaxed text-stone">
          L&apos;abbiamo ricevuta e la leggiamo. Se il profilo è in linea con
          quello che cerchiamo ricontattiamo noi.
        </p>
        <button
          type="button"
          onClick={() => setStato("fermo")}
          className="mt-2 text-xs uppercase tracking-[0.2em] text-stone underline transition-colors hover:text-navy"
        >
          Invia un&apos;altra candidatura
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 border border-ink/10 bg-white p-8 shadow-[0_22px_50px_-30px_rgba(20,20,20,0.4)] md:p-10"
    >
      {/* Honeypot anti-spam: invisibile agli umani */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <input
          name="nome"
          required
          placeholder="Nome e cognome *"
          className={campo}
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Email *"
          className={campo}
        />
        <input
          name="telefono"
          type="tel"
          required
          placeholder="Telefono *"
          className={campo}
        />
        <select name="area" required defaultValue="" className={campo}>
          <option value="" disabled>
            Area di interesse *
          </option>
          {AREE.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>
      </div>

      <label className="block">
        <span className="mb-2 block text-xs uppercase tracking-[0.16em] text-stone">
          Curriculum in PDF — max 5 MB
        </span>
        <input
          name="cv"
          type="file"
          accept="application/pdf"
          className="w-full cursor-pointer text-sm text-stone file:mr-4 file:cursor-pointer file:border file:border-ink/20 file:bg-paper file:px-5 file:py-2.5 file:text-xs file:uppercase file:tracking-[0.16em] file:text-ink file:transition-colors hover:file:bg-sand"
        />
      </label>

      <textarea
        name="messaggio"
        rows={4}
        placeholder="Due righe su di te: cosa sai fare, dove hai lavorato (facoltativo)"
        className={campo}
      />

      <label className="flex items-start gap-3 text-xs leading-relaxed text-stone">
        <input
          type="checkbox"
          name="consenso"
          required
          className="mt-0.5 h-4 w-4 shrink-0 accent-navy"
        />
        <span>
          Acconsento al trattamento dei dati personali per finalità di selezione
          del personale. *
        </span>
      </label>

      {stato === "errore" && (
        <p className="border-l-2 border-red-500 bg-red-50 py-3 pl-4 text-sm leading-relaxed text-red-800">
          {errore}
        </p>
      )}

      <button
        type="submit"
        disabled={stato === "invio"}
        className="group inline-flex items-center gap-3 bg-navy px-9 py-5 text-xs uppercase tracking-[0.2em] text-paper transition-colors hover:bg-navy-deep disabled:cursor-not-allowed disabled:opacity-60"
      >
        {stato === "invio" ? "Invio in corso…" : "Invia candidatura"}
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </button>
    </form>
  );
}
