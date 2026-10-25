/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,xaxis,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0B1320',
          red: '#E31E24',
          gray: '#161F30',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}