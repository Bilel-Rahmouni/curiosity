import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import type { Level, SubjectSlug } from '../../../data/curriculum'
import { countLessonsInLevel, levelPath } from '../../../data/curriculum'
import { levelKey } from '../../../i18n/keys'
import './LevelCard.css'

type LevelCardProps = {
  subjectSlug: SubjectSlug
  level: Level
  index: number
}

export function LevelCard({ subjectSlug, level, index }: LevelCardProps) {
  const { t } = useTranslation()
  const lessonCount = countLessonsInLevel(level)

  return (
    <Link
      to={levelPath(subjectSlug, level.slug)}
      className="level-card"
      style={{ animationDelay: `${index * 0.04}s` }}
    >
      <span className="level-card__step">{index + 1}</span>
      <div className="level-card__body">
        <span className="level-card__label">{t(levelKey(level.slug))}</span>
        <span className="level-card__meta">
          {t('common.unitMeta', {
            units: level.units.length,
            lessons: lessonCount,
          })}
        </span>
      </div>
    </Link>
  )
}
