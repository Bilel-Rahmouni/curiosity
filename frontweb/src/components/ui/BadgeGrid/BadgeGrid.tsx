import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useAuth } from '../../../auth/AuthProvider'
import { useProgress } from '../../../progress/ProgressProvider'
import { deriveBadges, type BadgeId } from '../../../progress/badges'
import { supabase } from '../../../lib/supabase'
import './BadgeGrid.css'

const BADGE_ICONS: Record<BadgeId, string> = {
  'first-lesson': '🌱',
  'ten-lessons': '📚',
  'fifty-lessons': '🏛️',
  'streak-7': '🔥',
  'streak-30': '☄️',
  'unit-complete': '🧩',
  'level-complete': '🏔️',
  'sharp-shooter': '🎯',
  polyglot: '🌍',
  'quiz-ace': '🏆',
}

export function BadgeGrid() {
  const { t } = useTranslation()
  const { user, profile } = useAuth()
  const { completed, attempts } = useProgress()
  const [quizScores, setQuizScores] = useState<number[]>([])

  useEffect(() => {
    if (!supabase || !user) return
    let cancelled = false
    void (async () => {
      const { data } = await supabase!
        .from('quiz_submissions')
        .select('score')
        .eq('student_id', user.id)
      if (!cancelled) {
        setQuizScores(
          (((data as { score: number }[] | null) ?? [])).map((r) =>
            Number(r.score),
          ),
        )
      }
    })()
    return () => {
      cancelled = true
    }
  }, [user])

  const badges = useMemo(
    () => deriveBadges({ completed, attempts, profile, quizScores }),
    [completed, attempts, profile, quizScores],
  )

  return (
    <div className="badge-grid">
      {badges.map((badge, i) => (
        <div
          key={badge.id}
          className={`badge-grid__badge${badge.earned ? '' : ' badge-grid__badge--locked'}`}
          style={{ animationDelay: `${i * 0.04}s` }}
          title={t(`badges.${badge.id}`)}
        >
          <span className="badge-grid__icon" aria-hidden="true">
            {BADGE_ICONS[badge.id]}
          </span>
          <span className="badge-grid__name">{t(`badges.${badge.id}`)}</span>
        </div>
      ))}
    </div>
  )
}
