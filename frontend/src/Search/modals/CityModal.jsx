import { useEffect, useState } from "react"

function CityModal({ open, onClose, onSelect }) {

  const [cities, setCities] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {

    if (!open) return

    let url = `${import.meta.env.VITE_API_URL}/api/cities/`

    setLoading(true)
    setError(null)

    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error("Server error")
        return res.json()
      })
      .then(data => {

        const citiesData = data.results ? data.results : data
        setCities(citiesData)

      })
      .catch(err => {
        console.error(err)
        setError("Failed to load cities")
      })
      .finally(() => {
        setLoading(false)
      })

  }, [open])

  if (!open) return null

  return (

    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-2xl p-6 w-[400px]">

        <h2 className="text-xl font-bold mb-6">
          Город вылета
        </h2>

        <div className="space-y-3">

          {/* LOADING */}
          {loading && (
            <p className="text-gray-400">Loading...</p>
          )}

          {/* ERROR */}
          {error && (
            <p className="text-red-500">{error}</p>
          )}

          {/* EMPTY */}
          {!loading && !error && cities.length === 0 && (
            <p className="text-gray-400">No cities found</p>
          )}

          {/* LIST */}
          {cities.map((city) => (
            <div
              key={city.id}
              onClick={() => {
                onSelect(city)
                onClose()
              }}
              className="p-3 hover:bg-gray-100 rounded-lg cursor-pointer"
            >
              {city.name}
            </div>
          ))}

        </div>

      </div>

    </div>
  )
}

export default CityModal