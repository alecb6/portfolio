"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import Counter from "@/components/ui/Counter";
import Section from "@/components/ui/Section";
import { featuredProjects } from "@/data/projects";
import { profile } from "@/data/profile";
import { useGithubRepos, type Repo } from "@/hooks/useGithubRepos";

const featuredRepoNames = new Set(
  featuredProjects.map((project) => project.repoName.toLowerCase()),
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
    <div
      className="grid h-32 animate-pulse gap-6 rounded-2xl bg-surface-2/60 md:grid-cols-3"
      aria-label="Cargando datos de GitHub"
    />
  );
}

export default function GithubActivity() {
  const state = useGithubRepos();

  return (
    <Section
      id="github"
      title="En GitHub"
      intro="Cargado ahora mismo desde la API de GitHub. Los proyectos privados, como OpoAlertas o Pinturas Cruz, no salen aquí."
    >
      {state.status === "loading" && <Skeleton />}

      {state.status === "error" && (
        <p className="text-muted">
          GitHub no responde ahora mismo.{" "}
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Ver mi perfil en GitHub
          </a>
        </p>
      )}

      {state.status === "ready" && <GithubContent repos={state.repos} />}
    </Section>
  );
}

function GithubContent({ repos }: { repos: Repo[] }) {
  const latest = repos[0];
  const languages = languageShare(repos);
  const others = repos.filter(
    (repo) => !featuredRepoNames.has(repo.name.toLowerCase()),
  );

  return (
    <>
      <dl className="grid gap-8 md:grid-cols-3 md:divide-x md:divide-line">
        <div className="flex flex-col-reverse justify-end">
          <dt className="mt-1 text-muted">repositorios públicos propios</dt>
          <dd className="font-display text-5xl font-semibold">
            <Counter value={repos.length} />
          </dd>
        </div>

        {latest && (
          <div className="md:pl-8">
            <dt className="text-muted">Último repositorio actualizado</dt>
            <dd className="mt-2">
              <a
                href={latest.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-2xl font-semibold hover:text-accent-ink"
              >
                {latest.name}
              </a>
              <span className="block text-sm text-muted">
                {timeAgo(latest.pushed_at)}
              </span>
            </dd>
          </div>
        )}

        {languages.length > 0 && (
          <div className="md:pl-8">
            <dt className="text-muted">Lenguajes por repositorio</dt>
            <dd>
              <div className="mt-3 flex h-2.5 overflow-hidden rounded-full bg-surface-2">
                {languages.map(({ name, share }, i) => (
                  <motion.span
                    key={name}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${share}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.9,
                      delay: 0.2 + i * 0.1,
                      ease: "easeOut",
                    }}
                    style={{ background: languageColors[i] }}
                    className="h-full"
                  />
                ))}
              </div>
              <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                {languages.map(({ name, share }, i) => (
                  <li key={name} className="flex items-center gap-1.5">
                    <span
                      className="size-2.5 rounded-full"
                      style={{ background: languageColors[i] }}
                    />
                    {name}
                    <span className="text-muted">{Math.round(share)} %</span>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        )}
      </dl>

      {others.length > 0 && (
        <ul className="mt-12 divide-y divide-line border-y border-line">
          {others.map((repo) => (
            <li key={repo.id}>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 py-5"
              >
                <FaGithub className="shrink-0 text-muted" size={20} />
                <span className="min-w-0 flex-1">
                  <span className="block font-semibold underline-offset-4 group-hover:text-accent-ink group-hover:underline">
                    {repo.name}
                  </span>
                  {repo.description && (
                    <span className="block truncate text-sm text-muted">
                      {repo.description}
                    </span>
                  )}
                </span>
                {repo.language && (
                  <span className="hidden text-sm text-muted sm:inline">
                    {repo.language}
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
