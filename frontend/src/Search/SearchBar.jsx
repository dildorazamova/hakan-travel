import { useState } from "react"
import "./search.css"

function SearchBar() {
  const [openCity, setOpenCity] = useState(false)

  const cities = [
    "Бухара",
    "Наманган",
    "Самарканд",
    "Ташкент",
    "Фергана"
  ]

  return (
    <div className="search-wrapper">

      {/* BUTTON */}
      <div
        className="search-card"
        onClick={() => setOpenCity(!openCity)}
      >
        <span className="label">ГОРОД ВЫЛЕТА</span>
        <span className="value">Ташкент</span>
      </div>

      {/* DROPDOWN MODAL */}
      {openCity && (
        <div className="dropdown">
          {cities.map((city, index) => (
            <div
              key={index}
              className="dropdown-item"
              onClick={() => {
                setOpenCity(false)
              }}
            >
              {city}
            </div>
          ))}
        </div>
      )}

    </div>
  )
}

export default SearchBar