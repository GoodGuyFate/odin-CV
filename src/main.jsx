import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CVPreview from './components/CVPreview.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CVPreview />
  </StrictMode>,
)
