import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useAuth } from '../../../auth/AuthProvider'
import { supabase } from '../../../lib/supabase'
import './NotificationsBell.css'

type NotificationRow = {
  id: string
  kind: 'assignment' | 'quiz' | 'post' | 'session'
  title: string
  link: string | null
  read: boolean
  created_at: string
}

export function NotificationsBell() {
  const { t } = useTranslation()
  const { user } = useAuth()
  const [items, setItems] = useState<NotificationRow[]>([])
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!supabase || !user) {
      setItems([])
      return
    }
    let cancelled = false

    void (async () => {
      const { data } = await supabase!
        .from('notifications')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(20)
      if (!cancelled) {
        setItems((data as NotificationRow[] | null) ?? [])
      }
    })()

    const channel = supabase
      .channel(`notifications-${user.id}`)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'notifications',
          filter: `user_id=eq.${user.id}`,
        },
        (payload) => {
          setItems((prev) =>
            [payload.new as NotificationRow, ...prev].slice(0, 20),
          )
        },
      )
      .subscribe()

    return () => {
      cancelled = true
      void supabase!.removeChannel(channel)
    }
  }, [user])

  useEffect(() => {
    if (!open) return
    function onClickOutside(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [open])

  if (!user) return null

  const unread = items.filter((n) => !n.read).length

  async function toggleOpen() {
    const next = !open
    setOpen(next)
    if (next && unread > 0 && supabase) {
      setItems((prev) => prev.map((n) => ({ ...n, read: true })))
      await supabase
        .from('notifications')
        .update({ read: true })
        .eq('user_id', user!.id)
        .eq('read', false)
    }
  }

  return (
    <div className="notif-bell" ref={rootRef}>
      <button
        type="button"
        className="notif-bell__button"
        aria-label={t('notif.title')}
        onClick={() => void toggleOpen()}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.7 21a2 2 0 0 1-3.4 0" />
        </svg>
        {unread > 0 && (
          <span className="notif-bell__count" dir="ltr">
            {unread}
          </span>
        )}
      </button>

      {open && (
        <div className="notif-bell__panel">
          {items.length === 0 ? (
            <p className="notif-bell__empty">{t('notif.empty')}</p>
          ) : (
            <ul className="notif-bell__list">
              {items.map((n) => (
                <li key={n.id}>
                  {n.link ? (
                    <Link
                      className="notif-bell__item"
                      to={n.link}
                      onClick={() => setOpen(false)}
                    >
                      <span className="notif-bell__kind">
                        {t(`notif.${n.kind}`)}
                      </span>
                      <span className="notif-bell__text">{n.title}</span>
                    </Link>
                  ) : (
                    <span className="notif-bell__item">
                      <span className="notif-bell__kind">
                        {t(`notif.${n.kind}`)}
                      </span>
                      <span className="notif-bell__text">{n.title}</span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}
