import React, { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight, Sparkles, CheckSquare, Calendar, Shield, Eye, Play, Monitor, Layers } from 'lucide-react';
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

  // High-fidelity screenshot-grade mockup renderer for each project
  const renderVisualCard = (project: Project) => {
    switch (project.id) {
      case 'infinity-visions':
        return (
          <div className="w-full h-52 bg-[#0B0D13] p-3 flex flex-col justify-between border-b border-slate-200 dark:border-slate-800 relative overflow-hidden group-hover:border-violet-500/30 transition-colors">
            {/* Browser chrome header */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-800/80 text-[11px]">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 font-mono text-slate-400 text-[10px] hidden sm:inline">infinityvisions.framer.website</span>
              </div>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-violet-950/60 text-violet-300 border border-violet-800/50">
                Live Agency Site
              </span>
            </div>

            {/* Simulated Agency Web UI Screenshot */}
            <div className="my-auto py-2 px-3 rounded-lg bg-gradient-to-br from-slate-900 via-indigo-950/50 to-slate-950 border border-violet-900/40 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-violet-600/20 rounded-full blur-xl pointer-events-none" />
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-[11px] font-extrabold tracking-wider text-white font-mono">INFINITY VISIONS</span>
                <span className="text-[9px] text-violet-400 font-mono">React · Framer</span>
              </div>
              <p className="text-xs font-bold text-slate-100 leading-tight">
                Crafting Futuristic Digital Brand Identities
              </p>
              <div className="mt-2 flex gap-1.5">
                <div className="px-2 py-0.5 rounded bg-violet-600/40 border border-violet-500/50 text-[9px] text-white font-mono">
                  Agency Portfolio
                </div>
                <div className="px-2 py-0.5 rounded bg-slate-800 text-[9px] text-slate-300 font-mono">
                  Motion Transitions
                </div>
              </div>
            </div>

            {/* Bottom status bar */}
            <div className="flex justify-between items-center text-[10px] text-slate-400 pt-1">
              <span className="flex items-center gap-1">
                <Monitor className="w-3 h-3 text-violet-400" /> Responsive Web Architecture
              </span>
              <span className="text-blue-400 font-mono text-[9px]">Production Vercel / Framer</span>
            </div>
          </div>
        );

      case 'task-list-app':
        return (
          <div className="w-full h-52 bg-[#0B0D13] p-3 flex flex-col justify-between border-b border-slate-200 dark:border-slate-800 relative overflow-hidden group-hover:border-blue-500/30 transition-colors">
            {/* Browser chrome header */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-800/80 text-[11px]">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 font-mono text-slate-400 text-[10px] hidden sm:inline">localhost:3000/tasks</span>
              </div>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-950/60 text-blue-300 border border-blue-800/50">
                Interactive Demo
              </span>
            </div>

            {/* Simulated Task Board UI Screenshot */}
            <div className="my-auto space-y-1.5 py-1">
              <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 truncate">
                  <CheckSquare className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span className="text-[11px] text-slate-200 truncate">Optimize React component hooks</span>
                </div>
                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-rose-950/60 text-rose-300 border border-rose-900/50">
                  HIGH
                </span>
              </div>

              <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800/60 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 truncate">
                  <span className="w-3.5 h-3.5 rounded border border-emerald-500/60 bg-emerald-950/40 flex items-center justify-center text-[10px] text-emerald-400 shrink-0">
                    ✓
                  </span>
                  <span className="text-[11px] text-slate-400 line-through truncate">Client-side LocalStorage cache</span>
                </div>
                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-900/50">
                  DONE
                </span>
              </div>
            </div>

            {/* Bottom status bar */}
            <div className="flex justify-between items-center text-[10px] text-slate-400 pt-1">
              <span>Dynamic State & Filters</span>
              <span className="text-emerald-400 font-mono text-[9px]">4 Tasks Active</span>
            </div>
          </div>
        );

      case 'seminar-hall-reservation':
        return (
          <div className="w-full h-52 bg-[#0B0D13] p-3 flex flex-col justify-between border-b border-slate-200 dark:border-slate-800 relative overflow-hidden group-hover:border-indigo-500/30 transition-colors">
            {/* Browser chrome header */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-800/80 text-[11px]">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 font-mono text-slate-400 text-[10px] hidden sm:inline">campus-portal/reservations</span>
              </div>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-indigo-950/60 text-indigo-300 border border-indigo-800/50">
                Full-Stack
              </span>
            </div>

            {/* Simulated Hall Reservation Dashboard Screenshot */}
            <div className="my-auto py-1.5 space-y-1.5">
              <div className="flex justify-between items-center text-[10px] text-slate-400 px-1">
                <span className="font-semibold text-slate-200 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-indigo-400" /> Auditorium Slot Matrix
                </span>
                <span className="font-mono text-emerald-400 text-[9px]">Live Conflict Check</span>
              </div>
              <div className="grid grid-cols-2 gap-1.5 text-center text-[10px] font-mono">
                <div className="p-2 rounded bg-slate-900/90 border border-emerald-900/50 text-emerald-300 flex items-center justify-between px-2">
                  <span>Main Hall</span>
                  <span className="text-[8px] bg-emerald-950/80 px-1 py-0.5 rounded border border-emerald-800/50">OPEN</span>
                </div>
                <div className="p-2 rounded bg-slate-900/90 border border-rose-900/50 text-rose-300 flex items-center justify-between px-2">
                  <span>Seminar 1</span>
                  <span className="text-[8px] bg-rose-950/80 px-1 py-0.5 rounded border border-rose-800/50">BOOKED</span>
                </div>
              </div>
            </div>

            {/* Bottom status bar */}
            <div className="flex justify-between items-center text-[10px] text-slate-400 pt-1">
              <span>Role-Based Access Control</span>
              <span className="text-indigo-400 font-mono text-[9px]">PHP · MySQL</span>
            </div>
          </div>
        );

      case 'file-encryption-decryption':
        return (
          <div className="w-full h-52 bg-[#0B0D13] p-3 flex flex-col justify-between border-b border-slate-200 dark:border-slate-800 relative overflow-hidden group-hover:border-violet-500/30 transition-colors">
            {/* Tkinter GUI header */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-800/80 text-[11px]">
              <div className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-violet-400" />
                <span className="font-mono text-slate-300 text-[10px]">CryptoUtility.py – Tkinter</span>
              </div>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-violet-950/60 text-violet-300 border border-violet-800/50">
                RSA + AES-256
              </span>
            </div>

            {/* Simulated Desktop Security Utility Screenshot */}
            <div className="my-auto p-2.5 rounded-lg bg-slate-950/90 border border-violet-900/40 space-y-1.5">
              <div className="flex items-center justify-between text-[10px] font-mono">
                <span className="text-slate-400">Asymmetric RSA:</span>
                <span className="text-emerald-400">2048-bit Keypair Active</span>
              </div>
              <p className="font-mono text-[9px] text-violet-300 break-all bg-slate-900 p-1.5 rounded border border-slate-800">
                -----BEGIN RSA PUBLIC KEY----- MIIBCgKCAQEA3zF9A...
              </p>
            </div>

            {/* Bottom status bar */}
            <div className="flex justify-between items-center text-[10px] text-slate-400 pt-1">
              <span>SHA-256 Hash Verification</span>
              <span className="text-violet-400 font-mono text-[9px]">Zero Data Loss</span>
            </div>
          </div>
        );

      case 'image-colorization':
        return (
          <div className="w-full h-52 bg-[#0B0D13] p-3 flex flex-col justify-between border-b border-slate-200 dark:border-slate-800 relative overflow-hidden group-hover:border-emerald-500/30 transition-colors">
            {/* CV pipeline header */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-800/80 text-[11px]">
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span className="font-mono text-slate-300 text-[10px]">OpenCV DNN Pipeline</span>
              </div>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-800/50">
                LAB Colorspace
              </span>
            </div>

            {/* Simulated Before & After Photo Restoration Comparison */}
            <div className="my-auto flex items-center justify-center gap-2.5 py-1">
              <div className="w-24 h-16 rounded-md bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 flex flex-col items-center justify-center text-center p-1">
                <span className="text-[8px] uppercase tracking-wider text-slate-400 font-mono">Input</span>
                <span className="text-[10px] text-slate-300 font-medium">Grayscale (L)</span>
              </div>
              <span className="text-emerald-400 font-black text-sm">→</span>
              <div className="w-24 h-16 rounded-md bg-gradient-to-tr from-rose-900 via-amber-800 to-emerald-800 border border-emerald-500/40 flex flex-col items-center justify-center text-center p-1 shadow-md shadow-emerald-950/40">
                <span className="text-[8px] uppercase tracking-wider text-emerald-300 font-mono font-bold">Inferred</span>
                <span className="text-[10px] text-white font-medium">Vibrant (RGB)</span>
              </div>
            </div>

            {/* Bottom status bar */}
            <div className="flex justify-between items-center text-[10px] text-slate-400 pt-1">
              <span>Deep Learning Prediction</span>
              <span className="text-emerald-400 font-mono text-[9px]">Caffe Model</span>
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
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
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
                  {/* Visual Screenshot Graphic */}
                  {renderVisualCard(project)}

                  {/* Card Content */}
                  <div className="p-5 space-y-3">
                    {/* Category & Tagline */}
                    <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                      <span className="font-semibold text-blue-600 dark:text-blue-400">{project.category}</span>
                      <span className="truncate ml-2">{project.tagline}</span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    {/* Clean unboxed tech tags per zero-pill rule */}
                    <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400 font-mono pt-2">
                      {project.techStack.map((tech, tIdx) => (
                        <React.Fragment key={tech}>
                          <span>{tech}</span>
                          {tIdx < project.techStack.length - 1 && <span aria-hidden="true">·</span>}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions: Clear View Project and Demo/GitHub buttons */}
                <div className="p-5 pt-0 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-3 mt-4">
                  {/* Primary View Project Action */}
                  <button
                    type="button"
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 dark:bg-blue-950/40 hover:bg-blue-100 dark:hover:bg-blue-900/40 text-blue-600 dark:text-blue-400 text-xs font-semibold rounded-lg border border-blue-200 dark:border-blue-800/50 transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Project</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {/* Live Demo or Interactive In-App Demo */}
                    {project.liveUrl && project.liveUrl !== '#' ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white text-xs font-medium transition-colors"
                        title="Open Live Website Demo"
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Live Demo</span>
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setActiveModalProject(project)}
                        className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 text-xs font-medium transition-colors cursor-pointer"
                        title="Run Interactive Simulator Demo"
                      >
                        <Play className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Run Demo</span>
                      </button>
                    )}

                    {/* GitHub link */}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition-colors"
                        title="View GitHub Repository"
                        aria-label={`View ${project.title} on GitHub`}
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
