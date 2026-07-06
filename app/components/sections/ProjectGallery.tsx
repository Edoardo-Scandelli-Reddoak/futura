import Image from "next/image";
import Reveal from "../Reveal";

type ProjectGalleryProps = {
  images: string[];
  title: string;
};

// Editorial rhythm: first image full-width, then alternating wide/narrow pairs.
export default function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [hero, ...rest] = images;

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

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {rest.map((src, i) => {
            // Every 3rd image is full-width for editorial rhythm. A trailing
            // "half" with no partner would leave an empty column, so promote it.
            const isLonelyHalf =
              i === rest.length - 1 && i % 3 === 1;
            const isFull = i % 3 === 0 || isLonelyHalf;
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
                  alt={`${title} — immagine ${i + 2}`}
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
