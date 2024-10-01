import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
<<<<<<< HEAD
import BloodDonationForm from './components'
import { Hello } from './teste'
=======
import BloodDonationForm from './components/BloodDonationForm'
>>>>>>> 06104bab9fc447519b5a8054070e68e9dc020771


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BloodDonationForm />
    <Hello />
  </StrictMode>,
)
