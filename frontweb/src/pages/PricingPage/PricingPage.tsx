import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { PageLayout } from '../../components/layout/PageLayout/PageLayout'
import { useAuth } from '../../auth/AuthProvider'
import { useSubscription } from '../../billing/SubscriptionProvider'
import './PricingPage.css'

const PLANS = [
  { id: 'monthly', price: 30, priceKey: 'billing.perMonth' },
  { id: 'yearly', price: 300, priceKey: 'billing.perYear' },
] as const

export function PricingPage() {
  const { t } = useTranslation()
  const { configured, user } = useAuth()
  const { active, subscription, startCheckout } = useSubscription()
  const [busy, setBusy] = useState<string | null>(null)
  const [error, setError] = useState(false)

  async function handleSubscribe(plan: 'monthly' | 'yearly') {
    setError(false)
    setBusy(plan)
    const ok = await startCheckout(plan)
    if (!ok) {
      setError(true)
      setBusy(null)
    }
  }

  return (
    <PageLayout title={t('billing.title')}>
      {active && subscription ? (
        <div className="pricing-page__active">
          <span className="pricing-page__badge">{t('billing.active')}</span>
          <span>{t(`billing.${subscription.plan}`)}</span>
          {subscription.current_period_end && (
            <span className="pricing-page__until">
              {t('billing.until', {
                date: subscription.current_period_end.slice(0, 10),
              })}
            </span>
          )}
        </div>
      ) : (
        <div className="pricing-page__plans">
          {PLANS.map((plan, i) => (
            <div
              key={plan.id}
              className={`pricing-page__plan${plan.id === 'yearly' ? ' pricing-page__plan--featured' : ''}`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <span className="pricing-page__plan-name">
                {t(`billing.${plan.id}`)}
              </span>
              <span className="pricing-page__plan-price">
                {t(plan.priceKey, { price: plan.price })}
              </span>
              {user ? (
                <button
                  type="button"
                  className="pricing-page__subscribe"
                  disabled={!configured || busy !== null}
                  onClick={() => void handleSubscribe(plan.id)}
                >
                  {t('billing.subscribe')}
                </button>
              ) : (
                <Link className="pricing-page__subscribe" to="/login">
                  {t('auth.signIn')}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
      {error && <p className="pricing-page__error">{t('billing.error')}</p>}
    </PageLayout>
  )
}
