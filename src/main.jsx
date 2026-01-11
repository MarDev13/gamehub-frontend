import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from "./auth/context/AuthContext.jsx"
import { CartProvider } from "./cart/context/CartContext.jsx"
import { BrowserRouter } from "react-router-dom"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <BrowserRouter>
        <CartProvider>
          <App />
        </CartProvider>
        </BrowserRouter>
      </AuthProvider>
  </StrictMode>,
)
