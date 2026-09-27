import { useEffect, useMemo, useState, type FormEvent } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  supabase,
  type Assignment,
  type Classroom,
  type ClassSession,
  type Quiz,
  type QuizSubmission,
} from '../../lib/supabase'
import {
  getUnit,
  subjects,
  type EducationLevelSlug,
  type SubjectSlug,
} from '../../data/curriculum'
import {
  computeMastery,
  getUnitExercises,
  type MasteryLevel,
} from '../../progress/mastery'
import {
  MasteryHeatmap,
  type HeatmapUnit,
} from '../../components/teach/MasteryHeatmap/MasteryHeatmap'
import { PlanBuilder } from '../../components/teach/PlanBuilder/PlanBuilder'
import { QuizBuilder } from '../../components/teach/QuizBuilder/QuizBuilder'
import { ClassFeed } from '../../components/classfeed/ClassFeed/ClassFeed'
import { SessionScheduler } from '../../components/teach/SessionScheduler/SessionScheduler'
import { Leaderboard } from '../../components/ui/Leaderboard/Leaderboard'
import { stepsFromAssignments } from '../../plan/path'
import { levelKey, subjectKey, unitKey } from '../../i18n/keys'
import './ClassroomPage.css'

type StudentRow = { id: string; name: string }

type MasteryRow = {
  user_id: string
  subject_slug: string
  level_slug: string
  unit_slug: string
  exercises_correct: number
  exercises_tried: number
  lessons_completed: number
}

