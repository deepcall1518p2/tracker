import React from 'react';
import { 
  Sun, 
  Moon, 
  Download, 
  Github, 
  RotateCcw, 
  Lock, 
  Unlock, 
  Calendar, 
  CheckCircle2, 
  BookOpen
} from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
  freeMode: boolean;
  onToggleFreeMode: () => void;
  onOpenExportImport: () => void;
  onOpenGitHubPages: () => void;
  onResetProgress: () => void;
  completedTasks: number;
  totalTasks: number;
  completedDays: number;
}

export const Header: React.FC<HeaderProps> = ({
  isDarkMode,
  onToggleTheme,
  freeMode,
  onToggleFreeMode,
  onOpenExportImport,
  onOpenGitHubPages,
  onResetProgress,
  completedTasks,
  totalTasks,
  completedDays
}) => {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-white/90 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Title & Plan Metadata */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="p-1.5 rounded-lg bg-indigo-600 text-white shadow-sm shadow-indigo-500/30">
                <BookOpen className="w-5 h-5" />
              </span>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
                  My 43-Day Board Preparation Tracker
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-950/80 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                    Avinash
                  </span>
                </h1>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 flex items-center gap-2 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>4 Oct – 15 Nov 2026</span>
                  <span className="text-slate-300 dark:text-slate-600">•</span>
                  <span>4 hours / day (3 subjects × 80m)</span>
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center flex-wrap gap-2 self-start md:self-center">
            {/* Sequential Mode Toggle badge/button */}
            <button
              onClick={onToggleFreeMode}
              title={freeMode ? 'Free mode is ON: all days unlocked. Click to re-enable sequential mode.' : 'Sequential mode is ON: days unlock one by one. Click to toggle free mode.'}
              className={`text-xs px-2.5 py-1.5 rounded-lg font-medium border flex items-center gap-1.5 transition-all ${
                freeMode
                  ? 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-300 dark:border-amber-800 hover:bg-amber-500/20'
                  : 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800 hover:bg-emerald-500/20'
              }`}
            >
              {freeMode ? (
                <>
                  <Unlock className="w-3.5 h-3.5" />
                  <span>Free Mode</span>
                </>
              ) : (
                <>
                  <Lock className="w-3.5 h-3.5" />
                  <span>Sequential Lock</span>
                </>
              )}
            </button>

            {/* GitHub Pages Deploy Guide */}
            <button
              onClick={onOpenGitHubPages}
              className="text-xs px-2.5 py-1.5 rounded-lg font-medium bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 flex items-center gap-1.5 transition-colors"
              title="GitHub Pages Deployment Guide & Instructions"
            >
              <Github className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">GitHub Pages</span> Guide
            </button>

            {/* Backup / Export / Import */}
            <button
              onClick={onOpenExportImport}
              className="text-xs px-2.5 py-1.5 rounded-lg font-medium bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 flex items-center gap-1.5 transition-colors"
              title="Backup, export, or import progress JSON"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Backup / JSON</span>
            </button>

            {/* Dark / Light Toggle */}
            <button
              onClick={onToggleTheme}
              aria-label="Toggle Dark Mode"
              className="p-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors"
              title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Reset with confirmation */}
            <button
              onClick={onResetProgress}
              aria-label="Reset Progress"
              className="p-1.5 rounded-lg text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/50 border border-rose-200 dark:border-rose-900 transition-colors"
              title="Reset all progress (requires confirmation)"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
