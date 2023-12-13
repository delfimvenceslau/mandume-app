/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/screens/**/*.tsx",
    "./src/components/**/*.tsx"
],
  theme: {
    extend: {
      colors:{
        primary:"#ff0000",
        secondary: "#35ff20",
        white:"#FFFFFF",


      }
    },
  },
  plugins: [],
}

