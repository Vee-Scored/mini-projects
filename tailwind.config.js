/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage : {
        'tick' : "url('./images/check-solid(1).svg')"
      }
    },
  },
  plugins: [],
}

