/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.js",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        headerColor:'#170f54',
        headerColorLight: '#282354'
      },
      fontFamily: {
        logo: ["Rubik Doodle Shadow"],
        title:["Titillium Web"]
      }
    },
  },
  plugins: [],
}

