import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { supabase } from '../../lib/supabase'
import { levelKey, subjectKey } from '../../i18n/keys'
import type {
  EducationLevelSlug,
  SubjectSlug,
} from '../../data/curriculum'
import './CertificatePage.css'

type CertificateRow = {
  serial: string
  student_name: string
  subject_slug: string
  level_slug: string
  issued_at: string
}

export function CertificatePage() {
  const { serial } = useParams()
  const { t, i18n } = useTranslation()
  const [cert, setCert] = useState<CertificateRow | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!supabase || !serial) {
      setLoading(false)
      return
    }
    let cancelled = false
    void (async () => {
      const { data } = await supabase!.rpc('verify_certificate', {
        p_serial: serial,
      })
      if (!cancelled) {
        const rows = (data as CertificateRow[] | null) ?? []
        setCert(rows[0] ?? null)
        setLoading(false)
      }
    })()
    return () => {
      cancelled = true
    }
  }, [serial])

  if (loading) {
    return <main className="certificate-page" />
  }

  if (!cert) {
    return (
      <main className="certificate-page">
        <p className="certificate-page__invalid">{t('certificate.invalid')}</p>
      </main>
    )
  }

  return (
    <main className="certificate-page">
      <div className="certificate-page__sheet">
        <span className="certificate-page__brand">{t('brand')}</span>
        <span className="certificate-page__heading">
          {t('certificate.title')}
        </span>
        <span className="certificate-page__name">{cert.student_name}</span>
        <p className="certificate-page__statement">
          {t('certificate.statement', {
            subject: t(subjectKey(cert.subject_slug as SubjectSlug)),
            level: t(levelKey(cert.level_slug as EducationLevelSlug)),
          })}
        </p>
        <div className="certificate-page__meta">
          <span dir="ltr">
            {new Date(cert.issued_at).toLocaleDateString(i18n.language, {
              dateStyle: 'long',
            })}
          </span>
          <span className="certificate-page__serial" dir="ltr">
            {t('certificate.serial')}: {cert.serial}
          </span>
        </div>
      </div>

      <button
        type="button"
        className="certificate-page__print"
        onClick={() => window.print()}
      >
        {t('certificate.print')}
      </button>
    </main>
  )
}
