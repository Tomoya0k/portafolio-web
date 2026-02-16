interface SectionTitleProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <header className="mb-10 max-w-2xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent">{eyebrow}</p>
      <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
      <p className="mt-3 text-sm text-slate-300 sm:text-base">{description}</p>
    </header>
  );
}
