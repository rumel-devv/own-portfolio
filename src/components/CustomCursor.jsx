"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [points, setPoints] = useState([]);

  useEffect(() => {
    const move = (e) => {
      const newPoint = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now() + Math.random(),
      };

      setPoints((prev) => [...prev, newPoint]);

      // remove after 0.5s
      setTimeout(() => {
        setPoints((prev) => prev.filter((p) => p.id !== newPoint.id));
      }, 500);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <AnimatePresence>
        {points.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 0, scale: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed pointer-events-none z-[9999] rounded-full"
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