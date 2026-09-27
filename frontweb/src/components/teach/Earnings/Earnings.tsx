import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useAuth } from '../../../auth/AuthProvider'
import { supabase, type PayoutRow } from '../../../lib/supabase'
import './Earnings.css'

export function Earnings() {
  const { t } = useTranslation()
  const { user } = useAuth()
  const [rows, setRows] = useState<PayoutRow[]>([])

  useEffect(() => {
    if (!supabase || !user) return
    let cancelled = false
    void (async () => {
      const { data } = await supabase!
        .from('payout_ledger')
        .select('*')
        .eq('teacher_id', user.id)
        .order('created_at', { ascending: false })
      if (!cancelled) {
        setRows((data as PayoutRow[] | null) ?? [])
      }
    })()
    return () => {
      cancelled = true
    }
  }, [user])

  if (rows.length === 0) return null

  const total = rows.reduce((sum, r) => sum + r.amount_millimes, 0)

  return (
    <section className="earnings">
      <h2 className="earnings__title">{t('teachers.earnings')}</h2>
      <span className="earnings__total" dir="ltr">
        {(total / 1000).toFixed(3)} TND
      </span>
      <ul className="earnings__list">
        {rows.map((row) => (
          <li key={row.id} className="earnings__row">
            <span className="earnings__date" dir="ltr">
              {row.created_at.slice(0, 10)}
            </span>
            <span className="earnings__note">{row.note}</span>
            <span className="earnings__amount" dir="ltr">
              {(row.amount_millimes / 1000).toFixed(3)}
            </span>
          </li>
        ))}
      </ul>
      <p className="earnings__hint">{t('teachers.payoutHint')}</p>
    </section>
  )
}
