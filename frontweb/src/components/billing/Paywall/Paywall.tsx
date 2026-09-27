import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './Paywall.css'

export function Paywall() {
  const { t } = useTranslation()

  return (
    <div className="paywall">
      <span className="paywall__lock" aria-hidden="true">
        🔒
      </span>
      <p className="paywall__text">{t('billing.locked')}</p>
      <Link className="paywall__cta" to="/pricing">
        {t('billing.goPricing')}
      </Link>
    </div>
  )
}
