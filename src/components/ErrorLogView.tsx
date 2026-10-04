import React, { useState } from 'react';
import { 
  AlertTriangle, 
  CheckCircle2, 
  Plus, 
  Trash2, 
  Tag, 
  Calendar, 
  Search, 
  Filter 
} from 'lucide-react';
import { ErrorLogEntry, SubjectType } from '../types';
import { subjectMeta } from '../data/planData';

interface ErrorLogViewProps {
  errorLogs: ErrorLogEntry[];
  onOpenAddModal: () => void;
  onUpdateErrorLog: (id: string, updates: Partial<ErrorLogEntry>) => void;
  onDeleteErrorLog: (id: string) => void;
  onJumpToDay: (dayNumber: number) => void;
}

export const ErrorLogView: React.FC<ErrorLogViewProps> = ({
  errorLogs,
  onOpenAddModal,
  onUpdateErrorLog,
  onDeleteErrorLog,
  onJumpToDay
}) => {
  const [filterSubject, setFilterSubject] = useState<SubjectType | 'All'>('All');
  const [filterStatus, setFilterStatus] = useState<'All' | 'Pending' | 'Resolved'>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const subjects: SubjectType[] = ['Maths', 'Science', 'Social Science', 'English', 'Hindi', 'IT'];

  const filteredLogs = errorLogs.filter((log) => {
    const matchesSubject = filterSubject === 'All' || log.subject === filterSubject;
    const matchesStatus =
      filterStatus === 'All' ||
      (filterStatus === 'Pending' && !log.resolved) ||
      (filterStatus === 'Resolved' && log.resolved);
    const matchesSearch =
      log.chapter.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.notes.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesSubject && matchesStatus && matchesSearch;
  });

  const totalErrors = errorLogs.length;
  const resolvedCount = errorLogs.filter((e) => e.resolved).length;
  const pendingCount = totalErrors - resolvedCount;

  return (
    <div className="space-y-5">
      {/* Top Banner */}
      <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-rose-500/10 text-rose-600 dark:text-rose-400">
              <AlertTriangle className="w-5 h-5" />
            </span>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Student Mistake & Error Log
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            "Re-solving mistakes is more useful than repeatedly watching the same lecture." Record questions you got wrong, identify root causes, and re-attempt them.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <div className="flex items-center gap-2 text-xs">
            <div className="px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 font-semibold">
              {pendingCount} Pending Re-attempt
            </div>
            <div className="px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 font-semibold">
              {resolvedCount} Resolved
            </div>
          </div>

          <button
            onClick={onOpenAddModal}
            className="py-2 px-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs sm:text-sm flex items-center gap-1.5 transition-colors shadow-sm"
          >
            <Plus className="w-4 h-4" />
            <span>Log New Mistake</span>
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        {/* Subject & Status Filters */}
        <div className="flex items-center flex-wrap gap-2">
          <select
            value={filterSubject}
            onChange={(e) => setFilterSubject(e.target.value as SubjectType | 'All')}
            className="text-xs py-2 px-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-medium focus:ring-2 focus:ring-indigo-500"
          >
            <option value="All">All Subjects ({totalErrors})</option>
            {subjects.map((sub) => (
              <option key={sub} value={sub}>
                {sub} ({errorLogs.filter((l) => l.subject === sub).length})
              </option>
            ))}
          </select>

          <div className="inline-flex rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-0.5 text-xs font-semibold">
            {(['All', 'Pending', 'Resolved'] as const).map((st) => (
              <button
                key={st}
                onClick={() => setFilterStatus(st)}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  filterStatus === st
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {/* Search */}
        <div className="relative min-w-[220px]">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search mistakes, notes, questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-xs pl-9 pr-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* Mistake Entries List */}
      {filteredLogs.length === 0 ? (
        <div className="p-12 text-center rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-3 opacity-60" />
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            No mistakes recorded here!
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto mt-1">
            Whenever you get a question wrong during your 80-minute practice or timed tests, log it so you can review it before exams.
          </p>
          <button
            onClick={onOpenAddModal}
            className="mt-4 py-2 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-xs transition-colors"
          >
            Record Your First Mistake
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {filteredLogs.map((log) => {
            const meta = subjectMeta[log.subject];

            return (
              <div
                key={log.id}
                className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                  log.resolved
                    ? 'bg-slate-50/70 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 opacity-80'
                    : 'bg-white dark:bg-slate-900 border-rose-200 dark:border-rose-950/80 shadow-sm'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="space-y-1.5 flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-md border ${meta.badgeBg}`}>
                        {log.subject}
                      </span>
                      <span className="text-xs font-bold text-slate-900 dark:text-white">
                        {log.chapter}
                      </span>
                      <button
                        onClick={() => onJumpToDay(log.dayNumber)}
                        className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-600"
                        title={`Jump to Day ${log.dayNumber}`}
                      >
                        Day {log.dayNumber}
                      </button>
                      <span className="text-[11px] uppercase font-semibold px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                        {log.mistakeReason} error
                      </span>
                    </div>

                    <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                      {log.question}
                    </h4>

                    {log.notes && (
                      <p className="text-xs text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800">
                        <strong className="text-slate-800 dark:text-slate-200">Takeaway: </strong>
                        {log.notes}
                      </p>
                    )}
                  </div>

                  {/* Actions: Mark resolved / Delete */}
                  <div className="flex items-center gap-2 shrink-0 self-end sm:self-start">
                    <button
                      onClick={() => onUpdateErrorLog(log.id, { resolved: !log.resolved })}
                      className={`text-xs font-semibold px-3 py-1.5 rounded-xl border flex items-center gap-1.5 transition-colors ${
                        log.resolved
                          ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-emerald-50 hover:text-emerald-700'
                      }`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{log.resolved ? 'Resolved' : 'Mark Resolved'}</span>
                    </button>

                    <button
                      onClick={() => onDeleteErrorLog(log.id)}
                      className="p-1.5 rounded-xl text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
                      title="Delete error entry"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
