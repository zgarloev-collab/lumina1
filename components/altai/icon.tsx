interface IconProps {
  name: string
  className?: string
}

const strokeProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function AltaiIcon({ name, className = '' }: IconProps) {
  const cls = className || undefined

  switch (name) {
    case 'droplet':
      return (
        <svg viewBox="0 0 24 24" {...strokeProps} className={cls} aria-hidden="true">
          <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
        </svg>
      )
    case 'gem':
      return (
        <svg viewBox="0 0 24 24" {...strokeProps} className={cls} aria-hidden="true">
          <path d="M6 3h12l4 6-10 13L2 9Z" />
          <path d="M11 3 8 9l4 13 4-13-3-6" />
          <path d="M2 9h20" />
        </svg>
      )
    case 'shield':
      return (
        <svg viewBox="0 0 24 24" {...strokeProps} className={cls} aria-hidden="true">
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      )
    case 'arrow':
      return (
        <svg viewBox="0 0 24 24" {...strokeProps} strokeWidth={1.75} className={cls} aria-hidden="true">
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      )
    case 'star':
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden="true">
          <path d="M12 2.5l2.94 5.96 6.56.95-4.75 4.63 1.12 6.54L12 17.5l-5.87 3.08 1.12-6.54L2.5 9.41l6.56-.95L12 2.5z" />
        </svg>
      )
    case 'plus':
      return (
        <svg viewBox="0 0 24 24" {...strokeProps} className={cls} aria-hidden="true">
          <path d="M12 5v14" />
          <path d="M5 12h14" />
        </svg>
      )
    case 'minus':
      return (
        <svg viewBox="0 0 24 24" {...strokeProps} className={cls} aria-hidden="true">
          <path d="M5 12h14" />
        </svg>
      )
    case 'leaf':
      return (
        <svg viewBox="0 0 24 24" {...strokeProps} className={cls} aria-hidden="true">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6" />
        </svg>
      )
    case 'flask':
      return (
        <svg viewBox="0 0 24 24" {...strokeProps} className={cls} aria-hidden="true">
          <path d="M4.5 3h15" />
          <path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3" />
          <path d="M6 14h12" />
        </svg>
      )
    case 'globe':
      return (
        <svg viewBox="0 0 24 24" {...strokeProps} className={cls} aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" />
        </svg>
      )
    case 'clock':
      return (
        <svg viewBox="0 0 24 24" {...strokeProps} className={cls} aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      )
    case 'check':
      return (
        <svg viewBox="0 0 24 24" {...strokeProps} className={cls} aria-hidden="true">
          <path d="M20 6 9 17l-5-5" />
        </svg>
      )
    default:
      return null
  }
}
