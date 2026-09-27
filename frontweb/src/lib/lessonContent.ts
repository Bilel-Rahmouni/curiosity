import { useEffect, useState } from 'react'
import { supabase } from './supabase'
import { getLessonContent } from '../content'
import { lessonKey, type LessonBlock, type LessonContent } from '../content/types'

// Remote lessons fetched from Supabase are cached locally so previously
// viewed (or downloaded) lessons keep working offline.
const CACHE_KEY = 'curiosity-lesson-cache'

function readCache(): Record<string, LessonBlock[]> {
  try {
    const raw = localStorage.getItem(CACHE_KEY)
    return raw ? (JSON.parse(raw) as Record<string, LessonBlock[]>) : {}
  } catch {
    return {}
  }
}

export function cacheLessonBlocks(key: string, blocks: LessonBlock[]) {
  const cache = readCache()
  cache[key] = blocks
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(cache))
  } catch {
    // Storage full: drop the cache rather than fail.
    localStorage.removeItem(CACHE_KEY)
  }
}

export function getCachedLessonBlocks(key: string): LessonBlock[] | undefined {
  return readCache()[key]
}

export async function fetchLessonBlocks(
  subjectSlug: string,
  levelSlug: string,
  unitSlug: string,
  lessonSlug: string,
): Promise<LessonBlock[] | undefined> {
  if (!supabase) return undefined
  const { data } = await supabase
    .from('lessons')
    .select('blocks')
    .eq('subject_slug', subjectSlug)
    .eq('level_slug', levelSlug)
    .eq('unit_slug', unitSlug)
    .eq('slug', lessonSlug)
    .eq('status', 'published')
    .maybeSingle()
  const blocks = (data?.blocks as LessonBlock[] | undefined) ?? undefined
  if (blocks && blocks.length > 0) {
    cacheLessonBlocks(
      lessonKey(subjectSlug, levelSlug, unitSlug, lessonSlug),
      blocks,
    )
    return blocks
  }
  return undefined
}

/**
 * Lesson content resolution order:
 * 1. bundled local content (instant, offline-friendly)
 * 2. previously cached remote content
 * 3. remote content from Supabase (refreshes the cache, wins once loaded)
 */
export function useLessonContent(
  subjectSlug: string,
  levelSlug: string,
  unitSlug: string,
  lessonSlug: string,
): LessonContent | undefined {
  const key = lessonKey(subjectSlug, levelSlug, unitSlug, lessonSlug)
  const [remoteBlocks, setRemoteBlocks] = useState<LessonBlock[] | undefined>(
    () => getCachedLessonBlocks(key),
  )

  useEffect(() => {
    setRemoteBlocks(getCachedLessonBlocks(key))
    let cancelled = false
    void fetchLessonBlocks(subjectSlug, levelSlug, unitSlug, lessonSlug).then(
      (blocks) => {
        if (!cancelled && blocks) setRemoteBlocks(blocks)
      },
    )
    return () => {
      cancelled = true
    }
  }, [key, subjectSlug, levelSlug, unitSlug, lessonSlug])

  if (remoteBlocks && remoteBlocks.length > 0) return { blocks: remoteBlocks }
  return getLessonContent(key)
}
