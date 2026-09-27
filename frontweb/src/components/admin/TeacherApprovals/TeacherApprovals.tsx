import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { supabase, type TeacherProfileRow } from '../../../lib/supabase'
import { subjectKey } from '../../../i18n/keys'
import type { SubjectSlug } from '../../../data/curriculum'
import './TeacherApprovals.css'

type ListingWithName = TeacherProfileRow & { display_name: string }

export function TeacherApprovals() {
  const { t } = useTranslation()
  const [listings, setListings] = useState<ListingWithName[]>([])

  useEffect(() => {
    if (!supabase) return
    let cancelled = false
    void (async () => {
      const { data } = await supabase!
        .from('teacher_profiles')
        .select('*')
        .order('updated_at', { ascending: false })
      if (cancelled) return
      const rows = (data as TeacherProfileRow[] | null) ?? []
      if (rows.length === 0) return
      const { data: profiles } = await supabase!
        .from('profiles')
        .select('id, display_name')
        .in('id', rows.map((r) => r.teacher_id))
      if (cancelled) return
      const names: Record<string, string> = {}
      for (const p of (profiles as
        | { id: string; display_name: string }[]
        | null) ?? []) {
        names[p.id] = p.display_name
      }
      setListings(
        rows.map((r) => ({
          ...r,
          display_name: names[r.teacher_id] ?? r.teacher_id,
        })),
      )
    })()
    return () => {
      cancelled = true
    }
  }, [])

  if (listings.length === 0) return null

  async function setApproved(teacherId: string, approved: boolean) {
    if (!supabase) return
    const { error } = await supabase
      .from('teacher_profiles')
      .update({ approved })
      .eq('teacher_id', teacherId)
    if (!error) {
      setListings((prev) =>
        prev.map((l) =>
          l.teacher_id === teacherId ? { ...l, approved } : l,
        ),
      )
    }
  }

  return (
    <section className="teacher-approvals">
      <h2 className="teacher-approvals__title">{t('teachers.adminListings')}</h2>
      <ul className="teacher-approvals__list">
        {listings.map((listing) => (
          <li key={listing.teacher_id} className="teacher-approvals__item">
            <div className="teacher-approvals__info">
              <span className="teacher-approvals__name">
                {listing.display_name}
              </span>
              {listing.subjects.length > 0 && (
                <span className="teacher-approvals__subjects">
                  {listing.subjects
                    .map((s) => t(subjectKey(s as SubjectSlug)))
                    .join(' · ')}
                </span>
              )}
              {listing.bio && (
                <span className="teacher-approvals__bio">{listing.bio}</span>
              )}
            </div>
            {listing.approved ? (
              <button
                type="button"
                className="teacher-approvals__revoke"
                onClick={() => void setApproved(listing.teacher_id, false)}
              >
                {t('teachers.revoke')}
              </button>
            ) : (
              <button
                type="button"
                className="teacher-approvals__approve"
                onClick={() => void setApproved(listing.teacher_id, true)}
              >
                {t('teachers.approve')}
              </button>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
