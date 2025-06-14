// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'
import { AppProvider } from './context/productcontext.jsx'
import { FilterContextProvider } from './context/Filter_context.jsx'
import { CartProvider } from './context/Cart_context.jsx'




createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <AppProvider>
    <FilterContextProvider>
      <CartProvider>
        <App />
      </CartProvider>


    </FilterContextProvider>
  </AppProvider>

  // {/* </StrictMode> */}
)
