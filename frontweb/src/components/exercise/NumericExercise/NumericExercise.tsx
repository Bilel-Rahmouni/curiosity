import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { pickLocalized, type NumericInputBlock } from '../../../content/types'
import { useProgress } from '../../../progress/ProgressProvider'
import { useTutorMaybe } from '../../tutor/TutorProvider'
import { ExerciseFeedback, ExerciseFrame } from '../ExerciseFrame/ExerciseFrame'
import type { LessonRef } from '../types'

type NumericExerciseProps = {
  block: NumericInputBlock
  lesson: LessonRef
}

export function NumericExercise({ block, lesson }: NumericExerciseProps) {
  const { t, i18n } = useTranslation()
  const { recordAttempt } = useProgress()
  const tutor = useTutorMaybe()
  const [value, setValue] = useState('')
  const [checked, setChecked] = useState(false)
  const [correct, setCorrect] = useState(false)
  const [showHint, setShowHint] = useState(false)

  const lang = i18n.language
  const prompt = pickLocalized(block.prompt, lang)

  function handleCheck() {
    const parsed = Number(value.replace(',', '.'))
    if (Number.isNaN(parsed)) return
    const tolerance = block.tolerance ?? 0
    const isCorrect = Math.abs(parsed - block.answer) <= tolerance
    setChecked(true)
    setCorrect(isCorrect)
    recordAttempt(
      lesson.subjectSlug,
      lesson.levelSlug,
      lesson.unitSlug,
      lesson.lessonSlug,
      block.id,
      isCorrect,
      { value: parsed },
    )
  }

  return (
    <ExerciseFrame prompt={prompt}>
      <div className="exercise__row">
        <input
          className="exercise__input"
          type="text"
          inputMode="decimal"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={checked}
        />
        {block.unit && <span className="exercise__unit">{block.unit}</span>}
        {!checked && (
          <button
            type="button"
            className="exercise__check-btn"
            onClick={handleCheck}
            disabled={value.trim() === ''}
          >
            {t('exercise.check')}
          </button>
        )}
        {!checked && block.hint && !showHint && (
          <button
            type="button"
            className="exercise__ghost-btn"
            onClick={() => setShowHint(true)}
          >
            {t('exercise.hint')}
          </button>
        )}
      </div>

      {showHint && block.hint && (
        <p className="exercise__hint">{pickLocalized(block.hint, lang)}</p>
      )}

      {checked && (
        <ExerciseFeedback
          correct={correct}
          onTryAgain={
            correct
              ? undefined
              : () => {
                  setChecked(false)
                  setValue('')
                }
          }
          onAskWhy={
            !correct && tutor?.available
              ? () =>
                  tutor.askAboutMistake(
                    t('exercise.whyWrongQuestion', {
                      prompt,
                      answer: value,
                    }),
                  )
              : undefined
          }
        />
      )}
    </ExerciseFrame>
  )
}
