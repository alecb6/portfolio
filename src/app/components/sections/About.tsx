import Counter from "@/components/ui/Counter";
import Section from "@/components/ui/Section";
import { featuredProjects } from "@/data/projects";
import { profile, skills } from "@/data/profile";

const technologyCount = new Set(skills.flatMap(({ items }) => items)).size;

function N({ value }: { value: number }) {
  return (
    <span className="font-display font-semibold text-accent-ink">
      <Counter value={value} />
    </span>
  );
}

export default function About() {
  const year = new Date().getFullYear();

  return (
    <Section id="sobre-mi" title="Sobre mí">
      <div className="max-w-3xl space-y-6 font-display text-2xl leading-snug md:text-3xl">
        <p>
          Llevo <N value={year - profile.codingSince} /> años programando y{" "}
          <N value={year - profile.workingSince} /> trabajando como
          desarrollador. Abajo tienes <N value={featuredProjects.length} /> de
          mis proyectos, y por el camino he usado <N value={technologyCount} />{" "}
          tecnologías distintas.
        </p>
      </div>
      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
        Empecé en {profile.codingSince} con el ciclo de Desarrollo de
        Aplicaciones Web y desde {profile.workingSince} trabajo en Maccorp
        Exacta Change. Fuera del trabajo construyo mis propios proyectos: el más
        grande, OpoAlertas, avisa cada mañana de las oposiciones que salen en el
        BOE.
      </p>
    </Section>
  );
}
