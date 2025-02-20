import React from "react";
import Experience from "@/components/experience/Experience";
import Breadcrumbs from "@/components/BreadCrumbs";

export default function Profile() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pt-12">
      <nav className="absolute top-0 left-0 right-0 px-12 py-6 ">
        <Breadcrumbs />
      </nav>
      <h1 className="text-3xl">Experiencia</h1>

      <Experience />
    </div>
  );
}
