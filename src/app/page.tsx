"use client";

import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { TechStack } from "../components/TechStack";
import { Projects } from "../components/Projects";
import { Timeline } from "../components/Timeline";
import { Contact } from "../components/Contact";
import { StarField } from "../components/StarField";

export default function Home() {
  return (
    <main className="text-white selection:bg-blue-500/30 relative min-h-screen">
      {/* Global Persistence Background */}
      <StarField density={400} fixed />
      
      <Navbar />
      
      <div className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Timeline />
        <Contact />
      </div>
    </main>
  );
}
