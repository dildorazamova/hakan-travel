import React from "react"
import aboutImage from "../assets/hokan.jpg"

function AboutPage() {
  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-24">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16 sm:mb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
            Biz haqimizda
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-4">
            <span className="font-semibold text-gray-900">
              Hokan Travel
            </span>{" "}
            — yangi avlod milliy turoperatori. 2024-yilda tashkil etilgan va
            qisqa vaqt ichida minglab sayohatchilar ishonchini qozongan.
          </p>

          <p className="text-base sm:text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Biz sayohatni qulay, zamonaviy va chinakam unutilmas qilishni maqsad qilganmiz.
          </p>
        </div>

        {/* IMAGE */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-20 group">
          <img
            src={aboutImage}
            alt="Our Team"
            className="w-full h-[280px] sm:h-[400px] lg:h-[500px] object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">

          <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-green-100">
            <h3 className="text-2xl font-bold text-green-600 mb-3">
              50 000+
            </h3>
            <p className="font-semibold text-gray-800 mb-2">
              Mamnun mijozlar
            </p>
            <p className="text-gray-600 text-sm">
              2024-yilda biz bilan dunyoni kashf etgan sayohatchilar.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-green-100">
            <h3 className="text-2xl font-bold text-green-600 mb-3">
              20+
            </h3>
            <p className="font-semibold text-gray-800 mb-2">
              Mashhur yo‘nalishlar
            </p>
            <p className="text-gray-600 text-sm">
              Misr, BAA, Ummon, Gruziya va boshqa davlatlar.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-green-100">
            <h3 className="text-2xl font-bold text-green-600 mb-3">
              24/7
            </h3>
            <p className="font-semibold text-gray-800 mb-2">
              Doimiy qo‘llab-quvvatlash
            </p>
            <p className="text-gray-600 text-sm">
              Sayohat davomida har doim yordam berishga tayyormiz.
            </p>
          </div>

        </div>

        {/* EXTRA TEXT BLOCK */}
        <div className="max-w-4xl mx-auto text-center space-y-6 text-gray-600 leading-relaxed">

          <p className="text-base sm:text-lg">
            Har bir muvaffaqiyatli sayohat ortida kuchli jamoa turadi.
            Bizning mutaxassislar har bir detalgacha e’tibor beradi.
          </p>

          <p className="text-lg sm:text-xl font-semibold text-gray-900">
            Hokan Travel — bu ishonch, sifat va sayohatga muhabbat.
          </p>

        </div>

      </div>
    </div>
  )
}

export default AboutPage