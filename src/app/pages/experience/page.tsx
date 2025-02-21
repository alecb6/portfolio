import React from "react";
import Experience from "@/components/experience/Experience";
import Header from "@/components/Header";

export default function Profile() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pt-12">
      <Header returnButton={true}/>
      <h1 className="text-3xl">Experiencia</h1>

      <Experience />
    </div>
  );
}
