import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import { useAuth } from '../auth/AuthProvider'
import { supabase, type Subscription } from '../lib/supabase'

type SubscriptionContextValue = {
  loading: boolean
  /** Has a currently valid paid subscription. */
  active: boolean
  /** Gate does not apply (Supabase not configured, or non-student role). */
  exempt: boolean
  subscription: Subscription | null
  refresh: () => Promise<void>
  /** Starts a Konnect checkout; redirects on success, returns false on error. */
  startCheckout: (plan: 'monthly' | 'yearly') => Promise<boolean>
}

const SubscriptionContext = createContext<SubscriptionContextValue>({
  loading: false,
  active: false,
  exempt: true,
  subscription: null,
  refresh: async () => {},
  startCheckout: async () => false,
})

export function useSubscription() {
  return useContext(SubscriptionContext)
}

function isActive(sub: Subscription | null): boolean {
  if (!sub || sub.status !== 'active') return false
  if (!sub.current_period_end) return true
  return new Date(sub.current_period_end).getTime() > Date.now()
}

export function SubscriptionProvider({ children }: { children: ReactNode }) {
  const { configured, user, profile } = useAuth()
  const [subscription, setSubscription] = useState<Subscription | null>(null)
  const [loading, setLoading] = useState(false)

  const exempt = !configured || Boolean(profile && profile.role !== 'student')

  const refresh = useCallback(async () => {
    if (!supabase || !user) {
      setSubscription(null)
      return
    }
    setLoading(true)
    const { data } = await supabase
      .from('subscriptions')
      .select('*')
      .eq('user_id', user.id)
      .maybeSingle()
    setSubscription((data as Subscription | null) ?? null)
    setLoading(false)
  }, [user])

  useEffect(() => {
    void refresh()
  }, [refresh])

  const startCheckout = useCallback(
    async (plan: 'monthly' | 'yearly') => {
      if (!supabase || !user) return false
      const { data, error } = await supabase.functions.invoke(
        'create-payment',
        { body: { plan } },
      )
      if (error) return false
      const payUrl = (data as { payUrl?: string }).payUrl
      if (!payUrl) return false
      window.location.href = payUrl
      return true
    },
    [user],
  )

  return (
    <SubscriptionContext.Provider
      value={{
        loading,
        active: isActive(subscription),
        exempt,
        subscription,
        refresh,
        startCheckout,
      }}
    >
      {children}
    </SubscriptionContext.Provider>
  )
}
