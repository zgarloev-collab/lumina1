'use client'

import { useState } from 'react'
import { product } from '@/lib/product'
import { cn } from '@/lib/utils'

export function ProductGallery() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = product.images[activeIndex]

  return (
    <div className="flex flex-col gap-4 lg:sticky lg:top-24">
      <div className="relative aspect-square overflow-hidden rounded-sm bg-[#1E2522]/5">
        {product.images.map((image, index) => (
          <img
            key={image.src}
            src={image.src}
            alt={index === activeIndex ? image.alt : ''}
            aria-hidden={index !== activeIndex}
            width={1024}
            height={1024}
            fetchPriority={index === 0 ? 'high' : 'auto'}
            className={cn(
              'absolute inset-0 size-full object-cover transition-all duration-700 ease-out',
              index === activeIndex ? 'scale-100 opacity-100' : 'scale-105 opacity-0',
            )}
          />
        ))}
        <span className="absolute left-4 top-4 rounded-full bg-[#F4F6F4]/90 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#1E2522]">
          Lab certified
        </span>
        <p className="sr-only" aria-live="polite">
          Showing {active.label}
        </p>
      </div>

      <ul className="grid grid-cols-4 gap-3" aria-label="Product images">
        {product.images.map((image, index) => (
          <li key={image.src}>
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`View ${image.label}`}
              aria-pressed={index === activeIndex}
              className={cn(
                'block aspect-square w-full overflow-hidden rounded-sm ring-1 ring-[#1E2522]/10 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]',
                index === activeIndex ? 'ring-2 ring-[#1E2522]' : 'opacity-70 hover:opacity-100',
              )}
            >
              <img src={image.src} alt="" width={200} height={200} loading="lazy" className="size-full object-cover" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
