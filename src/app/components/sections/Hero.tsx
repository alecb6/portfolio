"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { useState } from "react";
import { profile } from "@/data/profile";

interface Swatch {
  name: string;
  hex: string;
  background: string;
  color: string;
  label: string;
  value: string;
  href?: string;
}

// Muestras de color, como una carta de pintura: cada una cuenta qué hago ahora
const swatches: Swatch[] = [
  {
    name: "Tinta",
    hex: "#2A1F17",
    background: "#2A1F17",
    color: "#F3EBDD",
    label: "Última web publicada",
    value: "Pinturas Cruz",
    href: "https://pinturascruz.vercel.app",
  },
  {
    name: "Ocre",
    hex: "#E9A23B",
    background: "rgb(var(--ochre))",
    color: "#2A1F17",
    label: "Mi proyecto en producción",
    value: "OpoAlertas",
    href: "https://opoalertas.es",
  },
  {
    name: "Teja",
    hex: "#C2531F",
    background: "#C2531F",
    color: "#FFFFFF",
    label: "Ahora",
    value: "Desarrollador web en Maccorp Exacta Change",
  },
];

// Abanico en reposo y abierto (al pasar el ratón), en grados
const restAngles = [-16, -5, 6];
const openAngles = [-26, -9, 8];

function SwatchFan() {
  const [active, setActive] = useState(swatches.length - 1);
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center gap-8">
      <div
        className="relative h-[23rem] w-[15rem] sm:h-[27rem] sm:w-[17rem]"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {swatches.map((swatch, i) => {
          const isActive = i === active;
          const Tag = swatch.href ? "a" : "div";
          return (
            <motion.div
              key={swatch.name}
              className="absolute inset-x-0 bottom-0 h-[21rem] origin-[18%_92%] sm:h-[25rem]"
              style={{ zIndex: isActive ? 30 : i + 1 }}
              initial={{ rotate: 0, y: 40, opacity: 0 }}
              animate={{
                rotate: isActive ? 0 : (open ? openAngles : restAngles)[i],
                y: isActive ? -10 : 0,
                opacity: 1,
              }}
              transition={{
                type: "spring",
                stiffness: 170,
                damping: 20,
                delay: open ? 0 : 0.35 + i * 0.12,
              }}
              onMouseEnter={() => setActive(i)}
            >
              <Tag
                {...(swatch.href
                  ? {
                      href: swatch.href,
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }
                  : {})}
                aria-hidden={!isActive}
                tabIndex={isActive && swatch.href ? 0 : -1}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-black/10 bg-surface shadow-[0_24px_40px_-24px_rgb(42_31_23/0.55)]"
              >
                <div
                  className="flex flex-1 flex-col p-6"
                  style={{ background: swatch.background, color: swatch.color }}
                >
                  <span className="text-sm opacity-80">{swatch.label}</span>
                  <span className="mt-2 font-display text-2xl font-semibold leading-tight">
                    {swatch.value}
                  </span>
                </div>
                <div className="flex items-baseline justify-between px-6 py-4 text-ink">
                  <span className="font-display text-xl font-semibold">
                    {swatch.name}
                  </span>
                  <span className="text-sm text-muted">{swatch.hex}</span>
                </div>
              </Tag>
            </motion.div>
          );
        })}
      </div>

      {/* Elegir muestra sin ratón (móvil y teclado) */}
      <div className="flex gap-2" role="group" aria-label="Elegir muestra">
        {swatches.map((swatch, i) => (
          <button
            key={swatch.name}
            type="button"
            onClick={() => setActive(i)}
            aria-pressed={i === active}
            className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm transition-colors ${
              i === active
                ? "border-ink/40 bg-surface text-ink"
                : "border-transparent text-muted hover:text-ink"
            }`}
          >
            <span
              className="size-3 rounded-full border border-black/10"
              style={{ background: swatch.background }}
            />
            {swatch.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="container grid min-h-[88vh] items-center gap-14 pb-16 pt-36 md:pt-40 lg:grid-cols-[1.4fr_1fr]"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-lg text-muted">
          Hola
          <span className="mx-1.5 inline-block origin-[70%_70%] animate-wave">
            👋
          </span>
          soy
        </p>
        <h1 className="mt-3 font-display text-6xl font-semibold leading-[0.95] tracking-tight sm:text-7xl xl:text-8xl">
          Alejandro
          <br />
          Cruz Ballestero
        </h1>
        <p className="mt-8 max-w-xl text-xl leading-relaxed">
          Desarrollador web full stack en {profile.location}. Trabajo con
          Laravel y PHP, y en mis proyectos uso Next.js y TypeScript para llevar
          una idea de los datos al despliegue.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href="#proyectos" className="btn-primary">
            Ver proyectos
          </a>
          <a href={profile.cvUrl} download className="btn-ghost group">
            <Download
              size={16}
              className="transition-transform group-hover:translate-y-0.5"
            />
            Descargar CV
          </a>
        </div>
      </motion.div>

      <SwatchFan />
    </section>
  );
}
