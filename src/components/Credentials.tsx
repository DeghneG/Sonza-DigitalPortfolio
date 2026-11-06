import { credentials } from '../content/site'

// Years are read from the content file so the ruler stays true to the data.
const START = 2018
const END = 2027
const NOW = new Date().getFullYear() + new Date().getMonth() / 12

function span(years: string) {
  const [a, b] = years.split('—').map((s) => s.trim())
  const from = parseInt(a, 10)
  const to = /now/i.test(b) ? Math.min(NOW, END) : parseInt(b, 10)
  return { left: ((from - START) / (END - START)) * 100, width: ((to - from) / (END - START)) * 100, ongoing: /now/i.test(b) }
}

export default function Credentials() {
  const years = Array.from({ length: END - START + 1 }, (_, i) => START + i)
  return (
    <section id="credentials" className="scroll-mt-4 bg-paper py-24 text-ink sm:py-36">
      <div className="wrap">
        <h2 data-reveal className="f-display text-[clamp(1.5rem,7.2vw,7rem)]">
          Credentials
        </h2>

        {/* Proportional ruler: one bar, three terms of schooling */}
        <div data-reveal className="mt-16 hidden md:block" aria-hidden>
          <div className="relative h-14 border border-ink">
            {credentials.items.map((c, i) => {
              const s = span(c.years)
              return (
                <div
                  key={c.school}
                  className={`absolute inset-y-0 border-r border-ink ${i === 0 ? 'bg-ink' : i === 1 ? 'bg-[#6b6b68]' : 'hatch'}`}
                  style={{ left: `${s.left}%`, width: `${s.width}%` }}
                />
              )
            })}
          </div>
          <div className="relative mt-2 h-4 border-t border-ink/40">
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
        </div>

        <ol className="mt-24 border-t border-ink md:mt-20">
          {credentials.items.map((c) => (
            <li
              key={c.school}
              data-reveal
              className="grid items-baseline gap-1 border-b border-ink/25 py-6 sm:grid-cols-12 sm:gap-6 sm:py-8"
            >
              <span className="f-mono sm:col-span-3">{c.years}</span>
              <span className="f-display-m text-[clamp(1.35rem,3vw,2.3rem)] sm:col-span-6">{c.school}</span>
              <span className="f-mono text-ink/60 sm:col-span-3 sm:text-right">{c.level}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
