/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      primary: "#16A34A",
      primaryDark: "#15803D",
      accent: "#F59E0B",
      lightBg: "#F0FDF4",
    },
    },
  },
  plugins: [],
}

