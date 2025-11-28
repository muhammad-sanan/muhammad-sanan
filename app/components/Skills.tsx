const skills = {
  "Backend / PHP Frameworks": ["PHP", "Laravel", "Livewire", "Filament", "Vue JS", "CodeIgniter", "Yii2"],
  "Databases & APIs": ["SQL", "MySQL", "Firebase", "RESTful APIs"],
  "Frontend / Web Technologies": ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "SASS", "Tailwind CSS", "Bulma CSS"],
  "Methodologies & Deployment": ["Agile Methodologies", "Servers & Deployments", "Client Communication", "Task Management"],
  "Tools & Miscellaneous": ["GIT", "Laravel Forge", "Laravel Vapor", "Slack", "MS Office", "JIRA", "VS Code", "Cursor", "ClickUp"]
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-teal-400 mb-8">Skills</h2>
      {Object.entries(skills).map(([section, items], i) => (
        <div key={i} className="mb-8">
          <h3 className="text-xl font-semibold text-gray-300 my-2">{section}</h3>
          <div className="flex flex-wrap gap-4">
            {items.map((item, j) => (
              <span
                key={j}
                className="bg-gray-900 text-gray-300 border border-gray-800 px-4 py-2 rounded-lg text-sm hover:bg-teal-400 hover:text-gray-900 transition"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
