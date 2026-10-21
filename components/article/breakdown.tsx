import { Reveal } from '@/components/altai/reveal'
import { AltaiIcon } from '@/components/altai/icon'

interface Section {
  icon: 'leaf' | 'shield' | 'globe'
  title: string
  body: string
}

const sections: Section[] = [
  {
    icon: 'leaf',
    title: '1. Rich Siberian Flora & Biodiversity',
    body: 'In the Altay Mountains, shilajit forms alongside hundreds of unique endemic medicinal herbs, golden root, and conifer forests. This infuses the resin with organic compounds and plant metabolites completely absent in the barren rock walls of the Himalayas.',
  },
  {
    icon: 'shield',
    title: '2. Strict Quality Control & Low-Heat Purification',
    body: 'Our Altay shilajit is purified using modern, scientifically verified techniques that preserve the delicate molecular structure of fulvic and humic acids without over-heating the raw material.',
  },
  {
    icon: 'globe',
    title: '3. Optimal Ionic Mineral Balance',
    body: 'Altay shilajit features over 85 trace minerals in their natural ionic form, ensuring an exceptional 98% bioavailability rate for human cellular absorption.',
  },
]

export function ArticleBreakdown() {
  return (
    <section className="bg-[#1E2522] py-20 text-[#F4F6F4] lg:py-32" aria-label="Detailed Breakdown">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-5 flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-[#D4AF37]">
            <span className="h-px w-8 bg-[#D4AF37]" />
            Why Altay Wins
            <span className="h-px w-8 bg-[#D4AF37]" />
          </p>
          <h2
            className="font-serif text-[2rem] font-semibold leading-tight text-[#F4F6F4] sm:text-4xl lg:text-[2.75rem]"
            style={{ textWrap: 'balance' }}
          >
            Three Reasons Altay <span className="italic text-[#D4AF37]">Outperforms</span>
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {sections.map((section, index) => (
            <Reveal
              key={section.title}
              delay={index * 0.12}
              as="article"
              className="flex flex-col gap-5 rounded-sm border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:border-[#D4AF37]/40 hover:bg-white/[0.06]"
            >
              <div className="flex size-14 items-center justify-center rounded-full border border-[#D4AF37]/30">
                <AltaiIcon name={section.icon} className="size-6 text-[#D4AF37]" />
              </div>
              <h3 className="font-serif text-xl font-semibold leading-snug text-[#F4F6F4]">
                {section.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-[#F4F6F4]/65" style={{ textWrap: 'pretty' }}>
                {section.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
