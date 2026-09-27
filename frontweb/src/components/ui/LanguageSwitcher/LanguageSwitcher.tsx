import { useTranslation } from 'react-i18next'
import { supportedLanguages, type Language } from '../../../i18n'
import './LanguageSwitcher.css'

const languageLabels: Record<Language, string> = {
  en: 'EN',
  fr: 'FR',
  ar: 'AR',
}

export function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const current = i18n.language as Language

  return (
    <div
      className="language-switcher"
      role="group"
      aria-label={i18n.t('common.selectLanguage')}
    >
      {supportedLanguages.map((lang) => (
        <button
          key={lang}
          type="button"
          className={`language-switcher__btn${
            current === lang ? ' language-switcher__btn--active' : ''
          }`}
          onClick={() => i18n.changeLanguage(lang)}
          aria-pressed={current === lang}
        >
          {languageLabels[lang]}
        </button>
      ))}
    </div>
  )
}
