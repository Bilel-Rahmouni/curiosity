const languageUnits = {
  beginner: {
    basics: 'Basics',
    phrases: 'Everyday phrases',
  },
  intermediate: {
    grammar: 'Grammar',
    conversation: 'Conversation',
  },
  advanced: {
    fluency: 'Fluency',
    culture: 'Culture & society',
  },
} as const

const languageLessons = {
  beginner: {
    basics: {
      '01': 'Greetings & introductions',
      '02': 'Numbers & time',
      '03': 'Everyday objects',
    },
    phrases: {
      '01': 'At the café',
      '02': 'Directions & places',
      '03': 'Shopping',
    },
  },
  intermediate: {
    grammar: {
      '01': 'Present tense',
      '02': 'Past tense',
      '03': 'Questions & negation',
    },
    conversation: {
      '01': 'Talking about yourself',
      '02': 'Making plans',
      '03': 'Opinions & feelings',
    },
  },
  advanced: {
    fluency: {
      '01': 'Storytelling',
      '02': 'Formal & informal',
      '03': 'Idioms',
    },
    culture: {
      '01': 'Media & news',
      '02': 'Work & study',
      '03': 'Travel & daily life',
    },
  },
} as const

export default {
  nav: {
    learn: 'Learn',
    path: 'Path',
    practice: 'Practice',
    teachers: 'Teachers',
    about: 'About',
  },
  brand: 'curiosity',
  footer: {
    builtBy: 'Built by',
  },
  pages: {
    learn: 'Learn',
    practice: 'Practice',
    about: 'About',
  },
  home: {
    eyebrow: 'Learning platform for Tunisia',
    tagline: 'Learn with your teacher — from primary school to PhD.',
    cta: 'Start learning',
    stats: {
      subjects: 'Subjects',
      lessons: 'Lessons',
      languages: 'Language courses',
    },
    how: {
      title: 'How it works',
      step1: 'Find your level',
      step1Meta:
        'Take the free placement test and get a recommended level for every subject.',
      step2: 'Learn with a teacher',
      step2Meta:
        'Join a class with a code or pick a teacher from the directory. Follow your plan, do the assignments, join live sessions.',
      step3: 'Prove it',
      step3Meta:
        'Pass the quizzes, finish the level, and receive a verifiable certificate.',
    },
    featuresTitle: 'Everything in one place',
    features: {
      teacher: 'Classes & assignments',
      teacherMeta: 'Join with a class code, follow your teacher\u2019s plan',
      tutor: 'AI tutor',
      tutorMeta: 'Help on every lesson, in your language',
      quizzes: 'Graded quizzes',
      quizzesMeta: 'Timed tests with instant scores',
      sessions: 'Live sessions',
      sessionsMeta: 'Scheduled classes with meeting links',
      whiteboard: 'Shared whiteboard',
      whiteboardMeta: 'Draw together in real time',
      certificates: 'Certificates',
      certificatesMeta: 'Verifiable by serial number',
      speech: 'Pronunciation practice',
      speechMeta: 'Listen and speak in 5 languages',
      offline: 'Works offline',
      offlineMeta: 'Download units to your device',
      languages: 'Language courses',
      languagesMeta: 'English · Français · Italiano · Deutsch · العربية',
    },
    audience: {
      title: 'Made for',
      students: 'Students',
      studentsText:
        'A clear path from your current level to your goal: lessons, practice with mastery tracking, streaks, badges, and a class leaderboard.',
      studentsCta: 'Take the placement test',
      teachers: 'Teachers',
      teachersText:
        'Create classes, build lesson plans and quizzes, schedule live sessions, track mastery per student, and get listed in the public directory.',
      teachersCta: 'Open the teacher space',
      parents: 'Parents',
      parentsText:
        'Link your child\u2019s account with a family code and follow their weekly progress and quiz scores.',
      parentsCta: 'Open the family space',
    },
    exam: {
      title: 'Bac & concours prep',
      text: 'Past-paper-style worked problems in math, physics and chemistry — with examiner expectations and the classic traps for each exercise.',
      cta: 'Explore exam prep',
    },
    marketplace: {
      title: 'Find your teacher',
      text: 'Browse approved teachers, see their subjects and rates, and send a request to join their class.',
      cta: 'Browse teachers',
    },
    plans: {
      free: 'Free',
      freeMeta:
        'The first unit of every subject, the placement test, practice mode, and class membership.',
      premium: 'Premium',
      premiumMeta:
        'All lessons in all subjects and levels, paid securely with Tunisian cards or e-dinar via Konnect.',
    },
    faq: {
      title: 'Questions',
      q1: 'Is it really free to start?',
      a1: 'Yes. The first unit of every subject, the placement test and practice mode are free — no card required.',
      q2: 'Which languages does the platform support?',
      a2: 'The whole interface and all lessons exist in Arabic, French and English. You can switch at any time.',
      q3: 'How do I join my teacher\u2019s class?',
      a3: 'Ask your teacher for the class code and enter it on your home page, or send a join request from the teacher directory.',
      q4: 'How do payments work?',
      a4: 'Subscriptions are processed by Konnect and support Tunisian bank cards and e-dinar. Certificates and free content stay accessible without a subscription.',
    },
    final: {
      title: 'Start learning today',
      cta: 'Get started',
    },
  },
  common: {
    backToLearn: '← Learn',
    start: 'Start',
    done: 'Done',
    previous: 'Previous',
    next: 'Next',
    home: 'home',
    levelMeta: '{{levels}} levels · {{lessons}} lessons',
    unitMeta: '{{units}} units · {{lessons}} lessons',
    lessonMeta: '{{count}} lessons',
    notFound: 'Page not found',
    footerCopyright: '© {{year}} curiosity',
    toggleTheme: 'Toggle light/dark mode',
    ariaMainNav: 'Main',
    ariaFooterNav: 'Footer',
    ariaLessons: 'Lessons',
    selectLanguage: 'Language',
    close: 'Close',
  },
  lesson: {
    comingSoon: 'Content coming soon.',
  },
  auth: {
    signIn: 'Sign in',
    signUp: 'Create account',
    signOut: 'Sign out',
    email: 'Email',
    password: 'Password',
    name: 'Name',
    google: 'Continue with Google',
    noAccount: 'No account? Create one',
    haveAccount: 'Have an account? Sign in',
    checkEmail: 'Check your email to confirm your account.',
  },
  account: {
    title: 'Account',
    xp: 'XP',
    streak: 'Day streak',
    familyCode: 'Family code',
    classes: 'Classes',
    joinCodePlaceholder: 'Class code',
    join: 'Join',
    assignments: 'Assignments',
    due: 'Due {{date}}',
    roles: {
      student: 'Student',
      teacher: 'Teacher',
      parent: 'Parent',
      admin: 'Admin',
    },
  },
  progress: {
    markDone: 'Mark as done',
    completed: 'Completed',
    continue: 'Continue',
  },
  practice: {
    empty: 'Answer exercises in lessons to build your review queue.',
    sessionDone: 'Review done for today.',
  },
  mastery: {
    none: 'Not started',
    familiar: 'Familiar',
    proficient: 'Proficient',
    mastered: 'Mastered',
  },
  exercise: {
    practice: 'Practice',
    check: 'Check',
    correct: 'Correct',
    incorrect: 'Not quite',
    tryAgain: 'Try again',
    hint: 'Hint',
    whyWrong: 'Why?',
    whyWrongQuestion:
      'The exercise asks: "{{prompt}}". My answer was "{{answer}}" and it is wrong. Help me understand my mistake without giving me the answer.',
  },
  tutor: {
    title: 'Tutor',
    placeholder: 'Ask about this lesson…',
    send: 'Send',
    explainDifferently: 'Explain differently',
    explainRequest: 'Explain this lesson differently.',
    limit: 'Daily tutor limit reached. Come back tomorrow.',
    signInPrompt: 'Sign in to ask the tutor',
  },
  teach: {
    title: 'Teaching',
    className: 'Class name',
    create: 'Create',
    joinCode: 'Join code',
    students: 'Students',
    assignments: 'Assignments',
    assign: 'Assign',
    plan: 'Learning plan',
    generatePlan: 'Generate plan',
    startDate: 'Start date',
    weeksPerUnit: 'Weeks per unit',
  },
  path: {
    title: 'Learning path',
    next: 'Next lesson',
  },
  speak: {
    listen: 'Listen',
    say: 'Say it',
    listening: 'Listening…',
    correct: 'Sounds right!',
    tryAgain: 'Almost — try again',
  },
  board: {
    title: 'Whiteboard',
    clear: 'Clear',
    eraser: 'Eraser',
    size: 'Pen size',
  },
  placement: {
    title: 'Placement test',
    recommendation: 'Recommended level for {{subject}}',
  },
  badges: {
    title: 'Badges',
    'first-lesson': 'First lesson',
    'ten-lessons': '10 lessons',
    'fifty-lessons': '50 lessons',
    'streak-7': '7-day streak',
    'streak-30': '30-day streak',
    'unit-complete': 'Unit complete',
    'level-complete': 'Level complete',
    'sharp-shooter': '20 exercises mastered',
    polyglot: 'Two languages',
    'quiz-ace': 'Perfect quiz',
  },
  leaderboard: {
    title: 'Weekly ranking',
    optOut: 'Hide me from class leaderboards',
  },
  teachers: {
    title: 'Find a teacher',
    rate: '{{rate}} TND / hour',
    rateLabel: 'Hourly rate (TND)',
    request: 'Request to join',
    sent: 'Request sent',
    messagePlaceholder: 'Message to the teacher (optional)',
    requests: 'Join requests',
    accept: 'Accept',
    decline: 'Decline',
    listing: 'My public listing',
    bioPlaceholder: 'Short bio shown to students…',
    listed: 'Listed publicly',
    pendingApproval: 'Awaiting admin approval',
    save: 'Save listing',
    saved: 'Saved',
    earnings: 'Earnings',
    payoutHint: 'Payouts are recorded manually by the platform admin.',
    approve: 'Approve',
    revoke: 'Revoke',
    adminListings: 'Teacher listings',
  },
  certificate: {
    title: 'Certificate of completion',
    claim: 'Get certificate',
    statement: 'has successfully completed {{subject}} — {{level}} on curiosity.tn',
    serial: 'Serial',
    print: 'Print',
    invalid: 'Certificate not found.',
    error: 'Certificate could not be issued.',
  },
  sessions: {
    title: 'Live sessions',
    schedule: 'Schedule',
    sessionTitle: 'Session title',
    linkPlaceholder: 'Meeting link (Meet, Zoom…)',
    join: 'Join',
  },
  feed: {
    title: 'Announcements',
    placeholder: 'Write an announcement…',
    post: 'Post',
    comment: 'Reply',
    commentPlaceholder: 'Write a reply…',
  },
  notif: {
    title: 'Notifications',
    empty: 'No notifications',
    assignment: 'New assignment',
    quiz: 'New quiz',
    post: 'New announcement',
    session: 'New live session',
  },
  quiz: {
    title: 'Quiz',
    create: 'Create quiz',
    quizTitle: 'Quiz title',
    importUnit: 'Import unit questions',
    addQuestion: 'Add question',
    remove: 'Remove',
    timeLimit: 'Minutes',
    question: 'Question',
    choice: 'Choice',
    correct: 'Correct answer',
    submit: 'Submit',
    yourScore: 'Your score',
    average: 'Average',
    questionsCount: '{{count}} questions',
  },
  billing: {
    title: 'Subscription',
    monthly: 'Monthly',
    yearly: 'Yearly',
    perMonth: '{{price}} TND / month',
    perYear: '{{price}} TND / year',
    subscribe: 'Subscribe',
    active: 'Active',
    until: 'Until {{date}}',
    locked: 'This lesson requires a subscription.',
    goPricing: 'See plans',
    error: 'Payment could not be started.',
  },
  family: {
    title: 'Family',
    link: 'Link',
    childCodePlaceholder: 'Child family code',
    lessonsThisWeek: 'lessons this week',
    lessonsTotal: 'lessons total',
  },
  admin: {
    title: 'Content studio',
    draft: 'Draft',
    published: 'Published',
    edit: 'Edit',
    preview: 'Preview',
    saveDraft: 'Save draft',
    publish: 'Publish',
    addBlock: 'Add block',
    remove: 'Remove',
    moveUp: 'Move up',
    moveDown: 'Move down',
    fields: {
      text: 'Text',
      item: 'Item',
      question: 'Question',
      answer: 'Answer',
      prompt: 'Prompt',
      choice: 'Choice',
      tolerance: 'Tolerance',
      unit: 'Unit',
      hint: 'Hint',
      step: 'Step',
      alt: 'Alt text',
      caption: 'Caption',
    },
  },
  offline: {
    download: 'Save offline',
    downloaded: 'Saved offline',
  },
  curriculum: {
    subjects: {
      mathematics: 'Mathematics',
      physics: 'Physics',
      chemistry: 'Chemistry',
      'web-development': 'Web development',
      'exam-prep': 'Exam prep',
      english: 'English',
      french: 'French',
      italian: 'Italian',
      german: 'German',
      arabic: 'Arabic',
    },
    levels: {
      primary: 'Primary',
      middle: 'Middle',
      high: 'High',
      undergraduate: 'Undergraduate',
      graduate: 'Graduate',
      phd: 'PhD',
      beginner: 'Beginner',
      intermediate: 'Intermediate',
      advanced: 'Advanced',
      bac: 'Bac',
      concours: 'Concours',
    },
    units: {
      mathematics: {
        primary: {
          counting: 'Counting',
          shapes: 'Shapes',
          operations: 'Operations',
        },
        middle: {
          ratios: 'Ratios',
          algebra: 'Algebra',
          geometry: 'Geometry',
        },
        high: {
          calculus: 'Calculus',
          'linear-algebra': 'Linear algebra',
          probability: 'Probability',
        },
        undergraduate: {
          analysis: 'Analysis',
          'abstract-algebra': 'Abstract algebra',
          'differential-equations': 'Differential equations',
        },
        graduate: {
          topology: 'Topology',
          'functional-analysis': 'Functional analysis',
        },
        phd: {
          research: 'Research',
        },
      },
      physics: {
        primary: {
          motion: 'Motion',
          'light-sound': 'Light & sound',
          matter: 'Matter',
        },
        middle: {
          energy: 'Energy',
          electricity: 'Electricity',
          forces: 'Forces',
        },
        high: {
          mechanics: 'Mechanics',
          thermo: 'Thermodynamics',
          em: 'Electromagnetism',
        },
        undergraduate: {
          classical: 'Classical mechanics',
          quantum: 'Quantum mechanics',
          statistical: 'Statistical mechanics',
        },
        graduate: {
          qft: 'Quantum field theory',
          gr: 'General relativity',
        },
        phd: {
          frontier: 'Frontier physics',
        },
      },
      chemistry: {
        primary: {
          materials: 'Materials',
          mixtures: 'Mixtures',
          safety: 'Safety',
        },
        middle: {
          atoms: 'Atoms',
          reactions: 'Reactions',
          'acids-bases': 'Acids & bases',
        },
        high: {
          stoichiometry: 'Stoichiometry',
          'organic-intro': 'Organic chemistry intro',
          'physical-chem': 'Physical chemistry',
        },
        undergraduate: {
          organic: 'Organic chemistry',
          inorganic: 'Inorganic chemistry',
          physical: 'Physical chemistry',
        },
        graduate: {
          spectroscopy: 'Spectroscopy',
          synthesis: 'Synthesis',
        },
        phd: {
          research: 'Research',
        },
      },
      'web-development': {
        beginner: {
          javascript: 'JavaScript',
          node: 'Node.js',
        },
        intermediate: {
          mongodb: 'MongoDB',
          express: 'Express',
        },
        advanced: {
          react: 'React',
          fullstack: 'Full-stack MERN',
        },
      },
      'exam-prep': {
        bac: {
          'bac-math': 'Bac mathematics',
          'bac-physics': 'Bac physics',
          'bac-chemistry': 'Bac chemistry',
        },
        concours: {
          'concours-math': 'Concours mathematics',
          'concours-physics': 'Concours physics',
        },
      },
      english: languageUnits,
      french: languageUnits,
      italian: languageUnits,
      german: languageUnits,
      arabic: languageUnits,
    },
    lessons: {
      mathematics: {
        primary: {
          counting: {
            '01': 'What is a number?',
            '02': 'Counting objects',
            '03': 'Comparing quantities',
          },
          shapes: {
            '01': 'Basic shapes',
            '02': 'Patterns',
            '03': 'Symmetry',
          },
          operations: {
            '01': 'Addition basics',
            '02': 'Subtraction basics',
            '03': 'Word problems',
          },
        },
        middle: {
          ratios: {
            '01': 'Ratios',
            '02': 'Percentages',
            '03': 'Proportional reasoning',
          },
          algebra: {
            '01': 'Variables',
            '02': 'Linear expressions',
            '03': 'Simple equations',
          },
          geometry: {
            '01': 'Angles',
            '02': 'Area & perimeter',
            '03': 'Volume',
          },
        },
        high: {
          calculus: {
            '01': 'Limits',
            '02': 'Derivatives',
            '03': 'Integrals',
          },
          'linear-algebra': {
            '01': 'Vectors',
            '02': 'Matrices',
            '03': 'Systems of equations',
          },
          probability: {
            '01': 'Probability rules',
            '02': 'Distributions',
            '03': 'Inference basics',
          },
        },
        undergraduate: {
          analysis: {
            '01': 'Sequences & series',
            '02': 'Continuity',
            '03': 'Differentiation & integration',
          },
          'abstract-algebra': {
            '01': 'Groups',
            '02': 'Rings',
            '03': 'Fields',
          },
          'differential-equations': {
            '01': 'First-order ODEs',
            '02': 'Linear systems',
            '03': 'Fourier methods',
          },
        },
        graduate: {
          topology: {
            '01': 'Metric spaces',
            '02': 'Compactness',
            '03': 'Connectedness',
          },
          'functional-analysis': {
            '01': 'Banach spaces',
            '02': 'Hilbert spaces',
            '03': 'Operators',
          },
        },
        phd: {
          research: {
            '01': 'Problem formulation',
            '02': 'Literature review',
            '03': 'Original contributions',
          },
        },
      },
      physics: {
        primary: {
          motion: {
            '01': 'Push and pull',
            '02': 'Speed & direction',
            '03': 'Simple machines',
          },
          'light-sound': {
            '01': 'How we see',
            '02': 'Shadows & reflection',
            '03': 'How we hear',
          },
          matter: {
            '01': 'Solids liquids gases',
            '02': 'Mass & weight',
            '03': 'States of matter',
          },
        },
        middle: {
          energy: {
            '01': 'Forms of energy',
            '02': 'Conservation of energy',
            '03': 'Wave properties',
          },
          electricity: {
            '01': 'Charge & current',
            '02': 'Circuits',
            '03': 'Magnetism',
          },
          forces: {
            '01': "Newton's laws",
            '02': 'Friction',
            '03': 'Gravity',
          },
        },
        high: {
          mechanics: {
            '01': 'Kinematics',
            '02': 'Dynamics',
            '03': 'Rotational motion',
          },
          thermo: {
            '01': 'Heat & temperature',
            '02': 'Laws of thermodynamics',
            '03': 'Entropy',
          },
          em: {
            '01': 'Electric fields',
            '02': 'Magnetic fields',
            '03': "Maxwell's equations intro",
          },
        },
        undergraduate: {
          classical: {
            '01': 'Lagrangian mechanics',
            '02': 'Hamiltonian mechanics',
            '03': 'Central forces',
          },
          quantum: {
            '01': 'Wave functions',
            '02': 'Operators',
            '03': 'Angular momentum',
          },
          statistical: {
            '01': 'Ensembles',
            '02': 'Partition functions',
            '03': 'Quantum statistics',
          },
        },
        graduate: {
          qft: {
            '01': 'Canonical quantization',
            '02': 'Path integrals',
            '03': 'Renormalization intro',
          },
          gr: {
            '01': 'Spacetime geometry',
            '02': 'Einstein equations',
            '03': 'Black holes',
          },
        },
        phd: {
          frontier: {
            '01': 'Open problems',
            '02': 'Experimental design',
            '03': 'Publishing & peer review',
          },
        },
      },
      chemistry: {
        primary: {
          materials: {
            '01': 'What things are made of',
            '02': 'Hard vs soft',
            '03': 'Hot vs cold changes',
          },
          mixtures: {
            '01': 'Mixing substances',
            '02': 'Dissolving',
            '03': 'Separating mixtures',
          },
          safety: {
            '01': 'Lab safety rules',
            '02': 'Observation skills',
            '03': 'Recording results',
          },
        },
        middle: {
          atoms: {
            '01': 'Atomic structure',
            '02': 'Periodic table',
            '03': 'Isotopes',
          },
          reactions: {
            '01': 'Signs of a reaction',
            '02': 'Balancing equations',
            '03': 'Reaction types',
          },
          'acids-bases': {
            '01': 'pH scale',
            '02': 'Neutralization',
            '03': 'Everyday acids & bases',
          },
        },
        high: {
          stoichiometry: {
            '01': 'Mole concept',
            '02': 'Limiting reagents',
            '03': 'Yield & purity',
          },
          'organic-intro': {
            '01': 'Hydrocarbons',
            '02': 'Functional groups',
            '03': 'Reaction mechanisms intro',
          },
          'physical-chem': {
            '01': 'Thermochemistry',
            '02': 'Kinetics',
            '03': 'Equilibrium',
          },
        },
        undergraduate: {
          organic: {
            '01': 'Stereochemistry',
            '02': 'Substitution & elimination',
            '03': 'Spectroscopy intro',
          },
          inorganic: {
            '01': 'Coordination compounds',
            '02': 'Crystal field theory',
            '03': 'Organometallics',
          },
          physical: {
            '01': 'Quantum chemistry',
            '02': 'Statistical thermodynamics',
            '03': 'Electrochemistry',
          },
        },
        graduate: {
          spectroscopy: {
            '01': 'NMR',
            '02': 'Mass spectrometry',
            '03': 'X-ray diffraction',
          },
          synthesis: {
            '01': 'Retrosynthesis',
            '02': 'Catalysis',
            '03': 'Asymmetric methods',
          },
        },
        phd: {
          research: {
            '01': 'Hypothesis design',
            '02': 'Advanced instrumentation',
            '03': 'Thesis & defense',
          },
        },
      },
      'web-development': {
        beginner: {
          javascript: {
            '01': 'Variables & types',
            '02': 'Functions',
            '03': 'Arrays & objects',
          },
          node: {
            '01': 'What is Node.js?',
            '02': 'Modules & npm',
            '03': 'Your first server',
          },
        },
        intermediate: {
          mongodb: {
            '01': 'Documents & collections',
            '02': 'CRUD operations',
            '03': 'Data modeling',
          },
          express: {
            '01': 'Routing',
            '02': 'Middleware',
            '03': 'REST APIs',
          },
        },
        advanced: {
          react: {
            '01': 'Components & JSX',
            '02': 'State & props',
            '03': 'Hooks & effects',
          },
          fullstack: {
            '01': 'Connecting front & back',
            '02': 'Authentication',
            '03': 'Deployment',
          },
        },
      },
      'exam-prep': {
        bac: {
          'bac-math': {
            '01': 'Functions & analysis',
            '02': 'Sequences & integrals',
            '03': 'Complex numbers & geometry',
          },
          'bac-physics': {
            '01': 'Mechanics problems',
            '02': 'Electricity & oscillators',
            '03': 'Waves & nuclear physics',
          },
          'bac-chemistry': {
            '01': 'Kinetics & equilibrium',
            '02': 'Acids & bases',
            '03': 'Organic chemistry',
          },
        },
        concours: {
          'concours-math': {
            '01': 'Algebra drills',
            '02': 'Analysis drills',
            '03': 'Problem-solving strategies',
          },
          'concours-physics': {
            '01': 'Advanced mechanics',
            '02': 'Electromagnetism drills',
            '03': 'Exam technique',
          },
        },
      },
      english: languageLessons,
      french: languageLessons,
      italian: languageLessons,
      german: languageLessons,
      arabic: languageLessons,
    },
  },
} as const
