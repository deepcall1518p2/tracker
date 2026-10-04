import React, { useState } from 'react';
import { CheckCircle2, BookOpen, Layers, ArrowUpRight, Search } from 'lucide-react';
import { syllabusData } from '../data/syllabusData';
import { SubjectType } from '../types';
import { subjectMeta } from '../data/planData';

interface SyllabusViewProps {
  syllabusCheckedIds: Set<string>;
  onToggleSyllabusItem: (id: string) => void;
  onJumpToDay: (dayNumber: number) => void;
}

export const SyllabusView: React.FC<SyllabusViewProps> = ({
  syllabusCheckedIds,
  onToggleSyllabusItem,
  onJumpToDay
}) => {
  const [selectedSubject, setSelectedSubject] = useState<SubjectType | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const subjects: SubjectType[] = ['Maths', 'Science', 'Social Science', 'English', 'Hindi', 'IT'];

  // Filtered items
  const filteredItems = syllabusData.filter((item) => {
    const matchesSubject = selectedSubject === 'All' || item.subject === selectedSubject;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSubject && matchesSearch;
  });

  const totalSyllabusCount = syllabusData.length;
  const checkedSyllabusCount = syllabusData.filter((i) => syllabusCheckedIds.has(i.id)).length;
  const percentage = Math.round((checkedSyllabusCount / totalSyllabusCount) * 100);

  // Group filtered items by Subject and Category
  const groupedBySubject = subjects.reduce((acc, sub) => {
    const subItems = filteredItems.filter((i) => i.subject === sub);
    if (subItems.length > 0) {
      acc[sub] = subItems;
    }
    return acc;
  }, {} as Record<SubjectType, typeof syllabusData>);

  return (
    <div className="space-y-5">
      {/* Top Header Card */}
      <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Full Syllabus Master Checklist
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Track your chapter-level mastery across all 6 CBSE subjects. Click any day badge to jump directly to its practice plan.
          </p>
        </div>

        {/* Progress pill */}
        <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 shrink-0">
          <div className="text-right">
            <div className="text-xs text-slate-400 font-medium">Chapters Mastered</div>
            <div className="text-lg font-bold text-slate-900 dark:text-white">
              {checkedSyllabusCount} <span className="text-xs font-normal text-slate-400">/ {totalSyllabusCount}</span>
            </div>
          </div>
          <div className="w-12 h-12 rounded-full border-4 border-indigo-500/20 flex items-center justify-center font-bold text-xs text-indigo-600 dark:text-indigo-400">
            {percentage}%
          </div>
        </div>
      </div>

      {/* Filter Tabs & Search */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        {/* Subject pills */}
        <div className="flex items-center overflow-x-auto pb-1 gap-1.5 scrollbar-none">
          <button
            onClick={() => setSelectedSubject('All')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors border ${
              selectedSubject === 'All'
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-50'
            }`}
          >
            All Subjects ({totalSyllabusCount})
          </button>
          {subjects.map((sub) => {
            const count = syllabusData.filter((i) => i.subject === sub).length;
            const checkedCount = syllabusData.filter((i) => i.subject === sub && syllabusCheckedIds.has(i.id)).length;
            return (
              <button
                key={sub}
                onClick={() => setSelectedSubject(sub)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors border ${
                  selectedSubject === sub
                    ? 'bg-indigo-600 text-white border-indigo-600'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-50'
                }`}
              >
                {sub} ({checkedCount}/{count})
              </button>
            );
          })}
        </div>

        {/* Search */}
        <div className="relative min-w-[200px]">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search chapters or topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-xs pl-9 pr-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* Syllabus Groupings */}
      <div className="space-y-6">
        {(Object.keys(groupedBySubject) as SubjectType[]).map((sub) => {
          const items = groupedBySubject[sub];
          const meta = subjectMeta[sub];

          return (
            <div
              key={sub}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm"
            >
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: meta.color }}
                  />
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {sub}
                  </h3>
                </div>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  {items.filter((i) => syllabusCheckedIds.has(i.id)).length} / {items.length} Completed
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {items.map((item) => {
                  const isChecked = syllabusCheckedIds.has(item.id);
                  return (
                    <div
                      key={item.id}
                      className={`p-3.5 rounded-xl border transition-all flex flex-col justify-between gap-2 ${
                        isChecked
                          ? 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900/60'
                          : 'bg-slate-50/60 dark:bg-slate-800/30 border-slate-200 dark:border-slate-800 hover:border-slate-300'
                      }`}
                    >
                      <label className="flex items-start gap-3 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => onToggleSyllabusItem(item.id)}
                          className="mt-0.5 w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 border-slate-300 dark:border-slate-600 dark:bg-slate-700 cursor-pointer"
                        />
                        <div>
                          <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                            {item.category}
                          </div>
                          <div
                            className={`text-xs sm:text-sm font-semibold mt-0.5 ${
                              isChecked
                                ? 'line-through text-slate-400 dark:text-slate-500'
                                : 'text-slate-800 dark:text-slate-100'
                            }`}
                          >
                            {item.title}
                          </div>
                        </div>
                      </label>

                      {/* Related Days list */}
                      <div className="flex items-center flex-wrap gap-1 pt-1 border-t border-slate-200/60 dark:border-slate-700/40 text-[11px] text-slate-500 dark:text-slate-400">
                        <span>Practised on:</span>
                        {item.relatedDayNumbers.map((d) => (
                          <button
                            key={d}
                            onClick={() => onJumpToDay(d)}
                            className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white text-slate-700 dark:text-slate-300 font-mono font-medium transition-colors"
                            title={`Jump to Day ${d}`}
                          >
                            D{d}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
