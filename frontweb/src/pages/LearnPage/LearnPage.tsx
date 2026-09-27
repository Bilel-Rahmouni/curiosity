import { useTranslation } from 'react-i18next'
import { PageLayout } from '../../components/layout/PageLayout/PageLayout'
import { subjects } from '../../data/curriculum'
import { SubjectCard } from '../../components/ui/SubjectCard/SubjectCard'
import './LearnPage.css'

export function LearnPage() {
  const { t } = useTranslation()

  return (
    <PageLayout title={t('pages.learn')} wide>
      <div className="learn-page__grid">
        {subjects.map((subject, i) => (
          <SubjectCard
            key={subject.slug}
            subject={subject}
            style={{ animationDelay: `${i * 0.06}s` }}
          />
        ))}
      </div>
    </PageLayout>
  )
}
