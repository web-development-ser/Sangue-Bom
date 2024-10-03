import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import BloodDonationForm from './components'
import NavBar from './components/header/Navbar'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <BloodDonationForm />
  </StrictMode>,
)
