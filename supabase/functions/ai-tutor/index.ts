// Supabase Edge Function (Deno runtime): lesson-aware AI tutor.
//
// Secrets to set with `supabase secrets set`:
//   OPENAI_API_KEY   - required
//   OPENAI_MODEL     - optional, defaults to gpt-4o-mini
//   OPENAI_BASE_URL  - optional, defaults to https://api.openai.com/v1
//   AI_DAILY_LIMIT   - optional, defaults to 50 messages per user per day

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers':
    'authorization, x-client-info, apikey, content-type',
}

type TutorRequest = {
  messages: { role: 'user' | 'assistant'; content: string }[]
  lesson: {
    subjectSlug: string
    levelSlug: string
    unitSlug: string
    lessonSlug: string
    title: string
  }
  lessonText: string
  language: string
  mode: 'chat' | 'explain'
}

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })
}

function decodeJwtSub(authHeader: string | null): string | null {
  // The Supabase gateway has already verified the JWT signature.
  if (!authHeader?.startsWith('Bearer ')) return null
  const token = authHeader.slice(7)
  const parts = token.split('.')
  if (parts.length !== 3) return null
  try {
    const payload = JSON.parse(
      atob(parts[1].replace(/-/g, '+').replace(/_/g, '/')),
    )
    return typeof payload.sub === 'string' ? payload.sub : null
  } catch {
    return null
  }
}

const languageNames: Record<string, string> = {
  en: 'English',
  fr: 'French',
  ar: 'Arabic',
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }
  if (req.method !== 'POST') {
    return json({ error: 'method not allowed' }, 405)
  }

  const userId = decodeJwtSub(req.headers.get('Authorization'))
  if (!userId) {
    return json({ error: 'unauthorized' }, 401)
  }

  const supabaseUrl = Deno.env.get('SUPABASE_URL')!
  const serviceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
  const apiKey = Deno.env.get('OPENAI_API_KEY')
  if (!apiKey) {
    return json({ error: 'not configured' }, 500)
  }

  // Daily quota check (service role bypasses RLS).
  const limit = Number(Deno.env.get('AI_DAILY_LIMIT') ?? '50')
  const quotaRes = await fetch(`${supabaseUrl}/rest/v1/rpc/increment_ai_usage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      apikey: serviceKey,
      Authorization: `Bearer ${serviceKey}`,
    },
    body: JSON.stringify({ p_user: userId, p_limit: limit }),
  })
  if (!quotaRes.ok) {
    return json({ error: 'quota check failed' }, 500)
  }
  const allowed = (await quotaRes.json()) as boolean
  if (!allowed) {
    return json({ error: 'limit' }, 200)
  }

  let body: TutorRequest
  try {
    body = (await req.json()) as TutorRequest
  } catch {
    return json({ error: 'bad request' }, 400)
  }

  const language = languageNames[body.language] ?? 'English'
  const systemPrompt = [
    `You are Curiosity, a friendly tutor on curiosity.tn, a learning platform for Tunisian students.`,
    `The student is studying the lesson "${body.lesson?.title ?? ''}" (subject: ${body.lesson?.subjectSlug}, level: ${body.lesson?.levelSlug}).`,
    `Lesson content for context:\n${(body.lessonText ?? '').slice(0, 6000)}`,
    ``,
    `Rules:`,
    `- Always answer in ${language}.`,
    `- Give hints and guiding questions, never the final answer to an exercise, even if asked directly.`,
    `- When the student shows a wrong answer, explain the likely mistake and point back to the relevant idea from the lesson.`,
    body.mode === 'explain'
      ? `- The student asked you to re-explain this lesson differently: use a new angle, a concrete everyday example from daily life in Tunisia, and keep it short.`
      : `- Keep answers short (under 120 words), warm, and age-appropriate for the student's level.`,
  ].join('\n')

  const messages = [
    { role: 'system', content: systemPrompt },
    ...(Array.isArray(body.messages) ? body.messages.slice(-12) : []),
  ]

  const baseUrl = Deno.env.get('OPENAI_BASE_URL') ?? 'https://api.openai.com/v1'
  const model = Deno.env.get('OPENAI_MODEL') ?? 'gpt-4o-mini'

  const aiRes = await fetch(`${baseUrl}/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      messages,
      max_tokens: 500,
      temperature: 0.6,
    }),
  })

  if (!aiRes.ok) {
    return json({ error: 'ai unavailable' }, 502)
  }

  const completion = (await aiRes.json()) as {
    choices?: { message?: { content?: string } }[]
  }
  const reply = completion.choices?.[0]?.message?.content
  if (!reply) {
    return json({ error: 'ai unavailable' }, 502)
  }

  return json({ reply })
})
