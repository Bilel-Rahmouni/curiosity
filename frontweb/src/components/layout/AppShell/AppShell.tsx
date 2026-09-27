import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { AmbientBackdrop } from '../AmbientBackdrop/AmbientBackdrop'
import { SiteFooter } from '../SiteFooter/SiteFooter'
import { SiteHeader } from '../SiteHeader/SiteHeader'
import { trackPageView } from '../../../lib/analytics'
import './AppShell.css'

export function AppShell() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const variant = isHome ? 'home' : 'default'

  useEffect(() => {
    trackPageView(pathname)
  }, [pathname])

  return (
    <div className="app-shell">
      <AmbientBackdrop />
      <SiteHeader variant={variant} />
      <div className="app-shell__main">
        <Outlet />
      </div>
      <SiteFooter variant={variant} />
    </div>
  )
}
