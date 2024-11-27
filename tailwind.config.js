/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '399px',
      sm: '599px',
      md: '799px',
      lg: '999px',
      xl: '1499px',
    },
    colors: {
      'black': '#23262F',
      'blue': '#5F259E'
    },
    fontFamily: {
      poppins: ["poppins", "sans sarif"]
    },
    extend: {
      backgroundImage: {
        'wrapper': "url('/src/assets/wrapper.png')"
      }
    }
  },
  plugins: [],
}