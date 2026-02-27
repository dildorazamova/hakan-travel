function CityModal() {
  const cities = [
    "Бухара",
    "Наманган",
    "Самарканд",
    "Ташкент",
    "Фергана"
  ]

  return (
    <div>
      <h2 className="text-xl font-bold mb-6">
        Город вылета
      </h2>

      <div className="space-y-3">
        {cities.map((city, index) => (
          <div
            key={index}
            className="p-3 hover:bg-gray-100 rounded-lg cursor-pointer"
          >
            {city}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CityModal