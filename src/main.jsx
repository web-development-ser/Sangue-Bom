import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
<<<<<<< HEAD
import BloodDonationForm from './components'
import NavBar from './components/header/Navbar'
=======
import BloodDonationForm from './components/BloodDonationForm'
import BloodDonorList from './components/BloodDonorList'

import Footer from './components/footer/index'


>>>>>>> 01a1501c68488a14477837d3c9fba8c55ae0e13d


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <BloodDonationForm />
    <BloodDonorList />
    <Footer/>
  </StrictMode>,
)
