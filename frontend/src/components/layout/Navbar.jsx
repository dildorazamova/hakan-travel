import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import LanguageSwitcher from "../LanguageSwitcher"
import {
  FaTelegramPlane, FaBars, FaTimes,
  FaPhoneAlt, FaInstagram, FaWhatsapp,
  FaPlane, FaChevronDown
} from "react-icons/fa"

const navLinks = [
  { to: "/", label: "Bosh sahifa" },
  { to: "/tours", label: "Turlar" },
  { to: "/sales-offices", label: "Savdo ofislari" },
  { to: "/about", label: "Biz haqimizda" },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <header className={`w-full fixed top-0 left-0 z-50 transition-shadow duration-300 ${scrolled ? "shadow-lg" : ""}`}>

      {/* ── TOP BAR ── */}
      <div className="bg-green-700 text-white hidden md:block">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-9 text-xs">

          {/* Left: contacts */}
          <div className="flex items-center gap-5">
            <a href="tel:+998932171117"
               className="flex items-center gap-1.5 hover:text-green-200 transition-colors">
              <FaPhoneAlt size={11} />
              +998 93 217 11 17
            </a>
            <span className="text-green-500">|</span>
            <a href="https://t.me/hokantravel" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-1.5 hover:text-green-200 transition-colors">
              <FaTelegramPlane size={12} />
              @hokantravel
            </a>
          </div>

          {/* Right: socials + slogan */}
          <div className="flex items-center gap-4">
            <span className="text-green-300 italic text-xs">
              O'zbekiston bo'ylab sayohatlar
            </span>
            <div className="flex items-center gap-2">
              <a href="https://t.me/hokantravel" target="_blank" rel="noopener noreferrer"
                 className="hover:text-green-200 transition-colors">
                <FaTelegramPlane size={13} />
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"
                 className="hover:text-green-200 transition-colors">
                <FaInstagram size={13} />
              </a>
              <a href="https://wa.me/998999591117" target="_blank" rel="noopener noreferrer"
                 className="hover:text-green-200 transition-colors">
                <FaWhatsapp size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN NAV ── */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* LOGO */}
            <Link to="/" className="flex items-center gap-2.5 flex-shrink-0 group">
              <div className="relative w-9 h-9 bg-gradient-to-br from-green-600 to-green-700
                              rounded-xl flex items-center justify-center shadow-md
                              group-hover:shadow-green-400/40 transition-shadow duration-300">
                <FaPlane size={16} className="text-white -rotate-45" />
              </div>
              <div className="leading-none">
                <span className="block text-base font-black tracking-tight">
                  <span className="text-green-700">HOKAN</span>
                  <span className="text-amber-500"> TRAVEL</span>
                </span>
                <span className="block text-[10px] text-gray-400 font-medium tracking-widest uppercase mt-0.5">
                  Sayohat agentligi
                </span>
              </div>
            </Link>

            {/* CENTER NAV */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const active = location.pathname === link.to
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200
                                after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5
                                after:rounded-full after:transition-all after:duration-200
                                ${active
                                  ? "text-green-700 after:bg-green-600 after:opacity-100"
                                  : "text-gray-600 hover:text-green-700 after:bg-green-600 after:opacity-0 hover:after:opacity-100"
                                }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-2 lg:gap-3">

              {/* Phone - md only */}
              <a href="tel:+998932171117"
                 className="hidden md:lg:hidden xl:flex lg:hidden items-center gap-1.5
                            text-sm text-gray-600 font-medium hover:text-green-700 transition-colors">
                <FaPhoneAlt size={12} className="text-green-600" />
                +998 93 217 11 17
              </a>

              <div className="hidden sm:block">
                <LanguageSwitcher />
              </div>

              {/* CTA button */}
              <Link
                to="/tours"
                className="hidden md:flex items-center gap-2
                           bg-green-600 hover:bg-green-700 text-white
                           px-4 py-2.5 rounded-xl text-sm font-semibold
                           transition-all duration-200
                           hover:shadow-lg hover:shadow-green-600/30
                           active:scale-95"
              >
                <FaPlane size={12} className="-rotate-45" />
                Tur topish
              </Link>

              {/* Telegram icon */}
              <a
                href="https://t.me/hokantravel"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#229ED9] hover:bg-[#1a8bc4] text-white
                           rounded-xl flex items-center justify-center
                           transition-all duration-200 hover:scale-105 shadow-sm"
              >
                <FaTelegramPlane size={15} />
              </a>

              {/* Mobile burger */}
              <button
                className="lg:hidden w-9 h-9 flex items-center justify-center
                           text-gray-600 hover:text-green-700 hover:bg-green-50 rounded-xl transition"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Menu"
              >
                {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── MOBILE MENU ── */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-white border-b border-gray-100 ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 space-y-1">
          {navLinks.map((link) => {
            const active = location.pathname === link.to
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition ${
                  active
                    ? "bg-green-50 text-green-700"
                    : "text-gray-600 hover:bg-gray-50 hover:text-green-700"
                }`}
              >
                {link.label}
              </Link>
            )
          })}

          <div className="pt-2 flex items-center justify-between px-4">
            <a href="tel:+998932171117"
               className="flex items-center gap-2 text-sm font-semibold text-green-700">
              <FaPhoneAlt size={13} />
              +998 93 217 11 17
            </a>
            <LanguageSwitcher />
          </div>

          <Link
            to="/tours"
            className="flex items-center justify-center gap-2 mx-4 mt-2
                       bg-green-600 text-white rounded-xl py-3 text-sm font-semibold"
          >
            <FaPlane size={12} className="-rotate-45" />
            Tur topish
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar
