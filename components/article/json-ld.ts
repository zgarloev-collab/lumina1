const siteUrl = 'https://altaishilajitbio.com'
const articleUrl = `${siteUrl}/altay-vs-himalayan-shilajit`

export const articleJsonLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Altay vs. Himalayan Shilajit: Why Siberia Beats Tibet',
  description:
    'An honest comparison of nutrient profiles, purity standards, harvest environments, and value between the world\u2019s top two shilajit sources.',
  author: {
    '@type': 'Organization',
    name: 'Altai Labs',
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
    '@id': articleUrl,
  },
  image: `${siteUrl}/images/altai-hero.png`,
  datePublished: '2026-10-21',
  dateModified: '2026-10-21',
})

export const faqJsonLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Himalayan shilajit stronger just because the mountains are higher?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, that is a marketing myth. Altitude alone does not determine shilajit quality. Its true potency comes from the biological variety of the plant matter that decomposes to form the resin over centuries. The Altay mountain belt boasts far richer biodiversity than the dry, high-altitude slopes of the Tibetan plateau.',
      },
    },
  ],
})
