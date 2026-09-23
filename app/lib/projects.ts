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
      "Un nuovo isolato residenziale a due passi dallo stadio, nel tessuto storico di Bergamo. Il cantiere in cui si vede il mestiere prima ancora dell'edificio.",
    intro:
      "Un nuovo isolato residenziale nel cuore di Bergamo, dove il cantiere racconta il mestiere prima ancora dell'edificio.",
    description: [
      "Via Ponte Pietra si inserisce in un tessuto urbano già scritto: palazzine anni Sessanta, capannoni storici, lo stadio poco oltre e, sullo sfondo, il profilo di Città Alta. Costruire qui significa lavorare in spazi stretti, con la città addosso.",
      "L'intervento è oggi nella fase strutturale: sbancamento completato, platea di fondazione gettata, casseri e armature in opera lungo tutto il fronte. È la fase in cui si decide tutto — geometrie, tolleranze, impermeabilizzazioni — e in cui la qualità di un edificio si costruisce davvero.",
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
      "Volumi netti e terrazze aggettanti nel cuore urbano di Bergamo. Un residenziale contemporaneo che ridisegna l'affaccio sulla piazza.",
    intro:
      "Un residenziale contemporaneo che ridisegna l'affaccio sulla piazza con volumi netti e terrazze profonde.",
    description: [
      "Affacciato su Piazza Giorgio Gaber, l'intervento reinterpreta l'isolato urbano con volumi netti e terrazze aggettanti risolte con una struttura a sbalzo continua. Il ritmo delle logge disegna una facciata in continuo movimento di luci e ombre.",
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
    cover: "/projects/nembro/03.jpg",
    gallery: [
      "/projects/nembro/03.jpg",
      "/projects/nembro/11.jpg",
      "/projects/nembro/01.jpg",
      "/projects/nembro/02.jpg",
      "/projects/nembro/04.jpg",
    ],
    excerpt:
      "Una torre residenziale dal disegno scultoreo, immersa nel verde. Terrazzi profondi e una facciata in continuo movimento di luci e ombre.",
    intro:
      "Una torre residenziale dal disegno scultoreo, immersa nel verde, dove ogni piano cerca la luce e il paesaggio.",
    description: [
      "Tower Baioni è una torre residenziale dal disegno scultoreo, affacciata sul parco e sulla valle alle porte di Nembro. I terrazzi profondi, fioriti e sfalsati di piano in piano, generano una facciata viva, sempre diversa secondo l'ora e la stagione.",
      "Il progetto mette al centro il rapporto con il paesaggio: ogni alloggio è orientato per catturare la luce e gli affacci sui monti, mentre il piano terra dialoga con il verde pubblico del quartiere.",
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
      "Rigenerazione urbana a Bergamo: dalla demolizione di un capannone dismesso a un nuovo abitare, raccontato in un padiglione Open Living.",
    intro:
      "Un'area industriale dismessa che torna alla città: demolizione, bonifica e un nuovo modo di raccontare la casa.",
    description: [
      "Via Baioni nasce da una demolizione. Al posto di un capannone dismesso — coperture in lamiera, capriate, pilastri prefabbricati — l'area è stata svuotata e restituita al quartiere come suolo su cui ricostruire. È il tipo di intervento che misura davvero un'impresa: gestione delle macerie, selezione dei materiali, sicurezza in un contesto urbano fitto.",
      "Accanto al cantiere abbiamo costruito un padiglione Open Living: un volume netto in grigio, aperto sul giardino con vetrate a tutta altezza e una pensilina profonda tagliata da linee di luce. Non un ufficio vendite, ma uno spazio in cui si possono toccare i materiali, la luce e le proporzioni del progetto prima che esista.",
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
      "Tre torri e 75 appartamenti nel borgo di Santa Caterina. Il complesso residenziale più grande che abbiamo costruito a Bergamo.",
    intro:
      "Tre torri residenziali nel borgo di Santa Caterina: 75 appartamenti, finiture di pregio, materiali a basso impatto.",
    description: [
      "Tower Santa Caterina è il nostro intervento più esteso in città: tre corpi residenziali per 75 appartamenti in via Suardi, nel borgo storico di Santa Caterina. Volumi chiari e grigi si alternano, con logge profonde e parapetti vetrati che alleggeriscono i fronti.",
      "Il progetto è stato costruito attorno alla casa campione: un appartamento completo, finito e arredato, visitabile durante i lavori. Un modo concreto di mostrare capitolato, finiture e luce reale invece di prometterli su carta.",
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
      "Quattro corpi bassi attorno a corti verdi, con tetti interamente coperti di fotovoltaico. Un residenziale che produce l'energia che consuma.",
    intro:
      "Un complesso residenziale a corte aperta, con i tetti interamente dedicati al fotovoltaico.",
    description: [
      "A Osio Sotto abbiamo lavorato per sottrazione: invece di un unico blocco, quattro corpi bassi disposti attorno a corti verdi e percorsi pedonali. Ogni alloggio ha una loggia profonda e un affaccio proprio, senza sovrapposizioni tra le visuali.",
      "Le coperture piane sono interamente occupate da campi fotovoltaici — la scelta più evidente dall'alto e la più concreta in bolletta. Sotto, pompe di calore e involucro ad alte prestazioni completano un edificio pensato per consumare poco e durare molto.",
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
      "Due corpi gemelli a Milano est, seguiti stagione dopo stagione dalle strutture al cappotto. Il nostro cantiere più urbano.",
    intro:
      "Due corpi residenziali gemelli in via Sbodio: il nostro cantiere milanese, seguito passo dopo passo.",
    description: [
      "Twin Palace è un intervento residenziale a Milano est, costruito su un lotto stretto e profondo tra la strada e il tessuto edilizio esistente. Due corpi gemelli, ritmati da logge e da una tessitura di facciata in due toni, chiudono l'isolato con un fronte compatto.",
      "Il cantiere è stato documentato mese dopo mese: dalle strutture in elevazione ai ponteggi, dalla posa del cappotto alla finitura. Una lavorazione ordinata in uno spazio minimo, dove la logistica vale quanto il progetto.",
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
      "Un residenziale di scala domestica alle porte di Milano, dove il verde privato conta quanto il costruito.",
    intro:
      "Un residenziale di scala domestica a Bollate, pensato attorno agli spazi aperti di ogni alloggio.",
    description: [
      "A Bollate abbiamo costruito un intervento volutamente contenuto nell'altezza, coerente con il tessuto di case e villette che lo circonda. Volumi semplici, intonaci chiari e logge che diventano stanze all'aperto per buona parte dell'anno.",
      "Il progetto dedica molto spazio al verde di pertinenza e ai percorsi: giardini privati al piano terra, terrazzi ai piani alti, e un attacco a terra curato che rende il complesso riconoscibile senza alzare la voce.",
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
      "Due corpi residenziali gemelli con rivestimenti ceramici cangianti. Doppia esposizione, corte condivisa e rivestimenti in ceramica cangiante.",
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
      "Il recupero di un palazzo storico affacciato sulla piazza pedonale di Saronno: facciata restaurata, interni nuovi, negozi al piano terra.",
    intro:
      "Un palazzo storico sulla piazza pedonale di Saronno, recuperato senza tradirne il volto.",
    description: [
      "Via Padre Luigi Monti è un intervento di recupero: un palazzo di impianto storico affacciato sulla piazza pedonale, con la sua facciata in tono caldo, il fregio decorativo sotto gronda e i balconcini in ferro battuto. Tutto questo è stato conservato e restaurato.",
      "Dietro la facciata, invece, si è ricostruito: impianti, distribuzioni e prestazioni energetiche portati agli standard di oggi, con spazi commerciali al piano terra che tengono viva la piazza. Il tipo di lavoro che si nota solo se è fatto male.",
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
      "Un palazzo di fine Ottocento nel centro storico di Saronno, riportato alla luce cornice per cornice.",
    intro:
      "Un palazzo di fine Ottocento nel centro storico di Saronno, riportato alla luce cornice per cornice.",
    description: [
      "In via Roma, dentro la zona a traffico limitato di Saronno, abbiamo lavorato su un edificio di fine Ottocento: cornici modanate sulle finestre, bugnato d'angolo, un balcone in ferro battuto sopra l'ingresso. Elementi che non si replicano e che vanno quindi recuperati, non sostituiti.",
      "Il restauro ha riguardato intonaci, decori e serramenti, con un lavoro paziente di pulitura e integrazione. Un cantiere di precisione, nel pieno centro, con tutti i vincoli che questo comporta.",
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
      "Palazzine in antracite e legno lungo una corte privata pavimentata. Un residenziale compatto che gioca sui contrasti di materia.",
    intro:
      "Palazzine in antracite e legno affacciate su una corte privata: un residenziale compatto che gioca sui contrasti.",
    description: [
      "A Caronno Pertusella il progetto si organizza lungo una corte privata pavimentata in autobloccanti, che serve tutti gli ingressi e i box. Le palazzine si fronteggiano a distanza ravvicinata, e proprio per questo ognuna ruota i propri affacci.",
      "La partitura dei materiali fa il resto: volumi in antracite alternati a inserti chiari e a campiture in legno, balconi profondi con parapetti metallici leggeri. Un linguaggio contemporaneo, controllato, senza gesti superflui.",
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
