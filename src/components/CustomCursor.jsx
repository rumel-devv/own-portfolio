"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);

  useEffect(() => {
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
      }, 500);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* MAIN CURSOR */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        animate={{
          x: position.x - 6,
          y: position.y - 6,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        <div
          className="w-3 h-3 rounded-full"
          style={{
            background:
              "linear-gradient(135deg, #3b82f6, #a855f7, #ec4899)",
            boxShadow: "0 0 10px rgba(59,130,246,0.6)",
          }}
        />
      </motion.div>

      {/* TRAIL EFFECT */}
      <AnimatePresence>
        {trail.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0.8, scale: 1 }}
            animate={{ opacity: 0, scale: 0.3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed pointer-events-none z-[9998] rounded-full"
            style={{
              top: p.y - 6,
              left: p.x - 6,
              width: "12px",
              height: "12px",
              background:
                "linear-gradient(135deg, #3b82f6, #a855f7, #ec4899)",
              filter: "blur(2px)",
            }}
          />
        ))}
      </AnimatePresence>
    </>
  );
}