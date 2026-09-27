import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import type { Subject } from '../../../data/curriculum'
import { countLessonsInSubject, subjectPath } from '../../../data/curriculum'
import { subjectKey } from '../../../i18n/keys'
import { SubjectIcon } from '../SubjectIcon/SubjectIcon'
import './SubjectCard.css'

type SubjectCardProps = {
  subject: Subject
  style?: CSSProperties
}

export function SubjectCard({ subject, style }: SubjectCardProps) {
  const { t } = useTranslation()
  const lessonCount = countLessonsInSubject(subject)

  return (
    <Link to={subjectPath(subject.slug)} className="subject-card" style={style}>
      <SubjectIcon slug={subject.slug} />
      <span className="subject-card__name">{t(subjectKey(subject.slug))}</span>
      <span className="subject-card__meta">
        {t('common.levelMeta', {
          levels: subject.levels.length,
          lessons: lessonCount,
        })}
      </span>
    </Link>
  )
}
