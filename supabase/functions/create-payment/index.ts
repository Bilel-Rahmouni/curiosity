// Supabase Edge Function (Deno runtime): initialize a Konnect payment.
//
// Secrets to set with `supabase secrets set`:
//   KONNECT_API_KEY        - required (from the Konnect merchant dashboard)
//   KONNECT_WALLET_ID      - required (receiver wallet id)
//   KONNECT_BASE_URL       - optional, defaults to https://api.konnect.network/api/v2
//                            (sandbox: https://api.sandbox.konnect.network/api/v2)
//   APP_URL                - required, e.g. https://curiosity.tn (redirect target)
//   PRICE_MONTHLY_MILLIMES - optional, defaults to 30000 (30 TND)
//   PRICE_YEARLY_MILLIMES  - optional, defaults to 300000 (300 TND)

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers':
    'authorization, x-client-info, apikey, content-type',
}

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })
}

function decodeJwt(authHeader: string | null): {
  sub: string
  email: string
} | null {
  // The Supabase gateway has already verified the JWT signature.
  if (!authHeader?.startsWith('Bearer ')) return null
  const parts = authHeader.slice(7).split('.')
  if (parts.length !== 3) return null
  try {
    const payload = JSON.parse(
      atob(parts[1].replace(/-/g, '+').replace(/_/g, '/')),
    )
    if (typeof payload.sub !== 'string') return null
    return {
      sub: payload.sub,
      email: typeof payload.email === 'string' ? payload.email : '',
    }
  } catch {
    return null
  }
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }
  if (req.method !== 'POST') {
    return json({ error: 'method not allowed' }, 405)
  }

  const user = decodeJwt(req.headers.get('Authorization'))
  if (!user) {
    return json({ error: 'unauthorized' }, 401)
  }

  const apiKey = Deno.env.get('KONNECT_API_KEY')
  const walletId = Deno.env.get('KONNECT_WALLET_ID')
  const appUrl = Deno.env.get('APP_URL')
  if (!apiKey || !walletId || !appUrl) {
    return json({ error: 'not configured' }, 500)
  }

  let plan: 'monthly' | 'yearly' = 'monthly'
  try {
    const body = (await req.json()) as { plan?: string }
    if (body.plan === 'yearly') plan = 'yearly'
  } catch {
    // default to monthly
  }

  const amount =
    plan === 'yearly'
      ? Number(Deno.env.get('PRICE_YEARLY_MILLIMES') ?? '300000')
      : Number(Deno.env.get('PRICE_MONTHLY_MILLIMES') ?? '30000')

  const supabaseUrl = Deno.env.get('SUPABASE_URL')!
  const serviceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
  const konnectBase =
    Deno.env.get('KONNECT_BASE_URL') ?? 'https://api.konnect.network/api/v2'
  const webhookUrl = `${supabaseUrl}/functions/v1/konnect-webhook`

  const initRes = await fetch(`${konnectBase}/payments/init-payment`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
    },
    body: JSON.stringify({
      receiverWalletId: walletId,
      token: 'TND',
      amount,
      type: 'immediate',
      description: `curiosity.tn ${plan} subscription`,
      acceptedPaymentMethods: ['bank_card', 'e-DINAR', 'wallet'],
      lifespan: 30,
      checkoutForm: false,
      addPaymentFeesToAmount: false,
      email: user.email || undefined,
      orderId: `${user.sub}:${plan}`,
      webhook: webhookUrl,
      silentWebhook: true,
      successUrl: `${appUrl}/account?payment=success`,
      failUrl: `${appUrl}/pricing?payment=failed`,
      theme: 'dark',
    }),
  })

  if (!initRes.ok) {
    return json({ error: 'payment init failed' }, 502)
  }

  const init = (await initRes.json()) as {
    payUrl?: string
    paymentRef?: string
  }
  if (!init.payUrl || !init.paymentRef) {
    return json({ error: 'payment init failed' }, 502)
  }

  // Record the pending payment (service role bypasses RLS).
  const insertRes = await fetch(`${supabaseUrl}/rest/v1/payments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      apikey: serviceKey,
      Authorization: `Bearer ${serviceKey}`,
      Prefer: 'return=minimal',
    },
    body: JSON.stringify({
      user_id: user.sub,
      konnect_payment_ref: init.paymentRef,
      amount_millimes: amount,
      plan,
      status: 'pending',
    }),
  })
  if (!insertRes.ok) {
    return json({ error: 'payment record failed' }, 500)
  }

  return json({ payUrl: init.payUrl })
})
