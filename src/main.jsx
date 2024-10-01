import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import BloodDonationForm from './components'

import BloodDonationForm from './components/BloodDonationForm'
import Footer from './components/footer/index'
import { Hello } from './teste'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BloodDonationForm />
    <Footer/>

    <Hello />
  </StrictMode>,
)
