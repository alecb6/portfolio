"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, Check, Copy, Download } from "lucide-react";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Reveal from "@/components/ui/Reveal";
import { profile } from "@/data/profile";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contacto" className="container pb-10 pt-16 md:pt-24">
      <Reveal>
        <div className="card relative overflow-hidden px-7 py-14 text-center md:px-16 md:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 left-1/2 size-80 -translate-x-1/2 rounded-full bg-accent/20 blur-3xl"
          />
          <p className="eyebrow">Contacto</p>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            ¿Hablamos?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted">
            Si tienes un proyecto, una oferta o simplemente quieres comentar
            algo, escríbeme.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4">
            <button
              type="button"
              onClick={copyEmail}
              className="btn-primary px-7 py-4 text-base"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={copied ? "copied" : "copy"}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.15 }}
                  className="inline-flex items-center gap-2"
                >
                  {copied ? <Check size={18} /> : <Copy size={18} />}
                  {copied ? "¡Email copiado!" : profile.email}
                </motion.span>
              </AnimatePresence>
            </button>
            <p className="text-sm text-muted">
              Haz clic para copiarlo o{" "}
              <a
                href={`mailto:${profile.email}`}
                className="font-medium text-accent-ink underline-offset-4 hover:underline"
              >
                abre tu correo
              </a>
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <FaLinkedin size={16} /> LinkedIn
            </a>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <FaGithub size={16} /> GitHub
            </a>
            <a href={profile.cvUrl} download className="btn-ghost">
              <Download size={16} /> CV en PDF
            </a>
          </div>
        </div>
      </Reveal>

      <footer className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 text-sm text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. Hecho con Next.js y
          Tailwind CSS.
        </p>
        <a
          href="#inicio"
          className="group inline-flex items-center gap-1.5 font-medium hover:text-ink"
        >
          Volver arriba
          <ArrowUp
            size={14}
            className="transition-transform group-hover:-translate-y-0.5"
          />
        </a>
      </footer>
    </section>
  );
}
