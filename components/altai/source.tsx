import { AltaiIcon } from './icon'
import { Reveal } from './reveal'

const SOURCE_IMAGE = 'https://images.pexels.com/photos/17056224/pexels-photo-17056224.jpeg?auto=compress&cs=tinysrgb&w=1400'

const stats = [
  { value: '300+ yrs', label: 'To form' },
  { value: '3,000 m', label: 'Altitude' },
  { value: 'By hand', label: 'Harvested' },
]

export function AltaiSource() {
  return (
    <section className="bg-[#1E2522] py-20 text-[#F4F6F4] lg:py-32" aria-labelledby="altai-source-title">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <img
              src={SOURCE_IMAGE}
              alt="Dark glossy shilajit resin forming in ancient mountain rock crevices surrounded by wild herbs"
              width={1200}
              height={1500}
              loading="lazy"
              className="size-full object-cover transition-transform duration-[1.2s] ease-out hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E2522]/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 rounded-sm border border-white/15 bg-black/40 px-5 py-4 backdrop-blur-md">
              <strong className="block font-serif text-2xl font-medium text-[#D4AF37]">Altai, Siberia</strong>
              <span className="text-xs uppercase tracking-[0.2em] text-[#F4F6F4]/70">50.4° N · 86.6° E</span>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-[#D4AF37]">
              <span className="h-px w-8 bg-[#D4AF37]" />
              The Source
            </p>
            <h2
              id="altai-source-title"
              className="font-serif text-[2.25rem] font-semibold leading-[1.05] text-[#F4F6F4] sm:text-5xl lg:text-[3.75rem]"
              style={{ textWrap: 'balance' }}
            >
              Born in <span className="italic text-[#D4AF37]">the Rocks</span>
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-[#F4F6F4]/70">
              <p style={{ textWrap: 'pretty' }}>
                High in the Altai Mountains, where the air thins and glaciers carve the stone, a rare resin forms over
                centuries. Ancient alpine plants decompose deep inside rock crevices, compressed by mountain pressure
                and slowly enriched by mineral-laden glacial waters.
              </p>
              <p style={{ textWrap: 'pretty' }}>
                Each summer, as the sun warms the cliffs, the resin seeps to the surface. We harvest it by hand above
                3,000 meters, then gently purify it with cold glacial water — preserving centuries of mountain
                intelligence to fuel modern high-performance lives.
              </p>
            </div>

            <ul className="mt-8 grid grid-cols-3 gap-4 border-y border-white/15 py-6" role="list">
              {stats.map((stat) => (
                <li key={stat.label}>
                  <strong className="mb-1 block font-serif text-[1.6rem] font-medium leading-tight text-[#D4AF37] lg:text-3xl">
                    {stat.value}
                  </strong>
                  <span className="text-xs uppercase tracking-[0.12em] text-[#F4F6F4]/55">{stat.label}</span>
                </li>
              ))}
            </ul>

            <a
              href="#altai-source"
              className="mt-8 inline-flex h-14 items-center gap-3 rounded-sm border border-[#F4F6F4]/30 px-7 text-xs font-semibold uppercase tracking-[0.2em] text-[#F4F6F4] transition-all duration-300 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#1E2522]"
            >
              Our Story
              <AltaiIcon name="arrow" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
