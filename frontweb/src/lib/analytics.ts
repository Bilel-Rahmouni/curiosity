// Lightweight PostHog capture via REST; no SDK needed. No-ops when unconfigured.

const key = import.meta.env.VITE_POSTHOG_KEY as string | undefined
const host =
  (import.meta.env.VITE_POSTHOG_HOST as string | undefined) ??
  'https://eu.i.posthog.com'

const DISTINCT_ID_KEY = 'curiosity-analytics-id'

function distinctId(): string {
  let id = localStorage.getItem(DISTINCT_ID_KEY)
  if (!id) {
    id = crypto.randomUUID()
    localStorage.setItem(DISTINCT_ID_KEY, id)
  }
  return id
}

export function identifyUser(userId: string) {
  localStorage.setItem(DISTINCT_ID_KEY, userId)
}

export function trackEvent(
  event: string,
  properties: Record<string, unknown> = {},
) {
  if (!key) return
  void fetch(`${host}/capture/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      api_key: key,
      event,
      distinct_id: distinctId(),
      properties: { ...properties, $current_url: window.location.href },
      timestamp: new Date().toISOString(),
    }),
    keepalive: true,
  }).catch(() => {})
}

export function trackPageView(path: string) {
  trackEvent('$pageview', { path })
}
