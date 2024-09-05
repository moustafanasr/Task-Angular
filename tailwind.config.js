/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'buttonActive':'#3E97FF',
        'buttonDisplayed':'#B0BBD5',
      }
    },
  },
  plugins: [],
}
