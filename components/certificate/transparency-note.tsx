import { Reveal } from '@/components/altai/reveal'

export function TransparencyNote() {
  return (
    <section className="bg-[#1E2522] py-20 text-[#F4F6F4] lg:py-28" aria-label="Consumer Transparency Note">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="mb-5 flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-[#D4AF37]">
            <span className="h-px w-8 bg-[#D4AF37]" />
            Our Promise to You
            <span className="h-px w-8 bg-[#D4AF37]" />
          </p>
          <p
            className="font-serif text-xl leading-relaxed text-[#F4F6F4]/85 sm:text-2xl"
            style={{ textWrap: 'pretty' }}
          >
            Raw mineral resins can vary, which is why we strictly work with state-regulated facilities
            that process shilajit using clean, advanced low-temperature purification methods. Our
            compliance documents guarantee that the product you receive is officially verified, clear
            of harmful biological agents, and rich in bioavailable minerals. Always verify physical
            labels upon delivery to confirm matching batch values and shelf-life instructions.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
