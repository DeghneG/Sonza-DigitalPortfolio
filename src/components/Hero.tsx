import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { site, titleBlock } from '../content/site'
import Typed from './Typed'
import ReactiveName from './ReactiveName'

export default function Hero() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } })
      tl.from('[data-mask]', { yPercent: 105, duration: 1.4, stagger: 0.14 }, 0.15)
        .from('[data-draw]', { scaleX: 0, transformOrigin: 'left', duration: 1.4 }, 0.5)
        .from('[data-cell]', { opacity: 0, y: 10, duration: 0.9, stagger: 0.07 }, 0.9)
    },
    { scope: root },
  )

  return (
    <section ref={root} className="flex min-h-svh flex-col justify-end pb-24 pt-28 sm:pb-28">
      <div className="wrap">
        <ReactiveName
          label={site.name}
          lines={[
            { text: 'JOHN' },
            { text: 'KHYNE' },
            { text: site.lastName.toUpperCase(), outline: true },
          ]}
        />

        <div data-draw className="rule mt-10 sm:mt-14" />

        <dl className="grid grid-cols-2 border-b hair md:grid-cols-4">
          {titleBlock.map((c, i) => (
            <div
              key={c.k}
              data-cell
              className={`border-hair py-4 pr-4 ${i % 2 === 1 ? 'border-l pl-4' : ''} md:border-l md:pl-5 md:first:border-l-0 md:first:pl-0 ${
                i > 1 ? 'border-t md:border-t-0' : ''
              }`}
            >
              <dt className="f-mono dim mb-1.5">{c.k}</dt>
              <dd className="text-sm sm:text-base">{c.v}</dd>
            </div>
          ))}
        </dl>

        <p className="f-mono prompt caret mt-7 text-bone">
          <Typed text="whoami --portfolio" delay={1.2} />
        </p>
      </div>
    </section>
  )
}
