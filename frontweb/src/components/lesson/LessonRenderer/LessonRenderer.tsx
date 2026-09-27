import { useTranslation } from 'react-i18next'
import type { LessonBlock } from '../../../content/types'
import { pickLocalized } from '../../../content/types'
import { McqExercise } from '../../exercise/McqExercise/McqExercise'
import { NumericExercise } from '../../exercise/NumericExercise/NumericExercise'
import { OrderStepsExercise } from '../../exercise/OrderStepsExercise/OrderStepsExercise'
import { SpeakExercise } from '../../exercise/SpeakExercise/SpeakExercise'
import type { LessonRef } from '../../exercise/types'
import './LessonRenderer.css'

type LessonRendererProps = {
  blocks: LessonBlock[]
  lesson?: LessonRef
}

function Diagram({ block }: { block: LessonBlock }) {
  switch (block.type) {
    case 'counter':
      return (
        <div className="lesson-diagram__dots">
          {Array.from({ length: block.count }, (_, i) => (
            <span key={i} className="lesson-diagram__dot" />
          ))}
        </div>
      )
    case 'shapes':
      return (
        <div className="lesson-diagram__shapes">
          {block.shapes.map((shape, i) => (
            <span
              key={i}
              className={`lesson-diagram__shape lesson-diagram__shape--${shape}`}
            />
          ))}
        </div>
      )
    case 'numberLine': {
      const range = block.end - block.start
      const markPercent =
        block.mark !== undefined
          ? ((block.mark - block.start) / range) * 100
          : undefined
      return (
        <div className="lesson-diagram__line">
          {markPercent !== undefined && (
            <span
              className="lesson-diagram__mark"
              style={{ left: `${markPercent}%` }}
            />
          )}
        </div>
      )
    }
    case 'compare':
      return (
        <div className="lesson-diagram__compare">
          <span>{block.left}</span>
          <span>{block.left === block.right ? '=' : block.left > block.right ? '>' : '<'}</span>
          <span>{block.right}</span>
        </div>
      )
    case 'ratio': {
      const total = block.a + block.b
      return (
        <div className="lesson-diagram__ratio">
          <div className="lesson-diagram__ratio-row">
            <span>A</span>
            <div className="lesson-diagram__ratio-bar">
              <div
                className="lesson-diagram__ratio-fill"
                style={{ width: `${(block.a / total) * 100}%` }}
              />
            </div>
          </div>
          <div className="lesson-diagram__ratio-row">
            <span>B</span>
            <div className="lesson-diagram__ratio-bar">
              <div
                className="lesson-diagram__ratio-fill"
                style={{ width: `${(block.b / total) * 100}%` }}
              />
            </div>
          </div>
        </div>
      )
    }
    case 'atom':
      return (
        <div className="lesson-diagram__atom">
          <div className="lesson-diagram__orbit">
            <div className="lesson-diagram__nucleus">+</div>
            {Array.from({ length: block.electrons }, (_, i) => (
              <span
                key={i}
                className={`lesson-diagram__electron lesson-diagram__electron--${i + 1}`}
              />
            ))}
          </div>
        </div>
      )
    case 'force':
      return (
        <div className="lesson-diagram__force">
          {block.direction === 'left' && <span>←</span>}
          <div className="lesson-diagram__box" />
          {block.direction === 'right' && <span>→</span>}
        </div>
      )
    case 'states':
      return (
        <div className="lesson-diagram__states">
          {(['solid', 'liquid', 'gas'] as const).map((state) => (
            <span
              key={state}
              className={`lesson-diagram__state${
                block.highlight === state ? ' lesson-diagram__state--active' : ''
              }`}
            >
              {state}
            </span>
          ))}
        </div>
      )
    case 'ph': {
      const percent = (block.value / 14) * 100
      return (
        <div className="lesson-diagram__ph">
          <span
            className="lesson-diagram__ph-mark"
            style={{ left: `${percent}%` }}
          />
        </div>
      )
    }
    case 'circuit':
      return (
        <div className="lesson-diagram__circuit">
          <span className="lesson-diagram__wire" />
          <span
            className={`lesson-diagram__bulb${
              block.closed ? ' lesson-diagram__bulb--on' : ''
            }`}
          />
          <span
            className={`lesson-diagram__wire${
              block.closed ? '' : ' lesson-diagram__wire--off'
            }`}
          />
        </div>
      )
    default:
      return null
  }
}

export function LessonRenderer({ blocks, lesson }: LessonRendererProps) {
  const { i18n } = useTranslation()
  const lang = i18n.language

  return (
    <div className="lesson-renderer">
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'paragraph':
            return (
              <p key={index} className="lesson-renderer__paragraph">
                {pickLocalized(block.text, lang)}
              </p>
            )
          case 'list':
            return (
              <ul key={index} className="lesson-renderer__list">
                {block.items.map((item, i) => (
                  <li key={i}>{pickLocalized(item, lang)}</li>
                ))}
              </ul>
            )
          case 'example':
            return (
              <div key={index} className="lesson-renderer__example">
                <p className="lesson-renderer__example-q">
                  {pickLocalized(block.question, lang)}
                </p>
                <p className="lesson-renderer__example-a">
                  {pickLocalized(block.answer, lang)}
                </p>
              </div>
            )
          case 'code':
            return (
              <pre key={index} className="lesson-renderer__code" dir="ltr">
                <code>{block.code}</code>
              </pre>
            )
          case 'speak':
            return <SpeakExercise key={index} block={block} />
          case 'image':
            return (
              <img
                key={index}
                className="lesson-renderer__media"
                src={block.src}
                alt={pickLocalized(block.alt, lang)}
                loading="lazy"
              />
            )
          case 'video':
            return (
              <figure key={index} className="lesson-renderer__media-wrap">
                <video
                  className="lesson-renderer__media"
                  src={block.src}
                  controls
                  preload="metadata"
                />
                {block.caption && (
                  <figcaption className="lesson-renderer__caption">
                    {pickLocalized(block.caption, lang)}
                  </figcaption>
                )}
              </figure>
            )
          case 'mcq':
            return lesson ? (
              <McqExercise key={block.id} block={block} lesson={lesson} />
            ) : null
          case 'numericInput':
            return lesson ? (
              <NumericExercise key={block.id} block={block} lesson={lesson} />
            ) : null
          case 'orderSteps':
            return lesson ? (
              <OrderStepsExercise
                key={block.id}
                block={block}
                lesson={lesson}
              />
            ) : null
          default:
            return (
              <div key={index} className="lesson-renderer__diagram">
                <Diagram block={block} />
              </div>
            )
        }
      })}
    </div>
  )
}

export function LessonEmptyState() {
  const { t } = useTranslation()
  return <p className="lesson-renderer__empty">{t('lesson.comingSoon')}</p>
}
