import { lessonKey, localized as L, type LessonBlock } from '../types'

/**
 * Pronunciation blocks appended to existing language lessons at registry
 * build time (see ../index.ts). Keyed by lesson content key.
 */
export const speakingBlocks: Record<string, LessonBlock[]> = {
  [lessonKey('english', 'beginner', 'basics', '01')]: [
    {
      type: 'speak',
      phrase: 'Hello, how are you?',
      lang: 'en-US',
      translation: L(
        'Hello, how are you?',
        'Bonjour, comment vas-tu ?',
        'مرحباً، كيف حالك؟',
      ),
    },
  ],
  [lessonKey('english', 'beginner', 'phrases', '01')]: [
    {
      type: 'speak',
      phrase: 'Nice to meet you.',
      lang: 'en-US',
      translation: L(
        'Nice to meet you.',
        'Enchanté.',
        'سعيد بلقائك.',
      ),
    },
  ],
  [lessonKey('french', 'beginner', 'basics', '01')]: [
    {
      type: 'speak',
      phrase: 'Bonjour, comment ça va ?',
      lang: 'fr-FR',
      translation: L(
        'Hello, how are you?',
        'Bonjour, comment ça va ?',
        'مرحباً، كيف حالك؟',
      ),
    },
  ],
  [lessonKey('french', 'beginner', 'phrases', '01')]: [
    {
      type: 'speak',
      phrase: 'Enchanté de faire votre connaissance.',
      lang: 'fr-FR',
      translation: L(
        'Nice to meet you.',
        'Enchanté de faire votre connaissance.',
        'سعيد بلقائك.',
      ),
    },
  ],
  [lessonKey('italian', 'beginner', 'basics', '01')]: [
    {
      type: 'speak',
      phrase: 'Ciao, come stai?',
      lang: 'it-IT',
      translation: L(
        'Hi, how are you?',
        'Salut, comment vas-tu ?',
        'مرحباً، كيف حالك؟',
      ),
    },
  ],
  [lessonKey('italian', 'beginner', 'phrases', '01')]: [
    {
      type: 'speak',
      phrase: 'Piacere di conoscerti.',
      lang: 'it-IT',
      translation: L(
        'Nice to meet you.',
        'Enchanté.',
        'سعيد بلقائك.',
      ),
    },
  ],
  [lessonKey('german', 'beginner', 'basics', '01')]: [
    {
      type: 'speak',
      phrase: 'Hallo, wie geht es dir?',
      lang: 'de-DE',
      translation: L(
        'Hello, how are you?',
        'Bonjour, comment vas-tu ?',
        'مرحباً، كيف حالك؟',
      ),
    },
  ],
  [lessonKey('german', 'beginner', 'phrases', '01')]: [
    {
      type: 'speak',
      phrase: 'Freut mich, dich kennenzulernen.',
      lang: 'de-DE',
      translation: L(
        'Nice to meet you.',
        'Enchanté.',
        'سعيد بلقائك.',
      ),
    },
  ],
  [lessonKey('arabic', 'beginner', 'basics', '01')]: [
    {
      type: 'speak',
      phrase: 'مرحباً، كيف حالك؟',
      lang: 'ar-SA',
      translation: L(
        'Hello, how are you?',
        'Bonjour, comment vas-tu ?',
        'مرحباً، كيف حالك؟',
      ),
    },
  ],
  [lessonKey('arabic', 'beginner', 'phrases', '01')]: [
    {
      type: 'speak',
      phrase: 'تشرفت بمعرفتك.',
      lang: 'ar-SA',
      translation: L(
        'Nice to meet you.',
        'Enchanté.',
        'تشرفت بمعرفتك.',
      ),
    },
  ],
}
