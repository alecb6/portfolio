import Section from "@/components/ui/Section";
import { languages, skills } from "@/data/profile";

export default function Skills() {
  return (
    <Section
      id="conocimientos"
      title="Conocimientos"
      intro="Las tecnologías que he usado en el trabajo y en mis proyectos, y los idiomas que hablo."
    >
      <dl className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
        {skills.map(({ category, items }) => (
          <div key={category} className="border-t-2 border-ink pt-4">
            <dt className="font-display text-xl font-semibold">{category}</dt>
            <dd className="mt-4">
              <ul className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="chip cursor-default hover:border-accent/60 hover:bg-accent-soft hover:text-accent-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-10 border-t-2 border-ink pt-4">
        <h3 className="font-display text-xl font-semibold">Idiomas</h3>
        <dl className="mt-4 flex flex-wrap gap-x-10 gap-y-3">
          {languages.map(({ name, level }) => (
            <div key={name} className="flex items-baseline gap-2">
              <dt className="font-medium">{name}</dt>
              <dd className="text-muted">{level}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
