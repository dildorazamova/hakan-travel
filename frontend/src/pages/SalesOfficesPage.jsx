import React from "react"
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa"

function SalesOfficesPage() {
  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-24">

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

        {/* LEFT SIDE */}
        <div className="space-y-8">

          {/* TITLE CARD */}
          <div className="
            bg-white
            rounded-3xl
            p-8 sm:p-10
            shadow-md hover:shadow-2xl
            transition-all duration-500
            border border-green-100
          ">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Sotuv ofislari
            </h1>

            <p className="text-gray-500 mb-6 leading-relaxed">
              Biz sizga yaqinmiz — istalgan vaqtda bog‘lanishingiz mumkin.
            </p>

            <button className="
              px-6 py-3
              rounded-full
              bg-green-600
              text-white font-semibold
              hover:bg-green-700
              hover:shadow-lg
              transition-all duration-300
            ">
              Bukhara ofisi
            </button>
          </div>

          {/* CONTACT CARD */}
          <div className="
            bg-white
            rounded-3xl
            p-8 sm:p-10
            shadow-md hover:shadow-2xl
            transition-all duration-500
            border border-green-100
            space-y-8
          ">

            {/* PHONE */}
            <div className="flex items-start gap-4">

              <div className="
                w-12 h-12
                rounded-full
                bg-green-600
                flex items-center justify-center
                text-white
                shadow-lg
              ">
                <FaPhoneAlt />
              </div>

              <div>
                <p className="text-gray-400 text-sm">
                  Call center
                </p>

                <a
                  href="tel:+998932171117"
                  className="text-xl sm:text-2xl font-bold text-gray-900 hover:text-green-600 transition"
                >
                  +998 93 217 11 17
                </a>

                <p className="text-gray-500 text-sm">
                  Mon – Fri, 09:00 – 18:00
                </p>
              </div>
            </div>

            {/* ADDRESS */}
            <div className="flex items-start gap-4">

              <div className="
                w-12 h-12
                rounded-full
                bg-emerald-500
                flex items-center justify-center
                text-white
                shadow-lg
              ">
                <FaMapMarkerAlt />
              </div>

              <div>
                <p className="text-gray-400 text-sm">
                  Asosiy savdo agentligi
                </p>

                <p className="text-lg sm:text-xl font-semibold text-gray-900">
                  Bahouddin Naqshband 5, Bukhara
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE MAP */}
        <div className="
          rounded-3xl
          overflow-hidden
          shadow-xl
          border border-green-100
          h-[350px] sm:h-[450px] lg:h-[520px]
          hover:shadow-2xl
          transition-all duration-500
        ">
          <iframe
            title="map"
            src="https://maps.google.com/maps?q=Bahouddin%20Naqshband%205,%20Bukhara&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0"
            allowFullScreen
          />
        </div>

      </div>

    </div>
  )
}

export default SalesOfficesPage