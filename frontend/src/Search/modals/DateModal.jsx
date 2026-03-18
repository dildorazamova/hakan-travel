import { useState } from "react"

function DateModal({ open, onClose, onSelect }) {

  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)

  if (!open) return null

  const days = Array.from({ length: 31 }, (_, i) => i + 1)

  const handleSelect = (day) => {

    if (!startDate || (startDate && endDate)) {
      setStartDate(day)
      setEndDate(null)
    } 
    else if (day > startDate) {
      setEndDate(day)
    }

  }

  const handleApply = () => {

    if (startDate && endDate) {

      onSelect(
        `${startDate} Mar`,
        `${endDate} Mar`
      )

      onClose()

    }

  }

  return (

    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-3xl p-10 w-[900px] shadow-2xl">

        {/* HEADER */}

        <div className="flex justify-between mb-10">

          <h2 className="text-xl font-semibold">
            MART 2026
          </h2>

          <h2 className="text-xl font-semibold">
            APREL 2026
          </h2>

        </div>

        {/* CALENDAR */}

        <div className="grid grid-cols-7 gap-3">

          {days.map((day) => {

            const isSelected =
              day === startDate || day === endDate

            const inRange =
              startDate && endDate &&
              day > startDate &&
              day < endDate

            return (

              <div
                key={day}
                onClick={() => handleSelect(day)}
                className={`
                  h-12 flex items-center justify-center
                  rounded-lg cursor-pointer
                  transition
                  ${isSelected ? "bg-blue-800 text-white" : ""}
                  ${inRange ? "bg-blue-100" : "bg-gray-100"}
                  hover:bg-blue-200
                `}
              >

                {day}

              </div>

            )

          })}

        </div>

        {/* FOOTER */}

        <div className="flex justify-between mt-10">

          <div className="flex gap-6 text-gray-600 text-sm">

            <label className="flex gap-2">
              <input type="checkbox" />
              Только чартер
            </label>

            <label className="flex gap-2">
              <input type="checkbox" />
              Прямой рейс
            </label>

          </div>

          <button
            onClick={handleApply}
            className="bg-green-700 text-white px-6 py-2 rounded-lg"
          >
            Apply
          </button>

        </div>

      </div>

    </div>

  )

}

export default DateModal