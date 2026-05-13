import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { FaPhoneAlt, FaTelegramPlane, FaMapMarkerAlt, FaClock, FaPaperPlane } from "react-icons/fa"

const contactItems = [
  {
    icon: FaPhoneAlt,
    label: "Telefon",
    value: "+998 93 217 11 17",
    href: "tel:+998932171117"
  },
  {
    icon: FaTelegramPlane,
    label: "Telegram",
    value: "@hokantravel",
    href: "https://t.me/hokantravel"
  },
  {
    icon: FaMapMarkerAlt,
    label: "Manzil",
    value: "Toshkent, O'zbekiston",
    href: null
  },
  {
    icon: FaClock,
    label: "Ish vaqti",
    value: "Du–Sha: 9:00 – 18:00",
    href: null
  }
]

function ContactSection() {
  const form = useRef()
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(null)

  const sendEmail = (e) => {
    e.preventDefault()
    setLoading(true)
    setAlert(null)

    emailjs
      .sendForm("service_nqqa99d", "template_met7mto", form.current, "khtJgdSqcvzDnO7pr")
      .then(() => {
        setLoading(false)
        setAlert("success")
        form.current.reset()
        setTimeout(() => setAlert(null), 4000)
      })
      .catch(() => {
        setLoading(false)
        setAlert("error")
        setTimeout(() => setAlert(null), 4000)
      })
  }

  return (
    <>
      {/* Alert */}
      {alert && (
        <div className={`fixed top-6 left-1/2 -translate-x-1/2 z-50
                         flex items-center gap-3 px-6 py-3.5 rounded-2xl shadow-2xl
                         text-white text-sm font-medium
                         transition-all duration-300
                         ${alert === "success" ? "bg-green-600" : "bg-red-500"}`}>
          {alert === "success"
            ? "✅ Xabar muvaffaqiyatli yuborildi!"
            : "❌ Xatolik yuz berdi, qayta urinib ko'ring"}
        </div>
      )}

      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-10">
            <p className="text-green-600 text-sm font-semibold uppercase tracking-wider mb-2">
              Muloqot
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Biz bilan bog'laning
            </h2>
            <p className="text-gray-500 mt-2 text-sm sm:text-base max-w-md mx-auto">
              Savollaringiz bormi? Bizga xabar qoldiring, tez orada javob beramiz.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

            {/* Left: contact info */}
            <div className="lg:col-span-2 bg-green-700 rounded-2xl p-6 sm:p-8 text-white">
              <h3 className="text-xl font-bold mb-2">Aloqa ma'lumotlari</h3>
              <p className="text-green-200 text-sm mb-8">
                Har qanday savolingiz uchun murojaat qilishingiz mumkin.
              </p>

              <div className="space-y-5">
                {contactItems.map((item, i) => {
                  const Icon = item.icon
                  const content = (
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon size={15} />
                      </div>
                      <div>
                        <p className="text-green-200 text-xs font-medium uppercase tracking-wider mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-white font-semibold text-sm">{item.value}</p>
                      </div>
                    </div>
                  )

                  return item.href ? (
                    <a key={i} href={item.href} target="_blank" rel="noopener noreferrer"
                       className="block hover:opacity-80 transition-opacity">
                      {content}
                    </a>
                  ) : (
                    <div key={i}>{content}</div>
                  )
                })}
              </div>

              {/* Decorative circles */}
              <div className="relative mt-10 h-24 overflow-hidden">
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-white/10 rounded-full" />
                <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-white/10 rounded-full" />
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-3 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <form ref={form} onSubmit={sendEmail} className="space-y-4">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                      Ismingiz
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      placeholder="Ism Familiya"
                      required
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm
                                 focus:ring-2 focus:ring-green-400/30 focus:border-green-400
                                 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                      Telefon
                    </label>
                    <input
                      type="text"
                      name="user_phone"
                      placeholder="+998 __ ___ __ __"
                      required
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm
                                 focus:ring-2 focus:ring-green-400/30 focus:border-green-400
                                 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="email@example.com"
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm
                               focus:ring-2 focus:ring-green-400/30 focus:border-green-400
                               outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Xabar
                  </label>
                  <textarea
                    name="message"
                    placeholder="Savolingiz yoki xabaringizni yozing..."
                    required
                    rows={5}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm
                               focus:ring-2 focus:ring-green-400/30 focus:border-green-400
                               outline-none resize-none transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2
                             bg-green-600 hover:bg-green-700 text-white
                             rounded-xl py-3.5 font-semibold text-sm
                             transition-all duration-200
                             hover:shadow-lg hover:shadow-green-600/25
                             disabled:opacity-60 disabled:cursor-not-allowed
                             active:scale-[0.99]"
                >
                  <FaPaperPlane size={14} />
                  {loading ? "Yuborilmoqda..." : "Xabar yuborish"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactSection
