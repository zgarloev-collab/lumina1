'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ShoppingBag } from 'lucide-react'
import { BRAND } from '@/lib/product'
import { useCart } from '@/components/cart/cart-context'
import { cn } from '@/lib/utils'

const links = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Shop' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const { itemCount, openCart } = useCart()

  return (
    <header className="sticky top-0 z-50 border-b border-[#1E2522]/10 bg-[#F4F6F4]/85 backdrop-blur-md supports-[backdrop-filter]:bg-[#F4F6F4]/70">
      <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between gap-6 px-5 md:px-8">
        <Link
          href="/"
          className="whitespace-nowrap font-serif text-lg font-semibold tracking-[0.16em] text-[#1E2522] transition-opacity hover:opacity-70 sm:text-xl sm:tracking-[0.22em]"
        >
          {BRAND}
        </Link>

        <nav aria-label="Primary" className="flex items-center gap-1 sm:gap-4">
          <ul className="flex items-center gap-1 sm:gap-2">
            {links.map((link) => {
              const active = pathname === link.href
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'relative px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-[#1E2522]/70 transition-colors hover:text-[#1E2522]',
                      'after:absolute after:inset-x-3 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-[#D4AF37] after:transition-transform after:duration-300',
                      active && 'text-[#1E2522] after:scale-x-100',
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          <button
            type="button"
            onClick={openCart}
            className="relative ml-1 flex size-10 items-center justify-center rounded-full text-[#1E2522] transition-colors hover:bg-[#1E2522]/5"
            aria-label={`Open cart${itemCount > 0 ? ` (${itemCount} items)` : ''}`}
          >
            <ShoppingBag className="size-5" strokeWidth={1.5} aria-hidden="true" />
            {itemCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex size-5 items-center justify-center rounded-full bg-[#D4AF37] text-[10px] font-bold text-[#1E2522]">
                {itemCount}
              </span>
            )}
          </button>
        </nav>
      </div>
    </header>
  )
}
