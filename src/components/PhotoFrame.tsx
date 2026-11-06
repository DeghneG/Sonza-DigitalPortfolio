import { site } from '../content/site'

/**
 * Portrait frame, drawn like a measured plate: silver corner brackets set off the edge,
 * ruler ticks along the top and left, a registration cross in the centre and a caption strip.
 * Blank until `site.photo` is set; then the image fills the frame.
 */
export default function PhotoFrame({ className = '' }: { className?: string }) {
  return (
    <figure className={`photo-frame ${className}`} aria-label={site.photo ? 'Portrait of John Khyne E. Sonza' : 'Portrait placeholder'}>
      <div className="photo-ruler photo-ruler--x" aria-hidden />
      <div className="photo-ruler photo-ruler--y" aria-hidden />

      <div className="photo-plate">
        {site.photo ? (
          <img src={site.photo} alt="John Khyne E. Sonza" className="h-full w-full object-cover grayscale" />
        ) : (
          <span className="photo-cross" aria-hidden />
        )}
        <i className="photo-corner photo-corner--tl" aria-hidden />
        <i className="photo-corner photo-corner--tr" aria-hidden />
        <i className="photo-corner photo-corner--bl" aria-hidden />
        <i className="photo-corner photo-corner--br" aria-hidden />
      </div>

      <figcaption className="f-mono mt-3 flex items-center justify-between gap-2 whitespace-nowrap dim">
        <span>Fig. 01</span>
        <span className="flex items-center gap-2">
          {!site.photo && <span className="head-pulse block h-1.5 w-1.5 bg-silver" aria-hidden />}
          {site.photo ? '4:5' : 'Pending'}
        </span>
      </figcaption>
    </figure>
  )
}
