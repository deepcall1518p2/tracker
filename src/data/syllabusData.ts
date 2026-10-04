import { SyllabusItem } from '../types';

export const syllabusData: SyllabusItem[] = [
  // Mathematics — Standard
  { id: 'syl-math-1', subject: 'Maths', category: 'Standard', title: 'Some Applications of Trigonometry', relatedDayNumbers: [1, 16, 22, 28, 30, 41, 43] },
  { id: 'syl-math-2', subject: 'Maths', category: 'Standard', title: 'Arithmetic Progressions', relatedDayNumbers: [2, 4, 16, 28, 30, 41, 43] },
  { id: 'syl-math-3', subject: 'Maths', category: 'Standard', title: 'Circles', relatedDayNumbers: [5, 6, 18, 24, 28, 30, 41, 43] },
  { id: 'syl-math-4', subject: 'Maths', category: 'Standard', title: 'Areas Related to Circles', relatedDayNumbers: [8, 18, 24, 28, 32, 41, 43] },
  { id: 'syl-math-5', subject: 'Maths', category: 'Standard', title: 'Surface Areas and Volumes', relatedDayNumbers: [10, 12, 20, 24, 28, 32, 41, 43] },
  { id: 'syl-math-6', subject: 'Maths', category: 'Standard', title: 'Statistics', relatedDayNumbers: [13, 20, 26, 28, 34, 41, 43] },
  { id: 'syl-math-7', subject: 'Maths', category: 'Standard', title: 'Probability', relatedDayNumbers: [15, 22, 26, 28, 34, 41, 43] },

  // Science — Biology
  { id: 'syl-sci-1', subject: 'Science', category: 'Biology', title: 'How Do Organisms Reproduce?', relatedDayNumbers: [1, 3, 23, 29, 35, 37, 39, 42, 43] },
  { id: 'syl-sci-2', subject: 'Science', category: 'Biology', title: 'Heredity', relatedDayNumbers: [17, 23, 29, 35, 37, 39, 42, 43] },
  { id: 'syl-sci-3', subject: 'Science', category: 'Biology', title: 'Our Environment', relatedDayNumbers: [14, 29, 35, 37, 39, 42, 43] },

  // Science — Physics
  { id: 'syl-sci-4', subject: 'Science', category: 'Physics', title: 'Electricity', relatedDayNumbers: [5, 7, 25, 31, 35, 37, 39, 42, 43] },
  { id: 'syl-sci-5', subject: 'Science', category: 'Physics', title: 'Magnetic Effects of Electric Current', relatedDayNumbers: [9, 11, 25, 31, 35, 37, 39, 42, 43] },

  // Science — Chemistry
  { id: 'syl-sci-6', subject: 'Science', category: 'Chemistry', title: 'Metals and Non-metals', relatedDayNumbers: [19, 27, 33, 35, 37, 39, 42, 43] },
  { id: 'syl-sci-7', subject: 'Science', category: 'Chemistry', title: 'Carbon and Its Compounds', relatedDayNumbers: [21, 27, 33, 35, 37, 39, 42, 43] },

  // Social Science — Geography
  { id: 'syl-sst-1', subject: 'Social Science', category: 'Geography', title: 'Agriculture', relatedDayNumbers: [2, 25, 33, 37, 39, 42, 43] },
  { id: 'syl-sst-2', subject: 'Social Science', category: 'Geography', title: 'Minerals and Energy Resources', relatedDayNumbers: [4, 25, 33, 37, 39, 42, 43] },
  { id: 'syl-sst-3', subject: 'Social Science', category: 'Geography', title: 'Manufacturing Industries', relatedDayNumbers: [6, 8, 25, 33, 37, 39, 42, 43] },
  { id: 'syl-sst-4', subject: 'Social Science', category: 'Geography', title: 'Lifelines of National Economy', relatedDayNumbers: [10, 25, 33, 37, 39, 42, 43] },

  // Social Science — Economics
  { id: 'syl-sst-5', subject: 'Social Science', category: 'Economics', title: 'Money and Credit', relatedDayNumbers: [12, 26, 35, 37, 40, 42, 43] },
  { id: 'syl-sst-6', subject: 'Social Science', category: 'Economics', title: 'Globalisation and the Indian Economy', relatedDayNumbers: [13, 26, 35, 37, 40, 42, 43] },
  { id: 'syl-sst-7', subject: 'Social Science', category: 'Economics', title: 'Consumer Rights', relatedDayNumbers: [17, 26, 35, 37, 40, 42, 43] },

  // Social Science — Political Science
  { id: 'syl-sst-8', subject: 'Social Science', category: 'Political Science', title: 'Political Parties', relatedDayNumbers: [15, 27, 35, 37, 40, 42, 43] },
  { id: 'syl-sst-9', subject: 'Social Science', category: 'Political Science', title: 'Outcomes of Democracy', relatedDayNumbers: [16, 27, 35, 37, 40, 42, 43] },

  // Social Science — History
  { id: 'syl-sst-10', subject: 'Social Science', category: 'History', title: 'The Making of a Global World', relatedDayNumbers: [18, 31, 33, 37, 39, 42, 43] },
  { id: 'syl-sst-11', subject: 'Social Science', category: 'History', title: 'The Age of Industrialisation', relatedDayNumbers: [20, 31, 33, 37, 39, 42, 43] },
  { id: 'syl-sst-12', subject: 'Social Science', category: 'History', title: 'Print Culture and the Modern World', relatedDayNumbers: [22, 31, 33, 37, 39, 42, 43] },

  // English — First Flight Prose
  { id: 'syl-eng-1', subject: 'English', category: 'First Flight — Prose', title: 'Mijbil the Otter', relatedDayNumbers: [1, 28, 37, 39, 41, 42, 43] },
  { id: 'syl-eng-2', subject: 'English', category: 'First Flight — Prose', title: 'Madam Rides the Bus', relatedDayNumbers: [3, 28, 37, 39, 41, 42, 43] },
  { id: 'syl-eng-3', subject: 'English', category: 'First Flight — Prose', title: 'The Sermon at Benares', relatedDayNumbers: [5, 28, 37, 39, 41, 42, 43] },
  { id: 'syl-eng-4', subject: 'English', category: 'First Flight — Prose', title: 'The Proposal', relatedDayNumbers: [7, 28, 37, 39, 41, 42, 43] },

  // English — First Flight Poems
  { id: 'syl-eng-5', subject: 'English', category: 'First Flight — Poems', title: 'The Trees', relatedDayNumbers: [9, 28, 37, 39, 41, 42, 43] },
  { id: 'syl-eng-6', subject: 'English', category: 'First Flight — Poems', title: 'Fog', relatedDayNumbers: [11, 28, 37, 39, 41, 42, 43] },
  { id: 'syl-eng-7', subject: 'English', category: 'First Flight — Poems', title: 'The Tale of Custard the Dragon', relatedDayNumbers: [12, 28, 37, 39, 41, 42, 43] },
  { id: 'syl-eng-8', subject: 'English', category: 'First Flight — Poems', title: 'For Anne Gregory', relatedDayNumbers: [14, 28, 37, 39, 41, 42, 43] },

  // English — Footprints Without Feet
  { id: 'syl-eng-9', subject: 'English', category: 'Footprints Without Feet', title: 'The Making of a Scientist', relatedDayNumbers: [16, 29, 37, 39, 41, 42, 43] },
  { id: 'syl-eng-10', subject: 'English', category: 'Footprints Without Feet', title: 'The Necklace', relatedDayNumbers: [19, 29, 37, 39, 41, 42, 43] },
  { id: 'syl-eng-11', subject: 'English', category: 'Footprints Without Feet', title: 'The Hack Driver', relatedDayNumbers: [21, 29, 37, 39, 41, 42, 43] },
  { id: 'syl-eng-12', subject: 'English', category: 'Footprints Without Feet', title: 'Bholi', relatedDayNumbers: [23, 29, 37, 39, 41, 42, 43] },
  { id: 'syl-eng-13', subject: 'English', category: 'Footprints Without Feet', title: 'The Book That Saved the Earth', relatedDayNumbers: [24, 29, 37, 39, 41, 42, 43] },

  // English — Grammar, Writing and Reading
  { id: 'syl-eng-14', subject: 'English', category: 'Grammar, Writing & Reading', title: 'Determiners, Tenses & Modals', relatedDayNumbers: [31, 39, 41, 42, 43] },
  { id: 'syl-eng-15', subject: 'English', category: 'Grammar, Writing & Reading', title: 'Subject–Verb Concord & Reported Speech', relatedDayNumbers: [33, 39, 41, 42, 43] },
  { id: 'syl-eng-16', subject: 'English', category: 'Grammar, Writing & Reading', title: 'Formal Letter & Analytical Paragraph', relatedDayNumbers: [34, 39, 41, 42, 43] },
  { id: 'syl-eng-17', subject: 'English', category: 'Grammar, Writing & Reading', title: 'Unseen Reading Comprehension (Discursive / Case-based)', relatedDayNumbers: [34, 35, 39, 41, 42, 43] },

  // Hindi — Literature
  { id: 'syl-hin-1', subject: 'Hindi', category: 'Literature', title: 'यह दंतुरित मुस्कान', relatedDayNumbers: [3, 28, 36, 38, 40, 42, 43] },
  { id: 'syl-hin-2', subject: 'Hindi', category: 'Literature', title: 'संगतकार', relatedDayNumbers: [6, 28, 36, 38, 40, 42, 43] },
  { id: 'syl-hin-3', subject: 'Hindi', category: 'Literature', title: 'एक कहानी यह भी', relatedDayNumbers: [8, 30, 36, 38, 40, 42, 43] },
  { id: 'syl-hin-4', subject: 'Hindi', category: 'Literature', title: 'नौबतखाने में इबादत', relatedDayNumbers: [10, 30, 36, 38, 40, 42, 43] },
  { id: 'syl-hin-5', subject: 'Hindi', category: 'Literature', title: 'संस्कृति', relatedDayNumbers: [13, 30, 36, 38, 40, 42, 43] },
  { id: 'syl-hin-6', subject: 'Hindi', category: 'Literature', title: 'मैं क्यों लिखता हूँ', relatedDayNumbers: [15, 30, 36, 38, 40, 42, 43] },

  // Hindi — Grammar, Writing and Reading
  { id: 'syl-hin-7', subject: 'Hindi', category: 'Grammar, Writing & Reading', title: 'व्याकरण: वाक्य भेद', relatedDayNumbers: [18, 32, 38, 40, 42, 43] },
  { id: 'syl-hin-8', subject: 'Hindi', category: 'Grammar, Writing & Reading', title: 'व्याकरण: वाच्य और पद परिचय', relatedDayNumbers: [20, 32, 38, 40, 42, 43] },
  { id: 'syl-hin-9', subject: 'Hindi', category: 'Grammar, Writing & Reading', title: 'व्याकरण: अलंकार', relatedDayNumbers: [22, 32, 38, 40, 42, 43] },
  { id: 'syl-hin-10', subject: 'Hindi', category: 'Grammar, Writing & Reading', title: 'अपठित बोध (गद्यांश व पद्यांश)', relatedDayNumbers: [26, 38, 40, 42, 43] },
  { id: 'syl-hin-11', subject: 'Hindi', category: 'Grammar, Writing & Reading', title: 'रचनात्मक लेखन: अनुच्छेद व पत्र', relatedDayNumbers: [24, 34, 38, 40, 42, 43] },

  // Information Technology — 402
  { id: 'syl-it-1', subject: 'IT', category: 'Employability Skills', title: 'Communication Skills-II', relatedDayNumbers: [2, 32, 36, 41, 43] },
  { id: 'syl-it-2', subject: 'IT', category: 'Employability Skills', title: 'Self-Management Skills-II', relatedDayNumbers: [4, 32, 36, 41, 43] },
  { id: 'syl-it-3', subject: 'IT', category: 'Employability Skills', title: 'ICT Skills-II', relatedDayNumbers: [7, 32, 36, 41, 43] },
  { id: 'syl-it-4', subject: 'IT', category: 'Employability Skills', title: 'Entrepreneurial Skills-II', relatedDayNumbers: [9, 32, 36, 41, 43] },
  { id: 'syl-it-5', subject: 'IT', category: 'Employability Skills', title: 'Green Skills-II', relatedDayNumbers: [11, 32, 36, 41, 43] },
  { id: 'syl-it-6', subject: 'IT', category: 'Subject-Specific Skills', title: 'Digital Documentation (Advanced) — LibreOffice Writer', relatedDayNumbers: [14, 17, 29, 32, 36, 38, 41, 43] },
  { id: 'syl-it-7', subject: 'IT', category: 'Subject-Specific Skills', title: 'Electronic Spreadsheet (Advanced) — LibreOffice Calc', relatedDayNumbers: [19, 21, 29, 32, 36, 38, 41, 43] },
  { id: 'syl-it-8', subject: 'IT', category: 'Subject-Specific Skills', title: 'Database Management System — LibreOffice Base', relatedDayNumbers: [23, 25, 30, 32, 36, 38, 41, 43] },
  { id: 'syl-it-9', subject: 'IT', category: 'Subject-Specific Skills', title: 'Maintain Healthy, Safe & Secure Working Environment', relatedDayNumbers: [27, 32, 36, 38, 41, 43] }
];
