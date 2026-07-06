import Image from "next/image";
import Link from "next/link";
import { projects } from "../../lib/projects";

export default function FeaturedProjects() {
  const featured = projects.slice(0, 4);

  return (
    <section id="progetti" className="bg-paper">
      <div className="mx-auto max-w-[1600px] px-6 pb-8 pt-24 md:px-10 md:pb-10 md:pt-32">
        <h2 className="font-serif text-4xl uppercase leading-[0.9] tracking-tight text-ink md:text-6xl lg:text-7xl">
          Progetti
          <br />
          in evidenza
        </h2>
      </div>

      {/* Desktop: expanding grayscale panels that colorize + reveal on hover */}
      <div className="hidden h-[82vh] w-full overflow-hidden md:flex">
        {featured.map((project, i) => (
          <Link
            key={project.slug}
            href={`/progetti/${project.slug}`}
            className="group relative h-full flex-1 overflow-hidden"
          >
            <Image
              src={project.cover}
              alt={`${project.title}, ${project.city}`}
              fill
              sizes="(max-width: 1024px) 40vw, 30vw"
              className="object-cover grayscale transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08] group-hover:grayscale-0"
            />

            {/* Base gradient (always) for the project name */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/25" />
            {/* Navy gradient (hover) for the top description */}
            <div className="absolute inset-0 bg-gradient-to-b from-navy/85 via-navy/20 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

            <div className="absolute inset-0 flex flex-col justify-between p-6 lg:p-8">
              {/* Top: line + description + CTA (revealed on hover) */}
              <div className="max-w-sm translate-y-3 opacity-0 transition-all duration-500 [transition-delay:120ms] group-hover:translate-y-0 group-hover:opacity-100">
                <span className="mb-6 block h-px w-full bg-white/50" />
                <p className="text-sm leading-relaxed text-white/90">
                  {project.excerpt}
                </p>
                <span className="mt-7 inline-flex items-center border border-white/60 px-7 py-3 text-[0.7rem] uppercase tracking-[0.2em] text-white transition-colors group-hover:border-white">
                  Scopri il progetto
                </span>
              </div>

              {/* Bottom: number + big project name */}
              <div>
                <span className="mb-4 inline-flex h-9 min-w-[3rem] items-center justify-center border border-white/50 px-3 text-xs text-white opacity-0 transition-opacity duration-500 [transition-delay:120ms] group-hover:opacity-100">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-2xl uppercase leading-[0.95] tracking-tight text-white lg:text-4xl">
                  {project.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Mobile: stacked colour cards */}
      <div className="flex flex-col gap-4 px-6 pb-8 md:hidden">
        {featured.map((project, i) => (
          <Link
            key={project.slug}
            href={`/progetti/${project.slug}`}
            className="relative block h-[58vh] overflow-hidden"
          >
            <Image
              src={project.cover}
              alt={`${project.title}, ${project.city}`}
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <span className="mb-3 inline-flex w-fit items-center border border-white/50 px-3 py-1 text-xs text-white">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-serif text-3xl uppercase leading-none tracking-tight text-white">
                {project.title}
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/85">
                {project.excerpt}
              </p>
              <span className="mt-5 inline-flex w-fit items-center border border-white/60 px-6 py-3 text-[0.7rem] uppercase tracking-[0.2em] text-white">
                Scopri il progetto
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
