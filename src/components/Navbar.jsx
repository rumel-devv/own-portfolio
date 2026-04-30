"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import ThemeToggle from "./ThemeToggle";

import { FiMenu, FiX, FiHome, FiCode, FiUserPlus } from "react-icons/fi";
import { RiGraduationCapFill } from "react-icons/ri";
import { GrProjects } from "react-icons/gr";
import { IoIosContact } from "react-icons/io";

const navLinks = [
  { name: "Home", href: "/", icon: <FiHome /> },
  { name: "About", href: "/about", icon: <FiUserPlus /> },
  { name: "Skills", href: "/skill", icon: <FiCode /> },
  { name: "Projects", href: "/projects", icon: <GrProjects /> },
  { name: "Education", href: "/education", icon: <RiGraduationCapFill /> },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full md:w-11/12 lg:w-10/12 mx-auto py-4 px-4">
      <div className="flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-[#13CBFC]">
          M.RL
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-3 lg:gap-4 text-sm font-medium uppercase">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <motion.li key={link.href} whileHover={{ scale: 1.05 }}>
                <Link
                  href={link.href}
                  className={`flex items-center gap-2 px-2 lg:px-3 py-1 rounded-md transition ${
                    isActive
                      ? "bg-[#13CBFC]/20 text-[#13CBFC] font-semibold"
                      : "text-gray-700 dark:text-gray-300 hover:bg-[#13CBFC]/10"
                  }`}
                >
                  {link.icon}
                  {link.name}
                </Link>
              </motion.li>
            );
          })}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-2 md:gap-3">

          {/* Contact Button (Desktop & Tablet) */}
        <Link href='/contact'>
          <button className="hidden sm:flex items-center gap-2 px-3 md:px-4 py-1.5 bg-[#1ba1c6] text-white rounded-lg text-sm md:text-base hover:opacity-90 transition">
            <IoIosContact />
            Contact Me
          </button>
        </Link>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-4 flex flex-col gap-3 p-4 rounded-xl bg-white dark:bg-gray-900 shadow-lg"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#13CBFC]/10 text-sm"
            >
              {link.icon}
              {link.name}
            </Link>
          ))}

          {/* Mobile Contact Button */}
          <Link href='/contact'>
          <button className="hidden sm:flex items-center gap-2 px-3 md:px-4 py-1.5 bg-[#1ba1c6] text-white rounded-lg text-sm md:text-base hover:opacity-90 transition">
            <IoIosContact />
            Contact Me
          </button>
        </Link>
        </motion.div>
      )}
    </nav>
  );
}