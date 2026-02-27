import { FaTelegramPlane, FaInstagram, FaPhoneAlt } from "react-icons/fa"

function Footer() {
  return (
    <footer className="relative mt-20 px-2 pb-16">

      <div className="max-w-7xl mx-auto">

        <div className="
          relative
          bg-white/70 backdrop-blur-xl
          border border-green-200
          shadow-[0_20px_60px_rgba(0,0,0,0.08)]
          rounded-[40px]
          px-12 py-20
          overflow-hidden
        ">

          {/* Decorative Glow */}
          <div className="absolute -top-32 -left-32 w-[400px] h-[400px]
                          bg-green-200 rounded-full blur-[120px] opacity-40"></div>

          <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px]
                          bg-emerald-300 rounded-full blur-[120px] opacity-40"></div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-16">

            {/* Brand */}
            <div>
              <h2 className="text-3xl font-bold text-green-900 mb-6 tracking-wide">
                Hakan Travel
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Biz bilan sayohat qilish – bu yangi taassurotlar, qulaylik va
                yuqori darajadagi servis demakdir.
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="font-semibold text-lg mb-6 text-gray-800">
                Navigatsiya
              </h3>
              <ul className="space-y-4 text-sm text-gray-600">
                <li className="hover:text-green-700 transition cursor-pointer hover:translate-x-1 duration-300">
                  Bosh sahifa
                </li>
                <li className="hover:text-green-700 transition cursor-pointer hover:translate-x-1 duration-300">
                  Turlar
                </li>
                <li className="hover:text-green-700 transition cursor-pointer hover:translate-x-1 duration-300">
                  Biz haqimizda
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-lg mb-6 text-gray-800">
                Xizmatlar
              </h3>
              <ul className="space-y-4 text-sm text-gray-600">
                <li>Ichki turizm</li>
                <li>Xalqaro sayohatlar</li>
                <li>VIP xizmat</li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="font-semibold text-lg mb-6 text-gray-800">
                Bog‘lanish
              </h3>

              <div className="flex gap-4">

                {/* Telegram */}
                <div className="
                  w-12 h-12
                  flex items-center justify-center
                  rounded-full
                  bg-green-100
                  text-green-700
                  shadow-lg
                  hover:shadow-xl
                  hover:scale-110
                  transition-all duration-300
                  cursor-pointer
                ">
                  <FaTelegramPlane />
                </div>

                {/* Instagram */}
                <div className="
                  w-12 h-12
                  flex items-center justify-center
                  rounded-full
                  bg-green-100
                  text-green-700
                  shadow-lg
                  hover:shadow-xl
                  hover:scale-110
                  transition-all duration-300
                  cursor-pointer
                ">
                  <FaInstagram />
                </div>

                {/* Phone */}
                <div className="
                  w-12 h-12
                  flex items-center justify-center
                  rounded-full
                  bg-green-100
                  text-green-700
                  shadow-lg
                  hover:shadow-xl
                  hover:scale-110
                  transition-all duration-300
                  cursor-pointer
                ">
                  <FaPhoneAlt />
                </div>

              </div>
            </div>

          </div>

          {/* Bottom */}
          <div className="mt-16 pt-8 border-t border-green-200 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Hakan Travel. All rights reserved.
          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer