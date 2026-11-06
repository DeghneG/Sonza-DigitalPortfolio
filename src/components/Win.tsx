import type { ReactNode } from 'react'

/** Terminal-window frame from the sitemap: square dots, a mono title, a body. */
export default function Win({
  title,
  right,
  children,
  className = '',
}: {
  title: string
  right?: string
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`win ${className}`}>
      <div className="win-bar f-mono dim">
        <b /> <b /> <b />
        <span className="ml-2 text-bone">{title}</span>
        {right && <span className="ml-auto">{right}</span>}
      </div>
      {children}
    </div>
  )
}
