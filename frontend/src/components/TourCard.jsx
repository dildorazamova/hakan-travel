import React, { useState } from "react"
import DetailModal from "./DetailModal"

const TourCard = ({ tour }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="rounded-[30px] overflow-hidden shadow-2xl bg-white">

        <div className="relative h-[480px]">

          {/* Image */}
          <img
            src={tour.image}
            alt={tour.country}
            className="w-full h-full object-cover"
          />

          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          {/* 🔥 PRICE BADGE (kattaroq) */}
          <div className="
              absolute top-5 right-5
              bg-gradient-to-r from-emerald-500 to-green-700
              px-5 py-2
              rounded-full
              text-white
              font-bold
              text-base
              shadow-lg
          ">
            ${tour.discount_price || tour.price}
          </div>

          {/* Bottom Content */}
          <div className="absolute bottom-0 p-6 text-white w-full text-left">

            {/* Title */}
            <h2 className="text-2xl font-bold mb-2">
              {tour.country}
            </h2>

            {/* Description */}
            <p className="text-sm text-white/80 mb-4 line-clamp-2">
              {tour.hotel?.description}
            </p>

            {/* Info badges */}
            <div className="flex gap-2 flex-wrap mb-6">
              <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs">
                ⭐ {tour.hotel?.rating}
              </span>

              <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs">
                {tour.duration_days} Days
              </span>
            </div>

            {/* 🔥 UPDATED BUTTON */}
            <button
              onClick={() => setOpen(true)}
              className="
                w-full
                bg-green-600
                py-3
                rounded-xl
                font-semibold
                text-base
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

      {open && (
        <DetailModal
          tour={tour}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  )
}

export default TourCard