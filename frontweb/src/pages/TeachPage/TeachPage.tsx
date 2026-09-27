import { useEffect, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useAuth } from '../../auth/AuthProvider'
import { supabase, type Classroom } from '../../lib/supabase'
import { ListingEditor } from '../../components/teach/ListingEditor/ListingEditor'
import { JoinRequests } from '../../components/teach/JoinRequests/JoinRequests'
import { Earnings } from '../../components/teach/Earnings/Earnings'
import './TeachPage.css'

export function TeachPage() {
  const { t } = useTranslation()
  const { user } = useAuth()
  const [classes, setClasses] = useState<Classroom[]>([])
  const [name, setName] = useState('')
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!user || !supabase) return
    void supabase
      .from('classrooms')
      .select('*')
      .eq('teacher_id', user.id)
      .order('created_at', { ascending: true })
      .then(({ data }) => setClasses((data as Classroom[] | null) ?? []))
  }, [user])

  async function handleCreate(event: FormEvent) {
    event.preventDefault()
    if (!user || !supabase) return
    setError(null)
    const { data, error: err } = await supabase
      .from('classrooms')
      .insert({ teacher_id: user.id, name: name.trim() })
      .select()
      .single()
    if (err) {
      setError(err.message)
      return
    }
    setClasses((prev) => [...prev, data as Classroom])
    setName('')
  }

  return (
    <main className="teach-page">
      <h1 className="teach-page__title">{t('teach.title')}</h1>

      <ul className="teach-page__list">
        {classes.map((classroom) => (
          <li key={classroom.id}>
            <Link className="teach-page__class" to={`/teach/${classroom.id}`}>
              <span className="teach-page__class-name">{classroom.name}</span>
              <span className="teach-page__class-code">
                {classroom.join_code}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <form className="teach-page__create" onSubmit={handleCreate}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={t('teach.className')}
          required
        />
        <button type="submit">{t('teach.create')}</button>
      </form>
      {error && <p className="teach-page__error">{error}</p>}

      <JoinRequests classes={classes} />

      <section className="teach-page__section">
        <h2 className="teach-page__section-title">{t('teachers.listing')}</h2>
        <ListingEditor />
      </section>

      <Earnings />
    </main>
  )
}
