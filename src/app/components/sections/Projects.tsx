import Image from "next/image";
import Counter from "@/components/ui/Counter";
import Section from "@/components/ui/Section";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { featuredProjects, type FeaturedProject } from "@/data/projects";

function ProjectLinks({ project }: { project: FeaturedProject }) {
  return (
    <p className="flex flex-wrap gap-x-6 gap-y-2">
      {project.demoUrl && (
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          Ver la web
        </a>
      )}
      {project.repoUrl ? (
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          Código en GitHub
        </a>
      ) : (
        <span className="text-muted">Código privado</span>
      )}
    </p>
  );
}

function Technologies({ items }: { items: string[] }) {
  return <p className="text-sm text-muted">{items.join(", ")}</p>;
}

function Feature({ project }: { project: FeaturedProject }) {
  return (
    <SpotlightCard className="card group">
      {project.image && (
        <div className="border-b border-line bg-surface-2 p-4 md:p-8">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            width={1280}
            height={800}
            priority
            className="h-auto w-full rounded-xl border border-line shadow-[0_18px_40px_-24px_rgb(var(--ink)/0.5)] transition-transform duration-700 ease-out group-hover:scale-[1.01]"
          />
        </div>
      )}
      <div className="p-6 md:p-10">
        <p className="text-sm text-muted">
          {project.type}, {project.year}
        </p>
        <h3 className="mt-2 font-display text-4xl font-semibold tracking-tight md:text-5xl">
          {project.name}
        </h3>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed">
          {project.summary}
        </p>

        {project.facts && (
          <dl className="my-10 grid grid-cols-2 gap-x-6 gap-y-8 border-y border-line py-8 md:grid-cols-4">
            {project.facts.map(({ value, label }) => (
              <div key={label} className="flex flex-col-reverse justify-end">
                <dt className="mt-1 text-sm leading-snug text-muted">
                  {label}
                </dt>
                <dd className="font-display text-4xl font-semibold text-accent-ink">
                  <Counter value={value} />
                </dd>
              </div>
            ))}
          </dl>
        )}

        <ul className="grid gap-x-10 gap-y-3 md:grid-cols-2">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3 leading-snug">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
              {highlight}
            </li>
          ))}
        </ul>

        <div className="mt-8 space-y-4">
          <Technologies items={project.technologies} />
          <ProjectLinks project={project} />
        </div>
      </div>
    </SpotlightCard>
  );
}

function Medium({ project }: { project: FeaturedProject }) {
  return (
    <SpotlightCard className="group grid items-center gap-8 rounded-3xl border border-line md:grid-cols-[1fr_1.1fr] md:p-8">
      {project.image && (
        <Image
          src={project.image.src}
          alt={project.image.alt}
          width={1280}
          height={720}
          className="h-auto w-full rounded-xl border border-line transition-transform duration-500 group-hover:-rotate-1"
        />
      )}
      <div className="p-6 pt-0 md:p-0">
        <p className="text-sm text-muted">
          {project.type}, {project.year}
        </p>
        <h3 className="mt-2 font-display text-3xl font-semibold tracking-tight">
          {project.name}
        </h3>
        <p className="mt-3 leading-relaxed">{project.summary}</p>
        <ul className="mt-5 space-y-2">
          {project.highlights.slice(0, 3).map((highlight) => (
            <li key={highlight} className="flex gap-3 text-sm leading-snug">
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
              {highlight}
            </li>
          ))}
        </ul>
        <div className="mt-6 space-y-3">
          <Technologies items={project.technologies} />
          <ProjectLinks project={project} />
        </div>
      </div>
    </SpotlightCard>
  );
}

function Row({ project }: { project: FeaturedProject }) {
  return (
    <li className="grid gap-2 py-7 md:grid-cols-[5rem_1fr] md:gap-6">
      <p className="font-display text-xl text-muted">{project.year}</p>
      <div>
        <h3 className="font-display text-2xl font-semibold tracking-tight">
          {project.name}
          <span className="mt-1 block font-sans text-sm font-normal text-muted sm:ml-3 sm:mt-0 sm:inline sm:align-middle">
            {project.type}
          </span>
        </h3>
        <p className="mt-2 max-w-2xl leading-relaxed">{project.summary}</p>
        <div className="mt-3 space-y-2">
          <Technologies items={project.technologies} />
          <ProjectLinks project={project} />
        </div>
      </div>
    </li>
  );
}

export default function Projects() {
  const [feature, medium, ...rest] = featuredProjects;

  return (
    <Section
      id="proyectos"
      title="Proyectos"
      intro="Una web en producción, la web de un negocio y los proyectos con los que aprendí cada tecnología."
    >
      <div className="space-y-8">
        <Feature project={feature} />
        <Medium project={medium} />
      </div>
      <h3 className="mt-16 font-display text-2xl font-semibold">
        Más proyectos
      </h3>
      <ul className="mt-2 divide-y divide-line border-b border-line">
        {rest.map((project) => (
          <Row key={project.repoName} project={project} />
        ))}
      </ul>
    </Section>
  );
}
