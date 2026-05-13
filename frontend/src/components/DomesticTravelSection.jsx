import { useNavigate } from "react-router-dom"
import { FaArrowRight, FaMountain, FaLandmark, FaMosque, FaWater, FaUsers, FaHeart } from "react-icons/fa"

const categories = [
  {
    title: "Tog' Sayohatlari",
    description: "Baland tog'lar va go'zal manzaralar",
    icon: FaMountain,
    image: "https://i0.wp.com/travel-vibe.co.uk/wp-content/uploads/2025/05/10-Epic-Mountain-Hiking-Holidays-in-Europe-That-Will-Take-Your-Breath-Away-1.-The-Dolomites-Italy.webp?ssl=1",
    color: "from-blue-900/80"
  },
  {
    title: "Tarixiy Shaharlar",
    description: "Qadimiy me'moriy yodgorliklar",
    icon: FaLandmark,
    image: "https://i.pinimg.com/736x/1c/a2/f6/1ca2f62c2b06162478ddb723f549bb71.jpg",
    color: "from-amber-900/80"
  },
  {
    title: "Ziyorat Turizmi",
    description: "Muqaddas qadamjolar ziyorati",
    icon: FaMosque,
    image: "https://i.pinimg.com/1200x/2a/51/da/2a51daad63516788ec1ae9a78aa37c54.jpg",
    color: "from-emerald-900/80"
  },
  {
    title: "Ko'l va Dam Olish",
    description: "Suv bo'yida yoqimli dam olish",
    icon: FaWater,
    image: "https://i.pinimg.com/736x/17/25/12/1725120658754d3eeec9dadec80ba0e5.jpg",
    color: "from-cyan-900/80"
  },
  {
    title: "Oilaviy Dam Olish",
    description: "Oila bilan unutilmas sayohat",
    icon: FaHeart,
    image: "https://i.pinimg.com/1200x/5d/57/05/5d5705a9ada2a4593d03c2737d2a2450.jpg",
    color: "from-rose-900/80"
  },
  {
    title: "Do'stlar bilan Sayohat",
    description: "Guruh sayohatlari va sarguzashtlar",
    icon: FaUsers,
    image: "https://i.pinimg.com/736x/55/77/a9/5577a9f0197956e710b1b7df449df784.jpg",
    color: "from-purple-900/80"
  }
]

function DomesticTravelSection() {
  const navigate = useNavigate()

  return (
    <section className="px-4 sm:px-6 lg:px-8 mb-20">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-green-600 text-sm font-semibold uppercase tracking-wider mb-2">
              Ichki turizm
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Yo'nalishlarni tanlang
            </h2>
          </div>
          <button
            onClick={() => navigate("/tours")}
            className="hidden sm:flex items-center gap-2 text-sm text-green-600 font-semibold
                       hover:text-green-700 transition-colors"
          >
            Barcha turlar
            <FaArrowRight size={13} />
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {categories.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                onClick={() => navigate("/tours")}
                className="relative group overflow-hidden rounded-2xl cursor-pointer
                           aspect-[4/3] shadow-sm hover:shadow-xl
                           transition-all duration-400 hover:-translate-y-1"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover
                             transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-t ${item.color} via-transparent to-transparent`} />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 bg-white/20 backdrop-blur-sm rounded-lg
                                    flex items-center justify-center border border-white/20">
                      <Icon size={13} className="text-white" />
                    </div>
                  </div>
                  <h3 className="text-white font-bold text-base sm:text-lg leading-tight mb-1">
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-xs font-light opacity-0 group-hover:opacity-100
                                translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    {item.description}
                  </p>
                </div>

                {/* Arrow button on hover */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm
                                rounded-full flex items-center justify-center border border-white/20
                                opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100
                                transition-all duration-300">
                  <FaArrowRight size={12} className="text-white" />
                </div>
              </div>
            )
          })}
        </div>

        {/* Mobile see all */}
        <button
          onClick={() => navigate("/tours")}
          className="sm:hidden w-full mt-5 flex items-center justify-center gap-2
                     text-sm text-green-600 font-semibold border border-green-200
                     hover:bg-green-50 rounded-xl py-3 transition"
        >
          Barcha turlar
          <FaArrowRight size={13} />
        </button>
      </div>
    </section>
  )
}

export default DomesticTravelSection
