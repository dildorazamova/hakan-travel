import { useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { FaSearch, FaPlane, FaHotel, FaFire, FaChevronDown } from "react-icons/fa"

import CityModal from "../Search/modals/CityModal"
import CountryModal from "../Search/modals/CountryModal"
import DateModal from "../Search/modals/DateModal"
import NightsModal from "../Search/modals/NightsModal"
import TouristsModal from "../Search/modals/TouristsModal"

const tabs = [
  { label: "Tur + Parvoz", icon: FaPlane },
  { label: "Mehmonxona", icon: FaHotel },
  { label: "Aksiyalar", icon: FaFire },
]

function SearchField({ label, value, onClick, icon }) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left bg-white border border-gray-200 hover:border-green-400
                 rounded-xl px-4 py-3 transition-all duration-200
                 focus:outline-none focus:ring-2 focus:ring-green-400/30
                 hover:shadow-sm group"
    >
      <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-0.5">
        {label}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-gray-800 font-semibold text-sm truncate">{value}</span>
        <FaChevronDown size={12} className="text-gray-400 group-hover:text-green-500 transition flex-shrink-0 ml-2" />
      </div>
    </button>
  )
}

function AdvancedSearch() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState(0)

  const [openCity, setOpenCity] = useState(false)
  const [selectedCity, setSelectedCity] = useState("Toshkent")
  const [selectedCityId, setSelectedCityId] = useState(null)

  const [openCountry, setOpenCountry] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState("UAE")
  const [selectedCountryId, setSelectedCountryId] = useState(null)

  const [openDates, setOpenDates] = useState(false)
  const [selectedDates, setSelectedDates] = useState("Sana tanlang")

  const [openNights, setOpenNights] = useState(false)
  const [selectedNights, setSelectedNights] = useState("7 – 14")

  const [openTourists, setOpenTourists] = useState(false)
  const [selectedTourists, setSelectedTourists] = useState("2 kishi")

  const [hotelClass, setHotelClass] = useState(0)

  const handleSearch = () => {
    const params = new URLSearchParams()
    if (selectedCityId) params.append("city", selectedCityId)
    if (selectedCountryId) params.append("country", selectedCountryId)
    navigate(`/tours?${params.toString()}`)
  }

  return (
    <section className="relative z-20 px-4 sm:px-6 lg:px-8 -mt-10 mb-16">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] overflow-hidden">

          {/* Tabs */}
          <div className="flex border-b border-gray-100 bg-gray-50">
            {tabs.map((tab, i) => {
              const Icon = tab.icon
              return (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`flex items-center gap-2 px-5 py-4 text-sm font-medium transition-all duration-200 border-b-2 -mb-px ${
                    activeTab === i
                      ? "border-green-600 text-green-700 bg-white"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-white/60"
                  }`}
                >
                  <Icon size={14} />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              )
            })}
          </div>

          {/* Search Fields */}
          <div className="p-5 sm:p-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-3">

              <SearchField
                label="Jo'nash shahri"
                value={selectedCity}
                onClick={() => setOpenCity(true)}
              />

              <SearchField
                label="Mamlakat"
                value={selectedCountry}
                onClick={() => setOpenCountry(true)}
              />

              <SearchField
                label="Sanalar"
                value={selectedDates}
                onClick={() => setOpenDates(true)}
              />

              <SearchField
                label="Tunlar soni"
                value={selectedNights}
                onClick={() => setOpenNights(true)}
              />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mb-5">

              <SearchField
                label="Sayyohlar"
                value={selectedTourists}
                onClick={() => setOpenTourists(true)}
              />

              {/* Hotel stars */}
              <div className="bg-white border border-gray-200 rounded-xl px-4 py-3">
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1.5">
                  Mehmonxona sinfi
                </p>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setHotelClass(star === hotelClass ? 0 : star)}
                      className={`text-lg transition-colors duration-150 ${
                        star <= hotelClass ? "text-amber-400" : "text-gray-200 hover:text-amber-200"
                      }`}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>

              {/* Search button on md+ */}
              <button
                onClick={handleSearch}
                className="hidden lg:flex items-center justify-center gap-2
                           bg-green-600 hover:bg-green-700 text-white
                           rounded-xl font-semibold text-sm
                           transition-all duration-200 hover:shadow-lg hover:shadow-green-600/30
                           active:scale-95"
              >
                <FaSearch size={14} />
                Turlarni qidirish
              </button>
            </div>

            {/* Search button for mobile/tablet */}
            <button
              onClick={handleSearch}
              className="lg:hidden w-full flex items-center justify-center gap-2
                         bg-green-600 hover:bg-green-700 text-white
                         rounded-xl py-3.5 font-semibold text-sm
                         transition-all duration-200 hover:shadow-lg hover:shadow-green-600/30
                         active:scale-95"
            >
              <FaSearch size={14} />
              Turlarni qidirish
            </button>
          </div>
        </div>
      </div>

      {/* Modals */}
      <CityModal
        open={openCity}
        onClose={() => setOpenCity(false)}
        onSelect={(city) => {
          setSelectedCity(city.name)
          setSelectedCityId(city.id)
          setOpenCity(false)
        }}
      />
      <CountryModal
        open={openCountry}
        onClose={() => setOpenCountry(false)}
        onSelect={(country) => {
          setSelectedCountry(country.name)
          setSelectedCountryId(country.id)
        }}
      />
      <DateModal
        open={openDates}
        onClose={() => setOpenDates(false)}
        onSelect={(start, end) => setSelectedDates(`${start} - ${end}`)}
      />
      <NightsModal
        open={openNights}
        onClose={() => setOpenNights(false)}
        onSelect={(value) => setSelectedNights(value)}
      />
      <TouristsModal
        open={openTourists}
        onClose={() => setOpenTourists(false)}
        onSelect={(value) => setSelectedTourists(value)}
      />
    </section>
  )
}

export default AdvancedSearch
