/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tbMain: "#F48F4A",
        tbGray: "#F3F3F3",
        tbGreen:"#4DC247",
        tbLightGrey:"#E8E8E8",
      },
      transitionDuration: {
        tbBase: '.25s'
      },
      fontFamily: {
        tbTitles: ['tbTitles', 'tbTitles'],
        tbCaps: ['tbCaps', 'tbCaps'],
      },

    }
  },
  plugins: [],
}