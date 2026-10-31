import React from 'react';
import { GraduationCap, Code2, Rocket, RefreshCw, CheckCircle2 } from 'lucide-react';
import { JOURNEY_MILESTONES } from '../data/portfolioData';

export function JourneyTimeline() {
  const milestoneIcons = [GraduationCap, Code2, Rocket, RefreshCw];

  return (
    <section id="journey" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-[#08090D]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-14 max-w-2xl">
          <span className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400">
            Evolution & Education
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mt-2">
            Learning Journey & Milestones
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
            A transparent timeline of academic training, hands-on project development, and progressive mastery of the front-end ecosystem.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 md:ml-32 space-y-12">
          {JOURNEY_MILESTONES.map((milestone, idx) => {
            const IconComponent = milestoneIcons[idx % milestoneIcons.length];
            return (
              <div key={milestone.title} className="relative pl-8 md:pl-10 group">
                {/* Timeline node marker */}
                <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-white dark:bg-[#08090D] border-2 border-blue-600 dark:border-blue-500 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                  <IconComponent className="w-3.5 h-3.5" />
                </div>

                {/* Left side desktop year label */}
                <div className="hidden md:block absolute -left-36 top-2 w-28 text-right font-mono text-xs text-slate-400 dark:text-slate-500 font-semibold">
                  {milestone.year}
                </div>

                {/* Content Box */}
                <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200 shadow-xs">
                  {/* Mobile Year Badge */}
                  <div className="md:hidden inline-block text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold mb-2">
                    {milestone.year}
                  </div>

                  <div className="flex flex-wrap items-center gap-2 mb-2 text-xs text-slate-500 dark:text-slate-400">
                    <span className="font-semibold text-blue-600 dark:text-blue-400">{milestone.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>Academic & Independent Focus</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {milestone.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {milestone.description}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                    {milestone.keyPoints.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
