/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  animation: {
    text: 'text 5s ease infinite',    
  },
  keyframes: {
    text: {
      '0%, 100%': {
        'background-size': '200% 200%',
        'background-position': 'left center'
      },
      '50%': {
        'background-size': '200% 200%', 
        'background-position': 'right center'
      }
    }
  },
  plugins: [
    require('@animxyz/tailwind'),
  ],
}