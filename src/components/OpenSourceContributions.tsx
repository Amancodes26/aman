'use client'

import { FiGitPullRequest, FiExternalLink } from 'react-icons/fi'

const OpenSourceContributions = () => {
  const contributions = [
    {
      project: "CampusBurn",
      pullRequest: "Pull Request 51",
      pullRequestUrl: "https://github.com/poswalsameer/CampusBurn/pull/51",
      issue: "Issue 49",
      issueUrl: "https://github.com/poswalsameer/CampusBurn/issues/49",
      title: "Revamped Login and Signup Page UI",
      description: [
        "Revamped the login and signup page UI to match modern design guidelines and improve user experience.",
        "Collaborated with maintainers to finalize design, implement changes, and get the feature merged into the main codebase."
      ],
      techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
      status: "Merged"
    }
  ]

  return (
    <section className="p-6 border-b border-gray-200 dark:border-[#30363d]">
      <div className="flex items-center gap-2 mb-4">
        <FiGitPullRequest className="text-blue-600 dark:text-blue-400" size={20} />
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          Open Source Contributions
        </h2>
      </div>
      
      <div className="space-y-4">
        {contributions.map((contribution, index) => (
          <div
            key={index}
            className="bg-gray-50 dark:bg-[#0d1117] rounded-lg p-4 border border-gray-200 dark:border-[#30363d]"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {contribution.project} - {contribution.title}
              </h3>
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs rounded-full">
                {contribution.status}
              </span>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
              <a
                href={contribution.pullRequestUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <FiGitPullRequest size={12} />
                {contribution.pullRequest}
                <FiExternalLink size={10} />
              </a>
              <span>•</span>
              <a
                href={contribution.issueUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {contribution.issue}
                <FiExternalLink size={10} />
              </a>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
              Revamped login and signup page UI with modern design guidelines. Collaborated with maintainers for implementation and successful merge.
            </p>
            
            <div className="flex flex-wrap gap-2">
              {contribution.techStack.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 text-xs rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default OpenSourceContributions