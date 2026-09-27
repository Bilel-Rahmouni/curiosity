import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import type { SubjectSlug, EducationLevelSlug, Unit } from '../../../data/curriculum'
import { unitPath } from '../../../data/curriculum'
import { unitKey } from '../../../i18n/keys'
import './UnitCard.css'

type UnitCardProps = {
  subjectSlug: SubjectSlug
  levelSlug: EducationLevelSlug
  unit: Unit
  style?: CSSProperties
}

export function UnitCard({
  subjectSlug,
  levelSlug,
  unit,
  style,
}: UnitCardProps) {
  const { t } = useTranslation()

  return (
    <Link
      to={unitPath(subjectSlug, levelSlug, unit.slug)}
      className="unit-card"
      style={style}
    >
      <span className="unit-card__title">
        {t(unitKey(subjectSlug, levelSlug, unit.slug))}
      </span>
      <span className="unit-card__meta">
        {t('common.lessonMeta', { count: unit.lessons.length })}
      </span>
    </Link>
  )
}
