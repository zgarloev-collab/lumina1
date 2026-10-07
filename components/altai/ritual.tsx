import Link from 'next/link'
import { AltaiIcon } from './icon'
import { Reveal } from './reveal'

const steps = [
  {
    title: 'Measure',
    text: 'Take a small pea-sized amount of resin using a dosing tool (roughly 200mg–500mg).',
    meta: '≈ 200–500 mg · once daily',
  },
  {
    title: 'Dissolve',
    text: 'Stir it into a glass of warm filtered water, herbal tea, or morning milk. Watch it instantly transform into a golden, bioavailable mineral elixir.',
    meta: 'Warm, never boiling',
  },
  {
    title: 'Restore',
    text: 'Drink it first thing in the morning on an empty stomach to unlock sustained, all-day clean energy, sharp mental focus, and immune support.',
    meta: 'Morning · empty stomach',
  },
]

export function AltaiRitual() {
  return (
    <section id="altai-ritual" className="bg-[#F4F6F4] py-20 lg:py-32" aria-labelledby="altai-ritual-title">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative">
            {/* Amber-gold radial glow behind the image */}
            <div
              className="absolute -inset-6 rounded-sm"
              style={{
                background:
                  'radial-gradient(ellipse at 50% 40%, rgba(212,175,55,0.22) 0%, rgba(176,140,34,0.1) 40%, transparent 70%)',
                animation: 'altai-pulse-gold 5s ease-in-out infinite',
              }}
              aria-hidden="true"
            />

            <div className="relative aspect-[5/4] overflow-hidden rounded-sm border border-[#D4AF37]/20 shadow-[0_20px_60px_-20px_rgba(212,175,55,0.3)]">
              {/* eslint-disable @next/next/no-img-element */}
              <img
                src="/images/product-jar.png"
                alt="Premium black glass jar of Altai Shilajit resin on a frosted stone surface in warm morning light"
                width={1024}
                height={820}
                loading="lazy"
                className="size-full object-cover transition-transform duration-[1.2s] ease-out hover:scale-105"
              />
              {/* Warm amber overlay to suggest the golden dissolving effect */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    'radial-gradient(ellipse at 60% 50%, rgba(212,175,55,0.12) 0%, transparent 50%), linear-gradient(180deg, transparent 60%, rgba(30,37,34,0.25) 100%)',
                }}
              />
            </div>

            {/* Floating amber glow accent */}
            <div
              className="pointer-events-none absolute -bottom-4 -right-4 size-32 rounded-full opacity-30"
              style={{
                background: 'radial-gradient(circle, rgba(212,175,55,0.4) 0%, transparent 70%)',
                filter: 'blur(20px)',
              }}
              aria-hidden="true"
            />
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-[#B08C22]">
              <span className="h-px w-8 bg-[#B08C22]" />
              The Daily Ritual
            </p>
            <h2
              id="altai-ritual-title"
              className="font-serif text-[2.25rem] font-semibold leading-[1.05] text-[#1E2522] sm:text-5xl lg:text-[3.75rem]"
              style={{ textWrap: 'balance' }}
            >
              How to Experience <span className="italic text-[#B08C22]">Altai Shilajit</span>
            </h2>

            <ol className="mt-10 space-y-8">
              {steps.map((step, index) => (
                <li key={step.title} className="flex gap-6">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-[#D4AF37] font-serif text-lg font-medium text-[#B08C22]">
                    {index + 1}
                  </span>
                  <div className="pt-1">
                    <h3 className="mb-2 font-serif text-2xl font-semibold leading-tight text-[#1E2522]">
                      {step.title}
                    </h3>
                    <p className="mb-2 text-[15px] leading-relaxed text-[#1E2522]/65">{step.text}</p>
                    <span className="inline-block text-xs font-medium uppercase tracking-[0.18em] text-[#B08C22]">
                      {step.meta}
                    </span>
                  </div>
                </li>
              ))}
            </ol>

            <Link
              href="/shop"
              className="group mt-10 inline-flex h-14 items-center gap-3 rounded-sm bg-[#D4AF37] px-7 text-xs font-semibold uppercase tracking-[0.2em] text-[#1E2522] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C9A230] hover:shadow-[0_14px_34px_-14px_rgba(212,175,55,0.75)]"
            >
              Shop Pure Resin
              <AltaiIcon name="arrow" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
