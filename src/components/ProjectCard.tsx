type ProjectCardProps =  {
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  liveUrl: string
}

function ProjectCard( {
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <article className="rounded-xl border p-6">
      <h3 className="text-xl font-bold">{title}</h3>

      <p className="mt-3 text-gray-700 dark:text-gray-300">
        {description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <span className="rounded-full bg-white text-black dark:bg-white  dark:text-black border-2 border-black px-3 py-1 text-xs font-bold shadow-sm"
           key={technology}       
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-4">
        <a 
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="font-semibold underline"
        >
          GitHub
        </a>
        {liveUrl && (
          <a 
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="font-semibold underline"
            >
              Live Demo
            </a>
        )}
      </div>
    </article>
  )
}

export default ProjectCard