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
      <div className="flex items-center gap-3 mb-6">
        <div className="text-blue-600 dark:text-blue-400">
          <FiGitPullRequest size={24} />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Open Source Contributions
        </h2>
      </div>
      
      <div className="space-y-6">
        {contributions.map((contribution, index) => (
          <div
            key={index}
            className="bg-gray-50 dark:bg-[#0d1117] rounded-lg p-5 border border-gray-200 dark:border-[#30363d] hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {contribution.project}
                </h3>
                <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                  <a
                    href={contribution.pullRequestUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    <FiGitPullRequest size={12} />
                    {contribution.pullRequest}
                    <span className="ml-1">
                      <FiExternalLink size={10} />
                    </span>
                  </a>
                  <span>|</span>
                  <a
                    href={contribution.issueUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    {contribution.issue}
                    <span className="ml-1">
                      <FiExternalLink size={10} />
                    </span>
                  </a>
                </div>
              </div>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium rounded-full">
                {contribution.status}
              </span>
            </div>
            
            <h4 className="font-medium text-gray-900 dark:text-white mb-3">
              {contribution.title}
            </h4>
            
            <ul className="space-y-2 mb-4">
              {contribution.description.map((point, pointIndex) => (
                <li
                  key={pointIndex}
                  className="text-gray-700 dark:text-gray-300 text-sm flex items-start gap-2"
                >
                  <span className="text-blue-600 dark:text-blue-400 mt-1">◦</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Tech Stack:
              </span>
              <div className="flex flex-wrap gap-2">
                {contribution.techStack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 text-xs rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default OpenSourceContributions