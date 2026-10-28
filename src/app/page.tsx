import Hero from "@/components/sections/Hero";
import TechStrip from "@/components/slider/Slider";
import Stats from "@/components/sections/Stats";
import Projects from "@/components/sections/Projects";
import GithubActivity from "@/components/sections/GithubActivity";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechStrip />
      <Stats />
      <Projects />
      <GithubActivity />
      <Experience />
      <Skills />
      <Contact />
    </>
  );
}
