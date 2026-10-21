import type { Metadata } from 'next'
import { ArticleHero } from '@/components/article/hero'
import { ArticleIntro } from '@/components/article/intro'
import { ComparisonTable } from '@/components/article/comparison-table'
import { ArticleBreakdown } from '@/components/article/breakdown'
import { ArticleFaq } from '@/components/article/faq'
import { ArticleCta } from '@/components/article/cta'
import { articleJsonLd, faqJsonLd } from '@/components/article/json-ld'

export const metadata: Metadata = {
  title: 'Why Altay Shilajit is Better Than Himalayan: The Ultimate Comparison',
  description:
    'Discover why Altay Shilajit outperforms Himalayan variants in purity, nutrient density, and cost-effectiveness. Read our science-backed comparison now.',
  alternates: {
    canonical: '/altay-vs-himalayan-shilajit',
  },
  openGraph: {
    type: 'article',
    url: 'https://altaishilajitbio.com/altay-vs-himalayan-shilajit',
    title: 'Why Altay Shilajit is Better Than Himalayan: The Ultimate Comparison',
    description:
      'Discover why Altay Shilajit outperforms Himalayan variants in purity, nutrient density, and cost-effectiveness. Read our science-backed comparison now.',
    images: [
      {
        url: '/images/altai-hero.png',
        width: 1200,
        height: 630,
        alt: 'Altay vs Himalayan Shilajit comparison',
      },
    ],
  },
}

export default function AltayVsHimalayanPage() {
  return (
    <article>
      <ArticleHero />
      <ArticleIntro />
      <ComparisonTable />
      <ArticleBreakdown />
      <ArticleFaq />
      <ArticleCta />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: articleJsonLd }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqJsonLd }}
      />
    </article>
  )
}
