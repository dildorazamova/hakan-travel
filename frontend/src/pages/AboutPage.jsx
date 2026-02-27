import React from "react"

function AboutPage() {
  return (
    <div className="min-h-screen max-w-7xl mx-auto px-6 pt-32 pb-24">

      {/* TITLE */}
      <div className="flex flex-col items-center text-center">

  <h1 className="
    text-5xl md:text-6xl
    font-extrabold
    text-gray-800
    mb-8
  ">
    Biz haqimizda
  </h1>

  <p className="
    text-xl md:text-2xl
    text-gray-600
    max-w-4xl
    mb-6
    leading-relaxed
  ">
    <span className="font-semibold text-gray-800">
      Hakan Travel
    </span>{" "}
    — bu yangi avlod milliy turoperatori bo‘lib, 2024-yilda tashkil etilgan va
    allaqachon minglab sayohatchilar uchun ishonchli hamkor sifatida tanilgan.
  </p>

  <p className="
    text-lg md:text-xl
    text-gray-500
    max-w-3xl
    leading-relaxed
  ">
    Biz turizm sohasiga zamonaviy yechimlarni joriy etamiz va sayohatni
    qulay, hamyonbop va chinakam unutilmas qilamiz.
  </p>

</div>

      {/* TEAM IMAGE */}
      <div className="rounded-3xl overflow-hidden shadow-xl mb-16 mt-4">
        <img
          src="https://i.pinimg.com/1200x/ba/b1/f6/bab1f62d12ea33d37b49c43fbffa2752.jpg"
          alt="Our team"
          className="w-full h-[500px] object-cover"
        />
      </div>

      {/* STATS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-green-100">
          <h3 className="font-bold mb-2">
            O‘z aviakompaniyasiga ega yagona turoperator
          </h3>
          <p className="text-gray-600 text-sm">
            Moslashuvchan narxlar va yuqori sifatli xizmat ko‘rsatish.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-green-100">
          <h3 className="font-bold mb-2">
            2024 yilda 50 000+ mijoz
          </h3>
          <p className="text-gray-600 text-sm">
            O‘zbekistonlik sayohatchilar biz bilan dunyoni kashf etishdi.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-green-100">
          <h3 className="font-bold mb-2">
            20+ mashhur yo‘nalishlar
          </h3>
          <p className="text-gray-600 text-sm">
            OAV, Misr, Ummon, Gruziya va boshqa davlatlar.
          </p>
        </div>

      </div>

      {/* EXTRA TEXT */}
      <div className="max-w-4xl space-y-6 text-gray-600 leading-relaxed">
        <p>
          Biz ishonamizki, har bir muvaffaqiyatli sayohat ortida kuchli jamoa turadi.
          Centrum Holidays’da faqat o‘z ishiga mehr qo‘ygan mutaxassislar ishlaydi.
        </p>

        <p>
          <span className="font-semibold text-gray-800">
            Centrum Holidays
          </span>{" "}
          — bu ishonchlilik, xizmat ko‘rsatish sifati va sayohatga bo‘lgan muhabbatdir.
        </p>
      </div>

    </div>
  )
}

export default AboutPage