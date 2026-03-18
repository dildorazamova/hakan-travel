import { useEffect, useState } from "react"

function CityModal({ open, onClose, onSelect }) {

  const [cities, setCities] = useState([])

  useEffect(() => {

    if (open) {
      fetch("http://localhost:8000/api/cities/")
        .then(res => res.json())
        .then(data => {
          console.log("CITIES:", data) // 🔥 DEBUG
          setCities(data)
        })
        .catch(err => console.error(err))
    }

  }, [open])

  if (!open) return null

  return (

    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-2xl p-6 w-[400px]">

        <h2 className="text-xl font-bold mb-6">
          Город вылета
        </h2>

        <div className="space-y-3">

          {cities.length === 0 && (
            <p className="text-gray-400">No cities found</p>
          )}

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