/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      'white':'#fff',
      'helper': '#FF6F00',
      'helper2':'#6A1B9A',
      'black':'#000000',
      'gray':'#808080',
      'bg':'#303030'
    },
  },
  plugins: [],
}