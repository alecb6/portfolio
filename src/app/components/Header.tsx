"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import Logo from "@/components/icons/LogoIcon";
import ThemeToggle from "@/components/ThemeToggle";
import { profile } from "@/data/profile";

const links = [
  { id: "proyectos", label: "Proyectos" },
  { id: "experiencia", label: "Experiencia" },
  { id: "conocimientos", label: "Conocimientos" },
  { id: "contacto", label: "Contacto" },
];

const socials = [
  { href: profile.socials.github, label: "GitHub", icon: FaGithub },
  { href: profile.socials.linkedin, label: "LinkedIn", icon: FaLinkedin },
  { href: profile.socials.instagram, label: "Instagram", icon: FaInstagram },
  { href: profile.socials.x, label: "X", icon: FaXTwitter },
];

// Secciones sin enlace propio que cuentan como otra del menú
const sectionAliases: Record<string, string> = { github: "proyectos" };

// Marca el enlace de la sección que se está leyendo
function useActiveSection() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("main section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = sectionAliases[entry.target.id] ?? entry.target.id;
          // En el inicio o en las cifras no se marca ningún enlace
          setActive(links.some((link) => link.id === id) ? id : null);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return active;
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const active = useActiveSection();

  return (
    <div className="fixed inset-x-0 top-4 z-50 px-4">
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="site-header mx-auto max-w-6xl rounded-full border border-line bg-surface/80 px-3 py-3 backdrop-blur-md md:px-4"
      >
        <nav className="flex items-center justify-between gap-4">
          <a
            href="#inicio"
            aria-label="Ir al inicio"
            className="rounded-xl transition-transform hover:-rotate-6"
          >
            <Logo />
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`relative block rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active === id ? "text-ink" : "text-muted hover:text-ink"
                  }`}
                >
                  {active === id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full bg-accent-soft"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-1 lg:flex">
              {socials.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid size-9 place-items-center rounded-full text-muted transition-all hover:-translate-y-0.5 hover:text-accent-ink"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isOpen}
              className="grid size-10 place-items-center rounded-full border border-line bg-surface md:hidden"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="card mx-auto mt-2 max-w-6xl p-3 shadow-lg md:hidden"
          >
            <ul className="flex flex-col">
              {links.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-2xl px-4 py-3 font-medium hover:bg-accent-soft"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-2 flex gap-2 border-t border-line px-2 pt-3">
              {socials.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-full text-muted hover:text-accent-ink"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
