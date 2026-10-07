import { AltaiHero } from '@/components/altai/hero'
import { AltaiFeatures } from '@/components/altai/features'
import { AltaiRitual } from '@/components/altai/ritual'
import { AltaiSource } from '@/components/altai/source'
import { AltaiReviewsFaq } from '@/components/altai/reviews-faq'

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
