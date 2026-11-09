import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export type SectionId = 'home' | 'about' | 'credentials' | 'work' | 'contact'

const SECTIONS: SectionId[] = ['about', 'credentials', 'work']

/** Which page or home-page section the reader is on right now. */
export function useActiveSection(): SectionId {
  const { pathname } = useLocation()
  const [section, setSection] = useState<SectionId>('home')

  useEffect(() => {
    if (pathname !== '/') {
      setSection(pathname.startsWith('/work') ? 'work' : pathname.startsWith('/contact') ? 'contact' : 'home')
      return
    }

    let raf = 0
    const calc = () => {
      raf = 0
      let current: SectionId = 'home'
      for (const id of SECTIONS) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) current = id
      }
      setSection(current)
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(calc)
    }
    calc()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [pathname])

  return section
}
