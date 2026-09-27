import { useCallback, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { PageLayout } from '../../components/layout/PageLayout/PageLayout'
import { useAuth } from '../../auth/AuthProvider'
import {
  supabase,
  type Quiz,
  type QuizSubmission,
} from '../../lib/supabase'
import './QuizPage.css'

function pick(text: Record<string, string>, language: string): string {
  return text[language] || text.en || Object.values(text)[0] || ''
}

function formatTime(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60)
  const s = totalSeconds % 60
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

export function QuizPage() {
  const { quizId } = useParams()
  const { t, i18n } = useTranslation()
  const { user } = useAuth()
  const [quiz, setQuiz] = useState<Quiz | null>(null)
  const [loading, setLoading] = useState(true)
  const [answers, setAnswers] = useState<(number | null)[]>([])
  const [score, setScore] = useState<number | null>(null)
  const [secondsLeft, setSecondsLeft] = useState<number | null>(null)
  const [busy, setBusy] = useState(false)
  const submittedRef = useRef(false)

  useEffect(() => {
    if (!supabase || !quizId || !user) {
      setLoading(false)
      return
    }
    let cancelled = false
    void (async () => {
      const [quizRes, subRes] = await Promise.all([
        supabase!.from('quizzes').select('*').eq('id', quizId).maybeSingle(),
        supabase!
          .from('quiz_submissions')
          .select('*')
          .eq('quiz_id', quizId)
          .eq('student_id', user.id)
          .maybeSingle(),
      ])
      if (cancelled) return
      const q = quizRes.data as Quiz | null
      const sub = subRes.data as QuizSubmission | null
      setQuiz(q)
      if (sub) {
        setScore(Number(sub.score))
        submittedRef.current = true
      } else if (q) {
        setAnswers(new Array(q.questions.length).fill(null))
        if (q.time_limit_min) {
          setSecondsLeft(q.time_limit_min * 60)
        }
      }
      setLoading(false)
    })()
    return () => {
      cancelled = true
    }
  }, [quizId, user])

  const submit = useCallback(async () => {
    if (!supabase || !quizId || submittedRef.current) return
    submittedRef.current = true
    setBusy(true)
    const { data, error } = await supabase.rpc('submit_quiz', {
      p_quiz: quizId,
      p_answers: answers.map((a) => (a === null ? -1 : a)),
    })
    setBusy(false)
    if (error) {
      submittedRef.current = false
      return
    }
    setScore(Number(data))
    setSecondsLeft(null)
  }, [quizId, answers])

  useEffect(() => {
    if (secondsLeft === null || score !== null) return
    if (secondsLeft <= 0) {
      void submit()
      return
    }
    const timer = setTimeout(() => setSecondsLeft((s) => (s ?? 1) - 1), 1000)
    return () => clearTimeout(timer)
  }, [secondsLeft, score, submit])

  if (loading) {
    return <PageLayout title={t('quiz.title')}>{null}</PageLayout>
  }

  if (!quiz) {
    return (
      <PageLayout title={t('quiz.title')}>
        <p className="quiz-page__empty">{t('common.notFound')}</p>
      </PageLayout>
    )
  }

  return (
    <PageLayout title={quiz.title}>
      {score !== null ? (
        <div className="quiz-page__result">
          <span className="quiz-page__result-label">
            {t('quiz.yourScore')}
          </span>
          <span className="quiz-page__result-score">{score}%</span>
        </div>
      ) : (
        <div className="quiz-page__run">
          {secondsLeft !== null && (
            <div
              className={`quiz-page__timer${secondsLeft <= 60 ? ' quiz-page__timer--low' : ''}`}
              dir="ltr"
            >
              {formatTime(secondsLeft)}
            </div>
          )}
          <ol className="quiz-page__questions">
            {quiz.questions.map((q, qi) => (
              <li key={qi} className="quiz-page__question">
                <p className="quiz-page__prompt">
                  {pick(q.prompt, i18n.language)}
                </p>
                <div className="quiz-page__choices">
                  {q.choices.map((choice, ci) => (
                    <label
                      key={ci}
                      className={`quiz-page__choice${answers[qi] === ci ? ' quiz-page__choice--selected' : ''}`}
                    >
                      <input
                        type="radio"
                        name={`q-${qi}`}
                        checked={answers[qi] === ci}
                        onChange={() =>
                          setAnswers((prev) =>
                            prev.map((a, i) => (i === qi ? ci : a)),
                          )
                        }
                      />
                      {pick(choice, i18n.language)}
                    </label>
                  ))}
                </div>
              </li>
            ))}
          </ol>
          <button
            type="button"
            className="quiz-page__submit"
            disabled={busy}
            onClick={() => void submit()}
          >
            {t('quiz.submit')}
          </button>
        </div>
      )}
    </PageLayout>
  )
}
