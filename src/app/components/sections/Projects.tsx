"use client";

import Image from "next/image";
import { ArrowUpRight, Lock } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { featuredProjects, type FeaturedProject } from "@/data/projects";

function ProjectLinks({ project }: { project: FeaturedProject }) {
  return (
    <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-2 pt-6">
      {project.demoUrl && (
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="link-arrow group/link"
        >
          Ver la web
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
          />
        </a>
      )}
      {project.repoUrl ? (
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted underline-offset-4 hover:text-ink hover:underline"
        >
          <FaGithub /> Código
        </a>
      ) : (
        <span className="inline-flex items-center gap-1.5 text-sm text-muted">
          <Lock size={14} /> Código privado
        </span>
      )}
    </div>
  );
}

function Technologies({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-2">
      {items.map((technology) => (
        <li key={technology} className="chip">
          {technology}
        </li>
      ))}
    </ul>
  );
}

function Meta({ project }: { project: FeaturedProject }) {
  return (
    <p className="font-mono text-xs uppercase tracking-wider text-muted">
      {project.year} · {project.type}
    </p>
  );
}

function WideCard({
  project,
  reverse,
}: {
  project: FeaturedProject;
  reverse: boolean;
}) {
  return (
    <SpotlightCard className="card group transition-shadow duration-300 hover:shadow-[0_30px_60px_-35px_rgb(var(--ink)/0.45)]">
      <div
        className={`grid lg:grid-cols-[1.15fr_1fr] ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {project.image && (
          <div className="flex items-center border-b border-line bg-surface-2 p-5 md:p-8 lg:border-b-0">
            <Image
              src={project.image.src}
              alt={project.image.alt}
              width={1280}
              height={800}
              className="h-auto w-full rounded-xl border border-line shadow-[0_18px_40px_-24px_rgb(var(--ink)/0.5)] transition-transform duration-700 ease-out group-hover:-rotate-1 group-hover:scale-[1.02]"
            />
          </div>
        )}
        <div className="flex flex-col p-7 md:p-10">
          <Meta project={project} />
          <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            {project.name}
          </h3>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            {project.summary}
          </p>
          <ul className="mt-6 space-y-2.5">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3 leading-snug">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                {highlight}
              </li>
            ))}
          </ul>
          <Technologies items={project.technologies} />
          <ProjectLinks project={project} />
        </div>
      </div>
    </SpotlightCard>
  );
}

function CompactCard({ project }: { project: FeaturedProject }) {
  return (
    <SpotlightCard className="card group h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-32px_rgb(var(--ink)/0.45)]">
      <div className="flex h-full flex-col p-7">
        <Meta project={project} />
        <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">
          {project.name}
        </h3>
        <p className="mt-3 leading-relaxed text-muted">{project.summary}</p>
        <Technologies items={project.technologies} />
        <ProjectLinks project={project} />
      </div>
    </SpotlightCard>
  );
}

export default function Projects() {
  const withImage = featuredProjects.filter((project) => project.image);
  const rest = featuredProjects.filter((project) => !project.image);

  return (
    <section id="proyectos" className="container py-16 md:py-24">
      <SectionHeading
        eyebrow="Proyectos"
        title="Cosas que he construido"
        intro="Desde una web en producción que lee el BOE cada mañana hasta los proyectos con los que aprendí cada tecnología."
      />

      <div className="space-y-8">
        {withImage.map((project, i) => (
          <Reveal key={project.repoName}>
            <WideCard project={project} reverse={i % 2 === 1} />
          </Reveal>
        ))}
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {rest.map((project, i) => (
          <Reveal key={project.repoName} delay={(i % 2) * 0.08} className="h-full">
            <CompactCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
