import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import RefHook from './components/hooks/userefhook/RefHook.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <RefHook></RefHook> */}
  </StrictMode>,
)
