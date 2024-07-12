/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'proxima': ['Proxima Nova Condensed', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        'darkblack': '#262626'
      }
    },
  },
  plugins: [],
}