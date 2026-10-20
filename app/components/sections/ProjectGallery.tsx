import Image from "next/image";
import Reveal from "../Reveal";

type ProjectGalleryProps = {
  images: string[];
  title: string;
  /** Prima immagine a tutta larghezza in apertura (default sì). */
  withHero?: boolean;
  /** Dopo l'eventuale apertura, la griglia parte con una coppia invece che con un'immagine piena. */
  pairFirst?: boolean;
};

// Editorial rhythm: first image full-width, then alternating wide/narrow pairs.
// pairFirst flips the grid to pair, full, pair, full…; withHero={false} drops the opening image.
export default function ProjectGallery({
  images,
  title,
  withHero = true,
  pairFirst = false,
}: ProjectGalleryProps) {
  const hero = withHero ? images[0] : undefined;
  const rest = withHero ? images.slice(1) : images;
  const fullAt = pairFirst ? 2 : 0;

  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-[1600px] px-6 pb-32 md:px-10">
        {hero && (
          <Reveal>
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-cream">
              <Image
                src={hero}
                alt={title}
                fill
                sizes="(max-width: 1024px) 100vw, 1600px"
                className="object-cover"
              />
            </div>
          </Reveal>
        )}

        <div className={`grid gap-6 md:grid-cols-2 ${hero ? "mt-6" : ""}`}>
          {rest.map((src, i) => {
            // Every 3rd image is full-width for editorial rhythm. A trailing
            // "half" with no partner would leave an empty column, so promote it.
            const isLonelyHalf =
              i === rest.length - 1 && i % 3 === (fullAt + 1) % 3;
            const isFull = i % 3 === fullAt || isLonelyHalf;
            return (
            <Reveal
              key={src}
              delay={(i % 2) * 120}
              className={isFull ? "md:col-span-2" : ""}
            >
              <div
                className={`relative w-full overflow-hidden bg-cream ${
                  isFull ? "aspect-[16/9]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={src}
                  alt={`${title} — immagine ${i + (hero ? 2 : 1)}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105"
                />
              </div>
            </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
