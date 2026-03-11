import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContextOne from './Context/ContextOne.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextOne>
    <App />
    </ContextOne>
  </StrictMode>
)
