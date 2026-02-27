import React, { useEffect, useState } from "react"

const DetailModal = ({ tour, onClose }) => {
  const [loading, setLoading] = useState(false)

  // ESC bosilganda yopish
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

      const res = await fetch(
        "http://127.0.0.1:8000/api/bookings/send-booking/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            tour: tour.country,
            email: "client@example.com"
          })
        }
      )

      if (!res.ok) throw new Error("Booking error")

      alert("So‘rov yuborildi ✅")
      onClose()

    } catch (err) {
      alert("Xatolik yuz berdi ❌")
      console.log(err);
      
    } finally {
      setLoading(false)
      
      
    }
  }

  const finalPrice = tour.discount_price || tour.regular_price

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* BACKDROP */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-md"
      />

      {/* MODAL */}
      <div className="
        relative
        w-[95%] max-w-xl
        bg-white/85
        backdrop-blur-xl
        rounded-[32px]
        shadow-[0_25px_60px_rgba(0,0,0,0.25)]
        p-8
        animate-[fadeIn_.25s_ease]
      ">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 
                     flex items-center justify-center 
                     rounded-full bg-gray-100 
                     hover:bg-gray-200 transition"
        >
          ✕
        </button>

        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-xs text-gray-400 tracking-widest uppercase">
              Tour ID #{tour.id}
            </p>
            <h2 className="text-2xl font-bold text-gray-800 mt-1">
              {tour.country}
            </h2>
          </div>

          <span className="px-4 py-1 text-sm font-semibold 
                           rounded-full bg-green-100 text-green-600">
            Available
          </span>
        </div>

        {/* Content */}
        <div className="flex gap-6 mb-8">

          <img
            src={tour.image}
            alt={tour.country}
            className="w-32 h-32 object-cover rounded-2xl shadow-lg"
          />

          <div className="flex flex-col justify-between">

            <p className="text-gray-600 text-sm leading-relaxed">
              {tour.hotel?.description}
            </p>

            <div className="flex gap-4 mt-4 text-sm text-gray-700">
              <span className="bg-gray-100 px-3 py-1 rounded-full">
                ⭐ {tour.hotel?.rating}
              </span>

              <span className="bg-gray-100 px-3 py-1 rounded-full">
                {tour.duration_days} Days
              </span>
            </div>

            <div className="mt-4">
              {tour.discount_price && (
                <span className="text-gray-400 line-through mr-3">
                  ${tour.regular_price}
                </span>
              )}

              <span className="text-2xl font-bold text-green-600">
                ${finalPrice}
              </span>
            </div>

          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">

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
              bg-gradient-to-r from-green-500 to-emerald-600
              hover:scale-[1.02]
              transition
              disabled:opacity-60
            "
          >
            {loading ? "Processing..." : "Book Now"}
          </button>

        </div>

      </div>
    </div>
  )
}

export default DetailModal