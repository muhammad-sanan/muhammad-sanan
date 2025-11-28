const experience = [
  {
    role: "Senior Software Engineer - Software Engineer",
    company: "SoftPyramid LLC, Lahore",
    period: "July 2024 - Present",
    desc: [
      "Architected and developed high-performance web applications using Laravel, Livewire, Filament, and Vue.js for dynamic and scalable frontend experiences.",
      "Led cross-functional teams through the Agile SDLC, aligning with clients on requirements, ensuring timely delivery, and mentoring developers.",
      "Acted as Team Lead, overseeing sprint planning, task allocation, code reviews, and project delivery while fostering collaboration between developers and stakeholders.",
      "Managed CI/CD pipelines and automated deployments, reducing release times and minimizing production issues.",
      "Leveraged AI tools to generate and optimize code, refactor legacy systems, debug problems, and streamline documentation."
    ],
  },
  {
    role: "Software Engineer",
    company: "PixelPK Technologies, Lahore",
    period: "Oct 2023 - July 2024",
    desc: [
      "Developed large-scale web applications using Laravel, Livewire, and Filament.",
      "Collaborated closely with clients to transform business requirements into technical solutions.",
      "Ensured code quality via thorough reviews and consistent coding standards.",
      "Applied agile practices to boost collaboration and deliver iteratively on time."
    ],
  },
  {
    role: "Software Engineer - Associate Software Engineer",
    company: "OnyxTec, Lahore",
    period: "Feb 2021 - Oct 2023",
    desc: [
      "Developed full-stack web applications with dynamic interfaces using Laravel and Livewire.",
      "Built and integrated APIs for web and mobile applications.",
      "Mentored new team members and facilitated onboarding.",
      "Collaborated with global clients and ensured smooth deployments on various servers."
    ],
  },
  {
    role: "Web Developer",
    company: "StepInnSolutions, Lahore",
    period: "Dec 2020 - Feb 2021",
    desc: [
      "Developed web applications using Laravel.",
      "Managed code versioning and deployments.",
      "Collaborated with clients and internal teams to deliver high-quality solutions."
    ],
  },
  {
    role: "Web Development Intern",
    company: "Purple Hats, Lahore",
    period: "Nov 2019 - Feb 2020",
    desc: [
      "Supported senior developers in building web applications.",
      "Assisted in debugging and implementing new features.",
      "Adapted quickly to changing deadlines and team priorities."
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-teal-400 mb-8">Experience</h2>
      {experience.map((exp, i) => (
        <div key={i} className="mb-8 border-l-4 border-teal-500 pl-4">
          <h3 className="text-xl font-semibold">{exp.role}</h3>
          <p className="text-gray-400 text-xl">{exp.company} • {exp.period}</p>
          <ul className="text-gray-500 text-lg mt-2 list-disc list-inside space-y-1">
            {exp.desc.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}
