/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'md': '0 0 5px rgba(0, 0, 0, 0.1)',
        'lg': '0 0 8px 0 rgba(0, 0, 0, 0.1)'
      }
    },
  },
  plugins: [],
}