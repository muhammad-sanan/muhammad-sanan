"use client"

import { useState } from "react"
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiBookOpen,
  FiCheck,
} from "react-icons/fi"

export default function Footer() {
  const [copied, setCopied] = useState(false)

  const email = "muhammadsanan.se@gmail.com"
  const phone = "+92 303 5826121"
  const location = "Lahore, Pakistan"

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-bold text-teal-600 dark:text-teal-400 mb-4">Contact</h2>
          <div className="flex items-center gap-3 mb-2">
            <FiMail className="text-teal-600 dark:text-teal-400" />
            <span>{email}</span>
          </div>
          <div className="flex items-center gap-3 mb-2">
            <FiPhone className="text-teal-600 dark:text-teal-400" />
            <span>{phone}</span>
          </div>
          <div className="flex items-center gap-3">
            <FiMapPin className="text-teal-600 dark:text-teal-400" />
            <span>{location}</span>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-xl font-bold text-teal-600 dark:text-teal-400 mb-4">Follow Me</h2>
          <ul className="space-y-3 text-lg">
            <li>
              <a
                href="https://github.com/muhammadsanan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-teal-600 dark:hover:text-teal-400 transition"
              >
                <FiGithub /> GitHub
              </a>
            </li>
            <li>
              <a
                href="http://www.linkedin.com/in/muhammad-sanan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-teal-600 dark:hover:text-teal-400 transition"
              >
                <FiLinkedin /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://medium.com/@muhammad-sanan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-teal-600 dark:hover:text-teal-400 transition"
              >
                <FiBookOpen /> Medium
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-500 dark:text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Muhammad Sanan. All rights reserved.
      </div>
    </footer>
  )
}