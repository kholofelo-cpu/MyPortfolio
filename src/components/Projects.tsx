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
    <section id="projects" className="bg-gray-50 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold">Projects</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
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