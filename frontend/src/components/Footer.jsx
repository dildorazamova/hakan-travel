import { FaTelegramPlane, FaInstagram, FaPhoneAlt } from "react-icons/fa"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="relative mt-24 px-4 sm:px-6 lg:px-8 pb-16">

      <div className="max-w-7xl mx-auto">

        <div className="
          relative
          bg-white/80 backdrop-blur-2xl
          border border-green-100
          shadow-2xl
          rounded-[36px]
          px-6 sm:px-10 lg:px-16
          py-14 sm:py-16
          overflow-hidden
        ">

          {/* Background Glow Effects */}
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px]
                          bg-green-200 rounded-full blur-[140px] opacity-30"></div>

          <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px]
                          bg-emerald-300 rounded-full blur-[140px] opacity-30"></div>

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* BRAND */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-green-900 mb-5 tracking-wide">
                Hokan Travel
              </h2>

              <p className="text-gray-600 text-sm leading-relaxed">
                Biz bilan sayohat – bu yangi taassurotlar, qulaylik va
                yuqori darajadagi servis demakdir.
              </p>
            </div>

            {/* NAVIGATION */}
            <div>
              <h3 className="font-semibold text-lg mb-5 text-gray-800">
                Navigatsiya
              </h3>

              <ul className="space-y-3 text-sm text-gray-600">
                <li>
                  <Link
                    to="/"
                    className="hover:text-green-700 transition duration-300 hover:translate-x-1 inline-block"
                  >
                    Bosh sahifa
                  </Link>
                </li>
                <li>
                  <Link
                    to="/tours"
                    className="hover:text-green-700 transition duration-300 hover:translate-x-1 inline-block"
                  >
                    Turlar
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-green-700 transition duration-300 hover:translate-x-1 inline-block"
                  >
                    Biz haqimizda
                  </Link>
                </li>
              </ul>
            </div>

            {/* SERVICES */}
            <div>
              <h3 className="font-semibold text-lg mb-5 text-gray-800">
                Xizmatlar
              </h3>

              <ul className="space-y-3 text-sm text-gray-600">
                <li>Ichki turizm</li>
                <li>Xalqaro sayohatlar</li>
                <li>VIP xizmat</li>
              </ul>
            </div>

            {/* CONTACT / SOCIAL */}
            <div>
              <h3 className="font-semibold text-lg mb-5 text-gray-800">
                Bog‘lanish
              </h3>

              <div className="flex gap-4">

                <a
                  href="https://t.me/hokantravel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center
                             rounded-full bg-green-100 text-green-700
                             shadow-md hover:shadow-xl
                             hover:scale-110
                             transition-all duration-300"
                >
                  <FaTelegramPlane />
                </a>

                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center
                             rounded-full bg-green-100 text-green-700
                             shadow-md hover:shadow-xl
                             hover:scale-110
                             transition-all duration-300"
                >
                  <FaInstagram />
                </a>

                <a
                  href="tel:+998932171117"
                  className="w-11 h-11 flex items-center justify-center
                             rounded-full bg-green-100 text-green-700
                             shadow-md hover:shadow-xl
                             hover:scale-110
                             transition-all duration-300"
                >
                  <FaPhoneAlt />
                </a>

              </div>
            </div>

          </div>

          {/* BOTTOM */}
          <div className="mt-14 pt-8 border-t border-green-100 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Hokan Travel. All rights reserved.
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer