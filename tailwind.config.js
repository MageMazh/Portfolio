/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#222831',
        primary: '#00ADB5',
        secondary: '#393E46',
        white: '#EEEEEE',
      },
    },
  },
  plugins: [],
}

