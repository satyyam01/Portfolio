"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/constants";
import Image from "next/image";
import { Github, ExternalLink, Box, Activity, ShieldCheck, Zap } from "lucide-react";

const projectIcons: Record<string, any> = {
  farmtrack: Box,
  lumora: Activity,
  finsage: ShieldCheck,
};

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-zinc-500">Building solutions for problems that matter.</p>
        </div>

        <div className="space-y-32">
          {PROJECTS.map((project, idx) => {
            const Icon = projectIcons[project.id as keyof typeof projectIcons] || Box;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.1 }}
                className={`flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 lg:gap-20`}
              >
                {/* Visual Side */}
                <div className="flex-1 group">
                  <motion.a 
                    href={project.demo !== "#" ? project.demo : project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block relative"
                    whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {/* Browser Mockup Frame */}
                    <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl transition-all duration-500 group-hover:border-blue-500/40 group-hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)]">
                      {/* Inner Glow */}
                      <div className="absolute inset-0 border border-white/5 rounded-2xl pointer-events-none z-20" />
                      
                      {/* Browser Window Header */}
                      <div className="h-9 bg-zinc-900/80 backdrop-blur-sm border-b border-zinc-800 flex items-center px-4 gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                      </div>

                    {/* Project Image Container */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                      {/* Interactive Overlay */}
                      <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                      
                      {/* Project Image */}
                      {project.image ? (
                        <Image 
                          src={project.image} 
                          alt={project.title}
                          fill
                          className="object-cover object-top transition-all duration-700 group-hover:scale-[1.02]"
                          priority={idx === 0}
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Icon className="w-16 h-16 text-zinc-700 group-hover:text-blue-500/20 transition-colors" />
                        </div>
                      )}
                      </div>
                    </div>
                  </motion.a>

                  {/* Tech Stack - Re-anchored below the image */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <motion.span 
                        key={t}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-lg text-[11px] font-mono text-blue-400 group-hover:border-blue-500/30 transition-colors"
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Content Side */}
                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className="text-sm font-mono text-blue-500 mb-2">{project.subtitle}</h3>
                    <h4 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h4>
                    <p className="text-zinc-400 text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800">
                    <h5 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                       <Zap className="w-4 h-4 text-yellow-500" />
                       Features
                    </h5>
                    <ul className="space-y-3">
                      {project.features.map(f => (
                        <li key={f} className="text-zinc-500 text-sm flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <a href={project.github} className="flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 transition-colors text-sm font-medium">
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                    {/* <a href={project.demo} className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition-colors text-sm font-medium">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a> */}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
