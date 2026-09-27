import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import type { User } from '@supabase/supabase-js'
import { isSupabaseConfigured, supabase, type Profile } from '../lib/supabase'
import { identifyUser } from '../lib/analytics'

type AuthContextValue = {
  configured: boolean
  loading: boolean
  user: User | null
  profile: Profile | null
  signIn: (email: string, password: string) => Promise<string | null>
  signUp: (
    email: string,
    password: string,
    displayName: string,
  ) => Promise<string | null>
  signInWithGoogle: () => Promise<void>
  signOut: () => Promise<void>
  refreshProfile: () => Promise<void>
}

const AuthContext = createContext<AuthContextValue>({
  configured: false,
  loading: false,
  user: null,
  profile: null,
  signIn: async () => null,
  signUp: async () => null,
  signInWithGoogle: async () => {},
  signOut: async () => {},
  refreshProfile: async () => {},
})

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(isSupabaseConfigured)

  const loadProfile = useCallback(async (userId: string) => {
    if (!supabase) return
    const { data } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .maybeSingle()
    setProfile((data as Profile | null) ?? null)
  }, [])

  useEffect(() => {
    if (!supabase) return

    void supabase.auth.getSession().then(({ data }) => {
      const sessionUser = data.session?.user ?? null
      setUser(sessionUser)
      if (sessionUser) {
        identifyUser(sessionUser.id)
        void loadProfile(sessionUser.id)
      }
      setLoading(false)
    })

    const { data: subscription } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        const sessionUser = session?.user ?? null
        setUser(sessionUser)
        if (sessionUser) {
          void loadProfile(sessionUser.id)
        } else {
          setProfile(null)
        }
      },
    )

    return () => subscription.subscription.unsubscribe()
  }, [loadProfile])

  const signIn = useCallback(async (email: string, password: string) => {
    if (!supabase) return 'not configured'
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    return error ? error.message : null
  }, [])

  const signUp = useCallback(
    async (email: string, password: string, displayName: string) => {
      if (!supabase) return 'not configured'
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { display_name: displayName } },
      })
      return error ? error.message : null
    },
    [],
  )

  const signInWithGoogle = useCallback(async () => {
    if (!supabase) return
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: window.location.origin },
    })
  }, [])

  const signOut = useCallback(async () => {
    if (!supabase) return
    await supabase.auth.signOut()
  }, [])

  const refreshProfile = useCallback(async () => {
    if (user) await loadProfile(user.id)
  }, [user, loadProfile])

  return (
    <AuthContext.Provider
      value={{
        configured: isSupabaseConfigured,
        loading,
        user,
        profile,
        signIn,
        signUp,
        signInWithGoogle,
        signOut,
        refreshProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
