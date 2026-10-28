"use client";

import React from "react";
import {
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaLaravel,
  FaNodeJs,
  FaPhp,
  FaReact,
} from "react-icons/fa";
import {
  SiAstro,
  SiMysql,
  SiNextdotjs,
  SiSymfony,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

type SliderItem = {
  icon: React.ElementType;
  // Color de la marca al pasar el ratón; sin color, el del texto
  color?: string;
  name: string;
};

const techIcons: SliderItem[] = [
  { icon: FaHtml5, color: "#E44D26", name: "HTML5" },
  { icon: FaCss3Alt, color: "#1572B6", name: "CSS3" },
  { icon: FaJs, color: "#E8B500", name: "JavaScript" },
  { icon: SiTypescript, color: "#3178C6", name: "TypeScript" },
  { icon: FaReact, color: "#149ECA", name: "React" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiTailwindcss, color: "#06B6D4", name: "Tailwind CSS" },
  { icon: SiAstro, color: "#FF5D01", name: "Astro" },
  { icon: FaPhp, color: "#777BB4", name: "PHP" },
  { icon: FaLaravel, color: "#FF2D20", name: "Laravel" },
  { icon: SiSymfony, name: "Symfony" },
  { icon: SiMysql, color: "#00758F", name: "MySQL" },
  { icon: FaNodeJs, color: "#339933", name: "Node.js" },
  { icon: FaGitAlt, color: "#F05032", name: "Git" },
];

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden}>
      {techIcons.map(({ icon: Icon, color, name }) => (
        <li
          key={name}
          className="group flex min-w-[96px] flex-col items-center gap-2 px-5 text-muted"
          style={{ "--brand": color ?? "rgb(var(--ink))" } as React.CSSProperties}
        >
          <Icon
            size={36}
            className="transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110 group-hover:text-[color:var(--brand)]"
          />
          <span className="font-mono text-[11px] tracking-wide transition-colors group-hover:text-ink">
            {name}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function TechStrip() {
  return (
    <section aria-label="Tecnologías con las que trabajo" className="border-y border-line bg-surface/60 py-7">
      <div className="marquee overflow-hidden">
        <div className="flex w-max animate-scroll">
          <Row />
          <Row hidden />
        </div>
      </div>
    </section>
  );
}
