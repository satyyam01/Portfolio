"use client";

import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

export const Spaceship = () => {
  return (
    <div className="relative flex items-center justify-center lg:justify-start mb-12">
      {/* Background Particles / Stars */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.8, 0], 
              scale: [0, 1, 0],
              x: (i % 2 === 0 ? 1 : -1) * (Math.random() * 40 + 20),
              y: (i % 3 === 0 ? 1 : -1) * (Math.random() * 40 + 20),
            }}
            transition={{ 
              duration: 2 + Math.random(), 
              repeat: Infinity, 
              delay: i * 0.4,
              ease: "easeInOut"
            }}
            className="absolute w-0.5 h-0.5 bg-blue-400 rounded-full"
          />
        ))}
      </div>

      {/* Main Spaceship Group */}
      <motion.div
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          opacity: { duration: 0.8 },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
        className="relative z-10 p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-sm cursor-grab active:cursor-grabbing group"
      >
        <div className="relative">
          {/* Engine Glow */}
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-500/40 rounded-full blur-md"
          />
          
          <Rocket className="w-6 h-6 text-blue-500 transform -rotate-45 group-hover:text-blue-400 transition-colors" />
        </div>

        {/* Transmission / Signal lines */}
        <div className="absolute -top-1 -right-1 flex gap-0.5">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ height: ["4px", "8px", "4px"] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
              className="w-0.5 bg-blue-500/50 rounded-full"
            />
          ))}
        </div>
      </motion.div>

      {/* Orbiting Ring (Very Subtle) */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute w-24 h-24 border border-blue-500/5 rounded-full pointer-events-none"
      />
    </div>
  );
};
