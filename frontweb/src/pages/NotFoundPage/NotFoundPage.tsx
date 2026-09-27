import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './NotFoundPage.css'

export function NotFoundPage() {
  const { t } = useTranslation()

  return (
    <main className="not-found">
      <div className="not-found__inner">
        <p className="not-found__code">{t('common.notFound')}</p>
        <Link to="/" className="not-found__link">
          {t('common.home')}
        </Link>
      </div>
    </main>
  )
}
