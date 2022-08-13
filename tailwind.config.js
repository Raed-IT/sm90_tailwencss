/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./assets/images/sIM90.svg')",

      },
      colors: {
        main: "rgb(233, 51, 40)",
        main100: "rgba(233, 51, 40,0.5)"
      }

    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
    require('tailwindcss-rtl'),
  ],
}
