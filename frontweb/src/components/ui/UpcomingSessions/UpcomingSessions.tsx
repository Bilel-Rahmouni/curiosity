import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useAuth } from '../../../auth/AuthProvider'
import { supabase, type ClassSession } from '../../../lib/supabase'
import './UpcomingSessions.css'

export function UpcomingSessions() {
  const { t, i18n } = useTranslation()
  const { user, profile } = useAuth()
  const [sessions, setSessions] = useState<ClassSession[]>([])

  const isStudent = profile?.role === 'student'

  useEffect(() => {
    if (!supabase || !user || !isStudent) return
    let cancelled = false
    void (async () => {
      const { data: memberships } = await supabase!
        .from('classroom_members')
        .select('classroom_id')
        .eq('student_id', user.id)
      const ids = ((memberships as { classroom_id: string }[] | null) ?? []).map(
        (m) => m.classroom_id,
      )
      if (cancelled || ids.length === 0) return
      const { data } = await supabase!
        .from('class_sessions')
        .select('*')
        .in('classroom_id', ids)
        .gte('starts_at', new Date().toISOString())
        .order('starts_at', { ascending: true })
        .limit(5)
      if (!cancelled) {
        setSessions((data as ClassSession[] | null) ?? [])
      }
    })()
    return () => {
      cancelled = true
    }
  }, [user, isStudent])

  if (sessions.length === 0) return null

  return (
    <section className="upcoming-sessions">
      <span className="upcoming-sessions__label">{t('sessions.title')}</span>
      <ul className="upcoming-sessions__list">
        {sessions.map((s) => (
          <li key={s.id} className="upcoming-sessions__item">
            <span className="upcoming-sessions__when" dir="ltr">
              {new Date(s.starts_at).toLocaleString(i18n.language, {
                dateStyle: 'medium',
                timeStyle: 'short',
              })}
            </span>
            <span className="upcoming-sessions__name">{s.title}</span>
            {s.meeting_url && (
              <a
                className="upcoming-sessions__join"
                href={s.meeting_url}
                target="_blank"
                rel="noreferrer"
              >
                {t('sessions.join')}
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
