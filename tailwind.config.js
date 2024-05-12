/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'navBarImg':'url(https://i.postimg.cc/653yThDp/cool-background.png)'
      }
    },
  },
  plugins: [
    require('daisyui')
  ],
  daisyui:{
    themes:false,
    darkTheme:"light"
  }
}

