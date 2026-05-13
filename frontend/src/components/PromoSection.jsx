import { useNavigate } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa"
import samarkandImg from "../assets/samarqand.png"
import bukharaImg from "../assets/buxoro.png"
import natureImg from "../assets/tabiat.png"

function PromoCard({ image, title, subtitle, large, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`relative group overflow-hidden rounded-2xl cursor-pointer
                  shadow-sm hover:shadow-xl transition-all duration-500
                  ${large ? "lg:row-span-2" : ""}`}
    >
      <img
        src={image}
        alt={title}
        className={`w-full object-cover transition-transform duration-700 group-hover:scale-105
                    ${large ? "h-[280px] sm:h-[340px] lg:h-full lg:min-h-[420px]" : "h-[180px] sm:h-[200px]"}`}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-green-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
        <p className="text-green-300 text-xs font-semibold uppercase tracking-widest mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {subtitle}
        </p>
        <div className="flex items-end justify-between">
          <h3 className={`text-white font-bold leading-tight ${large ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"}`}>
            {title}
          </h3>
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center
                          opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0
                          transition-all duration-300 flex-shrink-0 ml-3">
            <FaArrowRight size={12} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  )
}

function PromoSection() {
  const navigate = useNavigate()
  const go = () => navigate("/tours")

  return (
    <section className="px-4 sm:px-6 lg:px-8 mb-20">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-green-600 text-sm font-semibold uppercase tracking-wider mb-2">
              Mashhur yo'nalishlar
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              O'zbekistonning go'zal shaharlari
            </h2>
          </div>
          <button
            onClick={go}
            className="hidden sm:flex items-center gap-2 text-sm text-green-600 font-semibold
                       hover:text-green-700 transition-colors"
          >
            Barchasini ko'rish
            <FaArrowRight size={13} />
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-4">

          <div className="sm:col-span-2 lg:col-span-2 lg:row-span-2">
            <PromoCard
              image={samarkandImg}
              title="Samarqand"
              subtitle="Tarix va madaniyat"
              large
              onClick={go}
            />
          </div>

          <PromoCard
            image={bukharaImg}
            title="Buxoro tarixiy shahri"
            subtitle="Qadimiy shahar"
            onClick={go}
          />

          <PromoCard
            image={natureImg}
            title="O'zbekiston milliy sayohatlari"
            subtitle="Tabiat va dam olish"
            onClick={go}
          />
        </div>

        {/* Mobile "see all" button */}
        <button
          onClick={go}
          className="sm:hidden w-full mt-4 flex items-center justify-center gap-2
                     text-sm text-green-600 font-semibold border border-green-200
                     hover:bg-green-50 rounded-xl py-3 transition"
        >
          Barchasini ko'rish
          <FaArrowRight size={13} />
        </button>
      </div>
    </section>
  )
}

export default PromoSection
