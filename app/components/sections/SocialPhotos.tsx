import Image from "next/image";
import Reveal from "../Reveal";

// Foto riprese dal vecchio sito (futurasrl.net/impegno-sociale).
// Ordine = griglia: stretta + larga, poi larga + stretta.
const photos: {
  src: string;
  alt: string;
  caption: string;
  wide?: boolean;
  position?: string;
}[] = [
  {
    src: "/team/impegno-ledwall.jpg",
    alt: "Il marchio Futura sul ledwall dello stadio",
    caption: "Virtus Entella — il marchio Futura allo stadio",
  },
  {
    src: "/team/impegno-saronno.jpg",
    alt: "Campagna «Avanti Saronno!» con la maglia sponsorizzata Futura",
    caption: "FBC Saronno 1910 — la campagna «Avanti Saronno!»",
    wide: true,
    position: "object-top",
  },
  {
    src: "/team/impegno-stadio.jpg",
    alt: "Tribuna dello stadio con lo striscione Futura",
    caption: "Virtus Entella — la tribuna con lo striscione Futura",
    wide: true,
    position: "object-[50%_70%]",
  },
  {
    src: "/team/impegno-squadra.jpg",
    alt: "Squadra di calcio con le maglie Futura",
    caption: "In campo con le maglie Futura",
  },
];

/** Two staggered rows: narrow + wide, then wide + narrow. */
export default function SocialPhotos({
  captions = false,
  className = "",
}: {
  captions?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`grid gap-4 md:auto-rows-[clamp(240px,26vw,420px)] md:grid-cols-11 md:gap-6 ${className}`}
    >
      {photos.map((photo, i) => (
        <Reveal
          key={photo.src}
          delay={(i % 2) * 120}
          className={photo.wide ? "md:col-span-7" : "md:col-span-4"}
        >
          <figure className="relative aspect-[4/3] w-full overflow-hidden bg-cream md:aspect-auto md:h-full">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes={photo.wide ? "(max-width: 768px) 100vw, 60vw" : "(max-width: 768px) 100vw, 35vw"}
              className={`object-cover ${photo.position ?? ""}`}
            />
            {captions && (
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-5 pb-4 pt-12 text-xs leading-relaxed text-white/90 md:px-6 md:pb-5">
                {photo.caption}
              </figcaption>
            )}
          </figure>
        </Reveal>
      ))}
    </div>
  );
}
