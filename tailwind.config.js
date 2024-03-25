/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      translate:{
        'negative':'-50%'
      },
      colors:{
        Main: '#042754',
      }
    },
  },
  plugins: [],
}

