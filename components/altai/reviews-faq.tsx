'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { AltaiIcon } from './icon'
import { Reveal } from './reveal'

const reviews = [
  {
    rating: 5,
    quote: 'I replaced my second coffee with this. Clean, steady energy through the afternoon — and no crash.',
    author: 'Daniel R.',
    detail: 'Austin, TX',
  },
  {
    rating: 5,
    quote: "It's genuinely a resin, not a powder in a capsule. The published lab report was the deciding factor for me.",
    author: 'Maya K.',
    detail: 'London, UK',
  },
  {
    rating: 5,
    quote: 'Part of my morning tea now. My deep-work blocks feel sharper and far more sustained.',
    author: 'Jonas W.',
    detail: 'Berlin, DE',
  },
  {
    rating: 5,
    quote: "Earthy and smoky. Stirred into warm oat milk with honey, it's become the best part of my morning.",
    author: 'Priya S.',
    detail: 'Toronto, CA',
  },
  {
    rating: 5,
    quote: 'Training through long weeks feels noticeably smoother. I don\'t skip it on race season mornings.',
    author: 'Alex T.',
    detail: 'Boulder, CO',
  },
  {
    rating: 5,
    quote: 'Beautiful jar, transparent sourcing, and batch test results you can actually read. That\'s rare.',
    author: 'Sofia L.',
    detail: 'Milan, IT',
  },
]

