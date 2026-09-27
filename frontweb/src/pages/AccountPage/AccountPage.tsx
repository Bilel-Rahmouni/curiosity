import { useEffect, useState, type FormEvent } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useAuth } from '../../auth/AuthProvider'
import { useSubscription } from '../../billing/SubscriptionProvider'
import { BadgeGrid } from '../../components/ui/BadgeGrid/BadgeGrid'
import { supabase, type Assignment, type Classroom } from '../../lib/supabase'
import { unitPath, type EducationLevelSlug, type SubjectSlug } from '../../data/curriculum'
import { unitKey } from '../../i18n/keys'
import './AccountPage.css'

export function AccountPage() {
  const { t } = useTranslation()
  const { configured, loading, user, profile, signOut } = useAuth()
  const { active: subscribed } = useSubscription()
  const [classes, setClasses] = useState<Classroom[]>([])
  const [assignments, setAssignments] = useState<Assignment[]>([])
  const [joinCode, setJoinCode] = useState('')
  const [joinError, setJoinError] = useState<string | null>(null)
  const [optOut, setOptOut] = useState<boolean | null>(null)

  const isStudent = profile?.role === 'student'

  useEffect(() => {
    if (!user || !supabase) return
    let cancelled = false

    async function load() {
      const { data: memberships } = await supabase!
        .from('classroom_members')
        .select('classroom_id')
        .eq('student_id', user!.id)
      const ids = (memberships ?? []).map(
        (m) => (m as { classroom_id: string }).classroom_id,
      )
      if (cancelled || ids.length === 0) return
      const [classRes, assignRes] = await Promise.all([
        supabase!.from('classrooms').select('*').in('id', ids),
        supabase!
          .from('assignments')
          .select('*')
          .in('classroom_id', ids)
          .order('created_at', { ascending: false }),
      ])
      if (cancelled) return
      setClasses((classRes.data as Classroom[] | null) ?? [])
      setAssignments((assignRes.data as Assignment[] | null) ?? [])
    }

    void load()
    return () => {
      cancelled = true
    }
  }, [user])

  if (!configured || (!loading && !user)) {
    return <Navigate to="/login" replace />
  }
  if (!profile) {
    return <main className="account-page" />
  }

  async function handleJoin(event: FormEvent) {
    event.preventDefault()
    if (!supabase) return
    setJoinError(null)
    const { data, error } = await supabase.rpc('join_classroom', {
      p_code: joinCode,
    })
    if (error) {
      setJoinError(error.message)
      return
    }
    setJoinCode('')
    const { data: classRow } = await supabase
      .from('classrooms')
      .select('*')
      .eq('id', data as string)
      .maybeSingle()
    if (classRow) {
      setClasses((prev) =>
        prev.some((c) => c.id === (classRow as Classroom).id)
          ? prev
          : [...prev, classRow as Classroom],
      )
    }
  }

  return (
    <main className="account-page">
      <header className="account-page__header">
        <h1 className="account-page__name">{profile.display_name}</h1>
        <span className="account-page__role">
          {t(`account.roles.${profile.role}`)}
        </span>
      </header>

      <div className="account-page__stats">
        <div className="account-page__stat">
          <span className="account-page__stat-value">{profile.xp}</span>
          <span className="account-page__stat-label">{t('account.xp')}</span>
        </div>
        <div className="account-page__stat">
          <span className="account-page__stat-value">{profile.streak}</span>
          <span className="account-page__stat-label">
            {t('account.streak')}
          </span>
        </div>
        <div className="account-page__stat">
          <span className="account-page__stat-value account-page__stat-value--code">
            {profile.family_code}
          </span>
          <span className="account-page__stat-label">
            {t('account.familyCode')}
          </span>
        </div>
      </div>

      <div className="account-page__links">
        {isStudent && (
          <Link className="account-page__link" to="/pricing">
            {t('billing.title')}
            {subscribed ? ` · ${t('billing.active')}` : ''}
          </Link>
        )}
        {(profile.role === 'teacher' || profile.role === 'admin') && (
          <Link className="account-page__link" to="/teach">
            {t('teach.title')}
          </Link>
        )}
        {profile.role === 'parent' && (
          <Link className="account-page__link" to="/family">
            {t('family.title')}
          </Link>
        )}
        {profile.role === 'admin' && (
          <Link className="account-page__link" to="/admin">
            {t('admin.title')}
          </Link>
        )}
      </div>

      {isStudent && (
        <section className="account-page__section">
          <h2 className="account-page__section-title">{t('badges.title')}</h2>
          <BadgeGrid />
        </section>
      )}

      {isStudent && (
        <section className="account-page__section">
          <h2 className="account-page__section-title">
            {t('account.classes')}
          </h2>
          {classes.length > 0 && (
            <ul className="account-page__list">
              {classes.map((c) => (
                <li key={c.id} className="account-page__list-item">
                  {c.name}
                </li>
              ))}
            </ul>
          )}
          <form className="account-page__join" onSubmit={handleJoin}>
            <input
              type="text"
              value={joinCode}
              onChange={(e) => setJoinCode(e.target.value)}
              placeholder={t('account.joinCodePlaceholder')}
              required
            />
            <button type="submit">{t('account.join')}</button>
          </form>
          {joinError && <p className="account-page__error">{joinError}</p>}
          <label className="account-page__optout">
            <input
              type="checkbox"
              checked={optOut ?? Boolean(profile.leaderboard_opt_out)}
              onChange={async (e) => {
                const next = e.target.checked
                setOptOut(next)
                if (supabase) {
                  await supabase
                    .from('profiles')
                    .update({ leaderboard_opt_out: next })
                    .eq('id', profile.id)
                }
              }}
            />
            {t('leaderboard.optOut')}
          </label>
        </section>
      )}

      {assignments.length > 0 && (
        <section className="account-page__section">
          <h2 className="account-page__section-title">
            {t('account.assignments')}
          </h2>
          <ul className="account-page__list">
            {assignments.map((a) => (
              <li key={a.id} className="account-page__list-item">
                <Link
                  className="account-page__assignment"
                  to={unitPath(a.subject_slug, a.level_slug, a.unit_slug)}
                >
                  {t(
                    unitKey(
                      a.subject_slug as SubjectSlug,
                      a.level_slug as EducationLevelSlug,
                      a.unit_slug,
                    ),
                  )}
                </Link>
                {a.due_date && (
                  <span className="account-page__due">
                    {t('account.due', { date: a.due_date })}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      <button
        className="account-page__signout"
        type="button"
        onClick={() => void signOut()}
      >
        {t('auth.signOut')}
      </button>
    </main>
  )
}
