import type { Metadata } from 'next'
import { ProductGallery } from '@/components/product/gallery'
import { ProductBuyBox } from '@/components/product/buy-box'
import { ProductDetailsTabs } from '@/components/product/details-tabs'

export const metadata: Metadata = {
  title: 'Shop Pure Altai Shilajit Resin (50g & 100g) | Premium Quality',
  description:
    'Order raw Altai shilajit mineral resin in premium UV-protective black glass jars. Independent third-party laboratory tested for safe heavy metal clearance. Choose 50g Standard or 100g Value Pack. Free shipping included.',
  alternates: {
    canonical: '/shop',
  },
  openGraph: {
    type: 'website',
    url: 'https://altaishilajitbio.com/shop',
    title: 'Shop Pure Altai Shilajit Resin (50g & 100g) | Premium Quality – Altai Labs',
    description:
      'Order raw Altai shilajit mineral resin in premium UV-protective black glass jars. Independent third-party laboratory tested for safe heavy metal clearance. Choose 50g Standard or 100g Value Pack. Free shipping included.',
    images: [
      {
        url: '/images/product-jar.png',
        width: 1200,
        height: 630,
        alt: 'Pure Altai Shilajit Resin in premium black glass jar',
      },
    ],
  },
}

export default function ShopPage() {
  return (
    <main className="min-h-svh bg-[#F4F6F4] font-sans text-[#1E2522]">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-10 md:px-8 md:py-16 lg:grid-cols-2 lg:gap-16">
        <ProductGallery />
        <ProductBuyBox />
      </div>
      <ProductDetailsTabs />
    </main>
  )
}
