const experience = [
  {
    role: "Laravel Developer",
    company: "Freelance / Fiverr",
    period: "2020 - Present",
    desc: "Built custom plugins, REST APIs, and admin panels for multiple clients.",
  },
  {
    role: "Web Developer",
    company: "Agency Projects",
    period: "2018 - 2020",
    desc: "Worked on real estate, e-commerce, and CMS-based applications.",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-teal-400 mb-8">Experience</h2>
      {experience.map((exp, i) => (
        <div key={i} className="mb-6 border-l-4 border-teal-500 pl-4">
          <h3 className="text-xl font-semibold">{exp.role}</h3>
          <p className="text-gray-400">{exp.company} • {exp.period}</p>
          <p className="text-gray-500 mt-2">{exp.desc}</p>
        </div>
      ))}
    </section>
  )
}
