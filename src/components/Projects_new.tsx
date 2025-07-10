export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with Next.js, TypeScript, and Stripe integration.',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'Prisma'],
      githubUrl: 'https://github.com/amansingh/ecommerce-platform',
      liveUrl: 'https://ecommerce-demo.vercel.app',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates.',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      githubUrl: 'https://github.com/amansingh/task-manager',
      liveUrl: 'https://taskmanager-demo.vercel.app',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard with location-based forecasts.',
      technologies: ['React', 'OpenWeather API', 'Chart.js'],
      githubUrl: 'https://github.com/amansingh/weather-dashboard',
      liveUrl: 'https://weather-demo.vercel.app',
      featured: false
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'This portfolio website built with Next.js and Tailwind CSS.',
      technologies: ['Next.js', 'Tailwind CSS', 'TypeScript'],
      githubUrl: 'https://github.com/amansingh/portfolio',
      liveUrl: 'https://your-portfolio.vercel.app',
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
                <div className="h-32 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400 text-sm">Project Preview</span>
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                      </svg>
                      Code
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
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
                  <a href={project.githubUrl} className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-sm">Code</a>
                  <a href={project.liveUrl} className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-sm">Live</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
