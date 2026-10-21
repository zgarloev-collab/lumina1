import Link from 'next/link'
import { AltaiIcon } from '@/components/altai/icon'
import { Reveal } from '@/components/altai/reveal'

export function ArticleCta() {
  return (
    <section className="bg-[#F4F6F4] pb-20 lg:pb-28" aria-label="Call to Action">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <Reveal
          as="div"
          className="relative flex flex-col items-center overflow-hidden rounded-sm border border-[#D4AF37]/30 bg-[#1E2522] p-10 text-center lg:p-16"
        >
          <div
            className="pointer-events-none absolute -top-24 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full"
            style={{
              background: 'radial-gradient(ellipse, rgba(212,175,55,0.12) 0%, transparent 70%)',
            }}
          />
          <p className="relative mb-5 flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-[#D4AF37]">
            <span className="h-px w-8 bg-[#D4AF37]" />
            Ready to Feel the Difference
            <span className="h-px w-8 bg-[#D4AF37]" />
          </p>
          <h2
            className="relative font-serif text-[2rem] font-semibold leading-tight text-[#F4F6F4] sm:text-4xl lg:text-[3.25rem]"
            style={{ textWrap: 'balance' }}
          >
            Experience the Raw Power of
            <br />
            <span className="italic text-[#D4AF37]">Authentic Altay Shilajit</span>
          </h2>
          <p
            className="relative mt-5 max-w-xl text-base leading-relaxed text-[#F4F6F4]/65"
            style={{ textWrap: 'pretty' }}
          >
            Stop overpaying for marketing hype. Our shilajit is sustainably wildcrafted by hand in
            the heart of Siberia, thoroughly purified, and third-party laboratory tested.
          </p>
          <Link
            href="/shop"
            className="group relative mt-8 flex h-14 items-center gap-3 rounded-sm bg-[#D4AF37] px-8 text-xs font-semibold uppercase tracking-[0.2em] text-[#1E2522] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C9A230] hover:shadow-[0_14px_34px_-14px_rgba(212,175,55,0.75)]"
          >
            Buy Authentic Altay Shilajit
            <AltaiIcon name="arrow" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
