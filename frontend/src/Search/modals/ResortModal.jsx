import { useState } from "react"

function ResortModal({ open, onClose }) {

  if (!open) return null

  const resorts = [
    "Любой курорт",
    "Абу-Даби",
    "Аджман",
    "Дубай",
    "Рас-эль-Хайма",
    "Умм Аль Кувейн",
    "Фуджейра",
    "Шарджа"
  ]

  const types = [
    "Любой",
    "Отель",
    "База отдыха",
    "Апартаменты",
    "Вилла",
    "Хостел"
  ]

  const hotelsData = [
    "25HOURS DUBAI ONE CENTRAL 5*",
    "2BR ON PALM JUMEIRAH WITH BEACH",
    "2BR WITH BURJ KHALIFA VIEW",
    "3 MIN TO DUBAI MALL",
    "4U HOSTEL",
    "72 HOTEL (EX ROYAL TULIP 72)"
  ]

  const [selectedResorts, setSelectedResorts] = useState([])
  const [selectedTypes, setSelectedTypes] = useState([])
  const [search, setSearch] = useState("")

  const toggleItem = (list,setList,value) => {

    if(list.includes(value)){
      setList(list.filter(i=>i!==value))
    }else{
      setList([...list,value])
    }

  }

  const filteredHotels = hotelsData.filter(hotel =>
    hotel.toLowerCase().includes(search.toLowerCase())
  )

  return (

    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
      onClick={onClose}
    >

      <div
        className="bg-white w-[900px] rounded-2xl p-6 flex gap-6"
        onClick={(e)=>e.stopPropagation()}
      >

        {/* LEFT */}

        <div className="w-1/3 border-r pr-4">

          <h3 className="font-bold mb-4">
            КУРОРТЫ
          </h3>

          <div className="h-[300px] overflow-y-auto">

            {resorts.map((item,i)=>(
              <label key={i} className="flex items-center gap-2 mb-3 cursor-pointer">

                <input
                  type="checkbox"
                  checked={selectedResorts.includes(item)}
                  onChange={()=>toggleItem(selectedResorts,setSelectedResorts,item)}
                />

                {item}

              </label>
            ))}

          </div>

        </div>


        {/* CENTER */}

        <div className="w-1/3 border-r pr-4">

          <h3 className="font-bold mb-4">
            ТИП ОТЕЛЯ / ТУРА
          </h3>

          {types.map((item,i)=>(
            <label key={i} className="flex items-center gap-2 mb-3 cursor-pointer">

              <input
                type="checkbox"
                checked={selectedTypes.includes(item)}
                onChange={()=>toggleItem(selectedTypes,setSelectedTypes,item)}
              />

              {item}

            </label>
          ))}

        </div>


        {/* RIGHT */}

        <div className="w-1/3 flex flex-col">

          <h3 className="font-bold mb-4">
            ОТЕЛИ
          </h3>

          <input
            type="text"
            placeholder="Введите название"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            className="w-full border p-2 rounded-lg mb-4"
          />

          <div className="h-[250px] overflow-y-auto">

            {filteredHotels.map((hotel,i)=>(
              <label key={i} className="flex items-center gap-2 mb-2">

                <input type="checkbox"/>

                {hotel}

              </label>
            ))}

          </div>

          <button
            onClick={onClose}
            className="mt-6 bg-green-700 hover:bg-green-800 text-white rounded-xl py-2"
          >
            Выбрать
          </button>

        </div>

      </div>

    </div>
  )
}

export default ResortModal