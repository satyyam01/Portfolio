"use client";

import { motion } from "framer-motion";
import { TECH_STACK } from "@/lib/constants";

export const TechStack = () => {
  return (
    <section id="stack" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical Stack</h2>
          <p className="text-zinc-500 font-mono text-sm tracking-widest uppercase">
            Capability through organization
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {TECH_STACK.map((category, idx) => (
            <motion.div
              key={category.domain}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.4, 
                delay: idx * 0.1,
                ease: "easeOut" 
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 hover:border-zinc-700 hover:bg-zinc-900/50 transition-all flex flex-col h-full"
            >
              <div className="mb-6">
                <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-500 mb-3 group-hover:text-blue-400 transition-colors">
                  {category.domain}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed font-medium">
                  {category.philosophy}
                </p>
              </div>

              <div className="mt-auto pt-6 border-t border-zinc-800/50">
                <ul className="space-y-3">
                  {category.tools.map((tool) => (
                    <li 
                      key={tool} 
                      className="text-sm text-zinc-500 group-hover:text-zinc-300 transition-colors flex items-center gap-2"
                    >
                      <div className="w-1 h-1 rounded-full bg-zinc-800 group-hover:bg-blue-500 transition-colors" />
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Subtle hover glow effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="absolute inset-0 bg-blue-500/5 blur-xl rounded-2xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
