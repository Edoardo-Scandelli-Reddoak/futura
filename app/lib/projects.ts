export type Fact = { label: string; value: string };

export type Category = "Residenziale" | "Direzionale" | "Mixed-use";

export type Project = {
  slug: string;
  title: string;
  city: string;
  province: string;
  address: string;
  category: Category;
  /** Omesso quando non abbiamo una data verificata: meglio niente che un anno inventato. */
  year?: string;
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
    slug: "bergamo-ponte-pietra",
    title: "Via Ponte Pietra",
    city: "Bergamo",
    province: "BG",
    address: "Via Ponte Pietra",
    category: "Residenziale",
    year: "2025",
    status: "In costruzione",
    cover: "/projects/ponte-pietra/01.jpg",
    gallery: [
      "/projects/ponte-pietra/01.jpg",
      "/projects/ponte-pietra/05.jpg",
      "/projects/ponte-pietra/03.jpg",
      "/projects/ponte-pietra/04.jpg",
      "/projects/ponte-pietra/02.jpg",
      "/projects/ponte-pietra/06.jpg",
    ],
    excerpt:
      "Un nuovo isolato residenziale in prossimità dello stadio, nel tessuto consolidato di Bergamo. Un cantiere complesso, condotto in spazi ristretti.",
    intro:
      "Un nuovo isolato residenziale nel tessuto consolidato di Bergamo, realizzato in un contesto urbano particolarmente vincolato.",
    description: [
      "L'intervento di Via Ponte Pietra si inserisce in un tessuto urbano consolidato, caratterizzato da edilizia residenziale degli anni Sessanta, capannoni di impianto storico e la prossimità dello stadio, con il profilo di Città Alta sullo sfondo. Costruire in questo contesto richiede una gestione accurata degli spazi di cantiere e delle interferenze con la viabilità.",
      "I lavori si trovano attualmente nella fase strutturale: sbancamento completato, platea di fondazione gettata, casseri e armature in opera lungo l'intero fronte. È la fase in cui si definiscono geometrie, tolleranze e impermeabilizzazioni, e in cui si determina la qualità complessiva dell'edificio.",
    ],
    facts: [
      { label: "Località", value: "Bergamo (BG)" },
      { label: "Anno", value: "2025" },
      { label: "Stato", value: "In costruzione" },
      { label: "Tipologia", value: "Residenziale" },
      { label: "Fase", value: "Strutture" },
      { label: "Contesto", value: "Area stadio" },
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
      "Volumi netti e terrazze aggettanti nel centro di Bergamo: un intervento residenziale contemporaneo affacciato sulla piazza.",
    intro:
      "Un intervento residenziale contemporaneo che ridefinisce il fronte sulla piazza attraverso volumi netti e terrazze profonde.",
    description: [
      "Affacciato su Piazza Giorgio Gaber, l'intervento reinterpreta l'isolato urbano con volumi netti e terrazze aggettanti, realizzate mediante una struttura a sbalzo continua. Il ritmo delle logge genera una facciata in costante variazione di luci e ombre.",
      "Gli appartamenti, disponibili in tagli differenziati, condividono spazi comuni curati e un attacco a terra permeabile, che restituisce alla piazza un fronte attivo.",
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
    cover: "/projects/nembro/03.jpg",
    gallery: [
      "/projects/nembro/03.jpg",
      "/projects/nembro/11.jpg",
      "/projects/nembro/01.jpg",
      "/projects/nembro/02.jpg",
      "/projects/nembro/04.jpg",
    ],
    excerpt:
      "Una torre residenziale dal disegno articolato, immersa nel verde, con terrazzi profondi e una facciata in continua variazione.",
    intro:
      "Una torre residenziale dal disegno articolato, immersa nel verde, concepita per ottimizzare illuminazione naturale e affacci.",
    description: [
      "Tower Baioni è una torre residenziale affacciata sul parco e sulla valle, alle porte di Nembro. I terrazzi, profondi e sfalsati di piano in piano, generano una facciata dinamica che muta con la luce e con le stagioni.",
      "Il progetto pone al centro il rapporto con il paesaggio: ogni alloggio è orientato per massimizzare l'illuminazione naturale e gli affacci sui rilievi circostanti, mentre il piano terra si relaziona con il verde pubblico del quartiere.",
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
      "Un fronte urbano dai colori decisi che accoglie residenze e attività commerciali in un unico intervento a funzione mista.",
    intro:
      "Un fronte urbano dai colori decisi, dove residenze e attività commerciali convivono in un'identità architettonica unitaria.",
    description: [
      "Via Gaudenzio Ferrari è un intervento a funzione mista: un fronte urbano dai colori decisi che accoglie residenze ai piani superiori e attività commerciali al piano terra, restituendo vitalità alla strada.",
      "La sovrapposizione delle funzioni è risolta con ingressi distinti e una scansione di facciata che distingue con chiarezza le diverse destinazioni d'uso.",
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
  {
    slug: "bergamo-baioni",
    title: "Via Baioni",
    city: "Bergamo",
    province: "BG",
    address: "Via Baioni",
    category: "Residenziale",
    year: "2025",
    status: "Realizzato",
    cover: "/projects/bergamo-baioni/04.jpg",
    gallery: [
      "/projects/bergamo-baioni/04.jpg",
      "/projects/bergamo-baioni/01.jpg",
      "/projects/bergamo-baioni/02.jpg",
      "/projects/bergamo-baioni/05.jpg",
      "/projects/bergamo-baioni/03.jpg",
      "/projects/bergamo-baioni/06.jpg",
    ],
    excerpt:
      "Rigenerazione urbana a Bergamo: dalla demolizione di un capannone dismesso a un nuovo intervento residenziale, presentato in un padiglione Open Living.",
    intro:
      "Un'area industriale dismessa restituita alla città attraverso demolizione, bonifica e un nuovo intervento residenziale.",
    description: [
      "L'intervento di Via Baioni ha avuto origine da una demolizione. Al posto di un capannone dismesso, con coperture in lamiera, capriate e pilastri prefabbricati, l'area è stata liberata e restituita al quartiere come superficie edificabile. Si tratta di un intervento che richiede particolare competenza: gestione dei materiali di risulta, selezione e recupero dei materiali, sicurezza in un contesto urbano densamente edificato.",
      "Accanto al cantiere è stato realizzato un padiglione Open Living: un volume netto di colore grigio, aperto sul giardino con vetrate a tutta altezza e una pensilina profonda attraversata da linee di luce. Più che un ufficio vendite, uno spazio che consente di valutare materiali, illuminazione e proporzioni del progetto prima della sua realizzazione.",
    ],
    facts: [
      { label: "Località", value: "Bergamo (BG)" },
      { label: "Anno", value: "2025" },
      { label: "Stato", value: "Realizzato" },
      { label: "Tipologia", value: "Residenziale" },
      { label: "Intervento", value: "Demolizione e ricostruzione" },
      { label: "Spazi", value: "Padiglione Open Living" },
    ],
  },
  {
    slug: "bergamo-suardi",
    title: "Tower Santa Caterina",
    city: "Bergamo",
    province: "BG",
    address: "Via G. Suardi, 30",
    category: "Residenziale",
    status: "Realizzato",
    cover: "/projects/bergamo-suardi/01.jpg",
    gallery: [
      "/projects/bergamo-suardi/01.jpg",
      "/projects/bergamo-suardi/02.jpg",
      "/projects/bergamo-suardi/03.jpg",
      "/projects/bergamo-suardi/04.jpg",
      "/projects/bergamo-suardi/05.jpg",
    ],
    excerpt:
      "Tre torri e 75 appartamenti nel borgo di Santa Caterina: il nostro complesso residenziale di maggiori dimensioni a Bergamo.",
    intro:
      "Tre torri residenziali nel borgo di Santa Caterina: 75 appartamenti, finiture di pregio e materiali a basso impatto ambientale.",
    description: [
      "Tower Santa Caterina è il nostro intervento di maggiore estensione in città: tre corpi residenziali per complessivi 75 appartamenti in via Suardi, nel borgo storico di Santa Caterina. Volumi chiari e grigi si alternano, con logge profonde e parapetti vetrati che alleggeriscono i fronti.",
      "Il progetto è stato sviluppato attorno alla casa campione: un appartamento completo, finito e arredato, visitabile durante l'esecuzione dei lavori. Una soluzione che consente di verificare capitolato, finiture e qualità degli ambienti prima dell'acquisto.",
    ],
    facts: [
      { label: "Località", value: "Bergamo (BG)" },
      { label: "Stato", value: "Realizzato" },
      { label: "Tipologia", value: "Residenziale" },
      { label: "Unità", value: "75 appartamenti" },
      { label: "Corpi", value: "3 torri" },
      { label: "Quartiere", value: "Borgo Santa Caterina" },
    ],
  },
  {
    slug: "osio-sotto",
    title: "Corso Italia",
    city: "Osio Sotto",
    province: "BG",
    address: "Corso Italia",
    category: "Residenziale",
    year: "2025",
    status: "Realizzato",
    cover: "/projects/osio-sotto/01.jpg",
    gallery: [
      "/projects/osio-sotto/01.jpg",
      "/projects/osio-sotto/04.jpg",
      "/projects/osio-sotto/02.jpg",
      "/projects/osio-sotto/05.jpg",
      "/projects/osio-sotto/03.jpg",
      "/projects/osio-sotto/06.jpg",
    ],
    excerpt:
      "Quattro corpi bassi disposti attorno a corti verdi, con coperture interamente dedicate al fotovoltaico.",
    intro:
      "Un complesso residenziale a corte aperta, con i tetti interamente dedicati al fotovoltaico.",
    description: [
      "A Osio Sotto il volume edificabile è stato frazionato: anziché un unico blocco, quattro corpi di altezza contenuta disposti attorno a corti verdi e percorsi pedonali. Ogni alloggio dispone di una loggia profonda e di un affaccio autonomo, senza sovrapposizioni tra le visuali.",
      "Le coperture piane ospitano campi fotovoltaici estesi all'intera superficie disponibile. Pompe di calore e un involucro ad alte prestazioni completano un edificio progettato per contenere i consumi e mantenere nel tempo le proprie prestazioni.",
    ],
    facts: [
      { label: "Località", value: "Osio Sotto (BG)" },
      { label: "Anno", value: "2025" },
      { label: "Stato", value: "Realizzato" },
      { label: "Tipologia", value: "Residenziale" },
      { label: "Impianto", value: "Fotovoltaico in copertura" },
      { label: "Composizione", value: "4 corpi a corte" },
    ],
  },
  {
    slug: "milano-sbodio",
    title: "Twin Palace",
    city: "Milano",
    province: "MI",
    address: "Via Sbodio",
    category: "Residenziale",
    year: "2025",
    status: "In costruzione",
    cover: "/projects/milano-sbodio/03.jpg",
    gallery: [
      "/projects/milano-sbodio/03.jpg",
      "/projects/milano-sbodio/01.jpg",
      "/projects/milano-sbodio/02.jpg",
      "/projects/milano-sbodio/06.jpg",
      "/projects/milano-sbodio/05.jpg",
      "/projects/milano-sbodio/04.jpg",
    ],
    excerpt:
      "Due corpi gemelli a Milano est, seguiti dalle strutture in elevazione fino alle finiture: il nostro cantiere in contesto più densamente urbanizzato.",
    intro:
      "Due corpi residenziali gemelli in via Sbodio: il nostro cantiere milanese, seguito in ogni fase esecutiva.",
    description: [
      "Twin Palace è un intervento residenziale a Milano est, realizzato su un lotto stretto e profondo compreso tra la strada e il tessuto edilizio esistente. Due corpi gemelli, scanditi da logge e da una tessitura di facciata bicromatica, completano l'isolato con un fronte compatto.",
      "Il cantiere è stato documentato mese dopo mese, dalle strutture in elevazione al montaggio dei ponteggi, dalla posa del cappotto alle finiture. Un'organizzazione rigorosa in uno spazio operativo ridotto, dove la logistica incide quanto il progetto.",
    ],
    facts: [
      { label: "Località", value: "Milano (MI)" },
      { label: "Anno", value: "2025" },
      { label: "Stato", value: "In costruzione" },
      { label: "Tipologia", value: "Residenziale" },
      { label: "Corpi", value: "2 edifici gemelli" },
      { label: "Fase", value: "Facciate e finiture" },
    ],
  },
  {
    slug: "bollate-bixio",
    title: "Via Nino Bixio",
    city: "Bollate",
    province: "MI",
    address: "Via Nino Bixio",
    category: "Residenziale",
    status: "Realizzato",
    cover: "/projects/bollate-bixio/01.jpg",
    gallery: [
      "/projects/bollate-bixio/01.jpg",
      "/projects/bollate-bixio/02.jpg",
      "/projects/bollate-bixio/03.jpg",
      "/projects/bollate-bixio/04.jpg",
    ],
    excerpt:
      "Un intervento residenziale di scala contenuta alle porte di Milano, in cui gli spazi verdi privati hanno lo stesso rilievo del costruito.",
    intro:
      "Un intervento residenziale di scala contenuta a Bollate, organizzato attorno agli spazi aperti di pertinenza di ogni alloggio.",
    description: [
      "A Bollate è stato realizzato un intervento volutamente contenuto in altezza, coerente con il tessuto di case unifamiliari circostante. Volumi semplici, intonaci chiari e logge utilizzabili come spazi all'aperto per buona parte dell'anno.",
      "Il progetto riserva ampio spazio al verde di pertinenza e ai percorsi: giardini privati al piano terra, terrazzi ai piani superiori e un attacco a terra curato, che conferisce al complesso un carattere riconoscibile e misurato.",
    ],
    facts: [
      { label: "Località", value: "Bollate (MI)" },
      { label: "Stato", value: "Realizzato" },
      { label: "Tipologia", value: "Residenziale" },
      { label: "Contesto", value: "Tessuto residenziale" },
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
    cover: "/projects/saronno-dante/04.jpeg",
    gallery: [
      "/projects/saronno-dante/04.jpeg",
      "/projects/saronno-dante/03.jpeg",
      "/projects/saronno-dante/05.jpeg",
      "/projects/saronno-dante/06.jpeg",
      "/projects/saronno-dante/02.jpeg",
    ],
    excerpt:
      "Due corpi residenziali gemelli rivestiti in ceramica cangiante, con alloggi a doppia esposizione affacciati su una corte condivisa.",
    intro:
      "Due corpi residenziali gemelli rivestiti in ceramica cangiante, organizzati attorno a una corte condivisa.",
    description: [
      "L'intervento di Via Dante si compone di due corpi residenziali gemelli, rivestiti in ceramica cangiante che varia tonalità al variare della luce. Tra i due volumi si apre una corte condivisa, elemento centrale dell'impianto.",
      "Gli alloggi privilegiano la doppia esposizione e ambienti interni luminosi e flessibili, con logge protette utilizzabili per buona parte dell'anno.",
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
    slug: "saronno-monti",
    title: "Via Padre Luigi Monti",
    city: "Saronno",
    province: "VA",
    address: "Via Padre Luigi Monti",
    category: "Residenziale",
    status: "Realizzato",
    cover: "/projects/saronno-monti/01.jpg",
    gallery: [
      "/projects/saronno-monti/01.jpg",
      "/projects/saronno-monti/02.jpg",
      "/projects/saronno-monti/03.jpg",
    ],
    excerpt:
      "Il recupero di un palazzo storico affacciato sulla piazza pedonale di Saronno: facciata restaurata, interni rinnovati e spazi commerciali al piano terra.",
    intro:
      "Un palazzo storico sulla piazza pedonale di Saronno, recuperato nel rispetto del suo carattere originario.",
    description: [
      "Via Padre Luigi Monti è un intervento di recupero edilizio su un palazzo di impianto storico affacciato sulla piazza pedonale. La facciata dai toni caldi, il fregio decorativo sotto gronda e i balconcini in ferro battuto sono stati integralmente conservati e restaurati.",
      "Dietro la facciata l'edificio è stato invece ricostruito: impianti, distribuzione interna e prestazioni energetiche sono stati adeguati agli standard attuali, con spazi commerciali al piano terra che contribuiscono alla vitalità della piazza.",
    ],
    facts: [
      { label: "Località", value: "Saronno (VA)" },
      { label: "Stato", value: "Realizzato" },
      { label: "Tipologia", value: "Residenziale" },
      { label: "Intervento", value: "Recupero edilizio" },
      { label: "Piano terra", value: "Spazi commerciali" },
    ],
  },
  {
    slug: "saronno-roma",
    title: "Via Roma",
    city: "Saronno",
    province: "VA",
    address: "Via Roma",
    category: "Residenziale",
    status: "Realizzato",
    cover: "/projects/saronno-roma/01.jpg",
    gallery: ["/projects/saronno-roma/01.jpg"],
    excerpt:
      "Il restauro conservativo della facciata di un palazzo di fine Ottocento, nel centro storico di Saronno.",
    intro:
      "Un palazzo di fine Ottocento nel centro storico di Saronno, restaurato nei suoi elementi decorativi originali.",
    description: [
      "In via Roma, all'interno della zona a traffico limitato di Saronno, l'intervento ha riguardato un edificio di fine Ottocento caratterizzato da cornici modanate alle finestre, bugnato d'angolo e un balcone in ferro battuto sopra l'ingresso. Elementi non riproducibili, che richiedono un recupero conservativo anziché la sostituzione.",
      "Il restauro ha interessato intonaci, apparati decorativi e serramenti, attraverso un accurato lavoro di pulitura e integrazione. Un cantiere di precisione in pieno centro storico, con i vincoli operativi che tale contesto comporta.",
    ],
    facts: [
      { label: "Località", value: "Saronno (VA)" },
      { label: "Stato", value: "Realizzato" },
      { label: "Tipologia", value: "Residenziale" },
      { label: "Intervento", value: "Restauro di facciata" },
      { label: "Contesto", value: "Centro storico / ZTL" },
    ],
  },
  {
    slug: "caronno-monte-generoso",
    title: "Via Monte Generoso",
    city: "Caronno Pertusella",
    province: "VA",
    address: "Via Monte Generoso",
    category: "Residenziale",
    status: "Realizzato",
    cover: "/projects/caronno/02.jpg",
    gallery: [
      "/projects/caronno/02.jpg",
      "/projects/caronno/03.jpg",
      "/projects/caronno/01.jpg",
    ],
    excerpt:
      "Palazzine in antracite e legno affacciate su una corte privata pavimentata: un intervento residenziale compatto fondato sul contrasto dei materiali.",
    intro:
      "Palazzine in antracite e legno affacciate su una corte privata: un intervento residenziale compatto e matericamente articolato.",
    description: [
      "A Caronno Pertusella l'impianto si sviluppa lungo una corte privata pavimentata in autobloccanti, che distribuisce tutti gli ingressi e i box. Le palazzine si fronteggiano a distanza ravvicinata: per questa ragione ciascuna orienta diversamente i propri affacci.",
      "La partitura dei materiali completa il progetto: volumi in antracite alternati a inserti chiari e a campiture in legno, balconi profondi con parapetti metallici di sezione ridotta. Un linguaggio contemporaneo e misurato.",
    ],
    facts: [
      { label: "Località", value: "Caronno Pertusella (VA)" },
      { label: "Stato", value: "Realizzato" },
      { label: "Tipologia", value: "Residenziale" },
      { label: "Impianto", value: "Palazzine a corte" },
      { label: "Materiali", value: "Antracite, legno, intonaco" },
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
