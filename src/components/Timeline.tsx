"use client";

import { motion } from "framer-motion";
import { User, Server, Database, Shield, Zap, Cpu } from "lucide-react";

const nodes = [
  { id: 1, label: "User Interface", icon: User, desc: "React + TailwindCSS" },
  { id: 2, label: "Authentication", icon: Shield, desc: "JWT + Bcrypt" },
  { id: 3, label: "API Gateway", icon: Server, desc: "Next.js / Express" },
  { id: 4, label: "Caching Layer", icon: Zap, desc: "Redis" },
  { id: 5, label: "Primary DB", icon: Database, desc: "PostgreSQL / Mongo" },
  { id: 6, label: "AI Engine", icon: Cpu, desc: "LLM + RAG (Pinecone)" },
];

export const Timeline = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Journey</h2>
          <p className="text-zinc-500">From fundamentals to designing for scalability, resilience, and intelligence.</p>
        </div>

        <div className="relative flex flex-col items-center gap-12">
          {/* Vertical Line */}
          <div className="absolute top-0 bottom-0 w-px bg-zinc-800 hidden md:block" />

          {nodes.map((node, idx) => (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`relative z-10 flex items-center w-full md:w-1/2 ${idx % 2 === 0 ? "md:justify-start md:pr-12 md:mr-[50%]" : "md:justify-end md:pl-12 md:ml-[50%]"}`}
            >
              <div className={`flex flex-col ${idx % 2 === 0 ? "md:items-end text-right" : "md:items-start text-left"} p-6 rounded-2xl bg-zinc-900 border border-zinc-800 w-full hover:border-blue-500/50 transition-all`}>
                <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-4">
                  <node.icon className="w-5 h-5 text-blue-500" />
                </div>
                <h3 className="text-lg font-bold mb-1">{node.label}</h3>
                <p className="text-sm text-zinc-500">{node.desc}</p>
              </div>
              
              {/* Connector Dot */}
              <div className="absolute top-1/2 left-full md:left-auto md:right-[-6px] transform -translate-y-1/2 w-3 h-3 rounded-full bg-blue-500 hidden md:block" style={{ [idx % 2 === 0 ? 'right' : 'left']: '-5.5px' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
