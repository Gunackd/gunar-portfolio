import React, { useState } from 'react';
import { Github, ExternalLink, GitCommit, GitPullRequest, GitFork, Star, Code } from 'lucide-react';
import { GITHUB_STATS } from '../data/portfolioData';

export function GithubActivity() {
  const [activeTab, setActiveTab] = useState<'activity' | 'repos'>('activity');

  // Simulated 52-week contribution matrix grid (7 rows for days)
  // Generating realistic developer commits pattern
  const weeks = 28; // last 28 weeks visible on desktop
  const days = 7;

  const getActivityColor = (weekIndex: number, dayIndex: number) => {
    // deterministic pseudo-pattern
    const val = (weekIndex * 7 + dayIndex * 13) % 19;
    if (val === 0) return 'bg-slate-200 dark:bg-slate-800/80';
    if (val < 5) return 'bg-blue-300 dark:bg-blue-900/60';
    if (val < 11) return 'bg-blue-400 dark:bg-blue-700/70';
    if (val < 16) return 'bg-blue-500 dark:bg-blue-500/80';
    return 'bg-blue-600 dark:bg-blue-400';
  };

  const sampleRepositories = [
    {
      name: 'infinity-visions',
      desc: 'Creative digital agency platform with modern animations and fluid layouts.',
      lang: 'JavaScript / React',
      stars: 4,
      forks: 1,
      url: 'https://github.com/gunackd/infinity-visions',
    },
    {
      name: 'task-list-app',
      desc: 'Client-side productivity tracker featuring priority filters and localStorage sync.',
      lang: 'JavaScript',
      stars: 3,
      forks: 0,
      url: 'https://github.com/gunackd/task-list-app',
    },
    {
      name: 'seminar-hall-reservation',
      desc: 'Campus seminar and auditorium reservation portal with conflict prevention.',
      lang: 'PHP / MySQL',
      stars: 2,
      forks: 1,
      url: 'https://github.com/gunackd/seminar-hall-reservation',
    },
    {
      name: 'file-encryption-rsa',
      desc: 'Hybrid RSA-2048 + AES-256 desktop cryptographic utility in Python Tkinter.',
      lang: 'Python',
      stars: 5,
      forks: 2,
      url: 'https://github.com/gunackd/file-encryption-rsa',
    },
  ];

  return (
    <section className="py-18 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-[#08090D]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400">
              Open Source & Commits
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mt-2">
              GitHub Development Activity
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
              Commit frequency, repositories, and continuous code writing discipline.
            </p>
          </div>

          <a
            href={`https://github.com/${GITHUB_STATS.username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-900 dark:text-white bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-xl transition-all shadow-xs shrink-0"
          >
            <Github className="w-4 h-4" />
            <span>Visit @{GITHUB_STATS.username} on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>

        {/* GitHub Stats Card */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-xs space-y-6">
          {/* Top summary row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
            <div>
              <span className="text-xs text-slate-500 dark:text-slate-400 block">Total Commits</span>
              <span className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-mono tabular-nums">
                {GITHUB_STATS.contributionsThisYear}+
              </span>
            </div>
            <div>
              <span className="text-xs text-slate-500 dark:text-slate-400 block">Public Repositories</span>
              <span className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-mono tabular-nums">
                {GITHUB_STATS.repositoriesCount}
              </span>
            </div>
            <div>
              <span className="text-xs text-slate-500 dark:text-slate-400 block">Active Streak</span>
              <span className="text-xl sm:text-2xl font-bold text-emerald-600 dark:text-emerald-400 font-mono tabular-nums">
                {GITHUB_STATS.streakDays} Days
              </span>
            </div>
            <div>
              <span className="text-xs text-slate-500 dark:text-slate-400 block">Primary Language</span>
              <span className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400 font-mono">
                JavaScript
              </span>
            </div>
          </div>

          {/* Contribution Heatmap Preview */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span className="font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <GitCommit className="w-3.5 h-3.5 text-blue-500" />
                Contribution Heatmap (Recent Months)
              </span>
              <div className="flex items-center gap-1.5 text-[11px]">
                <span>Less</span>
                <span className="w-2.5 h-2.5 rounded-xs bg-slate-200 dark:bg-slate-800" />
                <span className="w-2.5 h-2.5 rounded-xs bg-blue-300 dark:bg-blue-900/60" />
                <span className="w-2.5 h-2.5 rounded-xs bg-blue-500 dark:bg-blue-600" />
                <span className="w-2.5 h-2.5 rounded-xs bg-blue-600 dark:bg-blue-400" />
                <span>More</span>
              </div>
            </div>

            {/* Scrollable Heatmap Grid */}
            <div className="overflow-x-auto pb-2">
              <div className="inline-grid grid-rows-7 grid-flow-col gap-1 min-w-[500px]">
                {Array.from({ length: weeks * days }).map((_, index) => {
                  const weekIdx = Math.floor(index / days);
                  const dayIdx = index % days;
                  return (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-[2px] transition-transform hover:scale-125 ${getActivityColor(
                        weekIdx,
                        dayIdx
                      )}`}
                      title={`Activity block`}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          {/* Language Breakdown Bar */}
          <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
            <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold block">
              Language Distribution Across Repositories
            </span>
            <div className="w-full h-2 rounded-full overflow-hidden flex bg-slate-100 dark:bg-slate-800">
              <div style={{ width: '58%' }} className="bg-yellow-400" title="JavaScript: 58%" />
              <div style={{ width: '22%' }} className="bg-orange-500" title="HTML & CSS: 22%" />
              <div style={{ width: '14%' }} className="bg-blue-500" title="Python: 14%" />
              <div style={{ width: '6%' }} className="bg-indigo-400" title="PHP: 6%" />
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 dark:text-slate-400 pt-1">
              {GITHUB_STATS.topLanguages.map((lang) => (
                <div key={lang.name} className="flex items-center gap-1.5">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      lang.name.includes('JavaScript')
                        ? 'bg-yellow-400'
                        : lang.name.includes('HTML')
                        ? 'bg-orange-500'
                        : lang.name.includes('Python')
                        ? 'bg-blue-500'
                        : 'bg-indigo-400'
                    }`}
                  />
                  <span>{lang.name}</span>
                  <span className="font-mono text-slate-400 tabular-nums">({lang.percentage}%)</span>
                </div>
              ))}
            </div>
          </div>

          {/* Repositories Spotlight Grid */}
          <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
              Public Repositories Spotlight
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {sampleRepositories.map((repo) => (
                <a
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-colors group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-mono font-semibold text-blue-600 dark:text-blue-400 group-hover:underline">
                        {repo.name}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-400" />
                    </div>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400 line-clamp-2">
                      {repo.desc}
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono pt-2 mt-2 border-t border-slate-200/60 dark:border-slate-800/60">
                    <span>{repo.lang}</span>
                    <div className="flex items-center gap-2">
                      <span className="flex items-center gap-0.5">
                        <Star className="w-3 h-3 text-amber-400" /> {repo.stars}
                      </span>
                      <span className="flex items-center gap-0.5">
                        <GitFork className="w-3 h-3 text-slate-400" /> {repo.forks}
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
