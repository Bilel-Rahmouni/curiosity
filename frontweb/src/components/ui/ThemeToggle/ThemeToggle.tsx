import { useTranslation } from 'react-i18next'
import { useTheme } from '../../../theme/ThemeProvider'
import './ThemeToggle.css'

export function ThemeToggle() {
  const { t } = useTranslation()
  const { theme, toggle } = useTheme()

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={t('common.toggleTheme')}
      title={t('common.toggleTheme')}
    >
      {theme === 'dark' ? (
        <svg
          className="theme-toggle__icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        >
          <circle cx="12" cy="12" r="4.4" />
          <path d="M12 2.5v2.4M12 19.1v2.4M2.5 12h2.4M19.1 12h2.4M5 5l1.7 1.7M17.3 17.3 19 19M19 5l-1.7 1.7M6.7 17.3 5 19" />
        </svg>
      ) : (
        <svg
          className="theme-toggle__icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.4 14.2A8.4 8.4 0 0 1 9.8 3.6a8.4 8.4 0 1 0 10.6 10.6Z" />
        </svg>
      )}
    </button>
  )
}
