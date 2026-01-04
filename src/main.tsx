import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.tsx"
import { CartProvider } from "./context/CartContext"
import { AdminProvider } from "./context/AdminContext"
import "./index.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CartProvider>
      <AdminProvider>
        <App />
      </AdminProvider>
    </CartProvider>
  </StrictMode>,
)
