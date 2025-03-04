import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProductProvider from './contexts/ProductContext.jsx'

createRoot(document.getElementById('root')).render(
  <ProductProvider>
      <StrictMode>
    <App />
  </StrictMode>
  </ProductProvider>

)
