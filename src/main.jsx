import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext'
import { MenuProvider } from './context/MenuContext.jsx'
import { CartProvider } from './context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <MenuProvider>
        <ThemeProvider>

          <App />

        </ThemeProvider>
      </MenuProvider>
    </CartProvider>

  </StrictMode>,
)
