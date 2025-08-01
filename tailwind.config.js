/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-red': '#DB2F2F',
        'brand-white': '#FFFFFF',
        'brand-black': '#000000',
        'brand-green': '#4B573F',
        'brand-gray': {
          DEFAULT: '#656565',
          light: '#C4C4C4',
          'light-2': '#C7C7C7',
          lighter: '#D9D9D9',
          medium: '#5E5E5E',
          dark: '#1F1F1F',
          darker: '#1C1C1C',
        }
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        gilroy: ['Gilroy', 'sans-serif'], // Assuming Gilroy is available or will be added
      },
    },
  },
  plugins: [],
}