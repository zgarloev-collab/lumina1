import Link from 'next/link'
import { AltaiIcon } from './icon'

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
      {/* Mountain background — local image guaranteed to load */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable @next/next/no-img-element */}
        <img
          src="/images/altai-hero.png"
          alt="Misty snow-capped Altai Mountains with turquoise glacial river in morning light"
          width={1920}
          height={1080}
          className="altai-hero-zoom size-full object-cover"
        />
      </div>

      {/* Dark gradient overlay for readability and atmospheric depth */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            'linear-gradient(180deg, rgba(30,37,34,0.5) 0%, rgba(30,37,34,0.6) 45%, rgba(30,37,34,0.9) 100%), linear-gradient(90deg, rgba(30,37,34,0.7) 0%, rgba(30,37,34,0.1) 60%, rgba(30,37,34,0.4) 100%)',
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

          {/* CSS-styled luxury black glass jar — no external image needed */}
          <div className="altai-hero-fade hidden lg:flex" style={{ animationDelay: '0.3s' }}>
            <div className="relative mx-auto flex max-w-sm items-center justify-center">
              {/* Pulsing gold aura behind the jar */}
              <div
                className="absolute -inset-12 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(212,175,55,0.18) 0%, transparent 70%)',
                  animation: 'altai-pulse-gold 4s ease-in-out infinite',
                }}
              />

              {/* The jar — pure CSS luxury black glass */}
              <div className="relative z-10 aspect-square w-full max-w-[400px]">
                {/* Matte black lid */}
                <div
                  className="absolute left-1/2 top-0 z-20 h-[22%] w-[60%] -translate-x-1/2 rounded-t-[50%] border border-[#3a3f3c] border-b-0"
                  style={{
                    background: 'linear-gradient(180deg, #2a2e2c 0%, #1a1e1c 50%, #151917 100%)',
                    boxShadow: 'inset 0 2px 8px rgba(255,255,255,0.05), 0 4px 20px rgba(0,0,0,0.6)',
                  }}
                />

                {/* Jar rim */}
                <div
                  className="absolute left-1/2 top-[20%] z-30 h-[5%] w-[64%] -translate-x-1/2 rounded-full border border-[#D4AF37]/20"
                  style={{
                    background: 'linear-gradient(90deg, #1a1e1c, #2a2e2c, #1a1e1c)',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.5)',
                  }}
                />

                {/* Jar body — semi-transparent dark glass */}
                <div
                  className="absolute left-1/2 top-[22%] z-10 aspect-[5/6] w-[85%] -translate-x-1/2 rounded-b-[50%] rounded-t-[20%] border-2"
                  style={{
                    borderColor: 'rgba(212,175,55,0.15)',
                    background: 'linear-gradient(160deg, rgba(20,24,22,0.85) 0%, rgba(15,18,16,0.92) 50%, rgba(10,13,11,0.95) 100%)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    boxShadow:
                      'inset 0 4px 20px rgba(0,0,0,0.5), inset 0 -10px 30px rgba(0,0,0,0.4), 0 20px 60px rgba(0,0,0,0.7), 0 0 40px rgba(212,175,55,0.05)',
                  }}
                >
                  {/* Glossy highlight on jar body */}
                  <div
                    className="absolute inset-0 rounded-b-[50%] rounded-t-[20%]"
                    style={{
                      background:
                        'linear-gradient(120deg, rgba(255,255,255,0.08) 0%, transparent 30%, transparent 70%, rgba(255,255,255,0.03) 100%)',
                    }}
                  />

                  {/* Inner resin surface — deep glossy black */}
                  <div
                    className="absolute inset-[10%] rounded-b-[50%] rounded-t-[15%]"
                    style={{
                      background:
                        'radial-gradient(ellipse at 40% 30%, rgba(45,50,47,0.6) 0%, rgba(15,18,16,0.9) 60%, rgba(5,8,6,0.95) 100%)',
                      boxShadow: 'inset 0 4px 16px rgba(0,0,0,0.8)',
                    }}
                  >
                    {/* Mirror-like resin sheen */}
                    <div
                      className="absolute left-[15%] top-[8%] h-[30%] w-[40%] rounded-full opacity-40"
                      style={{
                        background: 'radial-gradient(ellipse, rgba(212,175,55,0.15) 0%, transparent 70%)',
                        filter: 'blur(8px)',
                      }}
                    />
                  </div>

                  {/* Gold brand mark */}
                  <div className="absolute bottom-[18%] left-1/2 -translate-x-1/2 text-center">
                    <p className="font-serif text-sm font-medium tracking-[0.3em] text-[#D4AF37]/50">ALTAI</p>
                    <p className="mt-0.5 text-[8px] uppercase tracking-[0.2em] text-[#D4AF37]/30">Pure Resin</p>
                  </div>
                </div>

                {/* Reflection shadow beneath jar */}
                <div
                  className="absolute bottom-[2%] left-1/2 h-[4%] w-[70%] -translate-x-1/2 rounded-full"
                  style={{
                    background: 'radial-gradient(ellipse, rgba(0,0,0,0.6) 0%, transparent 70%)',
                    filter: 'blur(4px)',
                  }}
                />
              </div>
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
