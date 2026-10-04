import { DayPlan } from '../types';

export const days1to10: DayPlan[] = [
  {
    dayNumber: 1,
    dateStr: 'Sunday, 4 October 2026',
    dateISO: '2026-10-04',
    sessions: [
      {
        id: 'd1-s1',
        subject: 'Maths',
        chapter: 'Some Applications of Trigonometry',
        durationMinutes: 80,
        learningPattern: 'Maths / numerical',
        tasks: [
          { id: 'd1-s1-t1', text: 'Revise heights, distances, angle of elevation and angle of depression.' },
          { id: 'd1-s1-t2', text: 'Draw and label diagrams for each question before calculating.' },
          { id: 'd1-s1-t3', text: 'Study the NCERT solved examples and complete the relevant exercise questions.' },
          { id: 'd1-s1-t4', text: 'Solve at least 8 mixed application questions in writing.' },
          { id: 'd1-s1-t5', text: 'Attempt 3–5 PYQs or board-style questions.' },
          { id: 'd1-s1-t6', text: 'Check calculations and record mistakes.' }
        ]
      },
      {
        id: 'd1-s2',
        subject: 'Science',
        subCategory: 'Biology',
        chapter: 'How Do Organisms Reproduce? (Part 1)',
        durationMinutes: 80,
        learningPattern: 'Theory-heavy',
        tasks: [
          { id: 'd1-s2-t1', text: 'Read the chapter introduction and understand why reproduction is necessary.' },
          { id: 'd1-s2-t2', text: 'Study DNA copying and the importance of variation.' },
          { id: 'd1-s2-t3', text: 'Learn asexual reproduction: fission, fragmentation, regeneration, budding and spore formation.' },
          { id: 'd1-s2-t4', text: 'Draw and label the relevant textbook diagrams.' },
          { id: 'd1-s2-t5', text: 'Complete relevant NCERT in-text and exercise questions.' },
          { id: 'd1-s2-t6', text: 'Attempt 3 exam-style questions and check answers.' }
        ]
      },
      {
        id: 'd1-s3',
        subject: 'English',
        chapter: 'Mijbil the Otter',
        durationMinutes: 80,
        learningPattern: 'Literature',
        tasks: [
          { id: 'd1-s3-t1', text: 'Read the chapter carefully.' },
          { id: 'd1-s3-t2', text: 'Note the main events, setting, characters and important details.' },
          { id: 'd1-s3-t3', text: 'Prepare short answers and one long answer in your own words.' },
          { id: 'd1-s3-t4', text: 'Complete textbook questions.' },
          { id: 'd1-s3-t5', text: 'Attempt a short literature question set and check it.' }
        ]
      }
    ]
  },
  {
    dayNumber: 2,
    dateStr: 'Monday, 5 October 2026',
    dateISO: '2026-10-05',
    sessions: [
      {
        id: 'd2-s1',
        subject: 'Maths',
        chapter: 'Arithmetic Progressions (Part 1)',
        durationMinutes: 80,
        learningPattern: 'Maths / numerical',
        tasks: [
          { id: 'd2-s1-t1', text: 'Understand arithmetic progression, common difference and nth term.' },
          { id: 'd2-s1-t2', text: 'Learn the formula for the nth term and identify the first term/common difference.' },
          { id: 'd2-s1-t3', text: 'Work through NCERT examples.' },
          { id: 'd2-s1-t4', text: 'Solve basic and intermediate NCERT questions.' },
          { id: 'd2-s1-t5', text: 'Attempt 3–5 PYQs.' },
          { id: 'd2-s1-t6', text: 'Check each solution and note formula/application errors.' }
        ]
      },
      {
        id: 'd2-s2',
        subject: 'Social Science',
        subCategory: 'Geography',
        chapter: 'Agriculture',
        durationMinutes: 80,
        learningPattern: 'Theory-heavy',
        tasks: [
          { id: 'd2-s2-t1', text: 'Read the chapter and understand types of farming and cropping seasons.' },
          { id: 'd2-s2-t2', text: 'Study major crops, conditions required and producing regions.' },
          { id: 'd2-s2-t3', text: 'Learn technological and institutional reforms and challenges faced by farmers.' },
          { id: 'd2-s2-t4', text: 'Prepare a concise comparison table for major crops.' },
          { id: 'd2-s2-t5', text: 'Practise relevant map work from the prescribed syllabus.' },
          { id: 'd2-s2-t6', text: 'Answer textbook questions and 3–5 PYQs.' }
        ]
      },
      {
        id: 'd2-s3',
        subject: 'IT',
        subCategory: 'Employability Skills',
        chapter: 'Communication Skills-II',
        durationMinutes: 80,
        learningPattern: 'IT practical',
        tasks: [
          { id: 'd2-s3-t1', text: 'Study the communication cycle and its elements.' },
          { id: 'd2-s3-t2', text: 'Revise verbal, non-verbal and visual communication.' },
          { id: 'd2-s3-t3', text: 'Learn communication barriers and ways to overcome them.' },
          { id: 'd2-s3-t4', text: 'Prepare concise notes and examples.' },
          { id: 'd2-s3-t5', text: 'Solve textbook questions and a short MCQ test.' },
          { id: 'd2-s3-t6', text: 'Check answers and revise weak points.' }
        ]
      }
    ]
  },
  {
    dayNumber: 3,
    dateStr: 'Tuesday, 6 October 2026',
    dateISO: '2026-10-06',
    sessions: [
      {
        id: 'd3-s1',
        subject: 'Science',
        subCategory: 'Biology',
        chapter: 'How Do Organisms Reproduce? (Part 2)',
        durationMinutes: 80,
        learningPattern: 'Theory-heavy',
        tasks: [
          { id: 'd3-s1-t1', text: 'Study vegetative propagation and its examples.' },
          { id: 'd3-s1-t2', text: 'Learn sexual reproduction in flowering plants: flower parts, pollination and fertilisation.' },
          { id: 'd3-s1-t3', text: 'Study seed and fruit formation.' },
          { id: 'd3-s1-t4', text: 'Study the human reproductive systems and their functions as prescribed in the textbook.' },
          { id: 'd3-s1-t5', text: 'Understand fertilisation, development, reproductive health and contraception at the textbook level.' },
          { id: 'd3-s1-t6', text: 'Draw and label the required diagrams.' },
          { id: 'd3-s1-t7', text: 'Complete NCERT questions and attempt PYQs.' }
        ]
      },
      {
        id: 'd3-s2',
        subject: 'English',
        chapter: 'Madam Rides the Bus',
        durationMinutes: 80,
        learningPattern: 'Literature',
        tasks: [
          { id: 'd3-s2-t1', text: "Read the chapter and identify Valli's character traits." },
          { id: 'd3-s2-t2', text: 'Note the sequence of events and the significance of the bus journey.' },
          { id: 'd3-s2-t3', text: 'Prepare short and long answers in your own words.' },
          { id: 'd3-s2-t4', text: 'Complete textbook questions.' },
          { id: 'd3-s2-t5', text: 'Attempt 3–5 exam-style questions and check them.' }
        ]
      },
      {
        id: 'd3-s3',
        subject: 'Hindi',
        chapter: 'यह दंतुरित मुस्कान',
        durationMinutes: 80,
        learningPattern: 'Literature',
        tasks: [
          { id: 'd3-s3-t1', text: 'Read the poem carefully and understand its central भाव.' },
          { id: 'd3-s3-t2', text: 'Explain the important poetic expressions in simple Hindi.' },
          { id: 'd3-s3-t3', text: 'Prepare कवि-भाव, प्रसंग and भावार्थ notes.' },
          { id: 'd3-s3-t4', text: 'Practise textbook questions.' },
          { id: 'd3-s3-t5', text: 'Write answers without looking at notes and check them.' }
        ]
      }
    ]
  },
  {
    dayNumber: 4,
    dateStr: 'Wednesday, 7 October 2026',
    dateISO: '2026-10-07',
    sessions: [
      {
        id: 'd4-s1',
        subject: 'Maths',
        chapter: 'Arithmetic Progressions (Part 2)',
        durationMinutes: 80,
        learningPattern: 'Maths / numerical',
        tasks: [
          { id: 'd4-s1-t1', text: 'Learn the sum of the first n terms of an AP.' },
          { id: 'd4-s1-t2', text: 'Practise finding missing terms and solving word problems.' },
          { id: 'd4-s1-t3', text: 'Complete remaining relevant NCERT exercise questions.' },
          { id: 'd4-s1-t4', text: 'Solve 8–10 mixed questions independently.' },
          { id: 'd4-s1-t5', text: 'Attempt a timed AP mini-test/PYQs.' },
          { id: 'd4-s1-t6', text: 'Check the test and correct every error.' }
        ]
      },
      {
        id: 'd4-s2',
        subject: 'Social Science',
        subCategory: 'Geography',
        chapter: 'Minerals and Energy Resources',
        durationMinutes: 80,
        learningPattern: 'Theory-heavy',
        tasks: [
          { id: 'd4-s2-t1', text: 'Study types of minerals and modes of occurrence.' },
          { id: 'd4-s2-t2', text: 'Learn distribution and uses of major metallic and non-metallic minerals.' },
          { id: 'd4-s2-t3', text: 'Study conventional and non-conventional energy resources.' },
          { id: 'd4-s2-t4', text: 'Understand conservation and sustainable use.' },
          { id: 'd4-s2-t5', text: 'Practise prescribed map locations.' },
          { id: 'd4-s2-t6', text: 'Complete textbook questions and PYQs.' }
        ]
      },
      {
        id: 'd4-s3',
        subject: 'IT',
        subCategory: 'Employability Skills',
        chapter: 'Self-Management Skills-II',
        durationMinutes: 80,
        learningPattern: 'IT practical',
        tasks: [
          { id: 'd4-s3-t1', text: 'Study stress and its effects.' },
          { id: 'd4-s3-t2', text: 'Learn stress-management techniques.' },
          { id: 'd4-s3-t3', text: 'Revise self-awareness, self-motivation and goal setting.' },
          { id: 'd4-s3-t4', text: 'Prepare a practical example for each key concept.' },
          { id: 'd4-s3-t5', text: 'Solve textbook questions and MCQs.' },
          { id: 'd4-s3-t6', text: 'Review mistakes.' }
        ]
      }
    ]
  },
  {
    dayNumber: 5,
    dateStr: 'Thursday, 8 October 2026',
    dateISO: '2026-10-08',
    sessions: [
      {
        id: 'd5-s1',
        subject: 'Maths',
        chapter: 'Circles (Part 1)',
        durationMinutes: 80,
        learningPattern: 'Maths / numerical',
        tasks: [
          { id: 'd5-s1-t1', text: 'Understand tangent and secant concepts.' },
          { id: 'd5-s1-t2', text: 'Learn the theorem: tangent at any point of a circle is perpendicular to the radius through the point of contact.' },
          { id: 'd5-s1-t3', text: 'Study the number of tangents from an external point.' },
          { id: 'd5-s1-t4', text: 'Practise theorem-based diagrams and proofs.' },
          { id: 'd5-s1-t5', text: 'Solve NCERT examples and relevant exercise questions.' },
          { id: 'd5-s1-t6', text: 'Attempt PYQs and check proof steps.' }
        ]
      },
      {
        id: 'd5-s2',
        subject: 'Science',
        subCategory: 'Physics',
        chapter: 'Electricity (Part 1)',
        durationMinutes: 80,
        learningPattern: 'Maths / numerical',
        tasks: [
          { id: 'd5-s2-t1', text: 'Understand electric current, charge and circuit symbols.' },
          { id: 'd5-s2-t2', text: 'Study potential difference and how it is measured.' },
          { id: 'd5-s2-t3', text: "Learn Ohm's law and draw the V–I graph." },
          { id: 'd5-s2-t4', text: 'Understand resistance and factors affecting resistance.' },
          { id: 'd5-s2-t5', text: 'Solve basic numerical problems with units.' },
          { id: 'd5-s2-t6', text: 'Complete relevant NCERT questions and check calculations.' }
        ]
      },
      {
        id: 'd5-s3',
        subject: 'English',
        chapter: 'The Sermon at Benares',
        durationMinutes: 80,
        learningPattern: 'Literature',
        tasks: [
          { id: 'd5-s3-t1', text: 'Read the chapter carefully.' },
          { id: 'd5-s3-t2', text: "Understand Kisa Gotami's experience and the central message." },
          { id: 'd5-s3-t3', text: 'Note important events and character development.' },
          { id: 'd5-s3-t4', text: 'Prepare short and long answers.' },
          { id: 'd5-s3-t5', text: 'Complete textbook questions and a short PYQ set.' }
        ]
      }
    ]
  },
  {
    dayNumber: 6,
    dateStr: 'Friday, 9 October 2026',
    dateISO: '2026-10-09',
    sessions: [
      {
        id: 'd6-s1',
        subject: 'Maths',
        chapter: 'Circles (Part 2)',
        durationMinutes: 80,
        learningPattern: 'Maths / numerical',
        tasks: [
          { id: 'd6-s1-t1', text: 'Learn the theorem that lengths of tangents drawn from an external point are equal.' },
          { id: 'd6-s1-t2', text: 'Practise theorem proofs and application questions.' },
          { id: 'd6-s1-t3', text: 'Solve questions involving lengths, angles and diagrams.' },
          { id: 'd6-s1-t4', text: 'Complete remaining relevant NCERT exercises.' },
          { id: 'd6-s1-t5', text: 'Attempt a timed Circles test/PYQs.' },
          { id: 'd6-s1-t6', text: 'Check and rewrite incorrect proofs.' }
        ]
      },
      {
        id: 'd6-s2',
        subject: 'Social Science',
        subCategory: 'Geography',
        chapter: 'Manufacturing Industries (Part 1)',
        durationMinutes: 80,
        learningPattern: 'Theory-heavy',
        tasks: [
          { id: 'd6-s2-t1', text: 'Understand the importance of manufacturing.' },
          { id: 'd6-s2-t2', text: 'Study factors affecting industrial location.' },
          { id: 'd6-s2-t3', text: 'Learn the major industries included in the chapter.' },
          { id: 'd6-s2-t4', text: 'Prepare notes on the cotton textile and jute textile industries.' },
          { id: 'd6-s2-t5', text: 'Study their location factors, challenges and distribution.' },
          { id: 'd6-s2-t6', text: 'Answer textbook questions and PYQs.' }
        ]
      },
      {
        id: 'd6-s3',
        subject: 'Hindi',
        chapter: 'संगतकार',
        durationMinutes: 80,
        learningPattern: 'Literature',
        tasks: [
          { id: 'd6-s3-t1', text: 'Read the poem and understand the role of the संगतकार.' },
          { id: 'd6-s3-t2', text: 'Identify the central भाव and message.' },
          { id: 'd6-s3-t3', text: 'Prepare भावार्थ and important question answers.' },
          { id: 'd6-s3-t4', text: 'Practise textbook questions in writing.' },
          { id: 'd6-s3-t5', text: 'Self-test key ideas and correct errors.' }
        ]
      }
    ]
  },
  {
    dayNumber: 7,
    dateStr: 'Saturday, 10 October 2026',
    dateISO: '2026-10-10',
    sessions: [
      {
        id: 'd7-s1',
        subject: 'Science',
        subCategory: 'Physics',
        chapter: 'Electricity (Part 2)',
        durationMinutes: 80,
        learningPattern: 'Maths / numerical',
        tasks: [
          { id: 'd7-s1-t1', text: 'Study resistance in series and parallel combinations.' },
          { id: 'd7-s1-t2', text: 'Learn heating effect of electric current.' },
          { id: 'd7-s1-t3', text: 'Study electric power and electrical energy.' },
          { id: 'd7-s1-t4', text: 'Memorise and apply the relevant formulae with correct units.' },
          { id: 'd7-s1-t5', text: 'Solve at least 10 numerical problems of mixed difficulty.' },
          { id: 'd7-s1-t6', text: 'Attempt PYQs/timed questions and correct mistakes.' }
        ]
      },
      {
        id: 'd7-s2',
        subject: 'English',
        chapter: 'The Proposal',
        durationMinutes: 80,
        learningPattern: 'Literature',
        tasks: [
          { id: 'd7-s2-t1', text: 'Read the play and understand the characters and comic situations.' },
          { id: 'd7-s2-t2', text: 'Note the arguments and misunderstandings.' },
          { id: 'd7-s2-t3', text: 'Prepare character sketches and important answer points.' },
          { id: 'd7-s2-t4', text: 'Complete textbook questions.' },
          { id: 'd7-s2-t5', text: 'Practise one long answer and a short timed test.' }
        ]
      },
      {
        id: 'd7-s3',
        subject: 'IT',
        subCategory: 'Employability Skills',
        chapter: 'ICT Skills-II',
        durationMinutes: 80,
        learningPattern: 'IT practical',
        tasks: [
          { id: 'd7-s3-t1', text: 'Revise computer fundamentals and operating-system basics.' },
          { id: 'd7-s3-t2', text: 'Study file/folder management and common digital tools.' },
          { id: 'd7-s3-t3', text: 'Learn safe, responsible and secure use of ICT.' },
          { id: 'd7-s3-t4', text: 'Prepare key terms and practical examples.' },
          { id: 'd7-s3-t5', text: 'Solve textbook questions and MCQs.' },
          { id: 'd7-s3-t6', text: 'Review mistakes.' }
        ]
      }
    ]
  },
  {
    dayNumber: 8,
    dateStr: 'Sunday, 11 October 2026',
    dateISO: '2026-11-11',
    sessions: [
      {
        id: 'd8-s1',
        subject: 'Maths',
        chapter: 'Areas Related to Circles',
        durationMinutes: 80,
        learningPattern: 'Maths / numerical',
        tasks: [
          { id: 'd8-s1-t1', text: 'Revise circumference and area of a circle.' },
          { id: 'd8-s1-t2', text: 'Learn area and perimeter of sectors and segments.' },
          { id: 'd8-s1-t3', text: 'Practise questions involving combinations of plane figures.' },
          { id: 'd8-s1-t4', text: 'Solve NCERT examples and exercise questions.' },
          { id: 'd8-s1-t5', text: 'Attempt 5–8 PYQs or board-style questions.' },
          { id: 'd8-s1-t6', text: 'Check units, diagrams and calculations.' }
        ]
      },
      {
        id: 'd8-s2',
        subject: 'Social Science',
        subCategory: 'Geography',
        chapter: 'Manufacturing Industries (Part 2)',
        durationMinutes: 80,
        learningPattern: 'Theory-heavy',
        tasks: [
          { id: 'd8-s2-t1', text: 'Study iron and steel, chemical, cement, automobile and other prescribed industries.' },
          { id: 'd8-s2-t2', text: 'Learn industrial pollution and environmental degradation.' },
          { id: 'd8-s2-t3', text: 'Study measures to control industrial pollution.' },
          { id: 'd8-s2-t4', text: 'Prepare comparison/revision tables.' },
          { id: 'd8-s2-t5', text: 'Practise prescribed map work.' },
          { id: 'd8-s2-t6', text: 'Complete textbook questions and PYQs.' }
        ]
      },
      {
        id: 'd8-s3',
        subject: 'Hindi',
        chapter: 'एक कहानी यह भी',
        durationMinutes: 80,
        learningPattern: 'Literature',
        tasks: [
          { id: 'd8-s3-t1', text: 'Read the complete lesson.' },
          { id: 'd8-s3-t2', text: "Note the author's experiences, important people and events." },
          { id: 'd8-s3-t3', text: 'Understand the title and central ideas.' },
          { id: 'd8-s3-t4', text: 'Prepare short answers and one long answer.' },
          { id: 'd8-s3-t5', text: 'Complete textbook questions and self-check.' }
        ]
      }
    ]
  },
  {
    dayNumber: 9,
    dateStr: 'Monday, 12 October 2026',
    dateISO: '2026-10-12',
    sessions: [
      {
        id: 'd9-s1',
        subject: 'Science',
        subCategory: 'Physics',
        chapter: 'Magnetic Effects of Electric Current (Part 1)',
        durationMinutes: 80,
        learningPattern: 'Theory-heavy',
        tasks: [
          { id: 'd9-s1-t1', text: 'Study magnetic field and magnetic field lines.' },
          { id: 'd9-s1-t2', text: 'Learn the magnetic field around a straight current-carrying conductor.' },
          { id: 'd9-s1-t3', text: 'Study the right-hand thumb rule.' },
          { id: 'd9-s1-t4', text: 'Understand the magnetic field due to a circular loop and solenoid.' },
          { id: 'd9-s1-t5', text: 'Draw and label textbook diagrams.' },
          { id: 'd9-s1-t6', text: 'Complete NCERT questions and attempt PYQs.' }
        ]
      },
      {
        id: 'd9-s2',
        subject: 'English',
        chapter: 'The Trees',
        durationMinutes: 80,
        learningPattern: 'Literature',
        tasks: [
          { id: 'd9-s2-t1', text: 'Read the poem and understand its central idea.' },
          { id: 'd9-s2-t2', text: 'Explain imagery, symbolism and important expressions.' },
          { id: 'd9-s2-t3', text: 'Prepare stanza-wise notes and poetic devices where prescribed.' },
          { id: 'd9-s2-t4', text: 'Practise textbook questions.' },
          { id: 'd9-s2-t5', text: 'Attempt a short poetry question set.' }
        ]
      },
      {
        id: 'd9-s3',
        subject: 'IT',
        subCategory: 'Employability Skills',
        chapter: 'Entrepreneurial Skills-II',
        durationMinutes: 80,
        learningPattern: 'IT practical',
        tasks: [
          { id: 'd9-s3-t1', text: 'Understand entrepreneurship and the role of an entrepreneur.' },
          { id: 'd9-s3-t2', text: 'Study qualities and functions of entrepreneurs.' },
          { id: 'd9-s3-t3', text: 'Learn the difference between wage employment, self-employment and entrepreneurship.' },
          { id: 'd9-s3-t4', text: 'Prepare examples of entrepreneurs and enterprises.' },
          { id: 'd9-s3-t5', text: 'Solve textbook questions and MCQs.' },
          { id: 'd9-s3-t6', text: 'Revise incorrect answers.' }
        ]
      }
    ]
  },
  {
    dayNumber: 10,
    dateStr: 'Tuesday, 13 October 2026',
    dateISO: '2026-10-13',
    sessions: [
      {
        id: 'd10-s1',
        subject: 'Maths',
        chapter: 'Surface Areas and Volumes (Part 1)',
        durationMinutes: 80,
        learningPattern: 'Maths / numerical',
        tasks: [
          { id: 'd10-s1-t1', text: 'Revise surface area and volume formulae for the prescribed solids.' },
          { id: 'd10-s1-t2', text: 'Practise questions on combinations of solids.' },
          { id: 'd10-s1-t3', text: 'Learn how to identify which surfaces are exposed or joined.' },
          { id: 'd10-s1-t4', text: 'Solve NCERT examples and relevant exercise questions.' },
          { id: 'd10-s1-t5', text: 'Attempt mixed formula-based questions.' },
          { id: 'd10-s1-t6', text: 'Check units and diagrams.' }
        ]
      },
      {
        id: 'd10-s2',
        subject: 'Social Science',
        subCategory: 'Geography',
        chapter: 'Lifelines of National Economy',
        durationMinutes: 80,
        learningPattern: 'Theory-heavy',
        tasks: [
          { id: 'd10-s2-t1', text: 'Study roadways, railways, pipelines, waterways and airways.' },
          { id: 'd10-s2-t2', text: 'Understand communication networks and international trade.' },
          { id: 'd10-s2-t3', text: 'Learn the role of transport and communication in the economy.' },
          { id: 'd10-s2-t4', text: 'Prepare a comparison table of transport modes.' },
          { id: 'd10-s2-t5', text: 'Practise all prescribed map work.' },
          { id: 'd10-s2-t6', text: 'Answer textbook questions and PYQs.' }
        ]
      },
      {
        id: 'd10-s3',
        subject: 'Hindi',
        chapter: 'नौबतखाने में इबादत',
        durationMinutes: 80,
        learningPattern: 'Literature',
        tasks: [
          { id: 'd10-s3-t1', text: 'Read the lesson carefully.' },
          { id: 'd10-s3-t2', text: 'Understand the importance of music, tradition and the central personality.' },
          { id: 'd10-s3-t3', text: 'Note the main events and cultural references.' },
          { id: 'd10-s3-t4', text: 'Prepare textbook answers in your own words.' },
          { id: 'd10-s3-t5', text: 'Practise a short written test and check it.' }
        ]
      }
    ]
  }
];
