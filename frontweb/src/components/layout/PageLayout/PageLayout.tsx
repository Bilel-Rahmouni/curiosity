import type { ReactNode } from 'react'
import './PageLayout.css'

type PageLayoutProps = {
  title: string
  children: ReactNode
  wide?: boolean
}

export function PageLayout({ title, children, wide }: PageLayoutProps) {
  return (
    <main
      className={`page-layout${wide ? ' page-layout--wide' : ''}`}
    >
      <div className="page-layout__inner">
        <header className="page-layout__header">
          <h1 className="page-layout__title">{title}</h1>
        </header>
        {children}
      </div>
    </main>
  )
}
