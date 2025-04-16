import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'src/assets/App.css'
import App from 'src/assets/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
