'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { useCart, formatPrice } from './cart-context'

/*
 * STRIPE PAYMENT LINK CHECKOUT
 *
 * Redirects directly to Stripe-hosted Payment Links — no SDK, no backend,
 * no freezing. The 100g link is the primary checkout destination.
 * TODO: replace FALLBACK_LINK with the real 50g buy.stripe.com link once available.
 */

const PAYMENT_LINK_50G = 'https://buy.stripe.com/00waEX8z37AA3p7baEdby00'
const PAYMENT_LINK_100G = 'https://buy.stripe.com/9B67sL2aF9IIf7P0w0dby01'

function handleCheckout(
  items: { variantId: string; variantLabel: string; quantity: number }[],
): void {
  if (items.length === 0) return

  const has100g = items.some((item) => item.variantId === '100g')
  const has50g = items.some((item) => item.variantId === '50g')

  const url = has100g ? PAYMENT_LINK_100G : has50g ? PAYMENT_LINK_50G : PAYMENT_LINK_100G

  window.location.href = url
}

export function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal, itemCount, clearCart } = useCart()
  const [isRedirecting, setIsRedirecting] = useState(false)

  // Lock body scroll while drawer is open
  useEffect(() => {
    if (isOpen) {
      const original = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = original
      }
    }
  }, [isOpen])

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeCart()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isOpen, closeCart])

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className={`fixed inset-0 z-[60] bg-[#1E2522]/50 backdrop-blur-sm transition-opacity duration-400 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className={`fixed right-0 top-0 z-[70] flex h-svh w-full max-w-md flex-col bg-[#F4F6F4] shadow-2xl transition-transform duration-400 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#1E2522]/10 px-6 py-5">
          <div className="flex items-center gap-3">
            <ShoppingBag className="size-5 text-[#1E2522]" strokeWidth={1.5} aria-hidden="true" />
            <h2 className="font-serif text-xl font-semibold text-[#1E2522]">
              Cart{itemCount > 0 && <span className="ml-1.5 text-[#B08C22]">({itemCount})</span>}
            </h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="flex size-9 items-center justify-center rounded-full text-[#1E2522] transition-colors hover:bg-[#1E2522]/5"
            aria-label="Close cart"
          >
            <X className="size-5" strokeWidth={1.5} aria-hidden="true" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
              <div className="flex size-16 items-center justify-center rounded-full border border-[#1E2522]/15">
                <ShoppingBag className="size-7 text-[#1E2522]/30" strokeWidth={1.25} aria-hidden="true" />
              </div>
              <p className="font-serif text-lg text-[#1E2522]/50">Your cart is empty</p>
              <Link
                href="/shop"
                onClick={closeCart}
                className="text-xs font-medium uppercase tracking-[0.2em] text-[#B08C22] transition-colors hover:text-[#1E2522]"
              >
                Shop Pure Resin →
              </Link>
            </div>
          ) : (
            <ul className="flex flex-col gap-5">
              {items.map((item) => (
                <li key={item.variantId} className="flex gap-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.title}
                    width={80}
                    height={80}
                    className="size-20 shrink-0 rounded-sm object-cover"
                  />
                  <div className="flex flex-1 flex-col gap-1.5">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-serif text-base font-medium leading-tight text-[#1E2522]">{item.title}</p>
                        <p className="text-xs uppercase tracking-[0.14em] text-[#1E2522]/50">{item.variantLabel}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.variantId)}
                        className="text-xs text-[#1E2522]/40 transition-colors hover:text-[#1E2522]"
                      >
                        Remove
                      </button>
                    </div>

                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center rounded-full border border-[#1E2522]/15">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.variantId, item.quantity - 1)}
                          className="flex size-8 items-center justify-center rounded-full text-[#1E2522] transition-colors hover:bg-[#1E2522]/5"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="size-3.5" strokeWidth={2} aria-hidden="true" />
                        </button>
                        <span className="w-7 text-center text-sm font-medium tabular-nums text-[#1E2522]">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.variantId, item.quantity + 1)}
                          className="flex size-8 items-center justify-center rounded-full text-[#1E2522] transition-colors hover:bg-[#1E2522]/5"
                          aria-label="Increase quantity"
                        >
                          <Plus className="size-3.5" strokeWidth={2} aria-hidden="true" />
                        </button>
                      </div>
                      <p className="font-serif text-base font-medium text-[#1E2522]">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-[#1E2522]/10 px-6 py-5">
            <div className="mb-1 flex items-center justify-between">
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#1E2522]/60">Subtotal</span>
              <span className="font-serif text-2xl font-semibold text-[#1E2522]">{formatPrice(subtotal)}</span>
            </div>
            <p className="mb-4 text-sm text-[#1E2522]/65">
              Free Worldwide Shipping Always
            </p>
            <button
              type="button"
              onClick={() => {
                if (isRedirecting) return
                setIsRedirecting(true)
                handleCheckout(items)
              }}
              className="group relative flex h-14 w-full cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-full bg-[#D4AF37] text-xs font-semibold uppercase tracking-[0.2em] text-[#1E2522] shadow-[0_10px_30px_-12px_rgba(212,175,55,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C9A230] hover:shadow-[0_18px_40px_-14px_rgba(212,175,55,0.9)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E2522] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F4F6F4]"
            >
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 group-hover:translate-x-full" aria-hidden="true" />
              <span className="relative flex items-center gap-2">
                {isRedirecting ? (
                  <>
                    <span className="size-4 animate-spin rounded-full border-2 border-[#1E2522]/30 border-t-[#1E2522]" aria-hidden="true" />
                    Redirecting…
                  </>
                ) : (
                  'Proceed to Checkout'
                )}
              </span>
            </button>
            <button
              type="button"
              onClick={clearCart}
              className="mt-3 w-full text-center text-xs text-[#1E2522]/40 transition-colors hover:text-[#1E2522]"
            >
              Clear cart
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
