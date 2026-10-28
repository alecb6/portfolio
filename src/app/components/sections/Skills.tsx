import Section from "@/components/ui/Section";
import { skills } from "@/data/profile";

export default function Skills() {
  return (
    <Section
      id="conocimientos"
      title="Conocimientos"
      intro="Las tecnologías que he usado en el trabajo y en mis proyectos."
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
    </Section>
  );
}
