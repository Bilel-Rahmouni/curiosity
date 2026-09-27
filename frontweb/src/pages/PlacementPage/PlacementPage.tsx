import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { PageLayout } from '../../components/layout/PageLayout/PageLayout'
import { useAuth } from '../../auth/AuthProvider'
import { supabase } from '../../lib/supabase'
import { pickLocalized } from '../../content/types'
import {
  PASS_THRESHOLD,
  placementSets,
  type PlacementSet,
} from '../../content/placement'
import { levelKey, subjectKey } from '../../i18n/keys'
import type { EducationLevelSlug } from '../../data/curriculum'
import './PlacementPage.css'

type Phase =
  | { kind: 'pick' }
  | {
      kind: 'run'
      set: PlacementSet
      levelIndex: number
      questionIndex: number
      correctInLevel: number
      bestPassed: number // index of highest passed level, -1 if none
      selected: number | null
    }
  | { kind: 'done'; set: PlacementSet; recommendedLevel: string }

export function PlacementPage() {
  const { t, i18n } = useTranslation()
  const { user, profile, refreshProfile } = useAuth()
  const [phase, setPhase] = useState<Phase>({ kind: 'pick' })

  async function saveResult(set: PlacementSet, levelSlug: string) {
    if (!supabase || !user) return
    const placement = { ...(profile?.placement ?? {}), [set.subjectSlug]: levelSlug }
    await supabase.from('profiles').update({ placement }).eq('id', user.id)
    void refreshProfile()
  }

  function finish(
    set: PlacementSet,
    bestPassed: number,
  ) {
    const recommendedLevel =
      set.levels[Math.max(bestPassed, 0)]?.levelSlug ?? set.levels[0].levelSlug
    setPhase({ kind: 'done', set, recommendedLevel })
    void saveResult(set, recommendedLevel)
  }

  function answer(choiceIndex: number) {
    if (phase.kind !== 'run' || phase.selected !== null) return
    setPhase({ ...phase, selected: choiceIndex })
  }

  function next() {
    if (phase.kind !== 'run' || phase.selected === null) return
    const level = phase.set.levels[phase.levelIndex]
    const question = level.questions[phase.questionIndex]
    const correctInLevel =
      phase.correctInLevel + (phase.selected === question.correctIndex ? 1 : 0)

    if (phase.questionIndex + 1 < level.questions.length) {
      setPhase({
        ...phase,
        questionIndex: phase.questionIndex + 1,
        correctInLevel,
        selected: null,
      })
      return
    }

    // Level finished.
    const passed = correctInLevel >= PASS_THRESHOLD
    const bestPassed = passed ? phase.levelIndex : phase.bestPassed
    if (passed && phase.levelIndex + 1 < phase.set.levels.length) {
      setPhase({
        kind: 'run',
        set: phase.set,
        levelIndex: phase.levelIndex + 1,
        questionIndex: 0,
        correctInLevel: 0,
        bestPassed,
        selected: null,
      })
    } else {
      finish(phase.set, bestPassed)
    }
  }

  if (phase.kind === 'pick') {
    return (
      <PageLayout title={t('placement.title')}>
        <div className="placement-page__subjects">
          {placementSets.map((set, i) => (
            <button
              key={set.subjectSlug}
              type="button"
              className="placement-page__subject"
              style={{ animationDelay: `${i * 0.06}s` }}
              onClick={() =>
                setPhase({
                  kind: 'run',
                  set,
                  levelIndex: 0,
                  questionIndex: 0,
                  correctInLevel: 0,
                  bestPassed: -1,
                  selected: null,
                })
              }
            >
              {t(subjectKey(set.subjectSlug))}
            </button>
          ))}
        </div>
      </PageLayout>
    )
  }

  if (phase.kind === 'done') {
    return (
      <PageLayout title={t('placement.title')}>
        <div className="placement-page__result">
          <span className="placement-page__result-label">
            {t('placement.recommendation', {
              subject: t(subjectKey(phase.set.subjectSlug)),
            })}
          </span>
          <span className="placement-page__result-level">
            {t(levelKey(phase.recommendedLevel as EducationLevelSlug))}
          </span>
          <Link
            className="placement-page__cta"
            to={`/learn/${phase.set.subjectSlug}/${phase.recommendedLevel}`}
          >
            {t('common.start')}
          </Link>
        </div>
      </PageLayout>
    )
  }

  const level = phase.set.levels[phase.levelIndex]
  const question = level.questions[phase.questionIndex]

  return (
    <PageLayout title={t('placement.title')}>
      <div className="placement-page__run">
        <span className="placement-page__meta">
          {t(subjectKey(phase.set.subjectSlug))} ·{' '}
          {t(levelKey(level.levelSlug as EducationLevelSlug))} ·{' '}
          {phase.questionIndex + 1}/{level.questions.length}
        </span>
        <p className="placement-page__prompt">
          {pickLocalized(question.prompt, i18n.language)}
        </p>
        <div className="placement-page__choices">
          {question.choices.map((choice, i) => {
            let cls = 'placement-page__choice'
            if (phase.selected !== null) {
              if (i === question.correctIndex) {
                cls += ' placement-page__choice--correct'
              } else if (i === phase.selected) {
                cls += ' placement-page__choice--wrong'
              }
            }
            return (
              <button
                key={i}
                type="button"
                className={cls}
                onClick={() => answer(i)}
              >
                {pickLocalized(choice, i18n.language)}
              </button>
            )
          })}
        </div>
        {phase.selected !== null && (
          <button
            type="button"
            className="placement-page__next"
            onClick={next}
          >
            {t('common.next')}
          </button>
        )}
      </div>
    </PageLayout>
  )
}
