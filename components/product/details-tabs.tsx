'use client'

import { useRef, useState, type KeyboardEvent } from 'react'
import { cn } from '@/lib/utils'

const tabs = [
  {
    id: 'power',
    label: 'The Power of Altai',
    content: (
      <div className="flex flex-col gap-4">
        <p>
          High in the Siberian Altai, above 3,000 meters, ancient plant matter has been compressed between ice and
          granite for centuries. Each summer, as the snowline retreats, our harvesters climb on foot to collect the
          resin seeping from sun-warmed rock faces — by hand, in small batches, exactly as it has been gathered for
          generations.
        </p>
        <p>
          This is shilajit at its most potent: dense with fulvic acid and more than 85 ionic trace minerals your body
          recognizes and absorbs. No fillers, no powders, no shortcuts — just raw mountain energy for sharper focus,
          steadier stamina, and deeper recovery.
        </p>
      </div>
    ),
  },
  {
    id: 'use',
    label: 'How to Use',
    content: (
      <ol className="flex flex-col gap-5">
        {[
          ['Portion', 'Take a pea-sized portion (about 300mg) of resin from the jar.'],
          ['Dissolve', 'Stir it into a cup of warm water, tea, or milk — never boiling — until fully dissolved.'],
          ['Ritual', 'Drink every morning, ideally on an empty stomach. Consistency over 4–6 weeks brings the best results.'],
        ].map(([title, text], i) => (
          <li key={title} className="flex gap-5">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#D4AF37] font-serif text-lg text-[#B08C22]">
              {i + 1}
            </span>
            <div className="pt-1.5">
              <p className="font-medium text-[#1E2522]">{title}</p>
              <p>{text}</p>
            </div>
          </li>
        ))}
      </ol>
    ),
  },
  {
    id: 'purity',
    label: 'Purity & Lab Results',
    content: (
      <div className="flex flex-col gap-6">
        <p>
          Every batch undergoes a gentle, 100% organic purification using only spring water and low-heat
          filtration — no chemical solvents. Before release, independent ISO-accredited labs verify potency and
          safety, and results are published for every lot.
        </p>
        <dl className="grid gap-px overflow-hidden rounded-sm border border-[#1E2522]/10 bg-[#1E2522]/10 sm:grid-cols-3">
          {[
            ['Heavy metals', 'Certified clear'],
            ['Fulvic acid', '60%+ concentration'],
            ['Microbiology', 'Passed'],
          ].map(([term, value]) => (
            <div key={term} className="bg-[#F4F6F4] p-5">
              <dt className="text-xs uppercase tracking-[0.18em] text-[#1E2522]/60">{term}</dt>
              <dd className="mt-1 font-serif text-xl font-semibold text-[#1E2522]">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    ),
  },
]

export function ProductDetailsTabs() {
  const [activeIndex, setActiveIndex] = useState(0)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  const onKeyDown = (event: KeyboardEvent) => {
    const delta = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0
    if (!delta) return
    event.preventDefault()
    const next = (activeIndex + delta + tabs.length) % tabs.length
    setActiveIndex(next)
    tabRefs.current[next]?.focus()
  }

  return (
    <section aria-label="Product details" className="mx-auto max-w-[1240px] px-5 pb-24 md:px-8">
      <div
        role="tablist"
        aria-label="Product information"
        onKeyDown={onKeyDown}
        className="flex gap-6 overflow-x-auto border-b border-[#1E2522]/15 md:gap-12"
      >
        {tabs.map((tab, i) => {
          const selected = i === activeIndex
          return (
            <button
              key={tab.id}
              ref={(el) => {
                tabRefs.current[i] = el
              }}
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={selected}
              aria-controls={`panel-${tab.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActiveIndex(i)}
              className={cn(
                'relative shrink-0 whitespace-nowrap pb-4 font-serif text-lg transition-colors focus-visible:outline-none focus-visible:text-[#B08C22] md:text-2xl',
                'after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:bg-[#D4AF37] after:transition-transform after:duration-300',
                selected ? 'text-[#1E2522] after:scale-x-100' : 'text-[#1E2522]/45 after:scale-x-0 hover:text-[#1E2522]/80',
              )}
            >
              {tab.label}
            </button>
          )
        })}
      </div>

      {tabs.map((tab, i) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`panel-${tab.id}`}
          aria-labelledby={`tab-${tab.id}`}
          hidden={i !== activeIndex}
          tabIndex={0}
          className="max-w-3xl pt-10 text-base leading-relaxed text-[#1E2522]/75 animate-in fade-in slide-in-from-bottom-1 duration-500 focus-visible:outline-none"
        >
          {tab.content}
        </div>
      ))}
    </section>
  )
}
