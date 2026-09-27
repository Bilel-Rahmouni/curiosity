import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import { useAuth } from '../auth/AuthProvider'
import { supabase, type AttemptRow, type ProgressRow } from '../lib/supabase'
import { lessonKey } from '../content/types'
import { foldAttempt, type AttemptSummary } from './mastery'
import { trackEvent } from '../lib/analytics'

export type LastVisited = {
  path: string
  subjectSlug: string
  levelSlug: string
  unitSlug: string
  lessonSlug: string
}

type ProgressContextValue = {
  ready: boolean
  completed: Set<string>
  attempts: Record<string, AttemptSummary>
  lastVisited: LastVisited | null
  isCompleted: (
    subjectSlug: string,
    levelSlug: string,
    unitSlug: string,
    lessonSlug: string,
  ) => boolean
  markCompleted: (
    subjectSlug: string,
    levelSlug: string,
    unitSlug: string,
    lessonSlug: string,
  ) => void
  recordAttempt: (
    subjectSlug: string,
    levelSlug: string,
    unitSlug: string,
    lessonSlug: string,
    exerciseId: string,
    correct: boolean,
    answer?: unknown,
  ) => void
  setLastVisited: (visit: LastVisited) => void
}

const ProgressContext = createContext<ProgressContextValue>({
  ready: false,
  completed: new Set(),
  attempts: {},
  lastVisited: null,
  isCompleted: () => false,
  markCompleted: () => {},
  recordAttempt: () => {},
  setLastVisited: () => {},
})

export function useProgress() {
  return useContext(ProgressContext)
}

const COMPLETED_KEY = 'curiosity-completed'
const ATTEMPTS_KEY = 'curiosity-attempts'
const LAST_VISITED_KEY = 'curiosity-last-visited'

function readJson<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as T) : fallback
  } catch {
    return fallback
  }
}

export function ProgressProvider({ children }: { children: ReactNode }) {
  const { user, refreshProfile } = useAuth()
  const [ready, setReady] = useState(false)
  const [completed, setCompleted] = useState<Set<string>>(
    () => new Set(readJson<string[]>(COMPLETED_KEY, [])),
  )
  const [attempts, setAttempts] = useState<Record<string, AttemptSummary>>(() =>
    readJson<Record<string, AttemptSummary>>(ATTEMPTS_KEY, {}),
  )
  const [lastVisited, setLastVisitedState] = useState<LastVisited | null>(() =>
    readJson<LastVisited | null>(LAST_VISITED_KEY, null),
  )

  // When a user signs in, load their remote data and push local-only
  // completions up once, so guest progress is not lost.
  useEffect(() => {
    if (!user || !supabase) {
      setReady(true)
      return
    }
    let cancelled = false

    async function load() {
      // Filter to the signed-in user: teachers and parents can also read
      // student rows through RLS, which must not pollute their own progress.
      const [progressRes, attemptsRes] = await Promise.all([
        supabase!
          .from('user_lesson_progress')
          .select('*')
          .eq('user_id', user!.id),
        supabase!
          .from('exercise_attempts')
          .select(
            'subject_slug, level_slug, unit_slug, lesson_slug, exercise_id, correct, created_at',
          )
          .eq('user_id', user!.id)
          .order('created_at', { ascending: true })
          .limit(5000),
      ])
      if (cancelled) return

      const remoteCompleted = new Set(
        ((progressRes.data as ProgressRow[] | null) ?? []).map((row) =>
          lessonKey(
            row.subject_slug,
            row.level_slug,
            row.unit_slug,
            row.lesson_slug,
          ),
        ),
      )

      const remoteAttempts: Record<string, AttemptSummary> = {}
      for (const row of (attemptsRes.data as AttemptRow[] | null) ?? []) {
        const key = `${lessonKey(row.subject_slug, row.level_slug, row.unit_slug, row.lesson_slug)}#${row.exercise_id}`
        remoteAttempts[key] = foldAttempt(
          remoteAttempts[key],
          row.correct,
          row.created_at,
        )
      }

      const syncKey = `curiosity-synced-${user!.id}`
      if (!localStorage.getItem(syncKey)) {
        const localOnly = readJson<string[]>(COMPLETED_KEY, []).filter(
          (key) => !remoteCompleted.has(key),
        )
        for (const key of localOnly) {
          const [subject, level, unit, lesson] = key.split('.')
          await supabase!.rpc('complete_lesson', {
            p_subject: subject,
            p_level: level,
            p_unit: unit,
            p_lesson: lesson,
          })
          remoteCompleted.add(key)
        }
        localStorage.setItem(syncKey, '1')
        if (localOnly.length > 0) void refreshProfile()
      }

      setCompleted(remoteCompleted)
      setAttempts((local) => ({ ...local, ...remoteAttempts }))
      setReady(true)
    }

    setReady(false)
    void load()
    return () => {
      cancelled = true
    }
  }, [user, refreshProfile])

  const isCompleted = useCallback(
    (
      subjectSlug: string,
      levelSlug: string,
      unitSlug: string,
      lessonSlug: string,
    ) => completed.has(lessonKey(subjectSlug, levelSlug, unitSlug, lessonSlug)),
    [completed],
  )

  const markCompleted = useCallback(
    (
      subjectSlug: string,
      levelSlug: string,
      unitSlug: string,
      lessonSlug: string,
    ) => {
      const key = lessonKey(subjectSlug, levelSlug, unitSlug, lessonSlug)
      setCompleted((prev) => {
        if (prev.has(key)) return prev
        const next = new Set(prev)
        next.add(key)
        localStorage.setItem(COMPLETED_KEY, JSON.stringify([...next]))
        return next
      })
      trackEvent('lesson_complete', { lesson: key })
      if (user && supabase) {
        void supabase
          .rpc('complete_lesson', {
            p_subject: subjectSlug,
            p_level: levelSlug,
            p_unit: unitSlug,
            p_lesson: lessonSlug,
          })
          .then(() => refreshProfile())
      }
    },
    [user, refreshProfile],
  )

  const recordAttempt = useCallback(
    (
      subjectSlug: string,
      levelSlug: string,
      unitSlug: string,
      lessonSlug: string,
      exerciseId: string,
      correct: boolean,
      answer?: unknown,
    ) => {
      const key = `${lessonKey(subjectSlug, levelSlug, unitSlug, lessonSlug)}#${exerciseId}`
      setAttempts((prev) => {
        const next = {
          ...prev,
          [key]: foldAttempt(prev[key], correct, new Date().toISOString()),
        }
        localStorage.setItem(ATTEMPTS_KEY, JSON.stringify(next))
        return next
      })
      trackEvent('exercise_attempt', { exercise: key, correct })
      if (user && supabase) {
        void supabase
          .rpc('record_attempt', {
            p_subject: subjectSlug,
            p_level: levelSlug,
            p_unit: unitSlug,
            p_lesson: lessonSlug,
            p_exercise_id: exerciseId,
            p_correct: correct,
            p_answer: answer ?? null,
          })
          .then(() => refreshProfile())
      }
    },
    [user, refreshProfile],
  )

  const setLastVisited = useCallback((visit: LastVisited) => {
    setLastVisitedState(visit)
    localStorage.setItem(LAST_VISITED_KEY, JSON.stringify(visit))
  }, [])

  return (
    <ProgressContext.Provider
      value={{
        ready,
        completed,
        attempts,
        lastVisited,
        isCompleted,
        markCompleted,
        recordAttempt,
        setLastVisited,
      }}
    >
      {children}
    </ProgressContext.Provider>
  )
}
