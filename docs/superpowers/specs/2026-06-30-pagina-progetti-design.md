# Pagina Progetti — Design

Data: 2026-06-30

## Obiettivo
Ricostruire la pagina `/progetti` e creare la pagina dedicata del singolo
progetto `/progetti/[slug]`, in stile Park Associati / mvpre.it: tipografia
grande, palette navy/cream/paper, animazioni allo scroll, look moderno.

## Vincoli
- Zero nuove dipendenze: animazioni con `position: sticky` + IntersectionObserver
  + transizioni CSS, coerenti con `Reveal` e i keyframe già presenti.
- Rispetto di `prefers-reduced-motion` (già gestito in `globals.css`).
- Non rompere i campi esistenti di `Project`.

## Pagina `/progetti`
1. **Hero full-screen**: immagine fissa d'impatto (cover Nembro), overlay scuro,
   titolo "Progetti" + eyebrow, parallax leggero, indicatore di scroll.
2. **Manifesto**: frase grande `font-serif` su `paper`, con `Reveal`.
3. **Sticky pinned scroll** (desktop, 2 colonne):
   - Sinistra: immagine `sticky top-0 h-screen`, crossfade + scale tra le cover.
   - Destra: 5 blocchi `min-h-screen`, ognuno = progetto (numero, titolo,
     città · categoria, anno/stato, excerpt, CTA). IntersectionObserver
     determina l'immagine attiva.
   - Mobile: fallback a card impilate full-width, cliccabili.
4. **CTA finale**: riuso del componente `CTA`.

## Pagina `/progetti/[slug]`
- Route dinamica con `generateStaticParams` + `generateMetadata`, `getProject`,
  `notFound()` su slug errato.
1. Hero progetto full-screen (cover + titolo + dati chiave).
2. Descrizione lunga + griglia dati tecnici.
3. Gallery editoriale a tutto schermo con reveal allo scroll.
4. Link al progetto successivo (navigazione circolare).

## Dati
Estendere `Project` con campi opzionali: `intro`, `description` (paragrafi),
`facts` (label/valore). Riempire i 5 progetti con testi/specifiche plausibili.

## Componenti
- `app/progetti/page.tsx` — riscritta.
- `app/components/sections/ProjectsHero.tsx` — hero parallax.
- `app/components/sections/StickyProjects.tsx` — sticky pinned scroll (client).
- `app/progetti/[slug]/page.tsx` — pagina dettaglio.
- `app/components/sections/ProjectGallery.tsx` — gallery dettaglio (client/reveal).
