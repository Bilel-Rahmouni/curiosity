import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useProgress } from '../../../progress/ProgressProvider'
import { getLesson } from '../../../data/curriculum'
import { lessonKey, unitKey } from '../../../i18n/keys'
import type {
  EducationLevelSlug,
  SubjectSlug,
} from '../../../data/curriculum'
import './ContinueCard.css'

export function ContinueCard() {
  const { t } = useTranslation()
  const { lastVisited } = useProgress()

  if (!lastVisited) return null

  const found = getLesson(
    lastVisited.subjectSlug,
    lastVisited.levelSlug,
    lastVisited.unitSlug,
    lastVisited.lessonSlug,
  )
  if (!found) return null

  return (
    <Link to={lastVisited.path} className="continue-card">
      <span className="continue-card__label">{t('progress.continue')}</span>
      <span className="continue-card__title">
        {t(
          lessonKey(
            lastVisited.subjectSlug as SubjectSlug,
            lastVisited.levelSlug as EducationLevelSlug,
            lastVisited.unitSlug,
            lastVisited.lessonSlug,
          ),
        )}
      </span>
      <span className="continue-card__meta">
        {t(
          unitKey(
            lastVisited.subjectSlug as SubjectSlug,
            lastVisited.levelSlug as EducationLevelSlug,
            lastVisited.unitSlug,
          ),
        )}
      </span>
    </Link>
  )
}
