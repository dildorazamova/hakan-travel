import { useEffect } from "react"

function GoogleTranslate() {
  useEffect(() => {
    const script = document.createElement("script")
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    script.async = true
    document.body.appendChild(script)

    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "uz",
            includedLanguages: "uz,ru,en",
            autoDisplay: false,
          },
          "google_translate_element"
        )
      }
    }
  }, [])

  return (
    <div
      id="google_translate_element"
      style={{ display: "none" }}
    ></div>
  )
}

export default GoogleTranslate