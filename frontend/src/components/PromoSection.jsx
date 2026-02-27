import { useNavigate } from "react-router-dom"
import samarkandImg from "../assets/samarqand.png"
import bukharaImg from "../assets/buxoro.png"
import natureImg from "../assets/tabiat.png"

function PromoSection() {
  const navigate = useNavigate()

  return (
    <section className="px-6 mt-20 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* LEFT BIG CARD */}
        <div
          onClick={() => navigate("/tours")}
          className="lg:col-span-2 relative group overflow-hidden rounded-3xl cursor-pointer hover:scale-[1.02] transition-all duration-500"
        >
          <img
            src={samarkandImg}
            alt="Samarqand"
            className="w-full h-[450px] object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none"></div>

          <div className="absolute bottom-10 left-10 text-white pointer-events-none">
            <h2 className="text-5xl font-bold mb-4">
              Samarqand
            </h2>

            <div className="bg-green-600 px-6 py-3 rounded-full inline-block text-lg font-medium shadow-lg">
              Tarix va madaniyat sayohati
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-8">

          {/* TOP RIGHT CARD */}
          <div
            onClick={() => navigate("/tours")}
            className="relative group overflow-hidden rounded-3xl cursor-pointer hover:scale-[1.02] transition-all duration-500"
          >
            <img
              src={bukharaImg}
              alt="Buxoro"
              className="w-full h-[210px] object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none"></div>

            <div className="absolute bottom-6 left-6 text-white text-2xl font-semibold pointer-events-none">
              Buxoro tarixiy shahri
            </div>
          </div>

          {/* BOTTOM RIGHT CARD */}
          <div
            onClick={() => navigate("/tours")}
            className="relative group overflow-hidden rounded-3xl cursor-pointer hover:scale-[1.02] transition-all duration-500"
          >
            <img
              src={natureImg}
              alt="Uzbekistan Nature"
              className="w-full h-[210px] object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none"></div>

            <div className="absolute bottom-6 left-6 text-white text-2xl font-semibold pointer-events-none">
              O‘zbekiston milliy sayohatlari
            </div>
          </div>

        </div>
      </div>

      <div className="absolute -bottom-16 left-20 text-green-500 text-6xl rotate-12 opacity-70">
        ✈
      </div>
    </section>
  )
}

export default PromoSection