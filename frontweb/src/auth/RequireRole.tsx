import type { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from './AuthProvider'
import type { ProfileRole } from '../lib/supabase'

type RequireRoleProps = {
  roles: ProfileRole[]
  children: ReactNode
}

export function RequireRole({ roles, children }: RequireRoleProps) {
  const { configured, loading, user, profile } = useAuth()

  if (!configured) return <Navigate to="/" replace />
  if (loading || (user && !profile)) return null
  if (!user) return <Navigate to="/login" replace />
  if (profile && !roles.includes(profile.role)) {
    return <Navigate to="/account" replace />
  }
  return <>{children}</>
}
