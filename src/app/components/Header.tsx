import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense } from "react";
import Logo from "@/components/icons/LogoIcon";
import Socials from "@/components/Socials";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function NavigationMenuDemo() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavigationMenuContent />
    </Suspense>
  );
}

function NavigationMenuContent() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-9/12 md:w-fit">
      <nav className="bg-zinc-400 rounded-2xl w-full md:w-[600px] relative">
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

        <NavigationMenu className="md:p-3 rounded-full w-full md:w-[600px] max-w-full">
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
                  {renderNavLink(
                    "/proyectos",
                    "Proyectos",
                    pathname,
                    "text-lg"
                  )}
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
          <NavigationMenuList className="hidden md:flex flex-row items-center md:gap-4">
            <NavigationMenuItem>
              <NavigationMenuLink className="hidden md:block">
                <Logo />
              </NavigationMenuLink>
            </NavigationMenuItem>

            {renderNavLink("/", "Inicio", pathname)}
            {renderNavLink("/proyectos", "Proyectos", pathname)}
            {renderNavLink("/experiencia", "Experiencia", pathname)}
            {renderNavLink("/conocimientos", "Conocimientos", pathname)}
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
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
          className={`${navigationMenuTriggerStyle()} ${className} bg-zinc-400 md:px-4 px-1 md:text-xl text-[16px] font-normal text-black !rounded-full`}
        >
          {label}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
}
