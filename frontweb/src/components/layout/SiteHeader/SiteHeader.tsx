import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { mainNav } from '../../../data/navigation'
import { AccountMenu } from '../../ui/AccountMenu/AccountMenu'
import { NotificationsBell } from '../../notifications/NotificationsBell/NotificationsBell'
import './SiteHeader.css'

type SiteHeaderProps = {
  variant?: 'home' | 'default'
}

export function SiteHeader({ variant = 'default' }: SiteHeaderProps) {
  const { t } = useTranslation()

  return (
    <header
      className={`site-header${variant === 'home' ? ' site-header--home' : ''}`}
    >
      <div className="site-header__inner">
        <NavLink to="/" className="site-header__brand" end>
          <span className="site-header__name">{t('brand')}</span>
        </NavLink>

        <nav className="site-header__nav" aria-label={t('common.ariaMainNav')}>
          {mainNav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `site-header__link${isActive ? ' site-header__link--active' : ''}`
              }
            >
              {t(item.labelKey)}
            </NavLink>
          ))}
          <NotificationsBell />
          <AccountMenu />
        </nav>
      </div>
    </header>
  )
}
