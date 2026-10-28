import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  intro?: ReactNode;
  children: ReactNode;
}

// Título en una columna que se queda fija en escritorio mientras se lee el contenido
export default function Section({ id, title, intro, children }: SectionProps) {
  return (
    <section id={id} className="container py-8 md:py-12">
      <div className="grid gap-10 border-t border-line pt-12 md:pt-16 lg:grid-cols-[15rem_1fr] lg:gap-16">
        <header className="lg:sticky lg:top-32 lg:self-start">
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            {title}
          </h2>
          {intro && (
            <p className="mt-3 max-w-md leading-relaxed text-muted">{intro}</p>
          )}
        </header>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}
