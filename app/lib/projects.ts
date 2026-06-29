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
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
