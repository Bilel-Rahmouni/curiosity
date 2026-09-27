import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { pickLocalized, type McqBlock } from '../../../content/types'
import { useProgress } from '../../../progress/ProgressProvider'
import { useTutorMaybe } from '../../tutor/TutorProvider'
import { ExerciseFeedback, ExerciseFrame } from '../ExerciseFrame/ExerciseFrame'
import type { LessonRef } from '../types'

type McqExerciseProps = {
  block: McqBlock
  lesson: LessonRef
}

export function McqExercise({ block, lesson }: McqExerciseProps) {
  const { t, i18n } = useTranslation()
  const { recordAttempt } = useProgress()
  const tutor = useTutorMaybe()
  const [selected, setSelected] = useState<number | null>(null)
  const [checked, setChecked] = useState(false)

  const lang = i18n.language
  const prompt = pickLocalized(block.prompt, lang)
  const correct = checked && selected === block.correctIndex

  function handleCheck() {
    if (selected === null || checked) return
    const isCorrect = selected === block.correctIndex
    setChecked(true)
    recordAttempt(
      lesson.subjectSlug,
      lesson.levelSlug,
      lesson.unitSlug,
      lesson.lessonSlug,
      block.id,
      isCorrect,
      { selected },
    )
  }

  function choiceClass(index: number) {
    let className = 'exercise__choice'
    if (!checked && selected === index) className += ' exercise__choice--selected'
    if (checked && index === selected) {
      className +=
        index === block.correctIndex
          ? ' exercise__choice--correct'
          : ' exercise__choice--wrong'
    }
    return className
  }

  const explanation =
    checked && selected !== null
      ? block.choices[selected]?.explanation
      : undefined

  return (
    <ExerciseFrame prompt={prompt}>
      <div className="exercise__choices">
        {block.choices.map((choice, index) => (
          <button
            key={index}
            type="button"
            className={choiceClass(index)}
            onClick={() => {
              if (!checked) setSelected(index)
            }}
            disabled={checked}
          >
            {pickLocalized(choice.text, lang)}
          </button>
        ))}
      </div>

      {!checked && (
        <div className="exercise__row">
          <button
            type="button"
            className="exercise__check-btn"
            onClick={handleCheck}
            disabled={selected === null}
          >
            {t('exercise.check')}
          </button>
        </div>
      )}

      {checked && (
        <ExerciseFeedback
          correct={correct}
          detail={explanation ? pickLocalized(explanation, lang) : undefined}
          onTryAgain={
            correct
              ? undefined
              : () => {
                  setChecked(false)
                  setSelected(null)
                }
          }
          onAskWhy={
            !correct && tutor?.available && selected !== null
              ? () =>
                  tutor.askAboutMistake(
                    t('exercise.whyWrongQuestion', {
                      prompt,
                      answer: pickLocalized(block.choices[selected].text, lang),
                    }),
                  )
              : undefined
          }
        />
      )}
    </ExerciseFrame>
  )
}
