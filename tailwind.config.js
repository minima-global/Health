/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../public/assets/abstract-3840x2160-colorful-4k-24048.jpg')",
      },
      colors: {
        'grey80': '#A7A7B0',
        'contrast1': '#17191C',
        'contrast1.5': '#1F2327',
        'contrast2': '#282B2E',
      },
    },
  },
  plugins: [],
}

