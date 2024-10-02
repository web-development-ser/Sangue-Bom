import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import BloodDonationForm from './components/BloodDonationForm'
import BloodDonorList from './components/BloodDonorList'

import Footer from './components/footer/index'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BloodDonationForm />
    <BloodDonorList />
    <Footer/>
  </StrictMode>,
)
