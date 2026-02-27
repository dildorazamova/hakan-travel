import { useEffect, useState } from "react"
import TourCard from "../components/TourCard"

const API = import.meta.env.VITE_API_URL

function ToursPage() {
  const [tours, setTours] = useState([])
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)

  const toursPerPage = 8

  useEffect(() => {
    fetch(`${API}/api/tours/tours/`)
      .then(res => {
        if (!res.ok) {
          throw new Error("Server error")
        }
        return res.json()
      })
      .then(data => setTours(data))
      .catch(err => setError(err.message))
  }, [])

  if (error)
    return (
      <div className="pt-32 text-center text-red-500">
        {error}
      </div>
    )

  const totalPages = Math.ceil(tours.length / toursPerPage)
  const start = (currentPage - 1) * toursPerPage
  const currentTours = tours.slice(start, start + toursPerPage)

  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-24">

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {currentTours.map(tour => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-12 gap-3">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`w-10 h-10 rounded-lg font-semibold transition ${
                currentPage === i + 1
                  ? "bg-green-600 text-white shadow-md"
                  : "bg-white border border-gray-300 hover:bg-green-50"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}

    </div>
  )
}

export default ToursPage