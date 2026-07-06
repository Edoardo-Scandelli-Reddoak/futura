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

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [nome, setNome] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    // TODO: collegare a un endpoint/servizio email (es. Resend, form action).
    setNome(String(data.get("nome") ?? "").trim());
    setSent(true);
  };

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
          Abbiamo ricevuto la tua richiesta. Ti risponderemo al più presto per
          parlare del tuo progetto.
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
      <button
        type="submit"
        className="group inline-flex items-center gap-3 bg-ink px-9 py-5 text-xs uppercase tracking-[0.2em] text-white transition-colors hover:bg-navy"
      >
        Invia messaggio
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </button>
    </form>
  );
}
