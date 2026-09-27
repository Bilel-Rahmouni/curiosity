import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useAuth } from '../../../auth/AuthProvider'
import './AccountMenu.css'

export function AccountMenu() {
  const { t } = useTranslation()
  const { configured, user, profile } = useAuth()

  if (!configured) return null

  if (!user) {
    return (
      <NavLink to="/login" className="account-menu__signin">
        {t('auth.signIn')}
      </NavLink>
    )
  }

  const initial = (profile?.display_name || user.email || '?')
    .trim()
    .charAt(0)
    .toUpperCase()

  return (
    <NavLink
      to="/account"
      className="account-menu__avatar"
      aria-label={t('account.title')}
    >
      {initial}
    </NavLink>
  )
}
