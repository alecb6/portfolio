"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense } from "react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

function RouteController() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const url = `${pathname}?${searchParams}`;

  return url;
}

export default function NavigationMenuDemo() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavigationMenu className="bg-zinc-300 p-3 rounded-full animate-slide-in-top shadow-xl">
        <NavigationMenuList>
          {RouteController() !== "/?" && (
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} bg-zinc-300 text-xl font-normal text-black !rounded-full`}
                >
                  Inicio
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          )}
          {RouteController() !== "/perfil?" && (
            <NavigationMenuItem>
              <Link href="/perfil" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} bg-zinc-300 text-xl font-normal text-black !rounded-full`}
                >
                  Perfil
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          )}
          {RouteController() !== "/proyectos?" && (
            <NavigationMenuItem>
              <Link href="/proyectos" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} bg-zinc-300 text-xl font-normal text-black !rounded-full`}
                >
                  Proyectos
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          )}
          {RouteController() !== "/experiencia?" && (
            <NavigationMenuItem>
              <Link href="/experiencia" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} bg-zinc-300 text-xl font-normal text-black !rounded-full`}
                >
                  Experiencia
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          )}
          {RouteController() !== "/conocimientos?" && (
            <NavigationMenuItem>
              <Link href="/conocimientos" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} bg-zinc-300 text-xl font-normal text-black !rounded-full`}
                >
                  Conocimientos
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          )}
        </NavigationMenuList>
      </NavigationMenu>
    </Suspense>
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
