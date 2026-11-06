export default function Arrow({ dir = 'ne', size = 14 }: { dir?: 'ne' | 'e' | 'w' | 'down'; size?: number }) {
  const rot = { ne: 0, e: 45, w: 225, down: 135 }[dir]
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="square"
      aria-hidden
      style={{ transform: `rotate(${rot}deg)`, flex: 'none' }}
    >
      <path d="M3 11 11 3M5 3h6v6" />
    </svg>
  )
}
