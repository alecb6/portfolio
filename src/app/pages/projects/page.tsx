"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SpotlightCard from "@/components/ui/SpotlightCard";
import ClickSpark from "@/components/ui/ClickSpark";

interface Repo {
  id: number;
  name: string;
  description: string;
  url: string;
  language: string;
  topics: string[];
  image: string;
}

async function getRepos(): Promise<Repo[]> {
  try {
    const res = await fetch(`/api/github`, { cache: "no-store" });

    if (!res.ok) {
      console.error(
        "Error al obtener los repos:",
        res.status,
        await res.text()
      );
      throw new Error("Error al obtener los repositorios");
    }

    const data = await res.json();
    console.log("Datos recibidos:", data);

    if (!Array.isArray(data)) {
      console.error("La API no devolvió un array:", data);
      throw new Error("Formato incorrecto en la respuesta de la API");
    }

    return data;
  } catch (error) {
    console.error("Error al obtener los repositorios:", error);
    return [];
  }
}

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const currentPage = usePathname();

  useEffect(() => {
    async function fetchData() {
      const data = await getRepos();
      setRepos(data);
    }
    fetchData();
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
          <div className="flex flex-col items-center max-w-4xl mx-auto mt-16">
            <h1 className="text-5xl font-bold mb-16 text-center text-primaryText">
              Proyectos
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {repos.length === 0 ? (
                <p className="text-gray-500 text-center">
                  Cargando proyectos...
                </p>
              ) : (
                repos.map((repo) => (
                  <SpotlightCard
                    key={repo.id}
                    className="custom-spotlight-card will-change-auto bg-white dark:bg-secondary"
                    spotlightColor="rgba(0, 229, 255, 0.2)"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <h3 className="text-lg font-semibold text-primaryText">
                        {repo.name}
                      </h3>
                      <div className="bg-accent/50 p-3 rounded-full">
                        <img
                          src={repo.image}
                          alt="Avatar"
                          className="w-12 h-12 rounded-full"
                        />
                      </div>
                    </div>
                    <p className="text-sm text-primaryText">
                      {repo.description}
                    </p>
                    <p className="text-xs text-primaryText">
                      Lenguaje: {repo.language}
                    </p>
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline mt-2 inline-block"
                    >
                      Ver en GitHub
                    </a>
                  </SpotlightCard>
                ))
              )}
            </div>
          </div>
        </ClickSpark>
      </motion.div>
    </AnimatePresence>
  );
}
