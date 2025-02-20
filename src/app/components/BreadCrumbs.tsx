"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BreadCrumbs() {
  const pathname = usePathname();
  // Separamos la ruta actual en partes, ignorando el primer elemento vacío.
  const pathParts = pathname.split("/").filter((part) => part);

  // Función para construir la URL acumulada para cada segmento.
  const createPath = (index: number) =>
    "/" + pathParts.slice(0, index + 1).join("/");

  return (
    <nav aria-label="breadcrumb">
      <ol style={{ display: "flex", listStyle: "none", padding: 0 }}>
        <li>
          <Link href="/">Inicio</Link>
        </li>
        {pathParts.map((part, index) => (
          <li key={index} style={{ marginLeft: "0.5rem" }}>
            <span> / </span>
            <Link href={createPath(index)} className="underline">
              {part.charAt(0).toUpperCase() + part.slice(1)}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
