import { useState } from 'react'
import { contact, site } from '../content/site'
import { useReveal } from '../hooks/useReveal'
import Arrow from '../components/Arrow'
import Win from '../components/Win'
import PhotoFrame from '../components/PhotoFrame'

export default function Contact() {
  const ref = useReveal<HTMLElement>({ start: 'top 100%' })
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${site.email}`
    }
  }

  return (
    <main ref={ref} className="flex min-h-svh flex-col justify-center py-28">
      <div className="wrap">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
          <h1 data-reveal className="f-display text-[clamp(2.3rem,8.4vw,8rem)]">
            {contact.heading}
          </h1>
          <p data-reveal className="mt-6 max-w-[42ch] text-lg text-mute">{contact.lead}</p>
          </div>
          <div data-reveal className="w-[min(60vw,15rem)] lg:col-span-3 lg:col-start-10 lg:w-full">
            <PhotoFrame />
          </div>
        </div>

        <div data-reveal className="mt-14">
          <Win title="mail" right="smtp">
            <div className="p-6 sm:p-10">
              <p className="f-mono prompt dim mb-4">mail --to</p>
              <a
                href={`mailto:${site.email}`}
                className="f-display-m u break-all text-[clamp(1.4rem,4.6vw,4rem)] !normal-case"
              >
                {site.email}
              </a>
              <div className="mt-10 flex flex-wrap gap-3">
                <button onClick={copy} className="f-mono flip border hair px-5 py-3" aria-live="polite">
                  {copied ? 'Copied' : 'Copy address'}
                </button>
                <a
                  href={site.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="f-mono silver flex items-center gap-2 px-5 py-3"
                >
                  Resume <Arrow />
                </a>
              </div>
            </div>
          </Win>
        </div>
      </div>
    </main>
  )
}
