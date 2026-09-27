import { useState, type FormEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { supabase, type ClassSession } from '../../../lib/supabase'
import './SessionScheduler.css'

type SessionSchedulerProps = {
  classroomId: string
  sessions: ClassSession[]
  onCreated: (session: ClassSession) => void
  onDeleted: (id: string) => void
}

export function SessionScheduler({
  classroomId,
  sessions,
  onCreated,
  onDeleted,
}: SessionSchedulerProps) {
  const { t, i18n } = useTranslation()
  const [title, setTitle] = useState('')
  const [startsAt, setStartsAt] = useState('')
  const [duration, setDuration] = useState(60)
  const [meetingUrl, setMeetingUrl] = useState('')
  const [busy, setBusy] = useState(false)

  async function handleSchedule(event: FormEvent) {
    event.preventDefault()
    if (!supabase || busy || !title.trim() || !startsAt) return
    setBusy(true)
    const { data, error } = await supabase
      .from('class_sessions')
      .insert({
        classroom_id: classroomId,
        title: title.trim(),
        starts_at: new Date(startsAt).toISOString(),
        duration_min: duration,
        meeting_url: meetingUrl.trim() || null,
      })
      .select()
      .single()
    setBusy(false)
    if (!error && data) {
      onCreated(data as ClassSession)
      setTitle('')
      setStartsAt('')
      setMeetingUrl('')
    }
  }

  async function handleDelete(id: string) {
    if (!supabase) return
    const { error } = await supabase
      .from('class_sessions')
      .delete()
      .eq('id', id)
    if (!error) onDeleted(id)
  }

  return (
    <div className="session-scheduler">
      {sessions.length > 0 && (
        <ul className="session-scheduler__list">
          {sessions.map((s) => (
            <li key={s.id} className="session-scheduler__item">
              <span className="session-scheduler__when" dir="ltr">
                {new Date(s.starts_at).toLocaleString(i18n.language, {
                  dateStyle: 'medium',
                  timeStyle: 'short',
                })}
              </span>
              <span className="session-scheduler__name">{s.title}</span>
              {s.meeting_url && (
                <a
                  href={s.meeting_url}
                  target="_blank"
                  rel="noreferrer"
                  className="session-scheduler__join"
                >
                  {t('sessions.join')}
                </a>
              )}
              <button
                type="button"
                className="session-scheduler__delete"
                onClick={() => void handleDelete(s.id)}
              >
                {t('quiz.remove')}
              </button>
            </li>
          ))}
        </ul>
      )}

      <form className="session-scheduler__form" onSubmit={handleSchedule}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder={t('sessions.sessionTitle')}
          required
        />
        <input
          type="datetime-local"
          value={startsAt}
          onChange={(e) => setStartsAt(e.target.value)}
          required
        />
        <label className="session-scheduler__field">
          <span>{t('quiz.timeLimit')}</span>
          <input
            type="number"
            min={15}
            max={240}
            step={15}
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value) || 60)}
          />
        </label>
        <input
          type="url"
          value={meetingUrl}
          onChange={(e) => setMeetingUrl(e.target.value)}
          placeholder={t('sessions.linkPlaceholder')}
        />
        <button type="submit" disabled={busy}>
          {t('sessions.schedule')}
        </button>
      </form>
    </div>
  )
}
