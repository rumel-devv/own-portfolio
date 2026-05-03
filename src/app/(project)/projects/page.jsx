"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiEye, FiGithub } from "react-icons/fi";

import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCode,
  FaCss3Alt,
  FaHtml5,
  FaProjectDiagram,
} from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";

// ✅ IMPORTANT: add slug
const projects = [
  {
    slug: "ai-photo-app",
    title: "AI photo generatin website",
    desc: "Modern AI image generation platform built with Next.js.",
    image: "/pixgen.png",
    tech: [
      { name: "Next", icon: TbBrandNextjs },
      { name: "Tailwind", icon: FaCss3Alt },
      { name: "Database", icon: FaDatabase },
      { name: "Code", icon: FaCode },
    ],
    demo: "https://pixen-one.vercel.app",
    github: "https://github.com/rumel-devv/pixgen",
  },
  {
    slug: "payyo-banking",
    title: "Payyo Mobile Banking App",
    desc: "Full stack banking platform with authentication system.",
    image: "/payo.png",
    tech: [
      { name: "React", icon: FaReact },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Code", icon: FaCode },
    ],
    demo: "#",
    github: "#",
  },
  {
    slug: "dragon-news",
    title: "Dragon News 404",
    desc: "Full-stack Dynamic news website with authentication system.",
    image: "/dragon.png",
    tech: [
      { name: "HTML", icon: FaHtml5 },
      { name: "React", icon: FaReact },
      { name: "Project", icon: FaProjectDiagram },
      { name: "Database", icon: FaDatabase },
    ],
    demo: "https://dragon-news-bay-ten.vercel.app",
    github: "https://github.com/rumel-devv/max-news",
  },
];

export default function ProjectsPage() {
  return (
    <section className="py-12 md:py-16 px-4 md:px-12 bg-background text-foreground">

      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-5xl font-bold">
          My <span className="text-blue-500">Projects</span>
        </h2>
        <p className="text-gray-500 mt-3">
          Real-world applications I built
        </p>
      </motion.div>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {projects.map((project, i) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="group relative rounded-xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl"
          >

            {/* IMAGE */}
            <div className="relative w-full h-48 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition" />
            </div>

            {/* CONTENT */}
            <div className="p-5 space-y-3">

              <h3 className="text-lg font-semibold">
                {project.title}
              </h3>

              <p className="text-sm text-gray-400">
                {project.desc}
              </p>

              {/* TECH */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, idx) => {
                  const Icon = t.icon;
                  return (
                    <span
                      key={idx}
                      className="flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-white/10 border border-white/10"
                    >
                      <Icon className="text-blue-400 text-xs" />
                      {t.name}
                    </span>
                  );
                })}
              </div>

              {/* BUTTONS */}
              <div className="flex gap-2 pt-2">

           <a
    href={project.demo}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center z-10 gap-1 px-3 py-1.5 rounded-md text-sm bg-blue-500 hover:bg-blue-600 text-white transition"
  >
    <FiEye />
    Demo
  </a>

  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center z-10 gap-1 px-3 py-1.5 rounded-md text-sm border border-white/20 hover:bg-white/10 transition"
  >
    <FiGithub />
    GitHub
  </a>

              </div>

            </div>

            {/* GLOW */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10" />

          </motion.div>
        ))}

      </div>
    </section>
  );
}