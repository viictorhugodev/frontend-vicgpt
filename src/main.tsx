import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { VicGPT } from './VicGPT'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <VicGPT />
  </StrictMode>,
)
