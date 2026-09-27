import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import i18n from '../../i18n'
import { supabase } from '../../lib/supabase'
import { getLessonContent } from '../../content'
import {
  lessonKey as contentLessonKey,
  type LessonBlock,
} from '../../content/types'
import { getLesson } from '../../data/curriculum'
import { lessonKey as lessonTitleKey } from '../../i18n/keys'
import type {
  EducationLevelSlug,
  SubjectSlug,
} from '../../data/curriculum'
import { BlockEditor } from '../../components/admin/BlockEditor/BlockEditor'
import { LessonRenderer } from '../../components/lesson/LessonRenderer/LessonRenderer'
import { emptyLocalized } from '../../components/admin/LocalizedInput/LocalizedInput'
import './AdminLessonPage.css'

const addableBlockTypes = [
  'paragraph',
  'list',
  'example',
  'code',
  'mcq',
  'numericInput',
  'orderSteps',
  'image',
  'video',
] as const

function newExerciseId() {
  return `ex-${crypto.randomUUID().slice(0, 8)}`
}

function makeBlock(type: (typeof addableBlockTypes)[number]): LessonBlock {
  switch (type) {
    case 'paragraph':
      return { type, text: emptyLocalized() }
    case 'list':
      return { type, items: [emptyLocalized()] }
    case 'example':
      return { type, question: emptyLocalized(), answer: emptyLocalized() }
    case 'code':
      return { type, code: '' }
    case 'mcq':
      return {
        type,
        id: newExerciseId(),
        prompt: emptyLocalized(),
        choices: [{ text: emptyLocalized() }, { text: emptyLocalized() }],
        correctIndex: 0,
      }
    case 'numericInput':
      return { type, id: newExerciseId(), prompt: emptyLocalized(), answer: 0 }
    case 'orderSteps':
      return {
        type,
        id: newExerciseId(),
        prompt: emptyLocalized(),
        steps: [emptyLocalized(), emptyLocalized()],
      }
    case 'image':
      return { type, src: '', alt: emptyLocalized() }
    case 'video':
      return { type, src: '' }
  }
}

