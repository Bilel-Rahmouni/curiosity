import { subjects } from '../data/curriculum'
import { lessonKey } from '../content/types'
import type { Profile } from '../lib/supabase'
import type { AttemptSummary } from './mastery'

export type BadgeId =
  | 'first-lesson'
  | 'ten-lessons'
  | 'fifty-lessons'
  | 'streak-7'
  | 'streak-30'
  | 'unit-complete'
  | 'level-complete'
  | 'sharp-shooter'
  | 'polyglot'
  | 'quiz-ace'

export type Badge = {
  id: BadgeId
  earned: boolean
}

const LANGUAGE_SUBJECTS = new Set([
  'english',
  'french',
  'italian',
  'german',
  'arabic',
])

export function deriveBadges(input: {
  completed: Set<string>
  attempts: Record<string, AttemptSummary>
  profile: Profile | null
  quizScores: number[]
}): Badge[] {
  const { completed, attempts, profile, quizScores } = input

  let unitComplete = false
  let levelComplete = false
  const languagesTouched = new Set<string>()

  for (const subject of subjects) {
    for (const level of subject.levels) {
      let allUnitsDone = level.units.length > 0
      for (const unit of level.units) {
        const unitDone =
          unit.lessons.length > 0 &&
          unit.lessons.every((lesson) =>
            completed.has(
              lessonKey(subject.slug, level.slug, unit.slug, lesson.slug),
            ),
          )
        if (unitDone) unitComplete = true
        else allUnitsDone = false
      }
      if (allUnitsDone) levelComplete = true
    }
    if (LANGUAGE_SUBJECTS.has(subject.slug)) {
      const touched = [...completed].some((key) =>
        key.startsWith(`${subject.slug}.`),
      )
      if (touched) languagesTouched.add(subject.slug)
    }
  }

  const exercisesMastered = Object.values(attempts).filter(
    (a) => a.correctStreak >= 3,
  ).length

  return [
    { id: 'first-lesson', earned: completed.size >= 1 },
    { id: 'ten-lessons', earned: completed.size >= 10 },
    { id: 'fifty-lessons', earned: completed.size >= 50 },
    { id: 'streak-7', earned: (profile?.streak ?? 0) >= 7 },
    { id: 'streak-30', earned: (profile?.streak ?? 0) >= 30 },
    { id: 'unit-complete', earned: unitComplete },
    { id: 'level-complete', earned: levelComplete },
    { id: 'sharp-shooter', earned: exercisesMastered >= 20 },
    { id: 'polyglot', earned: languagesTouched.size >= 2 },
    { id: 'quiz-ace', earned: quizScores.some((s) => s >= 100) },
  ]
}
