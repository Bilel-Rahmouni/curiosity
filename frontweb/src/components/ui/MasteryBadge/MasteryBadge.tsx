import { useTranslation } from 'react-i18next'
import type { MasteryLevel } from '../../../progress/mastery'
import './MasteryBadge.css'

export function MasteryBadge({ level }: { level: MasteryLevel }) {
  const { t } = useTranslation()

  if (level === 'none') return null

  return (
    <span className={`mastery-badge mastery-badge--${level}`}>
      {t(`mastery.${level}`)}
    </span>
  )
}
