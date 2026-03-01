import { useState, useRef, useEffect } from "react"

function AdvancedSearch() {
  const [openCity, setOpenCity] = useState(false)
  const [selectedCity, setSelectedCity] = useState("Tashkent")
  const dropdownRef = useRef(null)

  const cities = ["Bukhara", "Namangan", "Samarkand", "Tashkent", "Fergana"]

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenCity(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () =>
      document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <section className="relative z-10 mt-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto 
                      bg-white 
                      rounded-3xl 
                      p-5 sm:p-8
                      shadow-xl 
                      border border-green-100
                      transition-all duration-500
                      hover:shadow-2xl">

        {/* TABS */}
        <div className="flex gap-6 sm:gap-8 mb-6 
                        text-gray-700 font-medium text-sm 
                        overflow-x-auto scrollbar-hide">
          {["Tours with Flight", "Hotels", "Hot Deals"].map((item, i) => (
            <label key={i} className="flex items-center gap-2 cursor-pointer whitespace-nowrap">
              <input
                type="radio"
                name="type"
                defaultChecked={i === 0}
                className="accent-green-800 w-4 h-4"
              />
              {item}
            </label>
          ))}
        </div>

        {/* FIRST ROW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 mb-6">

          {/* Departure */}
          <div className="relative col-span-1" ref={dropdownRef}>
            <div
              onClick={() => setOpenCity(!openCity)}
              className="bg-[#F6F9F6] rounded-xl p-4 cursor-pointer
                         border border-green-100
                         hover:border-green-400 hover:shadow-md
                         transition-all duration-300 h-full"
            >
              <p className="text-[10px] text-gray-500 uppercase">
                Departure
              </p>

              <div className="flex justify-between items-center mt-1">
                <p className="font-semibold text-base text-gray-900">
                  {selectedCity}
                </p>

                <span
                  className={`text-green-800 transition-transform duration-300 ${
                    openCity ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </div>
            </div>

            {/* Dropdown */}
            <div
              className={`absolute left-0 mt-2 w-full bg-white rounded-xl shadow-xl
                          border border-green-100 overflow-hidden
                          transition-all duration-300 origin-top z-50
                          ${
                            openCity
                              ? "opacity-100 scale-100 translate-y-0"
                              : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                          }`}
            >
              {cities.map((city, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setSelectedCity(city)
                    setOpenCity(false)
                  }}
                  className="px-4 py-3 text-sm text-gray-700
                             hover:bg-green-50 hover:text-green-800
                             cursor-pointer transition"
                >
                  {city}
                </div>
              ))}
            </div>
          </div>

          {/* Static Cards */}
          {[
            { label: "Country", value: "UAE" },
            { label: "Dates", value: "27 Feb – 8 Mar" },
            { label: "Nights", value: "7 – 14" },
            { label: "Tourists", value: "2 Adults" }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#F6F9F6] rounded-xl p-4
                         border border-green-100
                         hover:border-green-400 hover:shadow-md
                         transition-all duration-300 h-full"
            >
              <p className="text-[10px] text-gray-500 uppercase">
                {item.label}
              </p>
              <p className="font-semibold text-base text-gray-900 mt-1">
                {item.value}
              </p>
            </div>
          ))}

          {/* SEARCH BUTTON */}
          <button
            className="bg-green-800 hover:bg-green-900
                       text-white rounded-xl
                       flex items-center justify-center
                       text-xl font-semibold
                       transition-all duration-300
                       hover:shadow-xl hover:-translate-y-1
                       h-full min-h-[60px]"
          >
            🔍
          </button>
        </div>

        {/* SECOND ROW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">

          <div className="bg-[#F6F9F6] rounded-xl p-4
                          border border-green-100
                          flex justify-between text-sm
                          hover:border-green-400 hover:shadow-md
                          transition-all duration-300">
            <span>Hotel Class</span>
            <span className="text-yellow-600">★★★★★</span>
          </div>

          {["Resort", "Meals", "Rating", "Filters"].map((item, i) => (
            <div
              key={i}
              className="bg-[#F6F9F6] rounded-xl p-4
                         border border-green-100
                         flex justify-between text-sm
                         hover:border-green-400 hover:shadow-md
                         transition-all duration-300"
            >
              <span>{item}</span>
              <span className="text-green-800">▼</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AdvancedSearch