export type EducationLevelSlug =
  | 'primary'
  | 'middle'
  | 'high'
  | 'undergraduate'
  | 'graduate'
  | 'phd'
  | 'beginner'
  | 'intermediate'
  | 'advanced'
  | 'bac'
  | 'concours'

export type SubjectSlug =
  | 'mathematics'
  | 'physics'
  | 'chemistry'
  | 'web-development'
  | 'exam-prep'
  | 'english'
  | 'french'
  | 'italian'
  | 'german'
  | 'arabic'

export type Lesson = {
  slug: string
}

export type Unit = {
  slug: string
  lessons: Lesson[]
}

export type Level = {
  slug: EducationLevelSlug
  units: Unit[]
}

export type Subject = {
  slug: SubjectSlug
  levels: Level[]
}

function makeLessons(count: number): Lesson[] {
  return Array.from({ length: count }, (_, i) => ({
    slug: String(i + 1).padStart(2, '0'),
  }))
}

function unit(slug: string, lessonCount: number): Unit {
  return { slug, lessons: makeLessons(lessonCount) }
}

function level(slug: EducationLevelSlug, units: Unit[]): Level {
  return { slug, units }
}

export const subjects: Subject[] = [
  {
    slug: 'mathematics',
    levels: [
      level('primary', [
        unit('counting', 3),
        unit('shapes', 3),
        unit('operations', 3),
      ]),
      level('middle', [
        unit('ratios', 3),
        unit('algebra', 3),
        unit('geometry', 3),
      ]),
      level('high', [
        unit('calculus', 3),
        unit('linear-algebra', 3),
        unit('probability', 3),
      ]),
      level('undergraduate', [
        unit('analysis', 3),
        unit('abstract-algebra', 3),
        unit('differential-equations', 3),
      ]),
      level('graduate', [
        unit('topology', 3),
        unit('functional-analysis', 3),
      ]),
      level('phd', [unit('research', 3)]),
    ],
  },
  {
    slug: 'physics',
    levels: [
      level('primary', [
        unit('motion', 3),
        unit('light-sound', 3),
        unit('matter', 3),
      ]),
      level('middle', [
        unit('energy', 3),
        unit('electricity', 3),
        unit('forces', 3),
      ]),
      level('high', [
        unit('mechanics', 3),
        unit('thermo', 3),
        unit('em', 3),
      ]),
      level('undergraduate', [
        unit('classical', 3),
        unit('quantum', 3),
        unit('statistical', 3),
      ]),
      level('graduate', [
        unit('qft', 3),
        unit('gr', 3),
      ]),
      level('phd', [unit('frontier', 3)]),
    ],
  },
  {
    slug: 'chemistry',
    levels: [
      level('primary', [
        unit('materials', 3),
        unit('mixtures', 3),
        unit('safety', 3),
      ]),
      level('middle', [
        unit('atoms', 3),
        unit('reactions', 3),
        unit('acids-bases', 3),
      ]),
      level('high', [
        unit('stoichiometry', 3),
        unit('organic-intro', 3),
        unit('physical-chem', 3),
      ]),
      level('undergraduate', [
        unit('organic', 3),
        unit('inorganic', 3),
        unit('physical', 3),
      ]),
      level('graduate', [
        unit('spectroscopy', 3),
        unit('synthesis', 3),
      ]),
      level('phd', [unit('research', 3)]),
    ],
  },
  {
    slug: 'web-development',
    levels: [
      level('beginner', [unit('javascript', 3), unit('node', 3)]),
      level('intermediate', [unit('mongodb', 3), unit('express', 3)]),
      level('advanced', [unit('react', 3), unit('fullstack', 3)]),
    ],
  },
  {
    slug: 'exam-prep',
    levels: [
      level('bac', [
        unit('bac-math', 3),
        unit('bac-physics', 3),
        unit('bac-chemistry', 3),
      ]),
      level('concours', [
        unit('concours-math', 3),
        unit('concours-physics', 3),
      ]),
    ],
  },
  languageSubject('english'),
  languageSubject('french'),
  languageSubject('italian'),
  languageSubject('german'),
  languageSubject('arabic'),
]

function languageSubject(slug: SubjectSlug): Subject {
  return {
    slug,
    levels: [
      level('beginner', [unit('basics', 3), unit('phrases', 3)]),
      level('intermediate', [unit('grammar', 3), unit('conversation', 3)]),
      level('advanced', [unit('fluency', 3), unit('culture', 3)]),
    ],
  }
}

export function getSubject(slug: string) {
  return subjects.find((s) => s.slug === slug)
}

export function getLevel(subjectSlug: string, levelSlug: string) {
  const subject = getSubject(subjectSlug)
  if (!subject) return undefined
  const levelMatch = subject.levels.find((l) => l.slug === levelSlug)
  if (!levelMatch) return undefined
  return { subject, level: levelMatch }
}

export function getUnit(
  subjectSlug: string,
  levelSlug: string,
  unitSlug: string,
) {
  const result = getLevel(subjectSlug, levelSlug)
  if (!result) return undefined
  const unitMatch = result.level.units.find((u) => u.slug === unitSlug)
  if (!unitMatch) return undefined
  return { ...result, unit: unitMatch }
}

export function getLesson(
  subjectSlug: string,
  levelSlug: string,
  unitSlug: string,
  lessonSlug: string,
) {
  const result = getUnit(subjectSlug, levelSlug, unitSlug)
  if (!result) return undefined
  const lesson = result.unit.lessons.find((l) => l.slug === lessonSlug)
  if (!lesson) return undefined
  return { ...result, lesson }
}

export function countLessonsInLevel(level: Level) {
  return level.units.reduce((sum, u) => sum + u.lessons.length, 0)
}

export function countLessonsInSubject(subject: Subject) {
  return subject.levels.reduce((sum, l) => sum + countLessonsInLevel(l), 0)
}

export function lessonPath(
  subjectSlug: string,
  levelSlug: string,
  unitSlug: string,
  lessonSlug: string,
) {
  return `/learn/${subjectSlug}/${levelSlug}/${unitSlug}/${lessonSlug}`
}

export function unitPath(
  subjectSlug: string,
  levelSlug: string,
  unitSlug: string,
) {
  return `/learn/${subjectSlug}/${levelSlug}/${unitSlug}`
}

export function levelPath(subjectSlug: string, levelSlug: string) {
  return `/learn/${subjectSlug}/${levelSlug}`
}

export function subjectPath(subjectSlug: string) {
  return `/learn/${subjectSlug}`
}
