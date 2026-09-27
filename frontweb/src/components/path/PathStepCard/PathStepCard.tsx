import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import type { PathStep } from '../../../plan/path'
import {
  lessonPath,
  unitPath,
  type EducationLevelSlug,
  type SubjectSlug,
} from '../../../data/curriculum'
import { lessonKey, subjectKey, unitKey } from '../../../i18n/keys'
import './PathStepCard.css'

type PathStepCardProps = {
  step: PathStep
  index: number
  showSubject?: boolean
}

export function PathStepCard({ step, index, showSubject }: PathStepCardProps) {
  const { t } = useTranslation()
  const subject = step.subjectSlug as SubjectSlug
  const level = step.levelSlug as EducationLevelSlug

  return (
    <li className={`path-step path-step--${step.status}`}>
      <span className="path-step__marker" aria-hidden="true">
        {step.status === 'done' ? '✓' : index + 1}
      </span>
      <div className="path-step__body">
        <div className="path-step__head">
          <Link
            className="path-step__title"
            to={unitPath(step.subjectSlug, step.levelSlug, step.unitSlug)}
          >
            {showSubject && (
              <span className="path-step__subject">
                {t(subjectKey(subject))} ·{' '}
              </span>
            )}
            {t(unitKey(subject, level, step.unitSlug))}
          </Link>
          <span className="path-step__count">
            {step.completedSlugs.length}/{step.lessonSlugs.length}
          </span>
        </div>
        {step.dueDate && (
          <span className="path-step__due">
            {t('account.due', { date: step.dueDate })}
          </span>
        )}
        <ul className="path-step__lessons">
          {step.lessonSlugs.map((slug) => {
            const done = step.completedSlugs.includes(slug)
            return (
              <li key={slug}>
                <Link
                  className={`path-step__lesson${done ? ' path-step__lesson--done' : ''}${
                    slug === step.nextLessonSlug && step.status === 'current'
                      ? ' path-step__lesson--next'
                      : ''
                  }`}
                  to={lessonPath(
                    step.subjectSlug,
                    step.levelSlug,
                    step.unitSlug,
                    slug,
                  )}
                >
                  {t(lessonKey(subject, level, step.unitSlug, slug))}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </li>
  )
}
