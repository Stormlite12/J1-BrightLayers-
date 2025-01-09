/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm':'500px',
      'md': '720px',
      'lg': '1024px',
      'xl': '1440px',
      'mac': '1280px'
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
  plugins: [ require('tailwind-scrollbar-hide')],
}

