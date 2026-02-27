import React from "react"

function SalesOfficesPage() {
  return (
    <div className="min-h-screen max-w-7xl mx-auto px-6 pt-32 pb-24">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <div className="space-y-8">

          {/* Title Card */}
          <div className="bg-white rounded-3xl p-10 shadow-lg">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Sotuv ofislari
            </h1>
            <p className="text-gray-500 mb-6">
             Biz yaqinmiz — bog‘lanish uchun shaharni tanlang
            </p>

            <button className="px-8 py-3 rounded-full bg-gradient-to-r 
                               from-pink-500 to-purple-500 text-white font-semibold">
              Bukhara
            </button>
          </div>

          {/* Contact Card */}
          <div className="bg-white rounded-3xl p-10 shadow-lg space-y-8">

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full 
                              bg-gradient-to-r from-pink-500 to-purple-500 
                              flex items-center justify-center text-white">
                📞
              </div>
              <div>
                <p className="text-gray-400">Call center</p>
                <p className="text-2xl font-bold">
                  +998 93 217 11 17
                </p>
                <p className="text-gray-500">
                  Mon – Fri, 09:00 – 18:00
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full 
                              bg-blue-500 
                              flex items-center justify-center text-white">
                📍
              </div>
              <div>
                <p className="text-gray-400">
                  Asosiy savdo agentligi
                </p>
                <p className="text-xl font-semibold">
                  Bahouddin Naqshband5, Bukhara
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE MAP */}
        <div className="rounded-3xl overflow-hidden shadow-xl h-[520px] border border-green-200">
  <iframe
    title="map"
    src="https://maps.google.com/maps?q=Bahouddin%20Naqshband%205,%20Bukhara&t=&z=15&ie=UTF8&iwloc=&output=embed"
    className="w-full h-full border-0"
    allowFullScreen
  />
</div>

      </div>

    </div>
  )
}

export default SalesOfficesPage