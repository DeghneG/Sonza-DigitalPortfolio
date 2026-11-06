import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)
import { credentials } from '../content/site'

// Years are read from the content file so the ruler stays true to the data.
const START = 2018
const END = 2027
const NOW = new Date().getFullYear() + new Date().getMonth() / 12

function span(years: string) {
  const [a, b] = years.split('—').map((s) => s.trim())
  const from = parseInt(a, 10)
  const to = /now/i.test(b) ? Math.min(NOW, END) : parseInt(b, 10)
  return { left: ((from - START) / (END - START)) * 100, width: ((to - from) / (END - START)) * 100 }
}

const fills = ['bg-ink', 'bg-[#6b6b68]', 'hatch']

export default function Credentials() {
  const root = useRef<HTMLDivElement>(null)

  // The ruler plays once when it enters view: time advances left to right,
  // each term fills in turn, its label lands as it completes, then the playhead settles on "now".
  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
      const segs = gsap.utils.toArray<HTMLElement>('[data-seg]')
      const labels = gsap.utils.toArray<HTMLElement>('[data-seglabel]')
      const ticks = gsap.utils.toArray<HTMLElement>('[data-tick]')
      const head = root.current?.querySelector<HTMLElement>('[data-head]') ?? null
      if (!segs.length) return

      gsap.set(segs, { scaleX: 0, transformOrigin: 'left center' })
      gsap.set(labels, { opacity: 0, y: 10 })
      gsap.set(ticks, { opacity: 0 })
      if (head) gsap.set(head, { opacity: 0 })

      const tl = gsap.timeline({
        scrollTrigger: { trigger: root.current, start: 'top 75%', once: true },
        defaults: { ease: 'power2.inOut' },
      })
      tl.to(ticks, { opacity: 1, duration: 0.6, stagger: 0.04, ease: 'none' }, 0)
      segs.forEach((seg, i) => {
        const w = parseFloat(seg.dataset.w ?? '30')
        tl.to(seg, { scaleX: 1, duration: 0.5 + w / 28, ease: 'power1.inOut' }, '>-0.02')
        tl.to(labels[i], { opacity: 1, y: 0, duration: 0.7, ease: 'expo.out' }, '<0.15')
      })
      if (head) tl.to(head, { opacity: 1, duration: 0.4 }, '>-0.1')
    },
    { scope: root },
  )

  const years = Array.from({ length: END - START + 1 }, (_, i) => START + i)
  return (
    <section id="credentials" className="scroll-mt-4 bg-paper py-16 text-ink sm:py-24">
      <div className="wrap">
        <h2 data-reveal className="f-display text-[clamp(1.5rem,4.4vw,3.6rem)]">
          Credentials
        </h2>

        {/* Desktop: the ruler is the content. Each school sits under its own span of time. */}
        <div ref={root} data-reveal className="mt-10 hidden md:block">
          <div className="relative h-10 border border-ink" aria-hidden>
            {credentials.items.map((c, i) => {
              const s = span(c.years)
              return (
                <div
                  key={c.school}
                  data-seg
                  data-w={s.width}
                  className={`absolute inset-y-0 border-r border-ink ${fills[i] ?? 'bg-ink'} ${i === 2 ? 'hatch-drift' : ''}`}
                  style={{ left: `${s.left}%`, width: `${s.width}%` }}
                />
              )
            })}
            {/* playhead: the present moment */}
            <div
              data-head
              className="absolute -inset-y-2 w-px bg-ink"
              style={{ left: `${((NOW - START) / (END - START)) * 100}%` }}
            >
              <span className="head-pulse absolute -top-1 left-1/2 block h-2 w-2 -translate-x-1/2 bg-ink" />
            </div>
          </div>

          <div className="relative h-4 border-t border-ink/40" aria-hidden>
            {years.map((y) => (
              <span
                key={y}
                data-tick
                className="f-mono absolute top-0 -translate-x-1/2 border-l border-ink/40 pl-1 pt-1 text-[0.6rem] leading-none"
                style={{ left: `${((y - START) / (END - START)) * 100}%` }}
              >
                {y}
              </span>
            ))}
          </div>

          <ol className="relative mt-8 h-28">
            {credentials.items.map((c) => {
              const s = span(c.years)
              return (
                <li key={c.school} data-seglabel className="absolute top-0 pr-5" style={{ left: `${s.left}%`, width: `${s.width}%` }}>
                  <p className="f-mono mb-2">{c.years}</p>
                  <p className="f-display-m text-[clamp(0.95rem,1.45vw,1.3rem)]">{c.school}</p>
                  <p className="f-mono mt-2 text-ink/60">{c.level}</p>
                </li>
              )
            })}
          </ol>
        </div>

        {/* Mobile: plain list */}
        <ol className="mt-10 border-t border-ink md:hidden">
          {credentials.items.map((c) => (
            <li key={c.school} data-reveal className="border-b border-ink/25 py-5">
              <p className="f-mono">{c.years}</p>
              <p className="f-display-m mt-1 text-[1.3rem]">{c.school}</p>
              <p className="f-mono mt-1 text-ink/60">{c.level}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
