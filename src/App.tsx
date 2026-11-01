/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { JourneyTimeline } from './components/JourneyTimeline';
import { CreativeSkills } from './components/CreativeSkills';
import { GithubActivity } from './components/GithubActivity';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  // Synchronize dark class on <html> document element
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#08090D] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Scroll Progress Bar at the top of the window */}
      <ScrollProgress />

      {/* Top Navigation */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        isDark={isDark}
        toggleTheme={toggleTheme}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* About Me Section */}
        <About />

        {/* Technical Skills Section */}
        <Skills />

        {/* Featured Projects with Category Filter & Case Study Modals */}
        <Projects />

        {/* Experience & Learning Journey Timeline */}
        <JourneyTimeline />

        {/* Secondary Creative Competencies: Infinity Visions */}
        <CreativeSkills />

        {/* GitHub Activity & Contributions */}
        <GithubActivity />

        {/* Contact Section with Interactive Form */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Downloadable / Printable Developer Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
