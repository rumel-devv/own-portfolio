"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
  FaDatabase,
  FaFigma,
  FaCode,
  FaWordpress,
  FaPuzzlePiece,
  FaMagic,
  FaLock,
  FaBolt,
} from "react-icons/fa";

const frontend = [
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJs },
  { name: "React.js", icon: FaReact },
  { name: "Next.js", icon: FaNodeJs },
  { name: "Tailwind CSS", icon: FaCss3Alt },
];

const backend = [
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express.js", icon: FaBolt },
  { name: "MongoDB", icon: FaDatabase },
  { name: "Authentication", icon: FaLock },
];

const tools = [
  { name: "VS Code", icon: FaCode },
  { name: "Figma", icon: FaFigma },
  { name: "WordPress", icon: FaWordpress },
  { name: "Elementor", icon: FaPuzzlePiece },
  { name: "Framer Motion", icon: FaMagic },
  { name: "shadcn/ui", icon: FaCode },
  { name: "DaisyUI", icon: FaCss3Alt },
  { name: "Animate.css", icon: FaMagic },
];

export default function SkillsSection() {
  const [active, setActive] = useState("frontend");

  const getData = () => {
    if (active === "frontend") return frontend;
    if (active === "backend") return backend;
    return tools;
  };

  const tabs = ["frontend", "backend", "tools"];

  return (
    <section className="py-20 px-4 md:px-16 bg-background text-foreground">

      {/* HEADER */}
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-6xl font-bold">
          My <span className="text-blue-500">Skills</span>
        </h2>
        <p className="text-gray-500 mt-3">
          Technologies I use to build modern apps
        </p>
      </div>

      {/* TOGGLE */}
      <div className="flex justify-center mb-12">
        <div className="relative flex rounded-full p-1 bg-white/5 border border-white/10 backdrop-blur-xl">

          <motion.div
            layout
            className="absolute top-1 bottom-1 rounded-full bg-blue-500/20"
            style={{
              width: "33.33%",
              left:
                active === "frontend"
                  ? "0%"
                  : active === "backend"
                  ? "33.33%"
                  : "66.66%",
            }}
            transition={{ type: "spring", stiffness: 250, damping: 22 }}
          />

          {tabs.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`relative z-10 px-6 py-2 text-sm capitalize transition ${
                active === item
                  ? "text-white font-medium"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* SKILLS GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

        {getData().map((skill, i) => {
          const Icon = skill.icon;

          return (
            <motion.div
              key={skill.name}

              /* 🔥 NEW WAVE ANIMATION (DIFFERENT STYLE) */
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: "easeOut",
              }}

              /* FLOAT HOVER (NOT SCALE) */
              whileHover={{
                y: -8,
              }}

              className="
                group relative p-5 rounded-2xl
                bg-white/5 border border-white/10
                backdrop-blur-xl
                overflow-hidden
                cursor-pointer
              "
            >

              {/* soft pulse glow (new style) */}
              <div className="
                absolute inset-0 opacity-0 group-hover:opacity-100
                bg-blue-500/10 blur-3xl transition duration-700
                animate-pulse
              " />

              <div className="relative z-10 flex flex-col items-center gap-3">

                <motion.div
                  animate={{
                    y: [0, -3, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                  }}
                >
                  <Icon className="text-blue-500 text-3xl" />
                </motion.div>

                <span className="text-sm text-gray-300 group-hover:text-blue-400 transition">
                  {skill.name}
                </span>

              </div>

              {/* border glow */}
              <div className="
                absolute inset-0 rounded-2xl
                border border-transparent
                group-hover:border-blue-500/40
                transition
              " />

            </motion.div>
          );
        })}

      </div>
    </section>
  );
}