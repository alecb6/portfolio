"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense } from "react";
import Logo from "@/components/icons/LogoIcon";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { FaGithub, FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function NavigationMenuDemo() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavigationMenuContent />
    </Suspense>
  );
}

/**
 * NavigationMenuContent renders the main navigation menu with responsive behavior.
 * It includes a logo, toggle button for mobile view, and navigation links.
 * The menu items animate in and out based on the isOpen state.
 * Social media links are displayed in larger screens.
 * Uses framer-motion for animations and next/navigation for current path detection.
 */

function NavigationMenuContent() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-secondary/60 rounded-full max-w-3xl mx-auto my-6 backdrop-blur-sm">
      <div className="flex items-center justify-between md:hidden p-3">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Logo />
        </motion.div>

        <button onClick={() => setIsOpen(!isOpen)} className="text-black">
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      <NavigationMenu className="md:p-3 rounded-full w-full px-10 max-w-full">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <NavigationMenuList className="flex flex-col md:flex-row items-center md:gap-4">
                <NavigationMenuItem>
                  <NavigationMenuLink className="hidden md:block">
                    <motion.div
                      initial={{ opacity: 0, y: -20, x: 50 }}
                      animate={{ rotate: 360, opacity: 1, y: 0, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Logo />
                    </motion.div>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {renderNavLink("/", "Inicio", pathname, "text-lg")}
                {renderNavLink("/proyectos", "Proyectos", pathname, "text-lg")}
                {renderNavLink(
                  "/experiencia",
                  "Experiencia",
                  pathname,
                  "text-lg"
                )}
                {renderNavLink(
                  "/conocimientos",
                  "Conocimientos",
                  pathname,
                  "text-lg mb-4 md:mb-0"
                )}
                {renderNavLink(
                  "/conocimientos",
                  "Conocimientos",
                  pathname,
                  "text-lg mb-4 md:mb-0"
                )}
              </NavigationMenuList>
            </motion.div>
          )}
        </AnimatePresence>
        <NavigationMenuList className="hidden md:flex flex-row items-center md:gap-4">
          <button
            type="button"
            className="inline-flex items-center space-x-3 justify-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-neutral-700 focus-visible:ring-neutral-500 hover:bg-neutral-200 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 h-9 w-9 group opacity-80 transition-opacity duration-150 hover:opacity-100"
            title="Change theme"
            data-button-root=""
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide-icon lucide lucide-sun duration-500 group-hover:rotate-12"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </svg>
            <span className="sr-only">Toggle theme</span>
          </button>
          <NavigationMenuItem>
            <NavigationMenuLink className="hidden md:block">
              <Logo />
            </NavigationMenuLink>
          </NavigationMenuItem>

          {renderNavLink("/", "Inicio", pathname)}
          {renderNavLink("/proyectos", "Proyectos", pathname)}
          {renderNavLink("/experiencia", "Experiencia", pathname)}
          {renderNavLink("/conocimientos", "Conocimientos", pathname)}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="https://github.com/alecb6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/70"
            >
              <FaGithub size={24} />
            </Link>
            <Link
              href="https://www.instagram.com/alecb6/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/70"
            >
              <FaInstagram size={24} />
            </Link>
            <Link
              href="https://x.com/alecb2003"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/70"
            >
              <FaXTwitter size={24} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/alejandro-cruz-ballestero-347a87349/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/70"
            >
              <FaLinkedin size={24} />
            </Link>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}

// Helper para los links
function renderNavLink(
  href: string,
  label: string,
  pathname: string,
  className?: string
) {
  if (pathname === href) return null;

  return (
    <NavigationMenuItem>
      <Link href={href} legacyBehavior passHref>
        <NavigationMenuLink
          className={`${navigationMenuTriggerStyle()} ${className} bg-none md:px-4 px-1 md:text-xl text-[16px] font-normal text-white !rounded-full`}
        >
          {label}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
}
