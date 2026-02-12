"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronRight, Github, Code2, Download } from "lucide-react";

const TYPING_LINES = [
  "Backend Developer",
  "AI Systems Builder",
  "System Design Enthusiast",
  "Problem Solver",
];

export const Hero = () => {
  const [lineIndex, setLineIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentLine = TYPING_LINES[lineIndex];
    const typeSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && text === currentLine) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLineIndex((prev) => (prev + 1) % TYPING_LINES.length);
      } else {
        setText(currentLine.substring(0, isDeleting ? text.length - 1 : text.length + 1));
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, lineIndex]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs font-medium text-zinc-400 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Available for SDE Roles
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-6"
        >
          Satyam <span className="text-zinc-600">Nautiyal</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="h-8 mb-8"
        >
          <p className="text-xl md:text-2xl text-blue-400 font-mono">
            {text}
            <span className="ml-1 inline-block w-2 h-6 bg-blue-400 animate-pulse" />
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-zinc-400 max-w-2xl mx-auto mb-12 text-lg"
        >
          Building robust backend systems and AI-powered applications. 
          Focused on scalability, efficiency, and engineering excellence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button className="px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-zinc-200 transition-all flex items-center gap-2 group">
            View Projects
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 bg-zinc-900 text-white font-semibold rounded-xl border border-zinc-800 hover:bg-zinc-800 transition-all flex items-center gap-2">
            Download Resume
            <Download className="w-4 h-4" />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 flex items-center justify-center gap-8 text-zinc-500"
        >
          <a href="https://github.com/satyyam01?tab=repositories" className="hover:text-white transition-colors flex items-center gap-2">
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </a>
          <a href="https://leetcode.com/u/satyyam01/" className="hover:text-white transition-colors flex items-center gap-2">
            <Code2 className="w-5 h-5" />
            <span>LeetCode</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
