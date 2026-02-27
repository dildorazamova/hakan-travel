import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"

function ContactSection() {
  const form = useRef()
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(null) // success | error | null

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

        setTimeout(() => {
          setAlert(null)
        }, 3000)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
        setAlert("error")

        setTimeout(() => {
          setAlert(null)
        }, 3000)
      })
  }

  return (
    <>
      {/* 🔥 TOP ALERT */}
      {alert === "success" && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 
                        bg-green-500 text-white px-6 py-3 
                        rounded-xl shadow-lg z-50 animate-bounce">
          ✅ Ma’lumot muvaffaqiyatli yuborildi!
        </div>
      )}

      {alert === "error" && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 
                        bg-red-500 text-white px-6 py-3 
                        rounded-xl shadow-lg z-50 animate-bounce">
          ❌ Xatolik yuz berdi!
        </div>
      )}

      <section className="px-6 mt-24">
        <div className="max-w-7xl mx-auto bg-gray-100 rounded-3xl p-10 border">

          <h2 className="text-3xl font-bold mb-8">
            Biz bilan bog‘laning
          </h2>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
          >

            <input
              type="text"
              name="user_name"
              placeholder="Ismingiz"
              required
              className="border rounded-full px-5 py-3 focus:ring-2 focus:ring-indigo-500"
            />

            <input
              type="text"
              name="user_phone"
              placeholder="Telefon"
              required
              className="border rounded-full px-5 py-3 focus:ring-2 focus:ring-indigo-500"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
              className="border rounded-full px-5 py-3 focus:ring-2 focus:ring-indigo-500"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 
                         text-white rounded-full px-6 py-3
                         hover:scale-105 transition
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