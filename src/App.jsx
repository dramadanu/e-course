import { Routes, Route } from 'react-router-dom'

import Navbar from './components/NavbarComponent'
import Footer from './components/FooterComponent'

import HomePage from './Pages/HomePage'
import KelasPage from './Pages/KelasPage'
import TestimonialPage from './Pages/TestimonialPage'
import FaqPage from './Pages/FaqPage'
import SyaratPage from './Pages/SyaratPage'


function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/Kelas" Component={KelasPage} />
        <Route path="/Testimonial" Component={TestimonialPage} />
        <Route path="/Faq" Component={FaqPage} />
        <Route path="/Syarat" Component={SyaratPage} />
      </Routes>
    <Footer />
    </>
  )
}

export default App
