import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext'
import { MenuProvider } from './context/MenuContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <MenuProvider>
      <ThemeProvider>

        <App />
        
      </ThemeProvider>
    </MenuProvider>

  </StrictMode>,
)
