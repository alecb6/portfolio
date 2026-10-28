import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { skills } from "@/data/profile";

export default function Skills() {
  return (
    <section id="conocimientos" className="container py-16 md:py-24">
      <SectionHeading
        eyebrow="Conocimientos"
        title="Con qué trabajo"
        intro="Las tecnologías que he usado en el trabajo y en mis proyectos, agrupadas por área."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map(({ category, items }, i) => (
          <Reveal key={category} delay={(i % 2) * 0.08} className="card p-7">
            <div className="flex items-baseline justify-between">
              <h3 className="font-display text-2xl font-semibold">{category}</h3>
              <span className="font-mono text-xs text-muted">
                {String(items.length).padStart(2, "0")}
              </span>
            </div>
            <ul className="mt-5 flex flex-wrap gap-2">
              {items.map((item) => (
                <li
                  key={item}
                  className="chip cursor-default hover:-translate-y-0.5 hover:border-accent/60 hover:bg-accent-soft hover:text-accent-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
