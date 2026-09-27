import type { Language } from '../i18n'

export type LocalizedText = Record<Language, string>

export type McqChoice = {
  text: LocalizedText
  explanation?: LocalizedText
}

export type McqBlock = {
  type: 'mcq'
  id: string
  prompt: LocalizedText
  choices: McqChoice[]
  correctIndex: number
}

export type NumericInputBlock = {
  type: 'numericInput'
  id: string
  prompt: LocalizedText
  answer: number
  tolerance?: number
  unit?: string
  hint?: LocalizedText
}

export type OrderStepsBlock = {
  type: 'orderSteps'
  id: string
  prompt: LocalizedText
  /** Steps listed in the correct order; they are shuffled for display. */
  steps: LocalizedText[]
}

export type ExerciseBlock = McqBlock | NumericInputBlock | OrderStepsBlock

export type LessonBlock =
  | { type: 'paragraph'; text: LocalizedText }
  | { type: 'list'; items: LocalizedText[] }
  | { type: 'example'; question: LocalizedText; answer: LocalizedText }
  | { type: 'counter'; count: number }
  | { type: 'shapes'; shapes: ('circle' | 'square' | 'triangle')[] }
  | { type: 'numberLine'; start: number; end: number; mark?: number }
  | { type: 'compare'; left: number; right: number }
  | { type: 'ratio'; a: number; b: number }
  | { type: 'atom'; protons: number; neutrons: number; electrons: number }
  | { type: 'force'; direction: 'left' | 'right' }
  | { type: 'states'; highlight: 'solid' | 'liquid' | 'gas' }
  | { type: 'ph'; value: number }
  | { type: 'circuit'; closed: boolean }
  | { type: 'image'; src: string; alt: LocalizedText }
  | { type: 'video'; src: string; caption?: LocalizedText }
  | { type: 'code'; code: string; language?: string }
  | {
      type: 'speak'
      /** Target phrase in the language being learned. */
      phrase: string
      /** BCP 47 tag for TTS/recognition, e.g. 'fr-FR'. */
      lang: string
      translation?: LocalizedText
    }
  | ExerciseBlock

export const exerciseBlockTypes = ['mcq', 'numericInput', 'orderSteps'] as const

export function isExerciseBlock(block: LessonBlock): block is ExerciseBlock {
  return (exerciseBlockTypes as readonly string[]).includes(block.type)
}

export type LessonContent = {
  blocks: LessonBlock[]
}

export type LessonContentKey = string

export function lessonKey(
  subject: string,
  level: string,
  unit: string,
  lesson: string,
): LessonContentKey {
  return `${subject}.${level}.${unit}.${lesson}`
}

export function localized(en: string, fr: string, ar: string): LocalizedText {
  return { en, fr, ar }
}

export function pickLocalized(text: LocalizedText, language: string): string {
  if (language === 'fr') return text.fr
  if (language === 'ar') return text.ar
  return text.en
}
