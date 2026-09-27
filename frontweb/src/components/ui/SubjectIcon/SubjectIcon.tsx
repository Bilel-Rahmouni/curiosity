import type { SubjectSlug } from '../../../data/curriculum'
import './SubjectIcon.css'

type SubjectIconProps = {
  slug: SubjectSlug
}

const icons: Record<SubjectSlug, React.ReactNode> = {
  mathematics: (
    <>
      <path d="M4.5 7c1-1.6 2-1.6 3-1.6h12" />
      <path d="M9 5.5c0 5-.6 9.5-2 13" />
      <path d="M16 5.5c-.4 4.5-.2 9 1.3 12.4.4.8 1.4.9 2.2.3" />
    </>
  ),
  physics: (
    <>
      <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
      <ellipse cx="12" cy="12" rx="9" ry="3.8" />
      <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(-60 12 12)" />
    </>
  ),
  chemistry: (
    <>
      <path d="M9.5 3h5" />
      <path d="M10 3v5.4L5.5 16.7A2.2 2.2 0 0 0 7.5 20h9a2.2 2.2 0 0 0 2-3.3L14 8.4V3" />
      <path d="M7.4 14.5h9.2" />
    </>
  ),
  'web-development': (
    <>
      <path d="m8 7-5 5 5 5" />
      <path d="m16 7 5 5-5 5" />
      <path d="M13.5 4.5 10.5 19.5" />
    </>
  ),
  'exam-prep': (
    <>
      <path d="M12 4 2 8.8l10 4.8 10-4.8Z" />
      <path d="M6.5 11.5v4.7c0 1.4 2.5 2.8 5.5 2.8s5.5-1.4 5.5-2.8v-4.7" />
      <path d="M22 9v6" />
    </>
  ),
  english: languageIcon(),
  french: languageIcon(),
  italian: languageIcon(),
  german: languageIcon(),
  arabic: languageIcon(),
}

function languageIcon() {
  return (
    <>
      <path d="M3.5 5.5A1.8 1.8 0 0 1 5.3 3.7H13a1.8 1.8 0 0 1 1.8 1.8v5.4A1.8 1.8 0 0 1 13 12.7H8.2L4.9 15.4v-2.7h-.6a1.8 1.8 0 0 1-1.8-1.8Z" />
      <path d="M17 9.5h1.7a1.8 1.8 0 0 1 1.8 1.8v5.4a1.8 1.8 0 0 1-1.8 1.8h-.6v2.7l-3.3-2.7h-4" />
    </>
  )
}

export function SubjectIcon({ slug }: SubjectIconProps) {
  return (
    <span className="subject-icon" aria-hidden="true">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {icons[slug]}
      </svg>
    </span>
  )
}
