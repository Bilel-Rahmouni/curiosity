import { useState, type FormEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { supabase, type Quiz } from '../../../lib/supabase'
import { subjects, type SubjectSlug } from '../../../data/curriculum'
import { getLessonContent } from '../../../content'
import { lessonKey as contentKey, type LocalizedText } from '../../../content/types'
import {
  LocalizedInput,
  emptyLocalized,
} from '../../admin/LocalizedInput/LocalizedInput'
import { levelKey, subjectKey, unitKey } from '../../../i18n/keys'
import type { EducationLevelSlug } from '../../../data/curriculum'
import './QuizBuilder.css'

type DraftQuestion = {
  prompt: LocalizedText
  choices: LocalizedText[]
  correct: number
}

type QuizBuilderProps = {
  classroomId: string
  onCreated: (quiz: Quiz) => void
}

export function QuizBuilder({ classroomId, onCreated }: QuizBuilderProps) {
  const { t } = useTranslation()
  const [title, setTitle] = useState('')
  const [questions, setQuestions] = useState<DraftQuestion[]>([])
  const [timeLimit, setTimeLimit] = useState<number>(15)
  const [dueDate, setDueDate] = useState('')
  const [busy, setBusy] = useState(false)

  const [subjectSlug, setSubjectSlug] = useState<SubjectSlug>('mathematics')
  const [levelSlug, setLevelSlug] = useState<string>(
    subjects[0]?.levels[0]?.slug ?? '',
  )
  const [unitSlug, setUnitSlug] = useState<string>('')

  const [draft, setDraft] = useState<DraftQuestion>({
    prompt: emptyLocalized(),
    choices: [emptyLocalized(), emptyLocalized(), emptyLocalized()],
    correct: 0,
  })

  const subjectData = subjects.find((s) => s.slug === subjectSlug)
  const levelData = subjectData?.levels.find((l) => l.slug === levelSlug)

  function importUnitQuestions() {
    if (!levelData || !unitSlug) return
    const unit = levelData.units.find((u) => u.slug === unitSlug)
    if (!unit) return
    const imported: DraftQuestion[] = []
    for (const lesson of unit.lessons) {
      const content = getLessonContent(
        contentKey(subjectSlug, levelSlug, unitSlug, lesson.slug),
      )
      for (const block of content?.blocks ?? []) {
        if (block.type === 'mcq') {
          imported.push({
            prompt: block.prompt,
            choices: block.choices.map((c) => c.text),
            correct: block.correctIndex,
          })
        }
      }
    }
    if (imported.length > 0) {
      setQuestions((prev) => [...prev, ...imported])
    }
  }

  function addDraftQuestion() {
    const filled = draft.choices.filter((c) => c.en || c.fr || c.ar)
    if (!(draft.prompt.en || draft.prompt.fr || draft.prompt.ar)) return
    if (filled.length < 2) return
    setQuestions((prev) => [
      ...prev,
      { ...draft, choices: filled, correct: Math.min(draft.correct, filled.length - 1) },
    ])
    setDraft({
      prompt: emptyLocalized(),
      choices: [emptyLocalized(), emptyLocalized(), emptyLocalized()],
      correct: 0,
    })
  }

  async function handleCreate(event: FormEvent) {
    event.preventDefault()
    if (!supabase || busy || !title.trim() || questions.length === 0) return
    setBusy(true)
    const { data, error } = await supabase
      .from('quizzes')
      .insert({
        classroom_id: classroomId,
        title: title.trim(),
        questions: questions.map((q) => ({
          prompt: q.prompt,
          choices: q.choices,
        })),
        time_limit_min: timeLimit || null,
        due_date: dueDate || null,
      })
      .select()
      .single()
    if (error || !data) {
      setBusy(false)
      return
    }
    const quiz = data as Quiz
    await supabase.from('quiz_answer_keys').insert({
      quiz_id: quiz.id,
      answer_key: questions.map((q) => q.correct),
    })
    setBusy(false)
    setTitle('')
    setQuestions([])
    setDueDate('')
    onCreated(quiz)
  }

  return (
    <form className="quiz-builder" onSubmit={handleCreate}>
      <div className="quiz-builder__row">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder={t('quiz.quizTitle')}
          required
        />
        <label className="quiz-builder__field">
          <span>{t('quiz.timeLimit')}</span>
          <input
            type="number"
            min={0}
            max={180}
            value={timeLimit}
            onChange={(e) => setTimeLimit(Number(e.target.value) || 0)}
          />
        </label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>

      <div className="quiz-builder__row">
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
        <select value={unitSlug} onChange={(e) => setUnitSlug(e.target.value)}>
          <option value="" disabled>
            —
          </option>
          {(levelData?.units ?? []).map((u) => (
            <option key={u.slug} value={u.slug}>
              {t(unitKey(subjectSlug, levelSlug as EducationLevelSlug, u.slug))}
            </option>
          ))}
        </select>
        <button
          type="button"
          disabled={!unitSlug}
          onClick={importUnitQuestions}
        >
          {t('quiz.importUnit')}
        </button>
      </div>

      {questions.length > 0 && (
        <ol className="quiz-builder__questions">
          {questions.map((q, i) => (
            <li key={i}>
              <span className="quiz-builder__q-text">
                {q.prompt.en || q.prompt.fr || q.prompt.ar}
              </span>
              <button
                type="button"
                onClick={() =>
                  setQuestions((prev) => prev.filter((_, j) => j !== i))
                }
              >
                {t('quiz.remove')}
              </button>
            </li>
          ))}
        </ol>
      )}

      <details className="quiz-builder__custom">
        <summary>{t('quiz.addQuestion')}</summary>
        <div className="quiz-builder__custom-body">
          <LocalizedInput
            label={t('quiz.question')}
            value={draft.prompt}
            onChange={(prompt) => setDraft((d) => ({ ...d, prompt }))}
          />
          {draft.choices.map((choice, i) => (
            <div className="quiz-builder__choice" key={i}>
              <input
                type="radio"
                name="quiz-builder-correct"
                checked={draft.correct === i}
                onChange={() => setDraft((d) => ({ ...d, correct: i }))}
                title={t('quiz.correct')}
              />
              <LocalizedInput
                label={`${t('quiz.choice')} ${i + 1}`}
                value={choice}
                onChange={(next) =>
                  setDraft((d) => ({
                    ...d,
                    choices: d.choices.map((c, j) => (j === i ? next : c)),
                  }))
                }
              />
            </div>
          ))}
          <button type="button" onClick={addDraftQuestion}>
            {t('quiz.addQuestion')}
          </button>
        </div>
      </details>

      <button
        className="quiz-builder__create"
        type="submit"
        disabled={busy || questions.length === 0}
      >
        {t('quiz.create')} ({questions.length})
      </button>
    </form>
  )
}
