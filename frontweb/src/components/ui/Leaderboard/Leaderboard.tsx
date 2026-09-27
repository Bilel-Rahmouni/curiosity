import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useAuth } from '../../../auth/AuthProvider'
import { supabase } from '../../../lib/supabase'
import './Leaderboard.css'

type LeaderboardRow = {
  student_id: string
  display_name: string
  weekly_xp: number
}

type LeaderboardProps = {
  classroomId: string
}

export function Leaderboard({ classroomId }: LeaderboardProps) {
  const { t } = useTranslation()
  const { user } = useAuth()
  const [rows, setRows] = useState<LeaderboardRow[]>([])

  useEffect(() => {
    if (!supabase) return
    let cancelled = false
    void (async () => {
      const { data } = await supabase!.rpc('class_leaderboard', {
        p_classroom: classroomId,
      })
      if (!cancelled) {
        setRows((data as LeaderboardRow[] | null) ?? [])
      }
    })()
    return () => {
      cancelled = true
    }
  }, [classroomId])

  if (rows.length === 0) return null

  return (
    <div className="leaderboard">
      <span className="leaderboard__label">{t('leaderboard.title')}</span>
      <ol className="leaderboard__list">
        {rows.slice(0, 10).map((row, i) => (
          <li
            key={row.student_id}
            className={`leaderboard__row${row.student_id === user?.id ? ' leaderboard__row--me' : ''}`}
          >
            <span className="leaderboard__rank" dir="ltr">
              {i + 1}
            </span>
            <span className="leaderboard__name">{row.display_name}</span>
            <span className="leaderboard__xp" dir="ltr">
              {Number(row.weekly_xp)} {t('account.xp')}
            </span>
          </li>
        ))}
      </ol>
    </div>
  )
}
