import React, { useState } from 'react';
import { X, AlertTriangle } from 'lucide-react';
import { SubjectType, ErrorLogEntry } from '../types';

interface AddErrorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (entry: Omit<ErrorLogEntry, 'id' | 'createdAt'>) => void;
  initialDay?: number;
  initialSubject?: SubjectType;
  initialChapter?: string;
}

export const AddErrorModal: React.FC<AddErrorModalProps> = ({
  isOpen,
  onClose,
  onAdd,
  initialDay = 1,
  initialSubject = 'Maths',
  initialChapter = ''
}) => {
  const [dayNumber, setDayNumber] = useState<number>(initialDay);
  const [subject, setSubject] = useState<SubjectType>(initialSubject);
  const [chapter, setChapter] = useState<string>(initialChapter);
  const [question, setQuestion] = useState<string>('');
  const [mistakeReason, setMistakeReason] = useState<ErrorLogEntry['mistakeReason']>('calculation');
  const [notes, setNotes] = useState<string>('');

  React.useEffect(() => {
    setDayNumber(initialDay);
    setSubject(initialSubject);
    setChapter(initialChapter);
  }, [initialDay, initialSubject, initialChapter, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    onAdd({
      dayNumber,
      subject,
      chapter: chapter.trim() || 'General Practice',
      question: question.trim(),
      mistakeReason,
      notes: notes.trim(),
      resolved: false
    });

    setQuestion('');
    setNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in">
      <div className="w-full max-w-lg rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden">
        <div className="p-5 flex items-center justify-between border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-rose-500/10 text-rose-600 dark:text-rose-400">
              <AlertTriangle className="w-5 h-5" />
            </span>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Log Question Mistake / Error
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Day Number (1–43)
              </label>
              <input
                type="number"
                min={1}
                max={43}
                value={dayNumber}
                onChange={(e) => setDayNumber(Number(e.target.value))}
                className="w-full text-xs sm:text-sm p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Subject
              </label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value as SubjectType)}
                className="w-full text-xs sm:text-sm p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
              >
                <option value="Maths">Maths</option>
                <option value="Science">Science</option>
                <option value="Social Science">Social Science</option>
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                <option value="IT">IT</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Chapter / Topic Name
            </label>
            <input
              type="text"
              value={chapter}
              onChange={(e) => setChapter(e.target.value)}
              placeholder="e.g. Some Applications of Trigonometry, Electricity..."
              className="w-full text-xs sm:text-sm p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Question or Problem Description *
            </label>
            <input
              type="text"
              required
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="e.g. NCERT Ex 9.1 Q14 - Forgot to subtract observer height from tower"
              className="w-full text-xs sm:text-sm p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Category of Mistake
            </label>
            <select
              value={mistakeReason}
              onChange={(e) => setMistakeReason(e.target.value as ErrorLogEntry['mistakeReason'])}
              className="w-full text-xs sm:text-sm p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
            >
              <option value="calculation">Calculation / Arithmetic Error</option>
              <option value="formula">Formula Forgotten / Misapplied</option>
              <option value="concept">Conceptual Misunderstanding</option>
              <option value="misreading">Question Misread / Skipped Requirement</option>
              <option value="presentation">Presentation / Units / Diagram Missing</option>
              <option value="other">Other / Speed Pressure</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Takeaway / How to Solve Correctly Next Time
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Always draw the diagram first and verify units before substituting..."
              className="w-full text-xs sm:text-sm p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="pt-2 flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white transition-colors shadow-sm"
            >
              Save to Error Log
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
