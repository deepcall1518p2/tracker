/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { useTrackerStore } from './hooks/useTrackerStore';
import { fullPlanData } from './data/planData';
import { Header } from './components/Header';
import { ProgressDashboard } from './components/ProgressDashboard';
import { FilterBar, MainViewTab } from './components/FilterBar';
import { DayCard } from './components/DayCard';
import { SyllabusView } from './components/SyllabusView';
import { ErrorLogView } from './components/ErrorLogView';
import { AddErrorModal } from './components/AddErrorModal';
import { ExportImportModal } from './components/ExportImportModal';
import { GitHubPagesModal } from './components/GitHubPagesModal';
import { CelebrationModal } from './components/CelebrationModal';
import { SubjectType } from './types';
import { Sparkles, Calendar, BookOpen, AlertCircle } from 'lucide-react';

export default function App() {
  const {
    completedTaskIds,
    syllabusCheckedIds,
    notes,
    errorLogs,
    isDarkMode,
    setIsDarkMode,
    freeMode,
    setFreeMode,
    celebrationDay,
    setCelebrationDay,
    dayStatsMap,
    activeDayNumber,
    overallStats,
    toggleTask,
    toggleSyllabusItem,
    setDayNote,
    addErrorLog,
    updateErrorLog,
    deleteErrorLog,
    exportProgressJSON,
    importProgressJSON,
    resetAllProgress
  } = useTrackerStore();

  // Navigation & Filter state
  const [currentTab, setCurrentTab] = useState<MainViewTab>('timeline');
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'in_progress' | 'completed' | 'locked'>('all');
  const [selectedSubject, setSelectedSubject] = useState<SubjectType | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Modals state
  const [isExportImportOpen, setIsExportImportOpen] = useState<boolean>(false);
  const [isGitHubPagesOpen, setIsGitHubPagesOpen] = useState<boolean>(false);
  const [isAddErrorOpen, setIsAddErrorOpen] = useState<boolean>(false);
  const [addErrorContext, setAddErrorContext] = useState<{
    dayNumber: number;
    subject: SubjectType;
    chapter: string;
  }>({ dayNumber: 1, subject: 'Maths', chapter: '' });

  // Scroll to specific day card
  const handleJumpToDay = (dayNum: number) => {
    setCurrentTab('timeline');
    setStatusFilter('all');
    setTimeout(() => {
      const element = document.getElementById(`day-card-${dayNum}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  const handleOpenAddErrorForSession = (dayNum: number, subject: SubjectType, chapter: string) => {
    setAddErrorContext({ dayNumber: dayNum, subject, chapter });
    setIsAddErrorOpen(true);
  };

  // Active day details for dashboard spotlight
  const activeDayPlan = fullPlanData[activeDayNumber - 1] || fullPlanData[0];
  const activeDayStats = dayStatsMap[activeDayNumber] || {
    totalTasks: 0,
    completedTasks: 0,
    isCompleted: false,
    isUnlocked: true,
    status: 'not_started',
    progressPct: 0
  };

  // Filtered days list for timeline view
  const filteredDays = useMemo(() => {
    return fullPlanData.filter((day) => {
      const stats = dayStatsMap[day.dayNumber];

      // 1. Status Filter
      if (statusFilter === 'active' && day.dayNumber !== activeDayNumber) {
        return false;
      }
      if (statusFilter === 'in_progress' && stats.status !== 'in_progress') {
        return false;
      }
      if (statusFilter === 'completed' && stats.status !== 'completed') {
        return false;
      }
      if (statusFilter === 'locked' && stats.status !== 'locked') {
        return false;
      }

      // 2. Subject Filter
      if (selectedSubject !== 'All') {
        const hasSubject = day.sessions.some((s) => s.subject === selectedSubject);
        if (!hasSubject) return false;
      }

      // 3. Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const inDayStr = day.dateStr.toLowerCase().includes(q) || `day ${day.dayNumber}`.includes(q);
        const inSessions = day.sessions.some(
          (s) =>
            s.subject.toLowerCase().includes(q) ||
            s.chapter.toLowerCase().includes(q) ||
            s.tasks.some((t) => t.text.toLowerCase().includes(q))
        );
        const inNotes = notes[day.dayNumber]?.toLowerCase().includes(q);

        if (!inDayStr && !inSessions && !inNotes) {
          return false;
        }
      }

      return true;
    });
  }, [dayStatsMap, statusFilter, activeDayNumber, selectedSubject, searchQuery, notes]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col antialiased transition-colors">
      {/* Sticky Header */}
      <Header
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode(!isDarkMode)}
        freeMode={freeMode}
        onToggleFreeMode={() => setFreeMode(!freeMode)}
        onOpenExportImport={() => setIsExportImportOpen(true)}
        onOpenGitHubPages={() => setIsGitHubPagesOpen(true)}
        onResetProgress={() => {
          if (window.confirm('Reset all tracker progress? This clears all completed tasks, notes, and mistakes.')) {
            resetAllProgress();
          }
        }}
        completedTasks={overallStats.completedTasks}
        totalTasks={overallStats.totalTasks}
        completedDays={overallStats.completedDays}
      />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6 flex-1 w-full">
        {/* Progress & Analytics Dashboard */}
        <ProgressDashboard
          overallProgress={overallStats.progressPercentage}
          completedTasks={overallStats.completedTasks}
          totalTasks={overallStats.totalTasks}
          pendingTasks={overallStats.pendingTasks}
          completedDays={overallStats.completedDays}
          totalDays={overallStats.totalDays}
          activeDayNumber={activeDayNumber}
          activeDayDateStr={activeDayPlan.dateStr}
          activeDaySubjects={activeDayPlan.sessions.map((s) => `${s.subject} (${s.chapter})`)}
          activeDayProgress={activeDayStats.progressPct}
          subjectBreakdown={overallStats.subjectBreakdown}
          onJumpToDay={handleJumpToDay}
          selectedSubjectFilter={selectedSubject === 'All' ? null : selectedSubject}
          onSelectSubjectFilter={(sub) => setSelectedSubject(sub || 'All')}
        />

        {/* View Switcher & Filters */}
        <FilterBar
          currentTab={currentTab}
          onChangeTab={setCurrentTab}
          statusFilter={statusFilter}
          onChangeStatusFilter={setStatusFilter}
          selectedSubject={selectedSubject}
          onChangeSubject={setSelectedSubject}
          searchQuery={searchQuery}
          onChangeSearch={setSearchQuery}
          errorLogCount={errorLogs.length}
          activeDayNumber={activeDayNumber}
        />

        {/* View 1: 43-Day Timeline */}
        {currentTab === 'timeline' && (
          <div className="space-y-4">
            {filteredDays.length === 0 ? (
              <div className="p-12 text-center rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <Calendar className="w-10 h-10 text-slate-400 mx-auto mb-2 opacity-60" />
                <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">
                  No days found matching your current filter.
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Try clearing your search query or switching to "All 43 Days".
                </p>
                <button
                  onClick={() => {
                    setStatusFilter('all');
                    setSelectedSubject('All');
                    setSearchQuery('');
                  }}
                  className="mt-3 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              filteredDays.map((day) => {
                const stats = dayStatsMap[day.dayNumber];
                const isCurrentActive = day.dayNumber === activeDayNumber;

                return (
                  <DayCard
                    key={day.dayNumber}
                    day={day}
                    dayStats={stats}
                    completedTaskIds={completedTaskIds}
                    onToggleTask={toggleTask}
                    dayNote={notes[day.dayNumber] || ''}
                    onSaveDayNote={setDayNote}
                    onOpenAddError={handleOpenAddErrorForSession}
                    isInitialExpanded={isCurrentActive || stats.status === 'in_progress'}
                  />
                );
              })
            )}
          </div>
        )}

        {/* View 2: Syllabus Checklist */}
        {currentTab === 'syllabus' && (
          <SyllabusView
            syllabusCheckedIds={syllabusCheckedIds}
            onToggleSyllabusItem={toggleSyllabusItem}
            onJumpToDay={handleJumpToDay}
          />
        )}

        {/* View 3: Mistake & Error Log */}
        {currentTab === 'errors' && (
          <ErrorLogView
            errorLogs={errorLogs}
            onOpenAddModal={() => {
              setAddErrorContext({
                dayNumber: activeDayNumber,
                subject: 'Maths',
                chapter: ''
              });
              setIsAddErrorOpen(true);
            }}
            onUpdateErrorLog={updateErrorLog}
            onDeleteErrorLog={deleteErrorLog}
            onJumpToDay={handleJumpToDay}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="mt-auto py-6 border-t border-slate-200 dark:border-slate-800 text-center text-xs text-slate-500 dark:text-slate-400">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            <strong>My 43-Day Board Preparation Tracker</strong> — Student: <strong>Avinash</strong> (4 Oct – 15 Nov 2026)
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsGitHubPagesOpen(true)}
              className="hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors"
            >
              GitHub Pages Instructions
            </button>
            <span>•</span>
            <button
              onClick={() => setIsExportImportOpen(true)}
              className="hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors"
            >
              Backup / Restore JSON
            </button>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <ExportImportModal
        isOpen={isExportImportOpen}
        onClose={() => setIsExportImportOpen(false)}
        onExport={exportProgressJSON}
        onImport={importProgressJSON}
        onReset={resetAllProgress}
      />

      <GitHubPagesModal
        isOpen={isGitHubPagesOpen}
        onClose={() => setIsGitHubPagesOpen(false)}
      />

      <AddErrorModal
        isOpen={isAddErrorOpen}
        onClose={() => setIsAddErrorOpen(false)}
        onAdd={addErrorLog}
        initialDay={addErrorContext.dayNumber}
        initialSubject={addErrorContext.subject}
        initialChapter={addErrorContext.chapter}
      />

      <CelebrationModal
        dayNumber={celebrationDay}
        onClose={() => setCelebrationDay(null)}
        onGoToNextDay={() => {
          if (celebrationDay && celebrationDay < 43) {
            handleJumpToDay(celebrationDay + 1);
          }
        }}
      />
    </div>
  );
}
