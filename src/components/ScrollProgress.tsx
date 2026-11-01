import React, { useState, useEffect } from 'react';

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateScrollProgress = () => {
      const winScroll = window.scrollY || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      
      if (height > 0) {
        const scrolled = (winScroll / height) * 100;
        setProgress(Math.min(100, Math.max(0, scrolled)));
      } else {
        setProgress(0);
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    };

    // Calculate initial state
    updateScrollProgress();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', updateScrollProgress, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updateScrollProgress);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-[3.5px] z-[100] pointer-events-none bg-transparent"
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      {/* Background track (subtle translucent line in dark/light mode) */}
      <div className="absolute inset-0 bg-slate-900/10 dark:bg-white/5" />

      {/* Progress fill bar */}
      <div
        className="h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500 transition-[width] duration-75 ease-out relative shadow-[0_0_12px_rgba(99,102,241,0.6)]"
        style={{ width: `${progress}%` }}
      >
        {/* Glowing tip indicator at the leading edge when actively progressing */}
        {progress > 0 && progress < 100 && (
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#38bdf8] -mr-1" />
        )}
      </div>
    </div>
  );
}
