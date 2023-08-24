/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('/src/Assets/neongrad1.jpg')",
        'space': "url('/src/Assets/space.jpg')",
      }
    },
  },
  plugins: [],
}

