import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DarkModeContextProvider } from './context/darkmodeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DarkModeContextProvider>
    <App />
    </DarkModeContextProvider>
  </StrictMode>,
)
