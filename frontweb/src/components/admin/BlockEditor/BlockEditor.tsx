import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import type {
  LessonBlock,
  McqBlock,
  OrderStepsBlock,
} from '../../../content/types'
import { uploadLessonMedia } from '../../../lib/media'
import {
  emptyLocalized,
  LocalizedInput,
} from '../LocalizedInput/LocalizedInput'
import './BlockEditor.css'

type BlockEditorProps = {
  block: LessonBlock
  onChange: (block: LessonBlock) => void
  onDelete: () => void
  onMoveUp?: () => void
  onMoveDown?: () => void
}

function JsonEditor({
  block,
  onChange,
}: {
  block: LessonBlock
  onChange: (block: LessonBlock) => void
}) {
  const [text, setText] = useState(() => JSON.stringify(block, null, 2))
  const [invalid, setInvalid] = useState(false)

  return (
    <textarea
      className={`block-editor__json${invalid ? ' block-editor__json--invalid' : ''}`}
      value={text}
      rows={6}
      spellCheck={false}
      onChange={(e) => setText(e.target.value)}
      onBlur={() => {
        try {
          const parsed = JSON.parse(text) as LessonBlock
          setInvalid(false)
          onChange(parsed)
        } catch {
          setInvalid(true)
        }
      }}
    />
  )
}

function MediaField({
  src,
  accept,
  onUploaded,
}: {
  src: string
  accept: string
  onUploaded: (url: string) => void
}) {
  const [busy, setBusy] = useState(false)

  return (
    <div className="block-editor__media">
      {src &&
        (accept.startsWith('image') ? (
          <img className="block-editor__media-preview" src={src} alt="" />
        ) : (
          <video className="block-editor__media-preview" src={src} controls />
        ))}
      <input
        type="file"
        accept={accept}
        disabled={busy}
        onChange={(e) => {
          const file = e.target.files?.[0]
          if (!file) return
          setBusy(true)
          void uploadLessonMedia(file).then((url) => {
            setBusy(false)
            if (url) onUploaded(url)
          })
        }}
      />
    </div>
  )
}

