import React from 'react';
import { Sparkles, Trophy, ArrowRight, X, CheckCircle2 } from 'lucide-react';

interface CelebrationModalProps {
  dayNumber: number | null;
  onClose: () => void;
  onGoToNextDay: () => void;
}

export const CelebrationModal: React.FC<CelebrationModalProps> = ({
  dayNumber,
  onClose,
  onGoToNextDay
}) => {
  if (dayNumber === null) return null;

  const nextDay = dayNumber < 43 ? dayNumber + 1 : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in zoom-in-95">
      <div className="w-full max-w-md rounded-2xl bg-white dark:bg-slate-900 border border-emerald-300 dark:border-emerald-800 shadow-2xl p-6 text-center relative overflow-hidden">
        {/* Glow */}
        <div className="absolute -top-16 -left-16 w-36 h-36 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-16 -right-16 w-36 h-36 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none" />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-300 dark:border-emerald-800 shadow-lg shadow-emerald-500/10">
          <Trophy className="w-8 h-8" />
        </div>

        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 mb-2">
          <CheckCircle2 className="w-3.5 h-3.5" />
          Day {dayNumber} Complete!
        </span>

        <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
          Outstanding work, Avinash!
        </h3>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
          {nextDay ? (
            <>
              You have completed all 3 sessions and checked off every single task for <strong>Day {dayNumber}</strong>.{' '}
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                Day {nextDay} has automatically been unlocked for you!
              </span>
            </>
          ) : (
            <>
              🎉 <strong>Phenomenal achievement!</strong> You have completed all 43 days of the CBSE Board Sprint! Your entire syllabus plan is done!
            </>
          )}
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-2">
          {nextDay && (
            <button
              onClick={() => {
                onClose();
                onGoToNextDay();
              }}
              className="flex-1 py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-md shadow-indigo-600/20"
            >
              <span>Jump to Day {nextDay}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}

          <button
            onClick={onClose}
            className="flex-1 py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-xs sm:text-sm transition-colors"
          >
            Review Day {dayNumber}
          </button>
        </div>
      </div>
    </div>
  );
};
