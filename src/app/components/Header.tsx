"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense } from "react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function NavigationMenuDemo() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavigationMenuContent />
    </Suspense>
  );
}

function NavigationMenuContent() {
  const pathname = usePathname();

  return (
    <NavigationMenu className="bg-zinc-300 p-3 rounded-full animate-blurred-fade-in shadow-xl">
      <NavigationMenuList>
        {pathname !== "/" && (
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} bg-zinc-300 md:px-4 px-1 md:text-xl text-[16px] font-normal text-black !rounded-full`}
              >
                Inicio
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        )}
        {pathname !== "/perfil" && (
          <NavigationMenuItem>
            <Link href="/perfil" legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} bg-zinc-300 md:px-4 px-1 md:text-xl text-[16px] font-normal text-black !rounded-full`}
              >
                Perfil
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        )}
        {pathname !== "/proyectos" && (
          <NavigationMenuItem>
            <Link href="/proyectos" legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} bg-zinc-300 md:px-4 px-1 md:text-xl text-[16px] font-normal text-black !rounded-full`}
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
                className={`${navigationMenuTriggerStyle()} bg-zinc-300 md:px-4 px-1 md:text-xl text-[16px] font-normal text-black !rounded-full`}
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
                className={`${navigationMenuTriggerStyle()} bg-zinc-300 md:px-4 px-1 md:text-xl text-[16px] font-normal text-black !rounded-full`}
              >
                Conocimientos
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
