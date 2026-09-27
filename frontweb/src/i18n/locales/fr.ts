const languageUnits = {
  beginner: {
    basics: 'Bases',
    phrases: 'Expressions du quotidien',
  },
  intermediate: {
    grammar: 'Grammaire',
    conversation: 'Conversation',
  },
  advanced: {
    fluency: 'Aisance',
    culture: 'Culture et société',
  },
} as const

const languageLessons = {
  beginner: {
    basics: {
      '01': 'Salutations et présentations',
      '02': 'Nombres et heure',
      '03': 'Objets du quotidien',
    },
    phrases: {
      '01': 'Au café',
      '02': 'Directions et lieux',
      '03': 'Faire les courses',
    },
  },
  intermediate: {
    grammar: {
      '01': 'Le présent',
      '02': 'Le passé',
      '03': 'Questions et négation',
    },
    conversation: {
      '01': 'Parler de soi',
      '02': 'Faire des projets',
      '03': 'Opinions et sentiments',
    },
  },
  advanced: {
    fluency: {
      '01': 'Raconter une histoire',
      '02': 'Formel et informel',
      '03': 'Expressions idiomatiques',
    },
    culture: {
      '01': 'Médias et actualités',
      '02': 'Travail et études',
      '03': 'Voyage et vie quotidienne',
    },
  },
} as const

