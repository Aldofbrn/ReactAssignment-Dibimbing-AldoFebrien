/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['poppins', 'sans-serif'],
        cursive: ['Pacifico', 'Sriracha', 'cursive'],
      },

      colors: {
        primary: '#A04747',
        secondary: '#343131',
        tertiary: '#D8A25e',
      },

      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '3rem',
        },
      },
    },
  },
  plugins: [],
};
