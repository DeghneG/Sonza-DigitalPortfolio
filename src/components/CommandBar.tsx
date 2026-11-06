import { Link, useLocation } from 'react-router-dom'
import { nav, site } from '../content/site'
import Arrow from './Arrow'

export default function CommandBar() {
  const { pathname } = useLocation()
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t hair bg-ink">
      <div className="flex h-14 items-stretch">
        <Link to="/" className="f-mono flip flex items-center gap-2 border-r hair px-4 sm:px-6" aria-label="Home">
          <span className="dim">$</span>
          <span className="hidden sm:inline">cd ~</span>
          <span className="sm:hidden">~</span>
        </Link>
        <nav aria-label="Primary" className="bar-nav flex flex-1 items-center gap-3 overflow-x-auto px-3 sm:gap-8 sm:px-6">
          {nav.map((n) => {
            const here = n.href === pathname
            return (
              <Link
                key={n.label}
                to={n.href}
                aria-current={here ? 'page' : undefined}
                className={`f-mono u whitespace-nowrap ${here ? 'text-bone' : 'dim hover:text-bone'}`}
              >
                {n.label}
              </Link>
            )
          })}
        </nav>
        <a
          href={site.resume}
          target="_blank"
          rel="noreferrer"
          className="f-mono silver flex items-center gap-2 px-4 sm:px-6"
        >
          Resume <span className="hidden sm:inline-flex"><Arrow /></span>
        </a>
      </div>
    </div>
  )
}
