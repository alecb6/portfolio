"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy, Download } from "lucide-react";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
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
    <section id="contacto" className="container pb-10 pt-8 md:pt-12">
      <h2 className="border-t border-line pt-12 font-display text-5xl font-semibold tracking-tight md:pt-16 md:text-7xl">
        ¿Hablamos?
      </h2>
      <p className="mt-5 max-w-xl text-lg text-muted">
        Si tienes un proyecto, una oferta o quieres comentar algo, escríbeme.
        Pulsa en el correo para copiarlo.
      </p>

      <button
        type="button"
        onClick={copyEmail}
        className="group mt-10 flex max-w-full items-center gap-4 text-left"
      >
        <span className="font-display text-2xl font-semibold text-accent-ink underline decoration-accent/30 decoration-4 underline-offset-8 transition-colors group-hover:decoration-accent sm:text-4xl md:text-5xl">
          {profile.email.split("@")[0]}
          <wbr />@{profile.email.split("@")[1]}
        </span>
        <span className="grid size-12 shrink-0 place-items-center rounded-full border border-line bg-surface transition-colors group-hover:border-accent/60">
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={copied ? "copied" : "copy"}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              {copied ? (
                <Check size={20} className="text-accent-ink" />
              ) : (
                <Copy size={20} />
              )}
            </motion.span>
          </AnimatePresence>
        </span>
      </button>
      <p
        aria-live="polite"
        className="mt-3 h-6 text-sm font-medium text-accent-ink"
      >
        {copied && "Correo copiado"}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
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
          <Download size={16} /> Descargar CV
        </a>
      </div>

      <footer className="mt-20 flex flex-col justify-between gap-3 border-t border-line pt-8 text-sm text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. Hecho con Next.js y
          Tailwind CSS.
        </p>
        <a href="#inicio" className="font-medium hover:text-ink">
          Volver arriba
        </a>
      </footer>
    </section>
  );
}
