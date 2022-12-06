/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "purple-300": "#9965f4",
        "purple-500": "#6002ee",
        "purple-700": "#3d00e0"
      }
    },
  },
  plugins: [],
}
