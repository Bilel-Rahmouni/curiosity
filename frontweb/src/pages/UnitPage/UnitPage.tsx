import { Link, Navigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getUnit, lessonPath, levelPath } from '../../data/curriculum'
import { LessonRow } from '../../components/ui/LessonRow/LessonRow'
import { MasteryBadge } from '../../components/ui/MasteryBadge/MasteryBadge'
import { DownloadUnitButton } from '../../components/ui/DownloadUnitButton/DownloadUnitButton'
import { useProgress } from '../../progress/ProgressProvider'
import {
  computeMastery,
  exerciseKey,
  getUnitExercises,
} from '../../progress/mastery'
import { levelKey, lessonKey, unitKey } from '../../i18n/keys'
import './UnitPage.css'

export function UnitPage() {
  const { subjectSlug, levelSlug, unitSlug } = useParams()
  const { t } = useTranslation()
  const { attempts, isCompleted } = useProgress()
  const result =
    subjectSlug && levelSlug && unitSlug
      ? getUnit(subjectSlug, levelSlug, unitSlug)
      : undefined

  if (!result) {
    return <Navigate to="/learn" replace />
  }

  const { subject, level, unit } = result
  const firstLesson = unit.lessons[0]

  const exercises = getUnitExercises(subject.slug, level.slug, unit.slug)
  const correctCount = exercises.filter(
    (ref) => attempts[exerciseKey(ref)]?.everCorrect,
  ).length
  const lessonsCompleted = unit.lessons.filter((lesson) =>
    isCompleted(subject.slug, level.slug, unit.slug, lesson.slug),
  ).length
  const mastery = computeMastery({
    exerciseCount: exercises.length,
    correctCount,
    lessonsCompleted,
    lessonCount: unit.lessons.length,
  })

  return (
    <main className="unit-page">
      <div className="unit-page__inner">
        <header className="unit-page__header">
          <Link
            to={levelPath(subject.slug, level.slug)}
            className="unit-page__back"
          >
            ← {t(levelKey(level.slug))}
          </Link>
          <h1 className="unit-page__title">
            {t(unitKey(subject.slug, level.slug, unit.slug))}
          </h1>
          <div className="unit-page__meta">
            <MasteryBadge level={mastery} />
            <DownloadUnitButton
              subjectSlug={subject.slug}
              levelSlug={level.slug}
              unitSlug={unit.slug}
            />
          </div>
        </header>

        <ul className="unit-page__lessons">
          {unit.lessons.map((lesson, i) => (
            <li key={lesson.slug}>
              <LessonRow
                to={lessonPath(
                  subject.slug,
                  level.slug,
                  unit.slug,
                  lesson.slug,
                )}
                index={i}
                title={t(
                  lessonKey(
                    subject.slug,
                    level.slug,
                    unit.slug,
                    lesson.slug,
                  ),
                )}
                completed={isCompleted(
                  subject.slug,
                  level.slug,
                  unit.slug,
                  lesson.slug,
                )}
              />
            </li>
          ))}
        </ul>

        {firstLesson && (
          <Link
            to={lessonPath(
              subject.slug,
              level.slug,
              unit.slug,
              firstLesson.slug,
            )}
            className="unit-page__start"
          >
            {t('common.start')}
          </Link>
        )}
      </div>
    </main>
  )
}
