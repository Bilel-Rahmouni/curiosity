import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from 'react'
import { useTranslation } from 'react-i18next'
import { useAuth } from '../../auth/AuthProvider'
import {
  askTutor,
  type TutorLessonMeta,
  type TutorMessage,
} from '../../lib/tutor'
import { trackEvent } from '../../lib/analytics'

type TutorContextValue = {
  available: boolean
  open: boolean
  setOpen: (open: boolean) => void
  messages: TutorMessage[]
  busy: boolean
  limitReached: boolean
  send: (text: string) => void
  explainDifferently: () => void
  askAboutMistake: (question: string) => void
}

const TutorContext = createContext<TutorContextValue | null>(null)

export function useTutor(): TutorContextValue {
  const value = useContext(TutorContext)
  if (!value) throw new Error('useTutor must be used within TutorProvider')
  return value
}

export function useTutorMaybe(): TutorContextValue | null {
  return useContext(TutorContext)
}

type TutorProviderProps = {
  lesson: TutorLessonMeta
  lessonText: string
  children: ReactNode
}

export function TutorProvider({
  lesson,
  lessonText,
  children,
}: TutorProviderProps) {
  const { i18n } = useTranslation()
  const { configured, user } = useAuth()
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<TutorMessage[]>([])
  const [busy, setBusy] = useState(false)
  const [limitReached, setLimitReached] = useState(false)

  const available = configured && Boolean(user)

  const ask = useCallback(
    (text: string, mode: 'chat' | 'explain') => {
      if (busy) return
      const nextMessages: TutorMessage[] = [
        ...messages,
        { role: 'user', content: text },
      ]
      setMessages(nextMessages)
      setOpen(true)
      setBusy(true)
      trackEvent('tutor_message', { lesson: lesson.lessonSlug, mode })
      void askTutor({
        messages: nextMessages,
        lesson,
        lessonText,
        language: i18n.language,
        mode,
      }).then((result) => {
        setBusy(false)
        if (result.ok) {
          setMessages((prev) => [
            ...prev,
            { role: 'assistant', content: result.reply },
          ])
        } else if (result.error === 'limit') {
          setLimitReached(true)
        } else {
          setMessages((prev) => prev.slice(0, -1))
        }
      })
    },
    [busy, messages, lesson, lessonText, i18n.language],
  )

  const send = useCallback((text: string) => ask(text, 'chat'), [ask])

  const explainDifferently = useCallback(() => {
    ask(i18n.t('tutor.explainRequest'), 'explain')
  }, [ask, i18n])

  const askAboutMistake = useCallback(
    (question: string) => ask(question, 'chat'),
    [ask],
  )

  return (
    <TutorContext.Provider
      value={{
        available,
        open,
        setOpen,
        messages,
        busy,
        limitReached,
        send,
        explainDifferently,
        askAboutMistake,
      }}
    >
      {children}
    </TutorContext.Provider>
  )
}
