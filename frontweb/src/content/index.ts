import type { LessonContent, LessonContentKey } from './types'
import { primaryMiddleLessons } from './primaryMiddle'
import { webDevelopmentLessons } from './webDevelopment'
import { mathematicsAdvancedLessons } from './advanced/mathematics'
import { physicsAdvancedLessons } from './advanced/physics'
import { chemistryAdvancedLessons } from './advanced/chemistry'
import { englishLessons } from './languages/english'
import { frenchLessons } from './languages/french'
import { italianLessons } from './languages/italian'
import { germanLessons } from './languages/german'
import { arabicLessons } from './languages/arabic'
import { examPrepLessons } from './examPrep'
import { speakingBlocks } from './languages/speaking'

const registry: Record<LessonContentKey, LessonContent> = {
  ...primaryMiddleLessons,
  ...webDevelopmentLessons,
  ...mathematicsAdvancedLessons,
  ...physicsAdvancedLessons,
  ...chemistryAdvancedLessons,
  ...englishLessons,
  ...frenchLessons,
  ...italianLessons,
  ...germanLessons,
  ...arabicLessons,
  ...examPrepLessons,
}

// Append pronunciation practice to the language lessons that have it.
for (const [key, blocks] of Object.entries(speakingBlocks)) {
  const lesson = registry[key]
  if (lesson) {
    registry[key] = { ...lesson, blocks: [...lesson.blocks, ...blocks] }
  }
}

export function getLessonContent(key: LessonContentKey): LessonContent | undefined {
  return registry[key]
}

export function hasLessonContent(key: LessonContentKey): boolean {
  return key in registry
}
