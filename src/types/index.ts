export type SubjectType =
  | 'Maths'
  | 'Science'
  | 'Social Science'
  | 'English'
  | 'Hindi'
  | 'IT';

export type DayStatus = 'not_started' | 'in_progress' | 'completed' | 'locked';

export interface TaskItem {
  id: string; // stable identifier e.g. 'd1-s1-t1'
  text: string;
}

export interface SubjectSession {
  id: string; // e.g. 'd1-s1'
  subject: SubjectType;
  subCategory?: string; // e.g. 'Biology', 'Physics', 'History', 'Employability Skills'
  chapter: string;
  durationMinutes: number; // 80 minutes
  learningPattern?: 'Theory-heavy' | 'Maths / numerical' | 'Literature' | 'IT practical' | 'Revision / Test';
  tasks: TaskItem[];
}

export interface DayPlan {
  dayNumber: number; // 1 to 43
  dateStr: string; // e.g. 'Sunday, 4 October 2026'
  dateISO: string; // e.g. '2026-10-04'
  sessions: [SubjectSession, SubjectSession, SubjectSession];
}

export interface ErrorLogEntry {
  id: string;
  createdAt: string;
  dayNumber: number;
  subject: SubjectType;
  chapter: string;
  question: string;
  mistakeReason: 'concept' | 'formula' | 'calculation' | 'presentation' | 'misreading' | 'other';
  notes: string;
  resolved: boolean;
}

export interface SyllabusItem {
  id: string;
  subject: SubjectType;
  category: string;
  title: string;
  relatedDayNumbers: number[];
}

export interface TrackerBackupData {
  version: number;
  exportedAt: string;
  studentName: string;
  completedTaskIds: string[];
  syllabusCheckedIds: string[];
  notes: Record<number, string>; // dayNumber -> note
  errorLogs: ErrorLogEntry[];
}
