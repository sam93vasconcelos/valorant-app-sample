import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Boot from './Boot.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Boot />
  </StrictMode>,
)
