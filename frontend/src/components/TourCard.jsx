import { useState } from "react"
import { FaStar, FaClock, FaArrowRight, FaTag } from "react-icons/fa"
import DetailModal from "./DetailModal"

const TourCard = ({ tour }) => {
  const [open, setOpen] = useState(false)

  const finalPrice = tour.discount_price || tour.regular_price
  const hasDiscount = tour.discount_price && tour.regular_price && tour.discount_price < tour.regular_price
  const discountPercent = hasDiscount
    ? Math.round((1 - tour.discount_price / tour.regular_price) * 100)
    : 0

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="group bg-white rounded-2xl overflow-hidden shadow-sm
                   hover:shadow-xl transition-all duration-400 cursor-pointer
                   border border-gray-100 hover:border-green-200 hover:-translate-y-1"
      >
        {/* Image */}
        <div className="relative h-48 sm:h-52 overflow-hidden">
          <img
            src={tour.image}
            alt={tour.country}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Discount badge */}
          {hasDiscount && (
            <div className="absolute top-3 left-3 bg-red-500 text-white
                            text-xs font-bold px-2.5 py-1 rounded-full shadow-lg">
              -{discountPercent}%
            </div>
          )}

          {/* Duration badge */}
          {tour.duration_days && (
            <div className="absolute top-3 right-3 flex items-center gap-1
                            bg-black/50 backdrop-blur-sm text-white
                            text-xs font-medium px-2.5 py-1 rounded-full">
              <FaClock size={10} />
              {tour.duration_days} kun
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4">

          {/* Title + location */}
          <div className="mb-3">
            <h3 className="font-bold text-gray-900 text-base leading-tight mb-0.5">
              {tour.country}
            </h3>
            {tour.city_name && (
              <p className="text-xs text-gray-400">{tour.city_name}</p>
            )}
          </div>

          {/* Description */}
          {tour.hotel?.description && (
            <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 mb-3">
              {tour.hotel.description}
            </p>
          )}

          {/* Rating */}
          {tour.hotel?.rating && (
            <div className="flex items-center gap-1 mb-3">
              {[1, 2, 3, 4, 5].map((s) => (
                <FaStar
                  key={s}
                  size={12}
                  className={s <= Math.round(tour.hotel.rating) ? "text-amber-400" : "text-gray-200"}
                />
              ))}
              <span className="text-xs text-gray-400 ml-1">{tour.hotel.rating}</span>
            </div>
          )}

          {/* Price + Button */}
          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-green-600 font-black text-lg">${finalPrice}</span>
                {hasDiscount && (
                  <span className="text-gray-400 line-through text-xs">${tour.regular_price}</span>
                )}
              </div>
              <p className="text-xs text-gray-400">1 kishi uchun</p>
            </div>

            <div className="w-9 h-9 bg-green-600 group-hover:bg-green-700 rounded-xl
                            flex items-center justify-center text-white
                            transition-all duration-200 group-hover:scale-110 shadow-sm">
              <FaArrowRight size={13} />
            </div>
          </div>
        </div>
      </div>

      {open && <DetailModal tour={tour} onClose={() => setOpen(false)} />}
    </>
  )
}

export default TourCard
