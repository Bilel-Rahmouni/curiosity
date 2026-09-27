import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { mainNav } from '../../../data/navigation'
import { LanguageSwitcher } from '../../ui/LanguageSwitcher/LanguageSwitcher'
import { ThemeToggle } from '../../ui/ThemeToggle/ThemeToggle'
import { MintLogo } from '../../mint/MintLogo'
import './SiteFooter.css'

type SiteFooterProps = {
  variant?: 'home' | 'default'
}

export function SiteFooter({ variant = 'default' }: SiteFooterProps) {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer
      className={`site-footer${variant === 'home' ? ' site-footer--home' : ''}`}
    >
      <div className="site-footer__inner">
        <nav className="site-footer__nav" aria-label={t('common.ariaFooterNav')}>
          {mainNav.map((item) => (
            <Link key={item.to} to={item.to} className="site-footer__link">
              {t(item.labelKey)}
            </Link>
          ))}
        </nav>

        <div className="site-footer__end">
          <ThemeToggle />
          <LanguageSwitcher />
          <span className="site-footer__copy">
            {t('common.footerCopyright', { year })}
          </span>
          <div className="site-footer__credit">
            <span className="site-footer__credit-label">{t('footer.builtBy')}</span>
            <a
              className="site-footer__credit-link"
              href="https://mintstudio.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MintLogo />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
