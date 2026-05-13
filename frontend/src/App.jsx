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
    <div>
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

      <a
        href="https://wa.me/998999591117"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
      >
        <div className="relative flex items-center justify-center
                        w-14 h-14 rounded-full
                        bg-green-500 text-white
                        shadow-[0_8px_32px_rgba(34,197,94,0.4)]
                        transition-all duration-300
                        group-hover:scale-110
                        group-hover:shadow-[0_12px_40px_rgba(34,197,94,0.6)]">
          <FaWhatsapp size={26} />
          <span className="absolute inset-0 rounded-full bg-green-400 opacity-30 animate-ping"></span>
        </div>
      </a>
    </BrowserRouter>
  )
}

export default App
