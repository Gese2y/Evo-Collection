"use client"

import { useState } from "react"
import { CartProvider } from "./context/CartContext"
import { AdminProvider } from "./context/AdminContext"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Collections from "./pages/Collections"
import Lookbook from "./pages/Lookbook"
import Stores from "./pages/Stores"
import Contact from "./pages/Contact"
import Cart from "./pages/Cart"
import Directions from "./pages/Directions"
import Admin from "./pages/Admin"

function AppContent() {
  const [currentPage, setCurrentPage] = useState("home")

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home onNavigate={setCurrentPage} />
      case "about":
        return <About />
      case "collections":
        return <Collections />
      case "lookbook":
        return <Lookbook />
      case "stores":
        return <Stores />
      case "contact":
        return <Contact />
      case "cart":
        return <Cart />
      case "directions":
        return <Directions />
      case "admin":
        return <Admin />
      default:
        return <Home onNavigate={setCurrentPage} />
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <CartProvider>
      <AdminProvider>
        <AppContent />
      </AdminProvider>
    </CartProvider>
  )
}

export default App
