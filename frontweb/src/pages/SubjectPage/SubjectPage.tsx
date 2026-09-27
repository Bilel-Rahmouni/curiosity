import { Link, Navigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getSubject } from '../../data/curriculum'
import { LevelCard } from '../../components/ui/LevelCard/LevelCard'
import { subjectKey } from '../../i18n/keys'
import './SubjectPage.css'

export function SubjectPage() {
  const { subjectSlug } = useParams()
  const { t } = useTranslation()
  const subject = subjectSlug ? getSubject(subjectSlug) : undefined

  if (!subject) {
    return <Navigate to="/learn" replace />
  }

  return (
    <main className="subject-page">
      <div className="subject-page__inner">
        <header className="subject-page__header">
          <Link to="/learn" className="subject-page__back">
            {t('common.backToLearn')}
          </Link>
          <h1 className="subject-page__title">
            {t(subjectKey(subject.slug))}
          </h1>
        </header>

        <ol className="subject-page__levels">
          {subject.levels.map((level, i) => (
            <li key={level.slug}>
              <LevelCard
                subjectSlug={subject.slug}
                level={level}
                index={i}
              />
            </li>
          ))}
        </ol>
      </div>
    </main>
  )
}
