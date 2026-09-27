/**
 * Seeds the Supabase content tables from the local TypeScript content files.
 *
 * Usage (from frontweb/):
 *   SUPABASE_URL=https://xxx.supabase.co SUPABASE_SERVICE_ROLE_KEY=... npx tsx scripts/seed.ts
 */
import { createClient } from '@supabase/supabase-js'
import { subjects } from '../src/data/curriculum'
import { getLessonContent } from '../src/content'
import { lessonKey } from '../src/content/types'
import en from '../src/i18n/locales/en'
import fr from '../src/i18n/locales/fr'
import ar from '../src/i18n/locales/ar'

const url = process.env.SUPABASE_URL ?? process.env.VITE_SUPABASE_URL
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!url || !serviceKey) {
  console.error(
    'Missing SUPABASE_URL and/or SUPABASE_SERVICE_ROLE_KEY environment variables.',
  )
  process.exit(1)
}

const db = createClient(url, serviceKey, { auth: { persistSession: false } })

function getPath(obj: unknown, path: string[]): string {
  let cur: unknown = obj
  for (const part of path) {
    if (typeof cur !== 'object' || cur === null) return ''
    cur = (cur as Record<string, unknown>)[part]
  }
  return typeof cur === 'string' ? cur : ''
}

function localizedTitle(path: string[]) {
  return {
    en: getPath(en, path),
    fr: getPath(fr, path),
    ar: getPath(ar, path),
  }
}

async function upsert(table: string, rows: Record<string, unknown>[]) {
  const { error } = await db.from(table).upsert(rows)
  if (error) {
    console.error(`Failed to upsert into ${table}:`, error.message)
    process.exit(1)
  }
  console.log(`Upserted ${rows.length} rows into ${table}`)
}

async function main() {
  const subjectRows = subjects.map((subject, i) => ({
    slug: subject.slug,
    position: i,
    title: localizedTitle(['curriculum', 'subjects', subject.slug]),
  }))
  await upsert('subjects', subjectRows)

  const levelRows = subjects.flatMap((subject) =>
    subject.levels.map((level, i) => ({
      subject_slug: subject.slug,
      slug: level.slug,
      position: i,
      title: localizedTitle(['curriculum', 'levels', level.slug]),
    })),
  )
  await upsert('levels', levelRows)

  const unitRows = subjects.flatMap((subject) =>
    subject.levels.flatMap((level) =>
      level.units.map((unit, i) => ({
        subject_slug: subject.slug,
        level_slug: level.slug,
        slug: unit.slug,
        position: i,
        title: localizedTitle([
          'curriculum',
          'units',
          subject.slug,
          level.slug,
          unit.slug,
        ]),
      })),
    ),
  )
  await upsert('units', unitRows)

  const lessonRows = subjects.flatMap((subject) =>
    subject.levels.flatMap((level) =>
      level.units.flatMap((unit) =>
        unit.lessons.map((lesson, i) => {
          const key = lessonKey(subject.slug, level.slug, unit.slug, lesson.slug)
          const content = getLessonContent(key)
          return {
            subject_slug: subject.slug,
            level_slug: level.slug,
            unit_slug: unit.slug,
            slug: lesson.slug,
            position: i,
            title: localizedTitle([
              'curriculum',
              'lessons',
              subject.slug,
              level.slug,
              unit.slug,
              lesson.slug,
            ]),
            blocks: content?.blocks ?? [],
            status: 'published',
          }
        }),
      ),
    ),
  )
  await upsert('lessons', lessonRows)

  console.log('Seed complete.')
}

void main()
