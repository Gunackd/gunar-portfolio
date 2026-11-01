import React, { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight, Sparkles, CheckSquare, Calendar, Shield, Eye } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { ScrollReveal } from './ScrollReveal';

export function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filterTabs = ['All', 'React & Web', 'Full-Stack', 'Systems & Python'];

  const filteredProjects = PROJECTS.filter((project) => {
    if (selectedFilter === 'All') return true;
    return project.category === selectedFilter;
  });

  // Project Visual Artwork / Mockup renderer
  const renderVisualCard = (project: Project) => {
    switch (project.id) {
      case 'infinity-visions':
        return (
          <div className="w-full h-48 bg-gradient-to-br from-slate-900 via-indigo-950/70 to-slate-950 p-4 flex flex-col justify-between border-b border-slate-200 dark:border-slate-800 relative overflow-hidden group-hover:scale-[1.01] transition-transform">
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono text-violet-400 font-semibold tracking-wider">INFINITY VISIONS</span>
              <span className="text-[11px] text-slate-400">Digital Agency</span>
            </div>
            <div className="space-y-1 text-center py-2">
              <span className="text-xl font-black tracking-tight text-white block">
                CREATIVE STUDIO
              </span>
              <span className="text-xs text-violet-300/80 font-mono">React · Vite · Framer Motion</span>
            </div>
            <div className="flex justify-between items-center text-[10px] text-slate-400 pt-2 border-t border-white/5">
              <span>Interactive Agency Showcase</span>
              <span className="text-blue-400 font-mono">Live on Framer</span>
            </div>
          </div>
        );

      case 'task-list-app':
        return (
          <div className="w-full h-48 bg-gradient-to-br from-slate-900 via-blue-950/60 to-slate-950 p-4 flex flex-col justify-between border-b border-slate-200 dark:border-slate-800 relative overflow-hidden group-hover:scale-[1.01] transition-transform">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-1.5 text-blue-400 font-semibold">
                <CheckSquare className="w-4 h-4" />
                <span>TASK MANAGER</span>
              </div>
              <span className="text-[11px] text-emerald-400 font-mono">LocalStorage Sync</span>
            </div>
            <div className="space-y-1.5 py-1">
              <div className="bg-slate-950/70 border border-slate-800 rounded p-1.5 flex items-center justify-between text-[11px] text-slate-300">
                <span className="truncate">Implement React 19 memoization</span>
                <span className="text-[9px] text-rose-400 font-mono">HIGH</span>
              </div>
              <div className="bg-slate-950/70 border border-slate-800 rounded p-1.5 flex items-center justify-between text-[11px] text-slate-400 line-through">
                <span className="truncate">Configure Tailwind CSS v4 tokens</span>
                <span className="text-[9px] text-emerald-400 font-mono">DONE</span>
              </div>
            </div>
            <div className="flex justify-between items-center text-[10px] text-slate-400 pt-1 border-t border-white/5">
              <span>Client-side State Workflow</span>
              <span className="text-blue-400 font-mono">React State Hooks</span>
            </div>
          </div>
        );

      case 'seminar-hall-reservation':
        return (
          <div className="w-full h-48 bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950/50 p-4 flex flex-col justify-between border-b border-slate-200 dark:border-slate-800 relative overflow-hidden group-hover:scale-[1.01] transition-transform">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-1.5 text-indigo-400 font-semibold">
                <Calendar className="w-4 h-4" />
                <span>HALL RESERVATIONS</span>
              </div>
              <span className="text-[11px] text-slate-400 font-mono">PHP + MySQL</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5 text-center text-[10px] font-mono py-1">
              <div className="p-2 rounded bg-slate-950/70 border border-emerald-900/40 text-emerald-400">
                Main Hall: Open
              </div>
              <div className="p-2 rounded bg-slate-950/70 border border-rose-900/40 text-rose-400">
                Seminar 1: Booked
              </div>
            </div>
            <div className="flex justify-between items-center text-[10px] text-slate-400 pt-1 border-t border-white/5">
              <span>Conflict-Free Booking System</span>
              <span className="text-indigo-400 font-mono">RBAC Controls</span>
            </div>
          </div>
        );

      case 'file-encryption-decryption':
        return (
          <div className="w-full h-48 bg-gradient-to-br from-slate-900 via-violet-950/50 to-slate-950 p-4 flex flex-col justify-between border-b border-slate-200 dark:border-slate-800 relative overflow-hidden group-hover:scale-[1.01] transition-transform">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-1.5 text-violet-400 font-semibold">
                <Shield className="w-4 h-4" />
                <span>FILE CIPHER UTILITY</span>
              </div>
              <span className="text-[11px] text-slate-400 font-mono">Python Tkinter</span>
            </div>
            <div className="p-2.5 rounded bg-slate-950/80 border border-violet-900/30 text-center font-mono text-xs text-violet-300">
              RSA-2048 Asymmetric Keypair
              <span className="block text-[10px] text-slate-400 mt-0.5">AES-256 Symmetric Stream</span>
            </div>
            <div className="flex justify-between items-center text-[10px] text-slate-400 pt-1 border-t border-white/5">
              <span>Cryptographic Security</span>
              <span className="text-violet-400 font-mono">SHA-256 Hashing</span>
            </div>
          </div>
        );

      case 'image-colorization':
        return (
          <div className="w-full h-48 bg-gradient-to-br from-slate-900 via-emerald-950/40 to-slate-950 p-4 flex flex-col justify-between border-b border-slate-200 dark:border-slate-800 relative overflow-hidden group-hover:scale-[1.01] transition-transform">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <Sparkles className="w-4 h-4" />
                <span>OPENCV COLORIZATION</span>
              </div>
              <span className="text-[11px] text-slate-400 font-mono">Deep Learning</span>
            </div>
            <div className="flex items-center justify-center gap-3 py-1">
              <div className="w-16 h-12 bg-slate-800 rounded border border-slate-700 flex items-center justify-center text-[10px] text-slate-400 font-mono">
                L (Gray)
              </div>
              <span className="text-emerald-400 font-bold">→</span>
              <div className="w-16 h-12 bg-gradient-to-tr from-amber-600 via-emerald-600 to-blue-600 rounded border border-emerald-400/30 flex items-center justify-center text-[10px] text-white font-mono shadow-sm">
                RGB
              </div>
            </div>
            <div className="flex justify-between items-center text-[10px] text-slate-400 pt-1 border-t border-white/5">
              <span>Chrominance Prediction</span>
              <span className="text-emerald-400 font-mono">LAB Color Space</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header with ScrollReveal */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400">
                Featured Projects
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mt-2">
                Recent Engineering & Academic Works
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                Selected front-end applications, full-stack systems, and core computer science implementations.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
              {filterTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedFilter(tab)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                    selectedFilter === tab
                      ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Project Cards Grid with staggered ScrollReveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <ScrollReveal key={project.id} delayMs={(idx % 3) * 100} className="h-full">
              <div
                className="group rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200 overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md h-full"
              >
              <div>
                {/* Visual Showcase Graphic */}
                {renderVisualCard(project)}

                {/* Card Content */}
                <div className="p-5 space-y-3">
                  {/* Category & Status */}
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                    <span className="font-semibold text-blue-600 dark:text-blue-400">{project.category}</span>
                    <span>{project.tagline}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Clean unboxed tech tags per zero-pill rule */}
                  <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400 font-mono pt-2">
                    {project.techStack.map((tech, idx) => (
                      <React.Fragment key={tech}>
                        <span>{tech}</span>
                        {idx < project.techStack.length - 1 && <span aria-hidden="true">·</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-5 pt-0 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Case Study & Demo</span>
                </button>

                <div className="flex items-center gap-2">
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition-colors"
                      title="Open Live Website"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition-colors"
                      title="View GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
        </div>
      </div>

      {/* Project Case Study / Demo Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
