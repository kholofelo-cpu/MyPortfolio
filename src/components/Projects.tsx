import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'Project One', 
    description: 'A short description of what this project does.',
    technologies: ['React', 'TypeScript', 'Tailwind'],
    githubUrl: 'https://github.com/kholofelo-cpu/myprojectone',
    liveUrl: 'https://example.com',
  },
  {
    title: 'Project Two',
    description: 'Another project that demonstrate my skills',
    technologies: ['React', 'TypeScript', 'Tailwind'],
    githubUrl: 'https://github.com/kholofelo-cpu/myprojecttwo',
    liveUrl: 'https://example.com',
  },
];

function Projects() {
  return (
    <section id="projects" className="py-12 md:py-16 bg-white dark:bg-black dark:text-white px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2 bg-white dark:bg-black dark:border-zinc-800">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects