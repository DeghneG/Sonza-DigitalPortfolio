import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface Line {
  text: string
  outline?: boolean
}

const BASE = 560 // resting weight
const PEAK = 900 // weight under the cursor

/**
 * The name as a machined part: every letter is a variable-font instance whose weight
 * swells as the pointer passes (a probe), and a slow wave runs through it when no
 * pointer is present (touch screens, idle). Width axis is held so the line never outgrows
 * its resting-black footprint. Reduced motion: static black.
 */
export default function ReactiveName({ lines, label }: { lines: Line[]; label: string }) {
  const root = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const el = root.current
    if (!el) return
    const letters = Array.from(el.querySelectorAll<HTMLElement>('[data-ch]'))
    const set = (node: HTMLElement, w: number) => {
      node.style.fontVariationSettings = `"wght" ${Math.round(w)}, "wdth" 150`
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      letters.forEach((l) => set(l, PEAK))
      return
    }

    const cur = letters.map(() => BASE)
    let px = 0
    let py = 0
    let hover = false

    const move = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return
      px = e.clientX
      py = e.clientY
      hover = true
    }
    const leave = () => {
      hover = false
    }
    window.addEventListener('pointermove', move, { passive: true })
    document.documentElement.addEventListener('pointerleave', leave)

    const fontSize = parseFloat(getComputedStyle(el).fontSize)
    const radius = fontSize * 1.5

    const tick = (time: number) => {
      const t = time / 1000
      letters.forEach((l, i) => {
        let k: number
        if (hover) {
          const r = l.getBoundingClientRect()
          const d = Math.hypot(r.left + r.width / 2 - px, r.top + r.height / 2 - py)
          k = Math.exp(-((d / radius) ** 2))
        } else {
          const s = 0.5 + 0.5 * Math.sin(t * 0.9 - i * 0.42)
          k = s ** 4
        }
        // in hover mode the far field rests at BASE; the cursor lifts letters to PEAK
        const target = BASE + (PEAK - BASE) * k
        cur[i] += (target - cur[i]) * 0.14
        set(l, cur[i])
      })
    }
    gsap.ticker.add(tick)

    return () => {
      gsap.ticker.remove(tick)
      window.removeEventListener('pointermove', move)
      document.documentElement.removeEventListener('pointerleave', leave)
    }
  }, [])

  return (
    <h1 ref={root} className="f-display text-[clamp(2.3rem,9.4vw,9.5rem)]" aria-label={label}>
      {lines.map((line) => (
        <span key={line.text} className="block overflow-hidden pb-[0.08em]" aria-hidden>
          <span
            data-mask
            className={`block whitespace-nowrap ${
              line.outline ? 'silver-fill' : ''
            }`}
          >
            {Array.from(line.text).map((ch, i) => (
              <span key={i} data-ch style={{ display: 'inline-block', whiteSpace: 'pre' }}>
                {ch}
              </span>
            ))}
          </span>
        </span>
      ))}
    </h1>
  )
}
