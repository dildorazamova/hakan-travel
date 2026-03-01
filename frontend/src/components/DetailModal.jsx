import React, { useEffect, useState } from "react"

const API = import.meta.env.VITE_API_URL

const DetailModal = ({ tour, onClose }) => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handleEsc)
    return () => document.removeEventListener("keydown", handleEsc)
  }, [onClose])

  const handleBooking = async () => {
    try {
      setLoading(true)

      const res = await fetch(`${API}/api/bookings/send-booking/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tour: tour.country,
          email: "client@example.com"
        })
      })

      if (!res.ok) throw new Error("Booking error")

      onClose()

    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  const finalPrice = tour.discount_price || tour.regular_price

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">

      {/* BACKDROP */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-md transition-opacity duration-300"
      />

      {/* MODAL */}
      <div className="
        relative
        w-full max-w-2xl
        bg-white
        rounded-3xl
        shadow-2xl
        overflow-hidden
        animate-[fadeIn_.3s_ease]
        max-h-[90vh]
        overflow-y-auto
      ">

        {/* HEADER IMAGE */}
        <div className="relative h-56 sm:h-72 w-full">
          <img
            src={tour.image}
            alt={tour.country}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 
                       flex items-center justify-center 
                       rounded-full bg-white/80 
                       hover:bg-white transition"
          >
            ✕
          </button>

          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-xs uppercase tracking-widest opacity-80">
              Tour ID #{tour.id}
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold mt-1">
              {tour.country}
            </h2>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-6 sm:p-8">

          <p className="text-gray-600 leading-relaxed mb-6">
            {tour.hotel?.description}
          </p>

          <div className="flex flex-wrap gap-3 mb-6">
            <span className="bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm">
              ⭐ {tour.hotel?.rating}
            </span>

            <span className="bg-gray-100 px-4 py-2 rounded-full text-sm">
              {tour.duration_days} Days
            </span>

            <span className="bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm">
              Available
            </span>
          </div>

          {/* PRICE */}
          <div className="mb-8">
            {tour.discount_price && (
              <span className="text-gray-400 line-through mr-3 text-lg">
                ${tour.regular_price}
              </span>
            )}

            <span className="text-3xl font-bold text-green-600">
              ${finalPrice}
            </span>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4">

            <button
              onClick={onClose}
              className="flex-1 py-3 rounded-2xl border 
                         border-gray-300 hover:bg-gray-100 
                         transition font-medium"
            >
              Cancel
            </button>

            <button
              onClick={handleBooking}
              disabled={loading}
              className="
                flex-1 py-3 rounded-2xl
                text-white font-semibold
                bg-gradient-to-r from-green-600 to-emerald-600
                hover:shadow-xl hover:-translate-y-1
                transition-all duration-300
                disabled:opacity-60
              "
            >
              {loading ? "Processing..." : "Book Now"}
            </button>

          </div>

        </div>
      </div>
    </div>
  )
}

export default DetailModal