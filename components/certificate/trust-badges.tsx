import { Reveal } from '@/components/altai/reveal'
import { AltaiIcon } from '@/components/altai/icon'

const badges = [
  { icon: 'shield', label: 'State-Registered Safety' },
  { icon: 'flask', label: 'Humic & Fulvic Acids Source' },
  { icon: 'leaf', label: 'Non-GMO & 100% Natural' },
  { icon: 'globe', label: 'EAEU Customs Union Approved' },
] as const

export function TrustBadges() {
  return (
    <section className="border-b border-[#1E2522]/10 bg-[#F4F6F4] py-12 lg:py-16" aria-label="Trust Highlights">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {badges.map((badge, index) => (
            <Reveal
              key={badge.label}
              delay={index * 0.08}
              className="flex flex-col items-center gap-3 text-center"
            >
              <div className="flex size-14 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-white shadow-sm transition-all duration-300 hover:scale-105 hover:border-[#D4AF37]/50">
                <AltaiIcon name={badge.icon} className="size-6 text-[#B08C22]" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1E2522]/80">
                {badge.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
