"use client"
import Image from "next/image"
import { Project } from "../data/project"

interface Props {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="relative w-full h-48">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-teal-400">{project.title}</h3>
        <p className="text-gray-400 mt-1">{project.description}</p>
      </div>
    </a>
  )
}
