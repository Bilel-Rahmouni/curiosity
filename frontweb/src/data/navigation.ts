export type NavItem = {
  labelKey: string
  to: string
}

export const mainNav: NavItem[] = [
  { labelKey: 'nav.learn', to: '/learn' },
  { labelKey: 'nav.path', to: '/path' },
  { labelKey: 'nav.practice', to: '/practice' },
  { labelKey: 'nav.teachers', to: '/teachers' },
  { labelKey: 'nav.about', to: '/about' },
]
