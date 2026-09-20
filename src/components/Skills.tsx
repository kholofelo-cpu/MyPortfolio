const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'HTML',
  'CSS',
  'C#',
  'Git',
]

function Skills() {
  return (
    <section id="skills" className="py-12 md:py-16 bg-white dark:bg-black px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-10 text-black dark:text-white">Skills</h2>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-700 text-black dark:text-white bg-gray-50 dark:bg-gray-800"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills