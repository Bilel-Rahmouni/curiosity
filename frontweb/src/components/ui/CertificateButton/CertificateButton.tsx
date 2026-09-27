import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useAuth } from '../../../auth/AuthProvider'
import { useProgress } from '../../../progress/ProgressProvider'
import { supabase } from '../../../lib/supabase'
import { getLevel } from '../../../data/curriculum'
import './CertificateButton.css'

type CertificateButtonProps = {
  subjectSlug: string
  levelSlug: string
}

export function CertificateButton({
  subjectSlug,
  levelSlug,
}: CertificateButtonProps) {
  const { t } = useTranslation()
  const { user } = useAuth()
  const { isCompleted } = useProgress()
  const navigate = useNavigate()
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState(false)

  const result = getLevel(subjectSlug, levelSlug)
  if (!result || !user || !supabase) return null

  const allDone = result.level.units.every((unit) =>
    unit.lessons.every((lesson) =>
      isCompleted(subjectSlug, levelSlug, unit.slug, lesson.slug),
    ),
  )
  if (!allDone) return null

  async function handleClaim() {
    if (!supabase || busy) return
    setBusy(true)
    setError(false)
    const { data, error: err } = await supabase.rpc('issue_certificate', {
      p_subject: subjectSlug,
      p_level: levelSlug,
    })
    setBusy(false)
    if (err || !data) {
      setError(true)
      return
    }
    navigate(`/certificate/${data as string}`)
  }

  return (
    <div className="certificate-button">
      <button type="button" disabled={busy} onClick={() => void handleClaim()}>
        {t('certificate.claim')}
      </button>
      {error && (
        <span className="certificate-button__error">
          {t('certificate.error')}
        </span>
      )}
    </div>
  )
}
