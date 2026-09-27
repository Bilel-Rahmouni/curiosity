import { useCallback, useEffect, useState, type FormEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { useAuth } from '../../auth/AuthProvider'
import { supabase } from '../../lib/supabase'
import './FamilyPage.css'

type ChildSummary = {
  id: string
  name: string
  xp: number
  streak: number
  completedTotal: number
  completedThisWeek: number
  quizScores: { title: string; score: number }[]
}

export function FamilyPage() {
  const { t } = useTranslation()
  const { user } = useAuth()
  const [children, setChildren] = useState<ChildSummary[]>([])
  const [code, setCode] = useState('')
  const [error, setError] = useState<string | null>(null)

  const load = useCallback(async () => {
    if (!user || !supabase) return
    const { data: links } = await supabase
      .from('parent_links')
      .select('child_id')
      .eq('parent_id', user.id)
    const ids = ((links as { child_id: string }[] | null) ?? []).map(
      (l) => l.child_id,
    )
    if (ids.length === 0) {
      setChildren([])
      return
    }

    const weekAgo = new Date(Date.now() - 7 * 86_400_000).toISOString()
    const [profilesRes, progressRes, subsRes] = await Promise.all([
      supabase
        .from('profiles')
        .select('id, display_name, xp, streak')
        .in('id', ids),
      supabase
        .from('user_lesson_progress')
        .select('user_id, completed_at')
        .in('user_id', ids),
      supabase
        .from('quiz_submissions')
        .select('quiz_id, student_id, score')
        .in('student_id', ids),
    ])

    const progress =
      (progressRes.data as { user_id: string; completed_at: string }[] | null) ??
      []
    const subs =
      (subsRes.data as
        | { quiz_id: string; student_id: string; score: number }[]
        | null) ?? []

    const quizTitles: Record<string, string> = {}
    if (subs.length > 0) {
      const { data: quizRows } = await supabase
        .from('quizzes')
        .select('id, title')
        .in('id', [...new Set(subs.map((s) => s.quiz_id))])
      for (const q of (quizRows as { id: string; title: string }[] | null) ??
        []) {
        quizTitles[q.id] = q.title
      }
    }

    setChildren(
      (
        (profilesRes.data as
          | { id: string; display_name: string; xp: number; streak: number }[]
          | null) ?? []
      ).map((p) => {
        const rows = progress.filter((r) => r.user_id === p.id)
        return {
          id: p.id,
          name: p.display_name,
          xp: p.xp,
          streak: p.streak,
          completedTotal: rows.length,
          completedThisWeek: rows.filter((r) => r.completed_at >= weekAgo)
            .length,
          quizScores: subs
            .filter((s) => s.student_id === p.id)
            .map((s) => ({
              title: quizTitles[s.quiz_id] ?? '',
              score: Number(s.score),
            })),
        }
      }),
    )
  }, [user])

  useEffect(() => {
    void load()
  }, [load])

  async function handleLink(event: FormEvent) {
    event.preventDefault()
    if (!supabase) return
    setError(null)
    const { error: err } = await supabase.rpc('link_child', { p_code: code })
    if (err) {
      setError(err.message)
      return
    }
    setCode('')
    void load()
  }

  return (
    <main className="family-page">
      <h1 className="family-page__title">{t('family.title')}</h1>

      <div className="family-page__children">
        {children.map((child) => (
          <div key={child.id} className="family-page__child">
            <span className="family-page__child-name">{child.name}</span>
            <div className="family-page__child-stats">
              <span>
                <strong>{child.completedThisWeek}</strong>{' '}
                {t('family.lessonsThisWeek')}
              </span>
              <span>
                <strong>{child.completedTotal}</strong>{' '}
                {t('family.lessonsTotal')}
              </span>
              <span>
                <strong>{child.xp}</strong> {t('account.xp')}
              </span>
              <span>
                <strong>{child.streak}</strong> {t('account.streak')}
              </span>
            </div>
            {child.quizScores.length > 0 && (
              <ul className="family-page__quiz-scores">
                {child.quizScores.map((q, i) => (
                  <li key={i}>
                    <span>{q.title}</span>
                    <span dir="ltr">{q.score}%</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <form className="family-page__link" onSubmit={handleLink}>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder={t('family.childCodePlaceholder')}
          required
        />
        <button type="submit">{t('family.link')}</button>
      </form>
      {error && <p className="family-page__error">{error}</p>}
    </main>
  )
}
