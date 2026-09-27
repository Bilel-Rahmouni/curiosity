// Supabase Edge Function (Deno runtime): Konnect payment webhook.
// Konnect calls: GET {url}?payment_ref=<ref>. We verify the payment against
// the Konnect API (never trust the query param alone) and activate the
// subscription on completion.
//
// Secrets: KONNECT_API_KEY, optional KONNECT_BASE_URL (see create-payment).
//
// Deploy with --no-verify-jwt: Konnect calls this endpoint without a Supabase JWT.

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })
}

const PERIOD_DAYS: Record<string, number> = {
  monthly: 31,
  yearly: 366,
}

Deno.serve(async (req: Request) => {
  const paymentRef = new URL(req.url).searchParams.get('payment_ref')
  if (!paymentRef) {
    return json({ error: 'missing payment_ref' }, 400)
  }

  const apiKey = Deno.env.get('KONNECT_API_KEY')
  if (!apiKey) {
    return json({ error: 'not configured' }, 500)
  }
  const konnectBase =
    Deno.env.get('KONNECT_BASE_URL') ?? 'https://api.konnect.network/api/v2'

  // Verify with Konnect.
  const verifyRes = await fetch(`${konnectBase}/payments/${paymentRef}`, {
    headers: { 'x-api-key': apiKey },
  })
  if (!verifyRes.ok) {
    return json({ error: 'verification failed' }, 502)
  }
  const verify = (await verifyRes.json()) as {
    payment?: { status?: string }
  }
  const completed = verify.payment?.status === 'completed'

  const supabaseUrl = Deno.env.get('SUPABASE_URL')!
  const serviceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
  const restHeaders = {
    'Content-Type': 'application/json',
    apikey: serviceKey,
    Authorization: `Bearer ${serviceKey}`,
  }

  // Find our payment row.
  const payRes = await fetch(
    `${supabaseUrl}/rest/v1/payments?konnect_payment_ref=eq.${encodeURIComponent(paymentRef)}&select=id,user_id,plan,status`,
    { headers: restHeaders },
  )
  if (!payRes.ok) {
    return json({ error: 'lookup failed' }, 500)
  }
  const rows = (await payRes.json()) as {
    id: string
    user_id: string
    plan: string
    status: string
  }[]
  const payment = rows[0]
  if (!payment) {
    return json({ error: 'unknown payment' }, 404)
  }

  // Update payment status.
  await fetch(`${supabaseUrl}/rest/v1/payments?id=eq.${payment.id}`, {
    method: 'PATCH',
    headers: { ...restHeaders, Prefer: 'return=minimal' },
    body: JSON.stringify({ status: completed ? 'completed' : 'failed' }),
  })

  if (!completed) {
    return json({ ok: true, activated: false })
  }
  if (payment.status === 'completed') {
    // Webhook retry after we already activated: idempotent no-op.
    return json({ ok: true, activated: true })
  }

  const days = PERIOD_DAYS[payment.plan] ?? PERIOD_DAYS.monthly
  const periodEnd = new Date(
    Date.now() + days * 24 * 60 * 60 * 1000,
  ).toISOString()

  const upsertRes = await fetch(
    `${supabaseUrl}/rest/v1/subscriptions?on_conflict=user_id`,
    {
      method: 'POST',
      headers: {
        ...restHeaders,
        Prefer: 'resolution=merge-duplicates,return=minimal',
      },
      body: JSON.stringify({
        user_id: payment.user_id,
        status: 'active',
        plan: payment.plan,
        current_period_end: periodEnd,
        updated_at: new Date().toISOString(),
      }),
    },
  )
  if (!upsertRes.ok) {
    return json({ error: 'activation failed' }, 500)
  }

  return json({ ok: true, activated: true })
})
