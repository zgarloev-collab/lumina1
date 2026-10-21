import { Reveal } from '@/components/altai/reveal'

export function ArticleIntro() {
  return (
    <section className="bg-[#F4F6F4] py-20 lg:py-28" aria-label="Introduction">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <Reveal className="mx-auto max-w-3xl">
          <p className="mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-[#B08C22]">
            <span className="h-px w-8 bg-[#B08C22]" />
            Introduction
          </p>
          <p
            className="font-serif text-xl leading-relaxed text-[#1E2522] sm:text-2xl"
            style={{ textWrap: 'pretty' }}
          >
            While shilajit and mumiyo refer to the same powerful mineral resin, their ultimate
            potency depends entirely on where they are harvested. Himalayan shilajit dominates
            Western markets due to heavy marketing, but the Altay Mountains hide a far more potent,
            pristine, and nutrient-dense treasure.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
