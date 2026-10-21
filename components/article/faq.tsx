'use client'

import { useRef, useState } from 'react'
import { Reveal } from '@/components/altai/reveal'

const faqs = [
  {
    question: 'Is Himalayan shilajit stronger just because the mountains are higher?',
    answer:
      'No, that is a marketing myth. Altitude alone does not determine shilajit quality. Its true potency comes from the biological variety of the plant matter that decomposes to form the resin over centuries. The Altay mountain belt boasts far richer biodiversity than the dry, high-altitude slopes of the Tibetan plateau.',
  },
]

function FaqItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: { question: string; answer: string }
  isOpen: boolean
  onToggle: () => void
}) {
  const contentRef = useRef<HTMLDivElement>(null)

  return (
    <div className="border-b border-[#1E2522]/10">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-6 py-6 text-left font-serif text-lg leading-snug text-[#1E2522] transition-colors hover:text-[#B08C22] focus-visible:outline-none focus-visible:text-[#B08C22] lg:text-xl"
      >
        {faq.question}
        <span
          className={`relative flex size-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
            isOpen ? 'rotate-180 border-[#B08C22]' : 'border-[#1E2522]/15'
          }`}
        >
          <span className="absolute h-px w-3 bg-[#B08C22]" />
          <span
            className={`absolute h-3 w-px bg-[#B08C22] transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
          />
        </span>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-400 ease-out"
        style={{ maxHeight: isOpen ? (contentRef.current?.scrollHeight ?? 300) : 0, opacity: isOpen ? 1 : 0 }}
      >
        <p className="pb-6 pr-14 text-[15px] leading-relaxed text-[#1E2522]/65">{faq.answer}</p>
      </div>
    </div>
  )
}

export function ArticleFaq() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <section className="bg-[#F4F6F4] py-20 lg:py-28" aria-label="Frequently Asked Questions">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
          <Reveal>
            <p className="mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-[#B08C22]">
              <span className="h-px w-8 bg-[#B08C22]" />
              FAQ
            </p>
            <h2
              className="font-serif text-[2rem] font-semibold leading-tight text-[#1E2522] sm:text-4xl lg:text-[2.75rem]"
              style={{ textWrap: 'balance' }}
            >
              Common <span className="italic text-[#B08C22]">Questions</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="border-t border-[#1E2522]/10">
              {faqs.map((faq, index) => (
                <FaqItem
                  key={faq.question}
                  faq={faq}
                  isOpen={openFaq === index}
                  onToggle={() => setOpenFaq(openFaq === index ? -1 : index)}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}