"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left gap-10 px-6">
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-teal-500 shadow-lg"
      >
        <Image
          src="/images/WhatsApp.jpeg"
          alt="Muhammad Sanan"
          fill
          sizes="(max-width: 768px) 200px, 250px"
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-teal-400">
          Muhammad Sanan
        </h1>
        <p className="mt-3 text-xl text-gray-400">Full Stack Web Developer</p>
        <p className="mt-2 text-gray-500 max-w-md">
          I build modern, scalable web apps using Laravel, Next.js, and the MERN stack.
        </p>
      </motion.div>
    </section>
  )
}
