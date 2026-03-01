import { useNavigate } from "react-router-dom"
import samarkandImg from "../assets/samarqand.png"
import bukharaImg from "../assets/buxoro.png"
import natureImg from "../assets/tabiat.png"

function PromoSection() {
  const navigate = useNavigate()

  return (
    <section className="px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

        {/* LEFT BIG CARD */}
        <div
          onClick={() => navigate("/tours")}
          className="lg:col-span-2 relative group overflow-hidden rounded-3xl cursor-pointer
                     shadow-lg hover:shadow-2xl
                     transition-all duration-500 hover:-translate-y-2"
        >
          <img
            src={samarkandImg}
            alt="Samarqand"
            className="w-full h-[300px] sm:h-[380px] lg:h-[450px]
                       object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t
                          from-black/80 via-black/30 to-transparent" />

          <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 text-white">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              Samarqand
            </h2>

            <div className="bg-green-600 px-4 sm:px-6 py-2 sm:py-3 
                            rounded-full inline-block 
                            text-sm sm:text-lg font-medium 
                            shadow-xl
                            group-hover:scale-105
                            transition">
              Tarix va madaniyat sayohati
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-6 lg:gap-8">

          {/* TOP RIGHT */}
          <div
            onClick={() => navigate("/tours")}
            className="relative group overflow-hidden rounded-3xl cursor-pointer
                       shadow-md hover:shadow-2xl
                       transition-all duration-500 hover:-translate-y-2"
          >
            <img
              src={bukharaImg}
              alt="Buxoro"
              className="w-full h-[200px] sm:h-[220px]
                         object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

            <div className="absolute bottom-5 left-5 text-white text-lg sm:text-2xl font-semibold">
              Buxoro tarixiy shahri
            </div>
          </div>

          {/* BOTTOM RIGHT */}
          <div
            onClick={() => navigate("/tours")}
            className="relative group overflow-hidden rounded-3xl cursor-pointer
                       shadow-md hover:shadow-2xl
                       transition-all duration-500 hover:-translate-y-2"
          >
            <img
              src={natureImg}
              alt="Nature"
              className="w-full h-[200px] sm:h-[220px]
                         object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

            <div className="absolute bottom-5 left-5 text-white text-lg sm:text-2xl font-semibold">
              O‘zbekiston milliy sayohatlari
            </div>
          </div>

        </div>
      </div>

      {/* Decorative plane (responsive) */}
      <div className="hidden lg:block absolute -bottom-12 left-10 
                      text-green-500 text-5xl rotate-12 opacity-60">
        ✈
      </div>
    </section>
  )
}

export default PromoSection