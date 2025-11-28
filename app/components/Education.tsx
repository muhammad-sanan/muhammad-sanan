const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Lahore",
    period: "2017 - 2021",
    desc: "Focused on software development, web technologies, and databases. Completed projects using PHP, Laravel, and JavaScript."
  },
  {
    degree: "Intermediate / Pre-Engineering",
    institution: "Lahore College of Science",
    period: "2015 - 2017",
    desc: "Studied Mathematics, Physics, and Computer Science fundamentals."
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-teal-400 mb-8">Education</h2>
      {education.map((edu, i) => (
        <div key={i} className="mb-6 border-l-4 border-teal-500 pl-4">
          <h3 className="text-xl font-semibold">{edu.degree}</h3>
          <p className="text-gray-400">{edu.institution} • {edu.period}</p>
          <p className="text-gray-500 mt-2">{edu.desc}</p>
        </div>
      ))}
    </section>
  )
}