const faqs = [
  {
    question: 'What does Altai Shilajit taste like?',
    answer:
      'Pure shilajit is earthy, smoky and slightly bitter, with a deep mineral finish — similar to a strong black tea. Dissolving it in warm tea or milk, or adding a little raw honey, softens the flavor beautifully.',
  },
  {
    question: 'Is it tested for heavy metals and safety?',
    answer:
      'Yes. Every batch is purified and then verified by an independent, accredited third-party laboratory for heavy metals (lead, mercury, arsenic and cadmium), microbial contaminants and purity. Only batches that pass strict limits are released, and the certificate of analysis for your batch is available on request.',
  },
  {
    question: 'How fast will I feel the energy?',
    answer:
      'Many people notice a gentle, steady lift within 30–60 minutes of their morning cup. The fuller benefits of a mineral-rich routine build with consistent daily use over 2–4 weeks. Individual results vary.',
  },
  {
    question: 'How much should I take, and how long does a jar last?',
    answer:
      'Take a pea-sized portion (about 300 mg) once a day. A 30 g jar provides roughly 60–100 servings. If you are pregnant, nursing or taking medication, consult your healthcare provider first.',
  },
  {
    question: 'Why does the resin harden or soften?',
    answer:
      "That's the sign of genuine resin. It firms up in cool temperatures and softens with warmth. Store the jar sealed in a cool, dry place away from direct sunlight.",
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 text-[#D4AF37]">
      {Array.from({ length: count }).map((_, i) => (
        <AltaiIcon key={i} name="star" className="size-4 fill-current" />
      ))}
    </div>
  )
}

function FaqItem({ faq, isOpen, onToggle }: { faq: (typeof faqs)[number]; isOpen: boolean; onToggle: () => void }) {
  const contentRef = useRef<HTMLDivElement>(null)

  return (
    <div className="border-b border-white/10">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-6 py-6 text-left font-serif text-lg leading-snug text-[#F4F6F4] transition-colors hover:text-[#D4AF37] focus-visible:outline-none focus-visible:text-[#D4AF37] lg:text-2xl"
      >
        {faq.question}
        <span
          className={`relative flex size-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
            isOpen ? 'rotate-180 border-[#D4AF37]' : 'border-white/15'
          }`}
        >
          <span className="absolute h-px w-3 bg-[#D4AF37]" />
          <span
            className={`absolute h-3 w-px bg-[#D4AF37] transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
          />
        </span>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-400 ease-out"
        style={{ maxHeight: isOpen ? (contentRef.current?.scrollHeight ?? 300) : 0, opacity: isOpen ? 1 : 0 }}
      >
        <p className="pb-6 pr-14 text-[15px] leading-relaxed text-[#F4F6F4]/65">{faq.answer}</p>
      </div>
    </div>
  )
}

export function AltaiReviewsFaq() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <section className="bg-[#1E2522] py-20 text-[#F4F6F4] lg:py-32" aria-labelledby="altai-reviews-title">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center lg:mb-20">
          <p className="mb-5 flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-[#D4AF37]">
            <span className="h-px w-8 bg-[#D4AF37]" />
            Rituals in Real Life
            <span className="h-px w-8 bg-[#D4AF37]" />
          </p>
          <h2
            id="altai-reviews-title"
            className="font-serif text-[2.25rem] font-semibold leading-[1.05] text-[#F4F6F4] sm:text-5xl lg:text-[3.75rem]"
            style={{ textWrap: 'balance' }}
          >
            Felt from the <span className="italic text-[#D4AF37]">first morning</span>
          </h2>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Stars count={5} />
            <span className="text-sm text-[#F4F6F4]/60">4.9 / 5 from 2,400+ verified reviews</span>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <Reveal
              key={review.author}
              delay={(index % 3) * 0.1}
              as="figure"
              className="flex flex-col gap-4 rounded-sm border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:border-[#D4AF37]/40 hover:bg-white/[0.06]"
            >
              <Stars count={review.rating} />
              <blockquote className="font-serif text-lg leading-snug text-[#F4F6F4]">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-auto flex items-center justify-between gap-4 border-t border-white/10 pt-4 text-sm">
                <strong className="font-medium text-[#F4F6F4]">{review.author}</strong>
                <span className="text-xs uppercase tracking-[0.12em] text-[#F4F6F4]/50">{review.detail}</span>
              </figcaption>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid gap-12 border-t border-white/10 pt-16 lg:grid-cols-[5fr_7fr] lg:gap-16">
          <Reveal>
            <p className="mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-[#D4AF37]">
              <span className="h-px w-8 bg-[#D4AF37]" />
              Questions
            </p>
            <h2
              className="font-serif text-[2rem] font-semibold leading-tight text-[#F4F6F4] sm:text-4xl lg:text-[2.75rem]"
              style={{ textWrap: 'balance' }}
            >
              Everything you <span className="italic text-[#D4AF37]">need to know</span>
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[#F4F6F4]/60" style={{ textWrap: 'pretty' }}>
              Still curious? Our team replies to every message within one business day.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="border-t border-white/10">
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

        <Reveal className="mt-20 flex flex-col items-center rounded-sm border border-[#D4AF37]/30 p-10 text-center lg:p-16" >
          <h2
            className="font-serif text-[2rem] font-semibold leading-tight text-[#F4F6F4] sm:text-4xl lg:text-[3.75rem]"
            style={{ textWrap: 'balance' }}
          >
            Bring the mountain <span className="italic text-[#D4AF37]">home</span>
          </h2>
          <p className="mt-4 max-w-xl text-base text-[#F4F6F4]/65" style={{ textWrap: 'pretty' }}>
            Free shipping on every order. 60-day ritual guarantee — love it, or your money back.
          </p>
          <Link
            href="/shop"
            className="group mt-8 flex h-14 items-center gap-3 rounded-sm bg-[#D4AF37] px-8 text-xs font-semibold uppercase tracking-[0.2em] text-[#1E2522] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C9A230] hover:shadow-[0_14px_34px_-14px_rgba(212,175,55,0.75)]"
          >
            Shop Pure Resin
            <AltaiIcon name="arrow" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <small className="mt-5 text-xs uppercase tracking-[0.14em] text-[#F4F6F4]/40">
            These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure,
            or prevent any disease.
          </small>
        </Reveal>
      </div>
    </section>
  )
}
