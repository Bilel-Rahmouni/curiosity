import { useEffect, useState, type FormEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { useAuth } from '../../../auth/AuthProvider'
import { supabase, type TeacherProfileRow } from '../../../lib/supabase'
import { subjects } from '../../../data/curriculum'
import { subjectKey } from '../../../i18n/keys'
import './ListingEditor.css'

export function ListingEditor() {
  const { t } = useTranslation()
  const { user } = useAuth()
  const [listing, setListing] = useState<TeacherProfileRow | null>(null)
  const [bio, setBio] = useState('')
  const [picked, setPicked] = useState<string[]>([])
  const [rate, setRate] = useState<number>(0)
  const [saved, setSaved] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!supabase || !user) return
    let cancelled = false
    void (async () => {
      const { data } = await supabase!
        .from('teacher_profiles')
        .select('*')
        .eq('teacher_id', user.id)
        .maybeSingle()
      if (cancelled) return
      const row = data as TeacherProfileRow | null
      if (row) {
        setListing(row)
        setBio(row.bio)
        setPicked(row.subjects)
        setRate(
          row.hourly_rate_millimes ? row.hourly_rate_millimes / 1000 : 0,
        )
      }
      setLoaded(true)
    })()
    return () => {
      cancelled = true
    }
  }, [user])

  if (!loaded) return null

  async function handleSave(event: FormEvent) {
    event.preventDefault()
    if (!supabase || !user) return
    setSaved(false)
    const payload = {
      teacher_id: user.id,
      bio: bio.trim(),
      subjects: picked,
      hourly_rate_millimes: rate > 0 ? Math.round(rate * 1000) : null,
    }
    const { data, error } = listing
      ? await supabase
          .from('teacher_profiles')
          .update(payload)
          .eq('teacher_id', user.id)
          .select()
          .single()
      : await supabase
          .from('teacher_profiles')
          .insert(payload)
          .select()
          .single()
    if (!error && data) {
      setListing(data as TeacherProfileRow)
      setSaved(true)
    }
  }

  return (
    <form className="listing-editor" onSubmit={handleSave}>
      <div className="listing-editor__status">
        {listing?.approved ? (
          <span className="listing-editor__badge listing-editor__badge--live">
            {t('teachers.listed')}
          </span>
        ) : listing ? (
          <span className="listing-editor__badge">
            {t('teachers.pendingApproval')}
          </span>
        ) : null}
      </div>
      <textarea
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        placeholder={t('teachers.bioPlaceholder')}
        rows={3}
      />
      <div className="listing-editor__subjects">
        {subjects.map((s) => (
          <label key={s.slug} className="listing-editor__subject">
            <input
              type="checkbox"
              checked={picked.includes(s.slug)}
              onChange={(e) =>
                setPicked((prev) =>
                  e.target.checked
                    ? [...prev, s.slug]
                    : prev.filter((x) => x !== s.slug),
                )
              }
            />
            {t(subjectKey(s.slug))}
          </label>
        ))}
      </div>
      <label className="listing-editor__rate">
        <span>{t('teachers.rateLabel')}</span>
        <input
          type="number"
          min={0}
          step={5}
          value={rate}
          onChange={(e) => setRate(Number(e.target.value) || 0)}
        />
      </label>
      <div className="listing-editor__actions">
        <button type="submit">{t('teachers.save')}</button>
        {saved && (
          <span className="listing-editor__saved">{t('teachers.saved')}</span>
        )}
      </div>
    </form>
  )
}
