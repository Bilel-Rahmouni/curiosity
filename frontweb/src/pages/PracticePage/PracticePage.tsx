import { useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useProgress } from '../../progress/ProgressProvider'
import { buildPracticeQueue } from '../../progress/mastery'
import { McqExercise } from '../../components/exercise/McqExercise/McqExercise'
import { NumericExercise } from '../../components/exercise/NumericExercise/NumericExercise'
import { OrderStepsExercise } from '../../components/exercise/OrderStepsExercise/OrderStepsExercise'
import { lessonPath, type EducationLevelSlug, type SubjectSlug } from '../../data/curriculum'
import { lessonKey, unitKey } from '../../i18n/keys'
import './PracticePage.css'

export function PracticePage() {
  const { t } = useTranslation()
  const { attempts, ready } = useProgress()

  // Snapshot the queue when progress data is ready so answering an item
  // doesn't reshuffle the session mid-way.
  const attemptsRef = useRef(attempts)
  attemptsRef.current = attempts
  const queue = useMemo(
    () => (ready ? buildPracticeQueue(attemptsRef.current) : []),
    [ready],
  )
  const [position, setPosition] = useState(0)

  const current = queue[position]

  return (
    <main className="practice-page">
      <header className="practice-page__header">
        <h1 className="practice-page__title">{t('pages.practice')}</h1>
        {queue.length > 0 && position < queue.length && (
          <span className="practice-page__count">
            {position + 1} / {queue.length}
          </span>
        )}
      </header>

      {queue.length === 0 && (
        <div className="practice-page__empty">
          <p>{t('practice.empty')}</p>
          <Link to="/learn" className="practice-page__learn-link">
            {t('pages.learn')}
          </Link>
        </div>
      )}

      {queue.length > 0 && position >= queue.length && (
        <div className="practice-page__empty">
          <p>✓ {t('practice.sessionDone')}</p>
        </div>
      )}

      {current && (
        <div className="practice-page__item" key={position}>
          <Link
            className="practice-page__source"
            to={lessonPath(
              current.subjectSlug,
              current.levelSlug,
              current.unitSlug,
              current.lessonSlug,
            )}
          >
            {t(
              unitKey(
                current.subjectSlug as SubjectSlug,
                current.levelSlug as EducationLevelSlug,
                current.unitSlug,
              ),
            )}
            {' · '}
            {t(
              lessonKey(
                current.subjectSlug as SubjectSlug,
                current.levelSlug as EducationLevelSlug,
                current.unitSlug,
                current.lessonSlug,
              ),
            )}
          </Link>

          {current.block.type === 'mcq' && (
            <McqExercise block={current.block} lesson={current} />
          )}
          {current.block.type === 'numericInput' && (
            <NumericExercise block={current.block} lesson={current} />
          )}
          {current.block.type === 'orderSteps' && (
            <OrderStepsExercise block={current.block} lesson={current} />
          )}

          <button
            type="button"
            className="practice-page__next"
            onClick={() => setPosition((p) => p + 1)}
          >
            {t('common.next')}
          </button>
        </div>
      )}
    </main>
  )
}
