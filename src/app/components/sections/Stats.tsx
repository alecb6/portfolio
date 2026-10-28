"use client";

import Counter from "@/components/ui/Counter";
import Reveal from "@/components/ui/Reveal";
import { featuredProjects } from "@/data/projects";
import { opoAlertasFacts, profile, skills } from "@/data/profile";

const technologyCount = new Set(skills.flatMap(({ items }) => items)).size;

export default function Stats() {
  const year = new Date().getFullYear();

  const general = [
    { value: year - profile.codingSince, label: "años programando" },
    {
      value: year - profile.workingSince,
      label: "años como desarrollador profesional",
    },
    { value: featuredProjects.length, label: "proyectos destacados" },
    { value: technologyCount, label: "tecnologías con las que he trabajado" },
  ];

  return (
    <section id="cifras" className="container py-16 md:py-24">
      <Reveal>
        <p className="eyebrow mb-8">En cifras</p>
      </Reveal>
      <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
        {general.map(({ value, label }, i) => (
          <Reveal key={label} delay={i * 0.08}>
            <dt className="sr-only">{label}</dt>
            <dd className="font-display text-5xl font-semibold tracking-tight md:text-6xl">
              <Counter value={value} />
            </dd>
            <p aria-hidden className="mt-2 max-w-[14rem] text-muted">
              {label}
            </p>
          </Reveal>
        ))}
      </dl>

      <Reveal className="mt-16">
        <div className="relative overflow-hidden rounded-[2rem] bg-accent px-7 py-10 text-accent-on md:px-12 md:py-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-24 size-72 rounded-full border-[40px] border-white/10"
          />
          <p className="font-mono text-xs uppercase tracking-[0.18em] opacity-80">
            Dato curioso · OpoAlertas
          </p>
          <p className="mt-4 max-w-2xl font-display text-2xl font-medium leading-snug md:text-3xl">
            De lunes a sábado, antes de que te tomes el café, OpoAlertas ya ha
            leído el BOE y avisado de las oposiciones nuevas.
          </p>
          <dl className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
            {opoAlertasFacts.map(({ value, label }) => (
              <div key={label} className="flex flex-col-reverse justify-end">
                <dt className="mt-1 text-sm opacity-85">{label}</dt>
                <dd className="font-display text-4xl font-semibold md:text-5xl">
                  <Counter value={value} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    </section>
  );
}
