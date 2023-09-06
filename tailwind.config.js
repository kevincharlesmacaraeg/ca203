/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "title": ['area-extended']
      },
      colors: {
        'lightBlue': "#00f6ff",
        'pink': "#f600ff",
        'yellow': "#ffe400",
        'darkBlue': "#2d387d",
        'white': "#ffffff",
        'radial': "radial-gradient(circle, rgba(0,246,255,1) 3%, rgba(255,228,0,1) 35%, rgba(246,0,255,1) 36%, rgba(0,246,255,1) 64%, rgba(45,56,125,1) 72%, rgba(36,36,36,1) 79%)"
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}