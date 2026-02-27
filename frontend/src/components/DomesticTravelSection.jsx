import { useNavigate } from "react-router-dom"

function DomesticTravelSection() {
  const navigate = useNavigate()

  const categories = [
    {
      title: "Tog‘ Sayohatlari",
      image: "https://i0.wp.com/travel-vibe.co.uk/wp-content/uploads/2025/05/10-Epic-Mountain-Hiking-Holidays-in-Europe-That-Will-Take-Your-Breath-Away-1.-The-Dolomites-Italy.webp?ssl=1"
    },
    {
      title: "Tarixiy Shaharlar",
      image: "https://i.pinimg.com/736x/1c/a2/f6/1ca2f62c2b06162478ddb723f549bb71.jpg"
    },
    {
      title: "Ziyorat Turizmi",
      image: "https://i.pinimg.com/1200x/2a/51/da/2a51daad63516788ec1ae9a78aa37c54.jpg"
    },
    {
      title: "Ko‘l va Dam Olish Maskanlari",
      image: "https://i.pinimg.com/736x/17/25/12/1725120658754d3eeec9dadec80ba0e5.jpg"
    },
    {
      title: "Oilaviy Dam Olish",
      image: "https://i.pinimg.com/1200x/5d/57/05/5d5705a9ada2a4593d03c2737d2a2450.jpg"
    },
    {
      title: "Do‘stlar bilan Sayohat",
      image: "https://i.pinimg.com/736x/55/77/a9/5577a9f0197956e710b1b7df449df784.jpg"
    }
  ]

  return (
    <section className="px-6 mt-32 mb-24"> {/* 👈 pastga tushirdik */}
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-14 text-gray-900 text-center">
          Ichki turizm yo‘nalishlari
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {categories.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate("/tours")}
              className="relative group overflow-hidden rounded-3xl cursor-pointer
                         shadow-lg hover:shadow-2xl
                         transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[320px] object-cover 
                           transition-transform duration-700 
                           group-hover:scale-110"
              />

              {/* Premium overlay */}
              <div className="absolute inset-0 bg-gradient-to-t 
                              from-black/80 via-black/30 to-transparent 
                              opacity-90 group-hover:opacity-100 
                              transition duration-500 pointer-events-none">
              </div>

              {/* Text */}
              <div className="absolute bottom-8 left-8 text-white 
                              text-xl font-semibold tracking-wide 
                              pointer-events-none">
                {item.title}
              </div>

              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-3xl 
                              ring-1 ring-white/10 
                              group-hover:ring-green-400/40 
                              transition duration-500 pointer-events-none">
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default DomesticTravelSection