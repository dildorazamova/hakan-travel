import './App.css'
import Navbar from "./components/layout/Navbar"
import HeroSlider from './components/HeroSlider'
import AdvancedSearch from "./components/AdvancedSearch"
import PromoSection from "./components/PromoSection"
import DomesticTravelSection from "./components/DomesticTravelSection"
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ToursPage from "./pages/ToursPage"
import SalesOfficesPage from "./pages/SalesOfficesPage"
import AboutPage from "./pages/AboutPage"
import GoogleTranslate from "./components/GoogleTranslate"

function HomePage() {
  return (
    <div className="pt-20 max-w-7xl mx-auto">
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
    </BrowserRouter>
  )
}

export default App