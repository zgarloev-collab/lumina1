import { AltaiIcon } from './icon'
import { Reveal } from './reveal'

interface Feature {
  icon: string
  title: string
  text: string
}

const features: Feature[] = [
  {
    icon: 'droplet',
    title: '100% Pure Resin',
    text: 'Never powdered, never diluted, never compromised. Our shilajit stays in its natural resin state — the most bioavailable form nature intended.',
  },
  {
    icon: 'gem',
    title: '85+ Trace Minerals',
    text: 'Packed with naturally occurring fulvic acid and ionic minerals like magnesium, zinc and iron to unlock raw daily energy and focus.',
  },
  {
    icon: 'shield',
    title: 'Third-Party Lab Certified',
    text: 'Strict third-party laboratory verification, 100% safe, clean, and heavy metal tested. Only batches that pass strict limits are released.',
  },
]

const iconAccentColors = [
  'text-[#B08C22] border-[#D4AF37]/40',
  'text-[#B08C22] border-[#D4AF37]/40',
  'text-[#B08C22] border-[#D4AF37]/40',
]

export function AltaiFeatures() {
  return (
    <section className="bg-[#F4F6F4] py-20 lg:py-32" aria-labelledby="altai-features-title">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center lg:mb-20">
          <p className="mb-5 flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-[#B08C22]">
            <span className="h-px w-8 bg-[#B08C22]" />
            Why Altai
            <span className="h-px w-8 bg-[#B08C22]" />
          </p>
          <h2
            id="altai-features-title"
            className="font-serif text-[2.25rem] font-semibold leading-[1.05] text-[#1E2522] sm:text-5xl lg:text-[3.75rem]"
            style={{ textWrap: 'balance' }}
          >
            Tested by Science.
            <br />
            <span className="italic text-[#B08C22]">Proven by Nature.</span>
          </h2>
          <p className="mt-5 text-base text-[#1E2522]/65 sm:text-lg" style={{ textWrap: 'pretty' }}>
            Three uncompromising standards behind every jar of Altai Shilajit.
          </p>
        </Reveal>

        <div className="grid gap-px overflow-hidden rounded-sm border border-[#1E2522]/10 bg-[#1E2522]/10 md:grid-cols-3">
          {features.map((feature, index) => (
            <Reveal
              key={feature.title}
              delay={index * 0.12}
              as="article"
              className="group flex flex-col gap-5 bg-[#F4F6F4] p-8 transition-colors duration-400 hover:bg-white lg:p-12"
            >
              <div className="flex items-center justify-between">
                <span
                  className={`flex size-14 items-center justify-center rounded-full border transition-all duration-400 group-hover:scale-110 group-hover:border-[#D4AF37] ${iconAccentColors[index]}`}
                >
                  <AltaiIcon name={feature.icon} className="size-6" />
                </span>
                <span className="font-serif text-base italic text-[#1E2522]/30">
                  0{index + 1}
                </span>
              </div>
              <h3 className="font-serif text-2xl font-semibold leading-tight text-[#1E2522] lg:text-[1.85rem]">
                {feature.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-[#1E2522]/65">{feature.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
