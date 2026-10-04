import { DayPlan, SubjectType } from '../types';
import { days1to10 } from './days1to10';
import { days11to20 } from './days11to20';
import { days21to30 } from './days21to30';
import { days31to43 } from './days31to43';

export const fullPlanData: DayPlan[] = [
  ...days1to10,
  ...days11to20,
  ...days21to30,
  ...days31to43
];

// Helper: total tasks in the entire 43 days
export const allTaskIds: string[] = fullPlanData.flatMap((day) =>
  day.sessions.flatMap((session) => session.tasks.map((task) => task.id))
);

// Map of task ID to subject
export const taskSubjectMap: Record<string, SubjectType> = {};
fullPlanData.forEach((day) => {
  day.sessions.forEach((session) => {
    session.tasks.forEach((task) => {
      taskSubjectMap[task.id] = session.subject;
    });
  });
});

// Subject colors for visual hierarchy
export const subjectMeta: Record<
  SubjectType,
  {
    name: SubjectType;
    color: string;
    bgLight: string;
    bgDark: string;
    borderLight: string;
    borderDark: string;
    textLight: string;
    textDark: string;
    badgeBg: string;
  }
> = {
  Maths: {
    name: 'Maths',
    color: '#3b82f6', // blue
    bgLight: 'bg-blue-50',
    bgDark: 'dark:bg-blue-950/30',
    borderLight: 'border-blue-200',
    borderDark: 'dark:border-blue-900/60',
    textLight: 'text-blue-700',
    textDark: 'dark:text-blue-300',
    badgeBg: 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800'
  },
  Science: {
    name: 'Science',
    color: '#10b981', // emerald
    bgLight: 'bg-emerald-50',
    bgDark: 'dark:bg-emerald-950/30',
    borderLight: 'border-emerald-200',
    borderDark: 'dark:border-emerald-900/60',
    textLight: 'text-emerald-700',
    textDark: 'dark:text-emerald-300',
    badgeBg: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800'
  },
  'Social Science': {
    name: 'Social Science',
    color: '#f59e0b', // amber
    bgLight: 'bg-amber-50',
    bgDark: 'dark:bg-amber-950/30',
    borderLight: 'border-amber-200',
    borderDark: 'dark:border-amber-900/60',
    textLight: 'text-amber-700',
    textDark: 'dark:text-amber-300',
    badgeBg: 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800'
  },
  English: {
    name: 'English',
    color: '#8b5cf6', // purple
    bgLight: 'bg-purple-50',
    bgDark: 'dark:bg-purple-950/30',
    borderLight: 'border-purple-200',
    borderDark: 'dark:border-purple-900/60',
    textLight: 'text-purple-700',
    textDark: 'dark:text-purple-300',
    badgeBg: 'bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800'
  },
  Hindi: {
    name: 'Hindi',
    color: '#ec4899', // rose/pink
    bgLight: 'bg-pink-50',
    bgDark: 'dark:bg-pink-950/30',
    borderLight: 'border-pink-200',
    borderDark: 'dark:border-pink-900/60',
    textLight: 'text-pink-700',
    textDark: 'dark:text-pink-300',
    badgeBg: 'bg-pink-500/10 text-pink-700 dark:text-pink-300 border-pink-200 dark:border-pink-800'
  },
  IT: {
    name: 'IT',
    color: '#06b6d4', // cyan
    bgLight: 'bg-cyan-50',
    bgDark: 'dark:bg-cyan-950/30',
    borderLight: 'border-cyan-200',
    borderDark: 'dark:border-cyan-900/60',
    textLight: 'text-cyan-700',
    textDark: 'dark:text-cyan-300',
    badgeBg: 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800'
  }
};
