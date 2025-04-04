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
import DarkModeButton from "./DarkModeButton";

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
    <header className="w-8/12 bg-secondary/60 rounded-b-xl md:h-20 md:flex md:items-center rounded-xl backdrop-blur-md">
      <div className="flex items-center justify-between md:hidden p-3">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center space-x-4 md:absolute md:-left-[165px]">
            <Logo />
          </div>
        </motion.div>

        <button onClick={() => setIsOpen(!isOpen)} className="text-black">
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      <NavigationMenu className="md:p-3 md:px-8 rounded-full px-10 mx-auto bg-none">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <NavigationMenuList className="flex flex-col items-center md:hidden">
                <NavigationMenuItem>
                  <NavigationMenuLink className="hidden md:block ">
                    <motion.div
                      initial={{ opacity: 0, y: -20, x: 50 }}
                      animate={{ rotate: 360, opacity: 1, y: 0, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <DarkModeButton />
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
              </NavigationMenuList>
            </motion.div>
          )}
        </AnimatePresence>
        <NavigationMenuList className="hidden md:flex flex-row items-center md:gap-16">
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
              className="text-primary hover:text-primary/70 hover:scale-125 transition-all ease-in-out"
            >
              <FaGithub size={24} />
            </Link>
            <Link
              href="https://www.instagram.com/alecb6/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/70 hover:scale-125 transition-all ease-in-out"
            >
              <FaInstagram size={24} />
            </Link>
            <Link
              href="https://x.com/alecb2003"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/70 hover:scale-125 transition-all ease-in-out"
            >
              <FaXTwitter size={24} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/alejandro-cruz-ballestero-347a87349/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/70 hover:scale-125 transition-all ease-in-out"
            >
              <FaLinkedin size={24} />
            </Link>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="absolute right-12 top-6 hidden md:flex">
        <DarkModeButton />
      </div>
    </header>
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
