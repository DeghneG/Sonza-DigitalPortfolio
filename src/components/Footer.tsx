import { footer, site } from '../content/site'
import { useReveal } from '../hooks/useReveal'
import Arrow from './Arrow'

const rev = new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' }).format(new Date())

/** The sheet's title block: the strip every drawing ends with, doubling as the site's exit. */
export default function Footer() {
  const ref = useReveal<HTMLElement>({ start: 'top 98%' })

  const cells = [
    { k: 'Drawn by', v: site.name },
    { k: 'Institution', v: 'University of San Agustin' },
    { k: 'Revision', v: rev },
    { k: 'Built with', v: 'Vite · React · GSAP' },
  ]

  return (
    <footer ref={ref} aria-label={footer.label} className="relative mt-10 overflow-hidden border-t hair">
      <div className="wrap pt-16">
        <div data-reveal className="grid border hair md:grid-cols-12">
          <dl className="grid grid-cols-2 md:col-span-8 md:grid-cols-4">
            {cells.map((c, i) => (
              <div
                key={c.k}
                className={`p-4 sm:p-5 ${i % 2 ? 'border-l hair' : ''} ${i > 1 ? 'border-t hair' : ''} md:border-t-0 ${
                  i > 0 ? 'md:border-l' : ''
                }`}
              >
                <dt className="f-mono dim mb-1.5">{c.k}</dt>
                <dd className="text-sm">{c.v}</dd>
              </div>
            ))}
          </dl>

          <ul className="f-mono flex flex-wrap items-center gap-x-6 gap-y-2 border-t hair p-4 sm:p-5 md:col-span-4 md:justify-end md:border-l md:border-t-0">
            {footer.links.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="u" {...(l.external ? { target: '_blank', rel: 'noreferrer' } : {})}>
                  [ {l.label} ]
                </a>
              </li>
            ))}
            <li>
              <a href={site.resume} target="_blank" rel="noreferrer" className="u">
                [ Resume ]
              </a>
            </li>
          </ul>
        </div>

        <div data-reveal className="f-mono mt-6 flex items-center justify-between gap-4">
          <p className="dim">
            <span className="text-bone">$</span> exit <span className="ml-3">[process completed, code 0]</span>
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flip flex items-center gap-2 border hair px-4 py-2"
          >
            Top <Arrow dir="ne" />
          </button>
        </div>
      </div>

      {/* Name cropped by the sheet edge: the last thing on the page, never a heading */}
      <p
        aria-hidden
        className="f-display pointer-events-none mt-8 select-none whitespace-nowrap text-center text-[clamp(1.6rem,7.6vw,11rem)] leading-[0.74] text-transparent [-webkit-text-stroke:1px_var(--color-hair)]"
        style={{ marginBottom: '-0.1em' }}
      >
        John Khyne
      </p>
    </footer>
  )
}
