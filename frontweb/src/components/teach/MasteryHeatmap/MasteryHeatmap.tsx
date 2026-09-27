import { useTranslation } from 'react-i18next'
import type { MasteryLevel } from '../../../progress/mastery'
import { unitKey } from '../../../i18n/keys'
import type {
  EducationLevelSlug,
  SubjectSlug,
} from '../../../data/curriculum'
import './MasteryHeatmap.css'

export type HeatmapUnit = {
  subjectSlug: string
  levelSlug: string
  unitSlug: string
}

type MasteryHeatmapProps = {
  students: { id: string; name: string }[]
  units: HeatmapUnit[]
  cell: (studentId: string, unit: HeatmapUnit) => MasteryLevel
}

export function MasteryHeatmap({ students, units, cell }: MasteryHeatmapProps) {
  const { t } = useTranslation()

  if (students.length === 0 || units.length === 0) return null

  return (
    <div className="mastery-heatmap">
      <table className="mastery-heatmap__table">
        <thead>
          <tr>
            <th />
            {units.map((unit) => (
              <th
                key={`${unit.subjectSlug}.${unit.levelSlug}.${unit.unitSlug}`}
                className="mastery-heatmap__unit"
              >
                {t(
                  unitKey(
                    unit.subjectSlug as SubjectSlug,
                    unit.levelSlug as EducationLevelSlug,
                    unit.unitSlug,
                  ),
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <th className="mastery-heatmap__student">{student.name}</th>
              {units.map((unit) => {
                const level = cell(student.id, unit)
                return (
                  <td
                    key={`${unit.subjectSlug}.${unit.levelSlug}.${unit.unitSlug}`}
                    className="mastery-heatmap__cell"
                  >
                    <span
                      className={`mastery-heatmap__dot mastery-heatmap__dot--${level}`}
                      title={t(`mastery.${level}`)}
                    />
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
