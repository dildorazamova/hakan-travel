import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { FaWhatsapp } from "react-icons/fa"

import Navbar from "./components/layout/Navbar"
import HeroSlider from './components/HeroSlider'
import AdvancedSearch from "./components/AdvancedSearch"
import PromoSection from "./components/PromoSection"
import DomesticTravelSection from "./components/DomesticTravelSection"
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import ToursPage from "./pages/ToursPage"
import SalesOfficesPage from "./pages/SalesOfficesPage"
import AboutPage from "./pages/AboutPage"
import GoogleTranslate from "./components/GoogleTranslate"

function HomePage() {
  return (
    <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <HeroSlider />
      <AdvancedSearch />
      <PromoSection />
      <DomesticTravelSection />
      <ContactSection />
      <GoogleTranslate />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tours" element={<ToursPage />} />
        <Route path="/sales-offices" element={<SalesOfficesPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>

      <Footer />

      {/* ✅ WhatsApp Floating Button */}
     
<a
  href="https://wa.me/998999591117"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 group"
>
  <div className="relative flex items-center justify-center 
                  w-16 h-16 rounded-full 
                  bg-green-500 text-white 
                  shadow-[0_15px_40px_rgba(0,0,0,0.25)]
                  transition-all duration-300
                  group-hover:scale-110
                  group-hover:shadow-[0_20px_60px_rgba(37,211,102,0.6)]">

    <FaWhatsapp size={28} />

    {/* Pulse Ring */}
    <span className="absolute inset-0 rounded-full 
                     bg-green-400 opacity-40 
                     animate-ping"></span>
  </div>
</a>

    </BrowserRouter>
  )
}

export default App