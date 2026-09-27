import { getLevel, getUnit } from '../data/curriculum'
import type { Assignment } from '../lib/supabase'

export type PathStepRef = {
  subjectSlug: string
  levelSlug: string
  unitSlug: string
  dueDate: string | null
}

export type PathStep = PathStepRef & {
  lessonSlugs: string[]
  completedSlugs: string[]
  status: 'done' | 'current' | 'upcoming'
  nextLessonSlug: string | null
}

/** Ordered, de-duplicated unit refs from a class's assignments (due date, then creation order). */
export function stepsFromAssignments(assignments: Assignment[]): PathStepRef[] {
  const sorted = [...assignments].sort((a, b) => {
    if (a.due_date && b.due_date && a.due_date !== b.due_date) {
      return a.due_date < b.due_date ? -1 : 1
    }
    if (a.due_date && !b.due_date) return -1
    if (!a.due_date && b.due_date) return 1
    return a.created_at < b.created_at ? -1 : 1
  })
  const seen = new Set<string>()
  const refs: PathStepRef[] = []
  for (const a of sorted) {
    const key = `${a.subject_slug}/${a.level_slug}/${a.unit_slug}`
    if (seen.has(key)) continue
    seen.add(key)
    refs.push({
      subjectSlug: a.subject_slug,
      levelSlug: a.level_slug,
      unitSlug: a.unit_slug,
      dueDate: a.due_date,
    })
  }
  return refs
}

/** Default path: the units of one subject level, in curriculum order. */
export function stepsFromLevel(
  subjectSlug: string,
  levelSlug: string,
): PathStepRef[] {
  const found = getLevel(subjectSlug, levelSlug)
  if (!found) return []
  return found.level.units.map((u) => ({
    subjectSlug,
    levelSlug,
    unitSlug: u.slug,
    dueDate: null,
  }))
}

/** Attach lesson lists, progress and done/current/upcoming statuses to a path. */
export function resolvePath(
  refs: PathStepRef[],
  isCompleted: (
    subjectSlug: string,
    levelSlug: string,
    unitSlug: string,
    lessonSlug: string,
  ) => boolean,
): PathStep[] {
  let currentAssigned = false
  return refs.map((ref) => {
    const found = getUnit(ref.subjectSlug, ref.levelSlug, ref.unitSlug)
    const lessonSlugs = found?.unit.lessons.map((l) => l.slug) ?? []
    const doneSlugs = lessonSlugs.filter((slug) =>
      isCompleted(ref.subjectSlug, ref.levelSlug, ref.unitSlug, slug),
    )
    const allDone = lessonSlugs.length > 0 && doneSlugs.length === lessonSlugs.length
    const nextLessonSlug =
      lessonSlugs.find(
        (slug) =>
          !isCompleted(ref.subjectSlug, ref.levelSlug, ref.unitSlug, slug),
      ) ?? null

    let status: PathStep['status']
    if (allDone) {
      status = 'done'
    } else if (!currentAssigned) {
      status = 'current'
      currentAssigned = true
    } else {
      status = 'upcoming'
    }

    return {
      ...ref,
      lessonSlugs,
      completedSlugs: doneSlugs,
      status,
      nextLessonSlug,
    }
  })
}
