import Header from '@/components/Header'
import Hero from '@/components/Hero'
import GitHubActivity from '@/components/GitHubActivity'
import ProofOfWork from '@/components/ProofOfWork'
import OpenSourceContributions from '@/components/OpenSourceContributions'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0d1117] transition-colors duration-300">
      <Header />
      <main className="max-w-2xl mx-auto px-4 pt-20 pb-8">
        <div className="bg-white dark:bg-[#161b22] shadow-lg rounded-xl border border-gray-200 dark:border-[#30363d] overflow-hidden">
          <Hero />
          <GitHubActivity />
          <ProofOfWork />
          <OpenSourceContributions />
          <Projects />
          <Contact />
        </div>
      </main>
    </div>
  );
}
