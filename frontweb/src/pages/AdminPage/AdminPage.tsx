import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { supabase } from '../../lib/supabase'
import {
  subjects,
  type EducationLevelSlug,
  type SubjectSlug,
} from '../../data/curriculum'
import { lessonKey, levelKey, subjectKey, unitKey } from '../../i18n/keys'
import { TeacherApprovals } from '../../components/admin/TeacherApprovals/TeacherApprovals'
import './AdminPage.css'

type StatusRow = { slug: string; status: 'draft' | 'published' }

export function AdminPage() {
  const { t } = useTranslation()
  const [subjectSlug, setSubjectSlug] = useState<SubjectSlug>('mathematics')
  const [levelSlug, setLevelSlug] = useState<string>('primary')
  const [unitSlug, setUnitSlug] = useState<string>('counting')
  const [statuses, setStatuses] = useState<Record<string, StatusRow['status']>>(
    {},
  )

  const subject = subjects.find((s) => s.slug === subjectSlug)
  const level = subject?.levels.find((l) => l.slug === levelSlug)
  const unit = level?.units.find((u) => u.slug === unitSlug)

  useEffect(() => {
    if (!supabase || !unitSlug) return
    let cancelled = false
    void supabase
      .from('lessons')
      .select('slug, status')
      .eq('subject_slug', subjectSlug)
      .eq('level_slug', levelSlug)
      .eq('unit_slug', unitSlug)
      .then(({ data }) => {
        if (cancelled) return
        const map: Record<string, StatusRow['status']> = {}
        for (const row of (data as StatusRow[] | null) ?? []) {
          map[row.slug] = row.status
        }
        setStatuses(map)
      })
    return () => {
      cancelled = true
    }
  }, [subjectSlug, levelSlug, unitSlug])

  return (
    <main className="admin-page">
      <h1 className="admin-page__title">{t('admin.title')}</h1>

      <div className="admin-page__selects">
        <select
          value={subjectSlug}
          onChange={(e) => {
            const next = e.target.value as SubjectSlug
            setSubjectSlug(next)
            const firstLevel = subjects.find((s) => s.slug === next)?.levels[0]
            setLevelSlug(firstLevel?.slug ?? '')
            setUnitSlug(firstLevel?.units[0]?.slug ?? '')
          }}
        >
          {subjects.map((s) => (
            <option key={s.slug} value={s.slug}>
              {t(subjectKey(s.slug))}
            </option>
          ))}
        </select>
        <select
          value={levelSlug}
          onChange={(e) => {
            setLevelSlug(e.target.value)
            const nextLevel = subject?.levels.find(
              (l) => l.slug === e.target.value,
            )
            setUnitSlug(nextLevel?.units[0]?.slug ?? '')
          }}
        >
          {(subject?.levels ?? []).map((l) => (
            <option key={l.slug} value={l.slug}>
              {t(levelKey(l.slug))}
            </option>
          ))}
        </select>
        <select value={unitSlug} onChange={(e) => setUnitSlug(e.target.value)}>
          {(level?.units ?? []).map((u) => (
            <option key={u.slug} value={u.slug}>
              {t(
                unitKey(subjectSlug, levelSlug as EducationLevelSlug, u.slug),
              )}
            </option>
          ))}
        </select>
      </div>

      <ul className="admin-page__lessons">
        {(unit?.lessons ?? []).map((lesson) => (
          <li key={lesson.slug}>
            <Link
              className="admin-page__lesson"
              to={`/admin/${subjectSlug}/${levelSlug}/${unitSlug}/${lesson.slug}`}
            >
              <span className="admin-page__lesson-title">
                {t(
                  lessonKey(
                    subjectSlug,
                    levelSlug as EducationLevelSlug,
                    unitSlug,
                    lesson.slug,
                  ),
                )}
              </span>
              <span
                className={`admin-page__status admin-page__status--${statuses[lesson.slug] ?? 'published'}`}
              >
                {t(`admin.${statuses[lesson.slug] ?? 'published'}`)}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <TeacherApprovals />
    </main>
  )
}
