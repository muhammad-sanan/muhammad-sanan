const projects = [
  {
    title: "Real Estate Management System",
    description: "Laravel + React full-stack platform for property listings and booking.",
    link: "#",
  },
  {
    title: "Car Rental CMS Plugin",
    description: "Custom plugin built for Botble CMS Carento system using Laravel.",
    link: "#",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with Next.js and Tailwind CSS.",
    link: "#",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-teal-400 mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <div key={i} className="bg-gray-900 p-6 rounded-xl shadow-md hover:scale-[1.02] transition">
            <h3 className="text-xl font-semibold mb-2 text-gray-200">{p.title}</h3>
            <p className="text-gray-400 mb-3">{p.description}</p>
            <a href={p.link} className="text-teal-400 hover:underline">View Project →</a>
          </div>
        ))}
      </div>
    </section>
  )
}
