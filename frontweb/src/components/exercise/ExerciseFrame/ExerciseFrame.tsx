import type { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import './ExerciseFrame.css'

type ExerciseFrameProps = {
  prompt: string
  children: ReactNode
}

export function ExerciseFrame({ prompt, children }: ExerciseFrameProps) {
  const { t } = useTranslation()

  return (
    <div className="exercise">
      <span className="exercise__chip">{t('exercise.practice')}</span>
      <p className="exercise__prompt">{prompt}</p>
      {children}
    </div>
  )
}

type ExerciseFeedbackProps = {
  correct: boolean
  detail?: string
  onTryAgain?: () => void
  onAskWhy?: () => void
}

export function ExerciseFeedback({
  correct,
  detail,
  onTryAgain,
  onAskWhy,
}: ExerciseFeedbackProps) {
  const { t } = useTranslation()

  return (
    <div
      className={`exercise__feedback exercise__feedback--${correct ? 'correct' : 'wrong'}`}
    >
      <span className="exercise__verdict">
        {correct ? `✓ ${t('exercise.correct')}` : `✗ ${t('exercise.incorrect')}`}
      </span>
      {detail && <p className="exercise__detail">{detail}</p>}
      {!correct && (
        <div className="exercise__feedback-actions">
          {onTryAgain && (
            <button
              type="button"
              className="exercise__ghost-btn"
              onClick={onTryAgain}
            >
              {t('exercise.tryAgain')}
            </button>
          )}
          {onAskWhy && (
            <button
              type="button"
              className="exercise__ghost-btn"
              onClick={onAskWhy}
            >
              {t('exercise.whyWrong')}
            </button>
          )}
        </div>
      )}
    </div>
  )
}
