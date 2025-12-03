"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import ThemeToggle from "./ThemeToggle"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const closeMenu = () => setIsOpen(false)

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex justify-between items-center py-6 px-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md fixed w-full top-0 z-50 shadow-lg"
    >
      <a href="#hero" className="text-2xl font-bold text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300">
        Muhammad Sanan
      </a>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6 text-gray-700 dark:text-gray-300">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hover:text-teal-600 dark:hover:text-teal-400 transition"
          >
            {link.label}
          </a>
        ))}
        <ThemeToggle />
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center gap-4">
        <ThemeToggle />
        <button
          onClick={toggleMenu}
          className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-[80px] right-0 w-64 h-screen bg-white dark:bg-gray-900 shadow-lg md:hidden"
          >
            <div className="flex flex-col gap-6 p-8 text-gray-700 dark:text-gray-300">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-lg hover:text-teal-600 dark:hover:text-teal-400 transition"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}