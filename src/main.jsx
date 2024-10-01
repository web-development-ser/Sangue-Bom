import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import BloodDonationForm from './components'
import { Hello } from './teste'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BloodDonationForm />
    <Hello />
  </StrictMode>,
)
