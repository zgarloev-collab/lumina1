'use client'

import { useState } from 'react'
import { ArrowRight, FlaskConical, Gem, Leaf, Minus, Plus, ShieldCheck, Star, Truck } from 'lucide-react'
import { BUY_NOW_URL, formatPrice, product } from '@/lib/product'
import { cn } from '@/lib/utils'

const MAX_QUANTITY = 10

const usps = [
  { icon: Gem, label: '85+ Ionic Minerals' },
  { icon: Leaf, label: 'Rich in Fulvic Acid' },
  { icon: FlaskConical, label: 'Third-Party Lab Tested' },
]

export function ProductBuyBox({ buyNowUrl = BUY_NOW_URL }: { buyNowUrl?: string }) {
  const [variantId, setVariantId] = useState(product.variants[0].id)
  const [quantity, setQuantity] = useState(1)
  const variant = product.variants.find((v) => v.id === variantId) ?? product.variants[0]

  const checkoutHref = (() => {
    try {
      const url = new URL(buyNowUrl)
      url.searchParams.set('variant', variant.id)
      url.searchParams.set('quantity', String(quantity))
      return url.toString()
    } catch {
      return buyNowUrl
    }
  })()

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#B08C22]">Siberian Altai · 3,000m</p>
        <h1 className="text-balance font-serif text-4xl font-semibold leading-[1.05] text-[#1E2522] md:text-5xl">
          {product.title}
        </h1>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-0.5" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-4 fill-[#D4AF37] text-[#D4AF37]" />
            ))}
          </div>
          <span className="sr-only">Rated {product.rating} out of 5 stars.</span>
          <a href="/#altai-reviews" className="text-sm text-[#1E2522]/70 underline-offset-4 hover:underline">
            ({product.reviewCount} customer reviews)
          </a>
        </div>
      </div>

      <div className="flex items-baseline gap-3">
        <p className="font-serif text-4xl font-semibold text-[#1E2522]">{formatPrice(variant.price)}</p>
        {variant.compareAtPrice && (
          <p className="text-lg text-[#1E2522]/45 line-through">
            <span className="sr-only">Regular price </span>
            {formatPrice(variant.compareAtPrice)}
          </p>
        )}
      </div>

      <ul className="flex flex-col gap-3 border-y border-[#1E2522]/10 py-6">
        {usps.map(({ icon: Icon, label }) => (
          <li key={label} className="flex items-center gap-4 text-[15px] text-[#1E2522]">
            <span className="flex size-9 items-center justify-center rounded-full border border-[#1E2522]/15">
              <Icon className="size-4" strokeWidth={1.5} aria-hidden="true" />
            </span>
            {label}
          </li>
        ))}
      </ul>

      <fieldset className="flex flex-col gap-3">
        <legend className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[#1E2522]/70">Size</legend>
        <div className="flex flex-wrap gap-3">
          {product.variants.map((v) => {
            const selected = v.id === variantId
            return (
              <label
                key={v.id}
                className={cn(
                  'cursor-pointer rounded-full border px-5 py-2.5 text-sm transition-all duration-300 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-[#D4AF37] has-[:focus-visible]:ring-offset-2 has-[:focus-visible]:ring-offset-[#F4F6F4]',
                  selected
                    ? 'border-[#1E2522] bg-[#1E2522] text-[#F4F6F4]'
                    : 'border-[#1E2522]/20 text-[#1E2522] hover:border-[#1E2522]/60',
                )}
              >
                <input
                  type="radio"
                  name="size"
                  value={v.id}
                  checked={selected}
                  onChange={() => setVariantId(v.id)}
                  className="sr-only"
                />
                <span className="font-medium">{v.label}</span>
                {v.note && <span className={cn('ml-1', selected ? 'text-[#F4F6F4]/75' : 'text-[#1E2522]/60')}>({v.note})</span>}
              </label>
            )
          })}
        </div>
      </fieldset>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
        <div className="flex flex-col gap-3">
          <span id="quantity-label" className="text-xs font-medium uppercase tracking-[0.2em] text-[#1E2522]/70">
            Quantity
          </span>
          <div
            role="group"
            aria-labelledby="quantity-label"
            className="flex h-14 w-fit items-center rounded-full border border-[#1E2522]/20"
          >
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              disabled={quantity <= 1}
              className="flex size-14 items-center justify-center rounded-full text-[#1E2522] transition-colors hover:bg-[#1E2522]/5 disabled:opacity-30"
            >
              <Minus className="size-4" aria-hidden="true" />
              <span className="sr-only">Decrease quantity</span>
            </button>
            <output aria-live="polite" className="w-8 text-center text-base font-medium tabular-nums text-[#1E2522]">
              {quantity}
            </output>
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.min(MAX_QUANTITY, q + 1))}
              disabled={quantity >= MAX_QUANTITY}
              className="flex size-14 items-center justify-center rounded-full text-[#1E2522] transition-colors hover:bg-[#1E2522]/5 disabled:opacity-30"
            >
              <Plus className="size-4" aria-hidden="true" />
              <span className="sr-only">Increase quantity</span>
            </button>
          </div>
        </div>
      </div>

      <a
        href={checkoutHref}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-16 w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-[#D4AF37] text-sm font-semibold uppercase tracking-[0.24em] text-[#1E2522] shadow-[0_10px_30px_-12px_rgba(212,175,55,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C9A230] hover:shadow-[0_18px_40px_-14px_rgba(212,175,55,0.9)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E2522] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F4F6F4]"
      >
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 group-hover:translate-x-full" aria-hidden="true" />
        <span className="relative">Buy Now · {formatPrice(variant.price * quantity)}</span>
        <ArrowRight className="relative size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
      </a>

      <ul className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-[#1E2522]/65">
        <li className="flex items-center gap-2">
          <Truck className="size-4" strokeWidth={1.5} aria-hidden="true" />
          Free shipping over $75
        </li>
        <li className="flex items-center gap-2">
          <ShieldCheck className="size-4" strokeWidth={1.5} aria-hidden="true" />
          60-day purity guarantee
        </li>
      </ul>
    </div>
  )
}
