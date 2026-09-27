import { subjects, getUnit } from '../data/curriculum'
import { getLessonContent } from '../content'
import {
  isExerciseBlock,
  lessonKey,
  type ExerciseBlock,
} from '../content/types'

export type ExerciseRef = {
  subjectSlug: string
  levelSlug: string
  unitSlug: string
  lessonSlug: string
  block: ExerciseBlock
}

export function exerciseKey(ref: ExerciseRef): string {
  return `${lessonKey(ref.subjectSlug, ref.levelSlug, ref.unitSlug, ref.lessonSlug)}#${ref.block.id}`
}

export function getUnitExercises(
  subjectSlug: string,
  levelSlug: string,
  unitSlug: string,
): ExerciseRef[] {
  const result = getUnit(subjectSlug, levelSlug, unitSlug)
  if (!result) return []
  const refs: ExerciseRef[] = []
  for (const lesson of result.unit.lessons) {
    const content = getLessonContent(
      lessonKey(subjectSlug, levelSlug, unitSlug, lesson.slug),
    )
    if (!content) continue
    for (const block of content.blocks) {
      if (isExerciseBlock(block)) {
        refs.push({
          subjectSlug,
          levelSlug,
          unitSlug,
          lessonSlug: lesson.slug,
          block,
        })
      }
    }
  }
  return refs
}

export function getAllExercises(): ExerciseRef[] {
  const refs: ExerciseRef[] = []
  for (const subject of subjects) {
    for (const level of subject.levels) {
      for (const unit of level.units) {
        refs.push(...getUnitExercises(subject.slug, level.slug, unit.slug))
      }
    }
  }
  return refs
}

export type MasteryLevel = 'none' | 'familiar' | 'proficient' | 'mastered'

export function computeMastery(input: {
  exerciseCount: number
  correctCount: number
  lessonsCompleted: number
  lessonCount: number
}): MasteryLevel {
  const { exerciseCount, correctCount, lessonsCompleted, lessonCount } = input

  if (exerciseCount === 0) {
    if (lessonsCompleted === 0) return 'none'
    return lessonsCompleted >= lessonCount ? 'mastered' : 'familiar'
  }

  if (correctCount === 0 && lessonsCompleted === 0) return 'none'
  if (correctCount >= exerciseCount && lessonsCompleted >= lessonCount) {
    return 'mastered'
  }
  if (correctCount / exerciseCount >= 0.6) return 'proficient'
  return 'familiar'
}

export type AttemptSummary = {
  correctStreak: number
  lastCorrect: boolean
  lastAt: string
  everCorrect: boolean
}

export function foldAttempt(
  previous: AttemptSummary | undefined,
  correct: boolean,
  at: string,
): AttemptSummary {
  return {
    correctStreak: correct ? (previous?.correctStreak ?? 0) + 1 : 0,
    lastCorrect: correct,
    lastAt: at,
    everCorrect: correct || (previous?.everCorrect ?? false),
  }
}

const DAY_MS = 86_400_000

/** Spaced-repetition-lite: wrong answers are due immediately, correct ones after 1, 3, then 7 days. */
export function isDue(summary: AttemptSummary, now: number): boolean {
  if (!summary.lastCorrect) return true
  const days =
    summary.correctStreak >= 3 ? 7 : summary.correctStreak === 2 ? 3 : 1
  return now - new Date(summary.lastAt).getTime() >= days * DAY_MS
}

export function buildPracticeQueue(
  attempts: Record<string, AttemptSummary>,
  now = Date.now(),
): ExerciseRef[] {
  const due: { ref: ExerciseRef; lastAt: string }[] = []
  for (const ref of getAllExercises()) {
    const summary = attempts[exerciseKey(ref)]
    if (summary && isDue(summary, now)) {
      due.push({ ref, lastAt: summary.lastAt })
    }
  }
  due.sort((a, b) => a.lastAt.localeCompare(b.lastAt))
  return due.map((d) => d.ref)
}
