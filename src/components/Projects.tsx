export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'FrameFusion AI',
      description: 'A full-stack AI-powered platform built with modern web technologies and machine learning integration.',
      technologies: ['Next.js', 'TypeScript', 'AI/ML', 'React'],
      githubUrl: 'https://github.com/Amancodes26/FrameFusion',
      liveUrl: 'https://framefusionai.vercel.app/',
      image: '/images/framefusion.png',
      featured: true
    },
    {
      id: 2,
      title: 'SchemeSeva Government Portal',
      description: 'A comprehensive government scheme portal for citizens to access various government services and schemes.',
      technologies: ['React', 'Node.js', 'Government APIs', 'Bootstrap'],
      githubUrl: 'https://github.com/Amancodes26/schemeSeva',
      liveUrl: 'https://scheme-seva-gov.vercel.app/',
      image: '/images/schemaseva.png',
      featured: true
    },
    {
      id: 3,
      title: 'AI Agent Wrapper',
      description: 'A backend service that provides wrapper functionality for AI agents with robust API architecture.',
      technologies: ['Node.js', 'Express.js', 'AI APIs', 'REST'],
      githubUrl: 'https://github.com/Amancodes26/AI-AGENT-WRAPPER',
      liveUrl: null,
      featured: false
    },
    {
      id: 4,
      title: 'Grievance Portal',
      description: 'A digital platform for managing and tracking grievances with automated workflow management.',
      technologies: ['React', 'Node.js', 'Database', 'API'],
      githubUrl: 'https://github.com/Amancodes26/GrievancePortal',
      liveUrl: null,
      featured: false
    },
    {
      id: 5,
      title: 'DevAmanSingh NPM Package',
      description: 'A published NPM package providing utility functions and components for developers.',
      technologies: ['JavaScript', 'NPM', 'Node.js', 'Utils'],
      githubUrl: null,
      liveUrl: 'https://www.npmjs.com/package/devamansingh',
      featured: false
    }
  ]

  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <section id="projects" className="p-8">
      <div className="max-w-full">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Some of my recent work</p>
        </div>

        {/* Featured Projects */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Featured Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featuredProjects.map((project) => (
              <div key={project.id} className="bg-gray-50 dark:bg-[#0d1117] rounded-lg border border-gray-200 dark:border-[#30363d] overflow-hidden hover:border-blue-500 transition-colors">
                {project.image && (
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={`${project.title} preview`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-4">
                  <h4 className="text-md font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-sm">Code</a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-sm">Live</a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Other Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {otherProjects.map((project) => (
              <div key={project.id} className="bg-gray-50 dark:bg-[#0d1117] p-4 rounded-lg border border-gray-200 dark:border-[#30363d] hover:border-blue-500 transition-colors">
                <h4 className="text-md font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-sm">Code</a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-sm">Live</a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
