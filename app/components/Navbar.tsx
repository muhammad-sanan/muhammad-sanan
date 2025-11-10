"use client"
import { motion } from "framer-motion"
import ThemeToggle from "./ThemeToggle"

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex justify-between items-center py-6 px-8 bg-gray-900/80 backdrop-blur-md fixed w-full top-0 z-50 shadow-lg"
    >
      <h1 className="text-2xl font-bold text-teal-400">Muhammad Sanan</h1>
      <div className="flex items-center gap-6 text-gray-300">
        <a href="#about" className="hover:text-teal-400">About</a>
        <a href="#projects" className="hover:text-teal-400">Projects</a>
        <a href="#experience" className="hover:text-teal-400">Experience</a>
        <a href="#skills" className="hover:text-teal-400">Skills</a>
        <a href="#contact" className="hover:text-teal-400">Contact</a>
        <ThemeToggle />
      </div>
    </motion.nav>
  )
}
