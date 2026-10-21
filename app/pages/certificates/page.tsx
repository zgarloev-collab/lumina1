import type { Metadata } from 'next'
import { CertHero } from '@/components/certificate/hero'
import { TrustBadges } from '@/components/certificate/trust-badges'
import { CertGrid } from '@/components/certificate/cert-grid'
import { TransparencyNote } from '@/components/certificate/transparency-note'
import { CertCta } from '@/components/certificate/cta'
import { certJsonLd } from '@/components/certificate/json-ld'

export const metadata: Metadata = {
  title: 'Certified Pure Altay Shilajit | Official Quality & Safety Compliance',
  description:
    'View our official government certificates, laboratory approvals, and state registration documents confirming 100% pure and safe Altay Shilajit (Mumiyo).',
  alternates: {
    canonical: '/pages/certificates',
  },
  openGraph: {
    type: 'article',
    url: 'https://altaishilajitbio.com/pages/certificates',
    title: 'Certified Pure Altay Shilajit | Official Quality & Safety Compliance',
    description:
      'View our official government certificates, laboratory approvals, and state registration documents confirming 100% pure and safe Altay Shilajit (Mumiyo).',
    images: [
      {
        url: '/images/altai-hero.png',
        width: 1200,
        height: 630,
        alt: 'Certified Pure Altay Shilajit compliance documents',
      },
    ],
  },
}

export default function CertificatesPage() {
  return (
    <article>
      <CertHero />
      <TrustBadges />
      <CertGrid />
      <TransparencyNote />
      <CertCta />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: certJsonLd }}
      />
    </article>
  )
}
