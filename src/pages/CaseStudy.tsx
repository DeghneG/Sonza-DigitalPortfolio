import type { ReactNode } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { caseStudies, work } from '../content/site'
import { useReveal } from '../hooks/useReveal'
import Arrow from '../components/Arrow'

function Sheet({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-6 border-t hair py-14 sm:py-20">
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
        <h2 data-reveal className="f-display-m text-[clamp(1.6rem,3vw,2.4rem)] lg:col-span-4">
          {title}
        </h2>
        <div className="space-y-6 lg:col-span-8">{children}</div>
      </div>
    </section>
  )
}

export default function CaseStudy() {
  const { slug = '' } = useParams()
  const cs = caseStudies[slug]
  const ref = useReveal<HTMLElement>({ start: 'top 95%' })

  if (!cs) return <Navigate to="/#work" replace />

  const real = work.projects.filter((p) => caseStudies[p.slug])
  const idx = real.findIndex((p) => p.slug === slug)
  const prev = cs.prev ?? (idx > 0 ? real[idx - 1] : null)
  const next = cs.next ?? (idx >= 0 && idx < real.length - 1 ? real[idx + 1] : null)

  const toc = [
    ['problem', cs.problem.heading],
    ['role', cs.role.heading],
    ['process', cs.process.heading],
    ['results', cs.results.heading],
  ]

  return (
    <main ref={ref} className="pt-28">
      <div className="wrap">
        <Link data-reveal to="/#work" className="f-mono u inline-flex items-center gap-2">
          <Arrow dir="w" /> work/
        </Link>

        <header className="pb-16 pt-10 sm:pb-24">
          <h1 data-reveal className="f-display text-[clamp(2.2rem,8.2vw,8rem)]">
            {cs.title}
          </h1>
          <p data-reveal className="mt-8 max-w-[48ch] text-lg leading-snug text-mute sm:text-xl">
            {cs.subtitle}
          </p>
        </header>

        <div className="lg:grid lg:grid-cols-12 lg:gap-14">
          <aside className="hidden lg:col-span-2 lg:block">
            <nav aria-label="On this page" className="f-mono sticky top-24 flex flex-col items-start gap-3">
              {toc.map(([id, label]) => (
                <a key={id} href={`#${id}`} className="u dim">
                  {label.split(/[ ,]/)[0]}
                </a>
              ))}
            </nav>
          </aside>

          <div className="lg:col-span-10">
            <Sheet id="problem" title={cs.problem.heading}>
              {cs.problem.body.map((p, i) => (
                <p key={i} data-reveal className="max-w-[62ch] text-lg leading-relaxed">
                  {p}
                </p>
              ))}
            </Sheet>

            <Sheet id="role" title={cs.role.heading}>
              <dl className="border-t hair">
                {cs.role.meta.map((m) => (
                  <div key={m.k} data-reveal className="grid grid-cols-3 gap-4 border-b hair py-5">
                    <dt className="f-mono dim">{m.k}</dt>
                    <dd className="col-span-2">{m.v}</dd>
                  </div>
                ))}
              </dl>
            </Sheet>

            <Sheet id="process" title={cs.process.heading}>
              <ul className="grid gap-px bg-[var(--color-hair)] sm:grid-cols-2">
                {cs.process.steps.map((s) => (
                  <li key={s.title} data-reveal className="bg-ink p-6 sm:p-8">
                    <h3 className="f-display-m mb-3 text-xl">{s.title}</h3>
                    <p className="mb-6 text-sm leading-relaxed text-mute">{s.body}</p>
                    <div className="f-mono dim grid aspect-video place-items-center border border-dashed hair">
                      Image pending
                    </div>
                  </li>
                ))}
              </ul>
            </Sheet>

            <Sheet id="results" title={cs.results.heading}>
              {cs.results.body.map((p, i) => (
                <p key={i} data-reveal className="max-w-[62ch] text-lg leading-relaxed">
                  {p}
                </p>
              ))}
              <ul className="border-t hair">
                {cs.results.deliverables.map((d) => (
                  <li key={d} data-reveal className="f-mono flex gap-4 border-b hair py-4">
                    <span className="dim">+</span>
                    {d}
                  </li>
                ))}
              </ul>
            </Sheet>
          </div>
        </div>

        <nav aria-label="Project navigation" className="grid border-t hair sm:grid-cols-2">
          {[
            { dir: 'Previous', p: prev, cls: '' },
            { dir: 'Next', p: next, cls: 'sm:border-l hair sm:text-right' },
          ].map(({ dir, p, cls }) =>
            p ? (
              <Link key={dir} to={`/work/${p.slug}`} className={`flip block py-12 sm:px-8 ${cls}`}>
                <span className="f-mono dim mb-3 block">{dir}</span>
                <span className="f-display-m text-2xl sm:text-3xl">{p.title}</span>
              </Link>
            ) : (
              <div key={dir} className={`py-12 opacity-40 sm:px-8 ${cls}`}>
                <span className="f-mono dim mb-3 block">{dir}</span>
                <span className="f-display-m text-2xl sm:text-3xl">None yet</span>
              </div>
            ),
          )}
        </nav>
      </div>
    </main>
  )
}
