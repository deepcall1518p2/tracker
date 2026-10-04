import React, { useState } from 'react';
import { X, Github, Check, Copy, ExternalLink, Terminal, Globe } from 'lucide-react';

interface GitHubPagesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GitHubPagesModal: React.FC<GitHubPagesModalProps> = ({ isOpen, onClose }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const steps = [
    {
      title: '1. Create a GitHub Repository',
      content:
        'Log in to GitHub.com, click "+ New Repository". Name it something like "cbse-study-tracker" or "board-prep-tracker". Keep it Public so GitHub Pages works for free, and leave it without a README (we will provide one).'
    },
    {
      title: '2. Build the Static Files (or use Vite build)',
      command: 'npm run build',
      content:
        'Run the build command in terminal. Vite outputs the entire production-ready, zero-backend static website into the dist/ directory.'
    },
    {
      title: '3. Push or Upload Files to GitHub',
      command: `git init\ngit add .\ngit commit -m "Initial commit for 43-day study tracker"\ngit branch -M main\ngit remote add origin https://github.com/YOUR_USERNAME/cbse-study-tracker.git\ngit push -u origin main`,
      content:
        'Push your code to your new GitHub repository using Git or GitHub Desktop.'
    },
    {
      title: '4. Enable GitHub Pages Deployment via GitHub Actions',
      content:
        'In your repository on GitHub, go to Settings -> Pages.\nUnder "Build and deployment" > "Source", select "GitHub Actions" or choose "Deploy from a branch" (gh-pages branch or dist folder).'
    },
    {
      title: '5. Access Your Published Tracker URL',
      content:
        'Once the deploy action finishes (usually 1-2 minutes), your URL will be live at: https://YOUR_USERNAME.github.io/cbse-study-tracker/\nBookmark this on your phone or computer to tick off your daily tasks!'
    },
    {
      title: '6. Backing Up & Restoring Your Progress',
      content:
        'Your progress is stored in your browser\'s localStorage automatically. You can switch devices anytime using the "Backup / JSON" button in the top bar to export a .json file and import it on any mobile or desktop browser.'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in">
      <div className="w-full max-w-2xl rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-5 flex items-center justify-between border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white">
              <Github className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Step-by-Step GitHub Pages Deployment Guide
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Deploy this static study tracker to GitHub Pages for free in 5 minutes.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-4 overflow-y-auto flex-1 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20 space-y-2"
            >
              <h4 className="font-bold text-slate-900 dark:text-white flex items-center justify-between">
                <span>{step.title}</span>
              </h4>
              <p className="whitespace-pre-line text-slate-600 dark:text-slate-400 text-xs">
                {step.content}
              </p>

              {step.command && (
                <div className="relative mt-2">
                  <pre className="p-2.5 rounded-lg bg-slate-900 text-slate-100 font-mono text-[11px] overflow-x-auto">
                    {step.command}
                  </pre>
                  <button
                    onClick={() => copyToClipboard(step.command!, idx)}
                    className="absolute right-2 top-2 p-1 rounded bg-slate-800 text-slate-300 hover:text-white text-[10px] flex items-center gap-1"
                  >
                    {copiedIndex === idx ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white transition-colors"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
