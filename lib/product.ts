export const BRAND = 'ALTAI LABS'

/** External checkout destination for the BUY NOW button (e.g. a Shopify cart permalink). */
export const BUY_NOW_URL = process.env.NEXT_PUBLIC_BUY_NOW_URL ?? 'https://altailabs.com/cart'
export const CART_URL = process.env.NEXT_PUBLIC_CART_URL ?? 'https://altailabs.com/cart'

export interface ProductVariant {
  id: string
  label: string
  note?: string
  price: number
  compareAtPrice?: number
  /** Stripe Price ID from your Stripe Dashboard → Products. */
  stripePriceId?: string
}

export const product = {
  title: 'Pure Altai Shilajit Resin',
  rating: 5,
  reviewCount: 142,
  variants: [
    { id: '50g', label: '50g', note: 'Standard', price: 49, stripePriceId: 'price_1UNyc2Dl7OTnai9grfyOIVcA' },
    { id: '100g', label: '100g', note: 'Value Pack - Save 15%', price: 83.3, compareAtPrice: 98, stripePriceId: 'price_1UNynyDl7OTnai9gRaRAxCod' },
  ] satisfies ProductVariant[],
  images: [
    {
      src: '/images/product-jar.png',
      alt: 'Black glass jar of Altai shilajit resin with a matte black lid on cracked glacier ice',
      label: 'Jar on glacier ice',
    },
    {
      src: '/images/product-jar-detail.png',
      alt: 'Round semi-transparent black glass jar with a matte black lid on a frosted stone slab',
      label: 'Jar on frosted stone',
    },
    {
      src: '/images/product-resin.png',
      alt: 'Open jar showing the mirror-like surface of the black resin',
      label: 'Open jar of resin',
    },
    {
      src: '/images/product-box.png',
      alt: 'Pine-green gift box with gold emblem holding the shilajit jar',
      label: 'Gift box packaging',
    },
  ],
}

export const formatPrice = (value: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value)
