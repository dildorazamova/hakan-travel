import { useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import CityModal from "../Search/modals/CityModal"
import CountryModal from "../Search/modals/CountryModal"
import DateModal from "../Search/modals/DateModal"
import NightsModal from "../Search/modals/NightsModal"
import TouristsModal from "../Search/modals/TouristsModal"

function AdvancedSearch() {

  const navigate = useNavigate()

  // CITY
  const [openCity, setOpenCity] = useState(false)
  const [selectedCity, setSelectedCity] = useState("Tashkent")
  const [selectedCityId, setSelectedCityId] = useState(null)

  // COUNTRY
  const [openCountry, setOpenCountry] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState("UAE")
  const [selectedCountryId, setSelectedCountryId] = useState(null)

  // OTHER STATES
  const [openDates, setOpenDates] = useState(false)
  const [selectedDates, setSelectedDates] = useState("Select dates")

  const [openNights, setOpenNights] = useState(false)
  const [selectedNights, setSelectedNights] = useState("7 – 14")

  const [openTourists, setOpenTourists] = useState(false)
  const [selectedTourists, setSelectedTourists] = useState("2 Adults")

  const [hotelClass, setHotelClass] = useState(0)

  const dropdownRef = useRef(null)

  // click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenCity(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)

  }, [])

  // 🔥 SEARCH FUNCTION (ENG MUHIM)
  const handleSearch = () => {
    let params = new URLSearchParams()

    if (selectedCityId) {
      params.append("city", selectedCityId)
    }

    if (selectedCountryId) {
      params.append("country", selectedCountryId)
    }

    navigate(`/tours?${params.toString()}`)
  }

  return (

    <section className="relative z-10 mt-8 px-4 sm:px-6 lg:px-8">

      <div className="max-w-7xl mx-auto bg-white rounded-3xl p-6 shadow-xl border border-green-100">

        {/* TABS */}
        <div className="flex gap-6 mb-6 text-gray-700 font-medium text-sm flex-wrap">
          {["Tours with Flight","Hotels","Hot Deals"].map((item,i)=>(
            <label key={i} className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="type" defaultChecked={i===0} className="accent-green-800" />
              {item}
            </label>
          ))}
        </div>

        {/* SEARCH GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          {/* CITY */}
          <div onClick={()=>setOpenCity(true)}
            className="bg-[#F6F9F6] rounded-xl p-3 cursor-pointer border border-green-100 hover:border-green-400">
            <p className="text-xs text-gray-500 uppercase">Departure</p>
            <div className="flex justify-between mt-1">
              <p className="font-semibold">{selectedCity}</p>
              <span>▼</span>
            </div>
          </div>

          {/* COUNTRY */}
          <div onClick={()=>setOpenCountry(true)}
            className="bg-[#F6F9F6] rounded-xl p-3 cursor-pointer border border-green-100 hover:border-green-400">
            <p className="text-xs text-gray-500 uppercase">Country</p>
            <p className="font-semibold">{selectedCountry}</p>
          </div>

          {/* DATES */}
          <div onClick={()=>setOpenDates(true)}
            className="bg-[#F6F9F6] rounded-xl p-3 cursor-pointer border border-green-100 hover:border-green-400">
            <p className="text-xs text-gray-500 uppercase">Dates</p>
            <p className="font-semibold">{selectedDates}</p>
          </div>

          {/* NIGHTS */}
          <div onClick={()=>setOpenNights(true)}
            className="bg-[#F6F9F6] rounded-xl p-3 cursor-pointer border border-green-100 hover:border-green-400">
            <p className="text-xs text-gray-500 uppercase">Nights</p>
            <p className="font-semibold">{selectedNights}</p>
          </div>

        </div>

        {/* FILTER ROW */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">

          {/* TOURISTS */}
          <div onClick={()=>setOpenTourists(true)}
            className="bg-[#F6F9F6] rounded-xl p-4 flex justify-between items-center border border-green-100 cursor-pointer hover:border-green-400">
            <span className="font-semibold">Tourists</span>
            <span>{selectedTourists}</span>
          </div>

          {/* HOTEL CLASS */}
          <div className="bg-[#F6F9F6] rounded-xl p-4 flex items-center justify-between border border-green-100">
            <span className="font-semibold">Hotel Class</span>

            <div className="flex gap-1 text-2xl">
              {[1,2,3,4,5].map((star)=>(
                <span
                  key={star}
                  onClick={()=>setHotelClass(star)}
                  className={`cursor-pointer ${
                    star<=hotelClass ? "text-yellow-500" : "text-gray-300"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* 🔥 SEARCH BUTTON (OXIRIDA) */}
        <button
          onClick={handleSearch}
          className="w-full mt-6 bg-green-800 hover:bg-green-900 text-white rounded-xl py-4 text-lg font-semibold transition"
        >
          🔍 Search Tours
        </button>

      </div>

      {/* MODALS */}

      <CityModal
        open={openCity}
        onClose={()=>setOpenCity(false)}
        onSelect={(city)=>{
          setSelectedCity(city.name)
          setSelectedCityId(city.id)
          setOpenCity(false)
        }}
      />

      <CountryModal
        open={openCountry}
        onClose={()=>setOpenCountry(false)}
        onSelect={(country)=>{
          setSelectedCountry(country.name)
          setSelectedCountryId(country.id)
        }}
      />

      <DateModal
        open={openDates}
        onClose={()=>setOpenDates(false)}
        onSelect={(start,end)=>setSelectedDates(`${start} - ${end}`)}
      />

      <NightsModal
        open={openNights}
        onClose={()=>setOpenNights(false)}
        onSelect={(value)=>setSelectedNights(value)}
      />

      <TouristsModal
        open={openTourists}
        onClose={()=>setOpenTourists(false)}
        onSelect={(value)=>setSelectedTourists(value)}
      />

    </section>
  )
}

export default AdvancedSearch