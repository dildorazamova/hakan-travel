import { useState } from "react"

function NightsModal({ open, onClose, onSelect }) {

  const [selectedStart, setSelectedStart] = useState(null)
  const [selectedEnd, setSelectedEnd] = useState(null)

  if (!open) return null

  const nights = Array.from({ length: 28 }, (_, i) => i + 1)

  const handleClick = (n) => {

    if (!selectedStart || selectedEnd) {
      setSelectedStart(n)
      setSelectedEnd(null)
    }
    else if (n > selectedStart) {
      setSelectedEnd(n)
    }

  }

  const apply = () => {
    if (selectedStart && selectedEnd) {
      onSelect(`${selectedStart} - ${selectedEnd}`)
      onClose()
    }
  }

  return (

    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-3xl p-10 w-[600px] shadow-2xl">

        <h2 className="text-xl font-semibold mb-8">
          НОЧЕЙ ОТ:
        </h2>

        <div className="grid grid-cols-7 gap-3">

          {nights.map((n) => {

            const selected =
              n === selectedStart || n === selectedEnd

            const inRange =
              selectedStart && selectedEnd &&
              n > selectedStart &&
              n < selectedEnd

            return (

              <div
                key={n}
                onClick={() => handleClick(n)}
                className={`
                  h-12 flex items-center justify-center
                  rounded-lg cursor-pointer font-medium
                  transition
                  ${selected ? "bg-blue-800 text-white" : ""}
                  ${inRange ? "bg-blue-100" : "bg-gray-100"}
                  hover:bg-blue-200
                `}
              >

                {n}

              </div>

            )

          })}

        </div>

        <div className="flex justify-end mt-8">

          <button
            onClick={apply}
            className="bg-green-700 text-white px-6 py-2 rounded-lg"
          >
            Apply
          </button>

        </div>

      </div>

    </div>

  )

}

export default NightsModal