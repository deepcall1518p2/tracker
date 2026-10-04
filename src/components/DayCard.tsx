import React, { useState } from 'react';
import { 
  Lock, 
  Unlock, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Clock, 
  FileText, 
  AlertTriangle, 
  Sparkles, 
  BookOpen
} from 'lucide-react';
import { DayPlan, SubjectType } from '../types';
import { subjectMeta } from '../data/planData';

interface DayCardProps {
  day: DayPlan;
  dayStats: {
    totalTasks: number;
    completedTasks: number;
    isCompleted: boolean;
    isUnlocked: boolean;
    status: 'completed' | 'in_progress' | 'not_started' | 'locked';
    progressPct: number;
  };
  completedTaskIds: Set<string>;
  onToggleTask: (taskId: string, dayNum: number) => void;
  dayNote: string;
  onSaveDayNote: (dayNum: number, note: string) => void;
  onOpenAddError: (dayNum: number, subject: SubjectType, chapter: string) => void;
  isInitialExpanded?: boolean;
}

export const DayCard: React.FC<DayCardProps> = ({
  day,
  dayStats,
  completedTaskIds,
  onToggleTask,
  dayNote,
  onSaveDayNote,
  onOpenAddError,
  isInitialExpanded = false
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(isInitialExpanded);
  const [isEditingNote, setIsEditingNote] = useState<boolean>(false);
  const [localNote, setLocalNote] = useState<string>(dayNote || '');

  // Keep local note in sync if prop changes
  React.useEffect(() => {
    setLocalNote(dayNote || '');
  }, [dayNote]);

  const handleBlurNote = () => {
    onSaveDayNote(day.dayNumber, localNote);
  };

  const getStatusBadge = () => {
    switch (dayStats.status) {
      case 'completed':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Completed
          </span>
        );
      case 'in_progress':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 dark:bg-sky-950/80 dark:text-sky-300 border border-sky-300 dark:border-sky-800">
            <Clock className="w-3.5 h-3.5" />
            In Progress ({dayStats.progressPct}%)
          </span>
        );
      case 'locked':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400 border border-slate-300 dark:border-slate-700">
            <Lock className="w-3.5 h-3.5 text-slate-500" />
            Locked
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 dark:bg-slate-800/60 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
            Not Started
          </span>
        );
    }
  };

  const isLocked = !dayStats.isUnlocked;

  return (
    <div
      id={`day-card-${day.dayNumber}`}
      className={`rounded-2xl transition-all border ${
        isLocked
          ? 'bg-slate-50/70 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800/80 opacity-80'
          : dayStats.isCompleted
          ? 'bg-white dark:bg-slate-900 border-emerald-300 dark:border-emerald-900/60 shadow-sm'
          : dayStats.status === 'in_progress'
          ? 'bg-white dark:bg-slate-900 border-indigo-300 dark:border-indigo-900/80 shadow-md ring-1 ring-indigo-500/20'
          : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm'
      }`}
    >
      {/* Day Header Accordion Toggle */}
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="p-4 sm:p-5 flex items-center justify-between gap-3 cursor-pointer select-none hover:bg-slate-50/50 dark:hover:bg-slate-800/40 rounded-2xl transition-colors"
      >
        <div className="flex items-center gap-3.5 min-w-0">
          {/* Day number badge */}
          <div
            className={`w-11 h-11 rounded-xl flex flex-col items-center justify-center font-bold text-xs shrink-0 transition-colors ${
              dayStats.isCompleted
                ? 'bg-emerald-600 text-white shadow-sm shadow-emerald-600/30'
                : isLocked
                ? 'bg-slate-200 text-slate-500 dark:bg-slate-800 dark:text-slate-400'
                : 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/30'
            }`}
          >
            <span className="text-[10px] uppercase font-semibold tracking-wider">Day</span>
            <span className="text-base leading-none">{day.dayNumber}</span>
          </div>

          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white truncate">
                Day {day.dayNumber}
              </h3>
              <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium truncate">
                — {day.dateStr}
              </span>
              {getStatusBadge()}
            </div>

            {/* Quick summary of 3 subjects */}
            <div className="flex flex-wrap items-center gap-1.5 mt-1.5">
              {day.sessions.map((s, idx) => {
                const sMeta = subjectMeta[s.subject];
                return (
                  <span
                    key={idx}
                    className={`text-[11px] font-medium px-2 py-0.5 rounded-md border ${sMeta.badgeBg}`}
                  >
                    {s.subject}: {s.chapter}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right side: progress indicator + chevron */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden sm:flex flex-col items-end text-right">
            <span className="text-xs font-semibold text-slate-900 dark:text-white">
              {dayStats.completedTasks} / {dayStats.totalTasks} Tasks
            </span>
            <span className="text-[11px] text-slate-400">
              {dayStats.progressPct}% done
            </span>
          </div>

          <div className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </div>
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="px-4 sm:px-6 pb-6 pt-1 border-t border-slate-100 dark:border-slate-800/80">
          {/* Locked Notice if day is locked */}
          {isLocked && (
            <div className="mb-5 p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 flex items-start gap-3">
              <Lock className="w-5 h-5 shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" />
              <div className="text-xs sm:text-sm">
                <p className="font-semibold">Day {day.dayNumber} is currently locked.</p>
                <p className="text-amber-700 dark:text-amber-300/90 mt-0.5">
                  Complete all tasks in <strong>Day {day.dayNumber - 1}</strong> to unlock this day.
                  Tasks are shown below in read-only mode so you can plan ahead.
                </p>
              </div>
            </div>
          )}

          {/* 3 Subject Sessions (80 min each) */}
          <div className="space-y-4 mb-5">
            {day.sessions.map((session, sIdx) => {
              const sMeta = subjectMeta[session.subject];
              const sessionTasks = session.tasks;
              const sessionCompletedCount = sessionTasks.filter((t) => completedTaskIds.has(t.id)).length;
              const sessionAllDone = sessionCompletedCount === sessionTasks.length;

              return (
                <div
                  key={session.id}
                  className={`p-4 sm:p-5 rounded-xl border transition-all ${
                    sessionAllDone
                      ? 'bg-slate-50/60 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800'
                      : 'bg-white dark:bg-slate-800/20 border-slate-200 dark:border-slate-800'
                  }`}
                >
                  {/* Session Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex items-center flex-wrap gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Session {sIdx + 1}
                      </span>
                      <span
                        className={`text-xs font-semibold px-2 py-0.5 rounded-md border ${sMeta.badgeBg}`}
                      >
                        {session.subject}
                      </span>
                      {session.subCategory && (
                        <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                          ({session.subCategory})
                        </span>
                      )}
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                        {session.chapter}
                      </h4>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        <Clock className="w-3 h-3 text-slate-400" />
                        80 mins
                      </span>
                      {session.learningPattern && (
                        <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-900/60">
                          {session.learningPattern}
                        </span>
                      )}
                      <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                        {sessionCompletedCount}/{sessionTasks.length}
                      </span>
                    </div>
                  </div>

                  {/* Tasks Checkbox List */}
                  <div className="space-y-2">
                    {sessionTasks.map((task) => {
                      const isChecked = completedTaskIds.has(task.id);
                      return (
                        <label
                          key={task.id}
                          className={`flex items-start gap-3 p-2.5 rounded-xl transition-all select-none ${
                            isLocked
                              ? 'cursor-not-allowed opacity-70'
                              : 'cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/60'
                          } ${isChecked ? 'bg-emerald-50/40 dark:bg-emerald-950/20' : ''}`}
                        >
                          <input
                            type="checkbox"
                            disabled={isLocked}
                            checked={isChecked}
                            onChange={() => onToggleTask(task.id, day.dayNumber)}
                            className="mt-0.5 w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 border-slate-300 dark:border-slate-600 dark:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                          />
                          <span
                            className={`text-xs sm:text-sm leading-relaxed ${
                              isChecked
                                ? 'line-through text-slate-400 dark:text-slate-500 font-normal'
                                : 'text-slate-700 dark:text-slate-200 font-medium'
                            }`}
                          >
                            {task.text}
                          </span>
                        </label>
                      );
                    })}
                  </div>

                  {/* Quick Action: Log Mistake for this session */}
                  <div className="mt-3 pt-2.5 flex justify-end">
                    <button
                      onClick={() => onOpenAddError(day.dayNumber, session.subject, session.chapter)}
                      className="text-xs text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300 font-medium flex items-center gap-1 px-2.5 py-1 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
                      title="Got a question wrong? Record it in your Error Log for revision."
                    >
                      <AlertTriangle className="w-3.5 h-3.5" />
                      <span>Log mistake for {session.subject}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Notes for this Day */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5 uppercase tracking-wider">
                <FileText className="w-3.5 h-3.5 text-indigo-500" />
                Day {day.dayNumber} Study Notes & Reflections
              </span>
              <span className="text-[11px] text-slate-400">Auto-saved to localStorage</span>
            </div>
            <textarea
              rows={2}
              value={localNote}
              onChange={(e) => setLocalNote(e.target.value)}
              onBlur={handleBlurNote}
              placeholder={`Write down takeaways, formulas memorised, or doubts for Day ${day.dayNumber}...`}
              className="w-full text-xs sm:text-sm p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
      )}
    </div>
  );
};
