import { AltaiHero } from '@/components/altai/hero'
import { AltaiFeatures } from '@/components/altai/features'
import { AltaiRitual } from '@/components/altai/ritual'
import { AltaiSource } from '@/components/altai/source'
import { AltaiReviewsFaq } from '@/components/altai/reviews-faq'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pure Altai Shilajit Resin | 100% Organic Mineral Supplement',
  description:
    'Buy authentic Altai shilajit resin ethically hand-harvested at 3,000m in Siberia. Packed with 85+ trace minerals and rich fulvic acid for raw daily energy, sharp deep-work focus, and immune support. Free worldwide shipping always.',
  alternates: {
    canonical: '/',
  },
}

export default function Page() {
  return (
    <main>
      <AltaiHero />
      <AltaiFeatures />
      <AltaiRitual />
      <AltaiSource />
      <AltaiReviewsFaq />
    </main>
  )
}
