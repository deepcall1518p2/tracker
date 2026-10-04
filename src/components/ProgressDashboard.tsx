import React from 'react';
import { 
  CheckCircle2, 
  Clock, 
  Calendar, 
  ArrowRight, 
  TrendingUp, 
  BookMarked, 
  AlertCircle 
} from 'lucide-react';
import { SubjectType } from '../types';
import { subjectMeta } from '../data/planData';

interface ProgressDashboardProps {
  overallProgress: number;
  completedTasks: number;
  totalTasks: number;
  pendingTasks: number;
  completedDays: number;
  totalDays: number;
  activeDayNumber: number;
  activeDayDateStr: string;
  activeDaySubjects: string[];
  activeDayProgress: number;
  subjectBreakdown: Record<SubjectType, { total: number; completed: number; percentage: number }>;
  onJumpToDay: (dayNumber: number) => void;
  selectedSubjectFilter: SubjectType | null;
  onSelectSubjectFilter: (subject: SubjectType | null) => void;
}

export const ProgressDashboard: React.FC<ProgressDashboardProps> = ({
  overallProgress,
  completedTasks,
  totalTasks,
  pendingTasks,
  completedDays,
  totalDays,
  activeDayNumber,
  activeDayDateStr,
  activeDaySubjects,
  activeDayProgress,
  subjectBreakdown,
  onJumpToDay,
  selectedSubjectFilter,
  onSelectSubjectFilter
}) => {
  const subjects: SubjectType[] = ['Maths', 'Science', 'Social Science', 'English', 'Hindi', 'IT'];

  return (
    <div className="space-y-4">
      {/* Top Banner: Overall Progress & Active Day Spotlight */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Main Stats Card */}
        <div className="lg:col-span-2 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-950 text-white shadow-xl shadow-slate-900/10 border border-indigo-950/60 relative overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-semibold tracking-wider uppercase text-indigo-300">
                  CBSE Class 10 Board Sprint
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Overall Completion
                </h2>
              </div>
              <div className="text-right">
                <span className="text-4xl sm:text-5xl font-extrabold text-indigo-400">
                  {overallProgress}%
                </span>
                <p className="text-xs text-slate-400 font-medium">of 43-day syllabus</p>
              </div>
            </div>

            {/* High-visibility progress bar */}
            <div className="w-full bg-slate-800/80 rounded-full h-3.5 p-0.5 overflow-hidden border border-slate-700/60 mb-5">
              <div
                className="h-full bg-gradient-to-r from-indigo-500 via-sky-400 to-emerald-400 rounded-full transition-all duration-500 shadow-sm"
                style={{ width: `${Math.min(100, Math.max(0, overallProgress))}%` }}
              />
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 border-t border-slate-800/70 text-slate-300">
              <div className="p-2.5 rounded-xl bg-slate-800/40 border border-slate-800/60">
                <div className="text-xs text-slate-400">Days Finished</div>
                <div className="text-lg sm:text-xl font-bold text-white mt-0.5">
                  {completedDays} <span className="text-xs font-normal text-slate-400">/ {totalDays}</span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-800/40 border border-slate-800/60">
                <div className="text-xs text-slate-400">Tasks Completed</div>
                <div className="text-lg sm:text-xl font-bold text-emerald-400 mt-0.5">
                  {completedTasks} <span className="text-xs font-normal text-slate-400">/ {totalTasks}</span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-800/40 border border-slate-800/60">
                <div className="text-xs text-slate-400">Pending Tasks</div>
                <div className="text-lg sm:text-xl font-bold text-amber-400 mt-0.5">
                  {pendingTasks}
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-800/40 border border-slate-800/60">
                <div className="text-xs text-slate-400">Daily Study Target</div>
                <div className="text-lg sm:text-xl font-bold text-indigo-300 mt-0.5 flex items-center gap-1">
                  <span>240</span> <span className="text-xs font-normal text-slate-400">min (4 hrs)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Current / Active Day Spotlight */}
        <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Active Unlocked Day
              </span>
              <span className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400">
                Day {activeDayNumber} of 43
              </span>
            </div>

            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Day {activeDayNumber} Plan
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {activeDayDateStr}
            </p>

            <div className="mt-3 space-y-1.5">
              <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
                Today's 3 Sessions (80 min each):
              </div>
              <div className="space-y-1">
                {activeDaySubjects.map((sub, idx) => (
                  <div
                    key={idx}
                    className="text-xs py-1 px-2 rounded-lg bg-slate-50 dark:bg-slate-800/70 border border-slate-100 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-medium truncate"
                  >
                    <span className="font-semibold text-slate-900 dark:text-white">Session {idx + 1}:</span> {sub}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="text-slate-500 dark:text-slate-400">Day {activeDayNumber} Progress</span>
              <span className="font-semibold text-slate-900 dark:text-white">{activeDayProgress}%</span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden mb-3">
              <div
                className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                style={{ width: `${activeDayProgress}%` }}
              />
            </div>

            <button
              onClick={() => onJumpToDay(activeDayNumber)}
              className="w-full py-2 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-sm shadow-indigo-600/20"
            >
              <span>Continue where I left off (Day {activeDayNumber})</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Subject-Wise Progress Bar Grid (Clickable filters) */}
      <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Subject-Wise Syllabus Completion
            </h3>
          </div>
          {selectedSubjectFilter && (
            <button
              onClick={() => onSelectSubjectFilter(null)}
              className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
            >
              Clear filter ({selectedSubjectFilter})
            </button>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {subjects.map((sub) => {
            const data = subjectBreakdown[sub];
            const meta = subjectMeta[sub];
            const isSelected = selectedSubjectFilter === sub;

            return (
              <button
                key={sub}
                onClick={() => onSelectSubjectFilter(isSelected ? null : sub)}
                className={`p-3 rounded-xl border text-left transition-all relative overflow-hidden ${
                  isSelected
                    ? 'ring-2 ring-indigo-500 border-indigo-400 bg-indigo-50/40 dark:bg-indigo-950/40'
                    : 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate">
                    {sub}
                  </span>
                  <span className="text-xs font-bold text-slate-900 dark:text-white">
                    {data.percentage}%
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden mb-1.5">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${data.percentage}%`,
                      backgroundColor: meta.color
                    }}
                  />
                </div>

                <div className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-between">
                  <span>Tasks</span>
                  <span className="font-medium text-slate-700 dark:text-slate-300">
                    {data.completed} / {data.total}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
