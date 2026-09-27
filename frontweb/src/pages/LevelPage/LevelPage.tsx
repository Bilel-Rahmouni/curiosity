import { Link, Navigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getLevel, subjectPath } from '../../data/curriculum'
import { UnitCard } from '../../components/ui/UnitCard/UnitCard'
import { CertificateButton } from '../../components/ui/CertificateButton/CertificateButton'
import { levelKey, subjectKey } from '../../i18n/keys'
import './LevelPage.css'

export function LevelPage() {
  const { subjectSlug, levelSlug } = useParams()
  const { t } = useTranslation()
  const result =
    subjectSlug && levelSlug ? getLevel(subjectSlug, levelSlug) : undefined

  if (!result) {
    return <Navigate to="/learn" replace />
  }

  const { subject, level } = result

  return (
    <main className="level-page">
      <div className="level-page__inner">
        <header className="level-page__header">
          <Link to={subjectPath(subject.slug)} className="level-page__back">
            ← {t(subjectKey(subject.slug))}
          </Link>
          <h1 className="level-page__title">{t(levelKey(level.slug))}</h1>
          <CertificateButton
            subjectSlug={subject.slug}
            levelSlug={level.slug}
          />
        </header>

        <div className="level-page__grid">
          {level.units.map((unit, i) => (
            <UnitCard
              key={unit.slug}
              subjectSlug={subject.slug}
              levelSlug={level.slug}
              unit={unit}
              style={{ animationDelay: `${i * 0.05}s` }}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
