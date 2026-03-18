import { useEffect } from "react"

function CountryModal({ open, onClose, onSelect }) {

  const countries = [
    "Turkey",
    "Egypt",
    "Thailand",
    "UAE",
    "China",
    "Vietnam"
  ]

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose()
    }

    window.addEventListener("keydown", handleEsc)

    return () => {
      window.removeEventListener("keydown", handleEsc)
    }
  }, [onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white w-[420px] rounded-2xl shadow-2xl p-6 max-h-[600px] overflow-y-auto">

        <h2 className="text-xl font-semibold mb-6">
          Popular Countries
        </h2>

        {countries.map((country, index) => (

          <div
            key={index}
            onClick={() => {
              onSelect(country)
              onClose()
            }}
            className="flex justify-between items-center
                       p-3 border-b cursor-pointer
                       hover:bg-gray-50"
          >

            <span className="text-lg">
              {country}
            </span>

            <span className="text-sm bg-gray-200 px-3 py-1 rounded-full">
              Airport
            </span>

          </div>

        ))}

        <button
          onClick={onClose}
          className="mt-4 w-full bg-gray-100 py-2 rounded-lg"
        >
          Close
        </button>

      </div>

    </div>
  )
}

export default CountryModal