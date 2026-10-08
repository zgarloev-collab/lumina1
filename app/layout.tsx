import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { CartProvider } from '@/components/cart/cart-context'
import { CartDrawer } from '@/components/cart/cart-drawer'
import './globals.css'

const heading = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--altai-heading-family',
})

const body = Inter({
  subsets: ['latin'],
  variable: '--altai-body-family',
})

const siteUrl = 'https://altaishilajitbio.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Pure Altai Shilajit Resin | 100% Organic Mineral Supplement – Altai Labs',
    template: '%s – Altai Labs',
  },
  description:
    'Buy authentic Altai shilajit resin ethically hand-harvested at 3,000m in Siberia. Packed with 85+ trace minerals and rich fulvic acid for raw daily energy, sharp deep-work focus, and immune support. Free worldwide shipping always.',
  keywords: [
    'Altai shilajit',
    'shilajit resin',
    'organic shilajit',
    'pure shilajit',
    'Siberian shilajit',
    'fulvic acid',
    'trace minerals',
    'mineral supplement',
    'Altai Labs',
  ],
  authors: [{ name: 'Altai Labs' }],
  creator: 'Altai Labs',
  publisher: 'Altai Labs',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Altai Labs',
    title: 'Pure Altai Shilajit Resin | 100% Organic Mineral Supplement – Altai Labs',
    description:
      'Buy authentic Altai shilajit resin ethically hand-harvested at 3,000m in Siberia. Packed with 85+ trace minerals and rich fulvic acid for raw daily energy, sharp deep-work focus, and immune support. Free worldwide shipping always.',
    images: [
      {
        url: '/images/altai-hero.png',
        width: 1200,
        height: 630,
        alt: 'Pure Altai Shilajit Resin by Altai Labs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pure Altai Shilajit Resin | 100% Organic Mineral Supplement – Altai Labs',
    description:
      'Buy authentic Altai shilajit resin ethically hand-harvested at 3,000m in Siberia. 85+ trace minerals, rich fulvic acid. Free worldwide shipping always.',
    images: ['/images/altai-hero.png'],
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: '#1E2522',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`} style={{ background: '#F4F6F4' }}>
      <body className="font-sans antialiased" style={{ margin: 0 }}>
        <CartProvider>
          <SiteHeader />
          {children}
          <CartDrawer />
        </CartProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
