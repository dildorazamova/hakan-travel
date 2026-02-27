import { useEffect, useState } from "react"
import registan from "../assets/registon.jpg"
import ark from "../assets/ark.jpg"
import chor from "../assets/chorminor.jpg"
import ichan from "../assets/ichan qala.jpeg"
import shohizinda from "../assets/shohizinda.jpg"

const slides = [
  {
    title: "Registon – Samarqand",
    description: "Temuriylar davrining eng buyuk me'moriy majmuasi.",
    image: registan
  },
  {
    title: "Ichan-Qal'a – Xiva",
    description: "UNESCO merosi ro'yxatiga kiritilgan qadimiy ichki shahar.",
    image: ichan
  },
  {
    title: "Ark qal'asi – Buxoro",
    description: "Buxoro amirlarining qadimiy qarorgohi.",
    image: ark
  },
  {
    title: "Shohizinda – Samarqand",
    description: "Muqaddas maqbaralar majmuasi.",
    image: shohizinda
  },
  {
    title: "Chor Minor – Buxoro",
    description: "To‘rt minorali noyob me’moriy yodgorlik.",
    image: chor
  }
]

function HeroSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="mt-6 px-5">
      <div className="relative h-[460px] rounded-2xl overflow-hidden shadow-xl">

        {/* Background */}
        <div
          key={current}
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 scale-105"
          style={{ backgroundImage: `url(${slides[current].image})` }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

        {/* Content */}
        <div className="absolute bottom-14 left-14 text-white max-w-2xl">

          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            {slides[current].title}
          </h1>

          {/* DESCRIPTION + ICON */}
          <div className="flex items-start gap-4">
            
            {/* Icon */}
            <div className="w-12 h-12 bg-green-600/90 rounded-full 
                            flex items-center justify-center text-2xl">
              📍
            </div>

            <p className="text-lg md:text-2xl text-gray-200 leading-relaxed">
              {slides[current].description}
            </p>

          </div>

        </div>

      </div>
    </section>
  )
}

export default HeroSlider