export function BlockEditor({
  block,
  onChange,
  onDelete,
  onMoveUp,
  onMoveDown,
}: BlockEditorProps) {
  const { t } = useTranslation()

  function renderFields() {
    switch (block.type) {
      case 'paragraph':
        return (
          <LocalizedInput
            label={t('admin.fields.text')}
            value={block.text}
            onChange={(text) => onChange({ ...block, text })}
            multiline
          />
        )
      case 'list':
        return (
          <div className="block-editor__stack">
            {block.items.map((item, i) => (
              <div key={i} className="block-editor__row">
                <div className="block-editor__grow">
                  <LocalizedInput
                    label={`${t('admin.fields.item')} ${i + 1}`}
                    value={item}
                    onChange={(next) =>
                      onChange({
                        ...block,
                        items: block.items.map((it, j) => (j === i ? next : it)),
                      })
                    }
                  />
                </div>
                <button
                  type="button"
                  className="block-editor__icon-btn"
                  onClick={() =>
                    onChange({
                      ...block,
                      items: block.items.filter((_, j) => j !== i),
                    })
                  }
                  aria-label={t('admin.remove')}
                >
                  ×
                </button>
              </div>
            ))}
            <button
              type="button"
              className="block-editor__add-btn"
              onClick={() =>
                onChange({ ...block, items: [...block.items, emptyLocalized()] })
              }
            >
              + {t('admin.fields.item')}
            </button>
          </div>
        )
      case 'example':
        return (
          <div className="block-editor__stack">
            <LocalizedInput
              label={t('admin.fields.question')}
              value={block.question}
              onChange={(question) => onChange({ ...block, question })}
              multiline
            />
            <LocalizedInput
              label={t('admin.fields.answer')}
              value={block.answer}
              onChange={(answer) => onChange({ ...block, answer })}
            />
          </div>
        )
      case 'mcq': {
        const mcq: McqBlock = block
        return (
          <div className="block-editor__stack">
            <LocalizedInput
              label={t('admin.fields.prompt')}
              value={mcq.prompt}
              onChange={(prompt) => onChange({ ...mcq, prompt })}
              multiline
            />
            {mcq.choices.map((choice, i) => (
              <div key={i} className="block-editor__row">
                <label className="block-editor__radio">
                  <input
                    type="radio"
                    checked={mcq.correctIndex === i}
                    onChange={() => onChange({ ...mcq, correctIndex: i })}
                  />
                </label>
                <div className="block-editor__grow">
                  <LocalizedInput
                    label={`${t('admin.fields.choice')} ${i + 1}`}
                    value={choice.text}
                    onChange={(text) =>
                      onChange({
                        ...mcq,
                        choices: mcq.choices.map((c, j) =>
                          j === i ? { ...c, text } : c,
                        ),
                      })
                    }
                  />
                </div>
                <button
                  type="button"
                  className="block-editor__icon-btn"
                  onClick={() =>
                    onChange({
                      ...mcq,
                      choices: mcq.choices.filter((_, j) => j !== i),
                      correctIndex:
                        mcq.correctIndex >= i && mcq.correctIndex > 0
                          ? mcq.correctIndex - 1
                          : mcq.correctIndex,
                    })
                  }
                  aria-label={t('admin.remove')}
                >
                  ×
                </button>
              </div>
            ))}
            <button
              type="button"
              className="block-editor__add-btn"
              onClick={() =>
                onChange({
                  ...mcq,
                  choices: [...mcq.choices, { text: emptyLocalized() }],
                })
              }
            >
              + {t('admin.fields.choice')}
            </button>
          </div>
        )
      }
      case 'numericInput':
        return (
          <div className="block-editor__stack">
            <LocalizedInput
              label={t('admin.fields.prompt')}
              value={block.prompt}
              onChange={(prompt) => onChange({ ...block, prompt })}
              multiline
            />
            <div className="block-editor__row block-editor__row--inline">
              <label className="block-editor__inline-field">
                {t('admin.fields.answer')}
                <input
                  type="number"
                  value={block.answer}
                  onChange={(e) =>
                    onChange({ ...block, answer: Number(e.target.value) })
                  }
                />
              </label>
              <label className="block-editor__inline-field">
                {t('admin.fields.tolerance')}
                <input
                  type="number"
                  value={block.tolerance ?? 0}
                  onChange={(e) =>
                    onChange({ ...block, tolerance: Number(e.target.value) })
                  }
                />
              </label>
              <label className="block-editor__inline-field">
                {t('admin.fields.unit')}
                <input
                  type="text"
                  value={block.unit ?? ''}
                  onChange={(e) =>
                    onChange({ ...block, unit: e.target.value || undefined })
                  }
                />
              </label>
            </div>
            <LocalizedInput
              label={t('admin.fields.hint')}
              value={block.hint ?? emptyLocalized()}
              onChange={(hint) => onChange({ ...block, hint })}
            />
          </div>
        )
      case 'orderSteps': {
        const steps: OrderStepsBlock = block
        return (
          <div className="block-editor__stack">
            <LocalizedInput
              label={t('admin.fields.prompt')}
              value={steps.prompt}
              onChange={(prompt) => onChange({ ...steps, prompt })}
              multiline
            />
            {steps.steps.map((step, i) => (
              <div key={i} className="block-editor__row">
                <div className="block-editor__grow">
                  <LocalizedInput
                    label={`${t('admin.fields.step')} ${i + 1}`}
                    value={step}
                    onChange={(next) =>
                      onChange({
                        ...steps,
                        steps: steps.steps.map((s, j) => (j === i ? next : s)),
                      })
                    }
                  />
                </div>
                <button
                  type="button"
                  className="block-editor__icon-btn"
                  onClick={() =>
                    onChange({
                      ...steps,
                      steps: steps.steps.filter((_, j) => j !== i),
                    })
                  }
                  aria-label={t('admin.remove')}
                >
                  ×
                </button>
              </div>
            ))}
            <button
              type="button"
              className="block-editor__add-btn"
              onClick={() =>
                onChange({
                  ...steps,
                  steps: [...steps.steps, emptyLocalized()],
                })
              }
            >
              + {t('admin.fields.step')}
            </button>
          </div>
        )
      }
      case 'image':
        return (
          <div className="block-editor__stack">
            <MediaField
              src={block.src}
              accept="image/*"
              onUploaded={(src) => onChange({ ...block, src })}
            />
            <LocalizedInput
              label={t('admin.fields.alt')}
              value={block.alt}
              onChange={(alt) => onChange({ ...block, alt })}
            />
          </div>
        )
      case 'video':
        return (
          <div className="block-editor__stack">
            <MediaField
              src={block.src}
              accept="video/*"
              onUploaded={(src) => onChange({ ...block, src })}
            />
            <LocalizedInput
              label={t('admin.fields.caption')}
              value={block.caption ?? emptyLocalized()}
              onChange={(caption) => onChange({ ...block, caption })}
            />
          </div>
        )
      case 'code':
        return (
          <textarea
            className="block-editor__json"
            dir="ltr"
            value={block.code}
            rows={6}
            spellCheck={false}
            onChange={(e) => onChange({ ...block, code: e.target.value })}
          />
        )
      default:
        return <JsonEditor block={block} onChange={onChange} />
    }
  }

  return (
    <div className="block-editor">
      <header className="block-editor__header">
        <span className="block-editor__type">{block.type}</span>
        <div className="block-editor__controls">
          {onMoveUp && (
            <button
              type="button"
              className="block-editor__icon-btn"
              onClick={onMoveUp}
              aria-label={t('admin.moveUp')}
            >
              ↑
            </button>
          )}
          {onMoveDown && (
            <button
              type="button"
              className="block-editor__icon-btn"
              onClick={onMoveDown}
              aria-label={t('admin.moveDown')}
            >
              ↓
            </button>
          )}
          <button
            type="button"
            className="block-editor__icon-btn"
            onClick={onDelete}
            aria-label={t('admin.remove')}
          >
            ×
          </button>
        </div>
      </header>
      {renderFields()}
    </div>
  )
}