export default {
  nav: {
    learn: 'apprendre',
    path: 'parcours',
    practice: 's\'entraîner',
    teachers: 'enseignants',
    about: 'à propos',
  },
  brand: 'curiosity',
  footer: {
    builtBy: 'Conçu par',
  },
  pages: {
    learn: 'Apprendre',
    practice: 'Entraînement',
    about: 'à propos',
  },
  home: {
    eyebrow: 'La plateforme d\u2019apprentissage tunisienne',
    tagline: 'Apprends avec ton prof — du primaire au doctorat.',
    cta: 'Commencer à apprendre',
    stats: {
      subjects: 'Matières',
      lessons: 'Leçons',
      languages: 'Cours de langues',
    },
    how: {
      title: 'Comment ça marche',
      step1: 'Trouve ton niveau',
      step1Meta:
        'Passe le test de positionnement gratuit et reçois un niveau recommandé pour chaque matière.',
      step2: 'Apprends avec un prof',
      step2Meta:
        'Rejoins une classe avec un code ou choisis un enseignant dans l\u2019annuaire. Suis ton plan, fais les devoirs, participe aux séances en direct.',
      step3: 'Prouve-le',
      step3Meta:
        'Réussis les quiz, termine le niveau et reçois un certificat vérifiable.',
    },
    featuresTitle: 'Tout au même endroit',
    features: {
      teacher: 'Classes et devoirs',
      teacherMeta: 'Rejoins avec un code, suis le plan de ton prof',
      tutor: 'Tuteur IA',
      tutorMeta: 'De l\u2019aide à chaque leçon, dans ta langue',
      quizzes: 'Quiz notés',
      quizzesMeta: 'Tests chronométrés, résultats immédiats',
      sessions: 'Séances en direct',
      sessionsMeta: 'Cours planifiés avec lien de réunion',
      whiteboard: 'Tableau partagé',
      whiteboardMeta: 'Dessinez ensemble en temps réel',
      certificates: 'Certificats',
      certificatesMeta: 'Vérifiables par numéro de série',
      speech: 'Prononciation',
      speechMeta: 'Écoute et parle en 5 langues',
      offline: 'Hors ligne',
      offlineMeta: 'Télécharge les unités sur ton appareil',
      languages: 'Cours de langues',
      languagesMeta: 'English · Français · Italiano · Deutsch · العربية',
    },
    audience: {
      title: 'Conçu pour',
      students: 'Élèves',
      studentsText:
        'Un parcours clair de ton niveau actuel à ton objectif : leçons, entraînement avec suivi de maîtrise, séries, badges et classement de classe.',
      studentsCta: 'Passer le test de positionnement',
      teachers: 'Enseignants',
      teachersText:
        'Crée des classes, construis plans de cours et quiz, planifie des séances en direct, suis la maîtrise de chaque élève et publie ton annonce dans l\u2019annuaire.',
      teachersCta: 'Ouvrir l\u2019espace enseignant',
      parents: 'Parents',
      parentsText:
        'Relie le compte de ton enfant avec un code famille et suis ses progrès hebdomadaires et ses notes de quiz.',
      parentsCta: 'Ouvrir l\u2019espace famille',
    },
    exam: {
      title: 'Préparation bac & concours',
      text: 'Des problèmes corrigés type annales en maths, physique et chimie — avec les attentes du correcteur et les pièges classiques de chaque exercice.',
      cta: 'Découvrir la préparation',
    },
    marketplace: {
      title: 'Trouve ton enseignant',
      text: 'Parcours les enseignants approuvés, consulte leurs matières et tarifs, et envoie une demande pour rejoindre leur classe.',
      cta: 'Voir les enseignants',
    },
    plans: {
      free: 'Gratuit',
      freeMeta:
        'La première unité de chaque matière, le test de positionnement, le mode entraînement et l\u2019adhésion aux classes.',
      premium: 'Premium',
      premiumMeta:
        'Toutes les leçons de toutes les matières et de tous les niveaux, payées en toute sécurité par carte tunisienne ou e-dinar via Konnect.',
    },
    faq: {
      title: 'Questions',
      q1: 'Est-ce vraiment gratuit pour commencer ?',
      a1: 'Oui. La première unité de chaque matière, le test de positionnement et le mode entraînement sont gratuits — sans carte bancaire.',
      q2: 'Quelles langues la plateforme prend-elle en charge ?',
      a2: 'Toute l\u2019interface et toutes les leçons existent en arabe, français et anglais. Tu peux changer à tout moment.',
      q3: 'Comment rejoindre la classe de mon prof ?',
      a3: 'Demande le code de classe à ton prof et saisis-le sur ta page d\u2019accueil, ou envoie une demande depuis l\u2019annuaire des enseignants.',
      q4: 'Comment fonctionnent les paiements ?',
      a4: 'Les abonnements sont traités par Konnect et acceptent les cartes bancaires tunisiennes et l\u2019e-dinar. Les certificats et le contenu gratuit restent accessibles sans abonnement.',
    },
    final: {
      title: 'Commence à apprendre aujourd\u2019hui',
      cta: 'C\u2019est parti',
    },
  },
  common: {
    backToLearn: '← Apprendre',
    start: 'Commencer',
    done: 'Terminé',
    previous: 'Précédent',
    next: 'Suivant',
    home: 'accueil',
    levelMeta: '{{levels}} niveaux · {{lessons}} leçons',
    unitMeta: '{{units}} unités · {{lessons}} leçons',
    lessonMeta: '{{count}} leçons',
    notFound: 'Page introuvable',
    footerCopyright: '© {{year}} curiosity',
    toggleTheme: 'Basculer mode clair/sombre',
    ariaMainNav: 'Principal',
    ariaFooterNav: 'Pied de page',
    ariaLessons: 'Leçons',
    selectLanguage: 'Langue',
    close: 'Fermer',
  },
  lesson: {
    comingSoon: 'Contenu bientôt disponible.',
  },
  auth: {
    signIn: 'Se connecter',
    signUp: 'Créer un compte',
    signOut: 'Se déconnecter',
    email: 'E-mail',
    password: 'Mot de passe',
    name: 'Nom',
    google: 'Continuer avec Google',
    noAccount: 'Pas de compte ? Créez-en un',
    haveAccount: 'Déjà un compte ? Connectez-vous',
    checkEmail: 'Vérifiez votre e-mail pour confirmer votre compte.',
  },
  account: {
    title: 'Compte',
    xp: 'XP',
    streak: 'Jours de suite',
    familyCode: 'Code famille',
    classes: 'Classes',
    joinCodePlaceholder: 'Code de classe',
    join: 'Rejoindre',
    assignments: 'Devoirs',
    due: 'Pour le {{date}}',
    roles: {
      student: 'Élève',
      teacher: 'Enseignant',
      parent: 'Parent',
      admin: 'Admin',
    },
  },
  progress: {
    markDone: 'Marquer comme terminé',
    completed: 'Terminé',
    continue: 'Continuer',
  },
  practice: {
    empty: 'Réponds aux exercices des leçons pour remplir ta file de révision.',
    sessionDone: 'Révision terminée pour aujourd\'hui.',
  },
  mastery: {
    none: 'Non commencé',
    familiar: 'Découverte',
    proficient: 'Maîtrise partielle',
    mastered: 'Maîtrisé',
  },
  exercise: {
    practice: 'Exercice',
    check: 'Vérifier',
    correct: 'Correct',
    incorrect: 'Pas tout à fait',
    tryAgain: 'Réessayer',
    hint: 'Indice',
    whyWrong: 'Pourquoi ?',
    whyWrongQuestion:
      'L\'exercice demande : « {{prompt}} ». Ma réponse était « {{answer}} » et elle est fausse. Aide-moi à comprendre mon erreur sans me donner la réponse.',
  },
  tutor: {
    title: 'Tuteur',
    placeholder: 'Pose une question sur cette leçon…',
    send: 'Envoyer',
    explainDifferently: 'Expliquer autrement',
    explainRequest: 'Explique cette leçon autrement.',
    limit: 'Limite quotidienne du tuteur atteinte. Reviens demain.',
    signInPrompt: 'Connecte-toi pour interroger le tuteur',
  },
  teach: {
    title: 'Enseignement',
    className: 'Nom de la classe',
    create: 'Créer',
    joinCode: 'Code d\'accès',
    students: 'Élèves',
    assignments: 'Devoirs',
    assign: 'Assigner',
    plan: 'Plan d\'apprentissage',
    generatePlan: 'Générer le plan',
    startDate: 'Date de début',
    weeksPerUnit: 'Semaines par unité',
  },
  path: {
    title: 'Parcours d\'apprentissage',
    next: 'Prochaine leçon',
  },
  speak: {
    listen: 'Écouter',
    say: 'Répète',
    listening: 'Écoute en cours…',
    correct: 'C\'est bien ça !',
    tryAgain: 'Presque — réessaie',
  },
  board: {
    title: 'Tableau blanc',
    clear: 'Effacer tout',
    eraser: 'Gomme',
    size: 'Taille du trait',
  },
  placement: {
    title: 'Test de niveau',
    recommendation: 'Niveau recommandé pour {{subject}}',
  },
  badges: {
    title: 'Badges',
    'first-lesson': 'Première leçon',
    'ten-lessons': '10 leçons',
    'fifty-lessons': '50 leçons',
    'streak-7': 'Série de 7 jours',
    'streak-30': 'Série de 30 jours',
    'unit-complete': 'Unité terminée',
    'level-complete': 'Niveau terminé',
    'sharp-shooter': '20 exercices maîtrisés',
    polyglot: 'Deux langues',
    'quiz-ace': 'Quiz parfait',
  },
  leaderboard: {
    title: 'Classement de la semaine',
    optOut: 'Me masquer des classements de classe',
  },
  teachers: {
    title: 'Trouver un enseignant',
    rate: '{{rate}} TND / heure',
    rateLabel: 'Tarif horaire (TND)',
    request: 'Demander à rejoindre',
    sent: 'Demande envoyée',
    messagePlaceholder: 'Message à l’enseignant (optionnel)',
    requests: 'Demandes d’adhésion',
    accept: 'Accepter',
    decline: 'Refuser',
    listing: 'Mon annonce publique',
    bioPlaceholder: 'Courte bio visible par les élèves…',
    listed: 'Annonce publiée',
    pendingApproval: 'En attente de validation admin',
    save: 'Enregistrer l’annonce',
    saved: 'Enregistré',
    earnings: 'Revenus',
    payoutHint: 'Les paiements sont enregistrés manuellement par l’administrateur.',
    approve: 'Approuver',
    revoke: 'Révoquer',
    adminListings: 'Annonces des enseignants',
  },
  certificate: {
    title: 'Certificat de réussite',
    claim: 'Obtenir le certificat',
    statement: 'a terminé avec succès {{subject}} — {{level}} sur curiosity.tn',
    serial: 'Numéro',
    print: 'Imprimer',
    invalid: 'Certificat introuvable.',
    error: 'Le certificat n\'a pas pu être délivré.',
  },
  sessions: {
    title: 'Séances en direct',
    schedule: 'Planifier',
    sessionTitle: 'Titre de la séance',
    linkPlaceholder: 'Lien de réunion (Meet, Zoom…)',
    join: 'Rejoindre',
  },
  feed: {
    title: 'Annonces',
    placeholder: 'Écrire une annonce…',
    post: 'Publier',
    comment: 'Répondre',
    commentPlaceholder: 'Écrire une réponse…',
  },
  notif: {
    title: 'Notifications',
    empty: 'Aucune notification',
    assignment: 'Nouveau devoir',
    quiz: 'Nouveau quiz',
    post: 'Nouvelle annonce',
    session: 'Nouvelle séance en direct',
  },
  quiz: {
    title: 'Quiz',
    create: 'Créer un quiz',
    quizTitle: 'Titre du quiz',
    importUnit: 'Importer les questions de l\'unité',
    addQuestion: 'Ajouter une question',
    remove: 'Retirer',
    timeLimit: 'Minutes',
    question: 'Question',
    choice: 'Choix',
    correct: 'Bonne réponse',
    submit: 'Envoyer',
    yourScore: 'Ton score',
    average: 'Moyenne',
    questionsCount: '{{count}} questions',
  },
  billing: {
    title: 'Abonnement',
    monthly: 'Mensuel',
    yearly: 'Annuel',
    perMonth: '{{price}} DT / mois',
    perYear: '{{price}} DT / an',
    subscribe: 'S\'abonner',
    active: 'Actif',
    until: 'Jusqu\'au {{date}}',
    locked: 'Cette leçon nécessite un abonnement.',
    goPricing: 'Voir les offres',
    error: 'Le paiement n\'a pas pu démarrer.',
  },
  family: {
    title: 'Famille',
    link: 'Lier',
    childCodePlaceholder: 'Code famille de l\'enfant',
    lessonsThisWeek: 'leçons cette semaine',
    lessonsTotal: 'leçons au total',
  },
  admin: {
    title: 'Studio de contenu',
    draft: 'Brouillon',
    published: 'Publié',
    edit: 'Modifier',
    preview: 'Aperçu',
    saveDraft: 'Enregistrer le brouillon',
    publish: 'Publier',
    addBlock: 'Ajouter un bloc',
    remove: 'Supprimer',
    moveUp: 'Monter',
    moveDown: 'Descendre',
    fields: {
      text: 'Texte',
      item: 'Élément',
      question: 'Question',
      answer: 'Réponse',
      prompt: 'Énoncé',
      choice: 'Choix',
      tolerance: 'Tolérance',
      unit: 'Unité',
      hint: 'Indice',
      step: 'Étape',
      alt: 'Texte alternatif',
      caption: 'Légende',
    },
  },
  offline: {
    download: 'Enregistrer hors ligne',
    downloaded: 'Disponible hors ligne',
  },
  curriculum: {
    subjects: {
      mathematics: 'Mathématiques',
      physics: 'Physique',
      chemistry: 'Chimie',
      'web-development': 'Développement web',
      'exam-prep': 'Préparation aux examens',
      english: 'Anglais',
      french: 'Français',
      italian: 'Italien',
      german: 'Allemand',
      arabic: 'Arabe',
    },
    levels: {
      primary: 'Primaire',
      middle: 'Collège',
      high: 'Lycée',
      undergraduate: 'Licence',
      graduate: 'Master',
      phd: 'Doctorat',
      beginner: 'Débutant',
      intermediate: 'Intermédiaire',
      advanced: 'Avancé',
      bac: 'Bac',
      concours: 'Concours',
    },
    units: {
      mathematics: {
        primary: {
          counting: 'Comptage',
          shapes: 'Formes',
          operations: 'Opérations',
        },
        middle: {
          ratios: 'Ratios',
          algebra: 'Algèbre',
          geometry: 'Géométrie',
        },
        high: {
          calculus: 'Calcul',
          'linear-algebra': 'Algèbre linéaire',
          probability: 'Probabilités',
        },
        undergraduate: {
          analysis: 'Analyse',
          'abstract-algebra': 'Algèbre abstraite',
          'differential-equations': 'Équations différentielles',
        },
        graduate: {
          topology: 'Topologie',
          'functional-analysis': 'Analyse fonctionnelle',
        },
        phd: {
          research: 'Recherche',
        },
      },
      physics: {
        primary: {
          motion: 'Mouvement',
          'light-sound': 'Lumière et son',
          matter: 'Matière',
        },
        middle: {
          energy: 'Énergie',
          electricity: 'Électricité',
          forces: 'Forces',
        },
        high: {
          mechanics: 'Mécanique',
          thermo: 'Thermodynamique',
          em: 'Électromagnétisme',
        },
        undergraduate: {
          classical: 'Mécanique classique',
          quantum: 'Mécanique quantique',
          statistical: 'Mécanique statistique',
        },
        graduate: {
          qft: 'Théorie quantique des champs',
          gr: 'Relativité générale',
        },
        phd: {
          frontier: 'Physique de pointe',
        },
      },
      chemistry: {
        primary: {
          materials: 'Matériaux',
          mixtures: 'Mélanges',
          safety: 'Sécurité',
        },
        middle: {
          atoms: 'Atomes',
          reactions: 'Réactions',
          'acids-bases': 'Acides et bases',
        },
        high: {
          stoichiometry: 'Stœchiométrie',
          'organic-intro': 'Introduction à la chimie organique',
          'physical-chem': 'Chimie physique',
        },
        undergraduate: {
          organic: 'Chimie organique',
          inorganic: 'Chimie inorganique',
          physical: 'Chimie physique',
        },
        graduate: {
          spectroscopy: 'Spectroscopie',
          synthesis: 'Synthèse',
        },
        phd: {
          research: 'Recherche',
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
          fullstack: 'MERN full-stack',
        },
      },
      'exam-prep': {
        bac: {
          'bac-math': 'Mathématiques du bac',
          'bac-physics': 'Physique du bac',
          'bac-chemistry': 'Chimie du bac',
        },
        concours: {
          'concours-math': 'Mathématiques de concours',
          'concours-physics': 'Physique de concours',
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
            '01': "Qu'est-ce qu'un nombre ?",
            '02': 'Compter des objets',
            '03': 'Comparer des quantités',
          },
          shapes: {
            '01': 'Formes de base',
            '02': 'Motifs',
            '03': 'Symétrie',
          },
          operations: {
            '01': "Bases de l'addition",
            '02': 'Bases de la soustraction',
            '03': 'Problèmes écrits',
          },
        },
        middle: {
          ratios: {
            '01': 'Ratios',
            '02': 'Pourcentages',
            '03': 'Raisonnement proportionnel',
          },
          algebra: {
            '01': 'Variables',
            '02': 'Expressions linéaires',
            '03': 'Équations simples',
          },
          geometry: {
            '01': 'Angles',
            '02': 'Aire et périmètre',
            '03': 'Volume',
          },
        },
        high: {
          calculus: {
            '01': 'Limites',
            '02': 'Dérivées',
            '03': 'Intégrales',
          },
          'linear-algebra': {
            '01': 'Vecteurs',
            '02': 'Matrices',
            '03': "Systèmes d'équations",
          },
          probability: {
            '01': 'Règles de probabilité',
            '02': 'Distributions',
            '03': "Bases de l'inférence",
          },
        },
        undergraduate: {
          analysis: {
            '01': 'Suites et séries',
            '02': 'Continuité',
            '03': 'Différentiation et intégration',
          },
          'abstract-algebra': {
            '01': 'Groupes',
            '02': 'Anneaux',
            '03': 'Corps',
          },
          'differential-equations': {
            '01': 'EDO du premier ordre',
            '02': 'Systèmes linéaires',
            '03': 'Méthodes de Fourier',
          },
        },
        graduate: {
          topology: {
            '01': 'Espaces métriques',
            '02': 'Compacité',
            '03': 'Connexité',
          },
          'functional-analysis': {
            '01': 'Espaces de Banach',
            '02': 'Espaces de Hilbert',
            '03': 'Opérateurs',
          },
        },
        phd: {
          research: {
            '01': 'Formulation du problème',
            '02': 'Revue de la littérature',
            '03': 'Contributions originales',
          },
        },
      },
      physics: {
        primary: {
          motion: {
            '01': 'Pousser et tirer',
            '02': 'Vitesse et direction',
            '03': 'Machines simples',
          },
          'light-sound': {
            '01': 'Comment nous voyons',
            '02': 'Ombres et réflexion',
            '03': 'Comment nous entendons',
          },
          matter: {
            '01': 'Solides, liquides et gaz',
            '02': 'Masse et poids',
            '03': 'États de la matière',
          },
        },
        middle: {
          energy: {
            '01': "Formes d'énergie",
            '02': "Conservation de l'énergie",
            '03': 'Propriétés des ondes',
          },
          electricity: {
            '01': 'Charge et courant',
            '02': 'Circuits',
            '03': 'Magnétisme',
          },
          forces: {
            '01': 'Lois de Newton',
            '02': 'Friction',
            '03': 'Gravité',
          },
        },
        high: {
          mechanics: {
            '01': 'Cinématique',
            '02': 'Dynamique',
            '03': 'Mouvement de rotation',
          },
          thermo: {
            '01': 'Chaleur et température',
            '02': 'Lois de la thermodynamique',
            '03': 'Entropie',
          },
          em: {
            '01': 'Champs électriques',
            '02': 'Champs magnétiques',
            '03': 'Introduction aux équations de Maxwell',
          },
        },
        undergraduate: {
          classical: {
            '01': 'Mécanique lagrangienne',
            '02': 'Mécanique hamiltonienne',
            '03': 'Forces centrales',
          },
          quantum: {
            '01': 'Fonctions d\'onde',
            '02': 'Opérateurs',
            '03': 'Moment angulaire',
          },
          statistical: {
            '01': 'Ensembles',
            '02': 'Fonctions de partition',
            '03': 'Statistiques quantiques',
          },
        },
        graduate: {
          qft: {
            '01': 'Quantification canonique',
            '02': 'Intégrales de chemin',
            '03': 'Introduction à la renormalisation',
          },
          gr: {
            '01': 'Géométrie de l\'espace-temps',
            '02': 'Équations d\'Einstein',
            '03': 'Trous noirs',
          },
        },
        phd: {
          frontier: {
            '01': 'Problèmes ouverts',
            '02': 'Conception expérimentale',
            '03': 'Publication et évaluation par les pairs',
          },
        },
      },
      chemistry: {
        primary: {
          materials: {
            '01': 'De quoi sont faits les objets',
            '02': 'Dur vs mou',
            '03': 'Changements chaud vs froid',
          },
          mixtures: {
            '01': 'Mélanger des substances',
            '02': 'Dissolution',
            '03': 'Séparer les mélanges',
          },
          safety: {
            '01': 'Règles de sécurité en laboratoire',
            '02': "Compétences d'observation",
            '03': 'Enregistrement des résultats',
          },
        },
        middle: {
          atoms: {
            '01': 'Structure atomique',
            '02': 'Tableau périodique',
            '03': 'Isotopes',
          },
          reactions: {
            '01': "Signes d'une réaction",
            '02': 'Équilibrer les équations',
            '03': 'Types de réactions',
          },
          'acids-bases': {
            '01': 'Échelle de pH',
            '02': 'Neutralisation',
            '03': 'Acides et bases du quotidien',
          },
        },
        high: {
          stoichiometry: {
            '01': 'Concept de mole',
            '02': 'Réactifs limitants',
            '03': 'Rendement et pureté',
          },
          'organic-intro': {
            '01': 'Hydrocarbures',
            '02': 'Groupes fonctionnels',
            '03': 'Introduction aux mécanismes de réaction',
          },
          'physical-chem': {
            '01': 'Thermochimie',
            '02': 'Cinétique',
            '03': 'Équilibre',
          },
        },
        undergraduate: {
          organic: {
            '01': 'Stéréochimie',
            '02': 'Substitution et élimination',
            '03': 'Introduction à la spectroscopie',
          },
          inorganic: {
            '01': 'Composés de coordination',
            '02': 'Théorie du champ cristallin',
            '03': 'Organométalliques',
          },
          physical: {
            '01': 'Chimie quantique',
            '02': 'Thermodynamique statistique',
            '03': 'Électrochimie',
          },
        },
        graduate: {
          spectroscopy: {
            '01': 'RMN',
            '02': 'Spectrométrie de masse',
            '03': 'Diffraction aux rayons X',
          },
          synthesis: {
            '01': 'Rétrosynthèse',
            '02': 'Catalyse',
            '03': 'Méthodes asymétriques',
          },
        },
        phd: {
          research: {
            '01': 'Conception d\'hypothèse',
            '02': 'Instrumentation avancée',
            '03': 'Thèse et soutenance',
          },
        },
      },
      'web-development': {
        beginner: {
          javascript: {
            '01': 'Variables et types',
            '02': 'Fonctions',
            '03': 'Tableaux et objets',
          },
          node: {
            '01': "Node.js, c'est quoi ?",
            '02': 'Modules et npm',
            '03': 'Ton premier serveur',
          },
        },
        intermediate: {
          mongodb: {
            '01': 'Documents et collections',
            '02': 'Opérations CRUD',
            '03': 'Modélisation des données',
          },
          express: {
            '01': 'Routage',
            '02': 'Middleware',
            '03': 'API REST',
          },
        },
        advanced: {
          react: {
            '01': 'Composants et JSX',
            '02': 'État et props',
            '03': 'Hooks et effets',
          },
          fullstack: {
            '01': 'Relier front et back',
            '02': 'Authentification',
            '03': 'Déploiement',
          },
        },
      },
      'exam-prep': {
        bac: {
          'bac-math': {
            '01': 'Fonctions & analyse',
            '02': 'Suites & intégrales',
            '03': 'Nombres complexes & géométrie',
          },
          'bac-physics': {
            '01': 'Problèmes de mécanique',
            '02': 'Électricité & oscillateurs',
            '03': 'Ondes & physique nucléaire',
          },
          'bac-chemistry': {
            '01': 'Cinétique & équilibre',
            '02': 'Acides & bases',
            '03': 'Chimie organique',
          },
        },
        concours: {
          'concours-math': {
            '01': 'Exercices d\'algèbre',
            '02': 'Exercices d\'analyse',
            '03': 'Stratégies de résolution',
          },
          'concours-physics': {
            '01': 'Mécanique avancée',
            '02': 'Exercices d\'électromagnétisme',
            '03': 'Méthode d\'examen',
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
