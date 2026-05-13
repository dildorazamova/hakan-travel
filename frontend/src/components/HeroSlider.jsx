import { useEffect, useState, useCallback, useRef } from "react"
import { FaChevronLeft, FaChevronRight, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import registan from "../assets/registon.jpg"
import ark from "../assets/ark.jpg"
import chor from "../assets/chorminor.jpg"
import ichan from "../assets/ichan qala.jpeg"
import shohizinda from "../assets/shohizinda.jpg"

const slides = [
  {
    title: "Registon",
    subtitle: "Samarqand",
    description: "Temuriylar davrining eng buyuk me'moriy majmuasi",
    image: registan,
    tag: "Tarixiy meros",
    color: "from-amber-900/30"
  },
  {
    title: "Ichan-Qal'a",
    subtitle: "Xiva",
    description: "UNESCO merosi ro'yxatiga kiritilgan qadimiy ichki shahar",
    image: ichan,
    tag: "UNESCO merosi",
    color: "from-blue-900/30"
  },
  {
    title: "Ark Qal'asi",
    subtitle: "Buxoro",
    description: "Buxoro amirlarining qadimiy qarorgohi",
    image: ark,
    tag: "Qadimiy qal'a",
    color: "from-orange-900/30"
  },
  {
    title: "Shohizinda",
    subtitle: "Samarqand",
    description: "Muqaddas maqbaralar majmuasi",
    image: shohizinda,
    tag: "Ziyorat joyi",
    color: "from-teal-900/30"
  },
  {
    title: "Chor Minor",
    subtitle: "Buxoro",
    description: "To'rt minorali noyob me'moriy yodgorlik",
    image: chor,
    tag: "Me'moriy yodgorlik",
    color: "from-purple-900/30"
  }
]

const INTERVAL = 5000

function HeroSlider() {
  const navigate = useNavigate()
  const [current, setCurrent] = useState(0)
  const [running, setRunning] = useState(true)

  const goTo = useCallback((index) => {
    if (index === current) return
    setCurrent(index)
  }, [current])

  const goNext = useCallback(() => goTo((current + 1) % slides.length), [current, goTo])
  const goPrev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo])

  // Auto-play
  useEffect(() => {
    if (!running) return
    const timer = setInterval(goNext, INTERVAL)
    return () => clearInterval(timer)
  }, [running, goNext])

  const slide = slides[current]

  return (
    <section
      className="relative w-full overflow-hidden mt-16 md:mt-[100px]"
      style={{ height: "clamp(500px, 65vh, 700px)" }}
      onMouseEnter={() => setRunning(false)}
      onMouseLeave={() => setRunning(true)}
    >

      {/* ── BACKGROUND IMAGES ── */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${s.image})`,
            opacity: i === current ? 1 : 0,
            transform: i === current ? "scale(1.06)" : "scale(1)",
            transition: "opacity 1s ease, transform 6s ease",
            willChange: "opacity, transform"
          }}
        />
      ))}

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />

      {/* ── MAIN CONTENT ── */}
      <div className="relative h-full flex flex-col justify-center px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="max-w-2xl">

          {/* Tag pill */}
          <div
            key={`tag-${current}`}
            className="inline-flex items-center gap-2 mb-4 animate-fade-in-left"
            style={{ animationDelay: "0.05s" }}
          >
            <span className="h-px w-10 bg-green-400 inline-block" />
            <span className="text-green-300 text-xs font-bold uppercase tracking-widest">
              {slide.tag}
            </span>
          </div>

          {/* Title */}
          <h1
            key={`title-${current}`}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white
                       leading-[0.95] tracking-tight mb-2 animate-fade-in-left"
            style={{ animationDelay: "0.12s" }}
          >
            {slide.title}
          </h1>

          <h2
            key={`sub-${current}`}
            className="text-lg sm:text-xl lg:text-2xl font-light text-green-300 mb-5 animate-fade-in-left"
            style={{ animationDelay: "0.18s" }}
          >
            — {slide.subtitle}
          </h2>

          {/* Description */}
          <div
            key={`desc-${current}`}
            className="flex items-start gap-3 mb-7 animate-fade-in-up"
            style={{ animationDelay: "0.24s" }}
          >
            <FaMapMarkerAlt className="text-green-400 mt-0.5 flex-shrink-0" size={15} />
            <p className="text-gray-200 text-sm sm:text-base font-light leading-relaxed">
              {slide.description}
            </p>
          </div>

          {/* CTA */}
          <button
            key={`cta-${current}`}
            onClick={() => navigate("/tours")}
            className="group inline-flex items-center gap-3 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <span className="bg-green-500 hover:bg-green-400 text-white
                             px-6 py-3 rounded-xl font-semibold text-sm
                             transition-all duration-200 hover:shadow-lg hover:shadow-green-500/40">
              Turlarni ko'rish
            </span>
            <span className="w-10 h-10 border border-white/30 hover:border-green-400 rounded-xl
                             flex items-center justify-center text-white
                             transition-all duration-200 group-hover:bg-green-500/20">
              <FaArrowRight size={14} />
            </span>
          </button>
        </div>
      </div>

      {/* ── LEFT / RIGHT ARROWS ── */}
      <button
        onClick={goPrev}
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2
                   w-11 h-11 rounded-xl bg-white/10 hover:bg-white/25
                   backdrop-blur-sm border border-white/15
                   text-white flex items-center justify-center
                   transition-all duration-200 hover:scale-110 z-10"
      >
        <FaChevronLeft size={15} />
      </button>

      <button
        onClick={goNext}
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2
                   w-11 h-11 rounded-xl bg-white/10 hover:bg-white/25
                   backdrop-blur-sm border border-white/15
                   text-white flex items-center justify-center
                   transition-all duration-200 hover:scale-110 z-10"
      >
        <FaChevronRight size={15} />
      </button>

      {/* ── THUMBNAIL STRIP ── */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        {/* Gradient fade into thumbnails */}
        <div className="h-24 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

        <div className="bg-black/50 backdrop-blur-md border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-stretch gap-0 overflow-x-auto scrollbar-hide">
              {slides.map((s, i) => {
                const active = i === current
                return (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`relative flex-shrink-0 flex items-center gap-3 px-4 py-3 sm:py-4
                                border-t-2 transition-all duration-300 text-left group
                                ${active
                                  ? "border-green-400"
                                  : "border-transparent hover:border-white/30"
                                }`}
                  >
                    {/* Thumbnail image */}
                    <div className={`relative w-12 h-9 sm:w-16 sm:h-11 rounded-lg overflow-hidden
                                     flex-shrink-0 transition-all duration-300
                                     ${active ? "ring-2 ring-green-400" : "opacity-60 group-hover:opacity-90"}`}>
                      <img
                        src={s.image}
                        alt={s.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Text */}
                    <div className="hidden sm:block">
                      <p className={`text-xs font-bold leading-tight transition-colors ${
                        active ? "text-white" : "text-gray-400 group-hover:text-gray-200"
                      }`}>
                        {s.title}
                      </p>
                      <p className={`text-xs mt-0.5 transition-colors ${
                        active ? "text-green-300" : "text-gray-500 group-hover:text-gray-400"
                      }`}>
                        {s.subtitle}
                      </p>
                    </div>

                    {/* Progress bar — CSS animation, 5s */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10">
                      {active && running && (
                        <div
                          key={`pb-${current}`}
                          className="h-full bg-green-400 animate-progress"
                          style={{ animationDuration: `${INTERVAL}ms` }}
                        />
                      )}
                    </div>
                  </button>
                )
              })}

              {/* Slide counter */}
              <div className="ml-auto flex items-center pr-2 flex-shrink-0">
                <span className="text-white/40 text-xs font-mono tabular-nums">
                  {String(current + 1).padStart(2, "0")}
                  <span className="text-white/20 mx-1">/</span>
                  {String(slides.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSlider
