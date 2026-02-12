"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/constants";
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
          <p className="text-zinc-500">Building solution for problems that matter.</p>
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
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 lg:gap-20`}
              >
                {/* Visual Side */}
                <div className="flex-1">
                  <div className="relative aspect-video rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 group">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end h-full">
                       <div className="flex gap-2 flex-wrap">
                        {project.tech.map(t => (
                          <span key={t} className="px-3 py-1 bg-zinc-950/80 rounded-full text-xs font-mono text-blue-400 border border-zinc-800">
                            {t}
                          </span>
                        ))}
                       </div>
                    </div>
                    {/* Placeholder for architecture diagram / preview */}
                    <div className="absolute inset-0 flex items-center justify-center">
                       <Icon className="w-24 h-24 text-zinc-800 group-hover:text-blue-500/20 transition-colors" />
                    </div>
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
                    <a href={project.demo} className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition-colors text-sm font-medium">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
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
