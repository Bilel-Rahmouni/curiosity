import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { PageLayout } from '../../components/layout/PageLayout/PageLayout'
import { useAuth } from '../../auth/AuthProvider'
import { supabase, type TeacherListing } from '../../lib/supabase'
import { subjectKey } from '../../i18n/keys'
import type { SubjectSlug } from '../../data/curriculum'
import './TeachersPage.css'

export function TeachersPage() {
  const { t } = useTranslation()
  const { user, profile } = useAuth()
  const [teachers, setTeachers] = useState<TeacherListing[]>([])
  const [drafts, setDrafts] = useState<Record<string, string>>({})
  const [sent, setSent] = useState<Set<string>>(new Set())

  const canRequest = Boolean(user && profile?.role === 'student')

  useEffect(() => {
    if (!supabase) return
    let cancelled = false
    void (async () => {
      const { data } = await supabase!.rpc('list_teachers')
      if (!cancelled) {
        setTeachers((data as TeacherListing[] | null) ?? [])
      }
    })()
    return () => {
      cancelled = true
    }
  }, [])

  async function sendRequest(teacherId: string) {
    if (!supabase || !user) return
    const { error } = await supabase.from('join_requests').insert({
      teacher_id: teacherId,
      student_id: user.id,
      message: (drafts[teacherId] ?? '').trim(),
    })
    if (!error) {
      setSent((prev) => new Set(prev).add(teacherId))
    }
  }

  return (
    <PageLayout title={t('teachers.title')} wide>
      <div className="teachers-page__grid">
        {teachers.map((teacher, i) => (
          <article
            key={teacher.teacher_id}
            className="teachers-page__card"
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            <h2 className="teachers-page__name">{teacher.display_name}</h2>
            {teacher.subjects.length > 0 && (
              <div className="teachers-page__subjects">
                {teacher.subjects.map((s) => (
                  <span key={s} className="teachers-page__subject">
                    {t(subjectKey(s as SubjectSlug))}
                  </span>
                ))}
              </div>
            )}
            {teacher.bio && (
              <p className="teachers-page__bio">{teacher.bio}</p>
            )}
            {teacher.hourly_rate_millimes !== null && (
              <span className="teachers-page__rate" dir="ltr">
                {t('teachers.rate', {
                  rate: teacher.hourly_rate_millimes / 1000,
                })}
              </span>
            )}

            {canRequest ? (
              sent.has(teacher.teacher_id) ? (
                <span className="teachers-page__sent">
                  {t('teachers.sent')}
                </span>
              ) : (
                <form
                  className="teachers-page__request"
                  onSubmit={(e) => {
                    e.preventDefault()
                    void sendRequest(teacher.teacher_id)
                  }}
                >
                  <input
                    type="text"
                    value={drafts[teacher.teacher_id] ?? ''}
                    onChange={(e) =>
                      setDrafts((prev) => ({
                        ...prev,
                        [teacher.teacher_id]: e.target.value,
                      }))
                    }
                    placeholder={t('teachers.messagePlaceholder')}
                  />
                  <button type="submit">{t('teachers.request')}</button>
                </form>
              )
            ) : !user ? (
              <Link className="teachers-page__signin" to="/login">
                {t('auth.signIn')}
              </Link>
            ) : null}
          </article>
        ))}
      </div>
    </PageLayout>
  )
}
