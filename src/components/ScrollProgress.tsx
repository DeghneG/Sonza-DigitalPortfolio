import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

/** Replaces the native scrollbar: a hairline across the top of the sheet that fills as you read. */
export default function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = bar.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const set = reduce ? (v: number) => gsap.set(el, { scaleX: v }) : gsap.quickTo(el, 'scaleX', { duration: 0.35, ease: 'power3.out' })

    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      set(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    // page height changes after route swaps and reveals
    const ro = new ResizeObserver(update)
    ro.observe(document.body)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
      ro.disconnect()
    }
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-[3px] mix-blend-difference"
      role="progressbar"
      aria-label="Page scroll progress"
      aria-hidden
    >
      <div ref={bar} className="h-full origin-left scale-x-0 bg-bone" />
    </div>
  )
}
