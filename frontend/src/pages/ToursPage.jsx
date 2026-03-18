import { useEffect, useState } from "react"
import TourCard from "../components/TourCard"
import { useLocation } from "react-router-dom"

function ToursPage() {

  const [tours, setTours] = useState([])
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)

  const toursPerPage = 8

  const location = useLocation()

  useEffect(() => {

    const params = new URLSearchParams(location.search)
    const city = params.get("city")
    const country = params.get("country")

    let url = `${import.meta.env.VITE_API_URL}/api/tours/`

    const query = []

    if (city && city !== "null") query.push(`city=${city}`)
    if (country && country !== "null") query.push(`country=${country}`)

    if (query.length > 0) {
      url += "?" + query.join("&")
    }

    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error("Server error")
        return res.json()
      })
      .then(data => {

        const toursData = data.results ? data.results : data
        setTours(toursData)
        setCurrentPage(1) // 🔥 page reset

      })
      .catch(err => setError(err.message))

  }, [location.search])

  if (error) {
    return (
      <div className="pt-32 text-center text-red-500">
        {error}
      </div>
    )
  }

  const totalPages = Math.ceil(tours.length / toursPerPage)
  const start = (currentPage - 1) * toursPerPage
  const currentTours = tours.slice(start, start + toursPerPage)

  return (

    <div className="max-w-7xl mx-auto px-6 pt-32 pb-24">

      <h1 className="text-3xl font-bold mb-10">
        Barcha turlar
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {currentTours.length > 0 ? (
          currentTours.map(tour => (
            <TourCard key={tour.id} tour={tour} />
          ))
        ) : (
          <p className="text-gray-500">
            Turlar topilmadi
          </p>
        )}

      </div>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-12 gap-3 flex-wrap">

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