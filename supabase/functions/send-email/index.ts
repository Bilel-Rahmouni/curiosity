// Supabase Edge Function (Deno runtime): optional email notifications via Resend.
//
// Wire it as a Database Webhook (Dashboard → Database → Webhooks) on INSERT
// into public.notifications, or call it from other functions.
//
// Secrets:
//   RESEND_API_KEY - required (otherwise this function no-ops)
//   EMAIL_FROM     - optional, defaults to curiosity <onboarding@resend.dev>
//   APP_URL        - optional, used to build links in the email body

type WebhookPayload = {
  record?: {
    user_id?: string
    kind?: string
    title?: string
    link?: string | null
  }
}

const kindLabels: Record<string, string> = {
  assignment: 'New assignment',
  quiz: 'New quiz',
  post: 'New announcement',
  session: 'New live session',
}

Deno.serve(async (req: Request) => {
  if (req.method !== 'POST') {
    return new Response('method not allowed', { status: 405 })
  }

  const resendKey = Deno.env.get('RESEND_API_KEY')
  if (!resendKey) {
    return Response.json({ skipped: 'no RESEND_API_KEY' })
  }

  let payload: WebhookPayload
  try {
    payload = (await req.json()) as WebhookPayload
  } catch {
    return new Response('bad request', { status: 400 })
  }

  const record = payload.record
  if (!record?.user_id || !record.title) {
    return Response.json({ skipped: 'no record' })
  }

  // Look up the recipient's email with the service role (auth admin API).
  const supabaseUrl = Deno.env.get('SUPABASE_URL')!
  const serviceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
  const userRes = await fetch(
    `${supabaseUrl}/auth/v1/admin/users/${record.user_id}`,
    {
      headers: {
        apikey: serviceKey,
        Authorization: `Bearer ${serviceKey}`,
      },
    },
  )
  if (!userRes.ok) {
    return Response.json({ skipped: 'user lookup failed' })
  }
  const userInfo = (await userRes.json()) as { email?: string }
  if (!userInfo.email) {
    return Response.json({ skipped: 'no email' })
  }

  const appUrl = Deno.env.get('APP_URL') ?? 'https://curiosity.tn'
  const subject = `${kindLabels[record.kind ?? ''] ?? 'Notification'} · curiosity`
  const linkHtml = record.link
    ? `<p><a href="${appUrl}${record.link}">${appUrl}${record.link}</a></p>`
    : ''

  const sendRes = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${resendKey}`,
    },
    body: JSON.stringify({
      from: Deno.env.get('EMAIL_FROM') ?? 'curiosity <onboarding@resend.dev>',
      to: [userInfo.email],
      subject,
      html: `<p>${record.title}</p>${linkHtml}`,
    }),
  })

  return Response.json({ sent: sendRes.ok })
})
