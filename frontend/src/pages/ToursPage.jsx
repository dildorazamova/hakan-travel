import { useEffect, useState } from "react"
import TourCard from "../components/TourCard"

function ToursPage() {
  const [tours, setTours] = useState([])
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)

  const toursPerPage = 8

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/tours/tours/")
      .then(res => res.json())
      .then(data => setTours(data))
      .catch(err => setError(err.message))
  }, [])

  if (error) return <p>{error}</p>

  const totalPages = Math.ceil(tours.length / toursPerPage)

  const start = (currentPage - 1) * toursPerPage
  const currentTours = tours.slice(start, start + toursPerPage)

  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-24">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {currentTours.map(tour => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-12 gap-2">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`w-10 h-10 rounded ${
                currentPage === i + 1
                  ? "bg-green-600 text-white"
                  : "bg-white border"
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