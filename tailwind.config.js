/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        tab: {
          max: '768px'
        },
        mob: {
          max: '576px'
        }
      },
      colors: {
        green: '#3b5d50',
        lightgreen: '#339059',
        yellow: '#ecd637',
        white: '#ffffff',
        lightgray: '#ffffff80',
        lightblack: '#242424',
      },
    },
  },
  plugins: [],
}