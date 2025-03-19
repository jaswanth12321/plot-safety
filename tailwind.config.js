/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-150px * 6 - 3rem * 6))' }
        }
      },
      animation: {
        'scroll': 'scroll 25s linear infinite'
      }
    },
  },
  plugins: [],
} 