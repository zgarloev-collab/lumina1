'use client'

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { formatPrice, product } from '@/lib/product'

export interface CartItem {
  variantId: string
  variantLabel: string
  quantity: number
  price: number
  image: string
  title: string
  stripePriceId?: string
}

interface CartContextValue {
  items: CartItem[]
  isOpen: boolean
  itemCount: number
  subtotal: number
  openCart: () => void
  closeCart: () => void
  addItem: (variantId: string, quantity: number) => void
  removeItem: (variantId: string) => void
  updateQuantity: (variantId: string, quantity: number) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  const addItem = useCallback((variantId: string, quantity: number) => {
    const variant = product.variants.find((v) => v.id === variantId)
    if (!variant) return

    setItems((prev) => {
      const existing = prev.find((item) => item.variantId === variantId)
      if (existing) {
        return prev.map((item) =>
          item.variantId === variantId
            ? { ...item, quantity: Math.min(10, item.quantity + quantity) }
            : item,
        )
      }
      return [
        ...prev,
        {
          variantId: variant.id,
          variantLabel: variant.label,
          quantity,
          price: variant.price,
          image: product.images[0]?.src ?? '/images/product-jar.png',
          title: product.title,
          stripePriceId: variant.stripePriceId,
        },
      ]
    })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((variantId: string) => {
    setItems((prev) => prev.filter((item) => item.variantId !== variantId))
  }, [])

  const updateQuantity = useCallback((variantId: string, quantity: number) => {
    setItems((prev) =>
      prev
        .map((item) =>
          item.variantId === variantId
            ? { ...item, quantity: Math.max(0, quantity) }
            : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }, [])

  const clearCart = useCallback(() => setItems([]), [])

  const itemCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items],
  )

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items],
  )

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      isOpen,
      itemCount,
      subtotal,
      openCart,
      closeCart,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
    }),
    [items, isOpen, itemCount, subtotal, openCart, closeCart, addItem, removeItem, updateQuantity, clearCart],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}

export { formatPrice }
