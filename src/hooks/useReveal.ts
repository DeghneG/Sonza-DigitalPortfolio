import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

interface RevealOptions {
  /** Selector of elements to reveal inside the container. */
  selector?: string
  /** Vertical travel in px. */
  y?: number
  duration?: number
  stagger?: number
  /** ScrollTrigger start position. */
  start?: string
}

/**
 * useReveal — attach the returned ref to a container. Every descendant
 * marked with `data-reveal` fades and rises into place as it scrolls into view.
 * Honors prefers-reduced-motion.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>({
  selector = '[data-reveal]',
  y = 28,
  duration = 0.9,
  stagger = 0.08,
  start = 'top 88%',
}: RevealOptions = {}) {
  const ref = useRef<T>(null)

  useGSAP(
    () => {
      const root = ref.current
      if (!root) return
      const items = gsap.utils.toArray<HTMLElement>(selector, root)
      if (!items.length) return

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        gsap.set(items, { opacity: 1, y: 0 })
        return
      }

      gsap.set(items, { opacity: 0, y })
      ScrollTrigger.batch(items, {
        start,
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, { opacity: 1, y: 0, duration, ease: 'power3.out', stagger, overwrite: true }),
      })
    },
    { scope: ref, dependencies: [selector] },
  )

  return ref
}
