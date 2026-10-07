'use client'

import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'section' | 'li' | 'article' | 'figure'
}

export function Reveal({ children, delay = 0, className = '', as = 'div' }: RevealProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || !('IntersectionObserver' in window)) {
      el.style.opacity = '1'
      el.style.transform = 'none'
      return
    }

    el.style.opacity = '0'
    el.style.transform = 'translateY(28px)'
    el.style.transition = `opacity 0.9s cubic-bezier(0.2, 0.7, 0.2, 1) ${delay}s, transform 0.9s cubic-bezier(0.2, 0.7, 0.2, 1) ${delay}s`

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.opacity = '1'
            el.style.transform = 'none'
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  const Tag = as as keyof JSX.IntrinsicElements

  return (
    <Tag
      ref={ref as never}
      className={className}
      style={{ willChange: 'opacity, transform' } as CSSProperties}
    >
      {children}
    </Tag>
  )
}
