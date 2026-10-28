import { Briefcase, GraduationCap } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { education, experience, type TimelineItem } from "@/data/profile";

function Timeline({
  title,
  icon: Icon,
  items,
}: {
  title: string;
  icon: typeof Briefcase;
  items: TimelineItem[];
}) {
  return (
    <div>
      <Reveal>
        <h3 className="mb-8 flex items-center gap-3 font-display text-2xl font-semibold">
          <span className="grid size-10 place-items-center rounded-full bg-accent-soft text-accent-ink">
            <Icon size={18} />
          </span>
          {title}
        </h3>
      </Reveal>
      <ol className="relative ml-5 border-l-2 border-line">
        {items.map((item, i) => (
          <li key={item.title} className="relative pb-10 pl-8 last:pb-0">
            <span
              aria-hidden
              className="absolute -left-[9px] top-1.5 flex size-4 items-center justify-center"
            >
              {item.current && (
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-50" />
              )}
              <span
                className={`relative size-4 rounded-full border-[3px] border-bg ${
                  item.current ? "bg-accent" : "bg-muted/50"
                }`}
              />
            </span>
            <Reveal delay={i * 0.08}>
              <p className="font-mono text-xs uppercase tracking-wider text-muted">
                {item.period}
                {item.current && (
                  <span className="ml-2 rounded-full bg-accent-soft px-2 py-0.5 text-accent-ink">
                    Ahora
                  </span>
                )}
              </p>
              <h4 className="mt-2 text-lg font-semibold leading-snug">
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
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experiencia" className="container py-16 md:py-24">
      <SectionHeading
        eyebrow="Trayectoria"
        title="Experiencia y formación"
        intro="Dónde he trabajado y qué he estudiado, de lo más reciente a lo más antiguo."
      />
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
        <Timeline title="Experiencia" icon={Briefcase} items={experience} />
        <Timeline title="Formación" icon={GraduationCap} items={education} />
      </div>
    </section>
  );
}
