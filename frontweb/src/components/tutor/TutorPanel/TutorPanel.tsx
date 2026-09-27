import { useEffect, useRef, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useAuth } from '../../../auth/AuthProvider'
import { useTutor } from '../TutorProvider'
import './TutorPanel.css'

export function TutorPanel() {
  const { t } = useTranslation()
  const { configured, user } = useAuth()
  const {
    available,
    open,
    setOpen,
    messages,
    busy,
    limitReached,
    send,
    explainDifferently,
  } = useTutor()
  const [draft, setDraft] = useState('')
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight })
  }, [messages, busy])

  if (!configured) return null

  if (!user) {
    return (
      <div className="tutor-panel tutor-panel--signin">
        <Link to="/login" className="tutor-panel__signin">
          {t('tutor.signInPrompt')}
        </Link>
      </div>
    )
  }

  if (!open) {
    return (
      <button
        type="button"
        className="tutor-panel__opener"
        onClick={() => setOpen(true)}
      >
        ✦ {t('tutor.title')}
      </button>
    )
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    const text = draft.trim()
    if (!text || busy || limitReached) return
    setDraft('')
    send(text)
  }

  return (
    <section className="tutor-panel" aria-label={t('tutor.title')}>
      <header className="tutor-panel__header">
        <span className="tutor-panel__name">✦ {t('tutor.title')}</span>
        <div className="tutor-panel__actions">
          <button
            type="button"
            className="tutor-panel__action"
            onClick={explainDifferently}
            disabled={busy || limitReached || !available}
          >
            {t('tutor.explainDifferently')}
          </button>
          <button
            type="button"
            className="tutor-panel__close"
            onClick={() => setOpen(false)}
            aria-label={t('common.close')}
          >
            ×
          </button>
        </div>
      </header>

      <div className="tutor-panel__messages" ref={listRef}>
        {messages.map((message, i) => (
          <div
            key={i}
            className={`tutor-panel__message tutor-panel__message--${message.role}`}
          >
            {message.content}
          </div>
        ))}
        {busy && (
          <div className="tutor-panel__message tutor-panel__message--assistant tutor-panel__message--busy">
            …
          </div>
        )}
        {limitReached && (
          <p className="tutor-panel__limit">{t('tutor.limit')}</p>
        )}
      </div>

      <form className="tutor-panel__composer" onSubmit={handleSubmit}>
        <input
          type="text"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder={t('tutor.placeholder')}
          disabled={busy || limitReached}
        />
        <button type="submit" disabled={busy || limitReached || !draft.trim()}>
          {t('tutor.send')}
        </button>
      </form>
    </section>
  )
}
