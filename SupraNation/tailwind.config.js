/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'secondary' : '#31363F',
        'background' : '#000000',
        'shadow': '#76ABAE',
        'font' : '#ffffff'
      }
    },
  },
  plugins: [],
}