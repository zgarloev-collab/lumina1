import { AltaiHero } from '@/components/altai/hero'
import { AltaiFeatures } from '@/components/altai/features'
import { AltaiSource } from '@/components/altai/source'
import { AltaiRitual } from '@/components/altai/ritual'
import { AltaiReviewsFaq } from '@/components/altai/reviews-faq'

export default function Page() {
  return (
    <main>
      <AltaiHero />
      <AltaiFeatures />
      <AltaiSource />
      <AltaiRitual />
      <AltaiReviewsFaq />
    </main>
  )
}
