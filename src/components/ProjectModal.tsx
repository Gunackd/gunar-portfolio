import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Cpu, Layers } from 'lucide-react';
import { Project } from '../types/portfolio';
import {
  TaskListInteractiveDemo,
  RsaEncryptionInteractiveDemo,
  ImageColorizationInteractiveDemo,
  SeminarHallInteractiveDemo,
  InfinityVisionsInteractiveDemo,
} from './InteractiveDemos';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="bg-white dark:bg-[#0F1117] border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col text-slate-900 dark:text-slate-100 animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-800 sticky top-0 bg-white/95 dark:bg-[#0F1117]/95 backdrop-blur-md z-10">
          <div>
            <div className="flex items-center gap-2 text-xs text-blue-600 dark:text-blue-400 font-semibold mb-1">
              <span>{project.category}</span>
              <span aria-hidden="true">·</span>
              <span>Case Study & Demo</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {/* Tagline & Extended Description */}
          <div>
            <p className="text-sm sm:text-base font-medium text-slate-700 dark:text-slate-200 mb-2">
              {project.tagline}
            </p>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {project.detailedDescription || project.description}
            </p>
          </div>

          {/* Interactive In-Modal Demo */}
          {project.interactiveDemoType && (
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-blue-500" />
                Live In-App Interactive Simulation
              </span>
              {project.interactiveDemoType === 'task-app' && <TaskListInteractiveDemo />}
              {project.interactiveDemoType === 'rsa-encryption' && <RsaEncryptionInteractiveDemo />}
              {project.interactiveDemoType === 'colorization' && <ImageColorizationInteractiveDemo />}
              {project.interactiveDemoType === 'hall-reservation' && <SeminarHallInteractiveDemo />}
              {project.interactiveDemoType === 'infinity-visions' && <InfinityVisionsInteractiveDemo />}
            </div>
          )}

          {/* Key Engineering Highlights */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              Key Implementation Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.highlights.map((h, i) => (
                <div
                  key={i}
                  className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Notes if present */}
          {project.architecture && (
            <div className="space-y-2.5">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-violet-500" />
                Architectural Decisions
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                {project.architecture.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-violet-500 font-mono">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack List */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer with Actions */}
        <div className="p-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 bg-slate-50 dark:bg-slate-900/50">
          <div className="flex items-center gap-3">
            {project.liveUrl && project.liveUrl !== '#' ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold shadow-sm transition-colors"
              >
                <span>Visit Live Agency Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/40 text-emerald-300 border border-emerald-800/50 text-xs font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Interactive In-App Simulator Active</span>
              </span>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 text-white dark:bg-slate-800 dark:hover:bg-slate-700 hover:bg-slate-800 rounded-lg text-xs font-semibold transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>View Source on GitHub</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
