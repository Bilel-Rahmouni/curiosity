import { useTranslation } from 'react-i18next'
import { PageLayout } from '../../components/layout/PageLayout/PageLayout'
import './AboutPage.css'

export function AboutPage() {
  const { t } = useTranslation()

  return (
    <PageLayout title={t('pages.about')}>
      <div className="about-page__body" />
    </PageLayout>
  )
}
