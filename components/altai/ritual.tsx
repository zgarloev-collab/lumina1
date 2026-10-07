import Link from 'next/link'
import { AltaiIcon } from './icon'
import { Reveal } from './reveal'

const steps = [
  {
    title: 'Measure',
    text: 'Each morning, take a pea-sized drop of pure resin from the jar.',
    meta: '≈ 300 mg · once daily',
  },
  {
    title: 'Dissolve',
    text: 'Stir it into warm water, herbal tea, or warm milk until fully dissolved. Keep it below boiling to protect the minerals.',
    meta: 'Warm, never boiling',
  },
  {
    title: 'Sip & Rise',
    text: 'Sip slowly as the resin turns your cup a deep amber gold — then carry that steady mountain energy into your day.',
    meta: 'Golden daily energy',
  },
]

export function AltaiRitual() {
  return (
    <section id="altai-ritual" className="bg-[#F4F6F4] py-20 lg:py-32" aria-labelledby="altai-ritual-title">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center lg:mb-20">
          <p className="mb-5 flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-[#B08C22]">
            <span className="h-px w-8 bg-[#B08C22]" />
            The Daily Ritual
            <span className="h-px w-8 bg-[#B08C22]" />
          </p>
          <h2
            id="altai-ritual-title"
            className="font-serif text-[2.25rem] font-semibold leading-[1.05] text-[#1E2522] sm:text-5xl lg:text-[3.75rem]"
            style={{ textWrap: 'balance' }}
          >
            Sixty seconds to <span className="italic text-[#B08C22]">golden energy</span>
          </h2>
          <p className="mt-5 text-base text-[#1E2522]/65 sm:text-lg" style={{ textWrap: 'pretty' }}>
            A simple morning ritual, practised in the mountains for centuries — now made for modern routines.
          </p>
        </Reveal>

        <ol className="grid gap-8 md:grid-cols-3 md:gap-6">
          {steps.map((step, index) => (
            <Reveal
              key={step.title}
              delay={index * 0.12}
              as="li"
              className="relative border-t-2 border-[#1E2522] pt-6"
            >
              <span
                className="mb-6 block font-serif text-[3.5rem] font-normal italic leading-none text-[#B08C22]/70 sm:text-[4rem] lg:text-[5rem]"
                aria-hidden="true"
              >
                0{index + 1}
              </span>
              <h3 className="mb-3 font-serif text-2xl font-semibold leading-tight text-[#1E2522] lg:text-[1.85rem]">
                {step.title}
              </h3>
              <p className="mb-4 text-[15px] leading-relaxed text-[#1E2522]/65">{step.text}</p>
              <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-[#1E2522]">
                {step.meta}
              </span>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-14 flex flex-col items-start gap-6 rounded-sm border border-[#1E2522]/10 bg-white p-8 lg:mt-20 lg:flex-row lg:items-center lg:justify-between lg:p-10">
          <p className="max-w-2xl font-serif text-xl leading-snug text-[#1E2522] sm:text-2xl lg:text-[1.6rem]">
            One jar. Sixty mornings of steady, mineral-rich energy.
          </p>
          <Link
            href="/shop"
            className="group flex h-14 shrink-0 items-center gap-3 rounded-sm bg-[#D4AF37] px-7 text-xs font-semibold uppercase tracking-[0.2em] text-[#1E2522] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C9A230] hover:shadow-[0_14px_34px_-14px_rgba(212,175,55,0.75)]"
          >
            Shop Pure Resin
            <AltaiIcon name="arrow" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
