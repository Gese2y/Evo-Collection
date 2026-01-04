"use client"

import type React from "react"

import { useState } from "react"
import { Plus, Trash2, LogOut } from "lucide-react"
import { AdminProvider, useAdmin } from "../context/AdminContext"
import { Lock } from "lucide-react"
import type { Order } from "../types/Order" // Declare the Order variable

function AdminContent() {
  const { products, orders, addProduct, deleteProduct, updateOrderStatus } = useAdmin()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [adminPassword, setAdminPassword] = useState("")
  const [loginAttempt, setLoginAttempt] = useState("")
  const [activeTab, setActiveTab] = useState<"products" | "orders">("products")
  const [showAddProduct, setShowAddProduct] = useState(false)
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: 0,
    category: "Women",
    image: "",
    description: "",
  })

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (loginAttempt === "admin123") {
      setIsLoggedIn(true)
      setAdminPassword("")
      setLoginAttempt("")
    } else {
      alert("Invalid password")
      setLoginAttempt("")
    }
  }

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault()
    if (newProduct.name && newProduct.price) {
      addProduct({
        name: newProduct.name,
        price: newProduct.price,
        category: newProduct.category,
        image: newProduct.image || "https://via.placeholder.com/300",
        description: newProduct.description,
      })
      setNewProduct({ name: "", price: 0, category: "Women", image: "", description: "" })
      setShowAddProduct(false)
    }
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center px-4">
        <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md">
          <div className="flex justify-center mb-6">
            <div className="bg-orange-500 p-4 rounded-full">
              <Lock className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-2">Admin Login</h1>
          <p className="text-center text-gray-600 mb-8">Access the EVO Admin Dashboard</p>

          <form onSubmit={handleAdminLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
              <input
                type="password"
                value={loginAttempt}
                onChange={(e) => setLoginAttempt(e.target.value)}
                placeholder="Enter admin password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <p className="text-xs text-gray-500 mt-2">Demo password: admin123</p>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20 pb-20 bg-gray-50">
      {/* Admin Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600 mt-1">Manage products, orders, and customers</p>
          </div>
          <button
            onClick={() => setIsLoggedIn(false)}
            className="flex items-center gap-2 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab("products")}
              className={`py-4 px-2 font-semibold border-b-2 transition-colors ${
                activeTab === "products"
                  ? "border-orange-500 text-orange-500"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              Products ({products.length})
            </button>
            <button
              onClick={() => setActiveTab("orders")}
              className={`py-4 px-2 font-semibold border-b-2 transition-colors ${
                activeTab === "orders"
                  ? "border-orange-500 text-orange-500"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              Orders ({orders.length})
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Products Tab */}
        {activeTab === "products" && (
          <div>
            <div className="mb-8">
              {!showAddProduct ? (
                <button
                  onClick={() => setShowAddProduct(true)}
                  className="flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                >
                  <Plus className="w-5 h-5" />
                  Add New Product
                </button>
              ) : (
                <form onSubmit={handleAddProduct} className="bg-white p-8 rounded-lg shadow-md space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Add New Product</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Product Name"
                      value={newProduct.name}
                      onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      required
                    />
                    <input
                      type="number"
                      placeholder="Price"
                      value={newProduct.price || ""}
                      onChange={(e) => setNewProduct({ ...newProduct, price: Number(e.target.value) })}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      required
                    />
                    <select
                      value={newProduct.category}
                      onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      <option>Women</option>
                      <option>Men</option>
                      <option>Accessories</option>
                    </select>
                    <input
                      type="url"
                      placeholder="Image URL"
                      value={newProduct.image}
                      onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <textarea
                    placeholder="Product Description"
                    value={newProduct.description}
                    onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    rows={3}
                  />
                  <div className="flex gap-4">
                    <button
                      type="submit"
                      className="bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                    >
                      Save Product
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowAddProduct(false)}
                      className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-bold text-orange-500">ETB {product.price}</span>
                      <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">{product.category}</span>
                    </div>
                    <button
                      onClick={() => deleteProduct(product.id)}
                      className="w-full flex items-center justify-center gap-2 bg-red-500 text-white py-2 rounded hover:bg-red-600 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Orders Tab */}
        {activeTab === "orders" && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Customer Orders</h2>
            <div className="space-y-4">
              {orders.map((order) => (
                <div key={order.id} className="bg-white rounded-lg shadow-md p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600">Order ID</p>
                      <p className="font-semibold text-gray-900">{order.id}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Customer</p>
                      <p className="font-semibold text-gray-900">{order.customerName}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Total</p>
                      <p className="font-semibold text-orange-500">ETB {order.total}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Date</p>
                      <p className="font-semibold text-gray-900">{order.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <select
                      value={order.status}
                      onChange={(e) => updateOrderStatus(order.id, e.target.value as Order["status"])}
                      className={`px-4 py-2 rounded-lg font-semibold border-0 ${
                        order.status === "pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : order.status === "processing"
                            ? "bg-blue-100 text-blue-800"
                            : order.status === "shipped"
                              ? "bg-purple-100 text-purple-800"
                              : "bg-green-100 text-green-800"
                      }`}
                    >
                      <option value="pending">Pending</option>
                      <option value="processing">Processing</option>
                      <option value="shipped">Shipped</option>
                      <option value="delivered">Delivered</option>
                    </select>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function AdminPage() {
  return (
    <AdminProvider>
      <AdminContent />
    </AdminProvider>
  )
}
