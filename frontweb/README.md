# curiosity.tn

Trilingual (Arabic / French / English) e-learning platform: lessons, interactive exercises with mastery tracking, an AI tutor, classrooms for teachers, a parent view, and a content studio — built with React + Vite on Supabase.

## App structure

- `src/content` — bundled lesson content (blocks) and content types
- `src/data/curriculum.ts` — subject → level → unit → lesson tree
- `src/auth`, `src/progress` — auth and progress/mastery providers
- `src/components/exercise` — MCQ, numeric input, and order-steps exercises
- `src/components/tutor` — AI tutor chat panel
- `src/pages` — routes, including `/practice`, `/account`, `/teach`, `/family`, `/admin`
- `../supabase/migrations` — database schema (run in order)
- `../supabase/functions/ai-tutor` — AI tutor edge function
- `scripts/seed.ts` — seeds the Supabase content tables from `src/content`

## Local development

```bash
npm install
npm run dev
```

The app runs fully without Supabase (bundled content, local progress in the browser). Accounts, sync, AI tutor, classrooms, and the content studio activate once Supabase is configured.

## Supabase setup

1. Create a project at supabase.com, then copy `.env.example` to `.env` and fill in `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` (Settings → API).
2. Apply the migrations in `../supabase/migrations` in order — either paste them into the SQL editor, or with the CLI:

```bash
supabase link --project-ref <ref>
supabase db push
```

3. Seed the content tables (service role key from Settings → API):

```bash
SUPABASE_URL=https://<ref>.supabase.co SUPABASE_SERVICE_ROLE_KEY=<key> npx tsx scripts/seed.ts
```

4. Auth: in the dashboard enable Email and (optionally) Google providers.
5. AI tutor:

```bash
supabase secrets set OPENAI_API_KEY=<key>
supabase functions deploy ai-tutor
```

Optional secrets: `OPENAI_MODEL`, `OPENAI_BASE_URL` (any OpenAI-compatible API), `AI_DAILY_LIMIT` (default 50 messages/user/day).

6. Roles: promote users in the `profiles` table (`role` = `teacher`, `parent`, or `admin`). Admins get the content studio at `/admin`.

7. Optional analytics: set `VITE_POSTHOG_KEY` (and `VITE_POSTHOG_HOST`).

## Payments (Konnect)

1. Create a merchant account at konnect.network and get an API key + wallet ID.
2. Set the edge function secrets and deploy:

```bash
supabase secrets set KONNECT_API_KEY=<key> KONNECT_WALLET_ID=<wallet> APP_URL=https://curiosity.tn
supabase functions deploy create-payment
supabase functions deploy konnect-webhook --no-verify-jwt
```

3. In the Konnect dashboard, set the webhook URL to `https://<ref>.supabase.co/functions/v1/konnect-webhook`.
4. Optional email notifications: `supabase secrets set RESEND_API_KEY=<key>` and `supabase functions deploy send-email`.

## Mobile app (Capacitor)

The mobile app wraps the production web build (`capacitor.config.ts`). One-time setup:

```bash
npm install
npx cap add android
npx cap add ios   # macOS with Xcode only
```

After each web change, rebuild and sync, then open the native IDE to run or release:

```bash
npm run mobile:sync
npx cap open android   # Android Studio
npx cap open ios       # Xcode
```

Requirements: Android Studio for Android builds; Xcode on macOS for iOS builds.

## Offline / PWA

The app registers a service worker in production builds and is installable (see `public/manifest.webmanifest`). Bundled lessons work offline out of the box; units fetched from Supabase can be saved for offline study with the "Save offline" button on a unit page.

## Roadmap groundwork

- Monetization: the intended model is free core content with a paid AI tutor tier and school licenses; quotas already exist per user (`ai_usage`), so a paid tier only needs a higher `AI_DAILY_LIMIT` per plan.
- Mobile: the content model, auth, and progress all live behind Supabase, so a future React Native / Expo app can reuse the same backend and the `src/content` block types unchanged.
