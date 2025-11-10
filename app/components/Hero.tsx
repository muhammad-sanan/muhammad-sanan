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
        className="relative w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-teal-500 shadow-2xl"
      >
        <Image
          src="/images/WhatsApp.jpeg"
          alt="Muhammad Sanan"
          fill
          sizes="(max-width: 768px) 240px, 288px"
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
          I build modern, scalable web apps using Laravel, Vue.js, Next.js, and React.
        </p>
      </motion.div>
    </section>
  )
}
