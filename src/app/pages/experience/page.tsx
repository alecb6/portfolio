"use client";

import { FaBuilding, FaCalendarAlt, FaLaptopCode } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import ClickSpark from "@/components/ui/ClickSpark";

export default function ExperiencePage() {
  const experiences = [
    {
      company: "Empresa Tecnológica",
      position: "Desarrollador Web",
      period: "Febrero 2024 - Presente",
      description: [
        "Desarrollo y mantenimiento de aplicaciones web con Laravel y PHP",
        "Uso de consultas de base de datos MySQL y optimización de rendimiento",
        "Creación de interfaces de usuario con HTML, CSS y JavaScript",
        "Integración de APIs y desarrollo de componentes interactivos",
        "Adaptación de diseños para diferentes dispositivos (responsive)",
      ],
    },
    {
      company: "Empresa Familiar",
      position: "Peón de Obra / Ayudante de Pintor",
      period: "2020 - 2024",
      description: [],
    },
  ];

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
              Experiencia
            </h1>

            <div className="w-full space-y-10">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-secondary/30 rounded-lg p-6 hover:bg-secondary/40 text-primaryText"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                    <div className="bg-accent/50 p-3 rounded-full">
                      <FaBuilding
                        className="text-primaryText transition-all duration-300"
                        size={24}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold">{exp.company}</h3>
                      <h4 className="text-lg text-primaryText">
                        {exp.position}
                      </h4>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground transition-all duration-300">
                      <FaCalendarAlt size={16} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <div className="mt-4 ml-4 border-l-2 border-accent/50 pl-6">
                    <ul className="space-y-2">
                      {exp.description.length >= 1
                        ? exp.description.map((desc, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <FaLaptopCode className="text-primaryText mt-1 flex-shrink-0 transition-all duration-300" />
                              <span className="text-primaryText">{desc}</span>
                            </li>
                          ))
                        : ""}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ClickSpark>
      </motion.div>
    </AnimatePresence>
  );
}
