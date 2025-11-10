/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Custom Pawly palette
          // Base colors provided: 
          //  - #758A93 (slate), #ECD5BC (sand), #E9B63B (gold), #C66E52 (terra)
          50: '#FAF7F3',
          100: '#F3EBE0',
          200: '#ECD5BC', // sand
          300: '#E6C8A6',
          400: '#DEB889',
          500: '#E9B63B', // gold
          600: '#C66E52', // terra
          700: '#758A93', // slate
          800: '#5E6E75',
          900: '#47575E',
        },
      },
    },
  },
  plugins: [],
}

