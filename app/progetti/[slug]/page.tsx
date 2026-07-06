import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "../../components/Reveal";
import ProjectGallery from "../../components/sections/ProjectGallery";
import { getNextProject, getProject, projects } from "../../lib/projects";

type Params = { slug: string };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Progetto — Futura" };
  return {
    title: `${project.title}, ${project.city} — Futura`,
    description: project.intro,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const next = getNextProject(slug);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-navy-deep">
        <Image
          src={project.cover}
          alt={`${project.title}, ${project.city}`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/30" />
        <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-end px-6 pb-16 md:px-10 md:pb-20">
          <Link
            href="/progetti"
            className="mb-auto mt-32 inline-flex w-fit items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/80 transition-colors hover:text-white md:mt-40"
          >
            <span className="transition-transform duration-300">←</span> Tutti i
            progetti
          </Link>
          <p className="eyebrow text-white/70">
            {project.city} ({project.province}) · {project.category}
          </p>
          <h1 className="mt-5 font-serif text-5xl leading-[0.92] text-white sm:text-7xl lg:text-8xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
            {project.intro}
          </p>
        </div>
      </section>

      {/* Description + technical facts */}
      <section className="bg-paper">
        <div className="mx-auto grid max-w-[1600px] gap-12 px-6 pb-24 pt-24 md:grid-cols-[1.4fr_1fr] md:gap-20 md:px-10 md:pb-32 md:pt-36">
          <Reveal>
            <div className="space-y-6">
              {project.description.map((para, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? "font-serif text-2xl leading-[1.3] text-ink md:text-3xl"
                      : "text-base leading-relaxed text-stone"
                  }
                >
                  {para}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <dl className="border-t border-ink/15">
              {project.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-baseline justify-between gap-6 border-b border-ink/15 py-4"
                >
                  <dt className="text-xs uppercase tracking-[0.18em] text-stone">
                    {fact.label}
                  </dt>
                  <dd className="text-right font-serif text-lg text-ink">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <ProjectGallery images={project.gallery} title={project.title} />

      {/* Next project */}
      <Link
        href={`/progetti/${next.slug}`}
        className="group relative block h-[70vh] min-h-[460px] overflow-hidden bg-navy-deep"
      >
        <Image
          src={next.cover}
          alt={`${next.title}, ${next.city}`}
          fill
          sizes="100vw"
          className="object-cover opacity-60 grayscale transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-hover:opacity-70 group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40" />
        <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col items-center justify-center px-6 text-center text-white">
          <span className="eyebrow text-white/70">Progetto successivo</span>
          <h2 className="mt-5 font-serif text-5xl leading-[0.95] md:text-7xl lg:text-8xl">
            {next.title}
          </h2>
          <span className="mt-8 inline-flex items-center gap-3 border border-white/60 px-9 py-4 text-xs uppercase tracking-[0.2em] transition-colors duration-300 group-hover:border-white group-hover:bg-white group-hover:text-ink">
            Scopri il progetto
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      </Link>
    </>
  );
}
