import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"

function ContactSection() {
  const form = useRef()
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(null)

  const sendEmail = (e) => {
    e.preventDefault()
    setLoading(true)
    setAlert(null)

    emailjs
      .sendForm(
        "service_nqqa99d",
        "template_met7mto",
        form.current,
        "khtJgdSqcvzDnO7pr"
      )
      .then(() => {
        setLoading(false)
        setAlert("success")
        form.current.reset()
        setTimeout(() => setAlert(null), 3000)
      })
      .catch(() => {
        setLoading(false)
        setAlert("error")
        setTimeout(() => setAlert(null), 3000)
      })
  }

  return (
    <>
      {/* ALERT */}
      {alert && (
        <div className={`fixed top-6 left-1/2 -translate-x-1/2 
                         px-6 py-3 rounded-xl shadow-xl z-50
                         text-white transition-all duration-300
                         ${alert === "success" ? "bg-green-500" : "bg-red-500"}`}>
          {alert === "success"
            ? "✅ Ma’lumot muvaffaqiyatli yuborildi!"
            : "❌ Xatolik yuz berdi!"}
        </div>
      )}

      <section className="mt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto 
                        bg-gradient-to-br from-gray-50 to-gray-100
                        rounded-3xl p-6 sm:p-10 
                        shadow-xl border border-gray-200
                        transition-all duration-500 hover:shadow-2xl">

          <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-center">
            Biz bilan bog‘laning
          </h2>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >

            {/* NAME */}
            <input
              type="text"
              name="user_name"
              placeholder="Ismingiz"
              required
              className="w-full border rounded-2xl px-5 py-4 
                         focus:ring-2 focus:ring-indigo-500 
                         outline-none transition"
            />

            {/* PHONE */}
            <input
              type="text"
              name="user_phone"
              placeholder="Telefon"
              required
              className="w-full border rounded-2xl px-5 py-4 
                         focus:ring-2 focus:ring-indigo-500 
                         outline-none transition"
            />

            {/* EMAIL */}
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
              className="md:col-span-2 w-full border rounded-2xl px-5 py-4 
                         focus:ring-2 focus:ring-indigo-500 
                         outline-none transition"
            />

            {/* MESSAGE */}
            <textarea
              name="message"
              placeholder="Savolingiz yoki xabaringizni yozing..."
              required
              className="md:col-span-2 w-full border rounded-2xl px-5 py-4 
                         focus:ring-2 focus:ring-indigo-500 
                         outline-none resize-none h-36 transition"
            />

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="md:col-span-2 
                         bg-gradient-to-r from-indigo-600 to-purple-600
                         text-white rounded-2xl py-4 text-lg font-semibold
                         transition-all duration-300
                         hover:shadow-xl hover:-translate-y-1
                         disabled:opacity-50"
            >
              {loading ? "Yuborilmoqda..." : "Yuborish"}
            </button>

          </form>
        </div>
      </section>
    </>
  )
}

export default ContactSection