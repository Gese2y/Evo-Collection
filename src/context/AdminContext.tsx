"use client"

import type React from "react"

import { createContext, useContext, useState } from "react"

export interface Product {
  id: string
  name: string
  price: number
  category: string
  image: string
  description: string
}

export interface Order {
  id: string
  customerName: string
  email: string
  items: Array<{ productId: string; quantity: number }>
  total: number
  status: "pending" | "processing" | "shipped" | "delivered"
  date: string
}

interface AdminContextType {
  products: Product[]
  orders: Order[]
  addProduct: (product: Omit<Product, "id">) => void
  deleteProduct: (id: string) => void
  updateProduct: (id: string, product: Omit<Product, "id">) => void
  addOrder: (order: Omit<Order, "id" | "date">) => void
  updateOrderStatus: (id: string, status: Order["status"]) => void
}

const AdminContext = createContext<AdminContextType | undefined>(undefined)

const initialProducts: Product[] = [
  {
    id: "1",
    name: "Classic Leather Jacket",
    price: 299,
    category: "Women",
    image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Premium leather jacket for a timeless look",
  },
  {
    id: "2",
    name: "Tailored Blazer",
    price: 249,
    category: "Men",
    image: "https://images.pexels.com/photos/2897883/pexels-photo-2897883.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Professional blazer perfect for business occasions",
  },
]

const initialOrders: Order[] = [
  {
    id: "order-1",
    customerName: "Abeba Tsegaye",
    email: "abeba@example.com",
    items: [{ productId: "1", quantity: 1 }],
    total: 299,
    status: "processing",
    date: "2025-01-02",
  },
  {
    id: "order-2",
    customerName: "Getnet Abebe",
    email: "getnet@example.com",
    items: [{ productId: "2", quantity: 1 }],
    total: 249,
    status: "shipped",
    date: "2025-01-01",
  },
]

export function AdminProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<Product[]>(initialProducts)
  const [orders, setOrders] = useState<Order[]>(initialOrders)

  const addProduct = (product: Omit<Product, "id">) => {
    const newProduct: Product = {
      ...product,
      id: Date.now().toString(),
    }
    setProducts((prev) => [...prev, newProduct])
  }

  const deleteProduct = (id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id))
  }

  const updateProduct = (id: string, product: Omit<Product, "id">) => {
    setProducts((prev) => prev.map((p) => (p.id === id ? { ...p, ...product } : p)))
  }

  const addOrder = (order: Omit<Order, "id" | "date">) => {
    const newOrder: Order = {
      ...order,
      id: `order-${Date.now()}`,
      date: new Date().toISOString().split("T")[0],
    }
    setOrders((prev) => [...prev, newOrder])
  }

  const updateOrderStatus = (id: string, status: Order["status"]) => {
    setOrders((prev) => prev.map((o) => (o.id === id ? { ...o, status } : o)))
  }

  return (
    <AdminContext.Provider
      value={{ products, orders, addProduct, deleteProduct, updateProduct, addOrder, updateOrderStatus }}
    >
      {children}
    </AdminContext.Provider>
  )
}

export function useAdmin() {
  const context = useContext(AdminContext)
  if (!context) {
    throw new Error("useAdmin must be used within AdminProvider")
  }
  return context
}
