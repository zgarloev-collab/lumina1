import type { Metadata } from 'next'
import { ProductGallery } from '@/components/product/gallery'
import { ProductBuyBox } from '@/components/product/buy-box'
import { ProductDetailsTabs } from '@/components/product/details-tabs'

export const metadata: Metadata = {
  title: 'Pure Altai Shilajit Resin — Shop | ALTAI LABS',
  description:
    'Hand-harvested above 3,000 meters in the Siberian Altai. 85+ ionic minerals, rich in fulvic acid, third-party lab tested. From $49.',
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
