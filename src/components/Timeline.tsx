"use client";

import { motion } from "framer-motion";
import { GraduationCap, Landmark, Building2, Briefcase } from "lucide-react";

const nodes = [
  { 
    id: 1, 
    date: "Sept 2022",
    label: "Beginning the Voyage", 
    icon: GraduationCap, 
    desc: "Started B.Tech in Computer Science & Engineering, laying the foundation in core systems and algorithms." 
  },
  { 
    id: 2, 
    date: "June – Aug 2024",
    label: "DRDO Internship", 
    icon: Landmark, 
    desc: "Engineered secure and efficient solutions for defense-grade applications, focusing on reliability and precision." 
  },
  { 
    id: 3, 
    date: "Dec 2024 – Feb 2025",
    label: "Infosys Internship", 
    icon: Building2, 
    desc: "Developed enterprise-scale software solutions using industry-standard backend patterns and cloud fundamentals." 
  },
  { 
    id: 4, 
    date: "Dec 2025 – Present",
    label: "Accenture Internship", 
    icon: Briefcase, 
    desc: "Currently refining high-performance systems and contributing to large-scale digital transformation projects." 
  },
];

export const Timeline = () => {
  return (
    <section id="timeline" className="py-24 px-6">
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
              <div className={`flex flex-col ${idx % 2 === 0 ? "md:items-end text-right" : "md:items-start text-left"} p-6 rounded-2xl bg-zinc-900 border border-zinc-800 w-full hover:border-blue-500/50 transition-all group`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                    <node.icon className="w-5 h-5 text-blue-500" />
                  </div>
                  <span className="text-xs font-mono text-blue-500/80 bg-blue-500/5 px-2 py-1 rounded md:hidden">
                    {node.date}
                  </span>
                </div>
                <span className="hidden md:block text-xs font-mono text-blue-500/80 mb-2 uppercase tracking-wider">
                  {node.date}
                </span>
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
