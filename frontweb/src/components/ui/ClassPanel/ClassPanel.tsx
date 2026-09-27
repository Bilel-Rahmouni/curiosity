import { useEffect, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useAuth } from '../../../auth/AuthProvider'
import { useProgress } from '../../../progress/ProgressProvider'
import {
  supabase,
  type Assignment,
  type Classroom,
  type Quiz,
  type QuizSubmission,
} from '../../../lib/supabase'
import {
  getUnit,
  unitPath,
  type EducationLevelSlug,
  type SubjectSlug,
} from '../../../data/curriculum'
import { unitKey } from '../../../i18n/keys'
import { UpcomingSessions } from '../UpcomingSessions/UpcomingSessions'
import { Leaderboard } from '../Leaderboard/Leaderboard'
import './ClassPanel.css'

export function ClassPanel() {
  const { t } = useTranslation()
  const { configured, user, profile } = useAuth()
  const { isCompleted } = useProgress()
  const [classes, setClasses] = useState<Classroom[]>([])
  const [assignments, setAssignments] = useState<Assignment[]>([])
  const [quizzes, setQuizzes] = useState<Quiz[]>([])
  const [quizScores, setQuizScores] = useState<Record<string, number>>({})
  const [loaded, setLoaded] = useState(false)
  const [joinCode, setJoinCode] = useState('')
  const [joinError, setJoinError] = useState<string | null>(null)

  const isStudent = profile?.role === 'student'

  useEffect(() => {
    if (!user || !supabase || !isStudent) return
    let cancelled = false

    async function load() {
      const { data: memberships } = await supabase!
        .from('classroom_members')
        .select('classroom_id')
        .eq('student_id', user!.id)
      const ids = (memberships ?? []).map(
        (m) => (m as { classroom_id: string }).classroom_id,
      )
      if (cancelled) return
      if (ids.length === 0) {
        setLoaded(true)
        return
      }
      const [classRes, assignRes, quizRes, subRes] = await Promise.all([
        supabase!.from('classrooms').select('*').in('id', ids),
        supabase!
          .from('assignments')
          .select('*')
          .in('classroom_id', ids)
          .order('created_at', { ascending: false }),
        supabase!
          .from('quizzes')
          .select('*')
          .in('classroom_id', ids)
          .order('created_at', { ascending: false }),
        supabase!
          .from('quiz_submissions')
          .select('quiz_id, score')
          .eq('student_id', user!.id),
      ])
      if (cancelled) return
      setClasses((classRes.data as Classroom[] | null) ?? [])
      setAssignments((assignRes.data as Assignment[] | null) ?? [])
      setQuizzes((quizRes.data as Quiz[] | null) ?? [])
      const scores: Record<string, number> = {}
      for (const s of (subRes.data as
        | Pick<QuizSubmission, 'quiz_id' | 'score'>[]
        | null) ?? []) {
        scores[s.quiz_id] = Number(s.score)
      }
      setQuizScores(scores)
      setLoaded(true)
    }

    void load()
    return () => {
      cancelled = true
    }
  }, [user, isStudent])

  if (!configured || !user || !isStudent || !loaded) return null

  async function handleJoin(event: FormEvent) {
    event.preventDefault()
    if (!supabase) return
    setJoinError(null)
    const { data, error } = await supabase.rpc('join_classroom', {
      p_code: joinCode,
    })
    if (error) {
      setJoinError(error.message)
      return
    }
    setJoinCode('')
    const { data: classRow } = await supabase
      .from('classrooms')
      .select('*')
      .eq('id', data as string)
      .maybeSingle()
    if (classRow) {
      setClasses((prev) =>
        prev.some((c) => c.id === (classRow as Classroom).id)
          ? prev
          : [...prev, classRow as Classroom],
      )
    }
  }

  if (classes.length === 0) {
    return (
      <section className="class-panel">
        <span className="class-panel__label">{t('account.classes')}</span>
        <form className="class-panel__join" onSubmit={handleJoin}>
          <input
            type="text"
            value={joinCode}
            onChange={(e) => setJoinCode(e.target.value)}
            placeholder={t('account.joinCodePlaceholder')}
            required
          />
          <button type="submit">{t('account.join')}</button>
        </form>
        {joinError && <p className="class-panel__error">{joinError}</p>}
      </section>
    )
  }

  return (
    <section className="class-panel">
      <div className="class-panel__head">
        <span className="class-panel__label">
          {classes.map((c, i) => (
            <span key={c.id}>
              {i > 0 && ' · '}
              <Link className="class-panel__class-link" to={`/class/${c.id}`}>
                {c.name}
              </Link>
            </span>
          ))}
        </span>
        <Link className="class-panel__path" to="/path">
          {t('path.title')}
        </Link>
      </div>
      {assignments.length > 0 && (
        <ul className="class-panel__assignments">
          {assignments.map((a) => {
            const found = getUnit(a.subject_slug, a.level_slug, a.unit_slug)
            const total = found?.unit.lessons.length ?? 0
            const done = found
              ? found.unit.lessons.filter((lesson) =>
                  isCompleted(
                    a.subject_slug,
                    a.level_slug,
                    a.unit_slug,
                    lesson.slug,
                  ),
                ).length
              : 0
            const percent = total > 0 ? Math.round((done / total) * 100) : 0
            return (
              <li key={a.id}>
                <Link
                  className="class-panel__assignment"
                  to={unitPath(a.subject_slug, a.level_slug, a.unit_slug)}
                >
                  <span className="class-panel__assignment-row">
                    <span className="class-panel__assignment-title">
                      {t(
                        unitKey(
                          a.subject_slug as SubjectSlug,
                          a.level_slug as EducationLevelSlug,
                          a.unit_slug,
                        ),
                      )}
                    </span>
                    <span className="class-panel__assignment-count">
                      {done}/{total}
                    </span>
                  </span>
                  <span className="class-panel__bar" aria-hidden="true">
                    <span
                      className="class-panel__bar-fill"
                      style={{ width: `${percent}%` }}
                    />
                  </span>
                  {a.due_date && (
                    <span className="class-panel__due">
                      {t('account.due', { date: a.due_date })}
                    </span>
                  )}
                </Link>
              </li>
            )
          })}
        </ul>
      )}
      <UpcomingSessions />
      {quizzes.length > 0 && (
        <ul className="class-panel__quizzes">
          {quizzes.map((quiz) => (
            <li key={quiz.id}>
              <Link className="class-panel__quiz" to={`/quiz/${quiz.id}`}>
                <span className="class-panel__quiz-title">{quiz.title}</span>
                <span className="class-panel__quiz-score" dir="ltr">
                  {quiz.id in quizScores
                    ? `${quizScores[quiz.id]}%`
                    : quiz.due_date
                      ? t('account.due', { date: quiz.due_date })
                      : t('quiz.title')}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
      {classes.map((c) => (
        <Leaderboard key={c.id} classroomId={c.id} />
      ))}
    </section>
  )
}
