import { supabase } from './supabase'
import { pickLocalized, type LessonBlock } from '../content/types'

export type TutorMessage = {
  role: 'user' | 'assistant'
  content: string
}

export type TutorLessonMeta = {
  subjectSlug: string
  levelSlug: string
  unitSlug: string
  lessonSlug: string
  title: string
}

/** Flattens lesson blocks into plain text used as LLM context. */
export function buildLessonText(blocks: LessonBlock[], language: string): string {
  const parts: string[] = []
  for (const block of blocks) {
    switch (block.type) {
      case 'paragraph':
        parts.push(pickLocalized(block.text, language))
        break
      case 'list':
        parts.push(
          block.items.map((item) => `- ${pickLocalized(item, language)}`).join('\n'),
        )
        break
      case 'example':
        parts.push(
          `Example: ${pickLocalized(block.question, language)} Answer: ${pickLocalized(block.answer, language)}`,
        )
        break
      case 'code':
        parts.push(`Code example:\n${block.code}`)
        break
      case 'speak':
        parts.push(`Pronunciation practice: ${block.phrase}`)
        break
      case 'mcq':
      case 'numericInput':
      case 'orderSteps':
        parts.push(`Exercise: ${pickLocalized(block.prompt, language)}`)
        break
      default:
        break
    }
  }
  return parts.join('\n\n')
}

export type TutorResult =
  | { ok: true; reply: string }
  | { ok: false; error: 'limit' | 'unavailable' }

export async function askTutor(payload: {
  messages: TutorMessage[]
  lesson: TutorLessonMeta
  lessonText: string
  language: string
  mode: 'chat' | 'explain'
}): Promise<TutorResult> {
  if (!supabase) return { ok: false, error: 'unavailable' }
  const { data, error } = await supabase.functions.invoke('ai-tutor', {
    body: payload,
  })
  if (error) {
    return { ok: false, error: 'unavailable' }
  }
  const body = data as { reply?: string; error?: string }
  if (body.error === 'limit') return { ok: false, error: 'limit' }
  if (!body.reply) return { ok: false, error: 'unavailable' }
  return { ok: true, reply: body.reply }
}
