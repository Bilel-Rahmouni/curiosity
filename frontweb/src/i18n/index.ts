import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import ar from './locales/ar'
import en from './locales/en'
import fr from './locales/fr'

export const supportedLanguages = ['en', 'fr', 'ar'] as const
export type Language = (typeof supportedLanguages)[number]

const storageKey = 'curiosity-lang'

function getInitialLanguage(): Language {
  const saved = localStorage.getItem(storageKey)
  if (saved && supportedLanguages.includes(saved as Language)) {
    return saved as Language
  }
  return 'fr'
}

function applyDocumentLanguage(language: string) {
  document.documentElement.lang = language
  document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
}

const initialLanguage = getInitialLanguage()
applyDocumentLanguage(initialLanguage)

void i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr },
    ar: { translation: ar },
  },
  lng: initialLanguage,
  fallbackLng: 'fr',
  interpolation: { escapeValue: false },
})

i18n.on('languageChanged', (language) => {
  localStorage.setItem(storageKey, language)
  applyDocumentLanguage(language)
})

export default i18n
