/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xl': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      fontFamily: {
        title: ["Lato"],
        pSans: ["Public Sans"],
        inter: ["Inter"],
        archivo: ["Archivo"]
      }
    },
  },
  plugins: [],
}

