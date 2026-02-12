"use client";

import { motion } from "framer-motion";
import { TIMELINE } from "@/lib/constants";

export const Timeline = () => {
  return (
    <section id="timeline" className="py-24 px-6 overflow-hidden bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Journey</h2>
          <p className="text-zinc-500">From fundamentals to advanced systems engineering.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 overflow-x-auto pb-12 scrollbar-hide">
          {TIMELINE.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="min-w-[300px] flex-1 p-8 rounded-3xl bg-zinc-900 border border-zinc-800 relative group"
            >
              <div className="text-4xl font-bold text-zinc-800 mb-6 group-hover:text-blue-500 transition-colors">
                {item.year}
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-zinc-500 leading-relaxed text-sm">
                {item.description}
              </p>
              
              <div className="absolute top-8 right-8 w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
