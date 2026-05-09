"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);
  const [particles, setParticles] = useState([]);
  const [ripples, setRipples] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  // detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(pointer: coarse)").matches);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // mouse move + trail
  useEffect(() => {
    if (isMobile) return;

    const move = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      setPosition({ x, y });

      const newPoint = {
        x,
        y,
        id: Date.now() + Math.random(),
      };

      setTrail((prev) => [...prev, newPoint]);

      setTimeout(() => {
        setTrail((prev) => prev.filter((p) => p.id !== newPoint.id));
      }, 350);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [isMobile]);

  // 💥 CLICK EFFECT (PARTICLES + RIPPLE)
  useEffect(() => {
    if (isMobile) return;

    const handleClick = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      // 🔥 PARTICLES
      const newParticles = Array.from({ length: 12 }).map((_, i) => ({
        id: Date.now() + i,
        x,
        y,
        angle: (Math.PI * 2 * i) / 12,
        speed: Math.random() * 3 + 2,
      }));

      setParticles((prev) => [...prev, ...newParticles]);

      setTimeout(() => {
        setParticles((prev) =>
          prev.filter((p) => !newParticles.find((np) => np.id === p.id))
        );
      }, 700);

      // 🌊 RIPPLE WAVE
      const ripple = {
        id: Date.now(),
        x,
        y,
      };

      setRipples((prev) => [...prev, ripple]);

      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== ripple.id));
      }, 800);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* MAIN CURSOR */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        animate={{
          x: position.x - 8,
          y: position.y - 8,
        }}
        transition={{
          type: "spring",
          stiffness: 750,
          damping: 45,
        }}
      >
        {/* glow */}
        <div
          className="w-6 h-6 rounded-full blur-[3px] opacity-80"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.9), rgba(168,85,247,0.5), transparent 70%)",
          }}
        />

        {/* core */}
        <div
          className="absolute top-[3px] left-[3px] w-3 h-3 rounded-full"
          style={{
            background:
              "linear-gradient(135deg, #3b82f6, #a855f7, #ec4899)",
            boxShadow:
              "0 0 15px rgba(59,130,246,0.6), 0 0 30px rgba(168,85,247,0.3)",
          }}
        />
      </motion.div>

      {/* TRAIL */}
      <AnimatePresence>
        {trail.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0.6, scale: 1 }}
            animate={{ opacity: 0, scale: 0.2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed pointer-events-none z-[9998] rounded-full"
            style={{
              top: p.y - 6,
              left: p.x - 6,
              width: "14px",
              height: "14px",
              background:
                "radial-gradient(circle, rgba(59,130,246,0.7), rgba(168,85,247,0.3), transparent)",
              filter: "blur(3px)",
            }}
          />
        ))}
      </AnimatePresence>

      {/* 💥 PARTICLES */}
      <AnimatePresence>
        {particles.map((p) => {
          const dx = Math.cos(p.angle) * p.speed * 25;
          const dy = Math.sin(p.angle) * p.speed * 25;

          return (
            <motion.div
              key={p.id}
              initial={{ opacity: 1, scale: 1 }}
              animate={{
                x: dx,
                y: dy,
                opacity: 0,
                scale: 0,
              }}
              transition={{ duration: 0.7 }}
              className="fixed z-[10000] pointer-events-none"
              style={{
                top: p.y,
                left: p.x,
                width: "6px",
                height: "6px",
                borderRadius: "999px",
                background:
                  "linear-gradient(135deg, #3b82f6, #a855f7, #ec4899)",
                boxShadow: "0 0 12px rgba(59,130,246,0.7)",
              }}
            />
          );
        })}
      </AnimatePresence>

      {/* 🌊 RIPPLE WAVE */}
      <AnimatePresence>
        {ripples.map((r) => (
          <motion.div
            key={r.id}
            initial={{ opacity: 0.6, scale: 0 }}
            animate={{ opacity: 0, scale: 4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed pointer-events-none z-[9997] rounded-full border border-cyan-400/40"
            style={{
              top: r.y - 20,
              left: r.x - 20,
              width: "40px",
              height: "40px",
            }}
          />
        ))}
      </AnimatePresence>
    </>
  );
}