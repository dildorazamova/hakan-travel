import { useState } from "react"

function TouristsModal({ open, onClose, onSelect }) {

  const [adults, setAdults] = useState(2)
  const [children, setChildren] = useState(0)

  if (!open) return null

  const increaseAdults = () => {
    setAdults(adults + 1)
  }

  const decreaseAdults = () => {
    if (adults > 1) setAdults(adults - 1)
  }

  const addChild = () => {
    setChildren(children + 1)
  }

  const select = () => {

    const text =
      children > 0
        ? `${adults} Adults, ${children} Children`
        : `${adults} Adults`

    onSelect(text)
    onClose()

  }

  return (

    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white w-[420px] rounded-3xl p-8 shadow-2xl">

        <h2 className="text-xl font-semibold mb-8">
          Туристы
        </h2>

        {/* ADULTS */}

        <div className="flex items-center justify-between mb-6">

          <button
            onClick={decreaseAdults}
            className="w-16 h-16 rounded-full bg-gray-600 text-white text-3xl"
          >
            −
          </button>

          <span className="text-xl font-semibold">
            {adults} взрослых
          </span>

          <button
            onClick={increaseAdults}
            className="w-16 h-16 rounded-full bg-gray-600 text-white text-3xl"
          >
            +
          </button>

        </div>

        {/* CHILD */}

        <button
          onClick={addChild}
          className="w-full bg-gray-200 rounded-xl py-4 text-lg mb-6"
        >
          Добавить ребенка
        </button>

        {/* SAVE */}

        <label className="flex items-center gap-3 text-gray-600 mb-8">

          <input type="checkbox" />
          Запомнить выбор

        </label>

        {/* SELECT */}

        <button
          onClick={select}
          className="w-full bg-blue-800 text-white py-4 rounded-full text-lg"
        >
          Выбрать
        </button>

      </div>

    </div>

  )
}

export default TouristsModal