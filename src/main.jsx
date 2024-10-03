import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NavBar from './components/header/Navbar'
import BloodDonationForm from './components/BloodDonationForm'
import BloodDonorList from './components/BloodDonorList'

import Footer from './components/footer/index'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <BloodDonationForm />
    <BloodDonorList />
    <Footer/>
  </StrictMode>,
)
