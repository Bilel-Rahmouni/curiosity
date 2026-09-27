import { mathematicsLessons } from './mathematics'
import { mathematicsExercises } from './mathematicsExercises'
import { physicsLessons } from './physics'
import { chemistryLessons } from './chemistry'
import type { LessonBlock, LessonContent } from '../types'

function withExercises(
  lessons: Record<string, LessonContent>,
  exercises: Record<string, LessonBlock[]>,
): Record<string, LessonContent> {
  const merged: Record<string, LessonContent> = { ...lessons }
  for (const [key, blocks] of Object.entries(exercises)) {
    merged[key] = { blocks: [...(merged[key]?.blocks ?? []), ...blocks] }
  }
  return merged
}

export const primaryMiddleLessons = {
  ...withExercises(mathematicsLessons, mathematicsExercises),
  ...physicsLessons,
  ...chemistryLessons,
}
