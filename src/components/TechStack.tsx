"use client";

import { motion } from "framer-motion";
import { TECH_STACK } from "@/lib/constants";
import { Database, Cpu, Layout, Settings } from "lucide-react";

const icons: Record<string, any> = {
  backend: Database,
  ai: Cpu,
  frontend: Layout,
  devops: Settings,
};

export const TechStack = () => {
  return (
    <section id="stack" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical Stack</h2>
          <p className="text-zinc-500">Engineered with modern tools for production-level performance.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(TECH_STACK).map(([category, skills], idx) => {
            const Icon = icons[category];
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-blue-500/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-6 capitalize">{category}</h3>
                <div className="space-y-4">
                  {skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-zinc-400">{skill.name}</span>
                        <span className="text-zinc-600">{skill.level}%</span>
                      </div>
                      <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                          viewport={{ once: true }}
                          className="h-full bg-blue-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
