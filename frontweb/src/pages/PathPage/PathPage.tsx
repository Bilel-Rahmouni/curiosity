import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { PageLayout } from '../../components/layout/PageLayout/PageLayout'
import { PathStepCard } from '../../components/path/PathStepCard/PathStepCard'
import { UpcomingSessions } from '../../components/ui/UpcomingSessions/UpcomingSessions'
import { useAuth } from '../../auth/AuthProvider'
import { useProgress } from '../../progress/ProgressProvider'
import { supabase, type Assignment } from '../../lib/supabase'
import {
  lessonPath,
  subjects,
  type EducationLevelSlug,
  type SubjectSlug,
} from '../../data/curriculum'
import {
  resolvePath,
  stepsFromAssignments,
  stepsFromLevel,
} from '../../plan/path'
import { lessonKey, levelKey, subjectKey } from '../../i18n/keys'
import './PathPage.css'

export function PathPage() {
  const { t } = useTranslation()
  const { user, profile } = useAuth()
  const { ready, isCompleted, lastVisited } = useProgress()

  const [assignments, setAssignments] = useState<Assignment[]>([])
  const [loaded, setLoaded] = useState(false)

  const [subjectSlug, setSubjectSlug] = useState<SubjectSlug>(
    () => (lastVisited?.subjectSlug as SubjectSlug) ?? 'mathematics',
  )
  const [levelSlug, setLevelSlug] = useState<string>(() => {
    const initialSubject = lastVisited?.subjectSlug ?? 'mathematics'
    const subject = subjects.find((s) => s.slug === initialSubject)
    return (
      lastVisited?.levelSlug ??
      profile?.placement?.[initialSubject] ??
      subject?.levels[0]?.slug ??
      'primary'
    )
  })

  const isStudent = !profile || profile.role === 'student'

  useEffect(() => {
    if (!user || !supabase || !isStudent) {
      setLoaded(true)
      return
    }
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
      const { data } = await supabase!
        .from('assignments')
        .select('*')
        .in('classroom_id', ids)
        .order('created_at', { ascending: true })
      if (cancelled) return
      setAssignments((data as Assignment[] | null) ?? [])
      setLoaded(true)
    }

    void load()
    return () => {
      cancelled = true
    }
  }, [user, isStudent])

  const hasAssignments = assignments.length > 0

  const steps = useMemo(() => {
    const refs = hasAssignments
      ? stepsFromAssignments(assignments)
      : stepsFromLevel(subjectSlug, levelSlug)
    return resolvePath(refs, isCompleted)
  }, [hasAssignments, assignments, subjectSlug, levelSlug, isCompleted])

  const currentStep = steps.find((s) => s.status === 'current')
  const subjectData = subjects.find((s) => s.slug === subjectSlug)

  if (!ready || !loaded) {
    return <PageLayout title={t('path.title')}>{null}</PageLayout>
  }

  return (
    <PageLayout title={t('path.title')}>
      <UpcomingSessions />

      {!hasAssignments && (
        <div className="path-page__pickers">
          <select
            value={subjectSlug}
            onChange={(e) => {
              const next = e.target.value as SubjectSlug
              const nextSubject = subjects.find((s) => s.slug === next)
              const placed = profile?.placement?.[next]
              setSubjectSlug(next)
              setLevelSlug(
                (placed &&
                nextSubject?.levels.some((l) => l.slug === placed)
                  ? placed
                  : undefined) ??
                  nextSubject?.levels[0]?.slug ??
                  '',
              )
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
            onChange={(e) => setLevelSlug(e.target.value)}
          >
            {(subjectData?.levels ?? []).map((l) => (
              <option key={l.slug} value={l.slug}>
                {t(levelKey(l.slug))}
              </option>
            ))}
          </select>
          <Link className="path-page__placement" to="/placement">
            {t('placement.title')}
          </Link>
        </div>
      )}

      {currentStep?.nextLessonSlug && (
        <Link
          className="path-page__next"
          to={lessonPath(
            currentStep.subjectSlug,
            currentStep.levelSlug,
            currentStep.unitSlug,
            currentStep.nextLessonSlug,
          )}
        >
          <span className="path-page__next-label">{t('path.next')}</span>
          <span className="path-page__next-title">
            {t(
              lessonKey(
                currentStep.subjectSlug as SubjectSlug,
                currentStep.levelSlug as EducationLevelSlug,
                currentStep.unitSlug,
                currentStep.nextLessonSlug,
              ),
            )}
          </span>
        </Link>
      )}

      <ol className="path-page__steps">
        {steps.map((step, i) => (
          <PathStepCard
            key={`${step.subjectSlug}/${step.levelSlug}/${step.unitSlug}`}
            step={step}
            index={i}
            showSubject={hasAssignments}
          />
        ))}
      </ol>
    </PageLayout>
  )
}
