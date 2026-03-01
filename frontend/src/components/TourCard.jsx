import React, { useState } from "react"
import DetailModal from "./DetailModal"

const TourCard = ({ tour }) => {
  const [open, setOpen] = useState(false)

  const finalPrice = tour.discount_price || tour.price

  return (
    <>
      <div className="
        group
        rounded-3xl
        overflow-hidden
        bg-white
        shadow-lg hover:shadow-2xl
        transition-all duration-500
        hover:-translate-y-2
      ">

        <div className="relative h-[320px] sm:h-[380px] lg:h-[420px]">

          {/* Image */}
          <img
            src={tour.image}
            alt={tour.country}
            className="
              w-full h-full object-cover
              transition-transform duration-700
              group-hover:scale-110
            "
          />

          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

          {/* Price Badge */}
          <div className="
            absolute top-4 right-4
            bg-gradient-to-r from-emerald-500 to-green-700
            px-4 py-2
            rounded-full
            text-white font-bold
            text-sm sm:text-base
            shadow-xl
            group-hover:scale-105
            transition
          ">
            ${finalPrice}
          </div>

          {/* Content */}
          <div className="absolute bottom-0 w-full p-5 sm:p-6 text-white text-left">

            {/* Title */}
            <h2 className="text-xl sm:text-2xl font-bold mb-2">
              {tour.country}
            </h2>

            {/* Description */}
            <p className="text-xs sm:text-sm text-white/80 mb-4 line-clamp-2">
              {tour.hotel?.description}
            </p>

            {/* Info */}
            <div className="flex gap-2 flex-wrap mb-5">
              <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs">
                ⭐ {tour.hotel?.rating}
              </span>

              <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs">
                {tour.duration_days} Days
              </span>
            </div>

            {/* Button */}
            <button
              onClick={() => setOpen(true)}
              className="
                w-full
                bg-green-600
                py-2.5 sm:py-3
                rounded-xl
                font-semibold
                text-sm sm:text-base
                transition-all duration-300
                hover:bg-green-700
                hover:shadow-lg
                hover:-translate-y-1
              "
            >
              Batafsil ma'lumot
            </button>

          </div>

        </div>
      </div>

      {open && <DetailModal tour={tour} onClose={() => setOpen(false)} />}
    </>
  )
}

export default TourCard