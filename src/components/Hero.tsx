import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Mail, Code2, Sparkles, Terminal, Copy, Check, Globe } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

const TYPING_PHRASES = [
  'Building Modern Web Experiences with React.',
  'Crafting Responsive & High-Performance UIs.',
  'Transforming Ideas into Clean, Maintainable Code.',
];

export function Hero({ onOpenResume }: HeroProps) {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [copied, setCopied] = useState(false);

  // Subtle typing animation state
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = TYPING_PHRASES[phraseIndex];
    const typingSpeed = isDeleting ? 30 : 60;

    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === currentPhrase) {
      // Pause at full phrase
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2400);
    } else if (isDeleting && displayText === '') {
      // Switch to next phrase
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % TYPING_PHRASES.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting
            ? currentPhrase.substring(0, prev.length - 1)
            : currentPhrase.substring(0, prev.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, phraseIndex]);

  const codeSnippet = `// Guna R – Front-End Developer
const developerProfile = {
  name: "Guna R",
  role: "Front-End Developer | React.js",
  specialization: "React.js & Modern Web Standards",
  education: "M.Sc. Computer Science",
  location: "Bangalore, India",
  coreStack: ["React 19", "JavaScript (ES6+)", "Tailwind CSS", "Vite"],
  status: "Open to Front-End Developer Opportunities",
  buildPhilosophy: () => "Clean code, responsive UI, zero bloat"
};`;

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Ambient background glow & subtle gradient mesh */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/15 via-violet-600/10 to-transparent blur-3xl rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 right-10 w-[300px] h-[300px] bg-violet-600/10 blur-3xl rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Presentation */}
          <div className="lg:col-span-7 space-y-6">
            {/* Availability Indicator & Degree */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 dark:text-slate-400">
              <span className="font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                FRONT-END DEVELOPER | REACT.JS
              </span>
              <span aria-hidden="true">·</span>
              <span>{PERSONAL_INFO.education}</span>
              <span aria-hidden="true">·</span>
              <span>{PERSONAL_INFO.location}</span>
            </div>

            {/* Main Heading & Headline with Typing Animation */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                Hi, I'm <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500 bg-clip-text text-transparent">Guna R.</span>
              </h1>
              <div className="min-h-[2.75rem] flex items-center">
                <p className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-200">
                  <span>{displayText}</span>
                  <span className="inline-block w-[3px] h-6 sm:h-7 ml-1 bg-blue-500 animate-pulse align-middle" aria-hidden="true" />
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              {PERSONAL_INFO.bioIntro}
            </p>

            {/* Availability Note */}
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500" aria-hidden="true" />
              <span>{PERSONAL_INFO.availability}</span>
              <span aria-hidden="true">·</span>
              <span>Bangalore, India</span>
            </div>

            {/* CTAs: 3 Buttons as specified */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 transition-all group"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl transition-all cursor-pointer"
              >
                <Download className="w-4 h-4 text-blue-500" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>
          </div>

          {/* Right Column: Developer-Themed Interactive Visual Console */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-slate-900/90 dark:bg-[#0F1117] border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-xl">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-slate-400 ml-2">DeveloperProfile.tsx</span>
                </div>
                <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 p-0.5 rounded-lg text-xs">
                  <button
                    onClick={() => setActiveTab('preview')}
                    className={`px-2.5 py-1 rounded transition-colors text-xs ${
                      activeTab === 'preview'
                        ? 'bg-blue-600 text-white font-medium'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Output
                  </button>
                  <button
                    onClick={() => setActiveTab('code')}
                    className={`px-2.5 py-1 rounded transition-colors text-xs ${
                      activeTab === 'code'
                        ? 'bg-blue-600 text-white font-medium'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Code
                  </button>
                </div>
              </div>

              {/* Tab 1: Live Interactive Component Output */}
              {activeTab === 'preview' && (
                <div className="p-6 space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-white flex items-center justify-center font-bold text-xl shadow-lg shrink-0">
                      GR
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-base flex items-center gap-1.5">
                        Guna R
                        <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                      </h3>
                      <p className="text-xs text-slate-400">Front-End Developer · React Developer</p>
                      <p className="text-xs text-slate-400">Bangalore, India</p>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80 space-y-1">
                      <span className="text-slate-400 block font-medium">Core Stack:</span>
                      <div className="flex flex-wrap gap-1.5 pt-0.5">
                        {['React.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'Vite', 'React Router'].map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-blue-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80">
                      <span className="text-slate-400 block font-medium mb-1">Development Focus:</span>
                      <p className="text-slate-300 text-xs">
                        Building responsive, accessible web interfaces with clean component architectures and smooth user experiences.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-xs text-slate-400">
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      Open to Front-End Developer Opportunities
                    </span>
                    <a
                      href="#projects"
                      className="text-blue-400 hover:text-blue-300 font-medium hover:underline"
                    >
                      View Projects →
                    </a>
                  </div>
                </div>
              )}

              {/* Tab 2: Clean Code View */}
              {activeTab === 'code' && (
                <div className="p-5 font-mono text-xs text-slate-300 overflow-x-auto relative">
                  <button
                    onClick={copyCode}
                    className="absolute top-4 right-4 p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs flex items-center gap-1 transition-colors"
                    title="Copy code"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                  <pre className="text-xs leading-relaxed text-slate-300">
                    <code>{codeSnippet}</code>
                  </pre>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
