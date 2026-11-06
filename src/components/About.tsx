import { about } from '../content/site'
import Win from './Win'

export default function About() {
  return (
    <section id="about" className="scroll-mt-4 py-24 sm:py-36">
      <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div data-reveal className="lg:col-span-7">
          <Win title="about.txt" right="read-only">
            <div className="space-y-7 p-6 sm:p-10">
              <p className="f-mono prompt dim">cat about.txt</p>
              <p className="text-[clamp(1.4rem,2.6vw,2.15rem)] font-light leading-[1.25] tracking-tight">{about.bio[0]}</p>
              <p className="max-w-[60ch] leading-relaxed text-mute">{about.bio[1]}</p>
            </div>
          </Win>
        </div>

        <div className="lg:col-span-5">
          <div data-reveal>
            <Win title="stack" right="ls -R">
              {about.stack.map((g, i) => (
                <div key={g.name} className={`p-5 sm:p-6 ${i > 0 ? 'border-t hair' : ''}`}>
                  <p className="f-mono dim mb-3">{g.name}/</p>
                  <ul className="f-display-m flex flex-wrap gap-x-5 gap-y-1.5 text-[clamp(1.05rem,1.5vw,1.3rem)]">
                    {g.items.map((l) => (
                      <li key={l}>
                        <span className="u cursor-default">{l}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </Win>
          </div>
        </div>
      </div>
    </section>
  )
}
