const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'aclonica': ['Aclonica', ...defaultTheme.fontFamily.sans],
        'belleza': ['Belleza', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}