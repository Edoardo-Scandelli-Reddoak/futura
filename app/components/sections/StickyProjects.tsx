"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { projects } from "../../lib/projects";

export default function StickyProjects() {
  const [active, setActive] = useState(0);
  const blockRefs = useRef<Array<HTMLDivElement | null>>([]);

  // The text block closest to the viewport centre drives the pinned image.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const i = Number(
              (entry.target as HTMLElement).dataset.index ?? "0"
            );
            setActive(i);
          }
        });
      },
      { threshold: 0.5, rootMargin: "-25% 0px -25% 0px" }
    );
    blockRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-[1600px] px-6 pb-12 pt-24 md:px-10 md:pb-16 md:pt-32">
        <h2 className="font-serif text-4xl uppercase leading-[0.9] tracking-tight text-ink md:text-6xl lg:text-7xl">
          I nostri
          <br />
          progetti
        </h2>
      </div>

      {/* Desktop: pinned image on the left, scrolling text on the right */}
      <div className="hidden md:grid md:grid-cols-2">
        {/* Pinned image column */}
        <div className="sticky top-0 h-screen">
          <div className="relative h-full w-full overflow-hidden">
            {projects.map((project, i) => (
              <Image
                key={project.slug}
                src={project.cover}
                alt={`${project.title}, ${project.city}`}
                fill
                sizes="50vw"
                className={`object-cover transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  i === active
                    ? "scale-100 opacity-100"
                    : "scale-105 opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            {/* Progress counter */}
            <div className="absolute bottom-8 left-8 z-10 flex items-end gap-2 text-white">
              <span className="font-serif text-5xl leading-none">
                {String(active + 1).padStart(2, "0")}
              </span>
              <span className="mb-1 text-sm text-white/60">
                / {String(projects.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>

        {/* Scrolling text column */}
        <div>
          {projects.map((project, i) => (
            <div
              key={project.slug}
              data-index={i}
              ref={(el) => {
                blockRefs.current[i] = el;
              }}
              className="flex min-h-screen flex-col justify-center px-8 py-24 lg:px-16"
            >
              <Link href={`/progetti/${project.slug}`} className="group block">
                <span className="text-sm uppercase tracking-[0.2em] text-stone">
                  {String(i + 1).padStart(2, "0")} —{" "}
                  {project.city} ({project.province})
                </span>
                <h3 className="mt-5 font-serif text-5xl leading-[0.95] text-ink transition-colors duration-500 group-hover:text-navy lg:text-7xl">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm uppercase tracking-[0.14em] text-stone">
                  {project.category} · {project.year} · {project.status}
                </p>
                <p className="mt-7 max-w-md text-base leading-relaxed text-stone/90">
                  {project.excerpt}
                </p>
                <span className="mt-9 inline-flex items-center gap-3 border border-ink/30 px-8 py-4 text-xs uppercase tracking-[0.2em] text-ink transition-colors duration-300 group-hover:border-navy group-hover:bg-navy group-hover:text-paper">
                  Scopri il progetto
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: stacked full-width cards */}
      <div className="flex flex-col gap-4 px-6 pb-12 md:hidden">
        {projects.map((project, i) => (
          <Link
            key={project.slug}
            href={`/progetti/${project.slug}`}
            className="group relative block h-[64vh] overflow-hidden"
          >
            <Image
              src={project.cover}
              alt={`${project.title}, ${project.city}`}
              fill
              sizes="100vw"
              className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <span className="text-xs uppercase tracking-[0.2em] text-white/70">
                {String(i + 1).padStart(2, "0")} — {project.city} (
                {project.province})
              </span>
              <h3 className="mt-2 font-serif text-4xl uppercase leading-none tracking-tight text-white">
                {project.title}
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/85">
                {project.excerpt}
              </p>
              <span className="mt-5 inline-flex w-fit items-center gap-2 border border-white/60 px-6 py-3 text-[0.7rem] uppercase tracking-[0.2em] text-white">
                Scopri il progetto →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
