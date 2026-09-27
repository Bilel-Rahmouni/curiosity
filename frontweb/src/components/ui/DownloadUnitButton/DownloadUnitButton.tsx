import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { isSupabaseConfigured } from '../../../lib/supabase'
import {
  fetchLessonBlocks,
  getCachedLessonBlocks,
} from '../../../lib/lessonContent'
import { getUnit } from '../../../data/curriculum'
import { lessonKey } from '../../../content/types'
import './DownloadUnitButton.css'

type DownloadUnitButtonProps = {
  subjectSlug: string
  levelSlug: string
  unitSlug: string
}

export function DownloadUnitButton({
  subjectSlug,
  levelSlug,
  unitSlug,
}: DownloadUnitButtonProps) {
  const { t } = useTranslation()
  const result = getUnit(subjectSlug, levelSlug, unitSlug)
  const [busy, setBusy] = useState(false)
  const [downloaded, setDownloaded] = useState(() =>
    Boolean(
      result?.unit.lessons.every((lesson) =>
        getCachedLessonBlocks(
          lessonKey(subjectSlug, levelSlug, unitSlug, lesson.slug),
        ),
      ),
    ),
  )

  if (!isSupabaseConfigured || !result) return null

  async function handleDownload() {
    if (busy || downloaded || !result) return
    setBusy(true)
    await Promise.all(
      result.unit.lessons.map((lesson) =>
        fetchLessonBlocks(subjectSlug, levelSlug, unitSlug, lesson.slug),
      ),
    )
    setBusy(false)
    setDownloaded(true)
  }

  return (
    <button
      type="button"
      className={`download-unit${downloaded ? ' download-unit--done' : ''}`}
      onClick={() => void handleDownload()}
      disabled={busy || downloaded}
    >
      {downloaded
        ? `✓ ${t('offline.downloaded')}`
        : busy
          ? '…'
          : `↓ ${t('offline.download')}`}
    </button>
  )
}
