export type Fact = { label: string; value: string };

export type Project = {
  slug: string;
  title: string;
  city: string;
  province: string;
  address: string;
  category: "Residenziale" | "Direzionale" | "Mixed-use";
  year: string;
  status: "Realizzato" | "In costruzione" | "In progetto";
  cover: string;
  gallery: string[];
  excerpt: string;
  /** Frase d'apertura della pagina dedicata. */
  intro: string;
  /** Descrizione lunga: uno o più paragrafi. */
  description: string[];
  /** Dati tecnici mostrati nella griglia della pagina dedicata. */
  facts: Fact[];
};

export const projects: Project[] = [
  {
    slug: "solaro",
    title: "Via Como 51",
    city: "Solaro",
    province: "MI",
    address: "Via Como, 51",
    category: "Direzionale",
    year: "2023",
    status: "Realizzato",
    cover: "/projects/solaro/01.jpeg",
    gallery: [
      "/projects/solaro/01.jpeg",
      "/projects/solaro/02.jpeg",
      "/projects/solaro/03.jpeg",
      "/projects/solaro/04.jpeg",
    ],
    excerpt:
      "La nostra sede direzionale: un involucro vetrato che dialoga con la luce, fra specchi d'acqua e verde, pensato come manifesto del nostro modo di costruire.",
    intro:
      "Un edificio direzionale concepito come manifesto: trasparenza, luce e rigore costruttivo al servizio del lavoro.",
    description: [
      "Via Como 51 è la sede direzionale di Futura, pensata come dichiarazione d'intenti. L'involucro vetrato continuo cattura la luce del giorno e la restituisce filtrata negli spazi di lavoro, mentre gli specchi d'acqua e il verde perimetrale ammorbidiscono il confine tra interno ed esterno.",
      "La pianta libera e i solai a campata ampia garantiscono flessibilità totale negli allestimenti, oggi e in futuro. Materiali durevoli, impianti ad alta efficienza e una gestione attenta degli apporti solari rendono l'edificio sobrio nei consumi e generoso nel comfort.",
    ],
    facts: [
      { label: "Località", value: "Solaro (MI)" },
      { label: "Anno", value: "2023" },
      { label: "Stato", value: "Realizzato" },
      { label: "Tipologia", value: "Direzionale" },
      { label: "Superficie", value: "2.400 m²" },
      { label: "Certificazione", value: "Classe A" },
    ],
  },
  {
    slug: "bergamo-gaber",
    title: "Piazza G. Gaber",
    city: "Bergamo",
    province: "BG",
    address: "Piazza Giorgio Gaber",
    category: "Residenziale",
    year: "2022",
    status: "Realizzato",
    cover: "/projects/bergamo-gaber/01.jpg",
    gallery: [
      "/projects/bergamo-gaber/01.jpg",
      "/projects/bergamo-gaber/02.jpg",
      "/projects/bergamo-gaber/03.jpeg",
      "/projects/bergamo-gaber/04.jpeg",
      "/projects/bergamo-gaber/05.jpeg",
      "/projects/bergamo-gaber/06.jpeg",
    ],
    excerpt:
      "Volumi netti e terrazze aggettanti nel cuore urbano di Bergamo. Un residenziale contemporaneo che ridisegna l'affaccio sulla piazza.",
    intro:
      "Un residenziale contemporaneo che ridisegna l'affaccio sulla piazza con volumi netti e terrazze profonde.",
    description: [
      "Affacciato su Piazza Giorgio Gaber, l'intervento reinterpreta l'isolato urbano con volumi netti e terrazze aggettanti che proiettano la vita domestica verso la città. Il ritmo delle logge disegna una facciata in continuo movimento di luci e ombre.",
      "Gli appartamenti, tagliati su misure diverse, condividono spazi comuni curati e un attacco a terra permeabile, che restituisce alla piazza un fronte attivo e accogliente.",
    ],
    facts: [
      { label: "Località", value: "Bergamo (BG)" },
      { label: "Anno", value: "2022" },
      { label: "Stato", value: "Realizzato" },
      { label: "Tipologia", value: "Residenziale" },
      { label: "Unità", value: "24 appartamenti" },
      { label: "Piani", value: "7" },
    ],
  },
  {
    slug: "nembro",
    title: "Tower Baioni",
    city: "Nembro",
    province: "BG",
    address: "Via Stazione",
    category: "Residenziale",
    year: "2025",
    status: "In costruzione",
    cover: "/projects/nembro/06.webp",
    gallery: [
      "/projects/nembro/06.webp",
      "/projects/nembro/05.webp",
      "/projects/nembro/07.webp",
      "/projects/nembro/08.webp",
      "/projects/nembro/11.jpg",
      "/projects/nembro/01.jpg",
    ],
    excerpt:
      "Una torre residenziale dal disegno scultoreo, immersa nel verde. Terrazzi profondi e una facciata in continuo movimento di luci e ombre.",
    intro:
      "Una torre residenziale dal disegno scultoreo, immersa nel verde, dove ogni piano cerca la luce e il paesaggio.",
    description: [
      "Tower Baioni è una torre residenziale dal disegno scultoreo, immersa nel verde alle porte di Nembro. I terrazzi profondi ruotano di piano in piano, generando una facciata viva, sempre diversa secondo l'ora e la stagione.",
      "Il progetto mette al centro il rapporto con il paesaggio: ogni alloggio è orientato per catturare la luce e gli affacci sulla valle, mentre il piano terra dialoga con un parco di pertinenza aperto al quartiere.",
    ],
    facts: [
      { label: "Località", value: "Nembro (BG)" },
      { label: "Anno", value: "2025" },
      { label: "Stato", value: "In costruzione" },
      { label: "Tipologia", value: "Residenziale" },
      { label: "Altezza", value: "11 piani" },
      { label: "Unità", value: "40 appartamenti" },
    ],
  },
  {
    slug: "saronno-dante",
    title: "Via Dante",
    city: "Saronno",
    province: "VA",
    address: "Via Dante Alighieri",
    category: "Residenziale",
    year: "2024",
    status: "Realizzato",
    cover: "/projects/saronno-dante/01.jpeg",
    gallery: [
      "/projects/saronno-dante/01.jpeg",
      "/projects/saronno-dante/02.jpeg",
      "/projects/saronno-dante/03.jpeg",
      "/projects/saronno-dante/04.jpeg",
      "/projects/saronno-dante/05.jpeg",
      "/projects/saronno-dante/06.jpeg",
    ],
    excerpt:
      "Due corpi residenziali gemelli con rivestimenti ceramici cangianti. Spazi luminosi e una corte condivisa che fa comunità.",
    intro:
      "Due corpi residenziali gemelli con rivestimenti ceramici cangianti e una corte condivisa che fa comunità.",
    description: [
      "L'intervento di Via Dante si compone di due corpi residenziali gemelli, rivestiti in ceramica cangiante che cambia tono con la luce. Tra i due volumi si apre una corte condivisa, cuore sociale del progetto.",
      "Gli alloggi privilegiano la doppia esposizione e spazi interni luminosi e flessibili, con logge protette che diventano stanze all'aperto per buona parte dell'anno.",
    ],
    facts: [
      { label: "Località", value: "Saronno (VA)" },
      { label: "Anno", value: "2024" },
      { label: "Stato", value: "Realizzato" },
      { label: "Tipologia", value: "Residenziale" },
      { label: "Unità", value: "32 appartamenti" },
      { label: "Corpi", value: "2 edifici" },
    ],
  },
  {
    slug: "saronno-ferrari",
    title: "Via Gaudenzio Ferrari",
    city: "Saronno",
    province: "VA",
    address: "Via Gaudenzio Ferrari",
    category: "Mixed-use",
    year: "2023",
    status: "Realizzato",
    cover: "/projects/saronno-ferrari/03.jpeg",
    gallery: [
      "/projects/saronno-ferrari/03.jpeg",
      "/projects/saronno-ferrari/04.jpeg",
      "/projects/saronno-ferrari/01.jpg",
      "/projects/saronno-ferrari/02.jpg",
    ],
    excerpt:
      "Un fronte urbano dai colori decisi che ospita residenze e attività commerciali. Identità forte e funzioni che si intrecciano.",
    intro:
      "Un fronte urbano dai colori decisi dove residenze e attività commerciali si intrecciano in un'unica identità.",
    description: [
      "Via Gaudenzio Ferrari è un intervento a funzione mista: un fronte urbano dai colori decisi che ospita residenze ai piani alti e attività commerciali al piano terra, restituendo vitalità alla strada.",
      "La sovrapposizione delle funzioni è gestita con ingressi distinti e una scansione di facciata che dichiara con chiarezza i diversi usi, costruendo un'identità forte e riconoscibile.",
    ],
    facts: [
      { label: "Località", value: "Saronno (VA)" },
      { label: "Anno", value: "2023" },
      { label: "Stato", value: "Realizzato" },
      { label: "Tipologia", value: "Mixed-use" },
      { label: "Funzioni", value: "Residenze + retail" },
      { label: "Piani", value: "6" },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i === -1) return projects[0];
  return projects[(i + 1) % projects.length];
}
