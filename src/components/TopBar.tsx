import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function manilaTime() {
  return new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: 'Asia/Manila',
  }).format(new Date())
}

export default function TopBar() {
  const [t, setT] = useState(manilaTime)
  useEffect(() => {
    const id = setInterval(() => setT(manilaTime()), 15000)
    return () => clearInterval(id)
  }, [])
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-40 mix-blend-difference">
      <div className="flex items-center justify-between px-9 pt-6 text-bone sm:px-12">
        <Link to="/" className="f-mono pointer-events-auto" aria-label="Home">
          JKS
        </Link>
        <span className="f-mono">PH — {t}</span>
      </div>
    </div>
  )
}
