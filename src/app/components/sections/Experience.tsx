import Section from "@/components/ui/Section";
import { education, experience, type TimelineItem } from "@/data/profile";

function Timeline({ title, items }: { title: string; items: TimelineItem[] }) {
  return (
    <div>
      <h3 className="mb-8 font-display text-2xl font-semibold">{title}</h3>
      <ol className="relative ml-1.5 border-l-2 border-line">
        {items.map((item) => (
          <li key={item.title} className="relative pb-10 pl-8 last:pb-0">
            <span
              aria-hidden
              className="absolute -left-[9px] top-1 flex size-4 items-center justify-center"
            >
              {item.current && (
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-40" />
              )}
              <span
                className={`relative size-4 rounded-full border-[3px] border-bg ${
                  item.current ? "bg-accent" : "bg-muted/50"
                }`}
              />
            </span>
            <p className="text-sm text-muted">
              {item.period}
              {item.current && (
                <span className="ml-2 rounded-full bg-accent-soft px-2 py-0.5 font-medium text-accent-ink">
                  Ahora
                </span>
              )}
            </p>
            <h4 className="mt-1.5 text-lg font-semibold leading-snug">
              {item.title}
            </h4>
            <p className="text-muted">{item.place}</p>
            {item.points && (
              <ul className="mt-4 space-y-2">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3 leading-snug">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function Experience() {
  return (
    <Section
      id="experiencia"
      title="Experiencia"
      intro="Dónde he trabajado y qué he estudiado, de lo más reciente a lo más antiguo."
    >
      <div className="grid gap-14 xl:grid-cols-2 xl:gap-12">
        <Timeline title="Trabajo" items={experience} />
        <Timeline title="Formación" items={education} />
      </div>
    </Section>
  );
}
