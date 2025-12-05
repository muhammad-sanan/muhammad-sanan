"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left gap-8 p-6 md:gap-16"
    >
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-teal-500 shadow-2xl flex-shrink-0"
      >
        <Image
          src="/images/WhatsApp.jpeg"
          alt="Muhammad Sanan"
          fill
          className="object-cover rounded-full"
          priority
        />
      </motion.div>

      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col justify-center max-w-xl md:max-w-lg"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-teal-400">
          Muhammad Sanan
        </h1>
        <p className="mt-2 text-lg sm:text-xl text-gray-400">
          Senior Software Engineer
        </p>
        <p className="mt-4 text-gray-500 text-sm sm:text-base md:text-base leading-relaxed">
          I’m a Senior Software Engineer experienced in architecting
          enterprise-level web applications using Laravel, Livewire, Filament,
          and modern JavaScript frameworks. I specialize in building clean,
          scalable systems, leading engineering teams, and transforming business
          requirements into reliable, production-ready solutions. My work
          focuses on performance, usability, and delivering software that
          truly makes an impact.
        </p>
      </motion.div>
    </section>
  )
}
