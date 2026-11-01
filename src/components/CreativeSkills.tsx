import React from 'react';
import { Palette, Film, Sparkles, ExternalLink, Brush } from 'lucide-react';
import { CREATIVE_SKILLS } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export function CreativeSkills() {
  const creativeIcons = [Palette, Brush, Film];

  return (
    <section className="py-18 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header with ScrollReveal */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold tracking-wider uppercase text-violet-600 dark:text-violet-400">
                  Secondary Creative Competencies
                </span>
                <span className="text-xs text-slate-400">· Creative Brand: Infinity Visions</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mt-2">
                Design & Motion Capabilities
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                Complementary visual skills that empower me to bridge the gap between design vision and pixel-perfect front-end code.
              </p>
            </div>

            <a
              href="https://infinityvisions.framer.website/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-violet-600 dark:text-violet-300 bg-violet-50 dark:bg-violet-950/40 hover:bg-violet-100 dark:hover:bg-violet-900/40 border border-violet-200 dark:border-violet-800/60 rounded-xl transition-colors shrink-0"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Visit Infinity Visions Studio</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </ScrollReveal>

        {/* 3 Creative Cards with staggered ScrollReveal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CREATIVE_SKILLS.map((item, idx) => {
            const IconComponent = creativeIcons[idx % creativeIcons.length];
            return (
              <ScrollReveal key={item.title} delayMs={idx * 100} className="h-full">
                <div
                  className="p-6 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 hover:border-violet-500/40 dark:hover:border-violet-500/40 transition-all duration-200 shadow-xs flex flex-col justify-between h-full"
                >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-violet-600/10 text-violet-600 dark:text-violet-400 flex items-center justify-center">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-400 block">
                      {item.discipline}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mt-1">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80">
                  <span className="text-[10px] uppercase font-mono text-slate-400 block mb-1.5">
                    Toolkit & Workflows
                  </span>
                  <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono">
                    {item.tools.map((tool, tIdx) => (
                      <React.Fragment key={tool}>
                        <span>{tool}</span>
                        {tIdx < item.tools.length - 1 && <span aria-hidden="true">·</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
        </div>
      </div>
    </section>
  );
}
