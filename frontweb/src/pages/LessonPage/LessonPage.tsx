import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  LessonEmptyState,
  LessonRenderer,
} from '../../components/lesson/LessonRenderer/LessonRenderer'
import { CompleteButton } from '../../components/lesson/CompleteButton/CompleteButton'
import { Paywall } from '../../components/billing/Paywall/Paywall'
import { TutorProvider } from '../../components/tutor/TutorProvider'
import { TutorPanel } from '../../components/tutor/TutorPanel/TutorPanel'
import { getLesson, lessonPath, unitPath } from '../../data/curriculum'
import { LessonRow } from '../../components/ui/LessonRow/LessonRow'
import { useLessonContent } from '../../lib/lessonContent'
import { buildLessonText } from '../../lib/tutor'
import { useProgress } from '../../progress/ProgressProvider'
import { useSubscription } from '../../billing/SubscriptionProvider'
import {
  lessonKey,
  levelKey,
  subjectKey,
  unitKey,
} from '../../i18n/keys'
import './LessonPage.css'

export function LessonPage() {
  const { subjectSlug, levelSlug, unitSlug, lessonSlug } = useParams()
  const { t, i18n } = useTranslation()
  const { isCompleted, setLastVisited } = useProgress()
  const { active: subscribed, exempt } = useSubscription()
  const isRtl = i18n.dir() === 'rtl'
  const prevArrow = isRtl ? '→' : '←'
  const nextArrow = isRtl ? '←' : '→'

  const result =
    subjectSlug && levelSlug && unitSlug && lessonSlug
      ? getLesson(subjectSlug, levelSlug, unitSlug, lessonSlug)
      : undefined

  const content = useLessonContent(
    subjectSlug ?? '',
    levelSlug ?? '',
    unitSlug ?? '',
    lessonSlug ?? '',
  )

  const found = Boolean(result)
  useEffect(() => {
    if (!found || !subjectSlug || !levelSlug || !unitSlug || !lessonSlug) {
      return
    }
    setLastVisited({
      path: lessonPath(subjectSlug, levelSlug, unitSlug, lessonSlug),
      subjectSlug,
      levelSlug,
      unitSlug,
      lessonSlug,
    })
  }, [found, subjectSlug, levelSlug, unitSlug, lessonSlug, setLastVisited])

  if (!result) {
    return <Navigate to="/learn" replace />
  }

  const { subject, level, unit, lesson } = result
  // The first unit of every level is a free preview.
  const isFreeUnit = level.units[0]?.slug === unit.slug
  const locked = !exempt && !subscribed && !isFreeUnit
  const lessonIndex = unit.lessons.findIndex((l) => l.slug === lesson.slug)
  const prev = lessonIndex > 0 ? unit.lessons[lessonIndex - 1] : null
  const next =
    lessonIndex < unit.lessons.length - 1
      ? unit.lessons[lessonIndex + 1]
      : null

  const title = t(lessonKey(subject.slug, level.slug, unit.slug, lesson.slug))
  const lessonRef = {
    subjectSlug: subject.slug,
    levelSlug: level.slug,
    unitSlug: unit.slug,
    lessonSlug: lesson.slug,
  }

  return (
    <main className="lesson-page">
      <aside className="lesson-page__sidebar">
        <Link
          to={unitPath(subject.slug, level.slug, unit.slug)}
          className="lesson-page__unit"
        >
          {t(unitKey(subject.slug, level.slug, unit.slug))}
        </Link>
        <nav className="lesson-page__nav" aria-label={t('common.ariaLessons')}>
          {unit.lessons.map((l, i) => (
            <LessonRow
              key={l.slug}
              to={lessonPath(subject.slug, level.slug, unit.slug, l.slug)}
              index={i}
              title={t(
                lessonKey(subject.slug, level.slug, unit.slug, l.slug),
              )}
              completed={isCompleted(
                subject.slug,
                level.slug,
                unit.slug,
                l.slug,
              )}
            />
          ))}
        </nav>
      </aside>

      <article className="lesson-page__content">
        <header className="lesson-page__header">
          <span className="lesson-page__breadcrumb">
            {t(subjectKey(subject.slug))} · {t(levelKey(level.slug))} ·{' '}
            {String(lessonIndex + 1).padStart(2, '0')}
          </span>
          <h1 className="lesson-page__title">{title}</h1>
          <div className="lesson-page__progress">
            <div
              className="lesson-page__progress-fill"
              style={{
                width: `${((lessonIndex + 1) / unit.lessons.length) * 100}%`,
              }}
            />
          </div>
        </header>

        {locked ? (
          <Paywall />
        ) : (
        <TutorProvider
          key={`${subject.slug}.${level.slug}.${unit.slug}.${lesson.slug}`}
          lesson={{ ...lessonRef, title }}
          lessonText={content ? buildLessonText(content.blocks, i18n.language) : ''}
        >
          <div className="lesson-page__body">
            {content ? (
              <LessonRenderer blocks={content.blocks} lesson={lessonRef} />
            ) : (
              <LessonEmptyState />
            )}
          </div>

          <TutorPanel />
        </TutorProvider>
        )}

        <footer className="lesson-page__footer">
          <div className="lesson-page__footer-start">
            {prev ? (
              <Link
                to={lessonPath(
                  subject.slug,
                  level.slug,
                  unit.slug,
                  prev.slug,
                )}
                className="lesson-page__nav-btn lesson-page__nav-btn--prev"
                aria-label={t('common.previous')}
              >
                {prevArrow}
              </Link>
            ) : null}
          </div>
          <div className="lesson-page__footer-center">
            <CompleteButton
              subjectSlug={subject.slug}
              levelSlug={level.slug}
              unitSlug={unit.slug}
              lessonSlug={lesson.slug}
            />
          </div>
          <div className="lesson-page__footer-end">
            {next ? (
              <Link
                to={lessonPath(
                  subject.slug,
                  level.slug,
                  unit.slug,
                  next.slug,
                )}
                className="lesson-page__nav-btn lesson-page__nav-btn--next"
                aria-label={t('common.next')}
              >
                {nextArrow}
              </Link>
            ) : (
              <Link
                to={unitPath(subject.slug, level.slug, unit.slug)}
                className="lesson-page__nav-btn lesson-page__nav-btn--next"
              >
                {t('common.done')}
              </Link>
            )}
          </div>
        </footer>
      </article>
    </main>
  )
}
