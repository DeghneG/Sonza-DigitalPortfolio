import { useState } from 'react'
import { Link } from 'react-router-dom'
import { work, type Category } from '../content/site'
import Arrow from './Arrow'

export default function Work() {
  const [active, setActive] = useState<Category>('Capstone')

  return (
    <section id="work" className="scroll-mt-4 py-16 sm:py-24">
      <div className="wrap">
        <div data-reveal className="mb-12 flex flex-col gap-4 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="f-display text-[clamp(1.5rem,4.4vw,3.6rem)]">Work</h2>
          <p className="f-mono prompt dim">ls work/ --by-term</p>
        </div>

        <div data-reveal className="flex flex-col border hair md:h-[36rem] md:flex-row">
          {work.categories.map((cat, idx) => {
            const on = cat === active
            const items = work.projects.filter((p) => p.category === cat)
            return (
              <div
                key={cat}
                className={`flex min-w-0 flex-col transition-[flex-grow] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:basis-0 ${
                  idx > 0 ? 'border-t hair md:border-l md:border-t-0' : ''
                } ${on ? 'md:grow-[4]' : 'md:grow-[1]'}`}
              >
                <button
                  onClick={() => setActive(cat)}
                  aria-expanded={on}
                  aria-controls={`panel-${cat}`}
                  className={`flex w-full items-center justify-between gap-4 p-5 text-left sm:p-7 md:items-start ${
                    on ? '' : 'flip md:h-full md:flex-col md:justify-between'
                  }`}
                >
                  <span
                    className={`f-display-m text-[clamp(1.6rem,3.4vw,3rem)] ${
                      on ? '' : 'md:[writing-mode:vertical-rl] md:rotate-180 md:self-start'
                    }`}
                  >
                    {cat}
                  </span>
                  <span className="f-mono dim whitespace-nowrap">
                    {items.filter((p) => !p.placeholder).length}/{items.length} published
                  </span>
                </button>

                {on && (
                  <ul id={`panel-${cat}`} className="reveal-in flex flex-1 flex-col border-t hair">
                    {items.map((p) => {
                      const body = (
                        <>
                          {p.image && (
                            <span className="relative block w-20 flex-none self-start border hair sm:w-36 lg:w-44">
                              <img
                                src={p.image}
                                alt={`${p.title} cover`}
                                loading="lazy"
                                className="block w-full object-cover"
                                style={{ aspectRatio: p.imageRatio ?? '977/893', objectPosition: p.imagePosition }}
                              />
                            </span>
                          )}
                          <span className="min-w-0 flex-1">
                            <span className="f-mono prompt dim mb-2 block truncate">
                              {p.href ? (/^https?:/i.test(p.href) ? `open ${new URL(p.href).hostname}` : `open ${decodeURIComponent(p.href.split('/').pop() ?? '')}`) : p.placeholder ? `cd ${p.slug}` : `cd /work/${p.slug}`}
                            </span>
                            <span className="f-display-m block text-[clamp(1.4rem,2.6vw,2.3rem)]">{p.title}</span>
                            <span className="dim mt-2 block max-w-[52ch] text-sm leading-relaxed">{p.summary}</span>
                            {p.team && (
                              <span className="f-mono dim mt-3 block max-w-[60ch] normal-case">
                                With {p.team.join(', ')}
                              </span>
                            )}
                          </span>
                          {p.placeholder ? (
                            <span className="f-mono dim whitespace-nowrap">Pending</span>
                          ) : (
                            <span className="f-mono flex items-center gap-2 whitespace-nowrap">
                              {p.href ? (/drive\.google\.com/i.test(p.href) ? 'Drive' : /\.pdf$/i.test(p.href) ? 'PDF' : /\.gif$/i.test(p.href) ? 'GIF' : /\.(png|jpe?g|webp)$/i.test(p.href) ? 'Image' : 'Video') : 'Case study'} <Arrow />
                            </span>
                          )}
                        </>
                      )
                      const row = 'flex flex-1 items-start justify-between gap-5 border-b hair p-5 sm:gap-6 sm:p-7 last:border-b-0 '
                      return (
                        <li key={p.slug} className="flex flex-col md:flex-1">
                          {p.placeholder ? (
                            <div className={row + 'opacity-60'}>{body}</div>
                          ) : p.href ? (
                            <a href={p.href} target="_blank" rel="noreferrer" className={row + 'flip'}>
                              {body}
                            </a>
                          ) : (
                            <Link to={`/work/${p.slug}`} className={row + 'flip'}>
                              {body}
                            </Link>
                          )}
                        </li>
                      )
                    })}
                  </ul>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
