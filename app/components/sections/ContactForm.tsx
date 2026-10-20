"use client";

import { useState } from "react";

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow text-stone">
        {label}
        {required && <span className="text-navy"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-3 w-full border-b border-ink/20 bg-transparent py-3 text-ink outline-none transition-colors focus:border-navy"
      />
    </div>
  );
}

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [nome, setNome] = useState("");
  const [invio, setInvio] = useState(false);
  const [errore, setErrore] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    if (!ACCESS_KEY) {
      setErrore(
        "Il modulo non è ancora collegato all'account Web3Forms. Nel frattempo potete scrivere a info@futurasrl.net."
      );
      return;
    }

    setInvio(true);
    setErrore("");
    const data = new FormData(form);
    data.append("access_key", ACCESS_KEY);
    data.append("subject", "Richiesta di contatto dal sito");
    data.append("from_name", "Sito Futura");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setNome(String(data.get("nome") ?? "").trim());
        setSent(true);
        form.reset();
      } else {
        setErrore(json.message || "Invio non riuscito. Vi invitiamo a riprovare tra qualche minuto.");
      }
    } catch {
      setErrore(
        "Non è stato possibile inviare il messaggio. Verificate la connessione e riprovate."
      );
    } finally {
      setInvio(false);
    }
  }

  if (sent) {
    return (
      <div className="flex h-full flex-col items-start justify-center border border-ink/10 bg-white px-8 py-16 md:px-12">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-navy text-2xl text-paper">
          ✓
        </span>
        <h3 className="mt-8 font-serif text-3xl text-ink md:text-4xl">
          Grazie{nome ? `, ${nome}` : ""}!
        </h3>
        <p className="mt-4 max-w-md text-base leading-relaxed text-stone">
          Abbiamo ricevuto la vostra richiesta. Risponderemo al più presto per
          approfondire il progetto.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="group mt-10 inline-flex items-center gap-3 border border-ink/30 px-8 py-4 text-xs uppercase tracking-[0.2em] text-ink transition-colors hover:border-navy hover:bg-navy hover:text-paper"
        >
          Invia un altro messaggio
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot anti-spam: invisibile agli umani */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Nome" name="nome" required />
        <Field label="Cognome" name="cognome" />
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Email" name="email" type="email" required />
        <Field label="Telefono" name="telefono" type="tel" />
      </div>
      <div>
        <label htmlFor="messaggio" className="eyebrow text-stone">
          Messaggio<span className="text-navy"> *</span>
        </label>
        <textarea
          id="messaggio"
          name="messaggio"
          rows={5}
          required
          className="mt-3 w-full resize-none border-b border-ink/20 bg-transparent py-3 text-ink outline-none transition-colors focus:border-navy"
        />
      </div>
      {errore && (
        <p className="border-l-2 border-red-500 bg-red-50 py-3 pl-4 text-sm leading-relaxed text-red-800">
          {errore}
        </p>
      )}
      <button
        type="submit"
        disabled={invio}
        className="group inline-flex items-center gap-3 bg-ink px-9 py-5 text-xs uppercase tracking-[0.2em] text-white transition-colors hover:bg-navy disabled:cursor-not-allowed disabled:opacity-60"
      >
        {invio ? "Invio in corso…" : "Invia messaggio"}
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </button>
    </form>
  );
}
