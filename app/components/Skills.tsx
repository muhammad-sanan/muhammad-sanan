const skills = ["Laravel", "PHP", "Next.js", "React", "Node.js", "MySQL", "Tailwind CSS"]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-teal-400 mb-6">Skills</h2>
      <div className="flex flex-wrap gap-4">
        {skills.map((s, i) => (
          <span key={i} className="bg-gray-900 px-4 py-2 rounded-lg text-gray-300 border border-gray-800">
            {s}
          </span>
        ))}
      </div>
    </section>
  )
}
