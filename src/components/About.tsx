"use client";

import { motion } from "framer-motion";
import { User, Target, Zap } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Title & Badge */}
          <div className="lg:col-span-4 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs font-medium text-blue-400"
            >
              <User className="w-3 h-3" />
              Profile
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold tracking-tight"
            >
              About Me
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="h-1 w-20 bg-blue-600 rounded-full"
            />
          </div>

          {/* Right Side: Content */}
          <div className="lg:col-span-8 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="prose prose-invert max-w-none"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">
                Hi, I’m Satyam.
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                I build backend systems and AI-driven applications with a focus on structure, reliability, and practical impact. I care about understanding how components fit together — authentication, caching, data modeling, and AI layers — and designing them with intention.
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                Most of my recent work revolves around backend engineering, Redis-based performance optimization, and retrieval-augmented AI systems. I try to prioritize clarity over complexity and build software that behaves predictably under load.
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Right now, I’m focused on strengthening my fundamentals in data structures, system design, and production-grade backend development. The goal is straightforward: become a dependable engineer who can design, build, and improve real systems.
              </p>
            </motion.div>

            {/* Sub-sections / Interests
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-zinc-900">
               <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/50"
               >
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-5 h-5 text-blue-500" />
                    <h4 className="font-bold">Current Focus</h4>
                  </div>
                  <p className="text-sm text-zinc-500">
                    Strengthening fundamentals in DS, System Design, and Production-grade Backend.
                  </p>
               </motion.div>

               <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/50"
               >
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="w-5 h-5 text-emerald-500" />
                    <h4 className="font-bold">Outside of Code</h4>
                  </div>
                  <p className="text-sm text-zinc-500">
                    Training regularly, following Formula 1, and refining long-term discipline.
                  </p>
               </motion.div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
