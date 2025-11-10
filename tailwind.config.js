/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // <-- enable class-based dark mode
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
