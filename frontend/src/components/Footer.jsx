import { FaTelegramPlane, FaInstagram, FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa"
import { Link } from "react-router-dom"

const navLinks = [
  { to: "/", label: "Bosh sahifa" },
  { to: "/tours", label: "Turlar" },
  { to: "/sales-offices", label: "Savdo ofislari" },
  { to: "/about", label: "Biz haqimizda" },
]

const services = [
  "Ichki turizm",
  "Xalqaro sayohatlar",
  "Tur + Parvoz paketlari",
  "VIP xizmat",
  "Guruh sayohatlari",
]

const socials = [
  { icon: FaTelegramPlane, href: "https://t.me/hokantravel", label: "Telegram" },
  { icon: FaInstagram, href: "https://instagram.com/", label: "Instagram" },
  { icon: FaWhatsapp, href: "https://wa.me/998999591117", label: "WhatsApp" },
  { icon: FaPhoneAlt, href: "tel:+998932171117", label: "Telefon" },
]

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">

      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-black">H</span>
              </div>
              <span className="text-lg font-black">
                <span className="text-green-400">HOKAN</span>
                <span className="text-amber-400"> TRAVEL</span>
              </span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Biz bilan sayohat – bu yangi taassurotlar, qulaylik va yuqori darajadagi servis demakdir.
            </p>

            <div className="flex items-center gap-1.5 text-sm text-gray-400">
              <FaMapMarkerAlt size={13} className="text-green-500 flex-shrink-0" />
              Toshkent, O'zbekiston
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Navigatsiya
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-400 text-sm hover:text-green-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Xizmatlar
            </h4>
            <ul className="space-y-2.5">
              {services.map((s, i) => (
                <li key={i} className="text-gray-400 text-sm">{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Bog'lanish
            </h4>

            <a href="tel:+998932171117"
               className="flex items-center gap-2 text-sm text-gray-400 hover:text-green-400 mb-3 transition-colors">
              <FaPhoneAlt size={13} className="text-green-500" />
              +998 93 217 11 17
            </a>

            <a href="https://t.me/hokantravel" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 text-sm text-gray-400 hover:text-green-400 mb-6 transition-colors">
              <FaTelegramPlane size={13} className="text-green-500" />
              @hokantravel
            </a>

            <div className="flex gap-2">
              {socials.map((s, i) => {
                const Icon = s.icon
                return (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 bg-white/10 hover:bg-green-600 rounded-xl
                               flex items-center justify-center
                               transition-all duration-200 hover:scale-110"
                  >
                    <Icon size={15} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5
                        flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Hokan Travel. Barcha huquqlar himoyalangan.
          </p>
          <p className="text-gray-600 text-xs">
            O'zbekiston bo'ylab sayohatlar
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
