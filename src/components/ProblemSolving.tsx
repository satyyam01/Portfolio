"use client";

import { motion } from "framer-motion";
import { Code2, Flame, Award, BarChart } from "lucide-react";

export const ProblemSolving = () => {
  return (
    <section id="problem-solving" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Problem Solving</h2>
            <p className="text-zinc-400 text-lg mb-8">
              “I solve problems to think better, not just to pass interviews.”
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Problems Solved", value: "350+", icon: Code2 },
                { label: "Current Streak", value: "45 Days", icon: Flame },
                { label: "Global Rank", value: "Top 12%", icon: Award },
                { label: "Accuracy", value: "88%", icon: BarChart },
              ].map((stat, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
                  <stat.icon className="w-6 h-6 text-blue-500 mb-4" />
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-xs text-zinc-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Code2 className="w-32 h-32" />
              </div>
              
              <h3 className="text-xl font-bold mb-8">Platform Expertise</h3>
              
              <div className="space-y-6">
                {[
                  { label: "Easy", solved: 120, total: 150, color: "bg-emerald-500" },
                  { label: "Medium", solved: 180, total: 250, color: "bg-yellow-500" },
                  { label: "Hard", solved: 50, total: 100, color: "bg-red-500" },
                ].map((diff) => (
                  <div key={diff.label}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-zinc-400 font-medium">{diff.label}</span>
                      <span className="text-zinc-600">{diff.solved} / {diff.total}</span>
                    </div>
                    <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(diff.solved/diff.total)*100}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className={`h-full ${diff.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 flex items-center justify-between p-4 rounded-xl bg-zinc-950 border border-zinc-800">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                       <Award className="w-5 h-5 text-blue-500" />
                    </div>
                    <div>
                      <div className="text-sm font-bold">Knight Badge</div>
                      <div className="text-[10px] text-zinc-500 uppercase">LeetCode Milestone</div>
                    </div>
                 </div>
                 <a href="https://leetcode.com/u/satyyam01/" className="text-xs text-blue-500 hover:underline">View Profile</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
