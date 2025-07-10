export default function Hero() {
  return (
    <section id="about" className="p-8 border-b border-gray-200 dark:border-[#30363d]">
      <div className="max-w-full">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Photo */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-white dark:bg-[#0d1117] flex items-center justify-center">
                {/* User's Ghibli style profile photo */}
                <img 
                  src="/images/aman ghibli.png" 
                  alt="Aman Singh" 
                  className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Intro */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 animate-fadeIn text-gray-900 dark:text-white">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Aman Singh
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              Full Stack Developer passionate about creating beautiful, functional, and user-friendly applications. 
              I love turning complex problems into simple, elegant solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start animate-fadeIn" style={{ animationDelay: '0.4s' }}>
              <a
                href="#projects"
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors text-sm"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-2 border border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 rounded-lg font-medium transition-colors text-gray-700 dark:text-gray-300 text-sm"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
