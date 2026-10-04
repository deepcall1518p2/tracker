import React from 'react';
import { 
  Calendar, 
  Layers, 
  AlertTriangle, 
  Search, 
  Filter, 
  CheckCircle2, 
  Clock, 
  Lock 
} from 'lucide-react';
import { SubjectType } from '../types';

export type MainViewTab = 'timeline' | 'syllabus' | 'errors';

interface FilterBarProps {
  currentTab: MainViewTab;
  onChangeTab: (tab: MainViewTab) => void;
  statusFilter: 'all' | 'active' | 'in_progress' | 'completed' | 'locked';
  onChangeStatusFilter: (status: 'all' | 'active' | 'in_progress' | 'completed' | 'locked') => void;
  selectedSubject: SubjectType | 'All';
  onChangeSubject: (subject: SubjectType | 'All') => void;
  searchQuery: string;
  onChangeSearch: (query: string) => void;
  errorLogCount: number;
  activeDayNumber: number;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  currentTab,
  onChangeTab,
  statusFilter,
  onChangeStatusFilter,
  selectedSubject,
  onChangeSubject,
  searchQuery,
  onChangeSearch,
  errorLogCount,
  activeDayNumber
}) => {
  const subjects: SubjectType[] = ['Maths', 'Science', 'Social Science', 'English', 'Hindi', 'IT'];

  return (
    <div className="space-y-3">
      {/* Primary View Switcher Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-xs font-semibold">
          <button
            onClick={() => onChangeTab('timeline')}
            className={`px-3.5 py-2 rounded-xl flex items-center gap-2 transition-all ${
              currentTab === 'timeline'
                ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>43-Day Timeline</span>
          </button>

          <button
            onClick={() => onChangeTab('syllabus')}
            className={`px-3.5 py-2 rounded-xl flex items-center gap-2 transition-all ${
              currentTab === 'syllabus'
                ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Syllabus Checklist</span>
          </button>

          <button
            onClick={() => onChangeTab('errors')}
            className={`px-3.5 py-2 rounded-xl flex items-center gap-2 transition-all ${
              currentTab === 'errors'
                ? 'bg-white dark:bg-slate-900 text-rose-600 dark:text-rose-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Mistake & Error Log</span>
            {errorLogCount > 0 && (
              <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 font-bold">
                {errorLogCount}
              </span>
            )}
          </button>
        </div>

        {/* Global Search */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search all days, chapters, tasks..."
            value={searchQuery}
            onChange={(e) => onChangeSearch(e.target.value)}
            className="w-full text-xs pl-9 pr-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* Sub-filters (Only shown on Timeline view) */}
      {currentTab === 'timeline' && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
          {/* Status buttons */}
          <div className="flex items-center overflow-x-auto pb-1 gap-1.5 scrollbar-none text-xs font-medium">
            <button
              onClick={() => onChangeStatusFilter('all')}
              className={`px-3 py-1.5 rounded-xl border whitespace-nowrap transition-colors ${
                statusFilter === 'all'
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-semibold'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:bg-slate-50'
              }`}
            >
              All 43 Days
            </button>

            <button
              onClick={() => onChangeStatusFilter('active')}
              className={`px-3 py-1.5 rounded-xl border whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                statusFilter === 'active'
                  ? 'bg-indigo-600 text-white border-indigo-600 font-semibold'
                  : 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-900/60 hover:bg-indigo-50'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Active Day (Day {activeDayNumber})
            </button>

            <button
              onClick={() => onChangeStatusFilter('in_progress')}
              className={`px-3 py-1.5 rounded-xl border whitespace-nowrap transition-colors flex items-center gap-1 ${
                statusFilter === 'in_progress'
                  ? 'bg-sky-600 text-white border-sky-600 font-semibold'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:bg-slate-50'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>In Progress</span>
            </button>

            <button
              onClick={() => onChangeStatusFilter('completed')}
              className={`px-3 py-1.5 rounded-xl border whitespace-nowrap transition-colors flex items-center gap-1 ${
                statusFilter === 'completed'
                  ? 'bg-emerald-600 text-white border-emerald-600 font-semibold'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:bg-slate-50'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Completed</span>
            </button>

            <button
              onClick={() => onChangeStatusFilter('locked')}
              className={`px-3 py-1.5 rounded-xl border whitespace-nowrap transition-colors flex items-center gap-1 ${
                statusFilter === 'locked'
                  ? 'bg-slate-700 text-white border-slate-700 font-semibold'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:bg-slate-50'
              }`}
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Locked Days</span>
            </button>
          </div>

          {/* Subject Dropdown */}
          <div className="flex items-center gap-2 self-start sm:self-center">
            <span className="text-xs text-slate-500 font-medium whitespace-nowrap">Subject:</span>
            <select
              value={selectedSubject}
              onChange={(e) => onChangeSubject(e.target.value as SubjectType | 'All')}
              className="text-xs py-1.5 px-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-medium focus:ring-2 focus:ring-indigo-500"
            >
              <option value="All">All 6 Subjects</option>
              {subjects.map((sub) => (
                <option key={sub} value={sub}>
                  {sub}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  );
};
