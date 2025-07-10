'use client'
import { useMemo } from 'react'

export default function GitHubActivity() {
  // Generate realistic GitHub-like heatmap data
  const heatmapData = useMemo(() => {
    const data = []
    const today = new Date()
    const oneYearAgo = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate())
    
    for (let d = new Date(oneYearAgo); d <= today; d.setDate(d.getDate() + 1)) {
      // Create more realistic contribution patterns
      const dayOfWeek = d.getDay()
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6
      const baseContributions = isWeekend ? Math.random() * 2 : Math.random() * 6
      const contributions = Math.floor(baseContributions * (0.7 + Math.random() * 0.3))
      
      data.push({
        date: new Date(d),
        contributions
      })
    }
    return data
  }, [])

  const getIntensityClass = (contributions: number) => {
    if (contributions === 0) return 'bg-gray-100 dark:bg-[#161b22]'
    if (contributions === 1) return 'bg-green-200 dark:bg-green-900'
    if (contributions === 2) return 'bg-green-400 dark:bg-green-700'
    if (contributions === 3) return 'bg-green-600 dark:bg-green-500'
    if (contributions >= 4) return 'bg-green-800 dark:bg-green-400'
    return 'bg-gray-100 dark:bg-[#161b22]'
  }

  const totalContributions = heatmapData.filter(d => d.contributions > 0).length
  const currentStreak = useMemo(() => {
    let streak = 0
    for (let i = heatmapData.length - 1; i >= 0; i--) {
      if (heatmapData[i].contributions > 0) {
        streak++
      } else {
        break
      }
    }
    return streak
  }, [heatmapData])

  return (
    <section id="activity" className="p-8 border-b border-gray-200 dark:border-[#30363d]">
      <div className="max-w-full">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">GitHub Activity</h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm">My coding journey over the past year</p>
        </div>

        <div className="bg-gray-50 dark:bg-[#0d1117] p-4 rounded-lg border border-gray-200 dark:border-[#30363d]">
          <div className="mb-4">
            <h3 className="text-md font-semibold mb-1 text-gray-900 dark:text-white">Contribution Activity</h3>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              {totalContributions} contributions in the last year
            </p>
          </div>

          {/* Heatmap Grid */}
          <div className="overflow-x-auto">
            <div className="flex flex-wrap gap-0.5 mb-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(53, minmax(0, 1fr))' }}>
              {heatmapData.map((day, index) => (
                <div
                  key={index}
                  className={`w-2.5 h-2.5 rounded-sm ${getIntensityClass(day.contributions)} border border-gray-300 dark:border-[#30363d] hover:border-gray-500 transition-colors cursor-pointer`}
                  title={`${day.contributions} contributions on ${day.date.toDateString()}`}
                />
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400">
            <span>Less</span>
            <div className="flex gap-0.5">
              <div className="w-2.5 h-2.5 bg-gray-100 dark:bg-[#161b22] border border-gray-300 dark:border-[#30363d] rounded-sm" />
              <div className="w-2.5 h-2.5 bg-green-200 dark:bg-green-900 border border-gray-300 dark:border-[#30363d] rounded-sm" />
              <div className="w-2.5 h-2.5 bg-green-400 dark:bg-green-700 border border-gray-300 dark:border-[#30363d] rounded-sm" />
              <div className="w-2.5 h-2.5 bg-green-600 dark:bg-green-500 border border-gray-300 dark:border-[#30363d] rounded-sm" />
              <div className="w-2.5 h-2.5 bg-green-800 dark:bg-green-400 border border-gray-300 dark:border-[#30363d] rounded-sm" />
            </div>
            <span>More</span>
          </div>
        </div>

        {/* GitHub Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
          <div className="bg-white dark:bg-[#161b22] p-3 rounded-lg border border-gray-200 dark:border-[#30363d] text-center hover:border-blue-500 transition-colors">
            <div className="text-lg font-bold text-green-600 dark:text-green-400 mb-1">{totalContributions}</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Contributions</div>
          </div>
          <div className="bg-white dark:bg-[#161b22] p-3 rounded-lg border border-gray-200 dark:border-[#30363d] text-center hover:border-blue-500 transition-colors">
            <div className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-1">25+</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Repositories</div>
          </div>
          <div className="bg-white dark:bg-[#161b22] p-3 rounded-lg border border-gray-200 dark:border-[#30363d] text-center hover:border-blue-500 transition-colors">
            <div className="text-lg font-bold text-purple-600 dark:text-purple-400 mb-1">{currentStreak}</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Current Streak</div>
          </div>
          <div className="bg-white dark:bg-[#161b22] p-3 rounded-lg border border-gray-200 dark:border-[#30363d] text-center hover:border-blue-500 transition-colors">
            <div className="text-lg font-bold text-yellow-600 dark:text-yellow-400 mb-1">50+</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Pull Requests</div>
          </div>
        </div>

        {/* GitHub Stats Card */}
        <div className="mt-6">
          <div className="bg-white dark:bg-[#161b22] p-4 rounded-lg border border-gray-200 dark:border-[#30363d] text-center">
            <h4 className="text-md font-semibold mb-3 text-gray-900 dark:text-white">GitHub Stats</h4>
            <img 
              src="https://github-readme-stats.vercel.app/api?username=amancodes26&theme=blue_navy&hide_border=false&include_all_commits=false&count_private=false" 
              alt="GitHub Stats" 
              className="w-full max-w-md mx-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
