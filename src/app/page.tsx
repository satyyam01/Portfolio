"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { TechStack } from "@/components/TechStack";
import { Projects } from "@/components/Projects";
// ?import { ProblemSolving } from "@/components/ProblemSolving";
import { SystemDesign } from "@/components/SystemDesign";
import { Timeline } from "@/components/Timeline";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-zinc-950 text-white selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <TechStack />
      {/* <ProblemSolving /> */}
      <SystemDesign />
      <Timeline />
      <Contact />
    </main>
  );
}
