"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Counter from "@/components/ui/Counter";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { featuredProjects } from "@/data/projects";
import { profile } from "@/data/profile";
import { useGithubRepos, type Repo } from "@/hooks/useGithubRepos";

const featuredRepoNames = new Set(
  featuredProjects.map((project) => project.repoName.toLowerCase())
);

// Tonos de la paleta para la barra de lenguajes
const languageColors = [
  "rgb(var(--accent))",
  "rgb(var(--accent) / 0.6)",
  "rgb(var(--ink) / 0.75)",
  "rgb(var(--ink) / 0.45)",
  "rgb(var(--ink) / 0.25)",
];

const relativeTime = new Intl.RelativeTimeFormat("es", { numeric: "auto" });

function timeAgo(date: string) {
  const days = Math.round((Date.now() - new Date(date).getTime()) / 86_400_000);
  if (days < 30) return relativeTime.format(-days, "day");
  if (days < 365) return relativeTime.format(-Math.round(days / 30), "month");
  return relativeTime.format(-Math.round(days / 365), "year");
}

function languageShare(repos: Repo[]) {
  const counts = new Map<string, number>();
  repos.forEach(({ language }) => {
    if (language) counts.set(language, (counts.get(language) ?? 0) + 1);
  });
  const total = [...counts.values()].reduce((a, b) => a + b, 0);
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, languageColors.length)
    .map(([name, count]) => ({ name, share: (count / total) * 100 }));
}

function Skeleton() {
  return (
    <div className="grid gap-6 lg:grid-cols-3" aria-label="Cargando actividad de GitHub">
      {[0, 1, 2].map((i) => (
        <div key={i} className="card h-36 animate-pulse bg-surface-2/60" />
      ))}
    </div>
  );
}

export default function GithubActivity() {
  const state = useGithubRepos();

  return (
    <section id="github" className="container py-16 md:py-24">
      <SectionHeading
        eyebrow="GitHub en directo"
        title="Lo último en mi GitHub"
        intro="Datos cargados ahora mismo desde la API de GitHub. Los proyectos privados, como OpoAlertas o Pinturas Cruz, no salen aquí."
      />

      {state.status === "loading" && <Skeleton />}

      {state.status === "error" && (
        <p className="card p-7 text-muted">
          No se ha podido conectar con GitHub en este momento.{" "}
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link-arrow"
          >
            Ver el perfil directamente <ArrowUpRight size={16} />
          </a>
        </p>
      )}

      {state.status === "ready" && (
        <GithubContent repos={state.repos} />
      )}
    </section>
  );
}

function GithubContent({ repos }: { repos: Repo[] }) {
  const latest = repos[0];
  const languages = languageShare(repos);
  const others = repos.filter(
    (repo) => !featuredRepoNames.has(repo.name.toLowerCase())
  );

  return (
    <>
      <div className="grid gap-6 lg:grid-cols-3">
        <Reveal className="card p-7">
          <p className="eyebrow">Repositorios públicos</p>
          <p className="mt-4 font-display text-6xl font-semibold">
            <Counter value={repos.length} />
          </p>
          <p className="mt-2 text-sm text-muted">propios, sin contar forks</p>
        </Reveal>

        {latest && (
          <Reveal delay={0.08} className="card p-7">
            <p className="eyebrow">Última actividad</p>
            <a
              href={latest.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block font-display text-2xl font-semibold hover:text-accent-ink"
            >
              {latest.name}
            </a>
            <p className="mt-2 text-sm text-muted">
              Actualizado {timeAgo(latest.pushed_at)}
            </p>
          </Reveal>
        )}

        {languages.length > 0 && (
          <Reveal delay={0.16} className="card p-7">
            <p className="eyebrow">Lenguajes</p>
            <div className="mt-5 flex h-3 overflow-hidden rounded-full bg-surface-2">
              {languages.map(({ name, share }, i) => (
                <motion.span
                  key={name}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${share}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                  style={{ background: languageColors[i] }}
                  className="h-full"
                />
              ))}
            </div>
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 text-sm">
              {languages.map(({ name, share }, i) => (
                <li key={name} className="flex items-center gap-1.5">
                  <span
                    className="size-2.5 rounded-full"
                    style={{ background: languageColors[i] }}
                  />
                  {name}
                  <span className="text-muted">{Math.round(share)}%</span>
                </li>
              ))}
            </ul>
          </Reveal>
        )}
      </div>

      {others.length > 0 && (
        <Reveal className="mt-6">
          <ul className="card divide-y divide-line">
            {others.map((repo) => (
              <li key={repo.id}>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 px-7 py-5 transition-colors hover:bg-surface-2/50"
                >
                  <FaGithub className="shrink-0 text-muted" size={20} />
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold group-hover:text-accent-ink">
                      {repo.name}
                    </p>
                    {repo.description && (
                      <p className="truncate text-sm text-muted">
                        {repo.description}
                      </p>
                    )}
                  </div>
                  {repo.language && (
                    <span className="chip hidden sm:inline-flex">{repo.language}</span>
                  )}
                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-ink"
                  />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      )}
    </>
  );
}
