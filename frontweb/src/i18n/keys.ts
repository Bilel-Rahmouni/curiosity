import type { SubjectSlug, EducationLevelSlug } from '../data/curriculum'

export function subjectKey(slug: SubjectSlug) {
  return `curriculum.subjects.${slug}`
}

export function levelKey(slug: EducationLevelSlug) {
  return `curriculum.levels.${slug}`
}

export function unitKey(
  subject: SubjectSlug,
  level: EducationLevelSlug,
  unit: string,
) {
  return `curriculum.units.${subject}.${level}.${unit}`
}

export function lessonKey(
  subject: SubjectSlug,
  level: EducationLevelSlug,
  unit: string,
  lesson: string,
) {
  return `curriculum.lessons.${subject}.${level}.${unit}.${lesson}`
}
