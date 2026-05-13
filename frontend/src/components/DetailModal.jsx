import { useEffect, useState } from "react"
import {
  FaTimes, FaStar, FaClock, FaMapMarkerAlt,
  FaCheckCircle, FaPlane, FaHotel, FaTag
} from "react-icons/fa"

const DetailModal = ({ tour, onClose }) => {
  const [loading, setLoading] = useState(false)
  const [booked, setBooked] = useState(false)

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === "Escape") onClose() }
    document.addEventListener("keydown", handleEsc)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", handleEsc)
      document.body.style.overflow = ""
    }
  }, [onClose])

  const handleBooking = async () => {
    try {
      setLoading(true)
      const res = await fetch(`/api/bookings/send-booking/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tour: tour.country, email: "client@example.com" })
      })
      if (!res.ok) throw new Error("Booking error")
      setBooked(true)
      setTimeout(onClose, 2000)
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  const finalPrice = tour.discount_price || tour.regular_price
  const hasDiscount = tour.discount_price && tour.regular_price && tour.discount_price < tour.regular_price
  const discountPercent = hasDiscount
    ? Math.round((1 - tour.discount_price / tour.regular_price) * 100)
    : 0

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* Modal */}
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">

        {/* Image header */}
        <div className="relative h-52 sm:h-64 flex-shrink-0">
          <img
            src={tour.image}
            alt={tour.country}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Close btn */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-9 h-9 bg-black/40 hover:bg-black/60
                       backdrop-blur-sm rounded-full flex items-center justify-center
                       text-white transition-all duration-200 hover:scale-110"
          >
            <FaTimes size={14} />
          </button>

          {/* Discount badge */}
          {hasDiscount && (
            <div className="absolute top-3 left-3 bg-red-500 text-white
                            text-xs font-bold px-2.5 py-1 rounded-full">
              -{discountPercent}%
            </div>
          )}

          {/* Title overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <div className="flex items-center gap-1.5 mb-1">
              <FaMapMarkerAlt size={12} className="text-green-400" />
              <span className="text-green-300 text-xs font-medium uppercase tracking-wider">
                {tour.city_name || "O'zbekiston"}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
              {tour.country}
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto flex-1">
          <div className="p-5 sm:p-6">

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-5">
              {tour.hotel?.rating && (
                <span className="flex items-center gap-1.5 bg-amber-50 text-amber-700
                                 border border-amber-200 px-3 py-1.5 rounded-xl text-xs font-semibold">
                  <FaStar size={11} className="text-amber-500" />
                  {tour.hotel.rating} yulduz
                </span>
              )}
              {tour.duration_days && (
                <span className="flex items-center gap-1.5 bg-blue-50 text-blue-700
                                 border border-blue-200 px-3 py-1.5 rounded-xl text-xs font-semibold">
                  <FaClock size={11} />
                  {tour.duration_days} kun
                </span>
              )}
              <span className="flex items-center gap-1.5 bg-green-50 text-green-700
                               border border-green-200 px-3 py-1.5 rounded-xl text-xs font-semibold">
                <FaCheckCircle size={11} />
                Mavjud
              </span>
            </div>

            {/* Description */}
            {tour.hotel?.description && (
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                {tour.hotel.description}
              </p>
            )}

            {/* Features */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-3">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaPlane size={13} className="text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Transfer</p>
                  <p className="text-xs font-semibold text-gray-700">Parvoz bilan</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-3">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaHotel size={13} className="text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Mehmonxona</p>
                  <p className="text-xs font-semibold text-gray-700">
                    {tour.hotel?.name || "Kiritilgan"}
                  </p>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50
                            border border-green-100 rounded-2xl p-4 mb-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500 mb-1 flex items-center gap-1">
                    <FaTag size={10} />
                    Narx (1 kishi uchun)
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-black text-green-600">
                      ${finalPrice}
                    </span>
                    {hasDiscount && (
                      <span className="text-gray-400 line-through text-sm">
                        ${tour.regular_price}
                      </span>
                    )}
                  </div>
                </div>
                {hasDiscount && (
                  <div className="bg-red-500 text-white text-sm font-bold
                                  px-3 py-1.5 rounded-xl">
                    -{discountPercent}% chegirma
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* Buttons — always visible */}
        <div className="flex gap-3 p-5 sm:p-6 pt-0 flex-shrink-0">
          <button
            onClick={onClose}
            className="flex-1 py-3 rounded-xl border border-gray-200
                       text-gray-600 font-semibold text-sm
                       hover:bg-gray-50 transition-all duration-200"
          >
            Bekor qilish
          </button>
          <button
            onClick={handleBooking}
            disabled={loading || booked}
            className="flex-2 px-6 py-3 rounded-xl text-white font-semibold text-sm
                       bg-green-600 hover:bg-green-700
                       transition-all duration-200
                       hover:shadow-lg hover:shadow-green-600/30
                       disabled:opacity-60 disabled:cursor-not-allowed
                       active:scale-[0.98] flex-1"
          >
            {booked ? "✅ Yuborildi!" : loading ? "Yuborilmoqda..." : "Buyurtma berish"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default DetailModal
