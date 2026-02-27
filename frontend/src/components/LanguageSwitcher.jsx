import { useState } from "react"

function LanguageSwitcher() {
  const [open, setOpen] = useState(false)

 const changeLanguage = (lang) => {
  const select = document.querySelector(".goog-te-combo")
  if (select) {
    select.value = lang
    select.dispatchEvent(new Event("change"))
  }
  setOpen(false)
}

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-green-700 transition"
      >
        🌐 Til
      </button>

      {open && (
        <div className="absolute right-0 mt-2 bg-white rounded-2xl shadow-xl overflow-hidden border border-green-100">
          <button
            onClick={() => changeLanguage("uz")}
            className="block px-6 py-3 hover:bg-green-50 w-full text-left"
          >
            🇺🇿 O‘zbek
          </button>

          <button
            onClick={() => changeLanguage("ru")}
            className="block px-6 py-3 hover:bg-green-50 w-full text-left"
          >
            🇷🇺 Русский
          </button>

          <button
            onClick={() => changeLanguage("en")}
            className="block px-6 py-3 hover:bg-green-50 w-full text-left"
          >
            🇬🇧 English
          </button>
        </div>
      )}
    </div>
  )
}

export default LanguageSwitcher