import React, { useState } from 'react';
import { X, Printer, Copy, Check, Download, Mail, MapPin, Github, Linkedin, GraduationCap, Briefcase, Code } from 'lucide-react';
import { PERSONAL_INFO, SKILL_CATEGORIES, PROJECTS, JOURNEY_MILESTONES } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const plainTextResume = `=====================================================
GUNA R – FRONT-END DEVELOPER | REACT.JS
Bangalore, India | gunackd@gmail.com
GitHub: https://github.com/gunackd | LinkedIn: https://linkedin.com/in/gunar-dev
=====================================================

PROFESSIONAL SUMMARY
Passionate Front-End Developer with an M.Sc. in Computer Science focused on creating responsive, interactive, and user-friendly web applications. Proficient in React.js, modern JavaScript (ES6+), Tailwind CSS, Vite, and component-driven architecture. Dedicated to writing clean, maintainable code with zero layout shift and high accessibility.

EDUCATION
Master of Science in Computer Science (M.Sc. CS)
Bangalore, India | 2022 – 2024
Core Subjects: Data Structures, Algorithms, Web Technologies, Database Systems, Computer Networks.

TECHNICAL SKILLS
• Frontend Development: React.js, JavaScript (ES6+), HTML5, CSS3, React Router, Tailwind CSS, Bootstrap, Material UI, Responsive Web Design
• Development Tools: Git, GitHub, VS Code, Vite, NPM, Vercel, Figma
• Currently Exploring: TypeScript, Next.js, Redux / Toolkit, Advanced React Architecture

FEATURED PROJECTS
1. Infinity Visions (React.js, Vite, Framer Motion, Tailwind CSS)
   - Creative digital agency website featuring fluid layout transitions and modern animations.
   - Live: https://infinityvisions.framer.website/
   - GitHub: https://github.com/gunackd/infinity-visions

2. Task List Web Application (React.js, JavaScript, Tailwind CSS, LocalStorage)
   - Client-side productivity tracker with task priority, status filters, and persistent state.
   - GitHub: https://github.com/gunackd/task-list-app

3. Seminar Hall Online Reservation System (HTML5, CSS3, JavaScript, PHP, MySQL)
   - Academic venue reservation platform with automated conflict detection and admin oversight.
   - GitHub: https://github.com/gunackd/seminar-hall-reservation

4. File Encryption and Decryption (Python, Tkinter, RSA, AES)
   - Desktop cryptography utility featuring 2048-bit asymmetric RSA keypair generation.
   - GitHub: https://github.com/gunackd/file-encryption-rsa

5. Image Colorization (Python, OpenCV, NumPy, Deep Learning)
   - Computer vision pipeline predicting LAB chrominance from grayscale luminance channels.
   - GitHub: https://github.com/gunackd/image-colorization-opencv

SECONDARY CREATIVE SKILLS
• Graphic Design, Brand Identity Systems (Infinity Visions), Video Editing & Motion Graphics.
`;

  const handleCopy = () => {
    navigator.clipboard.writeText(plainTextResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadTxt = () => {
    const blob = new Blob([plainTextResume], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Guna_R_FrontEnd_Developer_Resume.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="bg-white dark:bg-[#0F1117] border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-4xl max-h-[92vh] overflow-y-auto shadow-2xl flex flex-col text-slate-900 dark:text-slate-100"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Top Bar (Hidden in Print) */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-200 dark:border-slate-800 sticky top-0 bg-white/95 dark:bg-[#0F1117]/95 backdrop-blur-md z-20 no-print">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Curriculum Vitae
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              Guna R – Developer Resume
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-xs transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={handleDownloadTxt}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-medium transition-colors"
              title="Download text file"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">.TXT</span>
            </button>

            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-medium transition-colors"
              title="Copy plain text"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white"
              aria-label="Close resume viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document View */}
        <div className="p-6 sm:p-10 space-y-8 bg-white dark:bg-[#0B0D13] text-slate-900 dark:text-slate-100 print:text-black print:bg-white">
          {/* Resume Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 print:border-black/20 pb-6 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white print:text-black">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 print:text-blue-700 mt-0.5">
                  {PERSONAL_INFO.title}
                </p>
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 print:text-slate-700 sm:text-right space-y-1 font-mono">
                <div className="flex items-center gap-1.5 sm:justify-end">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center gap-1.5 sm:justify-end">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>{PERSONAL_INFO.email}</span>
                </div>
                <div className="flex items-center gap-3 sm:justify-end pt-1">
                  <a href={PERSONAL_INFO.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                    <Github className="w-3 h-3" /> github.com/gunackd
                  </a>
                  <a href={PERSONAL_INFO.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                    <Linkedin className="w-3 h-3" /> linkedin.com/in/gunar-dev
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Section: Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 print:text-slate-600 border-b border-slate-200 dark:border-slate-800 print:border-black/10 pb-1">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 print:text-slate-800 leading-relaxed">
              {PERSONAL_INFO.bioExtended}
            </p>
          </div>

          {/* Section: Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 print:text-slate-600 border-b border-slate-200 dark:border-slate-800 print:border-black/10 pb-1">
              Education
            </h2>
            <div className="space-y-1">
              <div className="flex justify-between items-baseline text-xs sm:text-sm">
                <span className="font-bold text-slate-900 dark:text-white print:text-black">
                  Master of Science in Computer Science (M.Sc. CS)
                </span>
                <span className="font-mono text-xs text-slate-500">2022 – 2024</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 print:text-slate-700">
                Bangalore, India · Core focus on Data Structures, Algorithms, Software Engineering, Database Systems, and Web Technologies.
              </p>
            </div>
          </div>

          {/* Section: Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 print:text-slate-600 border-b border-slate-200 dark:border-slate-800 print:border-black/10 pb-1">
              Technical Skills
            </h2>
            <div className="space-y-2 text-xs sm:text-sm">
              <div>
                <span className="font-semibold text-slate-900 dark:text-white print:text-black">Frontend Development: </span>
                <span className="text-slate-700 dark:text-slate-300 print:text-slate-800">
                  React.js, JavaScript (ES6+), HTML5, CSS3, React Router, Tailwind CSS, Bootstrap, Material UI, Responsive Web Design.
                </span>
              </div>
              <div>
                <span className="font-semibold text-slate-900 dark:text-white print:text-black">Tools & Workflows: </span>
                <span className="text-slate-700 dark:text-slate-300 print:text-slate-800">
                  Git, GitHub, VS Code, Vite, NPM, Vercel, Figma.
                </span>
              </div>
              <div>
                <span className="font-semibold text-slate-900 dark:text-white print:text-black">Currently Exploring: </span>
                <span className="text-slate-700 dark:text-slate-300 print:text-slate-800">
                  TypeScript, Next.js, Redux / Toolkit, Advanced React Architecture.
                </span>
              </div>
              <div>
                <span className="font-semibold text-slate-900 dark:text-white print:text-black">Secondary Creative: </span>
                <span className="text-slate-700 dark:text-slate-300 print:text-slate-800">
                  Graphic Design, Brand Identity (Infinity Visions), Video Editing.
                </span>
              </div>
            </div>
          </div>

          {/* Section: Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 print:text-slate-600 border-b border-slate-200 dark:border-slate-800 print:border-black/10 pb-1">
              Featured Technical Projects
            </h2>

            <div className="space-y-3">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex flex-wrap items-baseline justify-between text-xs sm:text-sm">
                    <span className="font-bold text-slate-900 dark:text-white print:text-black">
                      {proj.title}
                    </span>
                    <span className="font-mono text-[11px] text-blue-600 dark:text-blue-400 print:text-blue-700">
                      {proj.techStack.join(' · ')}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 print:text-slate-700 leading-relaxed">
                    {proj.description}
                  </p>
                  <ul className="list-disc list-inside text-[11px] text-slate-500 dark:text-slate-400 print:text-slate-600 space-y-0.5">
                    {proj.highlights.slice(0, 2).map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Bottom Bar */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 flex justify-between items-center no-print">
          <span className="text-xs text-slate-500">
            Open to Front-End Developer Opportunities in Bangalore & Remote
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold bg-slate-900 dark:bg-slate-800 text-white rounded-lg hover:bg-slate-800"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
