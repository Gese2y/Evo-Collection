"use client"

import { Menu, X, ShoppingBag } from "lucide-react"
import { useState } from "react"
import EVOLogo from "./EVOLogo"
import logo from "../../assets/logo.jpg"
import { useCart } from "../context/CartContext"

interface NavigationProps {
  currentPage: string
  onNavigate: (page: string) => void
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { items } = useCart()

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "collections", label: "Collections" },
    { id: "lookbook", label: "Lookbook" },
    // { id: "stores", label: "Stores" },
    { id: "directions", label: "Directions" },
    { id: "contact", label: "Contact" },
  ]

  const handleNavigation = (page: string) => {
    onNavigate(page)
    setMobileMenuOpen(false)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button onClick={() => handleNavigation("home")} className="hover:opacity-80 transition-opacity">
            <img src={logo} alt="EVO Logo" className="w-20 h-15" />
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  currentPage === item.id ? "text-orange-500" : "text-gray-700 hover:text-orange-500"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavigation("cart")}
              className="relative text-gray-700 hover:text-orange-500 transition-colors"
            >
              <ShoppingBag className="w-6 h-6" />
              {items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {items.length}
                </span>
              )}
            </button>
            <button
              onClick={() => handleNavigation("admin")}
              className={`text-sm font-medium tracking-wide transition-colors ${
                currentPage === "admin" ? "text-orange-500" : "text-gray-700 hover:text-orange-500"
              }`}
            >
              Admin
            </button>
          </div>

          <button className="md:hidden text-gray-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`block w-full text-left text-base font-medium transition-colors ${
                  currentPage === item.id ? "text-orange-500" : "text-gray-700 hover:text-orange-500"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavigation("cart")}
              className="block w-full text-left text-base font-medium text-gray-700 hover:text-orange-500 transition-colors"
            >
              Cart ({items.length})
            </button>
            <button
              onClick={() => handleNavigation("admin")}
              className="block w-full text-left text-base font-medium text-gray-700 hover:text-orange-500 transition-colors"
            >
              Admin
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
