/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '401px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        tbMain: "#F48F4A",
        tbGray: "#F3F3F3",
        tbGreen: "#4DC247",
        tbLightGrey: "#E8E8E8",
        tbDarkGrey: "#6D6D6D",
        tbBackDrop: "rgba(0, 0, 0, 0.4)",
      },
      transitionDuration: {
        tbBase: '.25s'
      },
      fontFamily: {
        tbTitles: ['tbTitles', 'tbTitles'],
        tbCaps: ['tbCaps', 'tbCaps'],
      }
    }
  },
  plugins: [],
}