export function ClassroomPage() {
  const { classroomId } = useParams()
  const { t } = useTranslation()
  const [classroom, setClassroom] = useState<Classroom | null>(null)
  const [students, setStudents] = useState<StudentRow[]>([])
  const [assignments, setAssignments] = useState<Assignment[]>([])
  const [masteryRows, setMasteryRows] = useState<MasteryRow[]>([])
  const [quizzes, setQuizzes] = useState<Quiz[]>([])
  const [submissions, setSubmissions] = useState<QuizSubmission[]>([])
  const [sessions, setSessions] = useState<ClassSession[]>([])

  const [subjectSlug, setSubjectSlug] = useState<SubjectSlug>('mathematics')
  const [levelSlug, setLevelSlug] = useState<string>('primary')
  const [unitSlug, setUnitSlug] = useState<string>('')
  const [dueDate, setDueDate] = useState('')

  useEffect(() => {
    if (!classroomId || !supabase) return
    let cancelled = false

    async function load() {
      const [classRes, membersRes, assignRes, quizRes] = await Promise.all([
        supabase!
          .from('classrooms')
          .select('*')
          .eq('id', classroomId!)
          .maybeSingle(),
        supabase!
          .from('classroom_members')
          .select('student_id')
          .eq('classroom_id', classroomId!),
        supabase!
          .from('assignments')
          .select('*')
          .eq('classroom_id', classroomId!)
          .order('created_at', { ascending: true }),
        supabase!
          .from('quizzes')
          .select('*')
          .eq('classroom_id', classroomId!)
          .order('created_at', { ascending: true }),
      ])
      if (cancelled) return
      const { data: sessionRows } = await supabase!
        .from('class_sessions')
        .select('*')
        .eq('classroom_id', classroomId!)
        .gte('starts_at', new Date(Date.now() - 86_400_000).toISOString())
        .order('starts_at', { ascending: true })
      if (cancelled) return
      setSessions((sessionRows as ClassSession[] | null) ?? [])
      setClassroom((classRes.data as Classroom | null) ?? null)
      setAssignments((assignRes.data as Assignment[] | null) ?? [])
      const quizRows = (quizRes.data as Quiz[] | null) ?? []
      setQuizzes(quizRows)
      if (quizRows.length > 0) {
        const { data: subRows } = await supabase!
          .from('quiz_submissions')
          .select('*')
          .in(
            'quiz_id',
            quizRows.map((q) => q.id),
          )
        if (cancelled) return
        setSubmissions((subRows as QuizSubmission[] | null) ?? [])
      }

      const ids = ((membersRes.data as { student_id: string }[] | null) ?? []).map(
        (m) => m.student_id,
      )
      if (ids.length === 0) return

      const [profilesRes, masteryRes] = await Promise.all([
        supabase!.from('profiles').select('id, display_name').in('id', ids),
        supabase!.from('unit_mastery').select('*').in('user_id', ids),
      ])
      if (cancelled) return
      setStudents(
        (
          (profilesRes.data as { id: string; display_name: string }[] | null) ??
          []
        ).map((p) => ({ id: p.id, name: p.display_name })),
      )
      setMasteryRows((masteryRes.data as MasteryRow[] | null) ?? [])
    }

    void load()
    return () => {
      cancelled = true
    }
  }, [classroomId])

  const heatmapUnits: HeatmapUnit[] = useMemo(() => {
    const seen = new Set<string>()
    const units: HeatmapUnit[] = []
    for (const a of assignments) {
      const key = `${a.subject_slug}.${a.level_slug}.${a.unit_slug}`
      if (!seen.has(key)) {
        seen.add(key)
        units.push({
          subjectSlug: a.subject_slug,
          levelSlug: a.level_slug,
          unitSlug: a.unit_slug,
        })
      }
    }
    return units
  }, [assignments])

  const planSteps = useMemo(
    () => stepsFromAssignments(assignments),
    [assignments],
  )

  function cellMastery(studentId: string, unit: HeatmapUnit): MasteryLevel {
    const row = masteryRows.find(
      (r) =>
        r.user_id === studentId &&
        r.subject_slug === unit.subjectSlug &&
        r.level_slug === unit.levelSlug &&
        r.unit_slug === unit.unitSlug,
    )
    const unitInfo = getUnit(unit.subjectSlug, unit.levelSlug, unit.unitSlug)
    return computeMastery({
      exerciseCount: getUnitExercises(
        unit.subjectSlug,
        unit.levelSlug,
        unit.unitSlug,
      ).length,
      correctCount: row?.exercises_correct ?? 0,
      lessonsCompleted: row?.lessons_completed ?? 0,
      lessonCount: unitInfo?.unit.lessons.length ?? 0,
    })
  }

  async function handleAssign(event: FormEvent) {
    event.preventDefault()
    if (!classroomId || !unitSlug || !supabase) return
    const { data, error } = await supabase
      .from('assignments')
      .insert({
        classroom_id: classroomId,
        subject_slug: subjectSlug,
        level_slug: levelSlug,
        unit_slug: unitSlug,
        due_date: dueDate || null,
      })
      .select()
      .single()
    if (!error && data) {
      setAssignments((prev) => [...prev, data as Assignment])
      setUnitSlug('')
      setDueDate('')
    }
  }

  const subjectData = subjects.find((s) => s.slug === subjectSlug)
  const levelData = subjectData?.levels.find((l) => l.slug === levelSlug)

  if (!classroom) {
    return <main className="classroom-page" />
  }

  return (
    <main className="classroom-page">
      <header className="classroom-page__header">
        <Link to="/teach" className="classroom-page__back">
          ← {t('teach.title')}
        </Link>
        <h1 className="classroom-page__title">{classroom.name}</h1>
        <span className="classroom-page__code">
          {t('teach.joinCode')}: <strong>{classroom.join_code}</strong>
        </span>
        <Link
          className="classroom-page__board-link"
          to={`/board/${classroomId}`}
        >
          {t('board.title')}
        </Link>
      </header>

      <section className="classroom-page__section">
        <h2 className="classroom-page__section-title">
          {t('teach.students')} ({students.length})
        </h2>
        {students.length > 0 && heatmapUnits.length > 0 ? (
          <MasteryHeatmap
            students={students}
            units={heatmapUnits}
            cell={cellMastery}
          />
        ) : (
          <ul className="classroom-page__students">
            {students.map((s) => (
              <li key={s.id}>{s.name}</li>
            ))}
          </ul>
        )}
      </section>

      <section className="classroom-page__section">
        <h2 className="classroom-page__section-title">{t('teach.plan')}</h2>
        {planSteps.length > 0 && (
          <ol className="classroom-page__assignments">
            {planSteps.map((step, i) => (
              <li
                key={`${step.subjectSlug}/${step.levelSlug}/${step.unitSlug}`}
                className="classroom-page__assignment"
              >
                <span>
                  <span className="classroom-page__step-num">{i + 1}.</span>{' '}
                  {t(subjectKey(step.subjectSlug as SubjectSlug))} ·{' '}
                  {t(levelKey(step.levelSlug as EducationLevelSlug))} ·{' '}
                  {t(
                    unitKey(
                      step.subjectSlug as SubjectSlug,
                      step.levelSlug as EducationLevelSlug,
                      step.unitSlug,
                    ),
                  )}
                </span>
                {step.dueDate && (
                  <span className="classroom-page__due">{step.dueDate}</span>
                )}
              </li>
            ))}
          </ol>
        )}
        <PlanBuilder
          classroomId={classroomId!}
          existing={assignments}
          onCreated={(created) =>
            setAssignments((prev) => [...prev, ...created])
          }
        />
      </section>

      <section className="classroom-page__section">
        <h2 className="classroom-page__section-title">
          {t('teach.assignments')}
        </h2>

        <form className="classroom-page__assign" onSubmit={handleAssign}>
          <select
            value={subjectSlug}
            onChange={(e) => {
              const next = e.target.value as SubjectSlug
              setSubjectSlug(next)
              setLevelSlug(
                subjects.find((s) => s.slug === next)?.levels[0]?.slug ?? '',
              )
              setUnitSlug('')
            }}
          >
            {subjects.map((s) => (
              <option key={s.slug} value={s.slug}>
                {t(subjectKey(s.slug))}
              </option>
            ))}
          </select>
          <select
            value={levelSlug}
            onChange={(e) => {
              setLevelSlug(e.target.value)
              setUnitSlug('')
            }}
          >
            {(subjectData?.levels ?? []).map((l) => (
              <option key={l.slug} value={l.slug}>
                {t(levelKey(l.slug))}
              </option>
            ))}
          </select>
          <select
            value={unitSlug}
            onChange={(e) => setUnitSlug(e.target.value)}
            required
          >
            <option value="" disabled>
              —
            </option>
            {(levelData?.units ?? []).map((u) => (
              <option key={u.slug} value={u.slug}>
                {t(
                  unitKey(
                    subjectSlug,
                    levelSlug as EducationLevelSlug,
                    u.slug,
                  ),
                )}
              </option>
            ))}
          </select>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
          <button type="submit" disabled={!unitSlug}>
            {t('teach.assign')}
          </button>
        </form>
      </section>

      <section className="classroom-page__section">
        <h2 className="classroom-page__section-title">{t('quiz.title')}</h2>
        {quizzes.length > 0 && (
          <ul className="classroom-page__quizzes">
            {quizzes.map((quiz) => {
              const subs = submissions.filter((s) => s.quiz_id === quiz.id)
              const avg =
                subs.length > 0
                  ? Math.round(
                      subs.reduce((sum, s) => sum + Number(s.score), 0) /
                        subs.length,
                    )
                  : null
              return (
                <li key={quiz.id} className="classroom-page__quiz">
                  <details>
                    <summary>
                      <span className="classroom-page__quiz-title">
                        {quiz.title}
                      </span>
                      <span className="classroom-page__quiz-meta">
                        {t('quiz.questionsCount', {
                          count: quiz.questions.length,
                        })}
                        {avg !== null && ` · ${t('quiz.average')} ${avg}%`}
                        {quiz.due_date && ` · ${quiz.due_date}`}
                      </span>
                    </summary>
                    <table className="classroom-page__quiz-results">
                      <tbody>
                        {students.map((s) => {
                          const sub = subs.find(
                            (x) => x.student_id === s.id,
                          )
                          return (
                            <tr key={s.id}>
                              <td>{s.name}</td>
                              <td dir="ltr">
                                {sub ? `${Number(sub.score)}%` : '—'}
                              </td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </details>
                </li>
              )
            })}
          </ul>
        )}
        <QuizBuilder
          classroomId={classroomId!}
          onCreated={(quiz) => setQuizzes((prev) => [...prev, quiz])}
        />
      </section>

      <section className="classroom-page__section">
        <h2 className="classroom-page__section-title">
          {t('sessions.title')}
        </h2>
        <SessionScheduler
          classroomId={classroomId!}
          sessions={sessions}
          onCreated={(s) =>
            setSessions((prev) =>
              [...prev, s].sort((a, b) =>
                a.starts_at.localeCompare(b.starts_at),
              ),
            )
          }
          onDeleted={(id) =>
            setSessions((prev) => prev.filter((s) => s.id !== id))
          }
        />
      </section>

      <section className="classroom-page__section">
        <Leaderboard classroomId={classroomId!} />
      </section>

      <section className="classroom-page__section">
        <h2 className="classroom-page__section-title">{t('feed.title')}</h2>
        <ClassFeed classroomId={classroomId!} canPost />
      </section>
    </main>
  )
}
