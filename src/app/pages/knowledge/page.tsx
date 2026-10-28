"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import ClickSpark from "@/components/ui/ClickSpark";

const knowledge = [
  {
    category: "Frontend",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Astro",
      "Angular",
    ],
  },
  {
    category: "Backend",
    technologies: ["PHP", "Laravel", "Symfony", "Node.js", "APIs REST"],
  },
  {
    category: "Bases de datos",
    technologies: ["MySQL", "SQLite", "Turso", "Drizzle ORM", "Doctrine ORM"],
  },
  {
    category: "Herramientas y servicios",
    technologies: [
      "Git",
      "GitHub",
      "Vercel",
      "Vitest",
      "Telegram Bot API",
      "Brevo",
    ],
  },
];

export default function Knowledge() {
  const currentPage = usePathname();

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
              Conocimientos
            </h1>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
              {knowledge.map(({ category, technologies }) => (
                <div
                  key={category}
                  className="bg-secondary/30 rounded-lg p-6 hover:bg-secondary/40 text-primaryText"
                >
                  <h2 className="text-xl font-bold mb-4">{category}</h2>
                  <ul className="flex flex-wrap gap-2">
                    {technologies.map((technology) => (
                      <li
                        key={technology}
                        className="text-sm px-3 py-1 rounded-full bg-zinc-200 dark:bg-zinc-700"
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </ClickSpark>
      </motion.div>
    </AnimatePresence>
  );
}
