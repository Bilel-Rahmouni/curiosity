import { useState, type FormEvent } from 'react'
import { Navigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useAuth } from '../../auth/AuthProvider'
import './LoginPage.css'

export function LoginPage() {
  const { t } = useTranslation()
  const { configured, user, signIn, signUp, signInWithGoogle } = useAuth()
  const [mode, setMode] = useState<'signIn' | 'signUp'>('signIn')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [notice, setNotice] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)

  if (!configured) {
    return <Navigate to="/" replace />
  }
  if (user) {
    return <Navigate to="/account" replace />
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    setBusy(true)
    setError(null)
    setNotice(null)
    if (mode === 'signIn') {
      // On success the auth state updates and the <Navigate> above redirects.
      const err = await signIn(email, password)
      setBusy(false)
      if (err) setError(err)
    } else {
      const err = await signUp(email, password, name)
      setBusy(false)
      if (err) {
        setError(err)
      } else {
        setNotice(t('auth.checkEmail'))
      }
    }
  }

  return (
    <main className="login-page">
      <form className="login-page__card" onSubmit={handleSubmit}>
        <h1 className="login-page__title">
          {t(mode === 'signIn' ? 'auth.signIn' : 'auth.signUp')}
        </h1>

        {mode === 'signUp' && (
          <label className="login-page__field">
            <span>{t('auth.name')}</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              required
            />
          </label>
        )}

        <label className="login-page__field">
          <span>{t('auth.email')}</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />
        </label>

        <label className="login-page__field">
          <span>{t('auth.password')}</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete={
              mode === 'signIn' ? 'current-password' : 'new-password'
            }
            minLength={8}
            required
          />
        </label>

        {error && <p className="login-page__error">{error}</p>}
        {notice && <p className="login-page__notice">{notice}</p>}

        <button className="login-page__submit" type="submit" disabled={busy}>
          {t(mode === 'signIn' ? 'auth.signIn' : 'auth.signUp')}
        </button>

        <button
          className="login-page__google"
          type="button"
          onClick={() => void signInWithGoogle()}
        >
          {t('auth.google')}
        </button>

        <button
          className="login-page__toggle"
          type="button"
          onClick={() => {
            setMode(mode === 'signIn' ? 'signUp' : 'signIn')
            setError(null)
            setNotice(null)
          }}
        >
          {t(mode === 'signIn' ? 'auth.noAccount' : 'auth.haveAccount')}
        </button>
      </form>
    </main>
  )
}
