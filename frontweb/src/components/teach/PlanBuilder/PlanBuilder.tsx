import { useState, type FormEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { supabase, type Assignment } from '../../../lib/supabase'
import { subjects, type SubjectSlug } from '../../../data/curriculum'
import { levelKey, subjectKey } from '../../../i18n/keys'
import './PlanBuilder.css'

type PlanBuilderProps = {
  classroomId: string
  existing: Assignment[]
  onCreated: (created: Assignment[]) => void
}

function isoDate(date: Date) {
  return date.toISOString().slice(0, 10)
}

export function PlanBuilder({
  classroomId,
  existing,
  onCreated,
}: PlanBuilderProps) {
  const { t } = useTranslation()
  const [subjectSlug, setSubjectSlug] = useState<SubjectSlug>('mathematics')
  const [levelSlug, setLevelSlug] = useState<string>(
    subjects[0]?.levels[0]?.slug ?? '',
  )
  const [startDate, setStartDate] = useState(() => isoDate(new Date()))
  const [weeksPerUnit, setWeeksPerUnit] = useState(2)
  const [busy, setBusy] = useState(false)

  const subjectData = subjects.find((s) => s.slug === subjectSlug)
  const levelData = subjectData?.levels.find((l) => l.slug === levelSlug)

  async function handleGenerate(event: FormEvent) {
    event.preventDefault()
    if (!supabase || !levelData || busy) return

    const assignedKeys = new Set(
      existing.map((a) => `${a.subject_slug}/${a.level_slug}/${a.unit_slug}`),
    )
    const start = new Date(`${startDate}T00:00:00`)
    const rows = levelData.units
      .filter(
        (u) => !assignedKeys.has(`${subjectSlug}/${levelSlug}/${u.slug}`),
      )
      .map((u, i) => {
        const due = new Date(start)
        due.setDate(due.getDate() + (i + 1) * weeksPerUnit * 7)
        return {
          classroom_id: classroomId,
          subject_slug: subjectSlug,
          level_slug: levelSlug,
          unit_slug: u.slug,
          due_date: isoDate(due),
        }
      })
    if (rows.length === 0) return

    setBusy(true)
    const { data, error } = await supabase
      .from('assignments')
      .insert(rows)
      .select()
    setBusy(false)
    if (!error && data) {
      onCreated(data as Assignment[])
    }
  }

  return (
    <form className="plan-builder" onSubmit={handleGenerate}>
      <select
        value={subjectSlug}
        onChange={(e) => {
          const next = e.target.value as SubjectSlug
          setSubjectSlug(next)
          setLevelSlug(
            subjects.find((s) => s.slug === next)?.levels[0]?.slug ?? '',
          )
        }}
      >
        {subjects.map((s) => (
          <option key={s.slug} value={s.slug}>
            {t(subjectKey(s.slug))}
          </option>
        ))}
      </select>
      <select value={levelSlug} onChange={(e) => setLevelSlug(e.target.value)}>
        {(subjectData?.levels ?? []).map((l) => (
          <option key={l.slug} value={l.slug}>
            {t(levelKey(l.slug))}
          </option>
        ))}
      </select>
      <label className="plan-builder__field">
        <span>{t('teach.startDate')}</span>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />
      </label>
      <label className="plan-builder__field">
        <span>{t('teach.weeksPerUnit')}</span>
        <input
          type="number"
          min={1}
          max={12}
          value={weeksPerUnit}
          onChange={(e) => setWeeksPerUnit(Number(e.target.value) || 1)}
        />
      </label>
      <button type="submit" disabled={busy}>
        {t('teach.generatePlan')}
      </button>
    </form>
  )
}
