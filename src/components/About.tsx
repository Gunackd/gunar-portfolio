import React from 'react';
import { GraduationCap, Code2, Compass, MapPin, Sparkles, UserCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'Education',
      detail: 'M.Sc. Computer Science',
      subtext: 'Solid foundations in algorithms, data structures & software architecture',
    },
    {
      icon: Code2,
      title: 'Technical Focus',
      detail: 'Front-End & React.js',
      subtext: 'Component-driven UIs, modern state workflows, responsive web design',
    },
    {
      icon: Compass,
      title: 'Career Trajectory',
      detail: 'Entry-Level Developer',
      subtext: 'Committed to writing maintainable code and expanding full-stack skills',
    },
    {
      icon: MapPin,
      title: 'Location',
      detail: 'Bangalore, India',
      subtext: 'Open to onsite Bangalore roles, hybrid, and remote opportunities',
    },
  ];

  return (
    <section id="about" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header with ScrollReveal */}
        <ScrollReveal>
          <div className="mb-14 max-w-2xl">
            <span className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400">
              About Me
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mt-2">
              Passionate Front-End Developer with Computer Science Roots
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Bio & Story */}
          <ScrollReveal delayMs={100} className="lg:col-span-7 space-y-6">
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed">
              {PERSONAL_INFO.bioExtended}
            </p>

            <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 space-y-3">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                Academic Background & Foundations
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Graduated with a Master of Science in Computer Science (M.Sc. CS). The rigorous coursework provided a strong theoretical grounding in computational principles, data structures, and database systems, which now shapes how I approach front-end architecture, state isolation, and UI scalability.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 space-y-3">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                <Compass className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                Career Goal & Engineering Philosophy
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {PERSONAL_INFO.careerGoals}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 space-y-3">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                Technical & Creative Intersections
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Beyond core coding, I have secondary competencies in graphic design, branding, and video editing through my creative brand <span className="font-semibold text-slate-900 dark:text-white">Infinity Visions</span>. This gives me strong visual intuition for typography, color balance, and smooth motion that directly enriches my front-end implementations.
              </p>
            </div>
          </ScrollReveal>

          {/* Right Column: Profile Showcase & Highlights */}
          <ScrollReveal delayMs={200} className="lg:col-span-5 space-y-6">
            {/* Developer Card & Avatar */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-[#0F1117] border border-slate-800 text-white shadow-xl relative overflow-hidden">
              <div
                className="absolute -top-12 -right-12 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"
                aria-hidden="true"
              />

              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 p-0.5 shadow-lg shrink-0">
                  <div className="w-full h-full rounded-[14px] bg-slate-950 flex flex-col items-center justify-center text-white">
                    <span className="text-2xl font-black tracking-tight">GR</span>
                    <span className="text-[9px] font-mono text-blue-400">DEV</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    Guna R
                    <UserCheck className="w-4 h-4 text-emerald-400" />
                  </h3>
                  <p className="text-xs text-blue-400 font-medium">Front-End Developer · React Developer</p>
                  <p className="text-xs text-slate-400 mt-0.5">Bangalore, Karnataka, India</p>
                </div>
              </div>

              <div className="space-y-3 pt-2 border-t border-slate-800 text-xs">
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">Degree</span>
                  <span className="text-white font-medium">M.Sc. Computer Science</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">Experience</span>
                  <span className="text-white font-medium">Fresher / Entry-Level</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">Primary Focus</span>
                  <span className="text-blue-400 font-medium">React.js & Front-End</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Secondary Skills</span>
                  <span className="text-slate-300">Graphic Design & Video Editing</span>
                </div>
              </div>
            </div>

            {/* Quick 2x2 Highlight Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 space-y-1"
                >
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 dark:text-white">
                    <item.icon className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    <span>{item.title}</span>
                  </div>
                  <div className="text-xs font-medium text-blue-600 dark:text-blue-400">
                    {item.detail}
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
                    {item.subtext}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
