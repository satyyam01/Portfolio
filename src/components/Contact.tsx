"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-24 px-6 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Let’s Connect.
            </h2>
            <p className="text-zinc-500 text-lg">
              Looking to join teams where I can learn, contribute, and refine my engineering depth.
            </p>
          </div>

          <div className="w-full md:w-auto space-y-4">
            <a
              href="mailto:nautiyalsatyam01@gmail.com<"
              className="flex items-center justify-between gap-8 p-6 rounded-2xl bg-white text-black font-bold group hover:bg-zinc-200 transition-all"
            >
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span>nautiyalsatyam01@gmail.com</span>
              </div>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://github.com/satyyam01?tab=repositories"
                className="flex items-center justify-center gap-2 p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all font-medium"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/satyam-nautiyal-378770254/"
                className="flex items-center justify-center gap-2 p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all font-medium"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        
        <footer className="mt-32 pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="text-zinc-600 text-sm">
            © 2026 Satyam Nautiyal.
            </div>
          </div>
          
          <div className="flex gap-8 text-zinc-500 text-xs font-mono">
            <span>STABLE_BUILD_V1.0</span>
            <span>LATENCY: 12MS</span>
          </div>
        </footer>
      </div>
    </section>
  );
};
