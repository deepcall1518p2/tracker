import { useState, useEffect, useCallback, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { fullPlanData, allTaskIds, taskSubjectMap } from '../data/planData';
import { ErrorLogEntry, SubjectType, TrackerBackupData } from '../types';

const STORAGE_KEYS = {
  COMPLETED_TASKS: 'cbse_tracker_completed_tasks_v1',
  SYLLABUS_CHECKED: 'cbse_tracker_syllabus_checked_v1',
  NOTES: 'cbse_tracker_notes_v1',
  ERROR_LOGS: 'cbse_tracker_error_logs_v1',
  THEME: 'cbse_tracker_theme_v1',
  FREE_MODE: 'cbse_tracker_free_mode_v1'
};

// Safe JSON parser helper
function getStoredJSON<T>(key: string, fallback: T): T {
  try {
    const item = localStorage.getItem(key);
    if (!item) return fallback;
    return JSON.parse(item) as T;
  } catch (err) {
    console.warn(`Error reading localStorage key "${key}":`, err);
    return fallback;
  }
}

export function useTrackerStore() {
  // 1. Core State
  const [completedTaskIds, setCompletedTaskIds] = useState<Set<string>>(() => {
    const stored = getStoredJSON<string[]>(STORAGE_KEYS.COMPLETED_TASKS, []);
    return new Set(Array.isArray(stored) ? stored : []);
  });

  const [syllabusCheckedIds, setSyllabusCheckedIds] = useState<Set<string>>(() => {
    const stored = getStoredJSON<string[]>(STORAGE_KEYS.SYLLABUS_CHECKED, []);
    return new Set(Array.isArray(stored) ? stored : []);
  });

  const [notes, setNotes] = useState<Record<number, string>>(() => {
    return getStoredJSON<Record<number, string>>(STORAGE_KEYS.NOTES, {});
  });

  const [errorLogs, setErrorLogs] = useState<ErrorLogEntry[]>(() => {
    return getStoredJSON<ErrorLogEntry[]>(STORAGE_KEYS.ERROR_LOGS, []);
  });

  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.THEME);
    if (stored !== null) return stored === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Free mode (override sequential locking for testing / previewing)
  const [freeMode, setFreeMode] = useState<boolean>(() => {
    return localStorage.getItem(STORAGE_KEYS.FREE_MODE) === 'true';
  });

  // Modal / Alert for Day Unlocked Celebration
  const [celebrationDay, setCelebrationDay] = useState<number | null>(null);

  // 2. Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.COMPLETED_TASKS, JSON.stringify(Array.from(completedTaskIds)));
    } catch (e) {
      console.error('Failed to save completed tasks', e);
    }
  }, [completedTaskIds]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.SYLLABUS_CHECKED, JSON.stringify(Array.from(syllabusCheckedIds)));
    } catch (e) {
      console.error('Failed to save syllabus items', e);
    }
  }, [syllabusCheckedIds]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.NOTES, JSON.stringify(notes));
    } catch (e) {
      console.error('Failed to save notes', e);
    }
  }, [notes]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.ERROR_LOGS, JSON.stringify(errorLogs));
    } catch (e) {
      console.error('Failed to save error logs', e);
    }
  }, [errorLogs]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.THEME, isDarkMode ? 'dark' : 'light');
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.FREE_MODE, freeMode ? 'true' : 'false');
  }, [freeMode]);

  // 3. Sequential Unlocking Computation
  // Day 1 is always unlocked.
  // Day N is unlocked iff Day N-1 is 100% completed.
  const dayStatsMap = useMemo(() => {
    const stats: Record<
      number,
      {
        totalTasks: number;
        completedTasks: number;
        isCompleted: boolean;
        isUnlocked: boolean;
        status: 'completed' | 'in_progress' | 'not_started' | 'locked';
        progressPct: number;
      }
    > = {};

    let previousDayCompleted = true; // Day 1's prerequisite is satisfied

    for (let dayNum = 1; dayNum <= fullPlanData.length; dayNum++) {
      const day = fullPlanData[dayNum - 1];
      const dayTasks = day.sessions.flatMap((s) => s.tasks);
      const total = dayTasks.length;
      const completed = dayTasks.filter((t) => completedTaskIds.has(t.id)).length;
      const isCompleted = total > 0 && completed === total;

      const isUnlocked = freeMode || previousDayCompleted;

      let status: 'completed' | 'in_progress' | 'not_started' | 'locked' = 'locked';
      if (!isUnlocked) {
        status = 'locked';
      } else if (isCompleted) {
        status = 'completed';
      } else if (completed > 0) {
        status = 'in_progress';
      } else {
        status = 'not_started';
      }

      stats[dayNum] = {
        totalTasks: total,
        completedTasks: completed,
        isCompleted,
        isUnlocked,
        status,
        progressPct: total > 0 ? Math.round((completed / total) * 100) : 0
      };

      // For next day: if this day is not completed, subsequent days will be locked
      previousDayCompleted = isCompleted;
    }

    return stats;
  }, [completedTaskIds, freeMode]);

  // Active / current day: first unlocked day that is not yet completed, or day 43
  const activeDayNumber = useMemo(() => {
    for (let d = 1; d <= 43; d++) {
      const st = dayStatsMap[d];
      if (st && st.isUnlocked && !st.isCompleted) {
        return d;
      }
    }
    return 43;
  }, [dayStatsMap]);

  // Overall Statistics
  const overallStats = useMemo(() => {
    const totalTasks = allTaskIds.length;
    const completedTasks = completedTaskIds.size;
    const progressPercentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

    let completedDays = 0;
    for (let d = 1; d <= 43; d++) {
      if (dayStatsMap[d]?.isCompleted) {
        completedDays++;
      }
    }

    // Subject breakdown
    const subjectBreakdown: Record<SubjectType, { total: number; completed: number; percentage: number }> = {
      Maths: { total: 0, completed: 0, percentage: 0 },
      Science: { total: 0, completed: 0, percentage: 0 },
      'Social Science': { total: 0, completed: 0, percentage: 0 },
      English: { total: 0, completed: 0, percentage: 0 },
      Hindi: { total: 0, completed: 0, percentage: 0 },
      IT: { total: 0, completed: 0, percentage: 0 }
    };

    allTaskIds.forEach((taskId) => {
      const subject = taskSubjectMap[taskId];
      if (subject && subjectBreakdown[subject]) {
        subjectBreakdown[subject].total++;
        if (completedTaskIds.has(taskId)) {
          subjectBreakdown[subject].completed++;
        }
      }
    });

    (Object.keys(subjectBreakdown) as SubjectType[]).forEach((sub) => {
      const item = subjectBreakdown[sub];
      item.percentage = item.total > 0 ? Math.round((item.completed / item.total) * 100) : 0;
    });

    return {
      totalTasks,
      completedTasks,
      pendingTasks: totalTasks - completedTasks,
      progressPercentage,
      completedDays,
      totalDays: 43,
      subjectBreakdown
    };
  }, [completedTaskIds, dayStatsMap]);

  // 4. Action Handlers
  const toggleTask = useCallback(
    (taskId: string, dayNum: number) => {
      // Check if day is unlocked
      const dayStat = dayStatsMap[dayNum];
      if (!dayStat || (!dayStat.isUnlocked && !freeMode)) {
        return; // Locked day cannot be toggled
      }

      setCompletedTaskIds((prev) => {
        const next = new Set(prev);
        const wasChecked = next.has(taskId);

        if (wasChecked) {
          next.delete(taskId);
        } else {
          next.add(taskId);
        }

        // Check if this action completes this day
        const day = fullPlanData[dayNum - 1];
        if (day) {
          const dayTaskIds = day.sessions.flatMap((s) => s.tasks.map((t) => t.id));
          const allDayTasksNowChecked = dayTaskIds.every((id) => (id === taskId ? !wasChecked : next.has(id)));

          if (allDayTasksNowChecked && !wasChecked) {
            // Day just completed! Trigger celebration & notification
            setCelebrationDay(dayNum);
            try {
              confetti({
                particleCount: 80,
                spread: 70,
                origin: { y: 0.6 }
              });
            } catch {
              // ignore
            }
          }
        }

        return next;
      });
    },
    [dayStatsMap, freeMode]
  );

  const toggleSyllabusItem = useCallback((id: string) => {
    setSyllabusCheckedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  const setDayNote = useCallback((dayNumber: number, note: string) => {
    setNotes((prev) => ({
      ...prev,
      [dayNumber]: note
    }));
  }, []);

  const addErrorLog = useCallback((entry: Omit<ErrorLogEntry, 'id' | 'createdAt'>) => {
    const newEntry: ErrorLogEntry = {
      ...entry,
      id: `err-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      createdAt: new Date().toISOString()
    };
    setErrorLogs((prev) => [newEntry, ...prev]);
  }, []);

  const updateErrorLog = useCallback((id: string, updates: Partial<ErrorLogEntry>) => {
    setErrorLogs((prev) => prev.map((item) => (item.id === id ? { ...item, ...updates } : item)));
  }, []);

  const deleteErrorLog = useCallback((id: string) => {
    setErrorLogs((prev) => prev.filter((item) => item.id !== id));
  }, []);

  // 5. JSON Export & Import
  const exportProgressJSON = useCallback((): string => {
    const backup: TrackerBackupData = {
      version: 1,
      exportedAt: new Date().toISOString(),
      studentName: 'Avinash',
      completedTaskIds: Array.from(completedTaskIds),
      syllabusCheckedIds: Array.from(syllabusCheckedIds),
      notes,
      errorLogs
    };
    return JSON.stringify(backup, null, 2);
  }, [completedTaskIds, syllabusCheckedIds, notes, errorLogs]);

  const importProgressJSON = useCallback((jsonStr: string): { success: boolean; message: string } => {
    try {
      const data = JSON.parse(jsonStr) as Partial<TrackerBackupData>;
      if (!data || typeof data !== 'object') {
        return { success: false, message: 'Invalid JSON format.' };
      }

      if (Array.isArray(data.completedTaskIds)) {
        setCompletedTaskIds(new Set(data.completedTaskIds));
      }
      if (Array.isArray(data.syllabusCheckedIds)) {
        setSyllabusCheckedIds(new Set(data.syllabusCheckedIds));
      }
      if (data.notes && typeof data.notes === 'object') {
        setNotes(data.notes);
      }
      if (Array.isArray(data.errorLogs)) {
        setErrorLogs(data.errorLogs);
      }

      return {
        success: true,
        message: `Progress restored successfully! Loaded ${data.completedTaskIds?.length || 0} completed tasks and ${data.errorLogs?.length || 0} error log entries.`
      };
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      return { success: false, message: `Failed to import JSON: ${msg}` };
    }
  }, []);

  const resetAllProgress = useCallback(() => {
    setCompletedTaskIds(new Set());
    setSyllabusCheckedIds(new Set());
    setNotes({});
    setErrorLogs([]);
    localStorage.removeItem(STORAGE_KEYS.COMPLETED_TASKS);
    localStorage.removeItem(STORAGE_KEYS.SYLLABUS_CHECKED);
    localStorage.removeItem(STORAGE_KEYS.NOTES);
    localStorage.removeItem(STORAGE_KEYS.ERROR_LOGS);
  }, []);

  return {
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
  };
}
