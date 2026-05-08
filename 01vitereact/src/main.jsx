import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// createRoot React app ko HTML ke #root div ke andar mount karta hai.
createRoot(document.getElementById('root')).render(
  // StrictMode development me extra checks chala kar common mistakes pakadta hai.
  <StrictMode>
    <App />
  </StrictMode>,
)
