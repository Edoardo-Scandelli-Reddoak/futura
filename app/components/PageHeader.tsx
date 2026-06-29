import Reveal from "./Reveal";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  intro?: string;
};

export default function PageHeader({ eyebrow, title, intro }: PageHeaderProps) {
  return (
    <header className="bg-paper pt-36 md:pt-44">
      <div className="mx-auto max-w-[1400px] px-6 pb-16 md:px-10 md:pb-24">
        <Reveal>
          <p className="eyebrow text-stone">{eyebrow}</p>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] text-ink md:text-7xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-stone md:text-lg">
              {intro}
            </p>
          )}
        </Reveal>
      </div>
    </header>
  );
}
