import { useEffect, useLayoutEffect, useRef } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TopBar from './components/TopBar'
import ScrollProgress from './components/ScrollProgress'
import CommandBar from './components/CommandBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import CaseStudy from './pages/CaseStudy'

/** Route change: a black plate lifts off the new page. Layout effect = no flash of the page before it. */
function Shutter() {
  const el = useRef<HTMLDivElement>(null)
  const { pathname } = useLocation()
  const first = useRef(true)
  useLayoutEffect(() => {
    if (first.current) {
      first.current = false
      return
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    gsap.fromTo(el.current, { yPercent: 0 }, { yPercent: -100, duration: 0.9, ease: 'expo.inOut' })
  }, [pathname])
  return <div ref={el} className="pointer-events-none fixed inset-0 z-[60] -translate-y-full bg-ink" aria-hidden />
}

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const t = setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
        ScrollTrigger.refresh()
      }, 80)
      return () => clearTimeout(t)
    }
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Shutter />
      <ScrollProgress />
      <div className="sheet-frame" aria-hidden>
        <i /><i /><i /><i />
      </div>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work/:slug" element={<CaseStudy />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
      <CommandBar />
    </BrowserRouter>
  )
}
