import { useReveal } from '../hooks/useReveal'
import Hero from '../components/Hero'
import About from '../components/About'
import Credentials from '../components/Credentials'
import Work from '../components/Work'

export default function Home() {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div ref={ref}>
      <Hero />
      <About />
      <Credentials />
      <Work />
    </div>
  )
}
