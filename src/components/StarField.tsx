"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

interface StarFieldProps {
  density?: number;
  fixed?: boolean;
}

export const StarField = ({ density = 100, fixed = false }: StarFieldProps) => {
  const { scrollY } = useScroll();
  const scrollOpacity = useTransform(scrollY, [0, 800], [1, 0.9]);
  
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stars = useMemo(() => {
    return Array.from({ length: density }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.5 + 0.5,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 5,
    }));
  }, [density]);

  if (!mounted) return null;

  return (
    <motion.div 
      style={{ opacity: scrollOpacity }}
      className={`${fixed ? "fixed" : "absolute"} inset-0 pointer-events-none z-[-10] overflow-hidden`}
    >
      {/* Subtle Galactic Nebulae */}
      {[...Array(4)].map((_, i) => (
        <div
          key={`nebula-${i}`}
          className="absolute rounded-full blur-[120px] opacity-[0.02]"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 600 + 400}px`,
            height: `${Math.random() * 600 + 400}px`,
            backgroundColor: i % 2 === 0 ? "#3b82f6" : "#10b981",
          }}
        />
      ))}

      {stars.map((star) => (
        <motion.div
          key={star.id}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            scale: [0.8, 1, 0.8],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            borderRadius: "50%",
            backgroundColor: star.id % 20 === 0 ? "#60a5fa" : "#ffffff",
            filter: star.size > 1.5 ? "blur(1px)" : "none",
          }}
        />
      ))}
    </motion.div>
  );
};
