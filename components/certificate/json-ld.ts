const siteUrl = 'https://altaishilajitbio.com'

export const certJsonLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Government Certified Quality & Purity',
  description:
    'Official government certificates, laboratory approvals, and state registration documents confirming 100% pure and safe Altay Shilajit (Mumiyo).',
  author: {
    '@type': 'Organization',
    name: 'Altai Labs',
    url: siteUrl,
  },
  publisher: {
    '@type': 'Organization',
    name: 'Altai Labs',
    logo: {
      '@type': 'ImageObject',
      url: `${siteUrl}/icon.svg`,
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${siteUrl}/pages/certificates`,
  },
  image: `${siteUrl}/images/altai-hero.png`,
  datePublished: '2026-10-21',
  dateModified: '2026-10-21',
  about: [
    {
      '@type': 'Thing',
      name: 'State Registration Certificate (SGR) — RU.77.99.88.003.E.007002.06.15',
    },
    {
      '@type': 'Thing',
      name: 'GOST R Certificate of Conformity — POCC RU.AB57.H02731',
    },
    {
      '@type': 'Thing',
      name: 'EAEU Declaration of Conformity — EAEU N RU D-RU.HB42.B.11652/20',
    },
  ],
})
