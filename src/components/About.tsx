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
          <div className="space-y-10">
            {about.stack.map((g) => (
              <div key={g.name}>
                <p data-reveal className="f-mono prompt dim mb-4">ls {g.name}/</p>
                <ul className="border-t hair">
                  {g.items.map((l) => (
                    <li key={l} data-reveal className="flip border-b hair">
                      <span className="f-display-m block px-1 py-3 text-[clamp(1.25rem,2.4vw,1.9rem)] transition-[padding] duration-500 hover:px-4">
                        {l}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
