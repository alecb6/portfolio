"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, MapPin } from "lucide-react";
import { profile } from "@/data/profile";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const now = [
  {
    label: "En el día a día",
    text: "Laravel, PHP y MySQL",
  },
  {
    label: "Mi proyecto en producción",
    text: "OpoAlertas, en opoalertas.es",
    href: "https://opoalertas.es",
  },
  {
    label: "Última web publicada",
    text: "Pinturas Cruz",
    href: "https://pinturascruz.vercel.app",
  },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="container grid min-h-[88vh] items-center gap-12 pb-12 pt-36 md:pt-40 lg:grid-cols-[1.35fr_1fr]"
    >
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.p
          variants={item}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-sm text-muted"
        >
          <span className="relative flex size-2.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex size-2.5 rounded-full bg-accent" />
          </span>
          Desarrollador web en Maccorp Exacta Change
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl xl:text-7xl"
        >
          Hola, soy{" "}
          <span className="whitespace-nowrap">
            {profile.shortName}
            <span className="ml-3 inline-block origin-[70%_70%] animate-wave">
              👋
            </span>
          </span>
          <br />
          <span className="text-muted">hago webs que</span>{" "}
          <em className="text-accent-ink">resuelven problemas reales.</em>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-7 max-w-xl text-lg leading-relaxed text-muted"
        >
          Soy {profile.name}, {profile.role.toLowerCase()} en{" "}
          {profile.location}. Trabajo con Laravel y PHP, y en mis proyectos
          uso Next.js y TypeScript para llevar ideas de principio a fin:
          datos, backend, interfaz y despliegue.
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-wrap gap-3">
          <a href="#proyectos" className="btn-primary group">
            Ver proyectos
            <ArrowDown
              size={16}
              className="transition-transform group-hover:translate-y-0.5"
            />
          </a>
          <a href={profile.cvUrl} download className="btn-ghost group">
            <Download
              size={16}
              className="transition-transform group-hover:-translate-y-0.5"
            />
            Descargar CV
          </a>
        </motion.div>
      </motion.div>

      <motion.aside
        initial={{ opacity: 0, y: 30, rotate: 2 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        <div className="absolute -inset-3 -z-10 rotate-2 rounded-[2rem] bg-accent-soft" />
        <div className="card animate-float p-7 shadow-[0_24px_50px_-30px_rgb(var(--ink)/0.45)]">
          <div className="mb-6 flex items-center justify-between">
            <p className="eyebrow">Ahora mismo</p>
            <span className="inline-flex items-center gap-1 text-sm text-muted">
              <MapPin size={14} /> {profile.location}
            </span>
          </div>
          <ul className="space-y-5">
            {now.map(({ label, text, href }) => (
              <li key={label} className="border-l-2 border-accent/70 pl-4">
                <p className="text-xs font-medium uppercase tracking-wider text-muted">
                  {label}
                </p>
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block font-medium underline-offset-4 hover:text-accent-ink hover:underline"
                  >
                    {text}
                  </a>
                ) : (
                  <p className="mt-1 font-medium">{text}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </motion.aside>
    </section>
  );
}
