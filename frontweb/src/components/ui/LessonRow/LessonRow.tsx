import { NavLink } from 'react-router-dom'
import './LessonRow.css'

type LessonRowProps = {
  to: string
  index: number
  title: string
  completed?: boolean
}

export function LessonRow({ to, index, title, completed }: LessonRowProps) {
  const label = String(index + 1).padStart(2, '0')

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `lesson-row${isActive ? ' lesson-row--active' : ''}`
      }
    >
      <span className="lesson-row__index">{label}</span>
      <span className="lesson-row__title">{title}</span>
      {completed && (
        <span className="lesson-row__check" aria-hidden="true">
          ✓
        </span>
      )}
    </NavLink>
  )
}
