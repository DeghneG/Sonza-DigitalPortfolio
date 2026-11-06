import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

/** Types text out once. Full text is in the DOM from the start for readers. */
export default function Typed({ text, delay = 0, className = '' }: { text: string; delay?: number; className?: string }) {
  const el = useRef<HTMLSpanElement>(null)
  useGSAP(() => {
    const node = el.current
    if (!node || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const state = { n: 0 }
    node.textContent = ''
    gsap.to(state, {
      n: text.length,
      duration: text.length * 0.045,
      delay,
      ease: 'none',
      onUpdate: () => {
        node.textContent = text.slice(0, Math.round(state.n))
      },
    })
  }, [text])
  return (
    <span className={className} aria-label={text}>
      <span ref={el} aria-hidden>{text}</span>
    </span>
  )
}
