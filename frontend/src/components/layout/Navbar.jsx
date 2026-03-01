import { Link } from "react-router-dom"
import GoogleTranslate from "../GoogleTranslate"
import LanguageSwitcher from "../LanguageSwitcher"
import { FaTelegramPlane } from "react-icons/fa"


function Header() {
  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* LOGO */}
        <h1 className="text-2xl font-bold tracking-wide">
          <span className="text-green-600">HOKAN</span>{" "}
          <span className="text-amber-500">TRAVEL</span>
        </h1>

        {/* MENU */}
        <nav className="hidden md:flex gap-10 text-gray-700 font-medium">
          <Link to="/sales-offices" className="hover:text-green-600 transition">
            Savdo ofislari
          </Link>
          <Link
  to="/about"
  className="hover:text-green-600 transition"
>
  Sayt Haqida
</Link>
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-6">
          <a
            href="tel:+998773910880"
            className="text-green-600 font-semibold hover:text-green-700 transition"
          >
            +998 93 217 11 17
          </a>
          <div className="flex items-center gap-4">
<div className="hidden">
  <GoogleTranslate />
</div>
  <LanguageSwitcher />
</div>

         <a
  href="https://t.me/hokantravel"
  target="_blank"
  rel="noopener noreferrer"
  className="w-10 h-10 bg-green-600 text-white 
             rounded-full flex items-center justify-center
             hover:bg-green-700 transition cursor-pointer"
>
  <FaTelegramPlane size={18} />
</a>
        </div>

      </div>
    </header>
  )
}

export default Header