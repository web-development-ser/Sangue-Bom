import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import BloodDonationForm from './components/BloodDonationForm'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BloodDonationForm />
  </StrictMode>,
)
