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
    <section className="mt-6 px-3 sm:px-5">
      <div className="
        relative
        h-[320px] sm:h-[380px] md:h-[460px]
        rounded-2xl
        overflow-hidden
        shadow-xl
      ">

        {/* Background Image */}
        <div
          key={current}
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 scale-105"
          style={{ backgroundImage: `url(${slides[current].image})` }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r 
                        from-black/85 via-black/50 to-transparent" />

        {/* CONTENT */}
        <div className="
          absolute
          bottom-6 sm:bottom-10 md:bottom-14
          left-6 sm:left-10 md:left-14
          right-6
          text-white
          max-w-xl
        ">

          {/* TITLE */}
          <h1 className="
            text-2xl sm:text-3xl md:text-5xl lg:text-6xl
            font-extrabold
            mb-4 sm:mb-6
            leading-tight
          ">
            {slides[current].title}
          </h1>

          {/* DESCRIPTION */}
          <div className="flex items-start gap-3 sm:gap-4">

            <div className="
              w-10 h-10 sm:w-12 sm:h-12
              bg-green-600/90
              rounded-full
              flex items-center justify-center
              text-xl sm:text-2xl
              flex-shrink-0
            ">
              📍
            </div>

            <p className="
              text-sm sm:text-lg md:text-xl
              text-gray-200
              leading-relaxed
            ">
              {slides[current].description}
            </p>

          </div>
        </div>

      </div>
    </section>
  )
}

export default HeroSlider