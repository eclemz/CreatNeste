/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      screens: {
        lt: { max: '1279px', min: '768px' }
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}

