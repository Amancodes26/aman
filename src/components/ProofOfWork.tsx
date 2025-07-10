'use client'
import { useState } from 'react'

export default function ProofOfWork() {
  const [activeTab, setActiveTab] = useState('skills')

  const skills = [
    { name: 'JavaScript', level: 90, category: 'Frontend' },
    { name: 'TypeScript', level: 85, category: 'Frontend' },
    { name: 'React', level: 88, category: 'Frontend' },
    { name: 'Next.js', level: 82, category: 'Frontend' },
    { name: 'Node.js', level: 80, category: 'Backend' },
    { name: 'Python', level: 75, category: 'Backend' },
    { name: 'PostgreSQL', level: 78, category: 'Database' },
    { name: 'MongoDB', level: 72, category: 'Database' },
  ]

  const experience = [
    {
      title: 'Backend Intern',
      company: 'DSEU',
      duration: 'June 2023 - Present',
      description: 'Implementing services for 21 campuses and supporting 21,000 students with backend solutions. Designing and optimizing database schemas for efficient data retrieval and storage.',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'RESTful APIs']
    },
    
    // {
    //   title: 'Freelance Developer',
    //   company: 'SchemeSeva',
    //   duration: '2023 - Present',
    //   description: 'Developed a comprehensive government scheme management platform to help citizens find and apply for relevant government schemes. Implemented advanced search algorithms and user-friendly interfaces.',
    //   technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL']
    // },
    {
      title: 'Full Stack Developer',
      company: 'FrameFusion',
      duration: 'Dec 2024 - Feb 2025',
      description: 'Created an innovative real-time collaborative presentation tool that allows teams to design and present slides together. Implemented WebSocket-based collaboration features and real-time updates.',
      technologies: ['React', 'TypeScript',  'Express.js']
    },
    {
      title: 'Frontend Developer',
      company: 'Moreton Bay',
      duration: 'Jun 2024 - Jul 2024',
      description: 'Enhanced website navigation by designing site maps, improved usability with user flow diagrams, simplified volunteer application management, and solved complex web development problems using JavaScript.',
      technologies: ['JavaScript', 'User Experience', 'UI/UX Design', 'Form Development']
    },
    // {
    //   title: 'Open Source Contributor',
    //   company: 'GitHub Projects',
    //   duration: '2021 - Present',
    //   description: 'Actively contribute to open-source projects focused on web development and accessibility. Resolved issues, implemented new features, and participated in code reviews.',
    //   technologies: ['JavaScript', 'React', 'Node.js', 'TypeScript']
    // }
  ]

  const certifications = [
    {
      name: 'Full Stack Web Development',
      issuer: 'Meta',
      year: '2023',
      badge: 'META'
    },
    {
      name: 'React & Next.js Mastery',
      issuer: 'Udemy',
      year: '2023',
      badge: 'React'
    },
    {
      name: 'Advanced JavaScript',
      issuer: 'freeCodeCamp',
      year: '2022',
      badge: 'JS'
    },
    {
      name: 'UI/UX Design Principles',
      issuer: 'Coursera',
      year: '2022',
      badge: 'UI/UX'
    }
  ]

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {} as Record<string, typeof skills>)

  return (
    <section id="work" className="p-8 border-b border-gray-200 dark:border-[#30363d]">
      <div className="max-w-full">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Proof of Work</h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm">My skills, experience, and achievements</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex mb-6 bg-gray-100 dark:bg-[#21262d] rounded-lg p-1">
          <button
            onClick={() => setActiveTab('skills')}
            className={`flex-1 px-4 py-2 rounded-md transition-colors text-sm ${
              activeTab === 'skills'
                ? 'bg-white dark:bg-[#161b22] text-blue-600 dark:text-blue-400 shadow'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            Skills
          </button>
          <button
            onClick={() => setActiveTab('experience')}
            className={`flex-1 px-4 py-2 rounded-md transition-colors text-sm ${
              activeTab === 'experience'
                ? 'bg-white dark:bg-[#161b22] text-blue-600 dark:text-blue-400 shadow'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            Experience
          </button>
        </div>

        {/* Skills Tab */}
        {activeTab === 'skills' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {Object.entries(groupedSkills).map(([category, categorySkills]) => (
              <div key={category} className="bg-gray-50 dark:bg-[#0d1117] p-4 rounded-lg border border-gray-200 dark:border-[#30363d]">
                <h3 className="text-lg font-bold mb-3 text-blue-600 dark:text-blue-400">{category}</h3>
                <div className="space-y-3">
                  {categorySkills.map((skill, index) => (
                    <div key={index} className="group">
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-sm text-gray-900 dark:text-white">{skill.name}</span>
                        <span className="text-gray-600 dark:text-gray-400 text-xs">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-[#21262d] rounded-full h-1.5">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-green-500 h-1.5 rounded-full transition-all duration-1000 group-hover:from-green-500 group-hover:to-blue-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Experience Tab */}
        {activeTab === 'experience' && (
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className="bg-[#0d1117] p-6 rounded-lg border border-[#30363d] hover:border-blue-500 transition-colors">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-blue-400 mb-1">{exp.title}</h4>
                    <p className="text-green-400 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm text-gray-400 bg-[#21262d] px-3 py-1 rounded-full mt-2 lg:mt-0">
                    {exp.duration}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-blue-600 text-blue-100 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Certifications Tab */}
        {activeTab === 'certifications' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-[#0d1117] p-6 rounded-lg border border-[#30363d] hover:border-blue-500 transition-colors text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  {cert.badge}
                </div>
                <h4 className="text-lg font-semibold mb-2">{cert.name}</h4>
                <p className="text-blue-400 mb-1">{cert.issuer}</p>
                <p className="text-gray-400 text-sm">{cert.year}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