export function AdminLessonPage() {
  const { subjectSlug, levelSlug, unitSlug, lessonSlug } = useParams()
  const { t } = useTranslation()
  const [blocks, setBlocks] = useState<LessonBlock[]>([])
  const [status, setStatus] = useState<'draft' | 'published'>('published')
  const [loaded, setLoaded] = useState(false)
  const [saving, setSaving] = useState(false)
  const [saveError, setSaveError] = useState<string | null>(null)
  const [preview, setPreview] = useState(false)

  const found =
    subjectSlug && levelSlug && unitSlug && lessonSlug
      ? getLesson(subjectSlug, levelSlug, unitSlug, lessonSlug)
      : undefined

  useEffect(() => {
    if (!subjectSlug || !levelSlug || !unitSlug || !lessonSlug) return
    let cancelled = false

    async function load() {
      let remote: { blocks: LessonBlock[]; status: 'draft' | 'published' } | null =
        null
      if (supabase) {
        const { data } = await supabase
          .from('lessons')
          .select('blocks, status')
          .eq('subject_slug', subjectSlug!)
          .eq('level_slug', levelSlug!)
          .eq('unit_slug', unitSlug!)
          .eq('slug', lessonSlug!)
          .maybeSingle()
        if (data) {
          remote = data as { blocks: LessonBlock[]; status: 'draft' | 'published' }
        }
      }
      if (cancelled) return
      if (remote && remote.blocks.length > 0) {
        setBlocks(remote.blocks)
        setStatus(remote.status)
      } else {
        const local = getLessonContent(
          contentLessonKey(subjectSlug!, levelSlug!, unitSlug!, lessonSlug!),
        )
        setBlocks(local?.blocks ?? [])
        setStatus(remote?.status ?? 'published')
      }
      setLoaded(true)
    }

    void load()
    return () => {
      cancelled = true
    }
  }, [subjectSlug, levelSlug, unitSlug, lessonSlug])

  if (!found) {
    return <main className="admin-lesson" />
  }

  const { subject, level, unit, lesson } = found
  const lessonIndex = unit.lessons.findIndex((l) => l.slug === lesson.slug)
  const titleKey = lessonTitleKey(
    subject.slug as SubjectSlug,
    level.slug as EducationLevelSlug,
    unit.slug,
    lesson.slug,
  )

  async function save(nextStatus: 'draft' | 'published') {
    if (!supabase) return
    setSaving(true)
    setSaveError(null)
    const title = {
      en: i18n.getFixedT('en')(titleKey),
      fr: i18n.getFixedT('fr')(titleKey),
      ar: i18n.getFixedT('ar')(titleKey),
    }
    const { error } = await supabase.from('lessons').upsert({
      subject_slug: subject.slug,
      level_slug: level.slug,
      unit_slug: unit.slug,
      slug: lesson.slug,
      position: lessonIndex,
      title,
      blocks,
      status: nextStatus,
    })
    setSaving(false)
    if (error) {
      setSaveError(error.message)
    } else {
      setStatus(nextStatus)
    }
  }

  function updateBlock(index: number, block: LessonBlock) {
    setBlocks((prev) => prev.map((b, i) => (i === index ? block : b)))
  }

  function moveBlock(index: number, delta: -1 | 1) {
    setBlocks((prev) => {
      const next = [...prev]
      const target = index + delta
      if (target < 0 || target >= next.length) return prev
      ;[next[index], next[target]] = [next[target], next[index]]
      return next
    })
  }

  return (
    <main className="admin-lesson">
      <header className="admin-lesson__header">
        <Link to="/admin" className="admin-lesson__back">
          ← {t('admin.title')}
        </Link>
        <h1 className="admin-lesson__title">{t(titleKey)}</h1>
        <div className="admin-lesson__toolbar">
          <span
            className={`admin-lesson__status admin-lesson__status--${status}`}
          >
            {t(`admin.${status}`)}
          </span>
          <button
            type="button"
            className="admin-lesson__tool-btn"
            onClick={() => setPreview((p) => !p)}
          >
            {t(preview ? 'admin.edit' : 'admin.preview')}
          </button>
          <button
            type="button"
            className="admin-lesson__tool-btn"
            onClick={() => void save('draft')}
            disabled={saving || !supabase}
          >
            {t('admin.saveDraft')}
          </button>
          <button
            type="button"
            className="admin-lesson__tool-btn admin-lesson__tool-btn--primary"
            onClick={() => void save('published')}
            disabled={saving || !supabase}
          >
            {t('admin.publish')}
          </button>
        </div>
        {saveError && <p className="admin-lesson__error">{saveError}</p>}
      </header>

      {preview ? (
        <div className="admin-lesson__preview">
          <LessonRenderer
            blocks={blocks}
            lesson={{
              subjectSlug: subject.slug,
              levelSlug: level.slug,
              unitSlug: unit.slug,
              lessonSlug: lesson.slug,
            }}
          />
        </div>
      ) : (
        <div className="admin-lesson__blocks">
          {loaded &&
            blocks.map((block, index) => (
              <BlockEditor
                key={index}
                block={block}
                onChange={(next) => updateBlock(index, next)}
                onDelete={() =>
                  setBlocks((prev) => prev.filter((_, i) => i !== index))
                }
                onMoveUp={index > 0 ? () => moveBlock(index, -1) : undefined}
                onMoveDown={
                  index < blocks.length - 1
                    ? () => moveBlock(index, 1)
                    : undefined
                }
              />
            ))}

          <div className="admin-lesson__add">
            <select
              defaultValue=""
              onChange={(e) => {
                const type = e.target.value as (typeof addableBlockTypes)[number]
                if (!type) return
                setBlocks((prev) => [...prev, makeBlock(type)])
                e.target.value = ''
              }}
            >
              <option value="" disabled>
                + {t('admin.addBlock')}
              </option>
              {addableBlockTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </main>
  )
}
