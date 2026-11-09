import { useLocation, useNavigate } from 'react-router-dom'
import Arrow from './Arrow'

/**
 * Back to the page you came from. With `to`, always goes there (e.g. a case study back to Work);
 * otherwise uses browser history and falls back to Home when the page was opened directly.
 */
export default function BackButton({ to, label = 'Back' }: { to?: string; label?: string }) {
  const navigate = useNavigate()
  const { key } = useLocation()

  const go = () => {
    if (to) navigate(to)
    else if (key !== 'default') navigate(-1)
    else navigate('/')
  }

  return (
    <button type="button" onClick={go} className="f-mono inline-flex items-center gap-2" aria-label={label}>
      <Arrow dir="w" />
      <span className="u">{label}</span>
    </button>
  )
}
