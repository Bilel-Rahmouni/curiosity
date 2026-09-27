import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useAuth } from '../../auth/AuthProvider'
import { countLessonsInSubject, subjects } from '../../data/curriculum'
import { SubjectCard } from '../../components/ui/SubjectCard/SubjectCard'
import { ContinueCard } from '../../components/ui/ContinueCard/ContinueCard'
import { ClassPanel } from '../../components/ui/ClassPanel/ClassPanel'
import './HomePage.css'

const languageSlugs = new Set(['english', 'french', 'italian', 'german', 'arabic'])

const featureKeys = [
  'teacher',
  'tutor',
  'quizzes',
  'sessions',
  'whiteboard',
  'certificates',
  'speech',
  'offline',
] as const

const audienceKeys = [
  { key: 'students', to: '/placement', image: '/images/audience-students.png' },
  { key: 'teachers', to: '/teach', image: '/images/audience-teachers.png' },
  { key: 'parents', to: '/family', image: '/images/audience-parents.png' },
] as const

const faqKeys = ['1', '2', '3', '4'] as const

export function HomePage() {
  const { t } = useTranslation()
  const { configured, user } = useAuth()

  const totalLessons = subjects.reduce(
    (sum, subject) => sum + countLessonsInSubject(subject),
    0,
  )
  const languageCount = subjects.filter((s) => languageSlugs.has(s.slug)).length

  return (
    <main className="home">
      {/* Hero */}
      <section className="home__hero">
        <span className="home__eyebrow">{t('home.eyebrow')}</span>
        <h1 className="home__title">{t('brand')}</h1>
        <p className="home__tagline">{t('home.tagline')}</p>
        <div className="home__actions">
          <Link className="home__cta" to="/learn">
            {t('home.cta')}
          </Link>
          {configured && !user && (
            <Link className="home__cta home__cta--ghost" to="/login">
              {t('auth.signIn')}
            </Link>
          )}
        </div>
        <dl className="home__stats">
          <div className="home__stat">
            <dd>{subjects.length}</dd>
            <dt>{t('home.stats.subjects')}</dt>
          </div>
          <div className="home__stat">
            <dd>{totalLessons}</dd>
            <dt>{t('home.stats.lessons')}</dt>
          </div>
          <div className="home__stat">
            <dd>{languageCount}</dd>
            <dt>{t('home.stats.languages')}</dt>
          </div>
        </dl>
        <div className="home__hero-visual">
          <img src="/images/hero-learning.png" alt="" loading="eager" />
        </div>
      </section>

      <div className="home__personal">
        <ClassPanel />
        <ContinueCard />
      </div>

      {/* Subject catalogue */}
      <section className="home__section">
        <h2 className="home__section-title">{t('pages.learn')}</h2>
        <div className="home__grid">
          {subjects.map((subject, i) => (
            <SubjectCard
              key={subject.slug}
              subject={subject}
              style={{ animationDelay: `${i * 0.05}s` }}
            />
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="home__section">
        <h2 className="home__section-title">{t('home.how.title')}</h2>
        <ol className="home__steps">
          {(['1', '2', '3'] as const).map((n) => (
            <li key={n} className="home__step">
              <span className="home__step-number">{n}</span>
              <span className="home__step-title">
                {t(`home.how.step${n}`)}
              </span>
              <span className="home__step-meta">
                {t(`home.how.step${n}Meta`)}
              </span>
            </li>
          ))}
        </ol>
      </section>

      {/* Feature grid */}
      <section className="home__section">
        <h2 className="home__section-title">{t('home.featuresTitle')}</h2>
        <div className="home__features">
          {featureKeys.map((key, i) => (
            <div
              key={key}
              className="home__feature"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <span className="home__feature-title">
                {t(`home.features.${key}`)}
              </span>
              <span className="home__feature-meta">
                {t(`home.features.${key}Meta`)}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Audiences */}
      <section className="home__section">
        <h2 className="home__section-title">{t('home.audience.title')}</h2>
        <div className="home__audience">
          {audienceKeys.map(({ key, to, image }) => (
            <article key={key} className="home__audience-card">
              <div className="home__audience-visual">
                <img src={image} alt="" loading="lazy" />
              </div>
              <h3 className="home__audience-title">
                {t(`home.audience.${key}`)}
              </h3>
              <p className="home__audience-text">
                {t(`home.audience.${key}Text`)}
              </p>
              <Link className="home__audience-cta" to={to}>
                {t(`home.audience.${key}Cta`)}
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Exam prep band */}
      <section className="home__section">
        <div className="home__band home__band--exam">
          <div className="home__band-copy">
            <h2 className="home__band-title">{t('home.exam.title')}</h2>
            <p className="home__band-text">{t('home.exam.text')}</p>
          </div>
          <Link className="home__cta" to="/learn/exam-prep">
            {t('home.exam.cta')}
          </Link>
        </div>
      </section>

      {/* Teacher marketplace */}
      <section className="home__section">
        <div className="home__band">
          <div className="home__band-copy">
            <h2 className="home__band-title">{t('home.marketplace.title')}</h2>
            <p className="home__band-text">{t('home.marketplace.text')}</p>
          </div>
          <Link className="home__cta home__cta--ghost" to="/teachers">
            {t('home.marketplace.cta')}
          </Link>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="home__section">
        <h2 className="home__section-title">{t('billing.title')}</h2>
        <div className="home__plans">
          <article className="home__plan">
            <h3 className="home__plan-name">{t('home.plans.free')}</h3>
            <p className="home__plan-meta">{t('home.plans.freeMeta')}</p>
          </article>
          <article className="home__plan home__plan--premium">
            <h3 className="home__plan-name">{t('home.plans.premium')}</h3>
            <p className="home__plan-meta">{t('home.plans.premiumMeta')}</p>
            <Link className="home__plan-cta" to="/pricing">
              {t('billing.goPricing')}
            </Link>
          </article>
        </div>
      </section>

      {/* FAQ */}
      <section className="home__section home__section--faq">
        <h2 className="home__section-title">{t('home.faq.title')}</h2>
        <div className="home__faq">
          {faqKeys.map((n) => (
            <details key={n} className="home__faq-item">
              <summary className="home__faq-q">{t(`home.faq.q${n}`)}</summary>
              <p className="home__faq-a">{t(`home.faq.a${n}`)}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="home__final">
        <h2 className="home__final-title">{t('home.final.title')}</h2>
        <Link className="home__cta" to={user ? '/path' : '/learn'}>
          {t('home.final.cta')}
        </Link>
      </section>
    </main>
  )
}
