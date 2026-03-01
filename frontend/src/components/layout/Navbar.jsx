import { useState } from "react"
import { Link } from "react-router-dom"
import GoogleTranslate from "../GoogleTranslate"
import LanguageSwitcher from "../LanguageSwitcher"
import { FaTelegramPlane, FaBars, FaTimes } from "react-icons/fa"

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full bg-white/80 backdrop-blur-md shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* LOGO */}
        <h1 className="text-2xl font-bold tracking-wide cursor-pointer">
          <span className="text-green-600">HOKAN</span>{" "}
          <span className="text-amber-500">TRAVEL</span>
        </h1>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex gap-10 text-gray-700 font-medium">
          <Link
            to="/sales-offices"
            className="hover:text-green-600 transition duration-300"
          >
            Savdo ofislari
          </Link>

          <Link
            to="/about"
            className="hover:text-green-600 transition duration-300"
          >
            Sayt haqida
          </Link>
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* PHONE (hidden small screens) */}
          <a
            href="tel:+998932171117"
            className="hidden lg:block text-green-600 font-semibold hover:text-green-700 transition duration-300"
          >
            +998 93 217 11 17
          </a>

          <LanguageSwitcher />

          {/* TELEGRAM BUTTON PREMIUM */}
          <a
            href="https://t.me/hokantravel"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-green-600 text-white 
                       rounded-full flex items-center justify-center
                       shadow-md hover:shadow-xl
                       hover:scale-110 transition-all duration-300"
          >
            <FaTelegramPlane size={18} />
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-gray-700 text-xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-6 space-y-4 animate-fadeIn">
          <Link
            to="/sales-offices"
            onClick={() => setIsOpen(false)}
            className="block text-gray-700 hover:text-green-600 transition"
          >
            Savdo ofislari
          </Link>

          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="block text-gray-700 hover:text-green-600 transition"
          >
            Sayt haqida
          </Link>

          <a
            href="tel:+998932171117"
            className="block text-green-600 font-semibold"
          >
            +998 93 217 11 17
          </a>
        </div>
      )}
    </header>
  )
}

export default Header