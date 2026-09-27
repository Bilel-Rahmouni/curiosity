import type { LocalizedText } from '../../../content/types'
import { supportedLanguages } from '../../../i18n'
import './LocalizedInput.css'

type LocalizedInputProps = {
  label: string
  value: LocalizedText
  onChange: (value: LocalizedText) => void
  multiline?: boolean
}

export function LocalizedInput({
  label,
  value,
  onChange,
  multiline,
}: LocalizedInputProps) {
  return (
    <div className="localized-input">
      <span className="localized-input__label">{label}</span>
      <div className="localized-input__fields">
        {supportedLanguages.map((lang) =>
          multiline ? (
            <textarea
              key={lang}
              className="localized-input__field"
              dir={lang === 'ar' ? 'rtl' : 'ltr'}
              placeholder={lang.toUpperCase()}
              value={value[lang] ?? ''}
              rows={2}
              onChange={(e) => onChange({ ...value, [lang]: e.target.value })}
            />
          ) : (
            <input
              key={lang}
              className="localized-input__field"
              dir={lang === 'ar' ? 'rtl' : 'ltr'}
              type="text"
              placeholder={lang.toUpperCase()}
              value={value[lang] ?? ''}
              onChange={(e) => onChange({ ...value, [lang]: e.target.value })}
            />
          ),
        )}
      </div>
    </div>
  )
}

export function emptyLocalized(): LocalizedText {
  return { en: '', fr: '', ar: '' }
}
