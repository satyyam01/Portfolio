"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronRight, Github, Code2, Download } from "lucide-react";
import Image from "next/image";
import { Spaceship } from "@/components/Spaceship";

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

  // Parallax Setup
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);

  const translateTextX = useTransform(dx, [-500, 500], [10, -10]);
  const translateTextY = useTransform(dy, [-500, 500], [10, -10]);
  const translateImgX = useTransform(dx, [-500, 500], [-20, 20]);
  const translateImgY = useTransform(dy, [-500, 500], [-20, 20]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

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
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 max-w-7xl mx-auto w-full">
        {/* Left Side: Text Block */}
        <motion.div 
          style={{ x: translateTextX, y: translateTextY }}
          className="text-center lg:text-left flex-[1.2]"
        >
          <Spaceship />

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white mb-6"
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
            className="text-zinc-400 max-w-2xl lg:mx-0 mx-auto mb-12 text-lg"
          >
            Building robust backend systems and AI-powered applications. 
            Focused on scalability, efficiency, and engineering excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center lg:justify-start justify-center gap-4"
          >
            <button className="px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-zinc-200 transition-all flex items-center gap-2 group">
              View Projects
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-zinc-900 text-white font-semibold rounded-xl border border-zinc-800 hover:bg-zinc-800 transition-all flex items-center gap-2">
              View Resume
              <Download className="w-4 h-4" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-16 flex items-center lg:justify-start justify-center gap-8 text-zinc-500"
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
        </motion.div>

        {/* Right Side: Portrait Portrait */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          style={{ x: translateImgX, y: translateImgY }}
          className="flex-1 lg:flex items-center justify-center p-4"
        >
          <div className="relative group">
            {/* Soft Glow */}
            <div className="absolute -inset-4 bg-blue-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[320px] lg:h-[320px] grayscale-[0.9] opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl shadow-blue-500/5">
              <Image 
                src="/profile.jpg"
                alt="Satyam Nautiyal"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Subtle decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-blue-500/20 rounded-br-2xl pointer-events-none" />
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-zinc-800/50 rounded-tl-2xl pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
