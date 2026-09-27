import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useAuth } from '../../../auth/AuthProvider'
import {
  supabase,
  type Classroom,
  type JoinRequest,
} from '../../../lib/supabase'
import './JoinRequests.css'

type JoinRequestsProps = {
  classes: Classroom[]
}

export function JoinRequests({ classes }: JoinRequestsProps) {
  const { t } = useTranslation()
  const { user } = useAuth()
  const [requests, setRequests] = useState<JoinRequest[]>([])
  const [names, setNames] = useState<Record<string, string>>({})
  const [targets, setTargets] = useState<Record<string, string>>({})

  useEffect(() => {
    if (!supabase || !user) return
    let cancelled = false
    void (async () => {
      const { data } = await supabase!
        .from('join_requests')
        .select('*')
        .eq('teacher_id', user.id)
        .eq('status', 'pending')
        .order('created_at', { ascending: true })
      if (cancelled) return
      const rows = (data as JoinRequest[] | null) ?? []
      setRequests(rows)
      if (rows.length > 0) {
        const { data: profiles } = await supabase!
          .from('profiles')
          .select('id, display_name')
          .in('id', [...new Set(rows.map((r) => r.student_id))])
        if (cancelled) return
        const map: Record<string, string> = {}
        for (const p of (profiles as
          | { id: string; display_name: string }[]
          | null) ?? []) {
          map[p.id] = p.display_name
        }
        setNames(map)
      }
    })()
    return () => {
      cancelled = true
    }
  }, [user])

  if (requests.length === 0) return null

  async function respond(request: JoinRequest, accept: boolean) {
    if (!supabase) return
    const classroom = targets[request.id] ?? classes[0]?.id
    if (accept && !classroom) return
    const { error } = await supabase.rpc('respond_join_request', {
      p_request: request.id,
      p_accept: accept,
      p_classroom: accept ? classroom : null,
    })
    if (!error) {
      setRequests((prev) => prev.filter((r) => r.id !== request.id))
    }
  }

  return (
    <section className="join-requests__section">
      <h2 className="join-requests__title">{t('teachers.requests')}</h2>
      <ul className="join-requests">
        {requests.map((request) => (
          <li key={request.id} className="join-requests__item">
            <div className="join-requests__info">
              <span className="join-requests__name">
                {names[request.student_id] ?? '…'}
              </span>
              {request.message && (
                <span className="join-requests__message">
                  {request.message}
                </span>
              )}
            </div>
            <div className="join-requests__actions">
              <select
                value={targets[request.id] ?? classes[0]?.id ?? ''}
                onChange={(e) =>
                  setTargets((prev) => ({
                    ...prev,
                    [request.id]: e.target.value,
                  }))
                }
              >
                {classes.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
              <button
                type="button"
                className="join-requests__accept"
                disabled={classes.length === 0}
                onClick={() => void respond(request, true)}
              >
                {t('teachers.accept')}
              </button>
              <button
                type="button"
                className="join-requests__decline"
                onClick={() => void respond(request, false)}
              >
                {t('teachers.decline')}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
