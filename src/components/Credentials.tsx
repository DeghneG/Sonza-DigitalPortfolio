import { credentials } from '../content/site'

// Years are read from the content file so the ruler stays true to the data.
const START = 2018
const END = 2027
const NOW = new Date().getFullYear() + new Date().getMonth() / 12

function span(years: string) {
  const [a, b] = years.split('—').map((s) => s.trim())
  const from = parseInt(a, 10)
  const to = /now/i.test(b) ? Math.min(NOW, END) : parseInt(b, 10)
  return { left: ((from - START) / (END - START)) * 100, width: ((to - from) / (END - START)) * 100 }
}

const fills = ['bg-ink', 'bg-[#6b6b68]', 'hatch']

export default function Credentials() {
  const years = Array.from({ length: END - START + 1 }, (_, i) => START + i)
  return (
    <section id="credentials" className="scroll-mt-4 bg-paper py-16 text-ink sm:py-24">
      <div className="wrap">
        <h2 data-reveal className="f-display text-[clamp(1.5rem,4.4vw,3.6rem)]">
          Credentials
        </h2>

        {/* Desktop: the ruler is the content. Each school sits under its own span of time. */}
        <div data-reveal className="mt-10 hidden md:block">
          <div className="relative h-10 border border-ink" aria-hidden>
            {credentials.items.map((c, i) => {
              const s = span(c.years)
              return (
                <div
                  key={c.school}
                  className={`absolute inset-y-0 border-r border-ink ${fills[i] ?? 'bg-ink'}`}
                  style={{ left: `${s.left}%`, width: `${s.width}%` }}
                />
              )
            })}
          </div>

          <div className="relative h-4 border-t border-ink/40" aria-hidden>
            {years.map((y) => (
              <span
                key={y}
                className="f-mono absolute top-0 -translate-x-1/2 border-l border-ink/40 pl-1 pt-1 text-[0.6rem] leading-none"
                style={{ left: `${((y - START) / (END - START)) * 100}%` }}
              >
                {y}
              </span>
            ))}
          </div>

          <ol className="relative mt-8 h-28">
            {credentials.items.map((c) => {
              const s = span(c.years)
              return (
                <li key={c.school} className="absolute top-0 pr-5" style={{ left: `${s.left}%`, width: `${s.width}%` }}>
                  <p className="f-mono mb-2">{c.years}</p>
                  <p className="f-display-m text-[clamp(0.95rem,1.45vw,1.3rem)]">{c.school}</p>
                  <p className="f-mono mt-2 text-ink/60">{c.level}</p>
                </li>
              )
            })}
          </ol>
        </div>

        {/* Mobile: plain list */}
        <ol className="mt-10 border-t border-ink md:hidden">
          {credentials.items.map((c) => (
            <li key={c.school} data-reveal className="border-b border-ink/25 py-5">
              <p className="f-mono">{c.years}</p>
              <p className="f-display-m mt-1 text-[1.3rem]">{c.school}</p>
              <p className="f-mono mt-1 text-ink/60">{c.level}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
