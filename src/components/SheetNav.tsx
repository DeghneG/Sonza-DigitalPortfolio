import { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { useActiveSection, type SectionId } from '../hooks/useActiveSection'

const ITEMS: { id: SectionId; label: string; to: string }[] = [
  { id: 'home', label: 'Home', to: '/' },
  { id: 'about', label: 'About', to: '/#about' },
  { id: 'credentials', label: 'Credentials', to: '/#credentials' },
  { id: 'work', label: 'Work', to: '/#work' },
  { id: 'contact', label: 'Contact', to: '/contact' },
]

/**
 * Sheet index: the page list as a strip of tabs. A brushed-silver plate slides under
 * whichever page or section is current, so the nav reads like a drawing's sheet selector.
 */
export default function SheetNav() {
  const active = useActiveSection()
  const wrap = useRef<HTMLDivElement>(null)
  const plate = useRef<HTMLSpanElement>(null)
  const refs = useRef<Record<string, HTMLAnchorElement | null>>({})
  const placed = useRef(false)

  useLayoutEffect(() => {
    const place = (animate: boolean) => {
      const el = refs.current[active]
      const box = wrap.current
      const p = plate.current
      if (!el || !box || !p) return
      const x = el.offsetLeft
      const w = el.offsetWidth
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (animate && !reduce) gsap.to(p, { x, width: w, duration: 0.7, ease: 'expo.out', overwrite: true })
      else gsap.set(p, { x, width: w })
    }
    place(placed.current)
    placed.current = true
    const onResize = () => place(false)
    window.addEventListener('resize', onResize)
    // fonts load after first paint and change the tab widths
    document.fonts?.ready.then(() => place(false))
    return () => window.removeEventListener('resize', onResize)
  }, [active])

  return (
    <nav
      aria-label="Pages"
      className="fixed left-1/2 top-4 z-40 hidden -translate-x-1/2 border hair bg-ink lg:block"
    >
      <div ref={wrap} className="relative flex">
        <span ref={plate} aria-hidden className="silver absolute inset-y-0 left-0 w-0 !tracking-normal" />
        {ITEMS.map((it) => {
          const on = it.id === active
          return (
            <Link
              key={it.id}
              ref={(n) => {
                refs.current[it.id] = n
              }}
              to={it.to}
              aria-current={on ? 'page' : undefined}
              className={`f-mono relative z-10 px-5 py-3 uppercase transition-colors duration-500 ${
                on ? 'text-ink' : 'dim hover:text-bone'
              }`}
              style={{ letterSpacing: '0.14em' }}
            >
              {it.label}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
