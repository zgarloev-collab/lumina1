import Link from 'next/link'
import { AltaiIcon } from './icon'

const MOUNTAIN_IMAGE = 'https://images.pexels.com/photos/38351312/pexels-photo-38351312.jpeg?auto=compress&cs=tinysrgb&w=2400'

const stats = [
  { value: '85+', label: 'Trace minerals' },
  { value: '3,000 m', label: 'Harvest altitude' },
  { value: '100%', label: 'Lab-certified resin' },
]

const usps = [
  '85+ ionic minerals',
  'Rich in fulvic acid',
  'Harvested at 3,000+ m',
]

export function AltaiHero() {
  return (
    <section className="relative flex min-h-svh items-center overflow-hidden bg-[#1E2522]" aria-labelledby="altai-hero-title">
      <div className="absolute inset-0 z-0">
        {/* eslint-disable @next/next/no-img-element */}
        <img
          src={MOUNTAIN_IMAGE}
          alt="Misty snow-capped Altai Mountains with a turquoise glacial river flowing through the valley"
          width={2400}
          height={1600}
          className="altai-hero-zoom size-full object-cover"
        />
      </div>

      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            'linear-gradient(180deg, rgba(13,17,15,0.25) 0%, rgba(13,17,15,0.45) 40%, rgba(13,17,15,0.92) 100%), linear-gradient(90deg, rgba(13,17,15,0.75) 0%, rgba(13,17,15,0.15) 60%, rgba(13,17,15,0.4) 100%)',
        }}
      />

      <div className="relative z-20 mx-auto w-full max-w-[1240px] px-5 pt-28 pb-16 md:px-8 md:pt-32 md:pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="altai-hero-fade max-w-[44rem]">
            <p className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-[#D4AF37]">
              <span className="h-px w-8 bg-[#D4AF37]" />
              Premium Purified Siberian Mineral Resin
            </p>

            <h1
              id="altai-hero-title"
              className="font-serif text-[2.75rem] font-semibold leading-[1.02] text-[#F4F6F4] sm:text-6xl lg:text-[5.25rem]"
              style={{ textWrap: 'balance' }}
            >
              Altai Pure Shilajit.
              <br />
              <span className="italic text-[#D4AF37]">Raw Energy</span> from the Peaks.
            </h1>

            <p
              className="mt-6 max-w-[36rem] text-base leading-relaxed text-[#F4F6F4]/75 sm:text-lg"
              style={{ textWrap: 'pretty' }}
            >
              85+ ionic minerals and rich fulvic acid complex. Ethically harvested at 3,000 meters in pristine Siberia,
              laboratory tested for absolute purity.
            </p>

            <ul className="mt-7 flex flex-wrap gap-2.5" aria-label="Key benefits">
              {usps.map((usp) => (
                <li
                  key={usp}
                  className="flex items-center gap-2.5 rounded-full border border-white/15 bg-black/30 px-4 py-2 text-sm text-[#F4F6F4] backdrop-blur-md"
                >
                  <span className="size-1.5 rounded-full bg-[#D4AF37]" />
                  {usp}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap items-center gap-7">
              <Link
                href="/shop"
                className="group relative flex h-16 w-full items-center justify-center gap-3 overflow-hidden rounded-sm bg-[#D4AF37] px-8 text-sm font-semibold uppercase tracking-[0.2em] text-[#1E2522] shadow-[0_12px_36px_-12px_rgba(212,175,55,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C9A230] hover:shadow-[0_20px_48px_-14px_rgba(212,175,55,0.95)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4F6F4] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1E2522] sm:w-auto"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" aria-hidden="true" />
                <span className="relative">Shop Pure Resin</span>
                <AltaiIcon name="arrow" className="relative size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a
                href="#altai-ritual"
                className="border-b border-[#F4F6F4]/60 pb-1 text-xs font-medium uppercase tracking-[0.18em] text-[#F4F6F4]/85 transition-colors hover:border-[#D4AF37] hover:text-[#D4AF37]"
              >
                Discover the ritual
              </a>
            </div>

            <ul
              className="mt-12 flex flex-wrap gap-6 border-t border-white/15 pt-7 text-xs uppercase tracking-[0.14em] text-[#F4F6F4]/60 sm:gap-10"
              role="list"
            >
              {stats.map((stat) => (
                <li key={stat.label}>
                  <strong className="mb-0.5 block font-serif text-3xl font-medium normal-case tracking-normal text-[#F4F6F4]">
                    {stat.value}
                  </strong>
                  {stat.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="altai-hero-fade hidden lg:block" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="absolute -inset-8 rounded-full bg-[#D4AF37]/10 blur-3xl" style={{ animation: 'altai-pulse-gold 4s ease-in-out infinite' }} />
              {/* eslint-disable @next/next/no-img-element */}
              <img
                src="/images/product-resin.png"
                alt="Open premium round black glass jar of Altai Shilajit showing the mirror-like surface of pure dark mineral resin"
                width={1024}
                height={1024}
                className="relative z-10 w-full rounded-sm object-cover shadow-2xl"
                style={{ filter: 'brightness(1.05) contrast(1.1)' }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20 hidden items-center justify-center pb-6 md:flex" aria-hidden="true">
        <div className="flex flex-col items-center gap-2 text-[#F4F6F4]/40">
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <span className="h-12 w-px animate-pulse bg-gradient-to-b from-[#D4AF37]/60 to-transparent" />
        </div>
      </div>
    </section>
  )
}
