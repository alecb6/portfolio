"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { FaGithub, FaLock } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import SpotlightCard from "@/components/ui/SpotlightCard";
import ClickSpark from "@/components/ui/ClickSpark";
import { featuredProjects } from "@/data/projects";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics: string[];
  fork: boolean;
  pushed_at: string;
}

type ReposState =
  | { status: "loading" }
  | { status: "error" }
  | { status: "ready"; repos: Repo[] };

const featuredRepoNames = new Set(
  featuredProjects.map((project) => project.repoName.toLowerCase())
);

async function getRepos(): Promise<Repo[]> {
  const res = await fetch(
    "https://api.github.com/users/alecb6/repos?per_page=100&sort=pushed",
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error(`Error al obtener los repositorios: ${res.status}`);
  }

  const data = await res.json();

  if (!Array.isArray(data)) {
    throw new Error("Formato incorrecto en la respuesta de la API");
  }

  return data;
}

export default function Projects() {
  const [reposState, setReposState] = useState<ReposState>({
    status: "loading",
  });
  const currentPage = usePathname();
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    getRepos()
      .then((repos) =>
        setReposState({
          status: "ready",
          // Sin forks ni los proyectos que ya salen destacados
          repos: repos.filter(
            (repo) =>
              !repo.fork && !featuredRepoNames.has(repo.name.toLowerCase())
          ),
        })
      )
      .catch((error) => {
        console.error(error);
        setReposState({ status: "error" });
      });
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={currentPage}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full"
      >
        <ClickSpark
          sparkColor="#fff"
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
          <div className="flex flex-col items-center max-w-5xl mx-auto mt-16">
            <h1 className="text-5xl font-bold mb-16 text-center text-primaryText">
              Proyectos
            </h1>

            <section className="w-full space-y-10">
              {featuredProjects.map((project) => (
                <SpotlightCard
                  key={project.repoName}
                  className="custom-spotlight-card will-change-auto dark:shadow-none shadow-zinc-500 shadow-md bg-slate-100 dark:bg-secondary !p-0"
                  mode={resolvedTheme}
                >
                  {project.image && (
                    <Image
                      src={project.image.src}
                      alt={project.image.alt}
                      width={1280}
                      height={720}
                      className="w-full aspect-video object-cover object-top"
                    />
                  )}
                  <div className="p-6 md:p-8 text-primaryText">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-4">
                      <div>
                        <h2 className="text-2xl font-bold">{project.name}</h2>
                        <p className="text-sm opacity-70">{project.type}</p>
                      </div>
                      <span className="text-sm opacity-70">{project.year}</span>
                    </div>

                    <p className="mb-4">{project.summary}</p>

                    <ul className="list-disc pl-5 space-y-1 text-sm mb-6">
                      {project.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>

                    <ul className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((technology) => (
                        <li
                          key={technology}
                          className="text-xs px-3 py-1 rounded-full bg-zinc-200 dark:bg-zinc-700"
                        >
                          {technology}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap items-center gap-6">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-blue-500 hover:underline"
                        >
                          <FiExternalLink /> Ver la web
                        </a>
                      )}
                      {project.repoUrl ? (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-blue-500 hover:underline"
                        >
                          <FaGithub /> Ver en GitHub
                        </a>
                      ) : (
                        <span className="flex items-center gap-2 text-sm opacity-70">
                          <FaLock /> Código privado
                        </span>
                      )}
                    </div>
                  </div>
                </SpotlightCard>
              ))}
            </section>

            <h2 className="text-3xl font-bold mt-20 mb-8 text-center text-primaryText">
              Más en GitHub
            </h2>
            <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
              {reposState.status === "loading" && (
                <p className="text-gray-500 text-center lg:col-span-2">
                  Cargando proyectos...
                </p>
              )}
              {reposState.status === "error" && (
                <p className="text-gray-500 text-center lg:col-span-2">
                  No se han podido cargar los repositorios.{" "}
                  <a
                    href="https://github.com/alecb6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Míralos directamente en GitHub
                  </a>
                  .
                </p>
              )}
              {reposState.status === "ready" &&
                reposState.repos.map((repo) => (
                  <SpotlightCard
                    key={repo.id}
                    className="custom-spotlight-card will-change-auto dark:shadow-none shadow-zinc-500 shadow-md bg-slate-100 dark:bg-secondary"
                    mode={resolvedTheme}
                  >
                    <h3 className="text-lg font-semibold text-primaryText">
                      {repo.name}
                    </h3>
                    {repo.description && (
                      <p className="text-sm text-primaryText">
                        {repo.description}
                      </p>
                    )}
                    {repo.language && (
                      <p className="text-xs text-primaryText">
                        Lenguaje: {repo.language}
                      </p>
                    )}
                    {repo.topics.length > 0 && (
                      <p className="text-xs font-thin text-primaryText">
                        {repo.topics.join(", ")}
                      </p>
                    )}
                    <div className="flex flex-wrap gap-6 mt-2">
                      {repo.homepage && (
                        <a
                          href={repo.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          Ver la web
                        </a>
                      )}
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        Ver en GitHub
                      </a>
                    </div>
                  </SpotlightCard>
                ))}
            </section>
          </div>
        </ClickSpark>
      </motion.div>
    </AnimatePresence>
  );
}
