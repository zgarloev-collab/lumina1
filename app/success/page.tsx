import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Order Confirmed — Thank You | ALTAI LABS',
  description: 'Your Altai Shilajit order has been confirmed.',
}

export default function SuccessPage() {
  return (
    <main className="flex min-h-svh items-center justify-center bg-[#F4F6F4] px-5 py-16">
      <div className="mx-auto w-full max-w-xl text-center">
        <div className="mx-auto mb-8 flex size-20 items-center justify-center rounded-full border-2 border-[#D4AF37]">
          <svg viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="size-9" aria-hidden="true">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>

        <p className="mb-4 flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-[#B08C22]">
          <span className="h-px w-8 bg-[#B08C22]" />
          Order Confirmed
          <span className="h-px w-8 bg-[#B08C22]" />
        </p>

        <h1 className="mb-6 font-serif text-[2.5rem] font-semibold leading-[1.05] text-[#1E2522] sm:text-5xl" style={{ textWrap: 'balance' }}>
          Thank you for <span className="italic text-[#B08C22]">your order</span>
        </h1>

        <p className="mb-10 text-base leading-relaxed text-[#1E2522]/65 sm:text-lg" style={{ textWrap: 'pretty' }}>
          Your Altai Shilajit is on its way. A confirmation email has been sent to your inbox with
          your order details and tracking information.
        </p>

        <Link
          href="/"
          className="group inline-flex h-14 items-center gap-3 rounded-full bg-[#D4AF37] px-8 text-xs font-semibold uppercase tracking-[0.2em] text-[#1E2522] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C9A230] hover:shadow-[0_14px_34px_-14px_rgba(212,175,55,0.75)]"
        >
          Return Home
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>
    </main>
  )
}
