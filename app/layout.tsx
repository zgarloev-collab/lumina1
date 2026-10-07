import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import './globals.css'
import '../shopify-theme/assets/altai-landing.css'

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

export const metadata: Metadata = {
  title: 'Altai Shilajit — Premium Purified Siberian Mineral Resin',
  description:
    'Raw mountain energy and focus. Pure Siberian shilajit resin with 85+ trace minerals and fulvic acid, hand-harvested above 3,000 meters and third-party lab certified.',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
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
        <SiteHeader />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
