import { useTranslation } from 'react-i18next'
import { useProgress } from '../../../progress/ProgressProvider'
import './CompleteButton.css'

type CompleteButtonProps = {
  subjectSlug: string
  levelSlug: string
  unitSlug: string
  lessonSlug: string
}

export function CompleteButton({
  subjectSlug,
  levelSlug,
  unitSlug,
  lessonSlug,
}: CompleteButtonProps) {
  const { t } = useTranslation()
  const { isCompleted, markCompleted } = useProgress()
  const completed = isCompleted(subjectSlug, levelSlug, unitSlug, lessonSlug)

  return (
    <button
      type="button"
      className={`complete-button${completed ? ' complete-button--done' : ''}`}
      onClick={() =>
        markCompleted(subjectSlug, levelSlug, unitSlug, lessonSlug)
      }
      disabled={completed}
    >
      {completed ? `✓ ${t('progress.completed')}` : t('progress.markDone')}
    </button>
  )
}
