"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense } from "react";
import Logo from "@/components/icons/LogoIcon";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

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
    <nav className="bg-zinc-400 rounded-2xl animate-fade-in w-full md:w-[600px] relative">
      <div className="flex items-center justify-evenly items-center md:hidden p-3 md:p-0 transition-all animate-slide-in-top">
        <Logo />
        <button onClick={() => setIsOpen(!isOpen)} className="text-black">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <NavigationMenu className="md:p-3 rounded-full animate-fade-in w-[100%] md:w-[600px]">
        <NavigationMenuList
          className={cn(
            "flex-col md:flex-row md:flex items-center gap-4",
            isOpen ? "flex" : "hidden md:flex"
          )}
        >
          <NavigationMenuItem>
            <NavigationMenuLink className="hidden md:block">
              <Logo />
            </NavigationMenuLink>
          </NavigationMenuItem>
          {pathname !== "/" && (
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} bg-zinc-400 md:px-4 px-1 md:text-xl text-[16px] font-normal text-black !rounded-full`}
                >
                  Inicio
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          )}
          {pathname !== "/proyectos" && (
            <NavigationMenuItem>
              <Link href="/proyectos" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} bg-zinc-400 md:px-4 px-1 md:text-xl text-[16px] font-normal text-black !rounded-full`}
                >
                  Proyectos
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          )}
          {pathname !== "/experiencia" && (
            <NavigationMenuItem>
              <Link href="/experiencia" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} bg-zinc-400 md:px-4 px-1 md:text-xl text-[16px] font-normal text-black !rounded-full`}
                >
                  Experiencia
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          )}
          {pathname !== "/conocimientos" && (
            <NavigationMenuItem>
              <Link href="/conocimientos" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} bg-zinc-400 md:px-4 px-1 md:text-xl text-[16px] font-normal text-black !rounded-full`}
                >
                  Conocimientos
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          )}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
