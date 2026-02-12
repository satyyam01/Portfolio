"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Code2 } from "lucide-react";

export const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-zinc-950/50 border-b border-zinc-800/50"
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white">
          S
        </div>
        <span className="font-semibold tracking-tight hidden sm:block">Satyam Nautiyal</span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
        <Link href="#about" className="hover:text-white transition-colors">About</Link>
        <Link href="#projects" className="hover:text-white transition-colors">Projects</Link>
        <Link href="#stack" className="hover:text-white transition-colors">Stack</Link>
        <Link href="#problem-solving" className="hover:text-white transition-colors">Solved</Link>
        <Link href="#timeline" className="hover:text-white transition-colors">Timeline</Link>
      </div>

      <div className="flex items-center gap-4">
        <a href="https://github.com/satyyam01" target="_blank" className="p-2 hover:bg-zinc-800 rounded-full transition-colors">
          <Github className="w-5 h-5" />
        </a>
        <a href="https://www.linkedin.com/in/satyam-nautiyal-378770254/" target="_blank" className="p-2 hover:bg-zinc-800 rounded-full transition-colors">
          <Linkedin className="w-5 h-5" />
        </a>
        <a href="/resume.pdf" className="px-4 py-2 bg-white text-black text-sm font-medium rounded-full hover:bg-zinc-200 transition-colors">
          Resume
        </a>
      </div>
    </motion.nav>
  );
};
