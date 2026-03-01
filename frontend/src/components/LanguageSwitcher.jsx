import { useState, useRef, useEffect } from "react"
import { FaChevronDown } from "react-icons/fa"

function LanguageSwitcher() {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  const changeLanguage = (lang) => {
    const select = document.querySelector(".goog-te-combo")
    if (select) {
      select.value = lang
      select.dispatchEvent(new Event("change"))
    }
    setOpen(false)
  }

  // Outside click yopish
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={ref}>

      {/* BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="
          flex items-center gap-2
          bg-green-600 text-white
          px-4 py-2 sm:px-5 sm:py-2.5
          rounded-full
          shadow-md hover:shadow-xl
          hover:bg-green-700
          transition-all duration-300
          text-sm sm:text-base
        "
      >
        🌐
        <span className="hidden sm:inline">Til</span>

        <FaChevronDown
          className={`text-xs transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* DROPDOWN */}
      <div
        className={`
          absolute right-0 mt-3 w-44
          bg-white rounded-2xl shadow-2xl
          border border-green-100
          overflow-hidden
          transition-all duration-300 origin-top
          ${
            open
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
          }
        `}
      >
        <button
          onClick={() => changeLanguage("uz")}
          className="flex items-center gap-3 px-5 py-3 w-full text-left
                     hover:bg-green-50 transition"
        >
          🇺🇿 O‘zbek
        </button>

        <button
          onClick={() => changeLanguage("ru")}
          className="flex items-center gap-3 px-5 py-3 w-full text-left
                     hover:bg-green-50 transition"
        >
          🇷🇺 Русский
        </button>

        <button
          onClick={() => changeLanguage("en")}
          className="flex items-center gap-3 px-5 py-3 w-full text-left
                     hover:bg-green-50 transition"
        >
          🇬🇧 English
        </button>
      </div>
    </div>
  )
}

export default LanguageSwitcher