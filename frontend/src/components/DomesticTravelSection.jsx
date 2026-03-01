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
    <section className="px-4 sm:px-6 lg:px-8 mt-24 sm:mt-32 mb-24">
      <div className="max-w-7xl mx-auto">

        {/* PREMIUM TITLE */}
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Ichki turizm yo‘nalishlari
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">

          {categories.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate("/tours")}
              className="relative group overflow-hidden rounded-3xl cursor-pointer
                         shadow-md hover:shadow-2xl
                         transition-all duration-500
                         hover:-translate-y-3"
            >

              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[260px] sm:h-[300px] lg:h-[320px]
                           object-cover
                           transition-transform duration-700
                           group-hover:scale-110"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t
                              from-black/85 via-black/40 to-transparent
                              transition-opacity duration-500
                              group-hover:opacity-100">
              </div>

              {/* TEXT */}
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-lg sm:text-xl font-semibold tracking-wide">
                  {item.title}
                </h3>
              </div>

              {/* PREMIUM GLOW BORDER */}
              <div className="absolute inset-0 rounded-3xl
                              ring-1 ring-white/10
                              group-hover:ring-2 group-hover:ring-green-400/50
                              transition duration-500">
              </div>

              {/* HOVER LIGHT EFFECT */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100
                              bg-gradient-to-tr from-white/10 via-transparent to-transparent
                              transition duration-700">
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default DomesticTravelSection