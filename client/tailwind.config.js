/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{html,js,jsx}"],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primaryBg: '#020015',
        primaryText: '#E9E4E0',
        secondaryBg: '#251C3B',
        secondaryBg2: '#170F24',
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
