import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { pickLocalized, type OrderStepsBlock } from '../../../content/types'
import { useProgress } from '../../../progress/ProgressProvider'
import { useTutorMaybe } from '../../tutor/TutorProvider'
import { ExerciseFeedback, ExerciseFrame } from '../ExerciseFrame/ExerciseFrame'
import type { LessonRef } from '../types'

type OrderStepsExerciseProps = {
  block: OrderStepsBlock
  lesson: LessonRef
}

function shuffledIndices(count: number): number[] {
  const indices = Array.from({ length: count }, (_, i) => i)
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[indices[i], indices[j]] = [indices[j], indices[i]]
  }
  // Never present the steps already in the correct order.
  if (indices.every((v, i) => v === i) && count > 1) {
    ;[indices[0], indices[1]] = [indices[1], indices[0]]
  }
  return indices
}

export function OrderStepsExercise({ block, lesson }: OrderStepsExerciseProps) {
  const { t, i18n } = useTranslation()
  const { recordAttempt } = useProgress()
  const tutor = useTutorMaybe()
  const [pool, setPool] = useState<number[]>(() =>
    shuffledIndices(block.steps.length),
  )
  const [sequence, setSequence] = useState<number[]>([])
  const [checked, setChecked] = useState(false)
  const [correct, setCorrect] = useState(false)

  const lang = i18n.language
  const prompt = pickLocalized(block.prompt, lang)

  function pick(index: number) {
    if (checked) return
    setPool((prev) => prev.filter((i) => i !== index))
    setSequence((prev) => [...prev, index])
  }

  function unpick(index: number) {
    if (checked) return
    setSequence((prev) => prev.filter((i) => i !== index))
    setPool((prev) => [...prev, index])
  }

  function handleCheck() {
    if (pool.length > 0 || checked) return
    const isCorrect = sequence.every((stepIndex, i) => stepIndex === i)
    setChecked(true)
    setCorrect(isCorrect)
    recordAttempt(
      lesson.subjectSlug,
      lesson.levelSlug,
      lesson.unitSlug,
      lesson.lessonSlug,
      block.id,
      isCorrect,
      { sequence },
    )
  }

  function reset() {
    setChecked(false)
    setSequence([])
    setPool(shuffledIndices(block.steps.length))
  }

  return (
    <ExerciseFrame prompt={prompt}>
      <div className="exercise__steps">
        <div className="exercise__sequence">
          {sequence.map((stepIndex, i) => (
            <button
              key={stepIndex}
              type="button"
              className="exercise__seq-item"
              onClick={() => unpick(stepIndex)}
              disabled={checked}
            >
              <span className="exercise__seq-index">{i + 1}</span>
              {pickLocalized(block.steps[stepIndex], lang)}
            </button>
          ))}
        </div>
        <div className="exercise__step-pool">
          {pool.map((stepIndex) => (
            <button
              key={stepIndex}
              type="button"
              className="exercise__choice"
              onClick={() => pick(stepIndex)}
            >
              {pickLocalized(block.steps[stepIndex], lang)}
            </button>
          ))}
        </div>
      </div>

      {!checked && (
        <div className="exercise__row">
          <button
            type="button"
            className="exercise__check-btn"
            onClick={handleCheck}
            disabled={pool.length > 0}
          >
            {t('exercise.check')}
          </button>
        </div>
      )}

      {checked && (
        <ExerciseFeedback
          correct={correct}
          onTryAgain={correct ? undefined : reset}
          onAskWhy={
            !correct && tutor?.available
              ? () =>
                  tutor.askAboutMistake(
                    t('exercise.whyWrongQuestion', {
                      prompt,
                      answer: sequence
                        .map((i) => pickLocalized(block.steps[i], lang))
                        .join(' → '),
                    }),
                  )
              : undefined
          }
        />
      )}
    </ExerciseFrame>
  )
}
